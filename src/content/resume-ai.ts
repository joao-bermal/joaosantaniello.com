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
  headline: 'AI Product Engineer · Claude Code, Next.js on Vercel, Supabase and n8n for E-commerce',
  summary:
    'Software engineer with six years of production experience who now builds AI-natively. Claude Code is my primary development environment: I orchestrate it to ship production software, and I read, review and correct what it generates. In 2026 I shipped two Next.js applications to production on Vercel, built and run a US e-commerce brand on Shopify with Python automation over the Admin GraphQL API and an AI image pipeline, built a live multi-brand support triage demo with Claude agents, Supabase and n8n, and authored a library of nine Claude Code skills that my team at Bizpoke shares across 13 client projects, connected to ClickUp, our internal data platform and the store through MCP (including a Composio server). Before AI I wrote FastAPI, Node.js, React and Python by hand for years, including ArcGIS pipelines for large utilities. MBA in Software Engineering (USP/ESALQ), fluent English, remote work with US teams.',
  summaryShort:
    'Software engineer with six years of production experience who now builds AI-natively, with Claude Code as my primary environment. In 2026 I shipped two Next.js apps to production on Vercel, built and run a US Shopify brand with Admin GraphQL automation and an AI image pipeline, and authored nine Claude Code skills my team shares across 13 client projects, connected to ClickUp through MCP. Years of hand-written FastAPI, Node.js, React and Python before AI.',
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
            'Contributed to BizpokeBI, the team’s geospatial data platform (FastAPI, DuckDB and Apache Sedona, H3, Redis queues), and to its internal bizpoke MCP server, which gives Claude the dataset catalog, processing pipelines, jobs and ArcGIS tools, with every write gated by explicit approval and an audit log.',
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
          title: 'Client platforms, written by hand',
          bullets: [
            'Main developer of EyeConnect, a teleophthalmology platform in production (Raspberry Pi DICOM gateway, OCR intake with AWS Textract), and rewrote ISPDrive, a multi-tenant storage SaaS (FastAPI, Next.js); GIS work for Duke Energy through SBS.',
          ],
        },
      ],
      onePage: [
        'Authored nine shared Claude Code skills and a root CLAUDE.md inherited by 13 Aegea projects: project bootstrap, ArcGIS API client, dashboard editing, delivery documents and status reporting.',
        'Connected Claude Code through MCP to ClickUp (status reports on a scheduled daily routine) and to BizpokeBI, our geospatial data platform, whose bizpoke MCP server I helped build.',
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
            'Wrote Python problems with reference solutions and tests for LiveCodeBench and BigCodeBench, each designed to break at least 2 of 4 frontier models, and reviewed prompts and grading criteria: the same habit I use to catch what AI gets wrong in my own code.',
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
      name: 'Triage Desk',
      role: 'Multi-brand AI support triage · Claude, Supabase, n8n · 2026',
      text: 'Live demo of AI customer support for several D2C brands. n8n webhooks ingest messages idempotently and call a Supabase Edge Function where a Claude orchestrator (SDK tool runner, structured outputs, prompt caching) looks up the order and consults policy and catalog sub-agents, returning priority, an escalation decision and a policy-grounded draft that staff approve in a Next.js dashboard. Brand isolation via Postgres RLS and column grants, covered by 14 pgTAP tests; HMAC verified Shopify sync; error workflow. About US$0.03 per ticket; technical design doc.',
      links: [
        { label: 'triage.joaosantaniello.com', href: 'https://triage.joaosantaniello.com' },
        { label: 'Code: github.com/joao-bermal/triage-desk', href: 'https://github.com/joao-bermal/triage-desk' },
      ],
      printAllLinks: true,
      onePage: 'Claude agent with sub-agents in a Supabase Edge Function, n8n workflows, RLS with pgTAP tests, Next.js on Vercel.',
    },
    {
      name: 'Miau Atelier',
      role: 'D2C e-commerce brand, built and run with Claude Code · 2026',
      text: 'A cat furniture brand for the US market: Shopify store in USD with Stripe, connected to Claude through a Composio MCP server; Python tooling over the Admin GraphQL API for products, media, metafields, policies and theme files; an AI art direction pipeline behind 15 live products; conversion work (buy-now flow, size and fit metafields, abandoned checkout emails, reviews) and Google Merchant Center.',
      links: [{ label: 'miauatelier.com', href: 'https://miauatelier.com' }],
      onePage: 'US Shopify brand run with Claude Code and a Composio MCP server: Admin GraphQL automation, an AI image pipeline behind 15 live products, Stripe and conversion work.',
    },
    {
      name: 'joaosantaniello.com',
      role: 'Next.js 16 on Vercel · 2026',
      text: 'Migrated a static site to Next.js through Vercel preview and production with a custom domain: PT and EN routes with edge language detection, light and dark theme, and one content source that renders the web CV and prints ATS PDFs with Playwright.',
      links: [
        { label: 'joaosantaniello.com', href: 'https://joaosantaniello.com' },
        { label: 'Code: github.com/joao-bermal/joaosantaniello.com', href: 'https://github.com/joao-bermal/joaosantaniello.com' },
      ],
      printAllLinks: true,
      onePage: 'Static site migrated to Next.js on Vercel: PT/EN edge routing, dark mode, web CV that prints ATS PDFs with Playwright.',
    },
    {
      name: 'NAMMAN',
      role: 'Next.js on Vercel · 2026',
      text: 'Browser-only app that syncs Neural Amp Modeler profiles from the TONE3000 API to disk: OAuth 2.0 with PKCE, File System Access API, IndexedDB, backoff and throttled bulk downloads. Iterated from a Supabase and Prisma backend to a database-free design.',
      links: [
        { label: 'namman.vercel.app', href: 'https://namman.vercel.app/' },
        { label: 'Code: github.com/joao-bermal/NAMMAN', href: 'https://github.com/joao-bermal/NAMMAN' },
      ],
      printAllLinks: true,
    },
  ],
  skills: [
    { label: 'AI engineering', items: 'Claude Code as primary environment, Claude API (tool runner, structured outputs, sub-agents, prompt caching), custom skills, CLAUDE.md project context, MCP servers and connectors (internal bizpoke server, ClickUp, Composio for the Shopify store), browser automation, scheduled agent routines, prompt engineering, LLM evaluation', onePage: true },
    { label: 'Automation', items: 'n8n (webhooks, retries, schedules, error workflows), Docker Compose, pg_net and pg_cron', onePage: true },
    { label: 'Web and delivery', items: 'Next.js, React, TypeScript, Tailwind CSS, Vercel (previews, production, domains, env vars), GitHub (branches, pull requests), Agile sprints', onePage: true },
    { label: 'Data and APIs', items: 'PostgreSQL, SQL, Supabase (RLS, Edge Functions, Realtime) and Prisma ORM, REST, GraphQL, OAuth 2.0 and PKCE, FastAPI, Node.js', onePage: true },
    { label: 'E-commerce', items: 'Shopify (Admin GraphQL, Liquid themes, metafields, Messaging automations), Stripe, Google Merchant Center, Judge.me', onePage: true },
  ],
  education: base.education.map((e, i) =>
    i === 0 ? { ...e, details: [e.details[0], `${e.details[1]} Code: github.com/joao-bermal/retinal-avr-pipeline.`] } : e,
  ),
  // Keep the courses to one line so the tailored CV stays within two pages.
  courses: base.courses.filter((c) => /Python 3|AWS Summit|Esri Developer/.test(c)),
  files: { full: '', onePage: '' },
};
