# k-nie.github.io

Personal academic website of **Benjamin Narh-Madey**, PhD candidate in the
Hittinger Lab, Genetics Graduate Program, University of Wisconsin–Madison.
Live at <https://k-nie.github.io>.

The site is plain HTML, CSS and a little JavaScript. There is no build step:
GitHub Pages serves the files as they are (the `.nojekyll` file turns Jekyll off).

## Files

| Path | What it holds |
|------|---------------|
| `index.html` | Home page: intro, about, research, publications, software, background |
| `cv.html` | Full CV (has a Print / PDF button; prints cleanly on paper) |
| `404.html` | Page shown for broken links |
| `styles.css` | All styling. Colours are CSS variables at the top, with a dark theme below them |
| `app.js` | Optional extras: theme toggle, highlighting the current section in the menu, CV print button |
| `images/` | Portrait (`profile-320/640` in JPEG and WebP; `profile.jpg` is the original), favicons, social preview card `og-card.jpg` |
| `site.webmanifest`, `robots.txt`, `sitemap.xml` | Metadata for browsers and search engines |

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Common edits

- **New paper:** copy an `<li class="entry">` block under *Peer-reviewed articles*
  in `index.html` (newest first), and add the same reference to the
  *Publications* list in `cv.html`.
- **New talk or poster:** same, under *Conference presentations*.
- **New portrait:** replace `images/profile.jpg`, then regenerate the four
  `profile-320/640.{jpg,webp}` files at 320 px and 640 px square.
- **Colours:** change `--accent` (and the dark-theme `--accent`) at the top of `styles.css`.
