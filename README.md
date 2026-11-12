# Homepage

A lightweight, responsive static website built with HTML, CSS, and JavaScript. No build step is required.

## Project structure

```text
index.html          Page content
assets/css/         Stylesheets
assets/fonts/       Local fonts
assets/js/          Interface behavior
images/             Images and icons
404.html            Error page
robots.txt          Crawler settings
sitemap.xml         Sitemap
```

## Local preview

Run from the project directory:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000` in a browser.

## Editing

- Update page content in `index.html`.
- Adjust typography, colors, and spacing in `assets/css/profile.css`.
- Add or replace images in `images/`.

## Deployment

In GitHub Pages settings, select **Deploy from a branch**, choose **main**, and use **/ (root)**. Commits to the publishing branch update the site automatically.

Keep `.nojekyll` in the repository root to serve the static files directly.
