# Bollo — Website Project

Built with **Next.js 14 + Tailwind CSS + TypeScript**  
Brand design system: see `bollo-brand-design.md`

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚠️ Before You Start — Action Required

### Mascot image
The mascot PNG needs a **transparent background** version from the designer.  
Once you have it, place it at:
```
/public/assets/mascot/bollo-mascot.png
```
The file is already referenced in `app/components/Mascot.tsx`.

### Contact details
Update the placeholder email and phone number in:
- `app/sections/CtaSection.tsx` — `hej@bollo.dk` and `+45 00 00 00 00`
- `app/components/Footer.tsx` — same placeholders

---

## 📁 Project Structure

```
bollo/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx       ← Fixed navbar with mobile menu
│   │   ├── Footer.tsx       ← Site footer
│   │   └── Mascot.tsx       ← Animated mascot (bottom-right)
│   ├── sections/
│   │   ├── Hero.tsx         ← Dark hero with headline + stats
│   │   ├── WhyReviews.tsx   ← Why reviews matter (5 cards)
│   │   ├── HowItWorks.tsx   ← 5-step process
│   │   ├── AiSection.tsx    ← AI search & visibility (dark)
│   │   ├── ReviewHandling.tsx ← Review response examples
│   │   ├── Industries.tsx   ← Business types
│   │   └── CtaSection.tsx   ← Final CTA + contact
│   ├── layout.tsx           ← Root layout + metadata
│   └── page.tsx             ← Homepage (assembles all sections)
├── styles/
│   └── globals.css          ← Tailwind + CSS variables + components
├── public/
│   └── assets/mascot/       ← Place mascot PNG here
├── bollo-brand-design.md    ← Full brand system reference
├── tailwind.config.js       ← Bollo colors, fonts, animations
└── package.json
```

---

## 🎨 Using the Brand System with Claude Code

When working in Claude Code, start every session with:

> *"Read bollo-brand-design.md as the design system. Use the CSS variables, colors, fonts and component styles defined there for everything you build."*

### Key Tailwind classes to know:
| Class | What it does |
|---|---|
| `btn-primary` | Coral CTA button |
| `btn-secondary` | Ghost button for dark backgrounds |
| `section-tag` | Small uppercase mint label |
| `section-tag-dark` | Same but for dark sections |
| `bollo-card` | White card with hover effect |
| `card-icon` | Mint icon box inside cards |
| `section-h2` | Section heading (light bg) |
| `section-h2-dark` | Section heading (dark bg) |
| `section-sub` | Muted lead paragraph |
| `section-dark` | Dark forest gradient section |
| `cta-trigger` | Add to ANY button to trigger mascot cheer |

---

## 🗺️ Planned Subpages (next steps)

1. `/reputation-management`
2. `/ai-synlighed`
3. `/anmeldelseshaandtering`
4. `/google-maps-optimering`
5. `/trustpilot-haandtering`
6. `/brancher`
7. `/cases`
8. `/om-bollo`
9. `/kontakt`

---

## 🛠 Tech Stack

| Tool | Version |
|---|---|
| Next.js | 14 (App Router) |
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3.4 |
| Fonts | Syne + DM Sans (Google Fonts) |
| Deployment | Vercel (recommended) |
