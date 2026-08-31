# -*- coding: utf-8 -*-
"""Gera os PDFs do currículo a partir de content.py.

O layout replica o template original (Chrome print-to-PDF + Georgia). As medidas
em pt foram extraídas do PDF original e validadas linha a linha: com o conteúdo
em inglês o resultado bate com o original em 81/81 linhas, desvio máximo 2,25pt.
Mexa nos valores do CSS só se quiser mudar o design de propósito.

Uso:
    python build.py              # escreve dist/cv_pt.html e dist/cv_en.html
    python build.py --pdf        # também imprime os PDFs em dist/
    python build.py --publish    # --pdf e copia o PT para public/kaleu-pt26-updated.pdf
"""
import io
import os
import shutil
import subprocess
import sys

from content import EN, PT

CHROME_CANDIDATES = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
]

CSS = """
@page { size: A4; margin: 51pt 56.45pt 45pt 57pt; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 10.5pt;
  line-height: 1.45;
  color: #1a1a1a;
  padding-top: 2.25pt;
  -webkit-font-smoothing: antialiased;
}
h1 {
  font-size: 20pt;
  line-height: 24pt;
  letter-spacing: 0.5px;
  margin: 0;
  font-weight: bold;
}
.headline {
  font-size: 11.5pt;
  font-weight: bold;
  color: #1a4d8f;
  line-height: 16.5pt;
  margin: 4.6pt 0 0;
}
.contact {
  font-size: 9.5pt;
  line-height: 13.5pt;
  color: #333333;
  margin: 4.3pt 0 0;
}
.contact a { color: #1a4d8f; }
.sep { color: #999999; }
p { margin: 0; }
ul { list-style: none; margin: 0; padding-left: 16pt; }
/* Estas regras precisam vir depois dos resets acima: `h2 + *` empata em
   especificidade com `p`/`ul` e só vence pela ordem. */
h2 {
  font-size: 12pt;
  line-height: 14.4pt;
  letter-spacing: 0.75pt;
  font-weight: bold;
  color: #1a1a1a;
  margin: 13.5pt 0 0;
  padding-bottom: 3.8pt;
  border-bottom: 0.75pt solid #1a1a1a;
}
h2:first-of-type { margin-top: 15.75pt; }
h2 + * { margin-top: 5.35pt; }
h2 + p { margin-top: 10.6pt; }
.block p + p { margin-top: 2.025pt; }
li { position: relative; }
li + li { margin-top: 2.025pt; }
li::before {
  content: "";
  position: absolute;
  left: -11.5pt;
  top: 5.6pt;
  width: 3pt;
  height: 3pt;
  background: #1a1a1a;
}
.job { margin-top: 8.025pt; }
.jobhead { font-weight: bold; }
.job ul { margin-top: 2.775pt; }
/* A data flutua à direita do título do cargo; a margem reserva o vão que força
   o título a quebrar antes de encostar nela. */
.date {
  float: right;
  margin-left: 12pt;
  font-weight: normal;
  font-style: italic;
  color: #444444;
}
"""

TPL = """<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<title>{doc_title}</title>
<style>{css}</style>
</head>
<body>
<h1>{name}</h1>
<p class="headline">{headline}</p>
<p class="contact">{location} <span class="sep">·</span> {phone} <span class="sep">·</span> <a href="mailto:kaleukaleu34@gmail.com">kaleukaleu34@gmail.com</a><br>
<a href="https://linkedin.com/in/kaleu-lima">linkedin.com/in/kaleu-lima</a> <span class="sep">·</span> <a href="https://github.com/Kaleugit">github.com/Kaleugit</a> <span class="sep">·</span> <a href="https://kaleu.dev">kaleu.dev</a></p>

<h2>{s_summary}</h2>
<p id="summary">{summary}</p>

<h2>{s_skills}</h2>
<div class="block">
{skills}
</div>

<h2>{s_work}</h2>
{work}

<h2>{s_projects}</h2>
<ul>
{projects}
</ul>

<h2>{s_education}</h2>
<ul>
{education}
</ul>

<h2>{s_languages}</h2>
<ul>
{languages}
</ul>
</body>
</html>
"""


def render(d):
    skills = "\n".join(
        f"<p><strong>{label}</strong> {text}</p>" for label, text in d["skills"]
    )
    jobs = []
    for title, date, bullets in d["work"]:
        items = "\n".join(f"<li>{b}</li>" for b in bullets)
        jobs.append(
            f'<div class="job">\n'
            f'<p class="jobhead"><span class="date">{date}</span>{title}</p>\n'
            f"<ul>\n{items}\n</ul>\n"
            f"</div>"
        )
    projects = "\n".join(f"<li><strong>{n}</strong>{rest}</li>" for n, rest in d["projects"])
    education = "\n".join(f"<li>{e}</li>" for e in d["education"])
    languages = "\n".join(f"<li>{l}</li>" for l in d["languages"])
    return TPL.format(
        css=CSS,
        lang=d["lang"],
        doc_title=d["doc_title"],
        name=d["name"],
        headline=d["headline"],
        location=d["location"],
        phone=d["phone"],
        s_summary=d["sections"]["summary"],
        s_skills=d["sections"]["skills"],
        s_work=d["sections"]["work"],
        s_projects=d["sections"]["projects"],
        s_education=d["sections"]["education"],
        s_languages=d["sections"]["languages"],
        summary=d["summary"],
        skills=skills,
        work="\n".join(jobs),
        projects=projects,
        education=education,
        languages=languages,
    )


def find_chrome():
    for path in CHROME_CANDIDATES:
        if os.path.exists(path):
            return path
    raise RuntimeError(
        "Chrome não encontrado. Defina o caminho em CHROME_CANDIDATES ou instale o Chrome."
    )


def print_pdf(html_path, pdf_path):
    url = "file:///" + html_path.replace(os.sep, "/")
    subprocess.run(
        [find_chrome(), "--headless", "--disable-gpu", "--no-pdf-header-footer",
         f"--print-to-pdf={pdf_path}", url],
        check=True,
        capture_output=True,
    )
    print("pdf ", pdf_path)


def main():
    here = os.path.dirname(os.path.abspath(__file__))
    dist = os.path.join(here, "dist")
    os.makedirs(dist, exist_ok=True)

    publish = "--publish" in sys.argv
    make_pdf = publish or "--pdf" in sys.argv

    built = {}
    for name, data in (("cv_pt", PT), ("cv_en", EN)):
        html_path = os.path.join(dist, name + ".html")
        with io.open(html_path, "w", encoding="utf-8") as fh:
            fh.write(render(data))
        print("html", html_path)
        if make_pdf:
            pdf_path = os.path.join(dist, name + ".pdf")
            print_pdf(html_path, pdf_path)
            built[name] = pdf_path

    if publish:
        target = os.path.join(here, os.pardir, "public", "kaleu-pt26-updated.pdf")
        shutil.copyfile(built["cv_pt"], target)
        print("publicado", os.path.normpath(target))
        print("Lembre de subir PDF_VERSION em app/page.tsx e app/sobre-mim/page.tsx.")


if __name__ == "__main__":
    main()
