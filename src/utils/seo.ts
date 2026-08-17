const SITE_URL = "https://os.inled.es";
const LOGO_URL = "https://hosted.inled.es/pulsar-logo-simple-sf.png";
const OG_IMAGE = "https://os.inled.es/demopear1.png";

export const SEO = {
  site: {
    name: "Pulsar OS",
    url: SITE_URL,
    logo: LOGO_URL,
    image: OG_IMAGE,
  },
  pages: {
    index: {
      title: "Pulsar OS — The True Replacement for Mac and Windows",
      description:
        "Linux-based OS replicating macOS and Windows experience. Open-source, community-driven, zero telemetry, fully auditable.",
      keywords:
        "linux, macos replacement, windows alternative, open source operating system, pulsar os, pear edition, wintux, auditable linux",
      og: {
        title: "Pulsar OS — The True Replacement for Mac and Windows",
        description:
          "Linux-based OS replicating macOS and Windows experience. Open-source, community-driven, zero telemetry, fully auditable.",
      },
    },
    "pear-edition": {
      title: "Pear Edition — macOS-Inspired Linux Desktop | Pulsar OS",
      description:
        "A polished macOS-inspired desktop built on Arch Linux and Debian. Zero telemetry, fully auditable, familiar workflow.",
      keywords:
        "macos linux, macos clone, pear edition, arch linux desktop, debian desktop, linux macos alternative, auditable linux",
      og: {
        title: "Pear Edition — macOS-Inspired Linux Desktop",
        description:
          "A polished macOS-inspired desktop built on Arch Linux and Debian. Zero telemetry, fully auditable, familiar workflow.",
      },
    },
    iso: {
      title: "Download the ISO — Pulsar OS",
      description:
        "Minimum requirements, editions, boot variants, installers and flashing instructions for Pulsar OS. Read this before downloading the ISO.",
      keywords:
        "pulsar os iso, download linux iso, pulsar os download, pear edition iso, linux flash usb, pulsar os requirements",
      og: {
        title: "Download the ISO — Pulsar OS",
        description:
          "Minimum requirements, editions, boot variants, installers and flashing instructions for Pulsar OS. Read this before downloading the ISO.",
      },
    },
    community: {
      title: "Community — Pulsar OS",
      description:
        "Join the Pulsar OS community. Report bugs, share ideas, ask for help, and help us build an auditable, community-driven operating system.",
      keywords:
        "pulsar os community, linux community, open source community, report bug linux, linux ideas, contribute to pulsar os",
      og: {
        title: "Community — Pulsar OS",
        description:
          "Join the Pulsar OS community. Report bugs, share ideas, ask for help, and help us build an auditable, community-driven operating system.",
      },
    },
    help: {
      title: "Help & Documentation — Pulsar OS",
      description:
        "Guides to install, use and contribute to Pulsar OS. From flashing the ISO to migrating from macOS, everything you need to get started.",
      keywords:
        "pulsar os help, pulsar os docs, pulsar os install, pulsar os guide, linux documentation, install pulsar os",
      og: {
        title: "Help & Documentation — Pulsar OS",
        description:
          "Guides to install, use and contribute to Pulsar OS. From flashing the ISO to migrating from macOS, everything you need to get started.",
      },
    },
    resources: {
      title: "Resources — Pulsar OS",
      description:
        "Download banners, logos and media assets to share Pulsar OS on social media. Tag us and get on the Wall of Fame.",
      keywords:
        "pulsar os resources, pulsar os banners, pulsar os logos, share pulsar os, social media assets",
      og: {
        title: "Resources — Pulsar OS",
        description:
          "Download banners, logos and media assets to share Pulsar OS on social media.",
      },
    },
  },
} as const;

export type PageKey = keyof typeof SEO.pages;
