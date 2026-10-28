# Professional digital card

Permanent public address:
https://servicehubbotia-glitch.github.io/technology-AIportfolio/card/

This independent, buildless page adds five professional resources without changing the existing portfolio. It uses only local assets, system fonts and native HTML links. JavaScript provides an optional copy-link button. There is no analytics script, QR subscription, third-party QR redirect or external runtime dependency.

## Update links while keeping the same QR

Edit the five resource URLs in the `resource-list` section of `index.html`. For the CV, update both the View PDF and Download links if the filename changes. Commit to `main`; the repository's existing GitHub Pages publication includes the changes. The QR always opens `/technology-AIportfolio/card/`, so changing these destination links does not require another QR.

Keep the repository name, public domain and `/card/` route unchanged. A later move of the card itself would require a persistent redirect at this exact address, or a new QR.

## Assets

- `assets/paloma-garcia-muley-cv.pdf`: public copy of the existing **Paloma García Muley - Resume.pdf** uploaded on October 26, 2026. The personal contact line, current town, mail/phone links, annotations, embedded files and original metadata were removed. The mislabeled GitHub link was corrected to the real public profile already linked by the portfolio. The source CV remains unchanged. No professional claims were added.
- `assets/paloma-garcia-muley-qr.png`: 980 × 980 px, navy on white, four-module quiet zone, QR error correction Q. Encodes only the permanent public card URL. Generated locally with the open-source `qrcode` Python package; independently decoded with `zxing-cpp`, including at 180, 240 and 360 px.
- `assets/monogram.svg`: local text-based PG favicon.

## Sources checked on October 28, 2026

- Professional CV: existing user-provided PDF above, alongside the repository's existing `cv.html`. A public PDF is included here for direct viewing and download.
- LinkedIn: https://www.linkedin.com/in/paloma-garcia-muley/ — exact profile linked by the existing portfolio and CV; public profile found on LinkedIn. LinkedIn can require sign-in or restrict automated access.
- Portfolio: https://servicehubbotia-glitch.github.io/technology-AIportfolio/
- BOTIA Safe Food: https://www.botia-safefood.com/
- Google Play: https://play.google.com/store/apps/details?id=com.botia.safefood — official listing **BOTIA: Food Label Scanner**, developer **ServiceHub.Botia**, linked to the BOTIA website.

No BOTIA website or application source is modified by this card.
