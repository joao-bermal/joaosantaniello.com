/**
 * All site copy, in Portuguese and English.
 * Prices and contact details live here so they can be edited without touching components.
 * Style rule: no em or en dashes in copy.
 */

export type Locale = 'pt' | 'en';

export const contact = {
  whatsapp: 'https://wa.me/5512991158100',
  whatsappLabel: '(12) 99115-8100',
  email: 'joao.bermal.santaniello@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joao-santaniello/',
  github: 'https://github.com/joao-bermal',
};

/** Base path of each locale ('' for Portuguese, '/en' for English). */
export const localePath = (locale: Locale, path = '/') => (locale === 'en' ? `/en${path === '/' ? '/' : path}` : path);

export const ui = {
  pt: {
    nav: { work: 'Cases', services: 'Serviços', process: 'Processo', about: 'Sobre' },
    cta: 'Iniciar um projeto',
    langSwitch: { label: 'EN', href: '/en/', aria: 'Read in English' },
    footerLine: 'João Vitor Bermal Santaniello · São José dos Campos, SP',
    footerSupport: 'Suporte técnico em São José dos Campos',
  },
  en: {
    nav: { work: 'Work', services: 'Services', process: 'Process', about: 'About' },
    cta: 'Start a project',
    langSwitch: { label: 'PT', href: '/', aria: 'Ler em português' },
    footerLine: 'João Vitor Bermal Santaniello · São José dos Campos, Brazil',
    footerSupport: null,
  },
} as const;

export const home = {
  pt: {
    meta: {
      title: 'João Bermal: identidade visual, e-commerce e desenvolvimento',
      description:
        'Marcas, lojas virtuais e sistemas sob medida, do conceito ao ar. Identidade visual, e-commerce com pagamento internacional e desenvolvimento de software.',
    },
    hero: {
      eyebrow: 'Identidade visual · E-commerce · Desenvolvimento',
      title: 'Marcas e lojas que parecem premium desde o primeiro clique.',
      lead:
        'Crio a identidade visual, construo a loja e escrevo o código por trás, com o mesmo cuidado em cada parte. Para negócios que querem ser levados a sério, no Brasil e fora dele.',
      primary: 'Ver o case Miau Atelier',
      secondary: 'Iniciar um projeto',
    },
    featured: {
      eyebrow: 'Case em destaque',
      title: 'Miau Atelier',
      text:
        'Uma marca de móveis para gatos criada do zero e vendendo para os Estados Unidos. Identidade visual, loja Shopify em dólar, storefront em Next.js e um pipeline de IA que transforma foto de fornecedor em fotografia editorial.',
      stats: [
        { value: '15', label: 'produtos com direção de arte' },
        { value: 'USD', label: 'checkout para os EUA' },
        { value: '100%', label: 'marca, loja e código' },
      ],
      link: 'Ver o case completo',
    },
    services: {
      eyebrow: 'Serviços',
      title: 'Três frentes, um mesmo padrão.',
      lead: 'Você pode contratar uma delas ou o projeto inteiro, da marca à loja no ar.',
      items: [
        {
          title: 'Identidade visual e marca',
          text: 'Naming, logotipo e um sistema visual completo, com diretrizes escritas para a marca crescer sem perder a consistência.',
          deliverables: ['Naming e posicionamento', 'Logotipo, monograma e selo', 'Paleta, tipografia e voz', 'Brand reference e aplicações'],
          price: 'A partir de R$ 400',
        },
        {
          title: 'E-commerce',
          text: 'Loja completa e pronta para vender: plataforma, pagamento, catálogo curado e fotos de produto no padrão da sua marca.',
          deliverables: ['Shopify ou loja própria em Next.js', 'Pagamento com Stripe ou Mercado Pago, inclusive em dólar', 'Fotos de produto editoriais com IA', 'Domínio, e-mail e Google Shopping'],
          price: 'A partir de R$ 3.500',
        },
        {
          title: 'Desenvolvimento sob medida',
          text: 'Sites, sistemas e automações feitos para o seu processo, não o contrário. Código limpo, documentado e seu.',
          deliverables: ['Sites institucionais e landing pages', 'Sistemas web com backend e banco de dados', 'Automações e integrações com APIs', 'Aplicativos mobile em React Native'],
          price: 'A partir de R$ 1.500',
        },
      ],
      note: 'Valores de entrada. Cada projeto é orçado depois de uma conversa sobre escopo e prazo.',
    },
    work: {
      eyebrow: 'Trabalhos selecionados',
      title: 'Do branding ao código.',
    },
    process: {
      eyebrow: 'Processo',
      title: 'Claro do início ao fim.',
      steps: [
        { title: 'Conversa', text: 'Entendo o negócio, o público e o objetivo. Sem compromisso.' },
        { title: 'Direção', text: 'Proposta com escopo, referências, prazo e valor fechados antes de começar.' },
        { title: 'Construção', text: 'Execução com pontos de checagem, para você ver o projeto tomar forma.' },
        { title: 'Lançamento', text: 'Entrega, publicação e um período de ajustes incluso.' },
      ],
    },
    about: {
      eyebrow: 'Sobre',
      title: 'Engenharia de software com olhar de design.',
      paragraphs: [
        'Sou João Vitor Bermal Santaniello, engenheiro de software desde 2021, com MBA em Engenharia de Software pela USP/Esalq. No dia a dia, desenvolvo sistemas de dados, dashboards e automações para grandes empresas de saneamento e energia no Brasil.',
        'Também sou músico e tenho vivência em design de interface. É essa combinação que muda o resultado: a marca pensada com o mesmo rigor de um produto digital, e a loja construída com o cuidado de quem desenha a experiência, não só o código.',
      ],
      credentials: ['Engenheiro de software', 'MBA USP/Esalq', 'Python · TypeScript · React · Next.js', 'Shopify · Stripe'],
    },
    contact: {
      title: 'Vamos construir algo que valha a pena mostrar?',
      text: 'Conte o que você quer criar. Respondo em até um dia útil com os próximos passos.',
    },
  },
  en: {
    meta: {
      title: 'João Bermal: brand identity, e-commerce and software development',
      description:
        'Brands, online stores and custom software, from concept to launch. Brand identity, international e-commerce and software development.',
    },
    hero: {
      eyebrow: 'Brand identity · E-commerce · Development',
      title: 'Brands and stores that feel premium from the first click.',
      lead:
        'I design the identity, build the store and write the code behind it, with the same care in every part. For businesses that want to be taken seriously, in Brazil and abroad.',
      primary: 'See the Miau Atelier case',
      secondary: 'Start a project',
    },
    featured: {
      eyebrow: 'Featured case',
      title: 'Miau Atelier',
      text:
        'A cat furniture brand built from scratch and selling to the United States. Brand identity, a Shopify store in USD, a Next.js storefront and an AI pipeline that turns supplier photos into editorial photography.',
      stats: [
        { value: '15', label: 'art-directed products' },
        { value: 'USD', label: 'checkout for the US' },
        { value: '100%', label: 'brand, store and code' },
      ],
      link: 'See the full case',
    },
    services: {
      eyebrow: 'Services',
      title: 'Three disciplines, one standard.',
      lead: 'Hire one of them or the whole project, from brand to a live store.',
      items: [
        {
          title: 'Brand identity',
          text: 'Naming, logo and a complete visual system, with written guidelines so the brand can grow without losing consistency.',
          deliverables: ['Naming and positioning', 'Logo, monogram and badge', 'Palette, typography and voice', 'Brand reference and applications'],
          price: 'Quoted per project',
        },
        {
          title: 'E-commerce',
          text: 'A complete store, ready to sell: platform, payments, a curated catalog and product photography in your brand style.',
          deliverables: ['Shopify or a custom Next.js storefront', 'Stripe payments in USD and other currencies', 'AI-directed editorial product photos', 'Domain, email and Google Shopping'],
          price: 'Quoted per project',
        },
        {
          title: 'Custom development',
          text: 'Websites, systems and automations built around your process, not the other way around. Clean, documented code you own.',
          deliverables: ['Websites and landing pages', 'Web systems with backend and database', 'Automations and API integrations', 'React Native mobile apps'],
          price: 'Quoted per project',
        },
      ],
      note: 'Projects are quoted in USD after a short conversation about scope and timeline.',
    },
    work: {
      eyebrow: 'Selected work',
      title: 'From branding to code.',
    },
    process: {
      eyebrow: 'Process',
      title: 'Clear from start to finish.',
      steps: [
        { title: 'Conversation', text: 'I learn about the business, the audience and the goal. No commitment.' },
        { title: 'Direction', text: 'A proposal with scope, references, timeline and price agreed before any work starts.' },
        { title: 'Build', text: 'Work with regular checkpoints, so you see the project take shape.' },
        { title: 'Launch', text: 'Delivery, publishing and a round of adjustments included.' },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'Software engineering with a designer’s eye.',
      paragraphs: [
        'I am João Vitor Bermal Santaniello, a software engineer since 2021 with an MBA in Software Engineering from USP/Esalq. Day to day, I build data systems, dashboards and automations for large water and energy utilities in Brazil.',
        'I am also a musician with a background in interface design. That combination changes the result: a brand designed with the rigor of a digital product, and a store built by someone who designs the experience, not only the code.',
      ],
      credentials: ['Software engineer', 'MBA, USP/Esalq', 'Python · TypeScript · React · Next.js', 'Shopify · Stripe'],
    },
    contact: {
      title: 'Let’s build something worth showing.',
      text: 'Tell me what you want to create. I reply within one business day with the next steps.',
    },
  },
};

export type WorkItem = {
  key: string;
  tag: Record<Locale, string>;
  title: string;
  text: Record<Locale, string>;
  image?: string;
  href?: string;
  linkLabel?: Record<Locale, string>;
  external?: boolean;
  dark?: boolean;
  /** Spans the full row on desktop. */
  wide?: boolean;
};

export const work: WorkItem[] = [
  {
    key: 'obsidian',
    tag: { pt: 'Identidade visual', en: 'Brand identity' },
    title: 'OBSIDIAN, The Origin',
    text: {
      pt: 'Identidade completa para uma marca de brownies premium: naming, logotipo, paleta preto e dourado, tipografia e copy de posicionamento.',
      en: 'A complete identity for a premium brownie brand: naming, logo, black and gold palette, typography and positioning copy.',
    },
    image: '/assets/obsidian-branding.jpg',
    dark: true,
  },
  {
    key: 'namman',
    tag: { pt: 'Produto web', en: 'Web product' },
    title: 'NAMMAN',
    text: {
      pt: 'App publicado que roda inteiro no navegador e sincroniza perfis de amplificador com o computador do usuário, com login seguro e sem servidor.',
      en: 'A live app that runs entirely in the browser and syncs amp profiles to the user’s computer, with secure sign-in and no server.',
    },
    href: 'https://github.com/joao-bermal/NAMMAN',
    linkLabel: { pt: 'Ver no GitHub', en: 'View on GitHub' },
    external: true,
  },
  {
    key: 'retina',
    tag: { pt: 'Visão computacional · MBA USP/Esalq', en: 'Computer vision · MBA USP/Esalq' },
    title: 'Risco cardiovascular por imagem',
    text: {
      pt: 'Pipeline que analisa fotos de retina para estimar risco cardiovascular automaticamente. Nota 9 de 10 no trabalho de conclusão.',
      en: 'A pipeline that analyzes retinal photos to estimate cardiovascular risk automatically. Graded 9 out of 10 as a capstone project.',
    },
    href: 'https://github.com/joao-bermal/retinal-avr-pipeline',
    linkLabel: { pt: 'Ver no GitHub', en: 'View on GitHub' },
    external: true,
  },
  {
    key: 'bizpoke',
    tag: { pt: 'Atuação profissional', en: 'Professional work' },
    title: 'Dados e geoprocessamento',
    text: {
      pt: 'Desde 2021, dashboards, automações e sistemas de dados para grandes empresas de saneamento e energia, na Bizpoke Soluções em Software.',
      en: 'Since 2021, dashboards, automations and data systems for large water and energy utilities, at Bizpoke Soluções em Software.',
    },
    wide: true,
  },
];
