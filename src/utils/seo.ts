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
    contribute: {
      title: "Contribute to Pulsar OS — Open Source Community",
      description:
        "Join the Pulsar OS community. Contribute code, docs, translations, or design. Open-source and community-driven.",
      keywords:
        "pulsar os contribute, open source contribution, linux community, github contribution, developer community",
      og: {
        title: "Contribute to Pulsar OS",
        description:
          "Join the Pulsar OS community. Contribute code, docs, translations, or design. Open-source and community-driven.",
      },
    },
  },
} as const;

export type PageKey = keyof typeof SEO.pages;
