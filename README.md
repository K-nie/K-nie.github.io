# Personal website — Benjamin Narh-Madey

Source for my personal academic website. Built on [Jekyll](https://jekyllrb.com)
with the [academicpages](https://github.com/academicpages/academicpages.github.io)
template, deployed via GitHub Pages.

Author: Benjamin Narh-Madey
PhD candidate, Genetics Graduate Program, University of Wisconsin–Madison
Hittinger Lab

## Layout

| Path                 | What it holds                                                |
|----------------------|--------------------------------------------------------------|
| `_config.yml`        | Site-wide settings, author profile, social links             |
| `_pages/about.md`    | Landing page (`/`) bio and current focus                     |
| `_pages/*.html`      | Landing pages for each collection (publications, talks, ...) |
| `_publications/`     | One Markdown file per peer-reviewed paper or preprint        |
| `_talks/`            | One Markdown file per conference talk or poster              |
| `_teaching/`         | One Markdown file per course or workshop                     |
| `_portfolio/`        | One Markdown file per tool / software project                |
| `_posts/`            | One Markdown file per news / update entry                    |
| `_data/navigation.yml` | Header menu order                                          |
| `_data/authors.yml`  | Author profile referenced by posts                           |
| `files/`             | PDFs (papers, posters, CV)                                   |
| `images/`            | Site images, including `profile.png` (sidebar avatar)        |

## Local preview

Requires Ruby >= 3.1 and Bundler.

```bash
bundle install
bundle exec jekyll serve -l -H 0.0.0.0
```

The site is then available at `http://localhost:4000`. Edits hot-reload on save
except for changes to `_config.yml`, which require a restart.

## Publishing to GitHub Pages

When ready to go live:

```bash
gh repo create K-nie/K-nie.github.io --public --source=. --remote=origin
git init && git add -A && git commit -m "Initial site"
git branch -M master
git push -u origin master
```

The site will be served at `https://k-nie.github.io` within a few minutes of
the first push. Repository Settings → Pages should already be configured for
the `master` branch root.

## Adding content

### A publication

There is a ready-made template at `_publications/TEMPLATE.md`. To add a paper:

1. Copy `_publications/TEMPLATE.md` to `_publications/YYYY-MM-DD-slug.md`
2. Edit the YAML fields (title, date, venue, DOI, citation)
3. Set `category:` to `manuscripts` (peer-reviewed) or `preprints`
4. Delete the `published: false` line so the entry appears on `/publications/`
5. Save. The local server auto-rebuilds; refresh the browser.

The template stays in the folder with `published: false` so Jekyll skips it but it
remains discoverable as a reference. Do not delete it.

### A talk or poster

Create `_talks/<YYYY-MM-DD-slug>.md`:

```yaml
---
title: "Talk title"
collection: talks
type: "Talk"
permalink: /talks/<YYYY-MM-DD-slug>
venue: "Conference name"
date: 2026-06-15
location: "City, Country"
---

Talk description, link to slides PDF in /files/.
```

### A tool / portfolio entry

Create `_portfolio/<slug>.md` with `collection: portfolio` and a thumbnail
image referenced from `images/`.

### A news / update post

Create `_posts/<YYYY-MM-DD-slug>.md`. Posts show up on the home page if the
sidebar `Recent posts` block is enabled in `_config.yml`.

## TODO before launch

- Replace `images/profile.png` with an actual headshot
- Fill in ORCID, Google Scholar, and LinkedIn URLs in `_config.yml`
- Confirm `github` username in `_config.yml` author block
- Add first publications, talks, and tools entries
- Add CV PDF to `files/CV.pdf` and link from `_pages/cv.md`
- Create the `K-nie/K-nie.github.io` GitHub repo and push
