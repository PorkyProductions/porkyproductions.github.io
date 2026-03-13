# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server
npm run build     # Build to /docs (GitHub Pages output)
npm run preview   # Preview production build
```

No test runner is configured — manual testing and browser console checks are preferred over heavy testing libraries.

## Architecture

This is an **Astro static site** deployed to GitHub Pages. The build output goes to `/docs`.

Pages are `.astro` files in `src/pages/`. Each page uses `BaseLayout.astro` which wraps the HTML shell, navbar, and footer.

- `src/layouts/BaseLayout.astro` — HTML shell, font imports, Bootstrap CSS, Navbar, Footer
- `src/pages/` — `index.astro`, `software.astro`, `about.astro`, `404.astro`
- `src/components/` — shared Astro components
- `src/styles/global.scss` — Bootstrap SCSS overrides, CSS custom properties, scrollbar
- `public/` — static assets (images, audio)

### Pages
| Page | Route |
|------|-------|
| Home | `/` |
| Software | `/software` |
| About | `/about` |
| 404 | `/404` |

### Key Components
- `Navbar.astro` — sticky nav with hedgehog logo
- `Footer.astro` — links + heart audio easter egg (vanilla JS)
- `ParticleHero.astro` — full-viewport canvas particle system
- `ProjectCard.astro` — glowing project card (`name`, `description`, `tags[]`, `liveUrl?`, `npmUrl?`, `githubUrl?`)
- `MissionStrip.astro` — tagline banner
- `FoundersSection.astro` — Ryan + Tristan cards
- `OriginStory.astro` — origin story + hedgehog image

## Code Style

- **Indentation:** Tabs (not spaces)
- **Line endings:** CRLF
- **Quotes:** Single quotes
- **Semicolons:** Always
- **Functions:** Arrow functions only — never the `function` keyword
- **Variables:** `const` by default, `let` for reassignment
- **Naming:** camelCase for variables/functions, PascalCase for components
- **File length:** Keep files under 200 lines; move heavy logic to `/utils`

## Styling

- **Bootstrap 5** for structure (navbar, cards, grid) — imported via SCSS in `global.scss`
- **Tailwind** for utilities (spacing, color, typography, responsiveness)
- **SCSS** (`.scss` not `.sass`) for global overrides only — avoid raw CSS elsewhere
- Dark-first design using CSS custom properties (see `global.scss`)
- Custom colors in `tailwind.config.cjs`: `primary` (#0000f4), `accent` (#FF4D80), `site-bg`, `surface`, etc.
- Custom fonts: Raleway (headings), Poppins (body)

### CSS Custom Properties
```css
--bg:        #0a0a0f;
--surface:   #12121a;
--primary:   #0000f4;
--accent:    #FF4D80;
--text:      #ffffff;
--text-muted:#a0a0b0;
--glow-blue: rgba(0, 0, 244, 0.3);
--glow-pink: rgba(255, 77, 128, 0.3);
```

## Dependencies

- Prefer native APIs over third-party packages
- No CDN imports — everything scoped to local `node_modules`
- Bootstrap Icons: use inline SVGs for icons needed in components (no CSS font loaded)
- `astro` + `@astrojs/tailwind` for build tooling

## Git Commits

Short subject line (emoji OK), with a longer body explaining the *why* behind decisions.
