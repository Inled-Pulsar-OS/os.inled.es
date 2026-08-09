import { writeFile, mkdir, rm } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = join(__dirname, "..", "src", "data", "community");

const GITHUB_API = "https://api.github.com/graphql";

const PROJECT_QUERY = `
  query($login: String!, $number: Int!) {
    organization(login: $login) {
      projectV2(number: $number) {
        items(first: 100) {
          nodes {
            id
            content {
              __typename
              ... on Issue {
                title
                number
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

const CATEGORY_LABELS = {
    bug: "error",
    error: "error",
    idea: "idea",
    enhancement: "idea",
    "help-wanted": "help",
    "help wanted": "help",
    "good first issue": "help",
};

const CATEGORY_DIRS = { error: "errors", idea: "ideas", help: "help" };

const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) {
    console.error("GITHUB_TOKEN is not set");
    process.exit(1);
}

function categorize(labels) {
    for (const label of labels) {
        if (CATEGORY_LABELS[label]) return CATEGORY_LABELS[label];
    }
    return undefined;
}

function slugify(title) {
    return (
        title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "")
            .slice(0, 80) || "item"
    );
}

function escapeFrontmatter(value) {
    return String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

async function fetchProjectItems() {
    const response = await fetch(GITHUB_API, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: PROJECT_QUERY,
            variables: { login: "Inled-Pulsar-OS", number: 1 },
        }),
    });

    if (!response.ok) {
        throw new Error(`GitHub API responded ${response.status}`);
    }

    const json = await response.json();
    if (json.errors?.length) {
        throw new Error(json.errors.map((e) => e.message).join("; "));
    }

    const nodes =
        json.data?.organization?.projectV2?.items?.nodes ?? [];
    const items = [];

    for (const node of nodes) {
        const content = node?.content;
        if (!content) continue;

        const labels =
            content.labels?.nodes?.map((l) =>
                (l.name ?? "").toLowerCase(),
            ) ?? [];

        const category = categorize(labels);
        if (!category) continue;

        const status =
            node.fieldValueByName?.name ??
            (content.state === "CLOSED" ? "Done" : "Open");

        if (status === "Completados" || status === "Done") continue;

        items.push({
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

async function main() {
    const items = await fetchProjectItems();
    console.log(`Fetched ${items.length} categorized items from project`);

    for (const dir of Object.values(CATEGORY_DIRS)) {
        await rm(join(DATA, dir), { recursive: true, force: true });
        await mkdir(join(DATA, dir), { recursive: true });
    }

    for (const item of items) {
        const filename = `${slugify(item.title)}.md`;
        const filepath = join(DATA, CATEGORY_DIRS[item.category], filename);

        const frontmatter = [
            `---`,
            `type: "${item.category}"`,
            `title: "${escapeFrontmatter(item.title)}"`,
            `status: "${escapeFrontmatter(item.status)}"`,
            `date: ${item.date}`,
            ...(item.url ? [`url: "${item.url}"`] : []),
            `---`,
            ``,
            item.body ?? "",
            ``,
        ].join("\n");

        await writeFile(filepath, frontmatter);
    }

    console.log(`Wrote ${items.length} markdown files`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
