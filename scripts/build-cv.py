"""Print the CV routes to PDF.

Run after `npm run build`: serves out/, prints each /cv/pdf/ route with Chrome and writes
the PDFs to public/docs/ (committed, served by the site) and out/docs/ (current build).

    npm run build
    python scripts/build-cv.py

Needs: pip install playwright pypdf. Uses the installed Google Chrome.
"""

import functools
import http.server
import shutil
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "out"
DOCS = ROOT / "public" / "docs"
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

# route -> (file name, maximum page count)
JOBS = {
    "/cv/pdf/full/": ("Joao_Bermal_Santaniello_Curriculo_PT.pdf", 2),
    "/cv/pdf/one-page/": ("Joao_Bermal_Santaniello_Curriculo_1pag_PT.pdf", 1),
    "/en/cv/pdf/full/": ("Joao_Bermal_Santaniello_CV_EN.pdf", 2),
    "/en/cv/pdf/one-page/": ("Joao_Bermal_Santaniello_Resume_EN.pdf", 1),
}


def main() -> None:
    if not (OUT / "cv" / "pdf").exists():
        raise SystemExit("out/cv/pdf not found. Run `npm run build` first.")

    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *args):
            pass

    handler = functools.partial(Quiet, directory=str(OUT))
    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    base = f"http://127.0.0.1:{server.server_address[1]}"

    DOCS.mkdir(parents=True, exist_ok=True)
    (OUT / "docs").mkdir(exist_ok=True)
    problems = []
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=CHROME)
        page = browser.new_page()
        for route, (name, max_pages) in JOBS.items():
            page.goto(base + route, wait_until="networkidle")
            page.evaluate("document.fonts.ready")
            target = DOCS / name
            page.pdf(path=str(target), format="A4", print_background=True, prefer_css_page_size=True)
            shutil.copy2(target, OUT / "docs" / name)
            pages = len(PdfReader(target).pages)
            print(f"{name}: {pages} page(s)")
            if max_pages and pages > max_pages:
                problems.append(f"{name} has {pages} pages, expected {max_pages}")
        browser.close()
    server.shutdown()
    if problems:
        raise SystemExit("\n".join(problems))


if __name__ == "__main__":
    main()
