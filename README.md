# OpenWare Website

Multi-page RenderWare-like retro portal inspired by early 2000s middleware sites.

## Purpose

This folder contains a standalone promotional website for the OpenWare engine.
The design intentionally follows a retro middleware aesthetic: metallic panels,
bevel-style navigation, scanlines, and dashboard-like status blocks.

## Run Locally

From project root:

```bash
cd website
python3 -m http.server 8080
```

Open in browser:

- http://localhost:8080/index.html

## Pages

- `index.html` - home page, engine overview, project pitch
- `features.html` - engine modules and feature matrix
- `pipeline.html` - runtime/frame pipeline explanation
- `download.html` - GitHub link, dependencies, build and run commands
- `about.html` - mission, direction, and project identity

## Shared Assets

- `styles.css` - global RenderWare-like retro visual system
- `script.js` - active nav state, fake telemetry values, live clock

## Editing Guide

- Update text/content directly in each HTML page.
- Keep shared visual changes in `styles.css` (so all pages stay consistent).
- Keep reusable behavior in `script.js`.
- If you add a new page, include it in the nav on all pages and assign `data-page` on `<body>`.

## Notes

- This is a static website (no framework/build step required).
- The telemetry values are intentionally simulated for presentation.
