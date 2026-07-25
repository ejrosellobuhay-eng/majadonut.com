# Maja Café & Donuts — Static Advertisement Website

Production-ready static marketing site built with **Vue 3 + Vite + Tailwind CSS**, based on the provided prototype.

## 1. Requirements
- Node.js 18+ and npm

## 2. Setup
```
cd maja-donut
npm install
```

## 3. Run locally (dev server with hot reload)
```
npm run dev
```
Open the URL it prints (usually http://localhost:5173).

## 4. Build for production
```
npm run build
```
Output goes to the dist/ folder — that's what you upload to your host (Vercel, Netlify, cPanel, etc.).

## 5. Preview the production build locally
```
npm run preview
```

## Project structure
```
src/
  assets/images/     -> all product/press/franchise photos + logo
  components/        -> NavBar, HeroSection, FoodMarquee, FeaturedSection,
                         MenuSection, KidsTakeover, PartyCart, FaqAccordion,
                         FranchisePackage, BookTable, ContactSection,
                         FooterSection, ScrollToTop, ImageModal
  composables/        -> useScrollReveal.js (scroll-reveal + active nav link tracking)
  App.vue             -> wires all sections together
  main.js             -> app entry point
  style.css           -> Tailwind + Poppins font import
tailwind.config.js    -> brand colors (#FF8F00 orange, #F5F5DC bg) + Poppins font
index.html            -> SEO meta tags, Open Graph, Twitter Card, JSON-LD
```

## Notes / things to swap before going live
1. Google Maps embed in the Contact section (ContactSection.vue) uses a generic search query — replace the iframe src with your actual embed link from Google Maps > Share > Embed a map.
2. Social links (Facebook/Instagram/TikTok icons in Contact & Footer) are placeholder # hrefs — drop in your real page URLs.
3. og-banner.jpg in /public is reused from the hero product photo — swap in a dedicated 1200x630 OG banner image if you have one.
4. Canonical/OG URLs in index.html use https://www.majadonut.com/ as a placeholder — update to the real domain once deployed.
5. The Book a Table form is visual-only (no backend), as requested — it just shows a confirmation message on submit.
6. FAQ copy and franchise inclusions were reconstructed from the prototype text — review wording before publishing.
