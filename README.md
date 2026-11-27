# PRO TEC Entrance Automation - website

```
index.html            Home page
robots.txt            Search engine rules
sitemap.xml           List of pages for Google
pages/                Product pages (one HTML file per product)
assets/
  css/style.css       All styling (shared by every page)
  js/site.js          Mobile menu and custom cursor (every page)
  js/home.js          Home page slider, arrows and enquiry form
  images/
    logos/            PRO TEC and "Powered by" logos
    products/         Product photos
    symbols/          Product symbols (icons)
    general/          Team photo and section backgrounds
```

Editing tips
- Change colours and layout in `assets/css/style.css`.
- Add a product photo: put it in `assets/images/products/` and use `../assets/images/products/name.jpg` inside a page in `pages/`.
- Keep the folder structure exactly as shown, because every page links to these paths.
