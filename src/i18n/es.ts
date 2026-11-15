import type { Content } from './en';

export const es: Content = {
  meta: {
    index: {
      title: 'Pulsar OS - Linux fácil que ya sabes usar - Web oficial',
      description:
        'Pulsar OS es Linux fácil: cada edición copia el flujo del sistema que ya usas. La edición publicada es Bitten Fruit, la experiencia macOS sobre Linux, gratis y con toda la libertad de Linux. Más ediciones en camino. Esta es la web oficial.',
    },
    'bitten-fruit': {
      title:
        'Bitten Fruit - Linux fácil que funciona como macOS, gratis y con toda la libertad | Pulsar OS',
      description:
        'Bitten Fruit es Linux fácil para usuarios de Mac: el mismo escritorio, el mismo flujo que ya conoces, el flujo completo y no solo un tema, además de herramientas nuevas como restaurar sesión, el asistente de IA Sayri y la gestión de ventanas al estilo macOS. Gratis y con toda la libertad de Linux.',
    },
    resources: {
      title: 'Recursos - Pulsar OS',
      description:
        'Banners, logotipos y recursos multimedia para dar a conocer Pulsar OS: Linux fácil con toda la libertad. Etiquétanos y entra en el Muro de la Fama.',
    },
  },

  chrome: {
    skip: 'Saltar al contenido',
    nav: {
      bittenFruit: 'Bitten Fruit',
      docs: 'Documentación',
      downloads: 'Descargas',
      resources: 'Recursos',
      discord: '¡Únete a Discord!',
      language: 'Cambiar idioma',
      theme: 'Cambiar entre tema claro y oscuro',
      home: 'Inicio de Pulsar OS',
      primary: 'Principal',
    },
    footer: {
      aria: 'Navegación del pie de página',
      social: 'Social',
    },
    banner: {
      text: 'Estamos preparando la mayor actualización de Pulsar OS: la versión 2.0. Actualizaremos esta web pronto.',
      link: 'Únete a Discord para estar al día →',
    },
  },

  index: {
    lead:
      'Linux fácil que ya sabes usar. Cada edición copia el flujo del sistema que usas hoy, el flujo completo y no solo una piel, para que cambiar no te cueste nada.',
    noteHtml:
      'La edición publicada es <strong>Bitten Fruit</strong>, la experiencia macOS sobre Linux. Gratis, de código abierto y con toda la libertad de Linux.',
    ecosystem: 'Ecosistema',
    comingSoon: 'Próximamente',
    visitSite: 'Visita la web oficial',
    discover: '¡Descúbrelo ya!',
    repo: 'Ir al repositorio (web próximamente)',
    editions: {
      bitten: { desc: 'La experiencia macOS sobre Linux.' },
      sayri: { desc: 'El agente de IA con la seguridad en mente' },
      phone: { desc: 'Tu móvil ❤️ tu PC' },
      wintux: { desc: 'El flujo de Windows que conoces, sin las molestias.' },
      tube: { desc: 'Convierte un ordenador viejo en el centro del salón.' },
    },
    aboutTitle: 'Un proyecto, varias ediciones',
    aboutText:
      'Pulsar OS no es un pack de temas ni un escritorio reempaquetado. Cada edición traslada todo el flujo de trabajo del sistema que imita, incluida la gestión de ventanas, los gestos, la búsqueda y las copias de seguridad, y añade herramientas nativas como restaurar sesión y el asistente de IA Sayri. Todo gratis, de código abierto y auditable.',
    sections: {
      bitten: 'Qué incluye la edición publicada y cómo conseguirla.',
      docs: 'Guías de instalación, notas de hardware y documentación para contribuir.',
      downloads: 'ISOs, ediciones y guías de instalación.',
      resources: 'Logotipos, banners y recursos multimedia.',
    },
  },

  bittenFruit: {
    eyebrow: 'Pulsar OS · Edición publicada',
    lead:
      'La experiencia macOS sobre Linux. El mismo escritorio, el mismo flujo que ya conoces, el flujo completo y no solo un tema, con toda la libertad de Linux.',
    primary: 'Visita la web oficial de Bitten Fruit',
    secondary: 'Descargar la ISO',
    imageAlt:
      'Escritorio de Bitten Fruit: barra superior estilo macOS, dock y widgets de escritorio',
    featuresTitle: 'Lo que realmente recibes',
    features: [
      {
        title: 'Todo el flujo de macOS',
        text: 'Barra superior, dock, gestos, gestor de archivos estilo Finder, búsqueda Spotlight y gestión de ventanas, reconstruidos y no solo maquillados.',
      },
      {
        title: 'Restaurar sesión',
        text: 'Elige «guardar sesión» al apagar y tus ventanas vuelven exactamente como estaban, incluso después de un corte de luz.',
      },
      {
        title: 'Asistente de IA Sayri',
        text: 'Un asistente local-first integrado en el escritorio: conecta cualquier proveedor, ejecuta modelos locales y con ejecución aislada.',
      },
      {
        title: 'Una sola App Store',
        text: 'Pulsar Store une apt, pacman, AUR y Flathub, para que instales lo que quieras sin tocar una terminal.',
      },
    ],
    moreTitle: 'Sigue explorando',
    links: {
      site: 'Funciones, capturas y ediciones en bittenfruit.inled.es',
      docs: 'Documentación: guías de instalación, notas de hardware y cómo contribuir',
      downloads: 'Descargas: ISOs y guías de instalación',
      github: 'Código fuente y compilaciones en GitHub',
    },
    ctaBody: 'La web completa de la edición está en bittenfruit.inled.es.',
    ctaButton: 'Abrir bittenfruit.inled.es',
  },

  resources: {
    title: 'Recursos',
    subtitle:
      'Logotipos y demos de producto para compartir Pulsar OS en redes sociales. Cada archivo se abre en hosted.inled.es, donde puedes previsualizarlo y descargarlo.',
    shareTitle: 'Ayúdanos a crecer',
    shareDesc:
      'Si hablas de Pulsar OS en redes sociales, buscaremos la forma de recompensar tu ayuda al proyecto.',
    shareBtn: 'Compartir en redes',
    logosTitle: 'Logotipos',
    logosDesc: 'PNG transparentes para portadas, publicaciones y artículos.',
    demosTitle: 'Demos',
    demosDesc:
      'Clips cortos de las funciones en acción. Haz clic en uno para previsualizarlo y descargar el MP4.',
    open: 'Abrir',
    download: 'Descargar',
    mp4: 'MP4',
    logoAlt: 'logotipo',
    demoAlt: 'demo',
    moreBefore: '¿Buscas otra cosa? Explora',
    moreAfter: 'o pregúntanos en Discord.',
    demos: {
      touch: 'Touch ID y Face ID',
      liquid: 'Liquid Glass',
      live: 'Fondos animados',
      notch: 'Notch',
      spotlight: 'Búsqueda Spotlight',
      globalMenu: 'Menú global',
      window: 'Gestión de ventanas',
      firewall: 'Cortafuegos',
      encryption: 'Cifrado',
      appInstall: 'Instalar apps desde la Store',
    },
  },
} as Content;
