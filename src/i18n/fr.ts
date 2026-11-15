import type { Content } from './en';

export const fr: Content = {
  meta: {
    index: {
      title: 'Pulsar OS - Le Linux simple que vous savez déjà utiliser - Site officiel',
      description:
        'Pulsar OS, c’est le Linux simple : chaque édition reprend le flux du système que vous utilisez déjà. L’édition publiée est Bitten Fruit, l’expérience macOS sur Linux, gratuit et avec toute la liberté de Linux. D’autres éditions arrivent. Voici le site officiel.',
    },
    'bitten-fruit': {
      title:
        'Bitten Fruit - Le Linux simple qui fonctionne comme macOS, gratuit et avec toute la liberté | Pulsar OS',
      description:
        'Bitten Fruit est le Linux simple pour les utilisateurs de Mac : le même bureau, le même flux que vous connaissez déjà, le flux complet et pas seulement un thème, plus de nouveaux outils comme la restauration de session, l’assistant IA Sayri et la gestion des fenêtres façon macOS. Gratuit et avec toute la liberté de Linux.',
    },
    resources: {
      title: 'Ressources - Pulsar OS',
      description:
        'Bannières, logos et ressources multimédias pour faire connaître Pulsar OS : le Linux simple avec toute la liberté. Taguez-nous et entrez dans le Mur de la Renommée.',
    },
  },

  chrome: {
    skip: 'Aller au contenu',
    nav: {
      bittenFruit: 'Bitten Fruit',
      docs: 'Documentation',
      downloads: 'Téléchargements',
      resources: 'Ressources',
      discord: 'Rejoignez Discord !',
      language: 'Changer de langue',
      theme: 'Basculer entre thème clair et sombre',
      home: 'Accueil de Pulsar OS',
      primary: 'Principal',
    },
    footer: {
      aria: 'Navigation du pied de page',
      social: 'Réseaux',
    },
    banner: {
      text: 'Nous préparons la plus grande mise à jour de Pulsar OS : la version 2.0. Nous mettrons bientôt ce site à jour.',
      link: 'Rejoignez Discord pour rester informé →',
    },
  },

  index: {
    lead:
      'Le Linux simple que vous savez déjà utiliser. Chaque édition reprend le flux du système que vous utilisez aujourd’hui, le flux complet et pas seulement une peau, pour que changer ne vous coûte rien.',
    noteHtml:
      'L’édition publiée est <strong>Bitten Fruit</strong>, l’expérience macOS sur Linux. Gratuit, open source et avec toute la liberté de Linux.',
    ecosystem: 'Écosystème',
    comingSoon: 'Bientôt disponible',
    visitSite: 'Visiter le site officiel',
    discover: 'Découvrez-le !',
    repo: 'Aller au dépôt (site bientôt disponible)',
    editions: {
      bitten: { desc: 'L’expérience macOS sur Linux.' },
      sayri: { desc: 'L’agent IA qui pense à la sécurité' },
      phone: { desc: 'Votre mobile ❤️ votre PC' },
      wintux: { desc: 'Le flux Windows que vous connaissez, sans les tracas.' },
      tube: { desc: 'Transformez un vieil ordinateur en centre du salon.' },
    },
    aboutTitle: 'Un projet, plusieurs éditions',
    aboutText:
      'Pulsar OS n’est ni un pack de thèmes ni un bureau reconditionné. Chaque édition transfère tout le flux de travail du système qu’elle imite, y compris la gestion des fenêtres, les gestes, la recherche et les sauvegardes, et ajoute des outils natifs comme la restauration de session et l’assistant IA Sayri. Le tout gratuit, open source et auditable.',
    sections: {
      bitten: 'Ce que contient l’édition publiée et comment l’obtenir.',
      docs: 'Guides d’installation, notes matérielles et documentation pour contribuer.',
      downloads: 'ISO, éditions et guides d’installation.',
      resources: 'Logos, bannières et ressources multimédias.',
    },
  },

  bittenFruit: {
    eyebrow: 'Pulsar OS · Édition publiée',
    lead:
      'L’expérience macOS sur Linux. Le même bureau, le même flux que vous connaissez déjà, le flux complet et pas seulement un thème, avec toute la liberté de Linux.',
    primary: 'Visitez le site officiel de Bitten Fruit',
    secondary: 'Télécharger l’ISO',
    imageAlt:
      'Bureau de Bitten Fruit : barre supérieure façon macOS, dock et widgets de bureau',
    featuresTitle: 'Ce que vous recevez vraiment',
    features: [
      {
        title: 'Tout le flux de macOS',
        text: 'Barre supérieure, dock, gestes, gestionnaire de fichiers façon Finder, recherche Spotlight et gestion des fenêtres, reconstruits et pas seulement maquillés.',
      },
      {
        title: 'Restauration de session',
        text: 'Choisissez « enregistrer la session » à l’extinction et vos fenêtres reviennent exactement comme elles étaient, même après une coupure de courant.',
      },
      {
        title: 'Assistant IA Sayri',
        text: 'Un assistant local-first intégré au bureau : connectez n’importe quel fournisseur, exécutez des modèles locaux et une exécution isolée.',
      },
      {
        title: 'Un seul App Store',
        text: 'Pulsar Store réunit apt, pacman, AUR et Flathub, pour que vous installiez ce que vous voulez sans toucher à un terminal.',
      },
    ],
    moreTitle: 'Continuez l’exploration',
    links: {
      site: 'Fonctions, captures et éditions sur bittenfruit.inled.es',
      docs: 'Documentation : guides d’installation, notes matérielles et comment contribuer',
      downloads: 'Téléchargements : ISO et guides d’installation',
      github: 'Code source et compilations sur GitHub',
    },
    ctaBody: 'Le site complet de l’édition est sur bittenfruit.inled.es.',
    ctaButton: 'Ouvrir bittenfruit.inled.es',
  },

  resources: {
    title: 'Ressources',
    subtitle:
      'Logos et démos produit pour partager Pulsar OS sur les réseaux sociaux. Chaque fichier s’ouvre sur hosted.inled.es, où vous pouvez le prévisualiser et le télécharger.',
    shareTitle: 'Aidez-nous à grandir',
    shareDesc:
      'Si vous parlez de Pulsar OS sur les réseaux sociaux, nous chercherons un moyen de récompenser votre aide au projet.',
    shareBtn: 'Partager sur les réseaux',
    logosTitle: 'Logos',
    logosDesc: 'PNG transparents pour couvertures, publications et articles.',
    demosTitle: 'Démos',
    demosDesc:
      'De courts clips des fonctions en action. Cliquez sur un pour le prévisualiser et télécharger le MP4.',
    open: 'Ouvrir',
    download: 'Télécharger',
    mp4: 'MP4',
    logoAlt: 'logo',
    demoAlt: 'démo',
    moreBefore: 'Vous cherchez autre chose ? Explorez',
    moreAfter: 'ou demandez-nous sur Discord.',
    demos: {
      touch: 'Touch ID et Face ID',
      liquid: 'Liquid Glass',
      live: 'Fonds animés',
      notch: 'Notch',
      spotlight: 'Recherche Spotlight',
      globalMenu: 'Menu global',
      window: 'Gestion des fenêtres',
      firewall: 'Pare-feu',
      encryption: 'Chiffrement',
      appInstall: 'Installer des apps depuis la Store',
    },
  },
} as Content;
