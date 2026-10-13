# SATVA Resort & Sanctuary — Website

A premium, visually stunning, fully responsive website for **SATVA Resort**, developed using React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

---

## 🌿 Brand Identity & Design System

- **Brand Name**: SATVA Resort & Sanctuary
- **Tagline**: *Escape to Your Natural State*
- **Aesthetic Direction**: Luxury nature retreat, biophilic architecture, editorial typography, serene motion.
- **Color Palette**:
  - Deep Forest Green: `#183D32` (Header accents, card frames, botanical depths)
  - Dark Forest Night: `#0e2720` (Hero, footer, night sanctuary sections)
  - Warm Ivory: `#F7F4EC` (Editorial backgrounds, crisp linens)
  - Earthy Beige: `#D8C8AC` (Subtle borders, texture tones)
  - Charcoal: `#222823` (Body typography)
  - Muted Gold: `#B49A67` (Emblem, CTAs, highlight borders)
- **Typography**:
  - Headings: *Cormorant Garamond* (Serif)
  - Navigation & Body: *Plus Jakarta Sans* (Sans-serif)

---

## ✨ Features & Architecture

1. **Cinematic Hero**: Full-screen atmospheric photography with slow zoom, golden emblem, staggered typography, and action CTAs.
2. **Interactive Audio Ambience**: Built-in Web Audio API synthesizer for mountain wind and gentle forest stream, fully offline with no external downloads.
3. **About Section**: Editorial split-layout with philosophy pillars ("A Place to Pause. A Space to Reconnect.").
4. **Living Sanctuaries (Stay)**: Filterable accommodation cards (Villas, Suites, Residences) with custom modal drawers detailing room specs, amenities, and instant enquiry pre-fill.
5. **Signature Statement**: Full-width atmospheric divider ("Find Your Space. Feel the Difference.").
6. **Curated Experiences**: Interactive showcase highlighting Ayurveda wellness, forest-to-table dining, wilderness canopy treks, and stargazing.
7. **Cinematic Gallery**: Responsive masonry grid with fullscreen lightbox, keyboard navigation (Escape, Left, Right arrows), and category filtering.
8. **Interactive Booking Enquiry**: Real-time validated booking form with date checks, guest counters, room preference selector, celebration confetti, and generated reference code (`SATVA-XXXXXX`).
9. **Location & Concierge**: Interactive topographic and aerial map toggle, verified coordinates (1,240m elevation), private transfer guidance.
10. **Footer & Legal**: Newsletter journal subscription with instant feedback, Privacy Policy and Terms of Stay modals, back-to-top button.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ (tested on Node v24)
- npm v10+

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx             # Sticky navigation, audio ambience, mobile drawer
│   ├── Hero.tsx               # Cinematic hero with staggered animations
│   ├── About.tsx              # Editorial about section with philosophy pillars
│   ├── Stay.tsx               # Accommodations grid with category filters
│   ├── RoomModal.tsx          # Full-screen / drawer modal with room specifications
│   ├── SignatureStatement.tsx # Full-width statement with parallax
│   ├── Experiences.tsx        # Interactive experience switcher & highlights
│   ├── Gallery.tsx            # Cinematic gallery with lightbox viewer
│   ├── BookingEnquiry.tsx     # Validated enquiry form & confirmation receipt
│   ├── ContactLocation.tsx    # Location guide with interactive terrain viewer
│   ├── Footer.tsx             # Luxury footer, newsletter, back-to-top
│   └── PolicyModal.tsx        # Privacy policy and terms modal
├── data/
│   └── resortData.ts          # Centralized resort content data store
├── types/
│   └── index.ts               # TypeScript data models
├── App.tsx                    # Main application assembly & state coordination
├── index.css                  # Tailwind v4 theme, fonts, custom luxury classes
└── main.tsx                   # Application mount point
```

---

## 🛠 Customization & Content Updates

To update room descriptions, photography, pricing samples, experiences, or contact info, simply edit [`src/data/resortData.ts`](./src/data/resortData.ts). No component restructuring is necessary.
