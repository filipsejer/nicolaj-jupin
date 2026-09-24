# Nicolaj Jupin: guldsmedelærling

Portfolio site for Nicolaj Jupin, a goldsmith apprentice in Copenhagen who is looking for a *læreplads* (apprenticeship).
It's plain HTML/CSS with a little vanilla JS. There is no build step and nothing to install.

## Pages

| URL | Page |
| --- | --- |
| `/` | Forside: hero, promises, skills ledger ("Færdighedsprotokol"), selected work, current WIP, contact |
| `/portfolio/` | All pieces. Filter by technique; sort oldest-first to show progression. Each piece opens in a dialog and has a shareable link (`/portfolio/#signetring`) |
| `/wip/` | Work in progress written as workbench notes: what I'm trying / what went wrong / next step |
| `/om/` | About |
| `/kontakt/` | Email, phone, Instagram, availability and a form that opens the visitor's mail app |

## Preview locally

```sh
npx http-server . -p 8080     # or: python3 -m http.server 8080
```

## Adding content

**All pieces and WIP projects live in [`assets/js/data.js`](assets/js/data.js).** To add a piece:

1. Put the photos in `assets/pieces/`, e.g. `assets/pieces/signetring-1.jpg`. Use portrait 4:5, about 1600 px on the long side, JPG quality around 80.
2. Copy a block in `PIECES`, fill in the fields and list the photos: `images: ["assets/pieces/signetring-1.jpg", "assets/pieces/signetring-2.jpg"]`.
3. Delete `placeholder: true` so the "Pladsholder" tag goes away.

`featured: true` puts a piece on the front page (the 3 newest featured pieces are shown). The "Nr." on each piece is worked out from the dates, so the oldest piece is Nr. 01.
The skills ledger counts the pieces per technique automatically. Technique names must match the names in `TECHNIQUES`.

## Placeholders still to replace

- [ ] Real pieces and photos in `data.js` (everything is currently `placeholder: true`)
- [ ] Hero photo on the front page (`index.html`, search for "Hovedfoto følger")
- [ ] Portrait and Nicolaj's own text on `om/index.html`
- [ ] Availability date: search for `Efter aftale` in `om/index.html` and `kontakt/index.html`
- [ ] Once the domain is known, add a `CNAME` file and make `og:image` an absolute URL

## Design system: "The Hallmark"

- **Colour:** ink blue `#14224A` dominates, muted linen `#E2DACB` is the paper, gold `#C9A24A` is kept for accents only.
  Gold only goes on blue; on linen use `--gold-deep` `#7D5F1C`.
- **Type:** Bodoni Moda (display; the italic is the voice), Schibsted Grotesk (text), Geist Mono (specs and labels).
  The fonts are self-hosted in `assets/fonts/`, so the site doesn't call Google's servers (GDPR).
- **Mark:** `assets/img/mark.svg` is the NJ monogram in a hallmark-shaped frame. It's drawn from Bodoni outlines, so it doesn't need the font to render.

## Deploy (GitHub Pages)

Settings → Pages → *Deploy from a branch* → `main` / root. Add a custom domain (e.g. `nicolajjupin.dk`) on the same page.
