# DeviAcademy — Marina Smit
### Vedic Astrology Website & Academy Platform

> First commercial project · Live at [marinasmit.com.ua](https://marinasmit.com.ua)

---

## Overview

A multi-page website for a practicing Vedic astrologer and founder of DeviAcademy. The site covers personal consultations, structured learning modules (Jyotish courses), a community club, and a contact flow — all built without frameworks, in vanilla HTML, CSS, and JS.

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main landing page — hero, courses, consultations, astro club, reviews, contacts |
| `m0-doma.html` | Module 0 · Block 1 — Houses, Planets, Signs |
| `m0-pokazateli.html` | Module 0 · Block 2 — Planetary Indicators |
| `m0-analiz.html` | Module 0 · Block 3 — Full Horoscope Analysis |
| `m1-horoscope.html` | Module 1 · Full Jyotish Course |
| `thank-you-contact.html` | Thank you page — after contact form submission |
| `thank-you-course.html` | Thank you page — after course signup |

---

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, flexbox, animations
- **Vanilla JS** — tab system, accordion, mobile nav, scroll animations
- **Google Fonts** — Cormorant Garamond + Montserrat
- **Web3Forms** — contact form handling
- **Meta Pixel** — Facebook conversion tracking

---

## Key Features

- Multi-page course system with per-block colour coding (rose · wine · sage · terracotta)
- Horizontal tab UI for consultations with mobile accordion fallback
- Animated hero sections with spinning SVG mandalas (unique per block)
- Countdown redirect on thank-you pages with SVG progress ring
- Editorial Astro Club section with topic pills
- Fully responsive — mobile nav, adaptive grids, stacked layouts
- Sticky header with backdrop blur
- Scroll-triggered fade-in animations

---

## Structure

```
marinasmit-astrology/
├── index.html
├── m0-doma.html
├── m0-pokazateli.html
├── m0-analiz.html
├── m1-horoscope.html
├── thank-you-contact.html
├── thank-you-course.html
├── style.css
├── style-module0.css
├── script.js
├── robots.txt
├── image/
│   ├── logoms.svg
│   ├── hero.PNG
│   ├── module0.png · module1.png · module2.png
│   └── service-bcground.PNG · ...
├── social-media/
│   ├── telegram.svg · instagram.svg · whatsapp.svg
│   └── phone-contact.png
└── study-plan/
    ├── miniova.pdf
    └── OVA.pdf
```

---

## Running Locally

```bash
# Clone the repo
git clone https://github.com/your-username/marinasmit-astrology.git

# Open in browser
open index.html
# or simply drag index.html into your browser
```

No build step, no dependencies, no package manager needed.

---

## Deployment

The site is deployed at **[marinasmit.com.ua](https://marinasmit.com.ua)** — static hosting, no server required.

---

*© 2024–2026 Marina Smit · DeviAcademy · All rights reserved*
