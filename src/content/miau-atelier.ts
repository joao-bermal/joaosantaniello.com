import type { Locale } from './site';

/** Miau Atelier case study copy. Images live in /public/assets/miau-atelier. */

const A = '/assets/miau-atelier';

export const miauAssets = {
  siteHome: `${A}/site-home.webp`,
  siteProduct: `${A}/site-product.webp`,
  siteCollection: `${A}/site-collection.webp`,
  siteMobile: `${A}/site-mobile.webp`,
  brandBoard: `${A}/brand-board.webp`,
  mood: `${A}/mood.webp`,
  logos: [
    { src: `${A}/logo-brown.webp`, dark: false, alt: 'Miau Atelier wordmark, brown' },
    { src: `${A}/logo-ivory.webp`, dark: true, alt: 'Miau Atelier wordmark, ivory on chocolate' },
    { src: `${A}/monogram-brown.webp`, dark: false, alt: 'MA monogram' },
    { src: `${A}/badge-brown.webp`, dark: false, alt: 'Miau Atelier circular badge' },
  ],
  editorial: [
    `${A}/editorial-about-living-room.webp`,
    `${A}/editorial-material-plush-detail.webp`,
    `${A}/editorial-story-quiet-corners.webp`,
  ],
  palette: [
    { name: 'Ivory', hex: '#F8F4ED' },
    { name: 'Sand', hex: '#EADCCB' },
    { name: 'Taupe', hex: '#C9B7A3' },
    { name: 'Sage', hex: '#7C8F7A' },
    { name: 'Blush', hex: '#D8A9A8' },
    { name: 'Chocolate', hex: '#3E2B20' },
  ],
  pairs: [
    { key: 'cattail-tree', name: 'Woven Cattail Cat Tree' },
    { key: 'walnut-ottoman', name: 'Walnut Finish Ottoman with Cat Hideaway' },
    { key: 'window-perch', name: 'Window Perch' },
    { key: 'gravity-feeder', name: 'Gravity Feeder and Water Station' },
    { key: 'water-fountain', name: 'Stainless Steel Water Fountain' },
    { key: 'wooden-scratcher', name: 'Wooden Scratcher Tower' },
  ].map((p) => ({ ...p, before: `${A}/pairs/${p.key}-before.webp`, after: `${A}/pairs/${p.key}-after.webp` })),
  products: [
    ['wooden-scratcher-tower', 'Wooden Scratcher Tower'],
    ['woven-cattail-cat-tree', 'Woven Cattail Cat Tree'],
    ['ottoman-with-cat-hideaway', 'Walnut Finish Ottoman'],
    ['plush-nest-bed', 'Plush Nest Bed'],
    ['woven-wall-nest', 'Woven Wall Nest'],
    ['window-perch', 'Window Perch'],
    ['woven-basket-perch', 'Woven Basket Perch'],
    ['floor-to-ceiling-cat-tree', 'Floor to Ceiling Cat Tree'],
    ['modern-cat-tower-natural', 'Natural Modern Cat Tower'],
    ['wooden-wall-climbing-set', 'Wooden Wall Climbing Set'],
    ['double-layer-scratcher-house', 'Double Layer Scratcher House'],
    ['elevated-ceramic-bowl', 'Elevated Ceramic Bowl'],
    ['gravity-feeder-and-water-station', 'Gravity Feeder'],
    ['smart-feeder', 'Smart Feeder'],
    ['stainless-steel-water-fountain', 'Water Fountain'],
  ].map(([key, name]) => ({ key, name, src: `${A}/products/${key}.webp` })),
};

type CaseCopy = {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  lead: string;
  ctaStore: string;
  ctaCompare: string;
  facts: { label: string; value: string }[];
  homeCaption: string;
  challenge: { eyebrow: string; title: string; paragraphs: string[]; timeline: { title: string; text: string }[] };
  brand: {
    eyebrow: string;
    title: string;
    lead: string;
    logos: string;
    palette: string;
    typography: string;
    serifNote: string;
    sansNote: string;
    principle: string;
    rules: { title: string; text: string }[];
  };
  art: {
    eyebrow: string;
    title: string;
    lead: string;
    before: string;
    after: string;
    compareAria: string;
    steps: { title: string; text: string }[];
  };
  catalog: { eyebrow: string; title: string; lead: string };
  store: { eyebrow: string; title: string; lead: string; product: string; collection: string; mobile: string };
  built: { eyebrow: string; title: string; groups: { title: string; items: string[] }[] };
  cta: { title: string; text: string; store: string; back: string };
};

export const miauCopy: Record<Locale, CaseCopy> = {
  pt: {
    meta: {
      title: 'Case Miau Atelier: marca, loja e direção de arte com IA',
      description:
        'Como a Miau Atelier saiu do zero: identidade visual, loja Shopify para os Estados Unidos, storefront headless em Next.js e um pipeline de direção de arte com IA para todo o catálogo.',
    },
    eyebrow: 'Case · E-commerce, marca e direção de arte com IA',
    title: 'Miau Atelier: da identidade visual à loja no ar para os Estados Unidos.',
    lead:
      'Um projeto próprio, feito de ponta a ponta: naming e identidade visual, loja Shopify vendendo em dólar, um storefront headless em Next.js, curadoria de catálogo e um pipeline que transforma a foto genérica do fornecedor em fotografia editorial com a cara da marca.',
    ctaStore: 'Ver a loja no ar',
    ctaCompare: 'Ver o antes e depois',
    facts: [
      { label: 'Mercado', value: 'Estados Unidos, em USD' },
      { label: 'Plataforma', value: 'Shopify + Stripe' },
      { label: 'Catálogo', value: '15 peças com direção de arte' },
      { label: 'Meu papel', value: 'Marca, loja, código e operação' },
    ],
    homeCaption: 'A página inicial da loja. Role dentro da janela para ver a página inteira.',
    challenge: {
      eyebrow: 'O desafio',
      title: 'Vender para os Estados Unidos, a partir do Brasil, com cara de marca e não de loja genérica.',
      paragraphs: [
        'O nicho de produtos para pets está cheio de lojas de dropshipping iguais: fotos de fornecedor com fundo branco, textos traduzidos e marcas sem identidade. A ideia da Miau Atelier foi o oposto: objetos para gatos pensados como peças de decoração, que você deixa à vista na sala.',
        'Isso exigia três coisas ao mesmo tempo: uma identidade visual forte, uma loja que cobrasse em dólar mesmo com empresa brasileira, e um catálogo inteiro fotografado no mesmo padrão editorial, sem estúdio e sem acesso físico aos produtos.',
      ],
      timeline: [
        { title: 'Identidade visual', text: 'Naming, logotipo, monograma, selo, paleta, tipografia, taglines e diretrizes de conteúdo e imagem.' },
        { title: 'Storefront headless', text: 'Como o Shopify Payments não cobrava em dólar para lojista brasileiro, construí um site próprio em Next.js com checkout Stripe em USD e pedidos sincronizados com a Shopify.' },
        { title: 'Mudança de rota', text: 'Quando a Shopify passou a aceitar USD com Stripe no checkout nativo, levei a mesma identidade para o tema Dawn. Mais simples de manter, sem perder o design.' },
        { title: 'Catálogo e direção de arte', text: 'Curadoria de fornecedores, preço por margem e um pipeline de imagens com IA que preserva o produto exatamente como ele é.' },
        { title: 'Operação', text: 'Domínio próprio, políticas, e-mails da marca, Google Merchant Center e automações pela API da Shopify.' },
      ],
    },
    brand: {
      eyebrow: 'Brand reference',
      title: 'Objects for cats. Designed for living.',
      lead:
        'Uma marca que se comporta como uma marca de casa e decoração, não como um pet shop: quente, silenciosa, tátil e contemporânea. O sistema visual foi criado com IA e refinado à mão, com regras escritas para manter a consistência em cada peça.',
      logos: 'Sistema de logotipo',
      palette: 'Paleta',
      typography: 'Tipografia',
      serifNote: 'Playfair Display · títulos',
      sansNote: 'Montserrat · interface e rótulos',
      principle: '“Would you keep it in plain sight, in your living room? If not, it is not a Miau Atelier piece.”',
      rules: [
        { title: 'Forma', text: 'Cantos retos, sem sombras, muito respiro. A imagem conduz, o texto acompanha.' },
        { title: 'Materiais', text: 'Madeira natural, fibra trançada, linho, cerâmica e walnut. Nada de plástico colorido.' },
        { title: 'Voz', text: 'Calma e concreta, com fatos do produto. Sem jargão de pet shop e sem exageros de venda.' },
      ],
    },
    art: {
      eyebrow: 'Direção de arte com IA',
      title: 'Da foto do fornecedor à fotografia editorial',
      lead:
        'Cada produto chega com fotos genéricas de marketplace. O pipeline gera novas imagens a partir da foto original, preservando o produto exatamente como ele é (formas, cores, proporções e materiais) e trocando só o ambiente, a luz e a composição pelo padrão da marca. Arraste para comparar.',
      before: 'Fornecedor',
      after: 'Miau Atelier',
      compareAria: 'Comparar antes e depois',
      steps: [
        { title: 'Curadoria', text: 'Produtos escolhidos pelo que parecem na sala: madeira, fibra natural, formas limpas. Estoque nos EUA e custo que permite margem saudável.' },
        { title: 'Rascunho e texto', text: 'Cada peça entra como rascunho, com nome de objeto, texto no tom da marca e dados só do fornecedor, sem inventar promessas.' },
        { title: 'Prompt que preserva', text: 'Um prompt estruturado trava o produto (forma, cor, proporção) e muda só ambiente, materiais, luz e composição, com regras para o gato parecer real.' },
        { title: 'Geração e aprovação', text: 'As imagens são geradas a partir da foto original e aprovadas uma a uma. Até as fotos que pareciam boas foram refeitas para o catálogo ter uma luz só.' },
        { title: 'Publicação automatizada', text: 'Scripts em Python sobem as imagens pela API da Shopify, trocam a galeria, vinculam variações e ativam o produto em todos os canais.' },
        { title: 'Registro de tudo', text: 'Um mapeamento versionado guarda a origem, o prompt e o arquivo aprovado de cada imagem, pronto para reaproveitar em outras lojas.' },
      ],
    },
    catalog: {
      eyebrow: 'O catálogo',
      title: 'Quinze peças, uma linguagem visual',
      lead: 'Camas, arranhadores, torres, poleiros e peças de alimentação, todos fotografados no mesmo padrão editorial.',
    },
    store: {
      eyebrow: 'A loja',
      title: 'Uma loja que parece a marca em cada tela',
      lead: 'Tema Dawn da Shopify reconfigurado com a identidade da Miau Atelier: paleta, tipografia, cantos retos, sem sombras, coleções curadas e textos revisados. No celular, a mesma calma.',
      product: 'Página de produto',
      collection: 'Catálogo',
      mobile: 'Loja no celular',
    },
    built: {
      eyebrow: 'O que foi construído',
      title: 'Por baixo da vitrine',
      groups: [
        { title: 'Loja Shopify', items: ['Tema Dawn com a identidade da marca, versionado em repositório', 'Coleções curadas, menus e páginas próprias', 'Checkout em dólar com Stripe', 'Políticas de envio, devolução e termos, sem letra miúda'] },
        { title: 'Storefront headless', items: ['Next.js com App Router e React 19', 'Stripe Checkout em USD, com webhooks idempotentes', 'Pedidos gravados na Shopify pela Admin API', 'Contas de cliente, busca preditiva e SEO completo'] },
        { title: 'Automação e operação', items: ['Scripts Python para a Admin API: catálogo, preços, tema e imagens', 'Pipeline de imagens com mapeamento versionado', 'Google Merchant Center e rastreamento de conversões', 'Domínio próprio e e-mails da marca configurados'] },
      ],
    },
    cta: {
      title: 'Quer uma loja com essa cara para o seu negócio?',
      text: 'Da identidade visual à loja no ar, com fotos de produto no padrão da sua marca. Me chama e conta o que você vende.',
      store: 'Visitar a Miau Atelier',
      back: 'Voltar ao início',
    },
  },
  en: {
    meta: {
      title: 'Miau Atelier case: brand, store and AI art direction',
      description:
        'How Miau Atelier was built from scratch: brand identity, a Shopify store for the United States, a headless Next.js storefront and an AI art direction pipeline for the whole catalog.',
    },
    eyebrow: 'Case · E-commerce, brand and AI art direction',
    title: 'Miau Atelier: from brand identity to a live store for the United States.',
    lead:
      'A self-initiated project, built end to end: naming and identity, a Shopify store selling in USD, a headless Next.js storefront, catalog curation and a pipeline that turns generic supplier photos into editorial photography in the brand’s style.',
    ctaStore: 'Visit the live store',
    ctaCompare: 'See before and after',
    facts: [
      { label: 'Market', value: 'United States, in USD' },
      { label: 'Platform', value: 'Shopify + Stripe' },
      { label: 'Catalog', value: '15 art-directed pieces' },
      { label: 'My role', value: 'Brand, store, code and operations' },
    ],
    homeCaption: 'The store’s homepage. Scroll inside the window to see the full page.',
    challenge: {
      eyebrow: 'The challenge',
      title: 'Selling to the United States from Brazil, as a brand and not a generic store.',
      paragraphs: [
        'The pet products niche is full of identical dropshipping stores: white-background supplier photos, translated copy and brands with no identity. Miau Atelier is the opposite: objects for cats designed as home pieces, the kind you leave in plain sight in the living room.',
        'That meant three things at once: a strong visual identity, a store able to charge in USD from a Brazilian company, and a whole catalog photographed to one editorial standard, with no studio and no physical access to the products.',
      ],
      timeline: [
        { title: 'Brand identity', text: 'Naming, wordmark, monogram, badge, palette, typography, taglines and content and image guidelines.' },
        { title: 'Headless storefront', text: 'Shopify Payments could not charge USD for a Brazilian merchant, so I built a Next.js storefront with Stripe Checkout in USD and orders synced to Shopify.' },
        { title: 'Change of course', text: 'Once Shopify supported USD with Stripe in the native checkout, I moved the same identity to the Dawn theme. Simpler to run, same design.' },
        { title: 'Catalog and art direction', text: 'Supplier curation, margin-based pricing and an AI image pipeline that keeps each product exactly as it is.' },
        { title: 'Operations', text: 'Custom domain, policies, brand email addresses, Google Merchant Center and automations through the Shopify API.' },
      ],
    },
    brand: {
      eyebrow: 'Brand reference',
      title: 'Objects for cats. Designed for living.',
      lead:
        'A brand that behaves like a home and interiors brand, not a pet store: warm, quiet, tactile and contemporary. The visual system was created with AI and refined by hand, with written rules to keep every piece consistent.',
      logos: 'Logo system',
      palette: 'Palette',
      typography: 'Typography',
      serifNote: 'Playfair Display · headings',
      sansNote: 'Montserrat · interface and labels',
      principle: '“Would you keep it in plain sight, in your living room? If not, it is not a Miau Atelier piece.”',
      rules: [
        { title: 'Form', text: 'Square corners, no shadows, plenty of space. The image leads, the text follows.' },
        { title: 'Materials', text: 'Natural wood, woven fiber, linen, ceramic and walnut. No bright plastic.' },
        { title: 'Voice', text: 'Calm and concrete, with product facts. No pet store jargon, no sales hype.' },
      ],
    },
    art: {
      eyebrow: 'AI art direction',
      title: 'From supplier photo to editorial photography',
      lead:
        'Every product arrives with generic marketplace photos. The pipeline generates new images from the original photo, keeping the product exactly as it is (shape, color, proportions and materials) and changing only the setting, light and composition to the brand standard. Drag to compare.',
      before: 'Supplier',
      after: 'Miau Atelier',
      compareAria: 'Compare before and after',
      steps: [
        { title: 'Curation', text: 'Products chosen for how they look in a living room: wood, natural fiber, clean shapes. US stock and a cost that allows a healthy margin.' },
        { title: 'Draft and copy', text: 'Each piece starts as a draft, with an object-like name, copy in the brand voice and only supplier facts, no invented claims.' },
        { title: 'A prompt that preserves', text: 'A structured prompt locks the product (shape, color, proportion) and changes only setting, materials, light and composition, with rules to keep the cat realistic.' },
        { title: 'Generation and approval', text: 'Images are generated from the original photo and approved one by one. Even usable photos were redone so the catalog shares one light.' },
        { title: 'Automated publishing', text: 'Python scripts upload the images through the Shopify API, replace the gallery, link variants and activate the product on every channel.' },
        { title: 'A record of everything', text: 'A versioned mapping keeps the source, prompt and approved file of every image, ready to reuse for other stores.' },
      ],
    },
    catalog: {
      eyebrow: 'The catalog',
      title: 'Fifteen pieces, one visual language',
      lead: 'Beds, scratchers, towers, perches and feeding pieces, all photographed to the same editorial standard.',
    },
    store: {
      eyebrow: 'The store',
      title: 'A store that looks like the brand on every screen',
      lead: 'Shopify’s Dawn theme reconfigured with the Miau Atelier identity: palette, typography, square corners, no shadows, curated collections and revised copy. The same calm on mobile.',
      product: 'Product page',
      collection: 'Catalog',
      mobile: 'Store on mobile',
    },
    built: {
      eyebrow: 'What was built',
      title: 'Behind the storefront',
      groups: [
        { title: 'Shopify store', items: ['Dawn theme with the brand identity, versioned in a repository', 'Curated collections, menus and custom pages', 'USD checkout with Stripe', 'Clear shipping, returns and terms policies'] },
        { title: 'Headless storefront', items: ['Next.js with the App Router and React 19', 'Stripe Checkout in USD with idempotent webhooks', 'Orders written to Shopify through the Admin API', 'Customer accounts, predictive search and full SEO'] },
        { title: 'Automation and operations', items: ['Python scripts for the Admin API: catalog, pricing, theme and images', 'Image pipeline with a versioned mapping', 'Google Merchant Center and conversion tracking', 'Custom domain and brand email addresses'] },
      ],
    },
    cta: {
      title: 'Want a store like this for your business?',
      text: 'From brand identity to a live store, with product photography in your brand’s style. Tell me what you sell.',
      store: 'Visit Miau Atelier',
      back: 'Back to home',
    },
  },
};
