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

/** `extra` only appears on the extended /cv/ page. */
export type ResumeEducation = { degree: string; school: string; place: string; period: string; details: string[]; extra?: string[]; onePage?: string };

/** `itemsWeb` replaces `items` on the extended /cv/ page; `webOnly` rows stay off the PDFs. */
export type ResumeSkill = { label: string; items: string; itemsWeb?: string; onePage?: boolean; webOnly?: boolean };

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
  /** Extra paragraphs under the summary, extended /cv/ page only. */
  summaryExtra?: string[];
  highlights: { value: string; label: string }[];
  experience: ResumeJob[];
  projects: ResumeProject[];
  education: ResumeEducation[];
  skills: ResumeSkill[];
  languages: string;
  courses: string[];
  /** Courses shown only on the extended /cv/ page. */
  coursesExtra?: string[];
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
  summaryExtra: [
    'How I work now: Claude Code writes most first drafts and I own the result. I plan the change, write the guardrails into skills and CLAUDE.md files, read every diff, run the tests and check the running software before anything ships. That habit comes from years of writing FastAPI, Node.js, Meteor, React and Python by hand, and from writing benchmark problems designed to make frontier models fail.',
    'Where it shows: a teleophthalmology platform in production, from the gateway installed at clinics to the doctor’s report; a white-label storage SaaS resold by internet providers; the geospatial analyses behind water and sewer concession studies for one of the largest sanitation groups in Brazil; a US e-commerce brand I run on my own; and a public demo of multi-brand AI support triage.',
  ],
  highlights: [
    { value: '6 years', label: 'building software in production since 2020' },
    { value: '3h to 20 min', label: 'on a recurring geospatial workflow at Aegea' },
    { value: '~40%', label: 'of EyeConnect’s production code, more than any other author' },
    { value: '9/10', label: 'MBA thesis in computer vision at USP/ESALQ' },
    { value: '14 devices', label: 'read by the EyeConnect OCR pipeline while I led it' },
    { value: '358 to 11 px', label: 'optic disc center error after I trained a detector for my thesis pipeline' },
    { value: '9 skills', label: 'shared Claude Code skills used across 13 client projects' },
    { value: 'US$0.03', label: 'per ticket in the Triage Desk AI support demo' },
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
            'Loaded the theoretical and historical Regenera data (wells, drains, PDRs, collectors, readings, landfill stages) behind dashboards with measurement beacons, normalized CH4 classes and weekly filters.',
            'Evaluated Experience Builder as a replacement for ArcGIS Dashboards during the Enterprise 11.5 migration, and validated every new dashboard with Aegea teams in staging before production.',
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
            'Turned recurring failures into guardrails: the dashboard skill documents traps found in real sessions (edits kept only in memory, schema quirks, filter bugs) and verifies saves through network requests, so the agent does not repeat them.',
            'The ClickUp routine builds status reports from Epic cards, per project and as a consolidated portfolio view, replacing hand-written updates.',
            'BizpokeBI runs on FastAPI, DuckDB with Apache Sedona, H3 indexing and Redis queues; the bizpoke MCP server gives Claude its dataset catalog, processing pipelines, jobs and ArcGIS tools, with every write gated by explicit approval and an audit log.',
            'Produced specs, a living requirements table, acceptance test notebooks and formal delivery documents (.docx and PDF) from shared templates, taking features from request to production on ArcGIS Enterprise 11.5.',
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
            'From the repositories: 146 platform commits and 94 merged pull requests, 93 of the 98 master commits in 2023 and 2024, and all 33 commits of the clinic gateway.',
            'Clinic gateway: an Orthanc PACS built for the Raspberry Pi (ARM64) receives DICOM from the devices, and a Node.js loop pulls instances through the Orthanc REST API every 15 seconds, also picks up PDFs dropped in a folder, and moves each file through input, classified, processed, failed, waiting or ignored states with retries and a 15 day purge.',
            'Classified DICOM exams by SOP class and protocol tags (angiography, retinography, ICG, visual field, OCT macula and disc, Zeiss Visucam photos), with a Python pydicom service as fallback for pixel data and encapsulated PDFs.',
            'Wrote the provisioning runbook for each clinic: an OpenVPN client, Raspberry Pi OS Lite, the Orthanc build, NTP and timezone, Node.js and Python, and three systemd services that restart on failure.',
            'Moved the gateway OCR from Google Document AI to AWS Textract, then brought it into the platform for bulk uploads.',
            'Platform OCR: pdf-lib keeps the first page, Textract reads it, the device is detected from its parameters and per-device regular expressions extract name, CPF, birth date, gender, exam date and type; an MD5 identifier blocks duplicates and failed files retry every 15 minutes for up to 24 hours. Device profiles grew from 5 to 14 while I led it.',
            'Draft reports built with factory-pattern extractors, analyzers and text generators for Zeiss HFA visual fields (MD, PSD, VFI, GPA, fixation losses, false positives and negatives) and Cirrus OCT, leaving the exam in pre-report for the doctor.',
            'Structured reports for OCT macula and disc, pachymetry and topography through a table generator factory, next to the free-text option.',
            'Clinic Web (Linx) integration with a token per clinic, patient lookup by CPF and a scheduled job that sends finished exams back; extra API parameters for the partner 4medic and parsing for Clinoftalmo reports.',
            'Exam locking with automatic release after an hour and an email to the doctor, SMS and email notifications with Short.io links, an SMS credit monitor, an SMS resend area, invoicing reports (overall and per doctor), cost reports per clinic and payer types for public, private and health plan exams.',
            'Upgraded Meteor from 1.10 to 2.7, 2.8 and 2.15 and replaced the agenda job package, keeping Docker and Meteor Up deploys running for development, QA and production.',
            'Smaller changes to older integrations: patient phone lookup in a hospital TASY (Oracle) database, and SFTP support for the Phelcom Eyer retinal camera with an OpenSSH server locked to SFTP in a chroot.',
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
            'From the repository: 56% of the non-merge commits and the only author since July 2024.',
            'Providers are resolved by subdomain or path (NGINX redirects subdomains to the path), each with its own logo and colors; every query is scoped to the provider, cross-tenant admin requests get 403, and there are three roles: platform admin, provider admin and subscriber.',
            'Each provider chooses local or external sign-in; external sign-in checks the credentials against the provider’s own ERP and creates the account on first login, with JWT access and refresh tokens.',
            'Uploads go straight from the browser to storage through presigned PUT URLs with a progress bar, and downloads through presigned GET URLs; folders are key prefixes per provider and user.',
            'Admin dashboard with active users and real storage used, totaled from the storage listings with a short cache; server-side pagination, sorting and search; and a CSV of active users per quota plan for invoicing.',
            'Audit trail of 11 action types with the client IP, from sign-in and sign-out to folder and file access, uploads and deletes.',
            'Deployed with Docker Compose (NGINX, Certbot, FastAPI, Next.js) on a DigitalOcean droplet with MongoDB Atlas, Let’s Encrypt renewal every 12 hours and an NGINX reload every day.',
            'A 2026 version is in progress: new navigation with recents, favorites, search and settings, and a global admin area.',
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
      period: 'May 2025 to Oct 2025',
      stack: ['Python', 'Test design', 'LLM evaluation', 'Technical writing'],
      groups: [
        {
          bullets: [
            'Wrote Python problems with reference solutions and test suites for LiveCodeBench and BigCodeBench, each designed to break at least 2 of 4 frontier models, and reviewed prompts and grading criteria in the Mango and Fairylights programs.',
          ],
          extra: [
            'Target models included Qwen, DeepSeek, Claude Sonnet and Nova, across code generation, self-repair and code execution tasks, with a written failure analysis for every problem.',
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
          extra: [
            'Built the first ISPDrive reporting tools in this period (a report API in Express and MySQL and a React dashboard), described with ISPDrive above.',
            'Versioned client work with Git across several teams.',
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
        'Five n8n workflows: inbound message (secret check, idempotent store, triage), approved reply (a pg_net trigger and SMTP), Shopify order sync (HMAC verified), a backlog sweep every 5 minutes and an error handler that writes to automation_errors.',
        'Postgres security: RLS by brand membership with security definer helpers, column grants so staff cannot touch AI fields, a guard trigger on status changes, RPCs only the service role can call, and 14 pgTAP tests.',
        'Verified run: 10 real tickets (order status, damage past the window, sizing, an address change, a return without the box, spam, a message in Spanish) triaged with the expected decision in about 20 seconds each.',
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
        'Connected to Claude through a Composio MCP server, so the store is managed from Claude Code.',
        'Conversion work: a buy-now flow, size and fit metafields on the 15 live products, a delivery and returns summary, a shipping FAQ, abandoned checkout emails and Judge.me reviews in the brand style.',
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
      details: [
        'OAuth 2.0 with PKCE against the TONE3000 API, the File System Access API to write into a folder the user picks, and IndexedDB for the download history.',
        'Retries with exponential backoff and throttled bulk downloads, so large libraries sync without hitting rate limits.',
        'Iterated from a Supabase and Prisma backend to a database-free architecture, with 40 commits in five weeks.',
      ],
      stack: ['Next.js', 'TypeScript', 'OAuth 2.0 PKCE', 'File System Access API', 'IndexedDB', 'Vercel'],
    },
    {
      name: 'joaosantaniello.com',
      role: 'Next.js 16 on Vercel · 2026',
      text: 'This site: migrated from static HTML to Next.js on a feature branch and shipped through Vercel preview and production with a custom domain.',
      links: [
        { label: 'joaosantaniello.com', href: 'https://joaosantaniello.com' },
        { label: 'GitHub', href: 'https://github.com/joao-bermal/joaosantaniello.com' },
      ],
      details: [
        'Portuguese and English routes with edge language detection by browser language and country, and a light and dark theme.',
        'One content source renders this page, the CV PDFs (printed with Playwright, with automatic page limit checks) and versions tailored to specific roles.',
        'Print flyers generated from code with QR codes, and the Triage Desk demo on a subdomain.',
      ],
      stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Playwright'],
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
        'Coursework in back-end and front-end architecture, APIs and micro-frontends, cloud and Kubernetes, clean architecture and DDD, machine learning and model deployment, observability and TDD.',
        'Thesis graded 9/10: the retinal AVR pipeline under Selected projects.',
      ],
      extra: [
        'Back-end and front-end engineering with modern web architectures, APIs and micro-frontends.',
        'Cloud computing (IaaS, PaaS, SaaS) and container orchestration with Docker and Kubernetes.',
        'Agile methods, clean architecture and domain-driven design.',
        'Machine learning, Big Data and AI, including how models are deployed.',
        'UX design, design thinking and user-centered development.',
        'APIs and message queues, observability, and software testing with TDD.',
        'Also blockchain, digital law (LGPD), change management and leading high-performance teams.',
        'Thesis advisor: Prof. Dr. Heinrich da Solidade Santos.',
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
      extra: ['Programming, web development and algorithms, including team programming competitions.'],
    },
  ],
  skills: [
    { label: 'Languages', items: 'Python, TypeScript, JavaScript, SQL, Bash', onePage: true },
    {
      label: 'Data and GIS',
      items: 'GeoPandas, ArcGIS Pro, ArcGIS Enterprise 11.5, ArcGIS Dashboards, Experience Builder, ArcGIS JS API, FME, PostgreSQL, enterprise geodatabases, ETL and data modeling',
      onePage: true,
    },
    { label: 'Back end', items: 'FastAPI, Node.js, Meteor, REST APIs, JWT, OAuth, WebSockets, MongoDB, PostgreSQL, Supabase, DICOM', itemsWeb: 'FastAPI, Node.js (Express), Meteor, Flask, REST APIs, JWT, OAuth 2.0 and PKCE, WebSockets and DDP, MongoDB (Motor, ODMantic, Mongoose), PostgreSQL, MySQL, Supabase, DICOM', onePage: true },
    { label: 'Front end and mobile', items: 'React, Next.js, Redux Toolkit, Tailwind CSS, MUI, React Native (Expo), Figma', onePage: true },
    { label: 'Cloud and DevOps', items: 'Docker, NGINX, Linux, AWS (S3, Textract, EC2), DigitalOcean, Vercel, n8n, basic Kubernetes', itemsWeb: 'Docker and Docker Compose, NGINX, Certbot and Let’s Encrypt, Linux and systemd, AWS (S3, Textract, EC2, CloudWatch), DigitalOcean (Droplets, Spaces), MongoDB Atlas, Supabase, Vercel, Meteor Up, basic Kubernetes', onePage: true },
    { label: 'AI and ML', items: 'Claude Code (skills, MCP, sub-agents), Claude API, PyTorch, OpenCV, OCR (Textract), LLM evaluation', itemsWeb: 'Claude Code (skills, CLAUDE.md, MCP servers, sub-agents, scheduled routines), Claude API (tool runner, structured outputs, prompt caching), PyTorch (U-Net, ResNet-50), OpenCV, Albumentations, ROCm, OCR with AWS Textract and Google Document AI, LLM evaluation', onePage: true },
    { label: 'Healthcare imaging', items: 'DICOM (SOP classes, tags, encapsulated PDF), Orthanc PACS and its REST API, pydicom, OCR of ophthalmic device reports', webOnly: true },
    { label: 'Automation and integration', items: 'n8n (webhooks, Code nodes, retries, schedules, error workflows), pg_net and pg_cron, SyncedCron jobs, OpenVPN, SFTP, webhook HMAC verification', webOnly: true },
    { label: 'Testing and quality', items: 'pgTAP, pytest, Jest and supertest, acceptance test notebooks, code review through pull requests', webOnly: true },
    { label: 'E-commerce and design', items: 'Shopify (Admin GraphQL, Liquid), Stripe, brand identity, generative image pipelines' },
    { label: 'Ways of working', items: 'Scrum, Git and GitFlow, Jira, ClickUp, technical documentation, remote work with US teams' },
  ],
  languages: 'Portuguese (native) · English (fluent, daily professional use)',
  courses: [
    'Python 3: Deep Dive, Part 1 (Udemy, 2025)',
    'Deep Learning Using ArcGIS (Esri, 2024)',
    'AWS Summit São Paulo (2023)',
  ],
  coursesExtra: ['ArcGIS Fundamentals (Esri, 2021)', 'Esri Developer Summit (2022)'],
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
  summaryExtra: [
    'Como trabalho hoje: o Claude Code escreve a maior parte dos primeiros rascunhos e eu respondo pelo resultado. Planejo a mudança, escrevo as salvaguardas em skills e arquivos CLAUDE.md, leio cada diff, rodo os testes e confiro o software funcionando antes de qualquer entrega. Esse hábito vem de anos escrevendo FastAPI, Node.js, Meteor, React e Python à mão, e de escrever problemas de benchmark desenhados para fazer modelos de ponta errarem.',
    'Onde isso aparece: uma plataforma de teleoftalmologia em produção, do gateway instalado nas clínicas até o laudo do médico; um SaaS de armazenamento white-label revendido por provedores de internet; as análises geoespaciais dos estudos de concessão de água e esgoto de um dos maiores grupos de saneamento do Brasil; uma marca de e-commerce nos EUA que opero sozinho; e uma demo pública de triagem de suporte com IA para várias marcas.',
  ],
  highlights: [
    { value: '6 anos', label: 'construindo software em produção desde 2020' },
    { value: '3h para 20 min', label: 'em um fluxo geoespacial recorrente da Aegea' },
    { value: '~40%', label: 'do código do EyeConnect em produção, mais que qualquer outro autor' },
    { value: '9/10', label: 'no TCC do MBA em visão computacional na USP/ESALQ' },
    { value: '14 aparelhos', label: 'lidos pelo pipeline de OCR do EyeConnect enquanto eu liderava' },
    { value: '358 para 11 px', label: 'de erro no centro do disco óptico depois que treinei um detector no pipeline do TCC' },
    { value: '9 skills', label: 'de Claude Code compartilhadas em 13 projetos de clientes' },
    { value: 'US$ 0,03', label: 'por ticket na demo de suporte com IA do Triage Desk' },
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
            'Carreguei os dados teóricos e históricos do Regenera (poços, drenos, PDRs, coletores, medições, etapas do aterro) que alimentam painéis com faróis de medição, classes de CH4 normalizado e filtros semanais.',
            'Avaliei o Experience Builder como substituto do ArcGIS Dashboards na migração para o Enterprise 11.5 e validei cada novo dashboard com os times da Aegea em homologação antes da produção.',
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
            'Transformei falhas recorrentes em salvaguardas: a skill de dashboards documenta armadilhas encontradas em sessões reais (edições que ficam só na memória, peculiaridades de schema, bugs de filtro) e confere cada gravação pelas requisições de rede, para o agente não repetir o erro.',
            'A rotina do ClickUp monta os status reports a partir dos cards de Epic, por projeto e numa visão consolidada do portfólio, substituindo atualizações escritas à mão.',
            'O BizpokeBI roda em FastAPI, DuckDB com Apache Sedona, indexação H3 e filas no Redis; o servidor MCP bizpoke dá ao Claude o catálogo de datasets, os pipelines de processamento, os jobs e as ferramentas do ArcGIS, com toda gravação sujeita a aprovação explícita e a um log de auditoria.',
            'Produzi especificações, uma tabela viva de requisitos, notebooks de testes de aceite e documentos formais de entrega (.docx e PDF) a partir de modelos compartilhados, levando funcionalidades da solicitação à produção no ArcGIS Enterprise 11.5.',
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
            'Pelos repositórios: 146 commits na plataforma e 94 pull requests aprovados, 93 dos 98 commits na master em 2023 e 2024, e todos os 33 commits do gateway das clínicas.',
            'Gateway das clínicas: um PACS Orthanc compilado para o Raspberry Pi (ARM64) recebe o DICOM dos aparelhos, e um loop em Node.js busca as instâncias pela API REST do Orthanc a cada 15 segundos, também pega PDFs deixados numa pasta e move cada arquivo pelos estados de entrada, classificado, processado, falho, em espera ou ignorado, com novas tentativas e limpeza após 15 dias.',
            'Classifiquei os exames DICOM pela SOP class e pelas tags de protocolo (angiografia, retinografia, indocianina verde, campo visual, OCT de mácula e disco, fotos do Zeiss Visucam), com um serviço Python em pydicom como alternativa para imagens e PDFs encapsulados.',
            'Escrevi o roteiro de instalação para cada clínica: cliente OpenVPN, Raspberry Pi OS Lite, compilação do Orthanc, NTP e fuso horário, Node.js e Python, e três serviços systemd que reiniciam em caso de falha.',
            'Troquei o OCR do gateway do Google Document AI para o AWS Textract e depois levei esse OCR para a plataforma, para uploads em lote.',
            'OCR da plataforma: o pdf-lib separa a primeira página, o Textract lê o texto, o aparelho é identificado pelos seus parâmetros e expressões regulares por aparelho extraem nome, CPF, data de nascimento, sexo, data e tipo do exame; um identificador MD5 bloqueia duplicados e arquivos com falha são reprocessados a cada 15 minutos por até 24 horas. Os perfis de aparelho passaram de 5 para 14 enquanto eu liderava.',
            'Pré-laudos construídos com extratores, analisadores e geradores de texto no padrão factory para campo visual do Zeiss HFA (MD, PSD, VFI, GPA, perdas de fixação, falsos positivos e negativos) e OCT do Cirrus, deixando o exame em pré-laudo para o médico.',
            'Laudos estruturados de OCT de mácula e disco, paquimetria e topografia com uma factory de geração de tabelas, ao lado da opção de laudo livre.',
            'Integração com a Clinic Web (Linx) com token por clínica, busca de paciente pelo CPF e um job agendado que devolve os exames concluídos; parâmetros extras de API para o parceiro 4medic e leitura dos laudos do Clinoftalmo.',
            'Trava de exames com liberação automática após uma hora e e-mail ao médico, notificações por SMS e e-mail com links do Short.io, monitoramento de créditos de SMS, área de reenvio de SMS, relatórios de faturamento (geral e por médico), relatórios de custo por clínica e tipos de pagador (SUS, particular e convênio).',
            'Atualizei o Meteor da versão 1.10 para a 2.7, a 2.8 e a 2.15 e substituí o pacote de jobs agenda, mantendo os deploys com Docker e Meteor Up nos ambientes de desenvolvimento, QA e produção.',
            'Mudanças menores em integrações antigas: busca do telefone do paciente no banco TASY (Oracle) de um hospital e suporte a SFTP para a câmera de retina Phelcom Eyer, com um servidor OpenSSH restrito a SFTP em chroot.',
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
            'Pelo repositório: 56% dos commits sem merge e único autor desde julho de 2024.',
            'Os provedores são identificados por subdomínio ou caminho (o NGINX redireciona o subdomínio para o caminho), cada um com logo e cores próprios; toda consulta fica restrita ao provedor, pedidos de admin entre provedores recebem 403 e há três papéis: admin da plataforma, admin do provedor e assinante.',
            'Cada provedor escolhe login local ou externo; o login externo confere as credenciais no ERP do próprio provedor e cria a conta no primeiro acesso, com tokens JWT de acesso e de renovação.',
            'O upload vai direto do navegador para o storage por URLs PUT pré-assinadas com barra de progresso, e o download por URLs GET pré-assinadas; as pastas são prefixos de chave por provedor e usuário.',
            'Dashboard administrativo com usuários ativos e o armazenamento realmente usado, somado a partir das listagens do storage com um cache curto; paginação, ordenação e busca no servidor; e um CSV de usuários ativos por plano de cota para o faturamento.',
            'Trilha de auditoria de 11 tipos de ação com o IP do cliente, do login e logout ao acesso a pastas e arquivos, uploads e exclusões.',
            'Deploy com Docker Compose (NGINX, Certbot, FastAPI, Next.js) num droplet da DigitalOcean com MongoDB Atlas, renovação do Let’s Encrypt a cada 12 horas e reload diário do NGINX.',
            'Uma versão de 2026 está em andamento: nova navegação com recentes, favoritos, busca e configurações, e uma área de administração global.',
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
      period: 'Mai 2025 a Out 2025',
      stack: ['Python', 'Design de testes', 'Avaliação de LLMs', 'Escrita técnica'],
      groups: [
        {
          bullets: [
            'Escrevi problemas em Python com soluções de referência e suítes de teste para o LiveCodeBench e o BigCodeBench, cada um desenhado para derrubar pelo menos 2 de 4 modelos de ponta, e revisei prompts e critérios de avaliação nos programas Mango e Fairylights.',
          ],
          extra: [
            'Os modelos-alvo incluíam Qwen, DeepSeek, Claude Sonnet e Nova, em tarefas de geração de código, self-repair e execução, com uma análise de falha escrita para cada problema.',
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
          extra: [
            'Nesse período construí as primeiras ferramentas de relatório do ISPDrive (uma API em Express e MySQL e um dashboard em React), descritas junto ao ISPDrive acima.',
            'Versionei o trabalho de clientes com Git em vários times.',
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
        'Cinco workflows no n8n: mensagem recebida (conferência do segredo, gravação idempotente, triagem), resposta aprovada (gatilho pg_net e SMTP), sincronização de pedidos da Shopify (com HMAC), varredura de backlog a cada 5 minutos e um tratador de erros que grava em automation_errors.',
        'Segurança no Postgres: RLS por vínculo com a marca com funções security definer, permissões por coluna para a equipe não mexer nos campos da IA, um gatilho que valida as mudanças de status, RPCs que só o service role chama e 14 testes em pgTAP.',
        'Rodada verificada: 10 tickets reais (status de pedido, avaria fora do prazo, tamanho, troca de endereço, devolução sem a caixa, spam, uma mensagem em espanhol) triados com a decisão esperada em cerca de 20 segundos cada.',
      ],
      stack: ['API do Claude', 'Supabase', 'PostgreSQL RLS', 'Edge Functions', 'n8n', 'Next.js', 'Vercel', 'pgTAP'],
      onePage: 'Demo publicada: agente Claude com subagentes numa Edge Function do Supabase, n8n, RLS com pgTAP e Next.js na Vercel.',
    },
    {
      name: 'Pipeline de AVR em retinografias',
      role: 'TCC do MBA em deep learning · 2025 a 2026',
      text: 'Pipeline em PyTorch que estima a razão arteríolo-venular, marcador de risco cardiovascular, em retinografias: uma U-Net segmenta os vasos (Dice 0,79 em imagens do DRIVE fora do treino), uma rede com ResNet-50 separa artérias de veias e um detector de disco óptico reduziu o erro do centro de 358 para 11 px para medir os calibres por Knudtson.',
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
        'Conectada ao Claude por um servidor MCP da Composio, para administrar a loja pelo Claude Code.',
        'Trabalho de conversão: fluxo de compra direta, metafields de tamanho e caimento nos 15 produtos ativos, resumo de entrega e devolução, FAQ de frete, e-mails de checkout abandonado e avaliações do Judge.me no estilo da marca.',
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
      details: [
        'OAuth 2.0 com PKCE na API do TONE3000, File System Access API para gravar numa pasta escolhida pelo usuário e IndexedDB para o histórico de downloads.',
        'Novas tentativas com backoff exponencial e downloads em lote controlados, para bibliotecas grandes sincronizarem sem estourar limites de requisição.',
        'Evoluiu de um back-end em Supabase e Prisma para uma arquitetura sem banco de dados, com 40 commits em cinco semanas.',
      ],
      stack: ['Next.js', 'TypeScript', 'OAuth 2.0 PKCE', 'File System Access API', 'IndexedDB', 'Vercel'],
    },
    {
      name: 'joaosantaniello.com',
      role: 'Next.js 16 na Vercel · 2026',
      text: 'Este site: migrado de HTML estático para Next.js numa branch própria e publicado pela Vercel, com preview, produção e domínio próprio.',
      links: [
        { label: 'joaosantaniello.com', href: 'https://joaosantaniello.com' },
        { label: 'GitHub', href: 'https://github.com/joao-bermal/joaosantaniello.com' },
      ],
      details: [
        'Rotas em português e inglês com detecção de idioma na edge pelo navegador e pelo país, e tema claro e escuro.',
        'Uma única fonte de conteúdo gera esta página, os PDFs do currículo (impressos com Playwright, com checagem automática do limite de páginas) e versões sob medida para vagas específicas.',
        'Flyers para impressão gerados por código com QR codes, e a demo do Triage Desk num subdomínio.',
      ],
      stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Playwright'],
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
        'Arquitetura de back-end e front-end, APIs e micro-frontends, cloud e Kubernetes, clean architecture e DDD, machine learning e deploy de modelos, observabilidade e TDD.',
        'TCC com nota 9/10: o pipeline de AVR em retinografias, em Projetos selecionados.',
      ],
      extra: [
        'Engenharia de back-end e front-end com arquiteturas web modernas, APIs e micro-frontends.',
        'Computação em nuvem (IaaS, PaaS, SaaS) e orquestração de contêineres com Docker e Kubernetes.',
        'Métodos ágeis, clean architecture e domain-driven design.',
        'Machine learning, Big Data e IA, incluindo como modelos vão para produção.',
        'UX design, design thinking e desenvolvimento centrado no usuário.',
        'APIs e filas de mensagens, observabilidade e testes de software com TDD.',
        'Também blockchain, direito digital (LGPD), gestão da mudança e liderança de times de alta performance.',
        'Orientador do TCC: Prof. Dr. Heinrich da Solidade Santos.',
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
      extra: ['Programação, desenvolvimento web e algoritmos, incluindo competições de programação em equipe.'],
    },
  ],
  skills: [
    { label: 'Linguagens', items: 'Python, TypeScript, JavaScript, SQL, Bash', onePage: true },
    {
      label: 'Dados e GIS',
      items: 'GeoPandas, ArcGIS Pro, ArcGIS Enterprise 11.5, ArcGIS Dashboards, Experience Builder, ArcGIS JS API, FME, PostgreSQL, geodatabases enterprise, ETL e modelagem de dados',
      onePage: true,
    },
    { label: 'Back-end', items: 'FastAPI, Node.js, Meteor, APIs REST, JWT, OAuth, WebSockets, MongoDB, PostgreSQL, Supabase, DICOM', itemsWeb: 'FastAPI, Node.js (Express), Meteor, Flask, APIs REST, JWT, OAuth 2.0 e PKCE, WebSockets e DDP, MongoDB (Motor, ODMantic, Mongoose), PostgreSQL, MySQL, Supabase, DICOM', onePage: true },
    { label: 'Front-end e mobile', items: 'React, Next.js, Redux Toolkit, Tailwind CSS, MUI, React Native (Expo), Figma', onePage: true },
    { label: 'Cloud e DevOps', items: 'Docker, NGINX, Linux, AWS (S3, Textract, EC2), DigitalOcean, Vercel, n8n, Kubernetes básico', itemsWeb: 'Docker e Docker Compose, NGINX, Certbot e Let’s Encrypt, Linux e systemd, AWS (S3, Textract, EC2, CloudWatch), DigitalOcean (Droplets, Spaces), MongoDB Atlas, Supabase, Vercel, Meteor Up, Kubernetes básico', onePage: true },
    { label: 'IA e ML', items: 'Claude Code (skills, MCP, subagentes), API do Claude, PyTorch, OpenCV, OCR (Textract), avaliação de LLMs', itemsWeb: 'Claude Code (skills, CLAUDE.md, servidores MCP, subagentes, rotinas agendadas), API do Claude (tool runner, saídas estruturadas, prompt caching), PyTorch (U-Net, ResNet-50), OpenCV, Albumentations, ROCm, OCR com AWS Textract e Google Document AI, avaliação de LLMs', onePage: true },
    { label: 'Imagens médicas', items: 'DICOM (SOP classes, tags, PDF encapsulado), PACS Orthanc e sua API REST, pydicom, OCR de laudos de aparelhos oftalmológicos', webOnly: true },
    { label: 'Automação e integração', items: 'n8n (webhooks, nós de código, novas tentativas, agendamentos, workflows de erro), pg_net e pg_cron, jobs com SyncedCron, OpenVPN, SFTP, verificação HMAC de webhooks', webOnly: true },
    { label: 'Testes e qualidade', items: 'pgTAP, pytest, Jest e supertest, notebooks de testes de aceite, revisão de código por pull requests', webOnly: true },
    { label: 'E-commerce e design', items: 'Shopify (Admin GraphQL, Liquid), Stripe, identidade visual, pipelines de imagem generativa' },
    { label: 'Forma de trabalho', items: 'Scrum, Git e GitFlow, Jira, ClickUp, documentação técnica, trabalho remoto com times dos EUA' },
  ],
  languages: 'Português (nativo) · Inglês (fluente, uso profissional diário)',
  courses: [
    'Python 3: Deep Dive, Part 1 (Udemy, 2025)',
    'Deep Learning Using ArcGIS (Esri, 2024)',
    'AWS Summit São Paulo (2023)',
  ],
  coursesExtra: ['ArcGIS Fundamentals (Esri, 2021)', 'Esri Developer Summit (2022)'],
  files: {
    full: '/docs/Joao_Santaniello_Curriculo_PT.pdf',
    onePage: '/docs/Joao_Santaniello_Curriculo_1pag_PT.pdf',
  },
};

export const resume: Record<Locale, Resume> = { pt, en };
