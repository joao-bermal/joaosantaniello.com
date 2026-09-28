import { resume, type Resume } from './resume';

/**
 * Tailored English CV for AI Product Engineer roles (AI-native delivery with Claude Code,
 * Next.js on Vercel, e-commerce automation). Same layout as the main CV, printed from
 * /en/cv/pdf/ai/ and /en/cv/pdf/ai-one-page/ by scripts/build-cv.py into cv-tailored/
 * (kept out of public/docs). Only claims that can be shown in a repo, a live site or a
 * working folder. Style rule: no em or en dashes.
 */
const base = resume.en;

export const resumeAI: Resume = {
  ...base,
  meta: { title: 'CV', description: 'João Vitor Bermal Santaniello, AI product engineer.' },
  headline: 'AI Product Engineer · Claude Code, Next.js on Vercel and E-commerce Automation',
  summary:
    'Software engineer with six years of production experience who now builds AI-natively. Claude Code is my primary development environment: I orchestrate it to ship production software, and I read, review and correct what it generates. In 2026 I shipped two Next.js applications to production on Vercel, built and run a US e-commerce brand on Shopify with Python automation over the Admin GraphQL API and an AI image pipeline, and authored a library of nine Claude Code skills that my team at Bizpoke shares across 13 client projects, connected to ClickUp through MCP. Before AI I wrote code by hand for years: FastAPI and Node.js services, React and Next.js front ends, Python and ArcGIS data pipelines for large utilities. MBA in Software Engineering (USP/ESALQ), fluent English, remote work with US teams.',
  summaryShort:
    'Software engineer with six years of production experience who now builds AI-natively, with Claude Code as my primary environment. In 2026 I shipped two Next.js apps to production on Vercel, built and run a US Shopify brand with Admin GraphQL automation and an AI image pipeline, and authored nine Claude Code skills my team shares across 13 client projects, connected to ClickUp through MCP. Years of hand-written FastAPI, Node.js, React and Python before AI. MBA in Software Engineering (USP/ESALQ), fluent English.',
  experience: [
    {
      role: 'Software Developer',
      org: 'Bizpoke Soluções em Software',
      place: 'São José dos Campos, SP',
      period: 'Dec 2022 to Present',
      groups: [
        {
          title: 'AI-augmented delivery for Aegea, one of the largest sanitation groups in Brazil',
          bullets: [
            'Authored a shared library of nine Claude Code skills and a root CLAUDE.md that every project folder inherits, so any teammate who opens Claude Code gets the same project bootstrap, ArcGIS API client, dashboard editing playbook, delivery document template and status reporting across 13 Aegea projects.',
            'Connected Claude Code to ClickUp through MCP to build client status reports from Epic cards, per project and as a consolidated portfolio view refreshed by a scheduled daily routine, replacing hand-written status updates.',
            'Built an OAuth2 client for the ArcGIS Enterprise REST API with automatic backups before every edit and strict separation of production and staging portals, so the agent can update dashboards and web maps in bulk without risk.',
            'Turned recurring failures into guardrails: the dashboard skill documents traps found in real sessions (edits kept only in memory, schema quirks, filter bugs) and verifies saves through network requests, so the agent does not repeat them.',
            'Cut a recurring geospatial workflow from more than 3 hours to about 20 minutes with a reusable Python and GeoPandas tool, and delivered census tract indicators for 16 Brazilian states for water and sewer concession studies.',
            'Produced specs, a living requirements table, acceptance test notebooks and formal delivery documents (.docx and PDF) from shared templates, taking features from request to production on ArcGIS Enterprise 11.5.',
          ],
        },
        {
          title: 'Equatorial Energia · DOMO field app',
          bullets: [
            'Led front-end and mobile delivery in two-week sprints: offline map editing in React Native (Expo) and Next.js, TypeScript, Redux and MUI screens designed in Figma.',
          ],
        },
        {
          title: 'Earlier client work, written by hand',
          bullets: [
            'OCR exam processing with AWS Textract and S3 for teleophthalmology; ISPDrive, a SaaS for internet providers (Next.js, FastAPI, DigitalOcean Spaces); GIS automation for Duke Energy and North Las Vegas through SBS; SAP, IBM Maximo and Schneider Electric integrations.',
          ],
        },
      ],
      onePage: [
        'Authored nine shared Claude Code skills and a root CLAUDE.md inherited by 13 Aegea projects: project bootstrap, ArcGIS API client, dashboard editing, delivery documents and status reporting.',
        'Connected Claude Code to ClickUp through MCP to generate per-project and portfolio status reports, the portfolio view refreshed by a scheduled daily routine.',
        'Built an OAuth2 ArcGIS Enterprise REST client with automatic backups and production/staging separation, letting the agent edit dashboards in bulk safely.',
        'Cut a recurring geospatial workflow from 3+ hours to about 20 minutes with a reusable GeoPandas tool, and led DOMO front-end and mobile delivery (Equatorial Energia) in two-week sprints.',
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
            'Wrote complex Python problems with reference solutions, test suites and failure analyses for LiveCodeBench and BigCodeBench, each designed to break at least 2 of 4 frontier models (Qwen, DeepSeek, Claude Sonnet, Nova): the same habit I use to catch what AI gets wrong in my own code.',
            'Reviewed prompts, specifications and grading criteria for code generation, self-repair and execution tasks, working fully in English with global teams.',
          ],
        },
      ],
      onePage: ['Designed Python problems, reference solutions and tests that break frontier code models, and reviewed prompts and grading criteria for LiveCodeBench and BigCodeBench.'],
    },
    {
      role: 'Software Development Intern',
      org: 'Bizpoke Soluções em Software',
      place: 'São José dos Campos, SP',
      period: 'Apr 2021 to Dec 2022',
      groups: [{ bullets: ['Shipped React, Node.js, Python and C# features and produced spatial data with ArcGIS Pro and Enterprise alongside offshore teams.'] }],
      onePage: null,
    },
  ],
  projects: [
    {
      name: 'Miau Atelier',
      role: 'D2C e-commerce brand, built and run with Claude Code · 2026',
      text: 'A cat furniture brand for the US market: Shopify store in USD with Stripe; Python tooling over the Shopify Admin GraphQL API for products, media, metafields, collections, policies and theme files; an AI art direction pipeline (system prompt, per-image prompts from a JSON mapping, contact sheets, automated publishing) behind 15 live products; conversion work (buy-now flow, size and fit metafields, FAQ, abandoned checkout emails, reviews) and Google Merchant Center listings.',
      links: [{ label: 'miauatelier.com', href: 'https://miauatelier.com' }],
      onePage: 'US Shopify brand run with Claude Code: Admin GraphQL automation, an AI image pipeline behind 15 live products, Stripe and conversion work.',
    },
    {
      name: 'joaosantaniello.com',
      role: 'Next.js 16 on Vercel · 2026',
      text: 'Migrated a static site to Next.js on a feature branch and shipped it through Vercel preview and production with a custom domain: PT and EN routes with edge language detection by browser language and country, light and dark theme, one content source that renders the web CV and prints ATS PDFs with Playwright with automatic page limit checks, and generated print flyers with QR codes.',
      links: [{ label: 'github.com/joao-bermal/joaosantaniello.com', href: 'https://github.com/joao-bermal/joaosantaniello.com' }],
      onePage: 'Static site migrated to Next.js on Vercel: PT/EN edge routing, dark mode, web CV that prints ATS PDFs with Playwright.',
    },
    {
      name: 'NAMMAN',
      role: 'Next.js on Vercel · 2026',
      text: 'A browser-only app that syncs Neural Amp Modeler profiles from the TONE3000 API to the user’s disk: OAuth 2.0 with PKCE, File System Access API, IndexedDB history, retries with exponential backoff and throttled bulk downloads. Iterated from a Supabase and Prisma backend to a database-free architecture; 40 commits in five weeks.',
      links: [{ label: 'namman.vercel.app', href: 'https://namman.vercel.app/' }],
      onePage: 'Browser-only Next.js app: OAuth 2.0 PKCE, File System Access API, backoff and throttled bulk downloads.',
    },
  ],
  skills: [
    { label: 'AI engineering', items: 'Claude Code as primary environment, custom skills, CLAUDE.md project context, MCP connectors (ClickUp), browser automation, scheduled agent routines, prompt engineering, LLM evaluation', onePage: true },
    { label: 'Web and delivery', items: 'Next.js, React, TypeScript, Tailwind CSS, Vercel (previews, production, domains, env vars), GitHub (branches, pull requests)', onePage: true },
    { label: 'Data and APIs', items: 'PostgreSQL, SQL, Supabase with Prisma, REST, GraphQL, OAuth 2.0 and PKCE, JSON, FastAPI, Node.js', onePage: true },
    { label: 'E-commerce', items: 'Shopify (Admin GraphQL, Liquid themes, metafields, Messaging automations), Stripe, Google Merchant Center, Judge.me', onePage: true },
    { label: 'Data and GIS', items: 'Python, GeoPandas, ArcGIS Enterprise and Dashboards, FME' },
    { label: 'Ways of working', items: 'Agile sprints, specs and acceptance tests, technical documentation, remote work with US teams', onePage: true },
  ],
  education: base.education.map((e, i) =>
    i === 0 ? { ...e, details: [e.details[0], `${e.details[1]} Code: github.com/joao-bermal/retinal-avr-pipeline.`] } : e,
  ),
  files: { full: '', onePage: '' },
};
