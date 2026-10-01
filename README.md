# nicolaj-jupin.dk

Portfolio site for Nicolaj Jupin, a goldsmith in training based in Copenhagen.

The site is plain HTML, CSS and a bit of JavaScript. There's no build step or package manager; GitHub Pages serves the files as they are.

## Running it locally

Any static file server works. From the repo root:

```sh
python3 -m http.server 8080
```

Then open http://localhost:8080. Opening `index.html` directly from disk mostly works too, but the page links point at folders (`portfolio/`, `om/` …), so a server is nicer.

## Structure

```
index.html            front page
portfolio/            all pieces, filterable by category
wip/                  projects in progress
om/                   about
kontakt/              contact
assets/js/data.js     all portfolio and WIP content
assets/js/main.js     rendering, filters, the piece dialog
assets/css/style.css
assets/fonts/         self-hosted fonts
assets/img/           logo, favicon, share image
assets/pieces/        photos
```

## Adding a piece

Everything in the portfolio comes from `assets/js/data.js`, so adding or editing a piece doesn't touch any HTML.

1. Resize the photos (around 1400 px on the long side is plenty) and put them in `assets/pieces/`.
2. Add an entry to `PIECES`:

```js
{
  id: "signetring",                 // also used in the link: /portfolio/#signetring
  type: "Ringe",                    // one of TYPES
  title: "Signetring",
  date: "2026-11",                  // YYYY-MM
  metal: "Sølv 925",
  techniques: ["Lodning", "Polering"],
  featured: false,                  // true = can show on the front page
  images: ["assets/pieces/signetring-1.jpg", "assets/pieces/signetring-2.jpg"],
  text: "Short description.",
  missing: []
}
```

A few things worth knowing:

- Pieces are numbered by date, oldest first, so the numbers shift when an older piece is added.
- The first image is the one shown in the grid.
- `missing` is an internal to-do list of details still to get. It is not shown on the site.
- Categories come from `TYPES` and the skills list on the front page comes from `TECHNIQUES`, both at the top of `data.js`.

WIP projects live in the `WIP` list in the same file and work the same way.

## Photos

Strip location data from photos before committing them. The repo is public, and phone photos often carry GPS coordinates in their metadata.

## Deployment

GitHub Pages builds from the root of `main`, and every push goes live within a minute or two. The custom domain is set in `CNAME`, with the DNS records for nicolaj-jupin.dk pointing at GitHub Pages.

## Credits

Fonts: Bodoni Moda, Schibsted Grotesk and Geist Mono, all under the SIL Open Font License.

Photos and content © Nicolaj Jupin.
