# Paloma García Muley — Professional portfolio (draft v0.3)

A static, responsive, interactive technical portfolio with three editorially drafted languages: English (default), Dutch and Spanish. No server, framework, API credentials, backend, analytics or database are required.

## Preview

Open `index.html` directly in a modern browser, or run `python -m http.server 8000` from this folder and open `http://localhost:8000/`.

Use the top-right language selector: EN / NL / ES. Share a language-specific URL by appending `?lang=en`, `?lang=nl` or `?lang=es` to the published address. The English version is the fallback and source language. Dutch copy should receive a final native-speaker review before wide distribution.

## GitHub Pages publication

1. Repository: [`servicehubbotia-glitch/technology-AIportfolio`](https://github.com/servicehubbotia-glitch/technology-AIportfolio), public and independent of BOTIA production repositories.
2. The files `index.html`, `.nojekyll` and this README are in the repository root on `main`.
3. To enable the site, open **Settings → Pages**, select **Deploy from a branch**, branch `main`, folder `/(root)`, then save.
4. Wait for GitHub to confirm the published URL and verify all three language links and all four case-study dialogs on desktop and mobile.

The published Pages URL is not verified until GitHub actually returns it. GitHub may take some time to deploy and changes can require refreshing the browser cache.

## Editorial and privacy rules

- English is the base version; localised text is maintained in the inline script at the bottom of `index.html`. Do not translate from NL to ES or ES to NL.
- Client experience is separate from public product case studies; the site does not imply all professional work began with BOTIA.
- Botia Creative Studio and BOTIA Knowledge Base are private. The site only displays non-sensitive high-level summaries; no private code, files, regulatory PDFs or credentials are included.
- The MyReintegration link leads to the owner-authenticated application, not to any personal report. Do not publish screenshots showing real activity entries or account data.
- AI-output evaluation in an original language is offered only when that language is within the consultant's verified working competence. Portfolio localisation is not proof of Dutch-language evaluation proficiency.
- The professional record and technical claims still require owner review before advertising services or submitting proposals.
- To reduce maintenance risk, do not publish a public repository mirror of a private project.

Design: Netherlands-inspired blue/white palette with Source Sans 3, aligned with the existing MyReintegration design system.
