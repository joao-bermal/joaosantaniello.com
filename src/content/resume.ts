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
 * Bullets follow the "accomplished X, measured by Y, by doing Z" pattern.
 * Style rule: no em or en dashes anywhere.
 */

export type ResumeJob = {
  role: string;
  org: string;
  place: string;
  period: string;
  groups: { title?: string; bullets: string[] }[];
  onePage: string[] | null;
};

export type ResumeProject = { name: string; role: string; text: string; href?: string; hrefLabel?: string };

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
  };
  name: string;
  headline: string;
  location: string;
  summary: string;
  summaryShort: string;
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
  },
  name: 'João Vitor Bermal Santaniello',
  headline: 'Software Engineer · Geospatial Data, Full-Stack and E-commerce',
  location: 'São José dos Campos, SP, Brazil',
  summary:
    'Software engineer with six years of production experience across water utilities, energy, healthcare and telecom. I turn operational problems into working software: Python and GeoPandas data pipelines, ArcGIS Enterprise dashboards and web maps, FastAPI and Node.js services, and React and Next.js applications. For Aegea, one of the largest sanitation groups in Brazil, I build the geospatial analyses behind expansion and concession studies and the data model and dashboards of the Regenera landfill biogas operation. MBA in Software Engineering from USP/ESALQ with a 9/10 thesis in computer vision. Fluent in English from years of work with US clients and international AI benchmark programs. I also design brands and online stores, most recently Miau Atelier, a cat furniture brand I built and run for the US market.',
  summaryShort:
    'Software engineer with six years of production experience in water utilities, energy, healthcare and telecom. I build Python and GeoPandas data pipelines, ArcGIS Enterprise dashboards, FastAPI and Node.js services and React/Next.js applications. For Aegea, one of the largest sanitation groups in Brazil, I cut a recurring geospatial workflow from 3+ hours to about 20 minutes and built the analyses behind its expansion studies. MBA in Software Engineering (USP/ESALQ, thesis 9/10). Fluent English with US teams.',
  experience: [
    {
      role: 'Software Developer',
      org: 'Bizpoke Soluções em Software',
      place: 'São José dos Campos, SP',
      period: 'Dec 2022 to Present',
      groups: [
        {
          title: 'Aegea · Expansion planning and Regenera',
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
          bullets: [
            'Led front-end and mobile delivery for DOMO, building an offline-capable map component in React Native (Expo) with feature create, edit and delete, attribute forms, extra layers and tablet support.',
            'Prototyped the project validation flow in Figma and implemented it in Next.js, TypeScript, Redux and MUI after sign-off from Equatorial.',
          ],
        },
        {
          title: 'Healthcare, telecom and international utilities',
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
      groups: [{ bullets: ['Delivered front-end and back-end changes from business requirements with HTML, CSS, JavaScript, jQuery, PHP and MySQL.'] }],
      onePage: null,
    },
  ],
  projects: [
    {
      name: 'Miau Atelier',
      role: 'Founder, designer and developer · 2026',
      text: 'A cat furniture brand for the US market, built end to end: brand identity, Shopify store in USD with Stripe, Python automation over the Shopify Admin GraphQL API and an AI image pipeline that turns supplier photos into editorial product photography.',
      href: 'miauatelier.com',
    },
    {
      name: 'NAMMAN',
      role: 'Web product',
      text: 'A live app that runs entirely in the browser and syncs amplifier profiles to the user’s computer, with secure sign-in and no server.',
      href: 'github.com/joao-bermal/NAMMAN',
    },
    {
      name: 'OBSIDIAN, The Origin',
      role: 'Brand identity',
      text: 'Complete identity for a premium brownie brand: naming, logo, black and gold palette, typography and positioning copy.',
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
  },
  name: 'João Vitor Bermal Santaniello',
  headline: 'Engenheiro de Software · Dados Geoespaciais, Full-Stack e E-commerce',
  location: 'São José dos Campos, SP',
  summary:
    'Engenheiro de software com seis anos de experiência em produção nos setores de saneamento, energia, saúde e telecom. Transformo problemas operacionais em software funcionando: pipelines de dados em Python e GeoPandas, dashboards e web maps no ArcGIS Enterprise, serviços em FastAPI e Node.js e aplicações em React e Next.js. Para a Aegea, um dos maiores grupos de saneamento do Brasil, construo as análises geoespaciais por trás dos estudos de expansão e concessão e o modelo de dados e os painéis da operação de biogás de aterros do Regenera. MBA em Engenharia de Software pela USP/ESALQ, com TCC nota 9/10 em visão computacional. Inglês fluente, usado há anos com clientes dos Estados Unidos e em programas internacionais de benchmark de IA. Também crio marcas e lojas virtuais, mais recentemente a Miau Atelier, marca de móveis para gatos que construí e opero para o mercado americano.',
  summaryShort:
    'Engenheiro de software com seis anos de experiência em produção em saneamento, energia, saúde e telecom. Construo pipelines de dados em Python e GeoPandas, dashboards no ArcGIS Enterprise, serviços em FastAPI e Node.js e aplicações em React/Next.js. Na Aegea, um dos maiores grupos de saneamento do Brasil, reduzi um fluxo geoespacial recorrente de mais de 3 horas para cerca de 20 minutos e construí as análises dos estudos de expansão. MBA em Engenharia de Software (USP/ESALQ, TCC 9/10). Inglês fluente com times dos EUA.',
  experience: [
    {
      role: 'Desenvolvedor de Software',
      org: 'Bizpoke Soluções em Software',
      place: 'São José dos Campos, SP',
      period: 'Dez 2022 até o momento',
      groups: [
        {
          title: 'Aegea · Planejamento de expansão e Regenera',
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
          bullets: [
            'Liderei o front-end e o mobile do DOMO, construindo em React Native (Expo) um componente de mapa com funcionamento offline, inclusão, edição e remoção de feições, formulários de atributos, camadas adicionais e suporte a tablets.',
            'Prototipei no Figma o fluxo de validação de projetos e implementei em Next.js, TypeScript, Redux e MUI após aprovação da Equatorial.',
          ],
        },
        {
          title: 'Saúde, telecom e utilities internacionais',
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
      groups: [{ bullets: ['Implementei mudanças de front-end e back-end a partir de requisitos de negócio com HTML, CSS, JavaScript, jQuery, PHP e MySQL.'] }],
      onePage: null,
    },
  ],
  projects: [
    {
      name: 'Miau Atelier',
      role: 'Fundador, designer e desenvolvedor · 2026',
      text: 'Marca de móveis para gatos para o mercado americano, construída de ponta a ponta: identidade visual, loja Shopify em dólar com Stripe, automações em Python sobre a Admin GraphQL API da Shopify e um pipeline de IA que transforma fotos de fornecedor em fotografia editorial de produto.',
      href: 'miauatelier.com',
    },
    {
      name: 'NAMMAN',
      role: 'Produto web',
      text: 'App publicado que roda inteiro no navegador e sincroniza perfis de amplificador com o computador do usuário, com login seguro e sem servidor.',
      href: 'github.com/joao-bermal/NAMMAN',
    },
    {
      name: 'OBSIDIAN, The Origin',
      role: 'Identidade visual',
      text: 'Identidade completa para uma marca de brownies premium: naming, logotipo, paleta preto e dourado, tipografia e copy de posicionamento.',
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
