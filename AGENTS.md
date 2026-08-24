## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Community page data source

The `/community` page renders errors, ideas and help requests from markdown
files in `src/data/community/`. The `Sync Community Data` GitHub Action
(`.github/workflows/sync-community.yml` + `scripts/sync-community.mjs`) pulls
them from the GitHub project `https://github.com/orgs/Inled-Pulsar-OS/projects/1`
and commits the `.md` files, which Cloudflare Pages then builds. Categorization
is driven by GitHub labels:

- `bug` (or `error`) → errors section
- `idea` (or `enhancement`) → ideas section

The sync only manages the `errors/`, `ideas/`, `tasks/` and `suggestions/`
folders. The roadmap is manual and lives in `src/data/community/roadmap/` —
the sync never touches that folder, so edit those files freely.

When adding or editing project items, always set one of these labels and the
"Status" project field. To regenerate the markdown locally, run:

```
GITHUB_TOKEN=$(gh auth token) node scripts/sync-community.mjs
```
