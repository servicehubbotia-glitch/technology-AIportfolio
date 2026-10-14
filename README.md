# Paloma García Muley — Professional portfolio (EN · NL · ES)

**Live website:** https://servicehubbotia-glitch.github.io/technology-AIportfolio/

Current website version: 0.3 (editorial and visual refinement ongoing).

A static, responsive, interactive technical portfolio with three editorially drafted languages: English (default), Dutch and Spanish. No server, framework, API credentials, backend, analytics or database are required.

## Preview

Open `index.html` directly in a modern browser, or run `python -m http.server 8000` from this folder and open `http://localhost:8000/`.

Use the top-right language selector: EN / NL / ES. Share a language-specific URL by appending `?lang=en`, `?lang=nl` or `?lang=es` to the published address. The English version is the fallback and source language. Dutch copy should receive a final native-speaker review before wide distribution.

## GitHub Pages

This repository is published from `main` / `/(root)` through GitHub Pages.

- Website: https://servicehubbotia-glitch.github.io/technology-AIportfolio/
- Language URLs: `?lang=en`, `?lang=nl`, `?lang=es`
- Update `index.html` on `main` to publish subsequent revisions.
- After changes, allow GitHub Pages to finish the deployment and refresh the browser.

## Editorial and privacy rules

- English is the base version; localised text is maintained in the inline script at the bottom of `index.html`. Do not translate from NL to ES or ES to NL.
- Client experience is separate from public product case studies; the site does not imply all professional work began with BOTIA.
- Botia Creative Studio and BOTIA Knowledge Base are private. The site only displays non-sensitive high-level summaries; no private code, files, regulatory PDFs or credentials are included.
- The MyReintegration link leads to the owner-authenticated application, not to any personal report. Do not publish screenshots showing real activity entries or account data.
- AI-output evaluation in an original language is offered only when that language is within the consultant's verified working competence. Portfolio localisation is not proof of Dutch-language evaluation proficiency.
- The professional record and technical claims still require owner review before advertising services or submitting proposals.
- To reduce maintenance risk, do not publish a public repository mirror of a private project.

Design: Netherlands-inspired blue/white palette with Source Sans 3, aligned with the existing MyReintegration design system.

## Interactive project explorer (version 0.5)

The homepage includes an illustrated, keyboard-accessible interactive explorer in English, Dutch and Spanish. `portfolio-proof-lab.css` and `portfolio-proof-lab.js` contain its presentation and localized explanations. Every project has a dedicated tab and a direct link from its case card.

The public BOTIA website, Google Play listing and web source repository provide live evidence. The two private repositories (Creative Studio and Knowledge Base) are represented with schematic illustrations only. MyReintegration uses synthetic display data; its actual personal records remain private and its editing interface requires authorized Google login. These illustrated panels are not simulations of live backend execution.
