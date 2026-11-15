// English copy is the source of truth for os.inled.es.
export const en = {
  meta: {
    index: {
      title: 'Pulsar OS - Easy Linux you already know - Official website',
      description:
        'Pulsar OS is easy Linux: each edition copies the flow of the system you already use. The published edition is Bitten Fruit, the macOS experience on Linux, free, with the total freedom of Linux. More editions are on their way. This is the official website.',
    },
    'bitten-fruit': {
      title:
        'Bitten Fruit - Easy Linux that works like macOS, free with total freedom | Pulsar OS',
      description:
        'Bitten Fruit is easy Linux for Mac users: same desktop, same flow you already know, the whole flow and not just a theme, plus new tools like session restore, the Sayri AI assistant and macOS-style window management. Free with the total freedom of Linux.',
    },
    resources: {
      title: 'Resources - Pulsar OS',
      description:
        'Banners, logos and media assets to share Pulsar OS: easy Linux with total freedom. Tag us and get on the Wall of Fame.',
    },
  },

  chrome: {
    skip: 'Skip to content',
    nav: {
      bittenFruit: 'Bitten Fruit',
      docs: 'Documentation',
      downloads: 'Downloads',
      resources: 'Resources',
      discord: 'Join Discord!',
      language: 'Change language',
      theme: 'Toggle light or dark theme',
      home: 'Pulsar OS home',
      primary: 'Primary',
    },
    footer: {
      aria: 'Footer navigation',
      social: 'Social',
    },
    banner: {
      text: 'We’re preparing the biggest update for Pulsar OS: version 2.0. We’ll update this website soon.',
      link: 'Join Discord to stay up to date →',
    },
  },

  index: {
    lead:
      'Easy Linux you already know. Every edition copies the flow of the system you use today, the whole flow and not just a skin, so switching costs you nothing.',
    noteHtml:
      'The published edition is <strong>Bitten Fruit</strong>, the macOS experience on Linux. Free, open source, with the full freedom of Linux.',
    ecosystem: 'Ecosystem',
    comingSoon: 'Coming soon',
    visitSite: 'Visit the official site',
    discover: 'Discover now!',
    repo: 'Go to repo (website coming soon)',
    editions: {
      bitten: { desc: 'The macOS experience on Linux.' },
      sayri: { desc: 'The AI agent with security in mind' },
      phone: { desc: 'Your phone ❤️ your PC' },
      wintux: { desc: 'The Windows flow you know, minus the nagging.' },
      tube: { desc: 'Turn an old computer into the center of the living room.' },
    },
    aboutTitle: 'One project, several editions',
    aboutText:
      'Pulsar OS is not a theme pack or a repackaged desktop. Each edition ports the whole workflow of the system it mirrors, including window management, gestures, search and backups, and adds native tools built for it, like session restore and the Sayri AI assistant. All of it free, open source and auditable.',
    sections: {
      bitten: 'What the published edition includes, and how to get it.',
      docs: 'Install guides, hardware notes and contributing docs.',
      downloads: 'ISOs, editions and install guides.',
      resources: 'Logos, banners and media assets.',
    },
  },

  bittenFruit: {
    eyebrow: 'Pulsar OS · Published edition',
    lead:
      'The macOS experience on Linux. Same desktop, same flow you already know, the whole flow and not just a theme, with the full freedom of Linux.',
    primary: 'Visit the official Bitten Fruit site',
    secondary: 'Download the ISO',
    imageAlt: 'Bitten Fruit desktop: macOS-style top bar, dock and desktop widgets',
    featuresTitle: 'What you actually get',
    features: [
      {
        title: 'The whole macOS flow',
        text: 'Top bar, dock, gestures, Finder-style file manager, Spotlight search and window management, rebuilt and not skinned.',
      },
      {
        title: 'Session restore',
        text: 'Choose “save session” when you shut down and your windows come back exactly as they were, even after a power loss.',
      },
      {
        title: 'Sayri AI assistant',
        text: 'A local-first assistant built into the desktop: connect any provider, run local models, sandboxed execution.',
      },
      {
        title: 'One app store',
        text: 'Pulsar Store bridges apt, pacman, AUR and Flathub, so you install what you want without touching a terminal.',
      },
    ],
    moreTitle: 'Keep going',
    links: {
      site: 'Features, screenshots and editions on bittenfruit.inled.es',
      docs: 'Documentation: install guides, hardware notes and contributing docs',
      downloads: 'Downloads: ISOs and install guides',
      github: 'Source code and builds on GitHub',
    },
    ctaBody: 'The edition’s full website lives at bittenfruit.inled.es.',
    ctaButton: 'Open bittenfruit.inled.es',
  },

  resources: {
    title: 'Resources',
    subtitle:
      'Logos and product demos to share Pulsar OS on social media. Every file opens on hosted.inled.es, where you can preview it and download it.',
    shareTitle: 'Help us grow',
    shareDesc:
      'If you share about Pulsar OS on social networks, we will find a way to reward your help to the project.',
    shareBtn: 'Share on social media',
    logosTitle: 'Logos',
    logosDesc: 'Transparent PNGs for covers, posts and articles.',
    demosTitle: 'Demos',
    demosDesc: 'Short clips of the features in action. Click one to preview it and grab the MP4.',
    open: 'Open',
    download: 'Download',
    mp4: 'MP4',
    logoAlt: 'logo',
    demoAlt: 'demo',
    moreBefore: 'Looking for something else? Browse',
    moreAfter: 'or ask us on Discord.',
    demos: {
      touch: 'Touch ID & Face ID',
      liquid: 'Liquid Glass',
      live: 'Live wallpapers',
      notch: 'Notch',
      spotlight: 'Spotlight search',
      globalMenu: 'Global menu',
      window: 'Window management',
      firewall: 'Firewall',
      encryption: 'Encryption',
      appInstall: 'Install apps from the Store',
    },
  },
};

export type Content = typeof en;
