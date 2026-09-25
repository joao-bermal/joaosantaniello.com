import type { Locale } from './site';

/**
 * Single source for the CV. It feeds the /cv/ page and the PDFs in public/docs/
 * (scripts/build-cv.py prints the /cv/pdf/ routes).
 *
 * Two variants come from the same data:
 * - full: everything below, about two pages.
 * - one page: `summaryShort`, each job's `onePage` bullets and the `onePage` skills.
 *   A job with `onePage: null` is left out of the one-page version.
 *
 * The /cv/ page is the extended version: it also shows `highlights`, each group's
 * `context`, `extra` bullets and `stack`, and the `webOnly` projects.
 *
 * Bullets follow the "accomplished X, measured by Y, by doing Z" pattern.
 * Style rule: no em or en dashes anywhere.
 */

/** `context`, `extra` and `stack` only appear on the extended /cv/ page, never in the PDFs. */
export type ResumeGroup = { title?: string; context?: string; bullets: string[]; extra?: string[]; stack?: string[] };

export type ResumeJob = {
  role: string;
  org: string;
  place: string;
  period: string;
  stack?: string[];
  groups: ResumeGroup[];
  onePage: string[] | null;
};

export type ResumeLink = { label: string; href: string };

/** The first link is the one printed in the PDF. `webOnly` projects stay off the PDFs. */
export type ResumeProject = { name: string; role: string; text: string; links?: ResumeLink[]; details?: string[]; stack?: string[]; webOnly?: boolean };

export type ResumeEducation = { degree: string; school: string; place: string; period: string; details: string[]; onePage?: string };

export type Resume = {
  meta: { title: string; description: string };
  labels: {
    summary: string;
    experience: string;
    projects: string;
    education: string;
    skills: string;
    languages: string;
    courses: string;
    downloads: string;
    full: string;
    fullNote: string;
    onePage: string;
    onePageNote: string;
    eyebrow: string;
    intro: string;
    portfolio: string;
    stack: string;
    extendedNote: string;
  };
  name: string;
  headline: string;
  location: string;
  summary: string;
  summaryShort: string;
  highlights: { value: string; label: string }[];
  experience: ResumeJob[];
  projects: ResumeProject[];
  education: ResumeEducation[];
  skills: { label: string; items: string; onePage?: boolean }[];
  languages: string;
  courses: string[];
  files: { full: string; onePage: string };
};

export const resumeContact = {
  email: 'joao.bermal.santaniello@gmail.com',
  phone: '+55 12 99115-8100',
  linkedin: 'linkedin.com/in/joao-santaniello',
  github: 'github.com/joao-bermal',
  site: 'joao-bermal-site.vercel.app',
};

const en: Resume = {
  meta: {
    title: 'CV',
    description:
      'João Vitor Bermal Santaniello, software engineer: geospatial data, full-stack development and e-commerce. Experience, projects, education and skills.',
  },
  labels: {
    summary: 'Summary',
    experience: 'Experience',
    projects: 'Selected projects',
    education: 'Education',
    skills: 'Skills',
    languages: 'Languages',
    courses: 'Courses and events',
    downloads: 'Download',
    full: 'Full CV (PDF)',
    fullNote: 'Two pages, everything',
    onePage: 'One-page resume (PDF)',
    onePageNote: 'ATS friendly',
    eyebrow: 'Curriculum vitae',
    intro: 'Six years building software for water, energy, healthcare and telecom, plus the brands and stores I design on my own.',
    portfolio: 'Portfolio',
    stack: 'Stack',
    extendedNote: 'This is the extended version, with more detail than the PDFs. For applications, download the full CV or the one-page resume.',
  },
  name: 'João Vitor Bermal Santaniello',
  headline: 'Software Engineer · Geospatial Data, Full-Stack and E-commerce',
  location: 'São José dos Campos, SP, Brazil',
  summary:
    'Software engineer with six years of production experience across water utilities, energy, healthcare and telecom. I turn operational problems into working software: Python and GeoPandas data pipelines, ArcGIS Enterprise dashboards and web maps, FastAPI and Node.js services, and React and Next.js applications. For Aegea, one of the largest sanitation groups in Brazil, I build the geospatial analyses behind expansion and concession studies and the data model and dashboards of the Regenera landfill biogas operation. MBA in Software Engineering from USP/ESALQ with a 9/10 thesis in computer vision. Fluent in English from years of work with US clients and international AI benchmark programs. I also design brands and online stores, most recently Miau Atelier, a cat furniture brand I built and run for the US market.',
  summaryShort:
    'Software engineer with six years of production experience in water utilities, energy, healthcare and telecom. I build Python and GeoPandas data pipelines, ArcGIS Enterprise dashboards, FastAPI and Node.js services and React/Next.js applications. For Aegea, one of the largest sanitation groups in Brazil, I cut a recurring geospatial workflow from 3+ hours to about 20 minutes and built the analyses behind its expansion studies. MBA in Software Engineering (USP/ESALQ, thesis 9/10). Fluent English with US teams.',
  highlights: [
    { value: '6 years', label: 'building software in production since 2020' },
    { value: '3h to 20 min', label: 'on a recurring geospatial workflow at Aegea' },
    { value: '16 states', label: 'covered by census tract indicators for expansion studies' },
    { value: '9/10', label: 'MBA thesis in computer vision at USP/ESALQ' },
  ],
  experience: [
    {
      role: 'Software Developer',
      org: 'Bizpoke Soluções em Software',
      place: 'São José dos Campos, SP',
      period: 'Dec 2022 to Present',
      groups: [
        {
          title: 'Aegea · Expansion planning and Regenera',
          context:
            'Aegea is one of the largest private sanitation groups in Brazil. I work with its Expansion Planning team, which uses geospatial data to size markets and prioritize new water and sewer concessions, and with Regenera, its solid waste and landfill biogas operation. The role covers data modeling, Python automation, ArcGIS publishing and requirement work directly with the client.',
          stack: ['Python', 'GeoPandas', 'ArcGIS Pro', 'ArcGIS Enterprise 11.5', 'ArcGIS Dashboards', 'Experience Builder', 'FME', 'PostgreSQL', 'Excel'],
          extra: [
            'Built geofeasibility layers (addresses within 50 m of the water network) enriched with CNEFE attributes and income classes by census tract, used to prioritize prospect regions.',
            'Processed rooftop counts from BDGD for Ceará and Santa Catarina with urban and rural filters and published them as dashboards in staging and production.',
            'Modeled a customer reputation layer for Pará by geocoding records against CNEFE and handed the data model to the Aegea data team.',
            'Consolidated the solid waste database for Rio de Janeiro and produced thematic maps, heatmaps and dashboards for the landfill program.',
            'Defined how the first and last measurement of each well are calculated and added closed valve classification to the measurement beacons.',
            'Created a topology correction tool in GeoPandas and a symbology standardization toolbox reused across dashboards.',
          ],
          bullets: [
            'Cut a recurring geospatial workflow from more than 3 hours to about 20 minutes by building Spatial Extractor, a reusable Python and GeoPandas tool with parallel spatial joins, validation, grouping, area calculation and Excel/Shapefile export.',
            'Delivered census tract indicators for 16 Brazilian states by crossing IBGE census data, CNEFE addresses and ANEEL BDGD electricity records, giving the expansion team demand estimates for water and sewer concession studies.',
            'Co-designed the CITIUS/Regenera data model for landfill biogas operations and loaded its historical and theoretical data (wells, drains, PDRs, collectors, readings, landfill stages), which feeds dashboards with measurement beacons, normalized CH4 classes and weekly filters.',
            'Removed manual steps from weekly routines by automating stage calculations, symbology standardization, file ingestion and PostgreSQL materialized view refreshes with ArcGIS toolboxes, Python and FME.',
            'Kept production dashboards running through the ArcGIS Enterprise 11.5 portal migration by auditing and fixing panels, evaluating Experience Builder as a Dashboards replacement and writing a governance script that reports unused portal items for cleanup.',
            'Took new products from request to production, such as a critical work order dashboard and a field data collection panel, running requirement refinements with Aegea teams, validating data in staging and documenting the dashboard portfolio for a new team.',
          ],
        },
        {
          title: 'Equatorial Energia · DOMO field app',
          context: 'DOMO is a field operations product for Equatorial Energia, one of the largest power distribution groups in Brazil, built in sprints with a multidisciplinary team.',
          stack: ['React Native', 'Expo', 'Next.js', 'TypeScript', 'Redux Toolkit', 'MUI', 'Figma', 'ArcGIS'],
          extra: [
            'Ran the technical spike for the mobile map component with the architecture team, validating offline use, feature editing and alternative public basemaps.',
            'Produced the screen prototypes for the demand validation flow, including the queue of demands waiting for approval by Equatorial.',
          ],
          bullets: [
            'Led front-end and mobile delivery for DOMO, building an offline-capable map component in React Native (Expo) with feature create, edit and delete, attribute forms, extra layers and tablet support.',
            'Prototyped the project validation flow in Figma and implemented it in Next.js, TypeScript, Redux and MUI after sign-off from Equatorial.',
          ],
        },
        {
          title: 'Healthcare, telecom and international utilities',
          context: 'Client projects outside sanitation: a teleophthalmology service, a SaaS for internet providers and GIS work for US utilities through SBS.',
          stack: ['FastAPI', 'Node.js', 'MongoDB', 'AWS Textract', 'AWS S3', 'Tesseract', 'Orthanc', 'Next.js', 'Redux', 'DigitalOcean Spaces', 'Docker', 'NGINX', 'ArcGIS JS API', 'FME'],
          extra: [
            'Designed REST APIs in FastAPI and Node.js backed by MongoDB, with JWT and OAuth authentication.',
            'Containerized services with Docker, Docker Compose and NGINX, with hands-on exposure to Kubernetes orchestration.',
            'Built custom ArcGIS JavaScript API components and FME workflows for utility asset data.',
          ],
          bullets: [
            'Built OCR exam processing with AWS Textract, Tesseract and S3, plus a Raspberry Pi and Orthanc deployment, for a remote teleophthalmology service.',
            'Developed ISPDrive, a SaaS platform for internet providers, with a Next.js and Redux front end, FastAPI services and DigitalOcean Spaces storage with signed URLs.',
            'Automated GIS and utility workflows for North Las Vegas and Duke Energy (through SBS) working in English with US teams, and integrated SAP, IBM Maximo and Schneider Electric systems through Python and JavaScript SDKs.',
          ],
        },
      ],
      onePage: [
        'Cut a recurring geospatial workflow at Aegea from more than 3 hours to about 20 minutes by building a reusable Python and GeoPandas extraction tool with parallel spatial joins, validation and Excel/Shapefile export.',
        'Delivered census tract indicators for 16 Brazilian states by crossing IBGE, CNEFE and ANEEL BDGD data, supporting water and sewer concession studies.',
        'Co-designed the CITIUS/Regenera landfill biogas data model and loaded its historical data, feeding ArcGIS dashboards, web maps and heatmaps used by operations.',
        'Kept production dashboards running through the ArcGIS Enterprise 11.5 migration and automated weekly routines with ArcGIS toolboxes, Python, FME and PostgreSQL.',
        'Led front-end and mobile delivery for DOMO (Equatorial Energia): offline map editing in React Native plus Next.js, TypeScript and Redux screens designed in Figma.',
        'Built OCR exam processing (AWS Textract, S3) for teleophthalmology and ISPDrive, a SaaS for internet providers (Next.js, FastAPI, DigitalOcean Spaces).',
      ],
    },
    {
      role: 'AI Coding Benchmark Contributor (freelance)',
      org: 'Alignerr',
      place: 'Remote',
      period: 'May 2025 to Present',
      stack: ['Python', 'Test design', 'LLM evaluation', 'Technical writing'],
      groups: [
        {
          bullets: [
            'Wrote complex Python problems with reference solutions, test suites and failure analyses for LiveCodeBench and BigCodeBench, each designed to break at least 2 of 4 frontier models (Qwen, DeepSeek, Claude Sonnet, Nova).',
            'Reviewed prompts, specifications and grading criteria for code generation, self-repair and execution tasks in the Mango and Fairylights programs, working fully in English with global teams.',
          ],
        },
      ],
      onePage: [
        'Wrote Python problems, reference solutions and test suites for LiveCodeBench and BigCodeBench, each designed to break at least 2 of 4 frontier code models.',
      ],
    },
    {
      role: 'Software Development Intern',
      org: 'Bizpoke Soluções em Software',
      place: 'São José dos Campos, SP',
      period: 'Apr 2021 to Dec 2022',
      stack: ['React', 'Node.js', 'Python', 'C#', 'ArcGIS Pro', 'ArcGIS Enterprise', 'Git'],
      groups: [
        {
          bullets: [
            'Shipped features for client projects in React, Node.js, Python and C#, versioned with Git across several teams.',
            'Produced, analyzed and published spatial data with ArcGIS Pro and ArcGIS Enterprise, collaborating with offshore teams in English.',
          ],
        },
      ],
      onePage: ['Shipped React, Node.js, Python and C# features and produced spatial data with ArcGIS Pro and Enterprise alongside offshore teams.'],
    },
    {
      role: 'Web Development Intern',
      org: 'NFe Sistemas',
      place: 'São José dos Campos, SP',
      period: 'Oct 2020 to Mar 2021',
      stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'MySQL'],
      groups: [{ bullets: ['Delivered front-end and back-end changes from business requirements with HTML, CSS, JavaScript, jQuery, PHP and MySQL.'] }],
      onePage: null,
    },
  ],
  projects: [
    {
      name: 'Miau Atelier',
      role: 'Founder, designer and developer · 2026',
      text: 'A cat furniture brand for the US market, built end to end: brand identity, Shopify store in USD with Stripe, Python automation over the Shopify Admin GraphQL API and an AI image pipeline that turns supplier photos into editorial product photography.',
      links: [
        { label: 'miauatelier.com', href: 'https://miauatelier.com' },
        { label: 'Case study', href: '/en/cases/miau-atelier/' },
      ],
      details: [
        'Brand identity: name, palette, Playfair Display and Montserrat typography and a brand board that guides every product image.',
        'Shopify store in USD with Stripe, a customized Dawn theme, store policies, Google Merchant Center listings and branded email on the domain.',
        'Python tooling over the Shopify Admin GraphQL API to create products, attach media and manage collections, menus, pages and policies.',
        'An AI art direction pipeline: a prompt builder with room scenes and real product dimensions, contact sheets for review and a script that publishes the approved images.',
      ],
      stack: ['Shopify', 'Liquid', 'Admin GraphQL', 'Stripe', 'Python', 'Next.js', 'Generative AI'],
    },
    {
      name: 'NAMMAN',
      role: 'Web product',
      text: 'A live app that runs entirely in the browser and syncs amplifier profiles to the user’s computer, with secure sign-in and no server.',
      links: [
        { label: 'namman.vercel.app', href: 'https://namman.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/joao-bermal/NAMMAN' },
      ],
    },
    {
      name: 'Retinal AVR pipeline',
      role: 'MBA thesis · 2025',
      text: 'A computational model that analyzes retinal photographs to estimate the arteriolar-to-venular ratio, a marker associated with cardiovascular risk.',
      links: [{ label: 'GitHub', href: 'https://github.com/joao-bermal/retinal-avr-pipeline' }],
      details: [
        'Three stages: vessel segmentation, artery and vein classification and automated AVR computation.',
        'Scientific preprocessing with green channel extraction, CLAHE, gamma correction, normalization and Albumentations augmentation.',
        'Trained and evaluated on DRIVE, IOSTAR, RITE and LES-AV, checking generalization across datasets: Dice 0.827 in segmentation and macro F1 0.963 in A/V classification.',
        'Graded 9/10, with potential use in automated screening, teleophthalmology and early detection of hypertension.',
      ],
      stack: ['Python', 'PyTorch', 'OpenCV', 'NumPy', 'Albumentations'],
      webOnly: true,
    },
  ],
  education: [
    {
      degree: 'MBA in Software Engineering',
      school: 'Universidade de São Paulo (USP/ESALQ)',
      place: 'Piracicaba, SP',
      period: '2024 to 2026',
      details: [
        'Coursework in software architecture, APIs, micro-frontends, cloud, Docker and Kubernetes, DDD, observability, testing, UX, AI and Big Data, leadership and change management.',
        'Thesis (9/10): a three-stage deep learning pipeline for retinal photographs (vessel segmentation, artery/vein classification and arteriolar-to-venular ratio) as a cardiovascular risk marker. PyTorch and OpenCV on DRIVE, IOSTAR, RITE and LES-AV; Dice 0.827 and macro F1 0.963.',
      ],
      onePage: 'Thesis graded 9/10: deep learning pipeline for retinal images (Dice 0.827, A/V macro F1 0.963).',
    },
    {
      degree: 'Associate degree in Systems Analysis and Development',
      school: 'Universidade Paulista (UNIP)',
      place: 'São José dos Campos, SP',
      period: '2021 to 2022',
      details: ['Software design, databases, web and back-end development and project management, completed while working full time.'],
    },
    {
      degree: 'Technical Program in Computing, with high school',
      school: 'Colégio Técnico Antônio Teixeira Fernandes',
      place: 'São José dos Campos, SP',
      period: '2018 to 2020',
      details: ['Programming, web development and algorithms, including team programming competitions.'],
    },
  ],
  skills: [
    { label: 'Languages', items: 'Python, TypeScript, JavaScript, SQL, Bash', onePage: true },
    {
      label: 'Data and GIS',
      items: 'GeoPandas, ArcGIS Pro, ArcGIS Enterprise 11.5, ArcGIS Dashboards, Experience Builder, ArcGIS JS API, FME, PostgreSQL, enterprise geodatabases, ETL and data modeling',
      onePage: true,
    },
    { label: 'Back end', items: 'FastAPI, Node.js, REST APIs, JWT, OAuth, WebSockets, MongoDB, PostgreSQL', onePage: true },
    { label: 'Front end and mobile', items: 'React, Next.js, Redux Toolkit, Tailwind CSS, MUI, React Native (Expo), Figma', onePage: true },
    { label: 'Cloud and DevOps', items: 'Docker, Docker Compose, NGINX, Linux, AWS (S3, Textract, EC2), DigitalOcean Spaces, Vercel, Kubernetes (basic)', onePage: true },
    { label: 'AI and ML', items: 'PyTorch, OpenCV, NumPy, Albumentations, OCR, LLM evaluation, AI coding agents (Claude Code, MCP)', onePage: true },
    { label: 'E-commerce and design', items: 'Shopify (Admin GraphQL, Liquid), Stripe, brand identity, generative image pipelines' },
    { label: 'Ways of working', items: 'Scrum, Git and GitFlow, Jira, ClickUp, Bitbucket, technical documentation, remote work with US and offshore teams' },
  ],
  languages: 'Portuguese (native) · English (fluent, daily professional use)',
  courses: [
    'Python 3: Deep Dive, Part 1 (Udemy, 2025)',
    'Deep Learning Using ArcGIS (Esri, 2024)',
    'ArcGIS Fundamentals (Esri, 2021)',
    'AWS Summit São Paulo (2023) · Esri Developer Summit (2022)',
  ],
  files: {
    full: '/docs/Joao_Bermal_Santaniello_CV_EN.pdf',
    onePage: '/docs/Joao_Bermal_Santaniello_Resume_EN.pdf',
  },
};

const pt: Resume = {
  meta: {
    title: 'Currículo',
    description:
      'João Vitor Bermal Santaniello, engenheiro de software: dados geoespaciais, desenvolvimento full-stack e e-commerce. Experiência, projetos, formação e habilidades.',
  },
  labels: {
    summary: 'Resumo',
    experience: 'Experiência',
    projects: 'Projetos selecionados',
    education: 'Formação',
    skills: 'Habilidades',
    languages: 'Idiomas',
    courses: 'Cursos e eventos',
    downloads: 'Baixar',
    full: 'Currículo completo (PDF)',
    fullNote: 'Duas páginas, tudo',
    onePage: 'Currículo de uma página (PDF)',
    onePageNote: 'Compatível com ATS',
    eyebrow: 'Currículo',
    intro: 'Seis anos construindo software para saneamento, energia, saúde e telecom, além das marcas e lojas que crio por conta própria.',
    portfolio: 'Portfólio',
    stack: 'Stack',
    extendedNote: 'Esta é a versão estendida, com mais detalhes que os PDFs. Para processos seletivos, baixe o currículo completo ou o de uma página.',
  },
  name: 'João Vitor Bermal Santaniello',
  headline: 'Engenheiro de Software · Dados Geoespaciais, Full-Stack e E-commerce',
  location: 'São José dos Campos, SP',
  summary:
    'Engenheiro de software com seis anos de experiência em produção nos setores de saneamento, energia, saúde e telecom. Transformo problemas operacionais em software funcionando: pipelines de dados em Python e GeoPandas, dashboards e web maps no ArcGIS Enterprise, serviços em FastAPI e Node.js e aplicações em React e Next.js. Para a Aegea, um dos maiores grupos de saneamento do Brasil, construo as análises geoespaciais por trás dos estudos de expansão e concessão e o modelo de dados e os painéis da operação de biogás de aterros do Regenera. MBA em Engenharia de Software pela USP/ESALQ, com TCC nota 9/10 em visão computacional. Inglês fluente, usado há anos com clientes dos Estados Unidos e em programas internacionais de benchmark de IA. Também crio marcas e lojas virtuais, mais recentemente a Miau Atelier, marca de móveis para gatos que construí e opero para o mercado americano.',
  summaryShort:
    'Engenheiro de software com seis anos de experiência em produção em saneamento, energia, saúde e telecom. Construo pipelines de dados em Python e GeoPandas, dashboards no ArcGIS Enterprise, serviços em FastAPI e Node.js e aplicações em React/Next.js. Na Aegea, um dos maiores grupos de saneamento do Brasil, reduzi um fluxo geoespacial recorrente de mais de 3 horas para cerca de 20 minutos e construí as análises dos estudos de expansão. MBA em Engenharia de Software (USP/ESALQ, TCC 9/10). Inglês fluente com times dos EUA.',
  highlights: [
    { value: '6 anos', label: 'construindo software em produção desde 2020' },
    { value: '3h para 20 min', label: 'em um fluxo geoespacial recorrente da Aegea' },
    { value: '16 estados', label: 'com indicadores por setor censitário para estudos de expansão' },
    { value: '9/10', label: 'no TCC do MBA em visão computacional na USP/ESALQ' },
  ],
  experience: [
    {
      role: 'Desenvolvedor de Software',
      org: 'Bizpoke Soluções em Software',
      place: 'São José dos Campos, SP',
      period: 'Dez 2022 até o momento',
      groups: [
        {
          title: 'Aegea · Planejamento de expansão e Regenera',
          context:
            'A Aegea é um dos maiores grupos privados de saneamento do Brasil. Trabalho com o time de Planejamento de Expansão, que usa dados geoespaciais para dimensionar mercados e priorizar novas concessões de água e esgoto, e com a Regenera, operação de resíduos sólidos e biogás de aterros. A função vai da modelagem de dados à automação em Python, publicação no ArcGIS e levantamento de requisitos direto com o cliente.',
          stack: ['Python', 'GeoPandas', 'ArcGIS Pro', 'ArcGIS Enterprise 11.5', 'ArcGIS Dashboards', 'Experience Builder', 'FME', 'PostgreSQL', 'Excel'],
          extra: [
            'Construí camadas de geofactíveis (endereços a até 50 m da rede de água) enriquecidas com atributos do CNEFE e classes de renda por setor censitário, usadas para priorizar regiões de prospecção.',
            'Processei a contagem de telhados da BDGD para Ceará e Santa Catarina com filtros urbano e rural e publiquei os resultados em dashboards de homologação e produção.',
            'Modelei a camada de reputação de clientes do Pará geocodificando registros com o CNEFE e entreguei o modelo de dados ao time de dados da Aegea.',
            'Consolidei a base de resíduos sólidos do Rio de Janeiro e produzi mapas temáticos, heatmaps e dashboards para o programa de aterros.',
            'Defini o cálculo da medição inicial e final de cada poço e adicionei a classificação de válvula fechada aos faróis de medição.',
            'Criei uma ferramenta de correção de topologia em GeoPandas e uma toolbox de padronização de simbologia reaproveitada nos dashboards.',
          ],
          bullets: [
            'Reduzi um fluxo geoespacial recorrente de mais de 3 horas para cerca de 20 minutos criando o Spatial Extractor, ferramenta reutilizável em Python e GeoPandas com spatial joins paralelos, validação, agrupamento, cálculo de área e exportação para Excel e Shapefile.',
            'Entreguei indicadores por setor censitário para 16 estados cruzando Censo do IBGE, endereços do CNEFE e dados da BDGD da ANEEL, dando ao time de expansão estimativas de demanda para estudos de concessão de água e esgoto.',
            'Participei da definição do modelo de dados CITIUS/Regenera para a operação de biogás de aterros e fiz a carga dos dados históricos e teóricos (poços, drenos, PDRs, coletores, medições, etapas), que alimentam painéis com faróis de medição, classes de CH4 normalizado e filtros semanais.',
            'Eliminei etapas manuais de rotinas semanais automatizando cálculo de etapas, padronização de simbologia, ingestão de arquivos e atualização de views materializadas no PostgreSQL com toolboxes do ArcGIS, Python e FME.',
            'Mantive os painéis de produção funcionando na migração do Portal para o ArcGIS Enterprise 11.5, auditando e corrigindo dashboards, avaliando o Experience Builder como substituto do Dashboards e criando um script de governança que aponta itens sem uso no portal para limpeza.',
            'Levei novos produtos da solicitação à produção, como o dashboard de OS críticas e o painel de dados de coleta, conduzindo refinamentos de requisitos com a Aegea, validando dados em homologação e documentando o portfólio de dashboards para um novo time.',
          ],
        },
        {
          title: 'Equatorial Energia · app de campo DOMO',
          context: 'O DOMO é um produto de operações de campo da Equatorial Energia, um dos maiores grupos de distribuição de energia do Brasil, desenvolvido em sprints com um time multidisciplinar.',
          stack: ['React Native', 'Expo', 'Next.js', 'TypeScript', 'Redux Toolkit', 'MUI', 'Figma', 'ArcGIS'],
          extra: [
            'Conduzi o spike técnico do componente de mapa mobile com o time de arquitetura, validando uso offline, edição de feições e basemaps públicos alternativos.',
            'Produzi os protótipos de tela do fluxo de validação de demandas, incluindo a fila de demandas aguardando aprovação da Equatorial.',
          ],
          bullets: [
            'Liderei o front-end e o mobile do DOMO, construindo em React Native (Expo) um componente de mapa com funcionamento offline, inclusão, edição e remoção de feições, formulários de atributos, camadas adicionais e suporte a tablets.',
            'Prototipei no Figma o fluxo de validação de projetos e implementei em Next.js, TypeScript, Redux e MUI após aprovação da Equatorial.',
          ],
        },
        {
          title: 'Saúde, telecom e utilities internacionais',
          context: 'Projetos de clientes fora do saneamento: um serviço de teleoftalmologia, um SaaS para provedores de internet e trabalhos de GIS para utilities dos EUA via SBS.',
          stack: ['FastAPI', 'Node.js', 'MongoDB', 'AWS Textract', 'AWS S3', 'Tesseract', 'Orthanc', 'Next.js', 'Redux', 'DigitalOcean Spaces', 'Docker', 'NGINX', 'ArcGIS JS API', 'FME'],
          extra: [
            'Desenhei APIs REST em FastAPI e Node.js com MongoDB, autenticação JWT e OAuth.',
            'Conteinerizei serviços com Docker, Docker Compose e NGINX, com experiência prática em orquestração com Kubernetes.',
            'Construí componentes customizados com a ArcGIS JavaScript API e fluxos no FME para dados de ativos de utilities.',
          ],
          bullets: [
            'Construí o processamento de exames com OCR usando AWS Textract, Tesseract e S3, além de uma implantação com Raspberry Pi e Orthanc, para um serviço de teleoftalmologia.',
            'Desenvolvi o ISPDrive, plataforma SaaS para provedores de internet, com front-end em Next.js e Redux, serviços em FastAPI e armazenamento no DigitalOcean Spaces com URLs assinadas.',
            'Automatizei fluxos de GIS e utilities para North Las Vegas e Duke Energy (via SBS) trabalhando em inglês com times dos EUA, e integrei sistemas SAP, IBM Maximo e Schneider Electric com SDKs em Python e JavaScript.',
          ],
        },
      ],
      onePage: [
        'Reduzi um fluxo geoespacial recorrente da Aegea de mais de 3 horas para cerca de 20 minutos com uma ferramenta reutilizável em Python e GeoPandas, com spatial joins paralelos, validação e exportação para Excel e Shapefile.',
        'Entreguei indicadores por setor censitário para 16 estados cruzando IBGE, CNEFE e BDGD da ANEEL, apoiando estudos de concessão de água e esgoto.',
        'Participei da definição do modelo de dados CITIUS/Regenera (biogás de aterros) e fiz a carga dos históricos, alimentando dashboards, web maps e heatmaps usados pela operação.',
        'Mantive os painéis de produção na migração para o ArcGIS Enterprise 11.5 e automatizei rotinas semanais com toolboxes do ArcGIS, Python, FME e PostgreSQL.',
        'Liderei o front-end e o mobile do DOMO (Equatorial Energia): edição de mapas offline em React Native e telas em Next.js, TypeScript e Redux desenhadas no Figma.',
        'Construí o processamento de exames com OCR (AWS Textract, S3) para teleoftalmologia e o ISPDrive, SaaS para provedores (Next.js, FastAPI, DigitalOcean Spaces).',
      ],
    },
    {
      role: 'Colaborador de Benchmarks de Código para IA (freelancer)',
      org: 'Alignerr',
      place: 'Remoto',
      period: 'Mai 2025 até o momento',
      stack: ['Python', 'Design de testes', 'Avaliação de LLMs', 'Escrita técnica'],
      groups: [
        {
          bullets: [
            'Escrevi problemas complexos em Python com soluções de referência, suítes de teste e análises de falha para o LiveCodeBench e o BigCodeBench, cada um desenhado para derrubar pelo menos 2 de 4 modelos de ponta (Qwen, DeepSeek, Claude Sonnet, Nova).',
            'Revisei prompts, especificações e critérios de avaliação de tarefas de geração de código, self-repair e execução nos programas Mango e Fairylights, trabalhando inteiramente em inglês com times globais.',
          ],
        },
      ],
      onePage: ['Escrevi problemas em Python, soluções de referência e testes para o LiveCodeBench e o BigCodeBench, cada um desenhado para derrubar pelo menos 2 de 4 modelos de ponta.'],
    },
    {
      role: 'Estagiário de Desenvolvimento de Software',
      org: 'Bizpoke Soluções em Software',
      place: 'São José dos Campos, SP',
      period: 'Abr 2021 a Dez 2022',
      stack: ['React', 'Node.js', 'Python', 'C#', 'ArcGIS Pro', 'ArcGIS Enterprise', 'Git'],
      groups: [
        {
          bullets: [
            'Entreguei funcionalidades para projetos de clientes em React, Node.js, Python e C#, com versionamento em Git em vários times.',
            'Produzi, analisei e publiquei dados espaciais com ArcGIS Pro e ArcGIS Enterprise, colaborando em inglês com times offshore.',
          ],
        },
      ],
      onePage: ['Entreguei funcionalidades em React, Node.js, Python e C# e produzi dados espaciais com ArcGIS Pro e Enterprise junto a times offshore.'],
    },
    {
      role: 'Estagiário de Desenvolvimento Web',
      org: 'NFe Sistemas',
      place: 'São José dos Campos, SP',
      period: 'Out 2020 a Mar 2021',
      stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'MySQL'],
      groups: [{ bullets: ['Implementei mudanças de front-end e back-end a partir de requisitos de negócio com HTML, CSS, JavaScript, jQuery, PHP e MySQL.'] }],
      onePage: null,
    },
  ],
  projects: [
    {
      name: 'Miau Atelier',
      role: 'Fundador, designer e desenvolvedor · 2026',
      text: 'Marca de móveis para gatos para o mercado americano, construída de ponta a ponta: identidade visual, loja Shopify em dólar com Stripe, automações em Python sobre a Admin GraphQL API da Shopify e um pipeline de IA que transforma fotos de fornecedor em fotografia editorial de produto.',
      links: [
        { label: 'miauatelier.com', href: 'https://miauatelier.com' },
        { label: 'Ver o case', href: '/cases/miau-atelier/' },
      ],
      details: [
        'Identidade visual: nome, paleta, tipografia Playfair Display e Montserrat e um brand board que orienta cada imagem de produto.',
        'Loja Shopify em dólar com Stripe, tema Dawn customizado, políticas da loja, anúncios no Google Merchant Center e e-mail com o domínio da marca.',
        'Ferramentas em Python sobre a Admin GraphQL API da Shopify para criar produtos, anexar mídias e gerenciar coleções, menus, páginas e políticas.',
        'Um pipeline de direção de arte com IA: gerador de prompts com cenas de ambiente e medidas reais do produto, contact sheets para revisão e um script que publica as imagens aprovadas.',
      ],
      stack: ['Shopify', 'Liquid', 'Admin GraphQL', 'Stripe', 'Python', 'Next.js', 'IA generativa'],
    },
    {
      name: 'NAMMAN',
      role: 'Produto web',
      text: 'App publicado que roda inteiro no navegador e sincroniza perfis de amplificador com o computador do usuário, com login seguro e sem servidor.',
      links: [
        { label: 'namman.vercel.app', href: 'https://namman.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/joao-bermal/NAMMAN' },
      ],
    },
    {
      name: 'Pipeline de AVR em retinografias',
      role: 'TCC do MBA · 2025',
      text: 'Modelo computacional que analisa retinografias para estimar a razão arteríolo-venular, marcador associado ao risco cardiovascular.',
      links: [{ label: 'GitHub', href: 'https://github.com/joao-bermal/retinal-avr-pipeline' }],
      details: [
        'Três etapas: segmentação vascular, classificação artéria/veia e cálculo automatizado da AVR.',
        'Pré-processamento científico com canal verde, CLAHE, correção gamma, normalização e augmentation com Albumentations.',
        'Treinado e avaliado em DRIVE, IOSTAR, RITE e LES-AV, verificando a generalização entre bases: Dice 0,827 na segmentação e Macro F1 0,963 na classificação A/V.',
        'Nota 9/10, com potencial para triagem automatizada, teleoftalmologia e detecção precoce de hipertensão.',
      ],
      stack: ['Python', 'PyTorch', 'OpenCV', 'NumPy', 'Albumentations'],
      webOnly: true,
    },
  ],
  education: [
    {
      degree: 'MBA em Engenharia de Software',
      school: 'Universidade de São Paulo (USP/ESALQ)',
      place: 'Piracicaba, SP',
      period: '2024 a 2026',
      details: [
        'Arquitetura de software, APIs, micro-frontends, cloud, Docker e Kubernetes, DDD, observabilidade, testes, UX, IA e Big Data, liderança e gestão da mudança.',
        'TCC (nota 9/10): pipeline de deep learning em três etapas para retinografias (segmentação vascular, classificação artéria/veia e razão arteríolo-venular) como marcador de risco cardiovascular. PyTorch e OpenCV sobre DRIVE, IOSTAR, RITE e LES-AV; Dice 0,827 e Macro F1 0,963.',
      ],
      onePage: 'TCC nota 9/10: pipeline de deep learning para retinografias (Dice 0,827, Macro F1 A/V 0,963).',
    },
    {
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      school: 'Universidade Paulista (UNIP)',
      place: 'São José dos Campos, SP',
      period: '2021 a 2022',
      details: ['Projeto de software, bancos de dados, desenvolvimento web e back-end e gestão de projetos, cursado em paralelo ao trabalho.'],
    },
    {
      degree: 'Técnico em Informática integrado ao Ensino Médio',
      school: 'Colégio Técnico Antônio Teixeira Fernandes',
      place: 'São José dos Campos, SP',
      period: '2018 a 2020',
      details: ['Programação, desenvolvimento web e algoritmos, incluindo competições de programação em equipe.'],
    },
  ],
  skills: [
    { label: 'Linguagens', items: 'Python, TypeScript, JavaScript, SQL, Bash', onePage: true },
    {
      label: 'Dados e GIS',
      items: 'GeoPandas, ArcGIS Pro, ArcGIS Enterprise 11.5, ArcGIS Dashboards, Experience Builder, ArcGIS JS API, FME, PostgreSQL, geodatabases enterprise, ETL e modelagem de dados',
      onePage: true,
    },
    { label: 'Back-end', items: 'FastAPI, Node.js, APIs REST, JWT, OAuth, WebSockets, MongoDB, PostgreSQL', onePage: true },
    { label: 'Front-end e mobile', items: 'React, Next.js, Redux Toolkit, Tailwind CSS, MUI, React Native (Expo), Figma', onePage: true },
    { label: 'Cloud e DevOps', items: 'Docker, Docker Compose, NGINX, Linux, AWS (S3, Textract, EC2), DigitalOcean Spaces, Vercel, Kubernetes (básico)', onePage: true },
    { label: 'IA e ML', items: 'PyTorch, OpenCV, NumPy, Albumentations, OCR, avaliação de LLMs, agentes de código (Claude Code, MCP)', onePage: true },
    { label: 'E-commerce e design', items: 'Shopify (Admin GraphQL, Liquid), Stripe, identidade visual, pipelines de imagem generativa' },
    { label: 'Forma de trabalho', items: 'Scrum, Git e GitFlow, Jira, ClickUp, Bitbucket, documentação técnica, trabalho remoto com times dos EUA e offshore' },
  ],
  languages: 'Português (nativo) · Inglês (fluente, uso profissional diário)',
  courses: [
    'Python 3: Deep Dive, Part 1 (Udemy, 2025)',
    'Deep Learning Using ArcGIS (Esri, 2024)',
    'ArcGIS Fundamentals (Esri, 2021)',
    'AWS Summit São Paulo (2023) · Esri Developer Summit (2022)',
  ],
  files: {
    full: '/docs/Joao_Bermal_Santaniello_Curriculo_PT.pdf',
    onePage: '/docs/Joao_Bermal_Santaniello_Curriculo_1pag_PT.pdf',
  },
};

export const resume: Record<Locale, Resume> = { pt, en };
