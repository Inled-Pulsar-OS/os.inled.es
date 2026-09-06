const SITE_URL = "https://os.inled.es";
const LOGO_URL = "https://hosted.inled.es/pulsar-logo-simple-sf.png";
const OG_IMAGE = "https://os.inled.es/demopear1.png";

// Core message, in priority order:
// 1. Easy Linux: you already know how to use it, because each edition
//    copies the flow of a system you already use.
// 2. Total freedom: the freedom only Linux gives, no licences or fees.
// 3. Genuinely innovative: not a theme or a repackaged desktop — the whole
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
      title:
        "Pulsar OS - Easy Linux that works like the system you already know",
      description:
        "Pulsar OS is easy Linux: each edition copies the flow of macOS, Windows or your TV, so you already know how to use it. Not just a theme: the whole flow, with new tools like session restore and Sayri. Free, with the total freedom of Linux.",
      keywords:
        "Pulsar OS, easy Linux, Linux for beginners, Linux that feels like Mac, Linux that feels like Windows, free operating system, Linux freedom, innovative Linux, session restore Linux, Sayri AI assistant, Bitten Fruit, open source",
      og: {
        title: "Pulsar OS - Easy Linux, total freedom",
        description:
          "Linux so easy you already know how to use it: each edition copies the whole flow of the system you know — not just a theme — with new tools like session restore and Sayri. Free.",
      },
    },
    "bitten-fruit": {
      title:
        "Bitten Fruit - Easy Linux that works like macOS, free with total freedom | Pulsar OS",
      description:
        "Bitten Fruit is easy Linux for Mac users: same desktop, same flow you already know — the whole flow, not just a theme — plus new tools like session restore, the Sayri AI assistant and macOS-style window management. Free with the total freedom of Linux.",
      keywords:
        "Bitten Fruit, easy Linux for Mac users, switch from Mac to Linux, macOS-style Linux, free Mac alternative, Linux freedom, no relearning, Sayri, session restore Linux, macOS window management, innovative Linux, Pulsar OS",
      og: {
        title: "Bitten Fruit - Linux so easy you already know it",
        description:
          "The Mac flow you already know — the whole flow, not just a theme — plus new tools like session restore and Sayri. Free with the total freedom of Linux.",
      },
    },
    "new-to-linux": {
      title:
        "New to Linux? What changes and how to use Pulsar OS - Pulsar OS",
      description:
        "Coming from macOS or Windows? See what actually changes under the hood in plain language, and learn to use Pulsar OS in minutes: apps, updates, files, keyboard and rescue tools. Nothing to relearn by heart.",
      keywords:
        "new to Linux, Linux for beginners, switch from Mac to Linux, switch from Windows to Linux, what is Linux, Linux vs Windows, Linux vs macOS, easy Linux, Pulsar OS guide, first time Linux",
      og: {
        title: "New to Linux? Start without relearning everything",
        description:
          "What changes under the hood, explained simply, and how to drive Pulsar OS from day one. For people coming from macOS or Windows.",
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
    community: {
      title: "Pulsar OS community - bugs, ideas, tasks and roadmap",
      description:
        "Join the community behind easy Linux with total freedom. Report bugs, share ideas, pick up tasks. Friendly, no gatekeeping, English and Spanish.",
      keywords:
        "Pulsar OS community, Linux community, report bug Linux, share ideas Linux, contribute to open source, community-driven Linux, Bitten Fruit community",
      og: {
        title: "Pulsar OS community - bugs, ideas, tasks and roadmap",
        description:
          "Join the Pulsar OS community. Report bugs, share ideas, pick up tasks, and help build auditable, community-driven Linux editions.",
      },
    },
    help: {
      title: "Help & Documentation - Pulsar OS",
      description:
        "Guides to install, use and contribute to Pulsar OS: easy Linux with the total freedom of Linux. From flashing the ISO to migrating from macOS, step by step.",
      keywords:
        "Pulsar OS documentation, Bitten Fruit guide, install Pulsar OS, easy Linux guide, migrate from macOS to Linux, Pulsar OS help, Linux for beginners",
      og: {
        title: "Help & Documentation - Pulsar OS",
        description:
          "Guides to install, use and contribute to Pulsar OS. From flashing the Bitten Fruit ISO to migrating from macOS, everything you need to get started.",
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
