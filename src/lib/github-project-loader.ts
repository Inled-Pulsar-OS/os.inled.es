import type { Loader, LoaderContext } from "astro/loaders";

const GITHUB_API = "https://api.github.com/graphql";

const PROJECT_QUERY = `
  query($login: String!, $number: Int!) {
    organization(login: $login) {
      projectV2(number: $number) {
        items(first: 100) {
          nodes {
            id
            createdAt
            content {
              __typename
              ... on Issue {
                title
                url
                state
                body
                createdAt
                labels(first: 20) { nodes { name } }
              }
              ... on DraftIssue {
                title
                body
                createdAt
              }
            }
            fieldValueByName(name: "Status") {
              ... on ProjectV2ItemFieldSingleSelectValue { name }
            }
          }
        }
      }
    }
  }
`;

interface ProjectItem {
    id: string;
    category: "error" | "idea" | "help";
    title: string;
    status: string;
    date: string;
    url?: string;
    body: string;
}

const CATEGORY_LABELS: Record<string, "error" | "idea" | "help"> = {
    bug: "error",
    error: "error",
    idea: "idea",
    enhancement: "idea",
    "help-wanted": "help",
    "help wanted": "help",
    "good first issue": "help",
};

function categorize(labels: string[]): "error" | "idea" | "help" | undefined {
    const found = labels.find((label) => CATEGORY_LABELS[label]);
    return found ? CATEGORY_LABELS[found] : undefined;
}

async function fetchProjectItems(
    login: string,
    number: number,
    token: string,
): Promise<ProjectItem[]> {
    const response = await fetch(GITHUB_API, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: PROJECT_QUERY,
            variables: { login, number },
        }),
    });

    if (!response.ok) {
        throw new Error(`GitHub API responded ${response.status}`);
    }

    const json = (await response.json()) as {
        errors?: Array<{ message: string }>;
        data?: {
            organization?: {
                projectV2?: {
                    items?: { nodes?: Array<Record<string, any>> };
                };
            };
        };
    };

    if (json.errors?.length) {
        throw new Error(json.errors.map((e) => e.message).join("; "));
    }

    const nodes = json.data?.organization?.projectV2?.items?.nodes ?? [];
    const items: ProjectItem[] = [];

    for (const node of nodes) {
        const content = node?.content;
        if (!content) continue;

        const labels: string[] =
            content.labels?.nodes?.map((l: { name?: string }) =>
                (l.name ?? "").toLowerCase(),
            ) ?? [];

        const category = categorize(labels);
        if (!category) continue;

        const statusValue: string | undefined =
            node.fieldValueByName?.name ?? undefined;
        const status =
            statusValue ??
            (content.state === "CLOSED" ? "Done" : "Open");

        items.push({
            id: node.id,
            category,
            title: content.title ?? "Untitled",
            status,
            date: content.createdAt ?? node.createdAt ?? new Date().toISOString(),
            url: content.url ?? undefined,
            body: content.body ?? "",
        });
    }

    return items;
}

export function githubProjectLoader(options: {
    org: string;
    projectNumber: number;
}): Loader {
    const { org, projectNumber } = options;

    return {
        name: "github-project",
        async load(context: LoaderContext) {
            const { store, logger, renderMarkdown, parseData, generateDigest } =
                context;

            const token = process.env.GITHUB_TOKEN;
            if (!token) {
                logger.info(
                    "GITHUB_TOKEN not set — skipping GitHub project sync, using local markdown",
                );
                return;
            }

            let items: ProjectItem[];
            try {
                items = await fetchProjectItems(org, projectNumber, token);
            } catch (error) {
                logger.warn(
                    `Failed to fetch GitHub project: ${(error as Error).message} — using local markdown`,
                );
                return;
            }

            logger.info(`Synced ${items.length} items from GitHub project #${projectNumber}`);

            for (const item of items) {
                const data = await parseData({
                    id: item.id,
                    data: {
                        category: item.category,
                        title: item.title,
                        status: item.status,
                        date: item.date,
                        url: item.url,
                    },
                });

                const rendered = await renderMarkdown(item.body);
                store.set({
                    id: item.id,
                    data,
                    body: item.body,
                    rendered,
                    digest: generateDigest({
                        category: item.category,
                        title: item.title,
                        status: item.status,
                        date: item.date,
                        body: item.body,
                    }),
                });
            }
        },
    };
}
