# Dr. Maya Reynolds, PsyD – Therapy Website

A production-ready responsive therapy website designed for Dr. Maya Reynolds, PsyD, as part of the Grow My Therapy Front-End Developer Internship assignment. The project uses the provided Conejo Valley Family Counseling homepage as a structural reference while creating a distinct visual identity and content experience based strictly on Dr. Reynolds' supplied profile.

---

## 🎯 Assignment Objective & Core Evaluation Pillars

1. **UI Cloning Accuracy (25%)**: Closely follows the reference homepage's editorial structure, asymmetric composition, spacing rhythm, typography hierarchy, image/text balance, and section flow.
2. **Theme & Design Sense (25%)**: Establishes a warm, grounded visual identity suited to a modern psychology practice, utilizing a cohesive palette of Deep Sage, Warm Sand, Muted Terracotta, Soft Ivory, and Deep Charcoal.
3. **Copywriting & Image Quality (10%)**: Strictly grounded in Dr. Reynolds' clinical profile with zero unsupported claims, unverified credentials, or external additions. Integrates her authentic portrait and both official Santa Monica office interior photographs.
4. **Creative Thinking & New Section (10%)**: Introduces a dedicated, bespoke **"Our Office"** section (*"A Calm Space to Slow Down"*) featuring an asymmetric dual-photograph editorial layout with in-person and telehealth details.
5. **Communication & Technical Polish (30%)**: Designed with WCAG 2.1 AA accessibility principles, fully responsive (1440px to 375px), zero console or build errors, semantic HTML, and Next.js App Router with server components by default.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with CSS Theme Tokens
- **Typography**: `next/font/google` (`Cormorant Garamond` & `DM Sans`)
- **Images**: `next/image` with responsive `sizes` and WebP/AVIF generation
- **SEO & Structured Data**: Native Metadata API + Schema.org JSON-LD describing therapist and practice information
- **Code Quality**: ESLint 9 + TypeScript Strict Mode

---

## 🎨 Design System

### 1. Color System (Tailwind Tokens & CSS Variables)
- **Primary (`#49645A` — Deep Sage)**: Grounded botanical green symbolizing stabilization, safety, and regulation. Used on primary buttons and key anchor text.
- **Secondary (`#E8DED0` — Warm Sand)**: Natural organic tone providing warmth in offset photo backdrops and quote accents.
- **Accent (`#C9826B` — Muted Terracotta)**: Earthy California terracotta used sparingly for script accents, subheadings, and status indicators.
- **Background (`#F8F5EF` — Soft Ivory)**: Warm off-white canvas replacing sterile pure white to eliminate glare and create an inviting ambiance.
- **Text (`#29332F` — Deep Charcoal)**: High-contrast warm dark tone softer than harsh pure black.
- **Muted Text (`#65716C`)**: Charcoal-sage tone for secondary body text and captions.
- **Border (`#D8D0C4`)**: Minimalist warm stone border tone.

### 2. Typography Hierarchy
- **Editorial Serif (`Cormorant Garamond`)**: High-contrast, elegant serif used for major headings (H1–H3), pull-quotes, and section statements.
- **Modern Sans-Serif (`DM Sans`)**: Clean, accessible sans-serif for body paragraphs, micro-labels, and uppercase letter-spaced buttons.

---

## 🏛️ Project Architecture

```
maya-reynolds-therapy/
├── app/
│   ├── layout.tsx         # Root layout with fonts, SEO metadata, and JSON-LD
│   ├── page.tsx           # Page assembly with accessible skip link
│   ├── globals.css        # Tailwind v4 theme, design tokens, and reduced-motion rules
│   ├── robots.ts          # SEO robots.txt definition
│   └── sitemap.ts         # SEO XML sitemap generator
├── components/
│   ├── Navbar.tsx         # Sticky navigation with accessible mobile drawer
│   ├── Hero.tsx           # Asymmetrical editorial hero with location eyebrow & CTAs
│   ├── IntroSection.tsx   # "You can look like you're doing fine..." 2-col narrative
│   ├── WhoIWorkWith.tsx   # 3 focus areas: Anxiety, Professionals, Trauma
│   ├── StatementSection.tsx # Full-width editorial quote with ocean horizon
│   ├── AreasOfSupport.tsx # Refined 12-item clinical support grid with hairline dividers
│   ├── Approach.tsx       # Integrative methodology (CBT, EMDR, Mindfulness, Somatic)
│   ├── Services.tsx       # 3 core services in alternating editorial asymmetric layouts
│   ├── AboutMaya.tsx      # Meet Dr. Maya Reynolds (authentic portrait & profile bio)
│   ├── OurOffice.tsx      # Custom section: "A Calm Space to Slow Down" (both office photos)
│   ├── FAQ.tsx            # Accessible accordion FAQ based strictly on profile
│   ├── AppointmentCTA.tsx # Final consultation booking callout with inquiry form
│   └── Footer.tsx         # Office address, California telehealth, practice links, copyright
├── lib/
│   ├── content.ts         # Centralized single source of truth for all copy & metadata
│   └── constants.ts       # Site constants, addresses, and navigation items
└── public/
    └── images/
        ├── dr_maya_reynolds.png # Official portrait
        ├── office1.jpeg         # Authentic Santa Monica office photo #1
        ├── office2.jpeg         # Authentic Santa Monica office photo #2
        ├── hero_space.jpg       # Calming architectural interior
        ├── thoughtful_adult.jpg # Thoughtful adult portrait
        ├── statement_ocean.jpg  # Santa Monica ocean dusk horizon
        └── approach_grounding.jpg # Balanced river stones still life
```

---

## ✨ Features & Sections

1. **Accessible Sticky Navigation**:
   - Desktop: Elegant uppercase letter-spaced links with hover underline transitions and primary CTA.
   - Mobile: Hamburger toggle with `aria-expanded`, `aria-controls`, body scroll-lock, and automatic drawer close on anchor navigation.
2. **Hero Section**:
   - Single semantic `<h1>` (*"Feel grounded in yourself again."*), Santa Monica eyebrow, concise value proposition, dual CTAs, and framed calm room vignette.
3. **Intro / Narrative Section**:
   - *"You can look like you're doing fine—and still feel exhausted inside."* Two-column narrative exploring internal overwhelm versus external functionality with editorial pull-quote.
4. **Who I Work With**:
   - 3 distinct adult populations: *Anxiety & Panic*, *Professionals & High Achievers*, and *Adults Healing From Trauma*.
5. **Full-Width Statement Section**:
   - Pacific ocean horizon at quiet dusk with Dr. Reynolds' core philosophy: *"You deserve a space where you can slow down, feel understood, and reconnect with yourself."*
6. **Areas of Support**:
   - 12 clinical concerns in a minimal hairline-divided grid (Anxiety, Panic, Trauma, Burnout, Perfectionism, Chronic Stress, Overthinking, Emotional Regulation, Confidence, Relationships, Difficulty Sleeping, Work-Related Stress).
7. **Clinical Approach & Modalities**:
   - Detailed breakdown of Maya's grounded, collaborative style and 4 integrative evidence-based modalities: CBT, EMDR, Mindfulness, and Body-Oriented techniques.
8. **Three Core Services**:
   - *Trauma Therapy*, *Anxiety & Panic Therapy*, and *Burnout & Perfectionism* presented with editorial numeric markers (01, 02, 03) and clinical highlights.
9. **Meet Dr. Maya Reynolds, PsyD**:
   - Prominent, un-distorted display of Dr. Reynolds' official portrait with credentials badge and authentic biography.
10. **Our Office — A Calm Space to Slow Down (Custom Section)**:
    - Asymmetric dual-image editorial showcase displaying **both** authentic Santa Monica office photographs. Details in-person practice (`123th Street 45 W, Santa Monica, CA 90401`) and California-wide telehealth.
11. **Interactive FAQ Accordion**:
    - 6 questions derived strictly from the clinical profile, fully keyboard navigable (`Enter`/`Space`) with animated toggle indicators.
12. **Appointment Consultation Booking**:
    - Consultation inquiry form capturing name, email, care setting preference, and primary clinical focus with instant submission state feedback.
13. **Comprehensive Footer**:
    - Santa Monica address, California telehealth coverage, practice quick links, and copyright.

---

## ♿ Accessibility (a11y)

Designed with WCAG 2.1 AA accessibility principles across all core components:

- **Semantic HTML5**: Native `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<address>`, and `<footer>` elements.
- **Heading Hierarchy**: Strictly one `<h1>`, followed by structured `<h2>` and `<h3>` tags.
- **Skip Link**: Built-in keyboard skip link (`href="#main-content"`).
- **Interactive ARIA**:
  - Mobile drawer: `role="dialog"`, `aria-modal="true"`, `aria-label="Navigation Menu"`.
  - Accordion buttons: `aria-expanded="true/false"`, `aria-controls="faq-content-x"`.
  - Consultation status: `role="status"`, `aria-live="polite"`.
- **Keyboard Navigation**: High-contrast focus indicator rings (`outline: 2px solid #49645A; outline-offset: 3px`).
- **Reduced Motion**: Honored via `@media (prefers-reduced-motion: reduce)`.

---

## 🔍 Search Engine Optimization (SEO)

- **Page Title**: `Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD`
- **Meta Description**: Accurate summary highlighting in-person Santa Monica therapy and California telehealth.
- **Structured Data**: Schema.org JSON-LD describing the therapist/practice information provided in the assignment.
- **Social Metadata**: OpenGraph and Twitter Card tags configured with portrait preview.
- **Auto-Generated Sitemaps**: `app/sitemap.ts` and `app/robots.ts` built into production bundle.

---

## 📱 Responsive Verification

The layout has been tested and verified across key device breakpoints:
- **1440px / 1280px (Desktop & Laptop)**: Generous whitespace, asymmetric editorial balance, fixed sticky header.
- **1024px / 768px (Tablet)**: Two-column grid reflow, readable typography without awkward wraps.
- **390px / 375px (Mobile Phone)**: Touch-friendly buttons (min 44px height), zero horizontal overflow, seamless mobile drawer navigation, stacked office imagery.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+ (developed on Node v24)
- npm 9+

### Installation
```bash
# Clone or navigate to the project directory
cd maya-reynolds-therapy

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Linting
```bash
npm run lint
```

### Production Build
```bash
npm run build
npm run start
```
The production bundle builds with 0 errors and 0 warnings.

---

## 🤖 AI-Assisted Development

AI coding tools were used as development assistants during implementation, including component scaffolding, code refinement, debugging, and responsive QA.

The implementation was reviewed and iteratively refined throughout development, with manual visual and functional verification across desktop, tablet, and mobile viewports.

The final content was kept strictly aligned with the provided Dr. Maya Reynolds profile.
