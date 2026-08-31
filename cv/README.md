# Gerador do currículo

Fonte do PDF em português servido pelo site (`public/kaleu-pt26-updated.pdf`).

## Como atualizar

1. Edite o texto em `content.py` (dicionário `PT`).
2. Rode o build:

   ```bash
   cd cv
   python build.py --publish
   ```

   Isso gera os HTMLs e PDFs em `cv/dist/` e copia o PT para `public/kaleu-pt26-updated.pdf`.

3. Suba `PDF_VERSION` (`"v3"` → `"v4"`) em `app/page.tsx` e `app/sobre-mim/page.tsx` para
   invalidar o cache dos navegadores.
4. Confira que o PDF continua com 2 páginas. O texto em português é ~15% mais longo que o
   inglês; se transbordar para uma terceira página, encurte a redação em vez de diminuir a
   fonte.

Sem `--publish`, `python build.py` só escreve os HTMLs e `--pdf` também imprime os PDFs em
`cv/dist/`, sem tocar em `public/`.

## Sobre a versão em inglês

`public/kaleu-e26-updated.pdf` **não** é gerado aqui — é o arquivo original, copiado byte a
byte. O dicionário `EN` do `content.py` é a transcrição fiel dele, e existe para validar o
template: gerando o CV em inglês por este build e comparando com o original, o resultado bate
em 81/81 linhas com desvio vertical máximo de 2,25pt (arredondamento de pixel do Chrome).

Se um dia quiser gerar as duas versões daqui, é só publicar `dist/cv_en.pdf` por cima.

## Requisitos

Python 3 e Google Chrome (ou Edge) instalado — o PDF é impresso via Chrome headless, o mesmo
pipeline que produziu o template original. Os caminhos procurados estão em `CHROME_CANDIDATES`
no `build.py`.
