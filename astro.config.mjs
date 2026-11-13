// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://os.inled.es",
  integrations: [
    sitemap({
      // /iso is only a redirect to downloads-os.inled.es: keep it out of the
      // sitemap so Google indexes the real pages instead.
      filter: (page) => !page.endsWith("/iso/"),
    }),
  ],
});
