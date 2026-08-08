# Navitech static site

Multi-page static site (HTML/CSS/JS, no build step) for the Navitech cash deposit machine (CDM) vendor site.

Serve it locally:

```bash
cd /Users/anqihu/navitech
python3 -m http.server 8199
# open http://localhost:8199
```

## Swapping in real product data

All catalog and spec data lives in **`assets/js/products-data.js`** (`window.NAVITECH_PRODUCTS`).
Cards and detail pages render from this single file; edit it, no markup changes needed.
Each product has: name, series, type, tagline, dimensions (mm), weight (kg), noteCapacity, cassettes,
functions/authentication/connectivity/compliance/tamper/options arrays, and a `zh` object with the
Chinese strings.

## Uploading your site logo

Drop the site logo at **`assets/img/logo.png`** (or `logo.svg`), then in `products-data.js`
set `NAVITECH_BRAND.logo`, e.g.:

```js
window.NAVITECH_BRAND = { logo: "assets/img/logo.png" };
```

The logo then replaces the CSS glyph + wordmark in the top nav and footer. Until set, the
placeholder brand shows. Height is capped at 32px. The current artwork is dark-on-transparent:
it shows as-is on the white nav and is auto-inverted to white on the dark footer band.

## Uploading product photos

1. Drop the photo into **`assets/img/products/`**. Name it after the model id, e.g. `nt-100.jpg`.
2. In `products-data.js`, set that product's `photo` field to the file, e.g. `"photo": "assets/img/products/nt-100.jpg"`.
3. Until a photo exists, the visual area shows a neutral light panel (the old schematic SVGs were removed).

## Uploading client logos

1. Drop the logo file into **`assets/img/logos/`**, e.g. `aba.svg` or `aba.png`.
2. In the `NAVITECH_LOGOS` array in `products-data.js`, set the matching `logo` field,
   e.g. `{ id: "aba", name: "ABA Bank", logo: "assets/img/logos/aba.svg" }`.
3. The logo appears on the home trust strip and the Clients page. With `logo: null`,
   the site falls back to a text wordmark. Logos are shown desaturated on hover, then colorised.

## Chinese / English toggle

- Toggle button sits in the top nav. Choice is stored in `localStorage` (`navitech-lang`).
- Static copy is wired with `data-i18n` / `data-i18n-html` / `data-i18n-placeholder` attributes,
  resolved from the dictionary in **`assets/js/i18n.js`**.
- Product and deployment strings: English in the top-level fields, Chinese in each item's `zh` object.
- To add a language: extend the `dict` in `i18n.js`, add a `data-i18n` attribute pass, and add
  `zh` (or the new language's) strings to the data file.

## Placeholder markers

Values still pending real data are tagged with an amber `flag` badge and commented `PLACEHOLDER` in
`products-data.js`. Figures and deployment copy are illustrative pending confirmation.
