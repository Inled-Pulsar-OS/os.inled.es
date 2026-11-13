const SITE_URL = "https://os.inled.es";
const LOGO_URL = "https://os.inled.es/pulsar-logo.png";
const OG_IMAGE = "https://os.inled.es/demopear1.png";

// Core message, in priority order:
// 1. Easy Linux: you already know how to use it, because each edition
//    copies the flow of a system you already use.
// 2. Total freedom: the freedom only Linux gives, no licences or fees.
// 3. Genuinely innovative: not a theme or a repackaged desktop, the whole
//    flow is ported and new tools are built for it (session restore, Sayri,
//    macOS-style window management). A complete OS designed for comfort.
export const SEO = {
  site: {
    name: "Pulsar OS",
    url: SITE_URL,
    logo: LOGO_URL,
    image: OG_IMAGE,
  },
  pages: {
    index: {
      title: "Pulsar OS - Easy Linux you already know - Official website",
      description:
        "Pulsar OS is easy Linux: each edition copies the flow of the system you already use. The published edition is Bitten Fruit, the macOS experience on Linux, free, with the total freedom of Linux. More editions are on their way. This is the official website.",
      keywords:
        "Pulsar OS, easy Linux, Linux for beginners, Linux that feels like Mac, Linux that feels like Windows, free operating system, Linux freedom, innovative Linux, session restore Linux, Sayri AI assistant, Bitten Fruit, open source",
      og: {
        title: "Pulsar OS - Easy Linux you already know - Official website",
        description:
          "Linux so easy you already know how to use it: the published edition is Bitten Fruit, the macOS experience on Linux. More editions on the way. Free, from the official Pulsar OS website.",
      },
    },
    "bitten-fruit": {
      title:
        "Bitten Fruit - Easy Linux that works like macOS, free with total freedom | Pulsar OS",
      description:
        "Bitten Fruit is easy Linux for Mac users: same desktop, same flow you already know, the whole flow and not just a theme, plus new tools like session restore, the Sayri AI assistant and macOS-style window management. Free with the total freedom of Linux.",
      keywords:
        "Bitten Fruit, easy Linux for Mac users, switch from Mac to Linux, macOS-style Linux, free Mac alternative, Linux freedom, no relearning, Sayri, session restore Linux, macOS window management, innovative Linux, Pulsar OS",
      og: {
        title: "Bitten Fruit - Linux so easy you already know it",
        description:
          "The Mac flow you already know, the whole flow and not just a theme, plus new tools like session restore and Sayri. Free with the total freedom of Linux.",
      },
    },
    iso: {
      title: "Download the ISO - Pulsar OS",
      description:
        "Try Pulsar OS from a USB stick with zero commitment: easy Linux that feels familiar from minute one. Free download, simple install guide and flashing instructions.",
      keywords:
        "Pulsar OS ISO, Bitten Fruit ISO, free Linux download, easy Linux install, try Linux without installing, flash USB Linux, Pulsar OS requirements",
      og: {
        title: "Download Pulsar OS - easy Linux, free to try",
        description:
          "Grab the ISO, flash a USB stick and try easy Linux with zero commitment. Completely free.",
      },
    },
    resources: {
      title: "Resources - Pulsar OS",
      description:
        "Banners, logos and media assets to share Pulsar OS: easy Linux with total freedom. Tag us and get on the Wall of Fame.",
      keywords:
        "Pulsar OS resources, Bitten Fruit assets, Pulsar OS logos, share Pulsar OS, social media assets, open source Linux branding",
      og: {
        title: "Resources - Pulsar OS",
        description:
          "Banners, logos and media assets to share Pulsar OS and Bitten Fruit on social media.",
      },
    },
  },
} as const;

export type PageKey = keyof typeof SEO.pages;
