"""Generate the printable and social flyers in public/assets/flyers/.

Every flyer is an HTML page rendered by Chrome, so text, prices and branding live here
instead of inside PNGs. Local service prices mirror src/content/support.ts and the
project prices mirror the home page ("a partir de"). Keep them in sync.

    python scripts/flyers/build.py

Needs: pip install playwright segno pillow. Uses the installed Google Chrome.
Style rule: no em or en dashes in any text.
"""

from __future__ import annotations

import html
import io
from pathlib import Path

import segno
from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "public" / "assets" / "flyers"
OBSIDIAN = ROOT / "public" / "assets" / "obsidian-branding.jpg"
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

NAME = "João Santaniello"
TAGLINE = "tecnologia, design e música"
PHONE = "(12) 99115-8100"
WHATSAPP = "https://wa.me/5512991158100"
SITE = "joaosantaniello.com"
LOCAL_URL = "joaosantaniello.com/suporte"

# ---------------------------------------------------------------------------
# Content
# ---------------------------------------------------------------------------

SUPPORT = [
    ("Formatação básica do sistema", "Sem backup incluso", "R$ 80"),
    ("Formatação com backup completo", "Antes de apagar o disco", "R$ 100"),
    ("Instalação limpa do Windows", "Com licença própria do cliente", "R$ 120"),
    ("Instalação do Windows + Office", "Ativação inclusa, se a licença for fornecida", "R$ 140"),
    ("Remoção de vírus e malware", "Diagnóstico incluso", "R$ 70"),
    ("Limpeza e otimização de sistema lento", "Sem reinstalar o sistema", "R$ 90"),
    ("Remoção de vírus + limpeza completa", "As duas manutenções juntas", "R$ 110"),
    ("Instalação e configuração de drivers", "Vídeo, áudio, rede e periféricos", "R$ 50 a 80"),
    ("Upgrade de SSD ou memória RAM", "Mão de obra, sem o valor da peça", "R$ 60 a 100"),
    ("Configuração de rede, impressora ou software", "Por visita ou sessão remota", "R$ 60 a 90"),
    ("Configuração de áudio para gravação", "Placa de som externa e drivers ASIO", "R$ 70 a 100"),
]

DEVELOPMENT = [
    ("Site institucional ou landing page", "Design responsivo, feito sob medida", "a partir de R$ 1.500"),
    ("Loja virtual com pagamento integrado", "Shopify ou Next.js, Stripe ou Mercado Pago", "a partir de R$ 3.500"),
    ("Identidade visual completa", "Naming, logotipo, paleta, tipografia e aplicações", "a partir de R$ 400"),
    ("Sistema web sob medida", "Backend, banco de dados e automações", "Sob consulta"),
    ("Aplicativo mobile", "React Native, iOS e Android", "Sob consulta"),
    ("Hospedagem e manutenção mensal", "Atualizações, backup e suporte", "a partir de R$ 150/mês"),
]

CREATION = [
    ("Peça avulsa para redes sociais", "Post, capa ou banner único", "R$ 40 a 80"),
    ("Identidade visual completa", "Logo, paleta, tipografia e aplicações", "a partir de R$ 400"),
    ("Jingle básico", "Até 30 segundos, uso simples", "R$ 80 a 150"),
    ("Música customizada completa", "Letra, arranjo e mixagem", "R$ 250 a 600"),
]

INSTRUMENTS = [
    ("Higienização e limpeza geral", "Corpo, captadores e hardware", "R$ 40 a 60"),
    ("Troca de cordas", "Violão, guitarra ou baixo, cordas não inclusas", "R$ 30 a 50"),
    ("Regulagem básica de altura das cordas", "Ajuste de ação", "R$ 50 a 80"),
    ("Pacote troca de cordas + regulagem", "As duas manutenções juntas", "R$ 70 a 110"),
    ("Diagnóstico rápido de problemas simples", "Traste alto, cordas velhas, captação com ruído", "Incluso"),
]

OVERVIEW_GROUPS = [
    ("Suporte técnico", [("Formatação do sistema", "", "R$ 80"), ("Remoção de vírus", "", "R$ 70")]),
    ("Sites, lojas e sistemas", [("Site ou landing page", "", "a partir de R$ 1.500"), ("Loja virtual com pagamento", "", "a partir de R$ 3.500")]),
    ("Criação", [("Identidade visual", "", "a partir de R$ 400"), ("Jingle com IA", "", "a partir de R$ 80")]),
    ("Manutenção de instrumentos", [("Troca de cordas", "", "a partir de R$ 30"), ("Higienização e regulagem", "", "a partir de R$ 40")]),
]

FLAT_LIST = [
    ("Formatação do sistema", "", "R$ 80"),
    ("Remoção de vírus", "", "R$ 70"),
    ("Instalação de drivers", "", "R$ 50"),
    ("Site ou landing page", "", "a partir de R$ 1.500"),
    ("Loja virtual com pagamento", "", "a partir de R$ 3.500"),
    ("Identidade visual", "", "a partir de R$ 400"),
    ("Jingle com IA", "", "a partir de R$ 80"),
    ("Configuração de áudio para gravação", "", "a partir de R$ 70"),
    ("Troca de cordas", "", "a partir de R$ 30"),
    ("Manutenção de instrumentos", "", "a partir de R$ 40"),
]

SERVICES = [
    ("monitor", "Suporte técnico", "Diagnóstico honesto e solução rápida, sem enrolação.", "Formatação, vírus, drivers"),
    ("code", "Sites, lojas e sistemas", "Pensados para durar, não só para funcionar.", "Sites, sistemas, lojas virtuais"),
    ("spark", "Criação", "Identidade visual e música com curadoria de quem é músico e designer.", "Identidade visual e música"),
    ("tuner", "Manutenção de instrumentos", "Cuidado de quem toca, para quem toca.", "Cordas, limpeza, regulagem"),
]

# ---------------------------------------------------------------------------
# Building blocks
# ---------------------------------------------------------------------------

ICONS = {
    "monitor": '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    "code": '<path d="M9 7l-5 5 5 5M15 7l5 5-5 5"/>',
    "spark": '<circle cx="12" cy="12" r="3"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/>',
    "tuner": '<circle cx="12" cy="17" r="3"/><path d="M12 14V4M9 4h6M9 7h6"/>',
}

e = html.escape


def qr_data_uri(url: str, dark: str) -> str:
    buf = io.BytesIO()
    segno.make(url, error="m").save(buf, kind="svg", scale=1, border=0, dark=dark, light=None, xmldecl=False, svgns=True)
    import base64

    return "data:image/svg+xml;base64," + base64.b64encode(buf.getvalue()).decode()


def monogram(size: int) -> str:
    return f'<div class="mono" style="width:{size}px;height:{size}px;font-size:{size * 0.42:.0f}px;border-radius:{size * 0.26:.0f}px">JS</div>'


def brand(title: str | None = None, lead: str | None = None, tagline: bool = True, big: bool = False) -> str:
    parts = [monogram(64 if big else 48)]
    if title:
        parts.append(f'<div class="brandname small">{e(NAME)}</div>')
        parts.append(f'<h1 class="title">{e(title)}</h1>')
        if lead:
            parts.append(f'<p class="lead">{e(lead)}</p>')
    else:
        parts.append(f'<div class="brandname{" big" if big else ""}">{e(NAME)}</div>')
        if tagline:
            parts.append(f'<div class="tagline">{e(TAGLINE)}</div>')
    return f'<header class="brand">{"".join(parts)}<div class="rule"></div></header>'


def rows(items, notes: bool = True, compact: bool = False) -> str:
    out = []
    for item, note, value in items:
        n = f'<div class="note">{e(note)}</div>' if notes and note else ""
        out.append(f'<div class="row"><div class="line"><span class="item">{e(item)}</span><span class="dots"></span><span class="val">{e(value)}</span></div>{n}</div>')
    return f'<div class="rows{" compact" if compact else ""}">{"".join(out)}</div>'


def groups(gs) -> str:
    return "".join(f'<div class="group"><div class="gtitle">{e(t)}</div>{rows(items, notes=False)}</div>' for t, items in gs)


def example(dark: bool) -> str:
    return (
        f'<div class="example{" dark" if dark else ""}"><img src="{OBSIDIAN.as_uri()}" alt="">'
        f'<div><div class="exk">Exemplo real</div><div>Identidade visual criada com IA <b>(case OBSIDIAN)</b></div></div></div>'
    )


def cta(url: str, dark: bool, big: bool = False) -> str:
    qr = qr_data_uri("https://" + url, "#f1ede4" if dark else "#14161a")
    return (
        f'<footer class="cta{" big" if big else ""}"><div class="ctaleft"><a class="btn">Falar no WhatsApp</a>'
        f'<div class="contact">{e(PHONE)} · <b>{e(url)}</b></div></div>'
        f'<div class="qr"><img src="{qr}" alt=""><span>Aponte a câmera</span></div></footer>'
    )


CSS = """
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&display=block');
:root { --paper:#f7f5f0; --paper2:#efece5; --ink:#14161a; --ink2:#3b3f46; --muted:#6b6f76; --line:#e2ded5; --gold:#c98a3e; --golddeep:#a9762f; --night:#0f1110; --nightline:#2c2e2b; }
.dark { --paper:#0f1110; --paper2:#1a1c1b; --ink:#f1ede4; --ink2:#d6d1c6; --muted:#a9a59b; --line:#2c2e2b; --golddeep:#d9a75c; }
* { box-sizing:border-box; margin:0; padding:0; }
body { width:var(--w); height:var(--h); background:var(--paper); color:var(--ink); font-family:'IBM Plex Sans',sans-serif; -webkit-font-smoothing:antialiased; overflow:hidden; }
.page { width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; padding:0 var(--pad); }
.mono { display:flex; align-items:center; justify-content:center; background:#0f1110; color:#d9a75c; font-family:'Fraunces',serif; font-weight:500; letter-spacing:-0.02em; box-shadow:0 0 0 1px #2c2e2b; margin:0 auto; }
.brand { text-align:center; }
.brandname { margin-top:18px; font-family:'Fraunces',serif; font-weight:600; font-size:34px; letter-spacing:0.08em; text-transform:uppercase; }
.brandname.big { font-size:46px; }
.brandname.small { font-size:17px; letter-spacing:0.14em; color:var(--muted); margin-top:14px; }
.tagline { margin-top:8px; font-family:'Fraunces',serif; font-style:italic; font-size:21px; color:var(--golddeep); }
.title { margin-top:12px; font-family:'Fraunces',serif; font-weight:600; font-size:50px; letter-spacing:-0.01em; line-height:1.08; }
.lead { margin:14px auto 0; max-width:760px; font-size:18px; line-height:1.5; color:var(--muted); }
.rule { width:90px; height:1px; background:var(--line); margin:26px auto; }
.rows { display:flex; flex-direction:column; gap:14px; }
.line { display:flex; align-items:baseline; gap:10px; font-size:20px; }
.item { white-space:nowrap; }
.dots { flex:1; border-bottom:1.5px dotted var(--line); transform:translateY(-5px); min-width:20px; }
.val { white-space:nowrap; font-family:'Fraunces',serif; font-weight:600; color:var(--golddeep); }
.note { font-size:13.5px; color:var(--muted); margin-top:2px; }
.group + .group { margin-top:24px; }
.rows.compact { gap:9px; }
.rows.compact .line { font-size:18.5px; }
.rows.compact .note { font-size:12.5px; margin-top:0; }
.tight .rule { margin:18px auto; }
.tight .title { font-size:44px; }
.tight .cta { margin-top:24px; }
.gtitle { font-size:14px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase; color:var(--golddeep); margin-bottom:10px; }
.chips { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin-top:24px; }
.chips span { border:1px solid var(--line); border-radius:999px; padding:6px 14px; font-size:14px; color:var(--ink2); }
.example { display:flex; align-items:center; gap:16px; margin:26px auto 0; padding:12px 20px 12px 12px; border:1.5px solid #e8cfa7; border-radius:16px; background:#fff; font-size:15px; width:max-content; }
.example.dark { background:#1a1c1b; border-color:#3a3228; }
.example img { width:66px; height:66px; object-fit:cover; border-radius:10px; }
.example b { color:var(--golddeep); }
.exk { font-size:11px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; color:var(--golddeep); }
.cta { display:flex; align-items:center; justify-content:center; gap:34px; margin-top:34px; }
.ctaleft { display:flex; flex-direction:column; align-items:center; gap:12px; }
.btn { background:var(--gold); color:#fff; font-weight:600; font-size:21px; padding:14px 34px; border-radius:999px; }
.contact { font-size:16px; color:var(--muted); }
.contact b { color:var(--ink); font-weight:500; }
.qr { display:flex; flex-direction:column; align-items:center; gap:6px; font-size:12px; color:var(--muted); }
.qr img { width:96px; height:96px; }
.cta.big .btn { font-size:26px; padding:18px 44px; }
.cta.big .contact { font-size:20px; }
.cta.big .qr img { width:120px; height:120px; }
.headline { text-align:center; font-family:'Fraunces',serif; font-weight:500; font-size:54px; line-height:1.18; letter-spacing:-0.01em; }
.headline em { font-style:normal; color:var(--golddeep); }
.services { display:flex; flex-direction:column; }
.svc { display:flex; gap:26px; align-items:flex-start; padding:24px 0; border-bottom:1px solid var(--line); }
.svc:last-child { border-bottom:0; }
.svc svg { width:34px; height:34px; flex-shrink:0; stroke:var(--gold); fill:none; stroke-width:1.6; margin-top:2px; }
.svc h3 { font-family:'Fraunces',serif; font-weight:600; font-size:25px; }
.svc p { margin-top:4px; font-size:17px; color:var(--muted); }
.svcgrid { display:grid; grid-template-columns:repeat(4,1fr); }
.svcgrid .svc { flex-direction:column; align-items:center; text-align:center; border-bottom:0; border-right:1px solid var(--line); padding:0 16px; gap:12px; }
.svcgrid .svc:last-child { border-right:0; }
.svcgrid .svc h3 { font-size:18px; }
.svcgrid .svc p { font-size:13.5px; }
.promo { padding:0; justify-content:space-between; }
.promo .top { padding:var(--ptop) var(--pad) 0; }
.eyebrow { font-size:17px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:var(--golddeep); }
.promo .who { display:flex; align-items:center; gap:14px; margin-top:18px; font-family:'Fraunces',serif; font-weight:600; font-size:26px; }
.promo .who .mono { margin:0; }
.promo h1 { margin-top:26px; font-family:'Fraunces',serif; font-weight:600; font-size:var(--h1); line-height:1.1; letter-spacing:-0.015em; }
.promo .lead { margin:22px 0 0; max-width:none; font-size:var(--leadsize); }
.cards { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:34px; }
.card { background:#fff; border:1px solid var(--line); border-radius:16px; padding:20px 22px; }
.card h3 { font-family:'Fraunces',serif; font-weight:600; font-size:var(--cardh); }
.card p { margin-top:4px; font-size:15px; color:var(--muted); }
.highlight { margin-top:26px; text-align:center; padding:16px; border:1.5px solid #e8cfa7; background:#fbf1e3; border-radius:14px; color:var(--golddeep); font-weight:600; font-size:var(--hl); }
.band { background:#15171b; color:#f1ede4; padding:var(--bandpad) var(--pad); display:flex; justify-content:space-between; align-items:center; gap:30px; }
.band .say { font-family:'Fraunces',serif; font-weight:600; font-size:var(--say); }
.band .url { color:#d9a75c; font-weight:600; font-size:var(--url); margin-top:4px; }
.band .phone { font-weight:600; font-size:var(--phone); }
.band small { display:block; color:#a9a59b; font-size:14px; margin-top:2px; }
.band .qr { color:#a9a59b; }
.band-right { display:flex; align-items:center; gap:26px; }
"""


def page(body: str, w: int, h: int, dark: bool = False, pad: int = 120, extra: str = "") -> str:
    return (
        f'<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><style>{CSS}</style>'
        f'<style>:root{{--w:{w}px;--h:{h}px;--pad:{pad}px;{extra}}}</style></head>'
        f'<body class="{"dark" if dark else ""}">{body}</body></html>'
    )


def menu_flyer(title: str, lead: str, items, url: str, chips=None, show_example=False, notes=True, compact=False) -> str:
    chip_html = f'<div class="chips">{"".join(f"<span>{e(c)}</span>" for c in chips)}</div>' if chips else ""
    body = f'<div class="page{" tight" if compact else ""}">{brand(title, lead)}{rows(items, notes, compact)}{chip_html}{example(False) if show_example else ""}{cta(url, False)}</div>'
    return page(body, 1080, 1080)


def overview_flyer(gs) -> str:
    return page(f'<div class="page">{brand()}{groups(gs)}{cta(LOCAL_URL, False)}</div>', 1080, 1080, pad=150)


def flat_flyer(w: int, h: int, dark: bool) -> str:
    big = h > w
    inner = f'{brand()}{rows(FLAT_LIST, notes=False)}{example(dark)}{cta(LOCAL_URL, dark)}'
    if big:
        inner = f'<div style="zoom:1.42">{inner}</div>'
    return page(f'<div class="page">{inner}</div>', w, h, dark=dark, pad=110 if not big else 70)


def premium_flyer(w: int, h: int) -> str:
    vertical = h > w
    head = '<p class="headline">Um único profissional.<br><em>O mesmo padrão de cuidado</em> em cada detalhe.</p>'
    icon = lambda k: f'<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">{ICONS[k]}</svg>'
    if vertical:
        svcs = "".join(f'<div class="svc">{icon(k)}<div><h3>{e(t)}</h3><p>{e(d)}</p></div></div>' for k, t, d, _ in SERVICES)
        body = f'<div class="page"><div style="zoom:1.22">{brand(big=True)}{head}<div class="rule"></div><div class="services">{svcs}</div><div class="rule"></div>{cta(LOCAL_URL, False)}</div></div>'
    else:
        svcs = "".join(f'<div class="svc">{icon(k)}<h3>{e(t)}</h3><p>{e(d)}</p></div>' for k, t, d, _ in SERVICES)
        body = f'<div class="page">{brand()}<p class="headline" style="font-size:38px">Um único profissional. <em>O mesmo padrão de cuidado</em> em cada detalhe.</p><div class="rule"></div><div class="svcgrid">{svcs}</div>{cta(LOCAL_URL, False)}</div>'
    return page(body, w, h, pad=110 if vertical else 90)


def promo_flyer(w: int, h: int) -> str:
    vertical = h > w
    cards = "".join(f'<div class="card"><h3>{e(t)}</h3><p>{e(s)}</p></div>' for _, t, _, s in SERVICES)
    qr = qr_data_uri("https://" + LOCAL_URL, "#f1ede4")
    z = ' style="zoom:1.5"' if vertical else ""
    body = (
        f'<div class="page promo"><div class="top"{z}><div class="eyebrow">Tecnologia · Design · Música</div>'
        f'<div class="who">{monogram(44)}{e(NAME)}</div>'
        f'<h1>Do computador travado ao site, à loja e à identidade visual que seu negócio precisa.</h1>'
        f'<p class="lead">Suporte técnico, sites e lojas, criação e manutenção de instrumentos, tudo com um profissional só.</p>'
        f'<div class="cards">{cards}</div><div class="highlight">Suporte técnico a partir de R$ 70</div></div>'
        f'<div class="band"{z}><div><div class="say">Fale comigo</div><div class="url">{e(LOCAL_URL)}</div></div>'
        f'<div class="band-right"><div><div class="phone">{e(PHONE)}</div><small>WhatsApp</small></div>'
        f'<div class="qr"><img src="{qr}" alt=""></div></div></div></div>'
    )
    if vertical:
        extra = "--ptop:70px;--h1:44px;--leadsize:18px;--cardh:20px;--hl:18px;--bandpad:40px;--say:26px;--url:19px;--phone:24px;"
    else:
        extra = "--ptop:64px;--h1:44px;--leadsize:18px;--cardh:20px;--hl:18px;--bandpad:34px;--say:26px;--url:19px;--phone:24px;"
    return page(body, w, h, pad=50 if vertical else 70, extra=extra)


# ---------------------------------------------------------------------------
# Render
# ---------------------------------------------------------------------------

FLYERS = {
    "joao-santaniello-flyer-1-visao-geral": lambda: overview_flyer(OVERVIEW_GROUPS),
    "joao-santaniello-flyer-1b-visao-geral-sem-instrumentos": lambda: overview_flyer(OVERVIEW_GROUPS[:3]),
    "joao-santaniello-flyer-2-suporte-tecnico": lambda: menu_flyer(
        "Suporte técnico", "Diagnóstico honesto e manutenção rápida para computadores e periféricos do dia a dia, sem enrolação.", SUPPORT, LOCAL_URL, compact=True
    ),
    "joao-santaniello-flyer-3-desenvolvimento": lambda: menu_flyer(
        "Sites, lojas e sistemas", "Sites, sistemas e lojas virtuais pensados para durar, não só para funcionar.", DEVELOPMENT, SITE,
        chips=["Design responsivo", "Integração com APIs", "Automações", "Suporte pós-entrega"],
    ),
    "joao-santaniello-flyer-4-criacao-ia": lambda: menu_flyer(
        "Criação com IA", "Sou músico e tenho vivência em design de interface. As criações com IA passam por curadoria antes de chegar até você.", CREATION, LOCAL_URL, show_example=True
    ),
    "joao-santaniello-flyer-4b-criacao-ia-sem-exemplo": lambda: menu_flyer(
        "Criação com IA", "Sou músico e tenho vivência em design de interface. As criações com IA passam por curadoria antes de chegar até você.", CREATION, LOCAL_URL
    ),
    "joao-santaniello-flyer-5-instrumentos": lambda: menu_flyer(
        "Manutenção de instrumentos", "Sou músico e cuido do meu próprio instrumento no dia a dia. Não é uma bancada de luthieria, mas resolve bem os cuidados básicos.", INSTRUMENTS, LOCAL_URL
    ),
    "joao-santaniello-flyer-claro-quadrado": lambda: flat_flyer(1080, 1080, False),
    "joao-santaniello-flyer-claro-vertical": lambda: flat_flyer(1080, 1920, False),
    "joao-santaniello-flyer-escuro-quadrado": lambda: flat_flyer(1080, 1080, True),
    "joao-santaniello-flyer-escuro-vertical": lambda: flat_flyer(1080, 1920, True),
    "joao-santaniello-flyer-premium-quadrado": lambda: premium_flyer(1080, 1080),
    "joao-santaniello-flyer-premium-vertical": lambda: premium_flyer(1080, 1920),
    "joao-santaniello-promo-quadrado": lambda: promo_flyer(1080, 1080),
    "joao-santaniello-promo-vertical": lambda: promo_flyer(1080, 1920),
}

COMBO = ("joao-santaniello-flyer-combo-4-secoes", ["joao-santaniello-flyer-2-suporte-tecnico", "joao-santaniello-flyer-3-desenvolvimento", "joao-santaniello-flyer-4-criacao-ia", "joao-santaniello-flyer-1b-visao-geral-sem-instrumentos"])


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    tmp = OUT / "_html"
    tmp.mkdir(exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=CHROME)
        for name, make in FLYERS.items():
            doc = make()
            w = int(doc.split("--w:")[1].split("px")[0])
            h = int(doc.split("--h:")[1].split("px")[0])
            src = tmp / f"{name}.html"
            src.write_text(doc, encoding="utf-8")
            pg = browser.new_page(viewport={"width": w, "height": h})
            pg.goto(src.as_uri(), wait_until="networkidle")
            pg.evaluate("document.fonts.ready")
            overflow = pg.evaluate("document.querySelector('.page').scrollHeight > innerHeight + 1")
            pg.screenshot(path=str(OUT / f"{name}.png"))
            pg.close()
            print(f"{name}.png {w}x{h}{'  OVERFLOW' if overflow else ''}")
        browser.close()
    # 2x2 poster from four square flyers, with thin dividers.
    name, parts = COMBO
    poster = Image.new("RGB", (2160, 2160), "#e2ded5")
    for i, part in enumerate(parts):
        im = Image.open(OUT / f"{part}.png").convert("RGB").resize((1079, 1079))
        poster.paste(im, ((i % 2) * 1081, (i // 2) * 1081))
    poster.save(OUT / f"{name}.png")
    print(f"{name}.png 2160x2160")
    for f in tmp.iterdir():
        f.unlink()
    tmp.rmdir()


if __name__ == "__main__":
    main()
