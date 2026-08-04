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

The `/community` page syncs errors, ideas and help requests from the GitHub
project `https://github.com/orgs/Inled-Pulsar-OS/projects/1` via the loader in
`src/lib/github-project-loader.ts`. Categorization is driven by GitHub labels:

- `bug` → errors section
- `idea` → ideas section
- `help-wanted` (or `help wanted`) → help section

When adding or editing project items, always set one of these labels and the
"Status" project field. Without a `GITHUB_TOKEN` (local builds) the loader
logs a warning and the page falls back to the markdown files in
`src/data/community/`; edits there will be overwritten on the next synced
deploy, so keep the GitHub project as the source of truth.
