/**
 * All site copy, in Portuguese and English.
 * Prices and contact details live here so they can be edited without touching components.
 * Style rule: no em or en dashes in copy.
 */

export type Locale = 'pt' | 'en';

/** Cookie set by the language switch; vercel.json skips the automatic redirect when present. */
export const LOCALE_COOKIE = 'site-lang';

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
    nav: { home: 'Início', work: 'Cases', miau: 'Miau Atelier', services: 'Serviços', process: 'Processo', about: 'Sobre', cv: 'Currículo' },
    cta: 'Iniciar um projeto',
    langSwitch: { label: 'EN', href: '/en/', aria: 'Read in English' },
    theme: 'Alternar entre tema claro e escuro',
    footerLine: 'João Vitor Bermal Santaniello · São José dos Campos, SP',
    footer: {
      tagline: 'Identidade visual, e-commerce e desenvolvimento sob medida, do conceito ao ar. Para negócios no Brasil e fora dele.',
      pages: 'Navegação',
      contact: 'Contato',
      local: 'Em São José dos Campos',
      reply: 'Respondo em até um dia útil.',
      rights: 'Todos os direitos reservados.',
      top: 'Voltar ao topo',
    },
    footerSupport: 'Suporte técnico em São José dos Campos',
    footerCv: 'Currículo',
    cvLink: 'Ver currículo completo',
  },
  en: {
    nav: { home: 'Home', work: 'Work', miau: 'Miau Atelier', services: 'Services', process: 'Process', about: 'About', cv: 'CV' },
    cta: 'Start a project',
    langSwitch: { label: 'PT', href: '/', aria: 'Ler em português' },
    theme: 'Toggle light and dark theme',
    footerLine: 'João Vitor Bermal Santaniello · São José dos Campos, Brazil',
    footer: {
      tagline: 'Brand identity, e-commerce and custom software, from concept to launch. For businesses in Brazil and abroad.',
      pages: 'Pages',
      contact: 'Contact',
      local: null,
      reply: 'I reply within one business day.',
      rights: 'All rights reserved.',
      top: 'Back to top',
    },
    footerSupport: null,
    footerCv: 'CV',
    cvLink: 'View full CV',
  },
} as const;

export const home = {
  pt: {
    meta: {
      title: 'João Santaniello: identidade visual, e-commerce e desenvolvimento',
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
          deliverables: ['Sites institucionais e landing pages', 'Sistemas web com backend e banco de dados', 'Automações, integrações e agentes de IA', 'Aplicativos mobile em React Native'],
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
        'Sou João Vitor Bermal Santaniello, engenheiro de software com MBA em Engenharia de Software pela USP/Esalq, colocando software em produção desde 2020. No dia a dia, construo sistemas de dados, dashboards, plataformas web e automações para saneamento, energia, saúde e telecom, e hoje trabalho com IA no centro do processo, usando o Claude Code com a mesma revisão cuidadosa de sempre.',
        'Também sou músico e tenho vivência em design de interface. É essa combinação que muda o resultado: a marca pensada com o mesmo rigor de um produto digital, e a loja construída com o cuidado de quem desenha a experiência, não só o código.',
      ],
      credentials: ['Engenheiro de software', 'MBA USP/Esalq', 'Python · TypeScript · React · Next.js', 'Claude Code · MCP · n8n', 'Supabase · FastAPI', 'Shopify · Stripe'],
    },
    contact: {
      title: 'Vamos construir algo que valha a pena mostrar?',
      text: 'Conte o que você quer criar. Respondo em até um dia útil com os próximos passos.',
    },
  },
  en: {
    meta: {
      title: 'João Santaniello: brand identity, e-commerce and software development',
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
          deliverables: ['Websites and landing pages', 'Web systems with backend and database', 'Automations, integrations and AI agents', 'React Native mobile apps'],
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
        'I am João Vitor Bermal Santaniello, a software engineer with an MBA in Software Engineering from USP/Esalq, shipping production software since 2020. Day to day I build data systems, dashboards, web platforms and automations for water, energy, healthcare and telecom companies, and I now work AI-first with Claude Code, reviewing everything it writes.',
        'I am also a musician with a background in interface design. That combination changes the result: a brand designed with the rigor of a digital product, and a store built by someone who designs the experience, not only the code.',
      ],
      credentials: ['Software engineer', 'MBA, USP/Esalq', 'Python · TypeScript · React · Next.js', 'Claude Code · MCP · n8n', 'Supabase · FastAPI', 'Shopify · Stripe'],
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
  /** A plain string for names that stay the same in both languages. */
  title: string | Record<Locale, string>;
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
    key: 'triage-desk',
    tag: { pt: 'IA aplicada · demo publicada', en: 'Applied AI · live demo' },
    title: 'Triage Desk',
    text: {
      pt: 'Triagem de atendimento com IA para marcas D2C: um agente Claude lê cada mensagem, consulta o pedido e as políticas da marca e deixa a resposta pronta para a equipe aprovar. Supabase com RLS, n8n e Next.js.',
      en: 'AI support triage for D2C brands: a Claude agent reads each message, checks the order and the brand’s policies and drafts the reply for the team to approve. Supabase with RLS, n8n and Next.js.',
    },
    href: 'https://triage.joaosantaniello.com',
    linkLabel: { pt: 'Abrir a demo', en: 'Open the demo' },
    external: true,
  },
  {
    key: 'retina',
    tag: { pt: 'Deep learning · MBA USP/Esalq', en: 'Deep learning · MBA USP/Esalq' },
    title: { pt: 'Risco cardiovascular por imagem', en: 'Cardiovascular risk from retinal images' },
    text: {
      pt: 'Pipeline de deep learning que analisa retinografias para estimar a razão arteríolo-venular, marcador de risco cardiovascular. Um detector de disco óptico treinado reduziu o erro do centro de 358 para 11 px. TCC com nota 9/10.',
      en: 'A deep learning pipeline that reads retinal photos to estimate the arteriolar-to-venular ratio, a cardiovascular risk marker. A trained optic disc detector cut the center error from 358 to 11 px. Thesis graded 9/10.',
    },
    href: 'https://github.com/joao-bermal/retinal-avr-pipeline',
    linkLabel: { pt: 'Ver no GitHub', en: 'View on GitHub' },
    external: true,
  },
  {
    key: 'namman',
    tag: { pt: 'Produto web', en: 'Web product' },
    title: 'NAMMAN',
    text: {
      pt: 'App em Next.js que roda só no navegador e sincroniza perfis do Neural Amp Modeler da API do TONE3000 com o disco do usuário: OAuth com PKCE, File System Access API e downloads em lote controlados, sem servidor.',
      en: 'A Next.js app that runs only in the browser and syncs Neural Amp Modeler profiles from the TONE3000 API to the user’s disk: OAuth with PKCE, the File System Access API and throttled bulk downloads, with no server.',
    },
    href: 'https://namman.vercel.app/',
    linkLabel: { pt: 'Abrir o app', en: 'Open the app' },
    external: true,
  },
  {
    key: 'eyeconnect',
    tag: { pt: 'Saúde · em produção', en: 'Healthcare · in production' },
    title: 'EyeConnect',
    text: {
      pt: 'Plataforma de teleoftalmologia da qual fui o principal desenvolvedor em 2023 e 2024: gateway DICOM em Raspberry Pi nas clínicas, leitura de exames por OCR para 14 aparelhos e laudos estruturados.',
      en: 'A teleophthalmology platform where I was the main developer in 2023 and 2024: a Raspberry Pi DICOM gateway at clinics, OCR exam intake for 14 devices and structured reports.',
    },
  },
  {
    key: 'bizpoke',
    tag: { pt: 'Atuação profissional', en: 'Professional work' },
    title: { pt: 'Dados, sistemas e IA na Bizpoke', en: 'Data, systems and AI at Bizpoke' },
    text: {
      pt: 'Desde 2021 na Bizpoke Soluções em Software: análises geoespaciais e dashboards para a Aegea, um dos maiores grupos de saneamento do Brasil; a reescrita do ISPDrive, SaaS de armazenamento para provedores de internet; o app de campo DOMO da Equatorial Energia; e nove skills de Claude Code usadas pelo time em 13 projetos.',
      en: 'At Bizpoke Soluções em Software since 2021: geospatial analyses and dashboards for Aegea, one of the largest sanitation groups in Brazil; the rewrite of ISPDrive, a storage SaaS for internet providers; the DOMO field app for Equatorial Energia; and nine Claude Code skills the team uses across 13 projects.',
    },
    wide: true,
  },
];
