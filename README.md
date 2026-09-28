# joaosantaniello.com

Portfolio and services site of João Santaniello, in Portuguese and English. Live at **[joaosantaniello.com](https://joaosantaniello.com)**.

Next.js 16 (App Router) with static export: every page is rendered to HTML at build time and served by Vercel.

## Highlights

- **Bilingual routing.** Portuguese at `/`, English at `/en/`, each with its own root layout so `<html lang>` is correct. A Vercel edge rule (`vercel.json`) sends visitors to `/en/` only when the browser lists no Portuguese and the country (`x-vercel-ip-country`) is not Portuguese speaking; a cookie keeps a manual choice.
- **Light and dark theme.** Light by default, dark on request, applied before first paint (no flash). Brand sections and the printed CV stay light.
- **CV as code.** One content file renders the extended web CV (`/cv/`) and prints ATS-friendly PDFs with Playwright; the build fails if the full CV passes two pages or the resume passes one.
- **Generated print flyers.** Local-service flyers are HTML templates rendered to PNG, with QR codes to `/suporte/`, so prices and branding live in code, not in image files.
- **Case study.** A full Miau Atelier case (brand, Shopify store and AI image pipeline) with before and after sliders.

## Pages

| Route | Content |
|---|---|
| `/`, `/en/` | Home: brand identity, e-commerce and custom development, with the Miau Atelier case featured |
| `/cases/miau-atelier/`, `/en/cases/miau-atelier/` | Miau Atelier case study |
| `/cv/`, `/en/cv/` | Extended CV with downloads of the full CV and the one-page resume |
| `/suporte/` | Local tech support, instrument care and quick creative work (Portuguese only, linked from the footer and the flyers) |

The old `/miau-atelier/` address redirects to `/cases/miau-atelier/` (`vercel.json`).

## Where to edit

| What | File |
|---|---|
| Home copy, services, starting prices, process, about | `src/content/site.ts` |
| Selected work cards | `work` in `src/content/site.ts` |
| Contact links | `contact` in `src/content/site.ts` |
| Miau Atelier case | `src/content/miau-atelier.ts` |
| CV (PT and EN, full and one page) | `src/content/resume.ts` |
| Tailored CV variants for specific roles | `src/content/resume-ai.ts` |
| Local services price table | `src/content/support.ts` |
| Colors and fonts | `src/app/globals.css`, `src/lib/fonts.ts` |
| Images | `public/assets/` |

Style rule: no em or en dashes in any copy.

## Structure

```
src/
├── app/
│   ├── (pt)/            # <html lang="pt-BR">: home, case, CV, support
│   └── (en)/en/         # <html lang="en">: home, case, CV
├── components/          # Header, Footer, HomePage, MiauCase, ResumePage, ResumeDocument, ThemeToggle, ...
├── content/             # all copy and data, per language
└── lib/                 # fonts and site URL
scripts/
├── build-cv.py          # prints the CV PDFs
└── flyers/build.py      # renders the flyers
public/
├── assets/              # images, flyers, Miau Atelier case
└── docs/                # published CV PDFs
```

## Commands

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build                # static site in out/
npm run lint
python scripts/build-cv.py   # after a build: CV PDFs to public/docs/ (tailored ones to cv-tailored/, git ignored)
python scripts/flyers/build.py
```

The Python scripts need `playwright`, `pypdf`, `segno` and `pillow`, and use the installed Google Chrome.

## Deploy

Vercel builds every push: branches get preview URLs and `main` goes to production on joaosantaniello.com. `vercel.json` pins the framework to Next.js. The URL used in social previews comes from `VERCEL_PROJECT_PRODUCTION_URL`, or from `NEXT_PUBLIC_SITE_URL` to force a domain.

## How it was built

Built with Claude Code as the primary development environment, with every change reviewed, tested in the browser and committed by hand.
