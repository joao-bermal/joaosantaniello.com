# Site João Bermal

Portfólio e site de serviços, em português e inglês. Next.js 16 (App Router) com export estático: cada página vira HTML no build e o Vercel serve os arquivos.

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` e `/en/` | Home: identidade visual, e-commerce e desenvolvimento, com o case Miau Atelier em destaque |
| `/cases/miau-atelier/` e `/en/cases/miau-atelier/` | Case completo da Miau Atelier |
| `/cv/` e `/en/cv/` | Currículo, com download dos PDFs (completo e uma página) |
| `/suporte/` | Suporte técnico, manutenção de instrumentos e criação rápida (só em português). Fica fora do menu, com link no rodapé. É o destino dos flyers. |

O endereço antigo `/miau-atelier/` redireciona para `/cases/miau-atelier/` (`vercel.json`).

## Onde editar

| O que | Arquivo |
|---|---|
| Textos da home, serviços, preços "a partir de", processo, sobre | `src/content/site.ts` |
| Trabalhos selecionados (OBSIDIAN, NAMMAN, TCC, Bizpoke) | `work` em `src/content/site.ts` |
| WhatsApp, e-mail, LinkedIn, GitHub | `contact` em `src/content/site.ts` |
| Case Miau Atelier (textos e imagens) | `src/content/miau-atelier.ts` |
| Currículo (PT e EN, completo e uma página) | `src/content/resume.ts` |
| Tabela de preços do suporte | `src/content/support.ts` |
| Cores e fontes | `src/app/globals.css` e `src/lib/fonts.ts` |
| Imagens | `public/assets/` |

Regra de estilo: nada de travessão (em dash ou en dash) nos textos.

## Estrutura

```
src/
├── app/
│   ├── (pt)/            # layout <html lang="pt-BR">: home, case, suporte
│   └── (en)/en/         # layout <html lang="en">: home e case
├── components/          # Header, Footer, HomePage, MiauCase, SupportPage, BeforeAfter, ...
├── content/             # todos os textos e dados, por idioma
└── lib/                 # fontes e URL do site
public/assets/           # imagens (flyers, OBSIDIAN, Miau Atelier)
```

## Comandos

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera a pasta out/
npm run lint
```

## Currículo

O conteúdo fica em `src/content/resume.ts` e gera a página `/cv/` e os quatro PDFs em `public/docs/`. Depois de editar o texto:

```bash
npm run build
python scripts/build-cv.py   # imprime /cv/pdf/* com o Chrome e grava em public/docs/
```

O script falha se o completo passar de duas páginas ou o resumido de uma. As rotas `/cv/pdf/` existem só para a impressão e não são indexadas. Versões antigas ficam em `cv-archive/`, fora do git.

## Deploy

O projeto no Vercel detecta Next.js sozinho. Cada push no `main` publica o site. A URL usada nas imagens de compartilhamento vem de `VERCEL_PROJECT_PRODUCTION_URL` (automática no Vercel) ou de `NEXT_PUBLIC_SITE_URL`, se quiser fixar um domínio próprio.
