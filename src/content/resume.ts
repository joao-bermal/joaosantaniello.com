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

/** The first link is the one printed in the PDF. `webOnly` projects stay off the PDFs; `onePage` is a short line that puts the project on the one-page resume too; `printAllLinks` prints the other links after the text. */
export type ResumeProject = { name: string; role: string; text: string; links?: ResumeLink[]; details?: string[]; stack?: string[]; webOnly?: boolean; onePage?: string; printAllLinks?: boolean };

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
  site: 'joaosantaniello.com',
};

const en: Resume = {
  meta: {
    title: 'CV',
    description:
      'João Vitor Bermal Santaniello, software engineer: full-stack products, AI-augmented delivery and geospatial data. Experience, projects, education and skills.',
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
    intro: 'Six years building software for water, energy, healthcare and telecom, now AI-native with Claude Code, plus the brands and stores I design on my own.',
    portfolio: 'Portfolio',
    stack: 'Stack',
    extendedNote: 'This is the extended version, with more detail than the PDFs. For applications, download the full CV or the one-page resume.',
  },
  name: 'João Vitor Bermal Santaniello',
  headline: 'Software Engineer · Full-Stack, AI-Augmented Delivery and Geospatial Data',
  location: 'São José dos Campos, SP, Brazil',
  summary:
    'Software engineer with six years of production experience across water utilities, energy, healthcare and telecom. I build full-stack products and data pipelines with FastAPI, Node.js, React, Next.js, Python and ArcGIS. I was the main developer of EyeConnect, a teleophthalmology platform in production, from its clinic DICOM gateway to OCR exam intake, rewrote ISPDrive, a multi-tenant SaaS for internet providers, and build the geospatial analyses behind expansion studies at Aegea, one of the largest sanitation groups in Brazil. Claude Code is now my primary environment. MBA in Software Engineering (USP/ESALQ, deep learning thesis graded 9/10), fluent English with US teams.',
  summaryShort:
    'Software engineer with six years of production experience in water utilities, energy, healthcare and telecom. Main developer of EyeConnect, a teleophthalmology platform in production, and of the ISPDrive rewrite. For Aegea I cut a geospatial workflow from 3+ hours to about 20 minutes. AI-native with Claude Code and MCP. MBA (USP/ESALQ, thesis 9/10), fluent English.',
  highlights: [
    { value: '6 years', label: 'building software in production since 2020' },
    { value: '3h to 20 min', label: 'on a recurring geospatial workflow at Aegea' },
    { value: '~40%', label: 'of EyeConnect’s production code, more than any other author' },
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
            'Removed manual steps from weekly routines by automating stage calculations, symbology standardization, file ingestion and PostgreSQL materialized view refreshes with ArcGIS toolboxes, Python and FME.',
            'Took new products from request to production, such as a critical work order dashboard and a field data collection panel, running requirement refinements with Aegea teams and documenting the dashboard portfolio for a new team.',
            'Built geofeasibility layers (addresses within 50 m of the water network) enriched with CNEFE attributes and income classes by census tract, used to prioritize prospect regions.',
            'Processed rooftop counts from BDGD for Ceará and Santa Catarina with urban and rural filters and published them as dashboards in staging and production.',
            'Modeled a customer reputation layer for Pará by geocoding records against CNEFE and handed the data model to the Aegea data team.',
            'Consolidated the solid waste database for Rio de Janeiro and produced thematic maps, heatmaps and dashboards for the landfill program.',
            'Defined how the first and last measurement of each well are calculated and added closed valve classification to the measurement beacons.',
            'Created a topology correction tool in GeoPandas and a symbology standardization toolbox reused across dashboards.',
          ],
          bullets: [
            'Cut a recurring geospatial workflow from more than 3 hours to about 20 minutes with Spatial Extractor, a reusable Python and GeoPandas tool with parallel spatial joins, validation and Excel/Shapefile export.',
            'Delivered census tract indicators for 16 Brazilian states by crossing IBGE census, CNEFE addresses and ANEEL BDGD records, giving the expansion team demand estimates for concession studies.',
            'Co-designed the CITIUS/Regenera data model for landfill biogas operations and loaded its historical data (wells, drains, collectors, readings), feeding dashboards with measurement beacons and normalized CH4 classes.',
            'Kept production dashboards running through the ArcGIS Enterprise 11.5 migration by auditing and fixing panels, and wrote a governance script that reports unused portal items for cleanup.',
          ],
        },
        {
          title: 'AI-augmented delivery with Claude Code',
          context: 'Claude Code is now my primary environment at Bizpoke. I write the shared context and tools that let the whole team use it the same way on client projects.',
          stack: ['Claude Code', 'MCP', 'ClickUp', 'FastAPI', 'DuckDB', 'Apache Sedona', 'H3', 'Redis'],
          extra: [
            'Built an OAuth2 client for the ArcGIS Enterprise REST API with automatic backups before every edit and strict separation of production and staging portals, so the agent can update dashboards in bulk safely.',
            'Turned recurring failures into guardrails: the dashboard skill documents traps found in real sessions and verifies saves through network requests.',
          ],
          bullets: [
            'Authored a shared library of nine Claude Code skills and a root CLAUDE.md inherited by 13 Aegea project folders (project bootstrap, ArcGIS API client, dashboard editing, delivery documents, status reporting), so every teammate works from the same playbook.',
            'Connected Claude Code through MCP to ClickUp for daily client status reports, and contributed to BizpokeBI, our geospatial data platform, and its bizpoke MCP server with approval-gated writes.',
          ],
        },
        {
          title: 'EyeConnect · teleophthalmology platform in production',
          context: 'EyeConnect connects eye clinics to remote ophthalmologists: clinics send exams, doctors write the reports and patients receive the results by link. I was its main developer in 2023 and 2024, wrote about 40% of the platform code in production today and built the clinic gateway alone.',
          stack: ['Meteor', 'Blaze', 'MongoDB Atlas', 'AWS S3', 'AWS Textract', 'Google Document AI', 'Node.js', 'Orthanc', 'DICOM', 'pydicom', 'Raspberry Pi', 'systemd', 'OpenVPN', 'Docker', 'Meteor Up'],
          extra: [
            'Upgraded the platform from Meteor 1.10 to 2.15 and maintained Docker and Meteor Up deploys for the development, QA and production environments.',
            'Added exam locking with automatic release after an hour, SMS credit monitoring, an SMS resend area and payer types for public, private and health plan exams.',
            'Classified DICOM exams by SOP class and protocol tags (angiography, retinography, ICG, visual field, OCT macula and disc), with a Python pydicom service as fallback for pixel data and encapsulated PDFs, and a folder state machine with retries and purge.',
            'Moved the gateway OCR from Google Document AI to AWS Textract, then brought it into the platform for bulk uploads.',
            'Shipped SMS and email notifications with short links, invoicing and cost reports and a white-label clinic portal.',
            'Smaller changes to older integrations: patient phone lookup in a hospital TASY (Oracle) database and SFTP support for the Phelcom Eyer retinal camera.',
          ],
          bullets: [
            'Built, as sole developer, a Raspberry Pi exam gateway for clinics: Orthanc receives DICOM from eye devices, and a Node.js service classifies exams, reads PDF reports with AWS Textract and posts them to the platform over OpenVPN.',
            'Brought the OCR into the platform: bulk PDF uploads to S3, AWS Textract and parsers for 14 exam devices (Zeiss Cirrus and HFA, Spectralis and others), with deduplication and retries.',
            'Generated rule-based draft reports for visual field and OCT exams and structured reports with PDF output, and integrated the Clinic Web (Linx) API to find patients by CPF and send exams back.',
          ],
        },
        {
          title: 'ISPDrive · white-label cloud storage for internet providers',
          context: 'ISPDrive is a cloud storage service that internet providers resell to their subscribers under their own brand, starting with G6 Internet. I built its reporting tools in 2021 and 2022 and have been its only developer since 2024.',
          stack: ['FastAPI', 'MongoDB Atlas', 'ODMantic', 'Next.js 14', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'DigitalOcean Spaces', 'Docker Compose', 'NGINX', 'Let’s Encrypt', 'pytest'],
          extra: [
            'Built the first reporting stack in 2021 and 2022: a report API in Express and MySQL (login history and data usage) and a React dashboard with MUI DataGrid and Recharts, and later moved the upload server from MySQL to MongoDB.',
            'Covered the API with pytest integration tests against MongoDB with mocked storage.',
          ],
          bullets: [
            'Rewrote the product in FastAPI, MongoDB and Next.js 14 as a multi-tenant SaaS: per-provider branding, sign-in against each provider’s ERP, and uploads and downloads straight to DigitalOcean Spaces through presigned URLs.',
            'Built the admin area with usage dashboards, an audit trail of 11 action types and a quota report used for invoicing, and deployed it on DigitalOcean with Docker Compose, NGINX and automatic Let’s Encrypt renewal.',
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
          title: 'US utilities through SBS',
          context: 'GIS and integration work for US utilities through SBS, in English with US teams.',
          stack: ['ArcGIS JS API', 'FME', 'Python', 'JavaScript', 'SAP', 'IBM Maximo'],
          extra: ['Built custom ArcGIS JavaScript API components and FME workflows for utility asset data.'],
          bullets: [
            'Automated GIS workflows for North Las Vegas and Duke Energy and integrated SAP, IBM Maximo and Schneider Electric via Python and JS SDKs.',
          ],
        },
      ],
      onePage: [
        'Cut a recurring geospatial workflow at Aegea from more than 3 hours to about 20 minutes with a reusable Python and GeoPandas tool, and delivered census tract indicators for 16 states for concession studies.',
        'Co-designed the CITIUS/Regenera landfill biogas data model and kept production ArcGIS dashboards running through the Enterprise 11.5 migration.',
        'Main developer of EyeConnect (teleophthalmology, in production): Raspberry Pi DICOM gateway and OCR exam intake with AWS Textract.',
        'Rewrote ISPDrive, a multi-tenant storage SaaS for internet providers, in FastAPI, MongoDB and Next.js 14.',
        'Authored nine shared Claude Code skills and MCP connections (ClickUp, the bizpoke MCP server) used across 13 Aegea projects.',
        'Led front-end and mobile delivery for DOMO (Equatorial Energia): offline map editing in React Native plus Next.js, TypeScript and Redux screens.',
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
            'Wrote Python problems with reference solutions and test suites for LiveCodeBench and BigCodeBench, each designed to break at least 2 of 4 frontier models, and reviewed prompts and grading criteria in the Mango and Fairylights programs.',
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
            'Shipped React, Node.js, Python and C# features for client projects and produced spatial data with ArcGIS Pro and Enterprise alongside offshore teams, in English.',
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
      groups: [{ bullets: ['Delivered front-end and back-end changes with HTML, CSS, JavaScript, jQuery, PHP and MySQL.'] }],
      onePage: null,
    },
  ],
  projects: [
    {
      name: 'Triage Desk',
      role: 'AI support triage for D2C brands · 2026',
      text: 'Live demo of AI customer support for several brands: n8n ingests messages, a Claude agent in a Supabase Edge Function drafts replies with policy and catalog sub-agents, and staff approve them in Next.js. Brand data is isolated with Postgres RLS and pgTAP tests.',
      links: [
        { label: 'triage.joaosantaniello.com', href: 'https://triage.joaosantaniello.com' },
        { label: 'Code: github.com/joao-bermal/triage-desk', href: 'https://github.com/joao-bermal/triage-desk' },
      ],
      printAllLinks: true,
      details: [
        'Orchestrator agent with strict tools, structured outputs and prompt caching; about 20 seconds and US$0.03 per ticket.',
        'Idempotent ingestion, HMAC verified Shopify order sync, a backlog sweep and an error workflow in n8n.',
        'Public demo with a daily reset and a cap on re-runs; a technical design document in the repository.',
      ],
      stack: ['Claude API', 'Supabase', 'PostgreSQL RLS', 'Edge Functions', 'n8n', 'Next.js', 'Vercel', 'pgTAP'],
      onePage: 'Live demo: Claude agent with sub-agents in a Supabase Edge Function, n8n workflows, RLS with pgTAP tests, Next.js on Vercel.',
    },
    {
      name: 'Retinal AVR pipeline',
      role: 'MBA thesis in deep learning · 2025 to 2026',
      text: 'PyTorch pipeline that estimates the arteriolar-to-venular ratio, a cardiovascular risk marker, from retinal photographs: a U-Net segments vessels (Dice 0.79 on held-out DRIVE images), a ResNet-50 network separates arteries from veins, and an optic disc model cut the disc center error from 358 to 11 px for Knudtson caliber measurement.',
      links: [{ label: 'GitHub', href: 'https://github.com/joao-bermal/retinal-avr-pipeline' }],
      details: [
        'Enhanced U-Net with residual blocks, batch normalization and a BCE plus Dice loss, after preprocessing with the green channel, CLAHE, gamma correction and Albumentations.',
        'Artery and vein network with a ResNet-50 encoder, Squeeze-and-Excitation and a vessel constraint module, trained on IOSTAR and RITE.',
        'Optic disc U-Net with a classical computer vision fallback: median center error of 11.1 px on held-out IOSTAR images, against 357.9 px for the image center assumed in the original thesis.',
        'CRAE and CRVE by iterative Knudtson combination inside the peripapillary Zone B, AVR = CRAE / CRVE and a risk category.',
        'Reproducible runs on an AMD RX 6800XT with ROCm and a metrics document that states the known limits (a held-out split for the artery and vein model is the next run); a FastAPI endpoint and a Next.js upload page.',
        'Graded 9/10, with potential use in automated screening and teleophthalmology.',
      ],
      stack: ['Python', 'PyTorch', 'OpenCV', 'Albumentations', 'ROCm', 'FastAPI', 'Next.js'],
    },
    {
      name: 'Miau Atelier',
      role: 'Founder, designer and developer · 2026',
      text: 'A cat furniture brand for the US market, built end to end: brand identity, Shopify store in USD with Stripe, Python automation over the Admin GraphQL API and an AI image pipeline for product photography.',
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
      role: 'Next.js on Vercel · 2026',
      text: 'Browser-only app that syncs Neural Amp Modeler profiles from the TONE3000 API to disk: OAuth 2.0 with PKCE, File System Access API, IndexedDB, backoff and throttled bulk downloads, no server.',
      links: [
        { label: 'namman.vercel.app', href: 'https://namman.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/joao-bermal/NAMMAN' },
      ],
    },
  ],
  education: [
    {
      degree: 'MBA in Software Engineering',
      school: 'Universidade de São Paulo (USP/ESALQ)',
      place: 'Piracicaba, SP',
      period: '2024 to 2026',
      details: [
        'Coursework in software architecture, APIs, cloud, Docker and Kubernetes, DDD, observability, testing and AI.',
        'Thesis graded 9/10: the retinal AVR pipeline under Selected projects.',
      ],
      onePage: 'Thesis graded 9/10: deep learning pipeline for retinal images (vessel Dice 0.79 on held-out data, optic disc error cut from 358 to 11 px).',
    },
    {
      degree: 'Associate degree in Systems Analysis and Development',
      school: 'Universidade Paulista (UNIP)',
      place: 'São José dos Campos, SP',
      period: '2021 to 2022',
      details: ['Software design, databases, web and back-end development, completed while working full time.'],
    },
    {
      degree: 'Technical Program in Computing, with high school',
      school: 'Colégio Técnico Antônio Teixeira Fernandes',
      place: 'São José dos Campos, SP',
      period: '2018 to 2020',
      details: [],
    },
  ],
  skills: [
    { label: 'Languages', items: 'Python, TypeScript, JavaScript, SQL, Bash', onePage: true },
    {
      label: 'Data and GIS',
      items: 'GeoPandas, ArcGIS Pro, ArcGIS Enterprise 11.5, ArcGIS Dashboards, Experience Builder, ArcGIS JS API, FME, PostgreSQL, enterprise geodatabases, ETL and data modeling',
      onePage: true,
    },
    { label: 'Back end', items: 'FastAPI, Node.js, Meteor, REST APIs, JWT, OAuth, WebSockets, MongoDB, PostgreSQL, Supabase, DICOM', onePage: true },
    { label: 'Front end and mobile', items: 'React, Next.js, Redux Toolkit, Tailwind CSS, MUI, React Native (Expo), Figma', onePage: true },
    { label: 'Cloud and DevOps', items: 'Docker, NGINX, Linux, AWS (S3, Textract, EC2), DigitalOcean, Vercel, n8n, basic Kubernetes', onePage: true },
    { label: 'AI and ML', items: 'Claude Code (skills, MCP, sub-agents), Claude API, PyTorch, OpenCV, OCR (Textract), LLM evaluation', onePage: true },
    { label: 'E-commerce and design', items: 'Shopify (Admin GraphQL, Liquid), Stripe, brand identity, generative image pipelines' },
    { label: 'Ways of working', items: 'Scrum, Git and GitFlow, Jira, ClickUp, technical documentation, remote work with US teams' },
  ],
  languages: 'Portuguese (native) · English (fluent, daily professional use)',
  courses: [
    'Python 3: Deep Dive, Part 1 (Udemy, 2025)',
    'Deep Learning Using ArcGIS (Esri, 2024)',
    'AWS Summit São Paulo (2023)',
  ],
  files: {
    full: '/docs/Joao_Santaniello_CV_EN.pdf',
    onePage: '/docs/Joao_Santaniello_Resume_EN.pdf',
  },
};

const pt: Resume = {
  meta: {
    title: 'Currículo',
    description:
      'João Vitor Bermal Santaniello, engenheiro de software: produtos full-stack, entrega com IA e dados geoespaciais. Experiência, projetos, formação e habilidades.',
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
    intro: 'Seis anos construindo software para saneamento, energia, saúde e telecom, hoje com IA no centro do trabalho via Claude Code, além das marcas e lojas que crio por conta própria.',
    portfolio: 'Portfólio',
    stack: 'Stack',
    extendedNote: 'Esta é a versão estendida, com mais detalhes que os PDFs. Para processos seletivos, baixe o currículo completo ou o de uma página.',
  },
  name: 'João Vitor Bermal Santaniello',
  headline: 'Engenheiro de Software · Full-Stack, Entrega com IA e Dados Geoespaciais',
  location: 'São José dos Campos, SP',
  summary:
    'Engenheiro de software com seis anos de experiência em produção nos setores de saneamento, energia, saúde e telecom. Construo produtos full-stack e pipelines de dados com FastAPI, Node.js, React, Next.js, Python e ArcGIS. Fui o principal desenvolvedor do EyeConnect, plataforma de teleoftalmologia em produção, do gateway DICOM das clínicas à entrada de exames por OCR, reescrevi o ISPDrive, SaaS multi-tenant para provedores de internet, e construo as análises geoespaciais dos estudos de expansão da Aegea, um dos maiores grupos de saneamento do Brasil. Hoje o Claude Code é meu principal ambiente de desenvolvimento. MBA em Engenharia de Software (USP/ESALQ, TCC em deep learning com nota 9/10) e inglês fluente com times dos EUA.',
  summaryShort:
    'Engenheiro de software com seis anos de experiência em produção em saneamento, energia, saúde e telecom. Principal desenvolvedor do EyeConnect (teleoftalmologia) e da reescrita do ISPDrive. Na Aegea, reduzi um fluxo geoespacial de 3+ horas para cerca de 20 minutos. IA via Claude Code e MCP. MBA (USP/ESALQ, TCC 9/10), inglês fluente.',
  highlights: [
    { value: '6 anos', label: 'construindo software em produção desde 2020' },
    { value: '3h para 20 min', label: 'em um fluxo geoespacial recorrente da Aegea' },
    { value: '~40%', label: 'do código do EyeConnect em produção, mais que qualquer outro autor' },
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
            'Eliminei etapas manuais de rotinas semanais automatizando cálculo de etapas, padronização de simbologia, ingestão de arquivos e atualização de views materializadas no PostgreSQL com toolboxes do ArcGIS, Python e FME.',
            'Levei novos produtos da solicitação à produção, como o dashboard de OS críticas e o painel de dados de coleta, conduzindo refinamentos de requisitos com a Aegea e documentando o portfólio de dashboards para um novo time.',
            'Construí camadas de geofactíveis (endereços a até 50 m da rede de água) enriquecidas com atributos do CNEFE e classes de renda por setor censitário, usadas para priorizar regiões de prospecção.',
            'Processei a contagem de telhados da BDGD para Ceará e Santa Catarina com filtros urbano e rural e publiquei os resultados em dashboards de homologação e produção.',
            'Modelei a camada de reputação de clientes do Pará geocodificando registros com o CNEFE e entreguei o modelo de dados ao time de dados da Aegea.',
            'Consolidei a base de resíduos sólidos do Rio de Janeiro e produzi mapas temáticos, heatmaps e dashboards para o programa de aterros.',
            'Defini o cálculo da medição inicial e final de cada poço e adicionei a classificação de válvula fechada aos faróis de medição.',
            'Criei uma ferramenta de correção de topologia em GeoPandas e uma toolbox de padronização de simbologia reaproveitada nos dashboards.',
          ],
          bullets: [
            'Reduzi um fluxo geoespacial recorrente de mais de 3 horas para cerca de 20 minutos com o Spatial Extractor, ferramenta em Python e GeoPandas com spatial joins paralelos, validação e exportação para Excel e Shapefile.',
            'Entreguei indicadores por setor censitário para 16 estados cruzando Censo do IBGE, endereços do CNEFE e registros da BDGD da ANEEL, dando ao time de expansão estimativas de demanda para estudos de concessão.',
            'Participei da definição do modelo de dados CITIUS/Regenera para o biogás de aterros e fiz a carga dos dados históricos, que alimentam painéis com faróis de medição e classes de CH4 normalizado.',
            'Mantive os painéis de produção funcionando na migração para o ArcGIS Enterprise 11.5, auditando e corrigindo dashboards, e criei um script de governança que aponta itens sem uso no portal para limpeza.',
          ],
        },
        {
          title: 'Entrega com IA usando Claude Code',
          context: 'Hoje o Claude Code é meu principal ambiente na Bizpoke. Escrevo o contexto e as ferramentas compartilhadas que permitem ao time inteiro usá-lo do mesmo jeito nos projetos de clientes.',
          stack: ['Claude Code', 'MCP', 'ClickUp', 'FastAPI', 'DuckDB', 'Apache Sedona', 'H3', 'Redis'],
          extra: [
            'Construí um cliente OAuth2 para a API REST do ArcGIS Enterprise com backup automático antes de cada edição e separação rígida entre portais de produção e homologação, para o agente atualizar dashboards em lote com segurança.',
            'Transformei falhas recorrentes em salvaguardas: a skill de dashboards documenta armadilhas encontradas em sessões reais e confere cada gravação pelas requisições de rede.',
          ],
          bullets: [
            'Criei uma biblioteca compartilhada de nove skills de Claude Code e um CLAUDE.md raiz herdado por 13 pastas de projetos da Aegea (bootstrap de projeto, cliente da API do ArcGIS, edição de dashboards, documentos de entrega, status reports), para todo o time trabalhar com o mesmo playbook.',
            'Conectei o Claude Code ao ClickUp via MCP para status reports diários aos clientes e contribuí com o BizpokeBI, nossa plataforma de dados geoespaciais, e com o seu servidor MCP bizpoke, com gravações sujeitas a aprovação.',
          ],
        },
        {
          title: 'EyeConnect · plataforma de teleoftalmologia em produção',
          context: 'O EyeConnect conecta clínicas oftalmológicas a médicos remotos: a clínica envia os exames, o médico emite o laudo e o paciente recebe o resultado por link. Fui o principal desenvolvedor em 2023 e 2024, escrevi cerca de 40% do código da plataforma que está em produção hoje e construí sozinho o gateway das clínicas.',
          stack: ['Meteor', 'Blaze', 'MongoDB Atlas', 'AWS S3', 'AWS Textract', 'Google Document AI', 'Node.js', 'Orthanc', 'DICOM', 'pydicom', 'Raspberry Pi', 'systemd', 'OpenVPN', 'Docker', 'Meteor Up'],
          extra: [
            'Atualizei a plataforma do Meteor 1.10 para o 2.15 e mantive os deploys com Docker e Meteor Up nos ambientes de desenvolvimento, QA e produção.',
            'Adicionei a trava de exames com liberação automática após uma hora, o monitoramento de créditos de SMS, a área de reenvio de SMS e os tipos de pagador (SUS, particular e convênio).',
            'Classifiquei os exames DICOM pela SOP class e pelas tags de protocolo (angiografia, retinografia, indocianina verde, campo visual, OCT de mácula e disco), com um serviço Python em pydicom como alternativa para imagens e PDFs encapsulados, e uma máquina de estados de pastas com novas tentativas e limpeza.',
            'Troquei o OCR do gateway do Google Document AI para o AWS Textract e depois levei esse OCR para a plataforma, para uploads em lote.',
            'Entreguei notificações por SMS e e-mail com links curtos, relatórios de faturamento e custos e um portal white-label para as clínicas.',
            'Mudanças menores em integrações antigas: busca do telefone do paciente no banco TASY (Oracle) de um hospital e suporte a SFTP para a câmera de retina Phelcom Eyer.',
          ],
          bullets: [
            'Construí sozinho um gateway de exames em Raspberry Pi para clínicas: o Orthanc recebe o DICOM dos aparelhos e um serviço Node.js classifica os exames, lê os PDFs com AWS Textract e envia tudo à plataforma via OpenVPN.',
            'Levei o OCR para a plataforma: upload de PDFs em lote para o S3, AWS Textract e leitores para 14 aparelhos (Zeiss Cirrus e HFA, Spectralis e outros), com deduplicação e novas tentativas.',
            'Gerei pré-laudos automáticos por regras para campo visual e OCT e laudos estruturados com saída em PDF, e integrei a API da Clinic Web (Linx) para buscar pacientes pelo CPF e devolver os exames.',
          ],
        },
        {
          title: 'ISPDrive · armazenamento em nuvem white-label para provedores',
          context: 'O ISPDrive é um serviço de armazenamento em nuvem que provedores de internet revendem aos seus assinantes com a própria marca, começando pela G6 Internet. Construí suas ferramentas de relatório em 2021 e 2022 e sou o único desenvolvedor desde 2024.',
          stack: ['FastAPI', 'MongoDB Atlas', 'ODMantic', 'Next.js 14', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'DigitalOcean Spaces', 'Docker Compose', 'NGINX', 'Let’s Encrypt', 'pytest'],
          extra: [
            'Construí a primeira camada de relatórios em 2021 e 2022: uma API em Express e MySQL (histórico de login e uso de dados) e um dashboard em React com MUI DataGrid e Recharts, e depois migrei o servidor de upload de MySQL para MongoDB.',
            'Cobri a API com testes de integração em pytest contra o MongoDB, com o storage simulado.',
          ],
          bullets: [
            'Reescrevi o produto em FastAPI, MongoDB e Next.js 14 como SaaS multi-tenant: marca própria por provedor, login pelo ERP de cada provedor e upload e download direto no DigitalOcean Spaces com URLs pré-assinadas.',
            'Construí a área administrativa com dashboards de uso, trilha de auditoria de 11 tipos de ação e relatório de cotas para faturamento, e fiz o deploy na DigitalOcean com Docker Compose, NGINX e Let’s Encrypt automático.',
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
            'Liderei o front-end e o mobile do DOMO, construindo em React Native (Expo) um componente de mapa offline com inclusão, edição e remoção de feições, formulários de atributos e suporte a tablets.',
            'Prototipei no Figma o fluxo de validação de projetos e implementei em Next.js, TypeScript, Redux e MUI após aprovação da Equatorial.',
          ],
        },
        {
          title: 'Utilities dos EUA via SBS',
          context: 'Trabalhos de GIS e integração para utilities dos EUA via SBS, em inglês com times americanos.',
          stack: ['ArcGIS JS API', 'FME', 'Python', 'JavaScript', 'SAP', 'IBM Maximo'],
          extra: ['Construí componentes customizados com a ArcGIS JavaScript API e fluxos no FME para dados de ativos de utilities.'],
          bullets: [
            'Automatizei fluxos de GIS para North Las Vegas e Duke Energy e integrei SAP, IBM Maximo e Schneider Electric com SDKs em Python e JS.',
          ],
        },
      ],
      onePage: [
        'Reduzi um fluxo geoespacial recorrente da Aegea de mais de 3 horas para cerca de 20 minutos com uma ferramenta em GeoPandas e entreguei indicadores por setor censitário para 16 estados.',
        'Participei da definição do modelo de dados CITIUS/Regenera (biogás de aterros) e mantive os painéis do ArcGIS em produção na migração para o Enterprise 11.5.',
        'Principal desenvolvedor do EyeConnect (teleoftalmologia, em produção): gateway DICOM em Raspberry Pi e entrada de exames por OCR com AWS Textract.',
        'Reescrevi o ISPDrive, SaaS multi-tenant de armazenamento para provedores, em FastAPI, MongoDB e Next.js 14.',
        'Criei nove skills compartilhadas de Claude Code e conexões MCP (ClickUp, servidor bizpoke) usadas em 13 projetos da Aegea.',
        'Liderei o front-end e o mobile do DOMO (Equatorial Energia): edição de mapas offline em React Native e telas em Next.js, TypeScript e Redux.',
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
            'Escrevi problemas em Python com soluções de referência e suítes de teste para o LiveCodeBench e o BigCodeBench, cada um desenhado para derrubar pelo menos 2 de 4 modelos de ponta, e revisei prompts e critérios de avaliação nos programas Mango e Fairylights.',
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
            'Entreguei funcionalidades em React, Node.js, Python e C# para projetos de clientes e produzi dados espaciais com ArcGIS Pro e Enterprise junto a times offshore, em inglês.',
          ],
        },
      ],
      onePage: ['Entreguei funcionalidades em React, Node.js, Python e C# e produzi dados espaciais com ArcGIS junto a times offshore.'],
    },
    {
      role: 'Estagiário de Desenvolvimento Web',
      org: 'NFe Sistemas',
      place: 'São José dos Campos, SP',
      period: 'Out 2020 a Mar 2021',
      stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'MySQL'],
      groups: [{ bullets: ['Implementei mudanças de front-end e back-end com HTML, CSS, JavaScript, jQuery, PHP e MySQL.'] }],
      onePage: null,
    },
  ],
  projects: [
    {
      name: 'Triage Desk',
      role: 'Triagem de suporte com IA para marcas D2C · 2026',
      text: 'Demo publicada de atendimento ao cliente com IA para várias marcas: o n8n recebe as mensagens, um agente Claude numa Edge Function do Supabase redige a resposta com subagentes de políticas e catálogo, e o time aprova no Next.js. Os dados de cada marca ficam isolados com RLS no Postgres e testes em pgTAP.',
      links: [
        { label: 'triage.joaosantaniello.com', href: 'https://triage.joaosantaniello.com' },
        { label: 'Código: github.com/joao-bermal/triage-desk', href: 'https://github.com/joao-bermal/triage-desk' },
      ],
      printAllLinks: true,
      details: [
        'Agente orquestrador com ferramentas estritas, saídas estruturadas e prompt caching; cerca de 20 segundos e US$ 0,03 por ticket.',
        'Ingestão idempotente, sincronização de pedidos da Shopify com verificação HMAC, varredura de backlog e workflow de erros no n8n.',
        'Demo pública com reset diário e limite de novas triagens; documento de design técnico no repositório.',
      ],
      stack: ['API do Claude', 'Supabase', 'PostgreSQL RLS', 'Edge Functions', 'n8n', 'Next.js', 'Vercel', 'pgTAP'],
      onePage: 'Demo publicada: agente Claude com subagentes numa Edge Function do Supabase, n8n, RLS com pgTAP e Next.js na Vercel.',
    },
    {
      name: 'Pipeline de AVR em retinografias',
      role: 'TCC do MBA em deep learning · 2025 a 2026',
      text: 'Pipeline em PyTorch que estima a razão arteríolo-venular, marcador de risco cardiovascular, a partir de retinografias: uma U-Net segmenta os vasos (Dice 0,79 em imagens do DRIVE fora do treino), uma rede com ResNet-50 separa artérias de veias e um modelo de disco óptico reduziu o erro do centro de 358 para 11 px para medir os calibres pelo método de Knudtson.',
      links: [{ label: 'GitHub', href: 'https://github.com/joao-bermal/retinal-avr-pipeline' }],
      details: [
        'U-Net aprimorada com blocos residuais, batch normalization e perda BCE mais Dice, após pré-processamento com canal verde, CLAHE, correção gamma e Albumentations.',
        'Rede de artérias e veias com encoder ResNet-50, Squeeze-and-Excitation e um módulo de restrição vascular, treinada em IOSTAR e RITE.',
        'U-Net de disco óptico com uma heurística clássica de visão computacional como alternativa: erro mediano do centro de 11,1 px em imagens do IOSTAR fora do treino, contra 357,9 px do centro da imagem assumido no TCC original.',
        'CRAE e CRVE pela combinação iterativa de Knudtson dentro da Zona B peripapilar, AVR = CRAE / CRVE e uma categoria de risco.',
        'Treinos reproduzíveis em uma AMD RX 6800XT com ROCm e um documento de métricas que declara os limites conhecidos (um conjunto separado para a rede de artérias e veias é a próxima rodada); um endpoint em FastAPI e uma página de upload em Next.js.',
        'Nota 9/10, com potencial para triagem automatizada e teleoftalmologia.',
      ],
      stack: ['Python', 'PyTorch', 'OpenCV', 'Albumentations', 'ROCm', 'FastAPI', 'Next.js'],
    },
    {
      name: 'Miau Atelier',
      role: 'Fundador, designer e desenvolvedor · 2026',
      text: 'Marca de móveis para gatos para o mercado americano, construída de ponta a ponta: identidade visual, loja Shopify em dólar com Stripe, automações em Python sobre a Admin GraphQL API e um pipeline de IA para fotografia de produto.',
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
      role: 'Next.js na Vercel · 2026',
      text: 'App que roda só no navegador e sincroniza perfis do Neural Amp Modeler da API do TONE3000 com o disco: OAuth 2.0 com PKCE, File System Access API, IndexedDB, backoff e downloads em lote controlados, sem servidor.',
      links: [
        { label: 'namman.vercel.app', href: 'https://namman.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/joao-bermal/NAMMAN' },
      ],
    },
  ],
  education: [
    {
      degree: 'MBA em Engenharia de Software',
      school: 'Universidade de São Paulo (USP/ESALQ)',
      place: 'Piracicaba, SP',
      period: '2024 a 2026',
      details: [
        'Arquitetura de software, APIs, cloud, Docker e Kubernetes, DDD, observabilidade, testes e IA.',
        'TCC com nota 9/10: o pipeline de AVR em retinografias, em Projetos selecionados.',
      ],
      onePage: 'TCC nota 9/10: pipeline de deep learning para retinografias (Dice 0,79 fora do treino, erro do disco óptico de 358 para 11 px).',
    },
    {
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      school: 'Universidade Paulista (UNIP)',
      place: 'São José dos Campos, SP',
      period: '2021 a 2022',
      details: ['Projeto de software, bancos de dados e desenvolvimento web e back-end, em paralelo ao trabalho.'],
    },
    {
      degree: 'Técnico em Informática integrado ao Ensino Médio',
      school: 'Colégio Técnico Antônio Teixeira Fernandes',
      place: 'São José dos Campos, SP',
      period: '2018 a 2020',
      details: [],
    },
  ],
  skills: [
    { label: 'Linguagens', items: 'Python, TypeScript, JavaScript, SQL, Bash', onePage: true },
    {
      label: 'Dados e GIS',
      items: 'GeoPandas, ArcGIS Pro, ArcGIS Enterprise 11.5, ArcGIS Dashboards, Experience Builder, ArcGIS JS API, FME, PostgreSQL, geodatabases enterprise, ETL e modelagem de dados',
      onePage: true,
    },
    { label: 'Back-end', items: 'FastAPI, Node.js, Meteor, APIs REST, JWT, OAuth, WebSockets, MongoDB, PostgreSQL, Supabase, DICOM', onePage: true },
    { label: 'Front-end e mobile', items: 'React, Next.js, Redux Toolkit, Tailwind CSS, MUI, React Native (Expo), Figma', onePage: true },
    { label: 'Cloud e DevOps', items: 'Docker, NGINX, Linux, AWS (S3, Textract, EC2), DigitalOcean, Vercel, n8n, Kubernetes básico', onePage: true },
    { label: 'IA e ML', items: 'Claude Code (skills, MCP, subagentes), API do Claude, PyTorch, OpenCV, OCR (Textract), avaliação de LLMs', onePage: true },
    { label: 'E-commerce e design', items: 'Shopify (Admin GraphQL, Liquid), Stripe, identidade visual, pipelines de imagem generativa' },
    { label: 'Forma de trabalho', items: 'Scrum, Git e GitFlow, Jira, ClickUp, documentação técnica, trabalho remoto com times dos EUA' },
  ],
  languages: 'Português (nativo) · Inglês (fluente, uso profissional diário)',
  courses: [
    'Python 3: Deep Dive, Part 1 (Udemy, 2025)',
    'Deep Learning Using ArcGIS (Esri, 2024)',
    'AWS Summit São Paulo (2023)',
  ],
  files: {
    full: '/docs/Joao_Santaniello_Curriculo_PT.pdf',
    onePage: '/docs/Joao_Santaniello_Curriculo_1pag_PT.pdf',
  },
};

export const resume: Record<Locale, Resume> = { pt, en };
