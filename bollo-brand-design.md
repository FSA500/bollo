# Bollo — Brand Design System
> Use this file with Claude Code in VS Code to ensure all UI generation matches the Bollo brand exactly.

---

## 1. Brand Overview

**Company:** Bollo  
**Category:** Reputation Management Agency  
**Tagline:** Få flere anmeldelser, bedre omdømme og større synlighed i AI-søgninger  
**Target audience:** Danish businesses (small and large) that know reviews matter but lack the time or systems to handle them  
**Tone:** Professional · Modern · Trustworthy · Direct · Easy to understand · Not too technical  

---

## 2. Logo & Mascot

### Wordmark
- The brand name is written as **Bollo**
- Recommended font for the wordmark: **Syne** (weight: 800)
- The letter **"o"** at the end can be accented in `--color-mint` to add brand personality
- Example: `Boll<span style="color: #6DCBA0">o</span>`

### Mascot
- Bollo has a 3D character mascot — a friendly rounded robot/figure wearing a green scarf and a cape
- The cape symbolises "we are the hero that handles your reputation for you"
- The mascot should appear **fixed to the bottom-right** of the screen on all pages
- It should float gently (idle animation) and react when users hover over CTA buttons (cheer animation)
- ⚠️ **NOTE:** A clean transparent PNG version of the mascot is still needed. The current file has a gray circle background and black corners that need to be removed by the original designer. Request the source file with a transparent background before final production.
- Mascot file placeholder: `/assets/mascot/bollo-mascot.png`

---

## 3. Color Palette

All colors are defined as CSS custom properties. Always use these variables — never hardcode hex values in components.

```css
:root {
  /* Primary brand color */
  --color-mint:         #6DCBA0;   /* Main green — used for logos, icons, highlights */
  --color-mint-light:   #e8f7f0;   /* Light mint — card backgrounds, tags, section tints */
  --color-mint-dark:    #4aaa80;   /* Darker mint — hover states on mint elements */

  /* Dark base — backgrounds for hero, footer, dark sections */
  --color-forest:       #1a3d35;
  --color-forest-deep:  #0f2d26;

  /* CTA accent — ONLY used for buttons and conversion elements */
  --color-coral:        #FF6B6B;
  --color-coral-hover:  #ff4f4f;

  /* Backgrounds */
  --color-bg:           #f5f7f5;   /* Main page background */
  --color-surface:      #ffffff;   /* Cards, modals, content blocks */

  /* Text */
  --color-text:         #1c2b28;   /* Primary body text */
  --color-text-soft:    #4a6660;   /* Secondary/muted text, captions */
  --color-text-on-dark: #ffffff;   /* Text on dark/forest backgrounds */
  --color-text-muted-dark: rgba(255,255,255,0.68); /* Softer text on dark backgrounds */

  /* Borders & dividers */
  --color-border:       #e2ece8;
  --color-border-mint:  rgba(109, 203, 160, 0.2);
}
```

### Color Usage Rules — 60 / 30 / 10

| Share | Color | Where |
|---|---|---|
| **60%** | Off-white `#f5f7f5` + White `#ffffff` | Page backgrounds, card surfaces, breathing room |
| **30%** | Forest green `#1a3d35` / `#0f2d26` | Hero section, footer, navbar, dark feature sections |
| **10%** | Coral `#FF6B6B` | CTA buttons, key highlights ONLY — never overuse |

> ⚠️ Never use two bright accent colors competing in the same section. Coral is strictly for CTAs and conversion points.

---

## 4. Typography

### Font Stack

```css
/* Import in <head> or global CSS */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700;800&display=swap');

:root {
  --font-display: 'Syne', sans-serif;   /* Headlines, logo, section titles */
  --font-body:    'DM Sans', sans-serif; /* Body text, buttons, nav, captions */
}
```

### Type Scale

```css
:root {
  --text-xs:   0.72rem;   /* Tags, labels, captions */
  --text-sm:   0.82rem;   /* Card text, small descriptions */
  --text-base: 0.95rem;   /* Body text */
  --text-md:   1rem;      /* Subheadings, lead text */
  --text-lg:   1.2rem;    /* Small section titles */
  --text-xl:   1.5rem;    /* Section headings */
  --text-2xl:  2rem;      /* Page section titles */
  --text-3xl:  2.7rem;    /* Hero headline */
}
```

### Usage Rules

| Element | Font | Weight | Color |
|---|---|---|---|
| Hero H1 | Syne | 800 | `--color-text-on-dark` |
| Section H2 | Syne | 800 | `--color-forest` |
| Section H3 | DM Sans | 700 | `--color-forest` |
| Body text | DM Sans | 400 | `--color-text` |
| Muted text | DM Sans | 400 | `--color-text-soft` |
| Nav links | DM Sans | 500 | `--color-text-soft` |
| CTA buttons | DM Sans | 700 | `#ffffff` |
| Section tags | DM Sans | 700 uppercase | `--color-mint-dark` |

---

## 5. Spacing & Layout

```css
:root {
  /* Spacing scale */
  --space-xs:  8px;
  --space-sm:  16px;
  --space-md:  24px;
  --space-lg:  40px;
  --space-xl:  64px;
  --space-2xl: 96px;

  /* Section padding */
  --section-padding-y: 80px;
  --section-padding-x: 48px;   /* 24px on mobile */

  /* Max content width */
  --max-width: 1100px;
  --max-width-text: 640px;     /* Max width for body text blocks */

  /* Border radius */
  --radius-sm:   8px;
  --radius-md:   14px;
  --radius-lg:   18px;
  --radius-xl:   24px;
  --radius-full: 9999px;       /* Pills, tags, round buttons */
}
```

---

## 6. Components

### Buttons

```css
/* Primary CTA — coral, pill shaped */
.btn-primary {
  background: var(--color-coral);
  color: #fff;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: var(--text-base);
  padding: 14px 28px;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}
.btn-primary:hover {
  background: var(--color-coral-hover);
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(255, 107, 107, 0.5);
}

/* Secondary — ghost/outline style for dark backgrounds */
.btn-secondary {
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-base);
  padding: 14px 28px;
  border-radius: var(--radius-full);
  border: 1.5px solid rgba(255, 255, 255, 0.28);
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}
.btn-secondary:hover {
  border-color: rgba(255, 255, 255, 0.65);
  color: #fff;
}
```

### Section Tags / Labels

```css
/* Small uppercase label above section headings */
.section-tag {
  display: inline-block;
  background: var(--color-mint-light);
  color: var(--color-mint-dark);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: var(--radius-full);
  margin-bottom: 16px;
}
```

### Cards

```css
.card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-md);
  border: 1px solid var(--color-border-mint);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
}

.card-icon {
  width: 44px;
  height: 44px;
  background: var(--color-mint-light);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 14px;
}
```

### Navbar

```css
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px var(--section-padding-x);
  background: rgba(245, 247, 245, 0.88);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border-mint);
}
```

### Hero Section

```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px var(--section-padding-x) 60px;
  background: linear-gradient(
    135deg,
    var(--color-forest-deep) 0%,
    var(--color-forest) 60%,
    #1f5045 100%
  );
  position: relative;
  overflow: hidden;
}

/* Subtle dot pattern overlay */
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle,
    rgba(109, 203, 160, 0.1) 1px,
    transparent 1px
  );
  background-size: 32px 32px;
  pointer-events: none;
}
```

### Dark Sections (e.g. AI search section, CTA section)

```css
.section-dark {
  background: linear-gradient(135deg, var(--color-forest-deep), var(--color-forest));
  color: var(--color-text-on-dark);
}
```

---

## 7. Mascot Animation

The mascot is fixed bottom-right and should never overlap main content on mobile.

```css
/* Wrapper — fixed position, right side, out of content flow */
.mascot-wrapper {
  position: fixed;
  right: 24px;
  bottom: 32px;
  z-index: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

/* Speech bubble */
.mascot-bubble {
  position: relative;
  background: #fff;
  border-radius: 14px 14px 14px 4px;
  padding: 9px 13px;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-forest);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  margin-bottom: 10px;
  max-width: 150px;
  text-align: center;
  line-height: 1.4;
  opacity: 0;
  transform: translateY(6px) scale(0.92);
  transition: opacity 0.3s ease, transform 0.3s ease;
  border: 1px solid var(--color-border-mint);
}
.mascot-bubble.show {
  opacity: 1;
  transform: translateY(0) scale(1);
}
/* Triangle tail on bubble */
.mascot-bubble::after {
  content: '';
  position: absolute;
  bottom: -7px; left: 14px;
  width: 0; height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid #fff;
}

/* Mascot image container */
.mascot-container {
  width: 115px;
  height: 115px;
  border-radius: 50%;
  overflow: hidden;
  animation: mascotFloat 3.5s ease-in-out infinite;
  filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.2));
}

/* Idle float animation */
@keyframes mascotFloat {
  0%   { transform: translateY(0px)   rotate(0deg);    }
  25%  { transform: translateY(-7px)  rotate(0.6deg);  }
  50%  { transform: translateY(-11px) rotate(0deg);    }
  75%  { transform: translateY(-5px)  rotate(-0.6deg); }
  100% { transform: translateY(0px)   rotate(0deg);    }
}

/* CTA hover cheer animation */
@keyframes mascotCheer {
  0%   { transform: translateY(0)    rotate(0deg)  scale(1);    }
  20%  { transform: translateY(-20px) rotate(-8deg) scale(1.08); }
  45%  { transform: translateY(-14px) rotate(8deg)  scale(1.1);  }
  65%  { transform: translateY(-22px) rotate(-4deg) scale(1.09); }
  85%  { transform: translateY(-8px)  rotate(3deg)  scale(1.04); }
  100% { transform: translateY(0)    rotate(0deg)  scale(1);    }
}
.mascot-container.cheering {
  animation: mascotCheer 0.7s ease-in-out forwards !important;
}

/* Mobile sizing */
@media (max-width: 600px) {
  .mascot-container { width: 80px; height: 80px; }
  .mascot-wrapper   { right: 12px; bottom: 20px; }
}
```

### Mascot JS Behaviour

```javascript
// Trigger this function when user hovers any .btn-primary / CTA button
const cheerMessages = ["Godt valg! 🎉", "Vi klarer det! 💪", "Fantastisk! ⭐", "Lad os gå! 🚀"];
const idleMessages  = ["Hej! Jeg er Bollo 👋", "Vi styrker dit omdømme!", "Top 5 på Google Maps ✅", "Prøv en gratis demo 😊"];

function triggerCheer() {
  const container = document.querySelector('.mascot-container');
  const bubble    = document.querySelector('.mascot-bubble');
  container.classList.add('cheering');
  bubble.textContent = cheerMessages[Math.floor(Math.random() * cheerMessages.length)];
  bubble.classList.add('show');
  setTimeout(() => {
    container.classList.remove('cheering');
    setTimeout(() => bubble.classList.remove('show'), 1500);
  }, 750);
}

// Attach to all CTA buttons
document.querySelectorAll('.btn-primary').forEach(btn =>
  btn.addEventListener('mouseenter', triggerCheer)
);

// Idle bubble every 9 seconds
let idleIndex = 0;
setInterval(() => {
  const bubble = document.querySelector('.mascot-bubble');
  if (!bubble.classList.contains('show')) {
    bubble.textContent = idleMessages[idleIndex % idleMessages.length];
    bubble.classList.add('show');
    idleIndex++;
    setTimeout(() => bubble.classList.remove('show'), 3200);
  }
}, 9000);
```

---

## 8. Page Structure & Sections

### Homepage sections (in order)

1. **Navbar** — Fixed, glass blur, logo left, nav links center, CTA button right
2. **Hero** — Dark forest gradient, headline, subtext, primary + secondary CTA, stats bar (Top 5 / 3x / 24/7)
3. **Why reviews matter** — White background, 5 icon+text points
4. **How Bollo helps** — Light mint background `--color-mint-light`, 5 steps numbered
5. **AI search & future visibility** — Dark section (forest gradient), forward-looking messaging
6. **We answer reviews for you** — White background, team/service highlight
7. **For small and large businesses** — Light background, 6 business type icons
8. **CTA section** — Dark forest gradient, strong headline, coral button
9. **Footer** — Dark, links, contact

### Subpages (planned)
1. Forside (Homepage)
2. Reputation Management
3. AI-synlighed
4. Anmeldelseshåndtering
5. Google Maps optimering
6. Trustpilot håndtering
7. Brancher
8. Cases
9. Om Bollo
10. Kontakt / Book demo

---

## 9. CTA Texts

Use these exact CTA texts across the site:

| Context | Text (Danish) |
|---|---|
| Primary hero CTA | Book en demo |
| Secondary hero CTA | Se hvordan det virker → |
| Navbar CTA | Book en demo |
| Section CTAs | Få en gratis gennemgang |
| Bottom of pages | Book en gratis demo |
| Contact page | Kontakt os i dag |

---

## 10. Key Messages (copy guidance)

These three things must be immediately clear when a visitor lands on the page:

1. **Bad or unanswered reviews cost customers** — lead with the pain
2. **Bollo takes the entire task off your hands** — we handle everything
3. **A strong reputation = better visibility on Google Maps and in AI searches** — the result

### AI search messaging (important — use prominently)
> "I 2026 søger flere og flere kunder via AI-værktøjer. Anmeldelser og online troværdighed afgør om din virksomhed bliver anbefalet."

### Pain point messaging
> "De fleste virksomheder ved godt, at anmeldelser er vigtige — men det er tidskrævende, besværligt og irriterende at håndtere løbende."

---

## 11. Platforms Referenced on Site

Always show logos/icons for these three platforms when listing where Bollo works:
- **Google Maps**
- **Trustpilot**
- **TripAdvisor**

---

## 12. Gradient Recipes

```css
/* Hero / footer / dark sections */
--gradient-dark: linear-gradient(135deg, #0f2d26 0%, #1a3d35 60%, #1f5045 100%);

/* Subtle section dividers or card accents */
--gradient-mint: linear-gradient(135deg, #6DCBA0, #4aaa80);

/* Background dot pattern (use as ::after overlay) */
background-image: radial-gradient(circle, rgba(109,203,160,0.1) 1px, transparent 1px);
background-size: 32px 32px;
```

---

## 13. Recommended Templates for Reference & Inspiration

Use these as **structural references** when building with Claude Code — adapt the layout patterns to Bollo's brand, don't copy them directly.

### 🥇 Top Pick — Simple Light (Next.js + Tailwind)
- **URL:** https://github.com/cruip/tailwind-landing-page-template
- **Why:** Clean SaaS structure with hero, features grid, testimonials, pricing. Actively maintained. Free & open source. Very close to the layout structure Bollo needs.
- **Stack:** Next.js + Tailwind CSS v4
- **Best for:** Starting point for the homepage layout

### 🥈 Copper (Astro + Tailwind)
- **URL:** Available on ThemeForest / themefisher.com
- **Why:** 17+ pre-built pages, sleek modern design, fast performance. Covers all the subpages Bollo needs (About, Contact, Services, etc.)
- **Stack:** Astro + Tailwind CSS
- **Best for:** Multi-page site structure reference

### 🥉 Desgy (Next.js + Tailwind — Free, Agency focused)
- **URL:** https://github.com/topics/free-landing-page (search "Desgy")
- **Why:** Built specifically for digital agencies. Has contact form, login/signup, clean code. Free and open source.
- **Stack:** Next.js + TypeScript + Tailwind CSS + HeadlessUI
- **Best for:** Agency page layout patterns

### Solid (Tailwind CSS — UIdeck)
- **URL:** https://uideck.com
- **Why:** High quality SaaS + startup template, all essential sections included, clean and well documented code
- **Stack:** Tailwind CSS (framework agnostic)
- **Best for:** Component-level reference for cards, stats, CTAs

### Sandbox (Tailwind — ThemeForest, 1500+ sales)
- **URL:** ThemeForest search "Sandbox Tailwind"
- **Why:** 250+ UI components, 130+ pre-made blocks, light/dark mode. Huge library to pull individual sections from.
- **Stack:** HTML + Tailwind CSS / Next.js
- **Best for:** When you need a specific UI block (pricing table, testimonials, FAQ, etc.)

---

## 14. Tech Stack Recommendation for Building

Based on the site requirements and Claude Code compatibility:

```
Framework:    Next.js (App Router)
Styling:      Tailwind CSS v4
Language:     TypeScript
Fonts:        Google Fonts (Syne + DM Sans)
Animations:   CSS keyframes (no heavy libraries needed)
Deployment:   Vercel (easiest with Next.js)
```

> When starting in Claude Code, tell it:
> "Use this bollo-brand-design.md as the design system. Build with Next.js, Tailwind CSS v4, and TypeScript. Always use the CSS variables defined in the brand file."

---

*Last updated: May 2026*
*Version: 1.0 — Initial brand design system*
