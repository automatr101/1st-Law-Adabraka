# 1st Law Website — Project Tracker

## Client
| Field | Value |
|---|---|
| Firm | 1st Law |
| Location | No. 28, Castle Road, Adabraka, Accra, Ghana |
| Founded | 2005 |
| Phone | 0244 124 472 |
| Email | firstlawgh@yahoo.com |
| Website | www.1stlaw.org |

---

## Stack
- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion (`whileInView` for scroll-triggered)
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond (display) + DM Sans (body)
- **Deployment**: Vercel (auto-deploy on push)
- **Repo**: https://github.com/automatr101/1st-Law-Adabraka

---

## Live URLs
| Environment | URL |
|---|---|
| Production | https://1st-law-website.vercel.app |
| Vercel Dashboard | https://vercel.com/automatrs-projects/1st-law-website |
| GitHub | https://github.com/automatr101/1st-Law-Adabraka |

---

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Fonts, metadata
│   ├── page.tsx            # Page assembly
│   └── globals.css         # Design tokens, scrollbar, noise
├── components/
│   ├── Navbar.tsx          # Sticky, glassmorphism, gold underline hover/active
│   ├── Footer.tsx          # 3-col: logo, links, contact
│   ├── WhatsAppWidget.tsx  # Floating WA button → 0244124472
│   └── sections/
│       ├── Hero.tsx        # BG photo + overlays + bottom info bar
│       ├── StatsBar.tsx    # 85% · 200+ · 5 · 24h count-up
│       ├── About.tsx       # lawyer-2.jpeg + quote overlay
│       ├── Principal.tsx   # 3-photo collage + bio + credentials
│       ├── PracticeAreas.tsx # 6 cards grid
│       ├── WhyUs.tsx       # 3 pillars
│       ├── Team.tsx        # Group banner + 4 attorney cards
│       ├── Testimonials.tsx # Auto-sliding carousel
│       └── Contact.tsx     # Info + Google Maps + form
public/
├── hero-bg.jpg             # Ghana Supreme Court (dark filtered)
├── principal/
│   ├── lawyer-1.jpeg       # Full length on court steps (Principal section)
│   ├── lawyer-2.jpeg       # Seated barrister with wig (About section)
│   ├── lawyer-4.jpeg       # Close portrait (Team card - Managing Partner)
│   ├── lawyer-7.jpeg       # Leaning on steps (Principal section)
│   └── lawyer-8.jpeg       # TV appearance with scales (Principal section)
└── team/
    ├── attorney-1..4.png   # Avatar stack in Hero social proof
    └── team-group.jpeg     # Group photo banner in Team section
```

---

## Design System
```css
--color-brand-black:    #0A0A0A
--color-brand-dark:     #111111
--color-brand-charcoal: #1A1A1A
--color-brand-gold:     #C9A84C
--color-brand-gold-light: #E8C97A
--color-brand-cream:    #F5F0E8
--color-brand-white:    #FAFAFA
--color-brand-muted:    #888888
```

---

## Sections Completed
- [x] **Navbar** — sticky, glassmorphism on scroll, gold underline on hover + active section
- [x] **Hero** — BG image (court building), dark overlay, gold glows, badge, headline, CTAs, avatar stack, bottom info bar (Est. 2005 · Adabraka · 6 Practice Areas)
- [x] **StatsBar** — 85% Client Success · 200+ Cases · 5 Awards · 24h Response (count-up animation)
- [x] **About** — lawyer-2 photo with quote overlay, 2005/Accra stats
- [x] **Principal** — 3-photo collage (lawyer-1, 7, 8), bio, 3 credentials, Book Consultation CTA
- [x] **Practice Areas** — 6 cards: Corporate, Litigation, Real Estate, Employment, Family, Criminal
- [x] **Why Us** — 3 pillars: Experienced Team, Client-First, Proven Results
- [x] **Team** — group banner photo + 4 attorney cards (Managing Partner has real photo)
- [x] **Testimonials** — 3 auto-sliding cards, dot indicators
- [x] **Contact** — address, phone, email, hours, Google Maps, form (all real details)
- [x] **Footer** — logo, quick links, contact details, social placeholders
- [x] **WhatsApp Widget** — floating green button, popup with pre-filled message

---

## Key Decisions Made
- **Single page** — all sections on one page (right for this firm size)
- **Fonts**: Cormorant Garamond + DM Sans (client specified)
- **Theme**: Dark luxury editorial — charcoal/black + gold (#C9A84C)
- **Animations**: `whileInView` with `once: true` — only triggers on scroll, not page load
- **Hero height**: `sm:min-h-screen` — full screen on desktop, content-height on mobile
- **Images**: All stored in `/public/`, plain `<img>` tags (avoids Next.js Image optimization quirks)

---

## Contact Details (Real)
- **Phone**: 0244 124 472 → `tel:+233244124472`
- **Email**: firstlawgh@yahoo.com
- **Address**: No. 28, Castle Road, Adabraka, Accra, Ghana
- **Hours**: Mon–Fri 8AM–6PM · Sat 9AM–1PM · Sun Closed

---

## Stats (Real — updated by client)
| Stat | Value |
|---|---|
| Client Success Rate | 85% |
| Cases Handled | 200+ |
| Awards Won | 5 |
| Response Time | 24h |

---

## Pending / Future Work
- [ ] Connect contact form to real backend (Formspree / Resend / EmailJS)
- [ ] Add real attorney names, titles and photos when provided by client
- [ ] Add real social media links (LinkedIn, X, Facebook)
- [ ] Custom domain: www.1stlaw.org → point to Vercel
- [ ] Blog/News page (when firm starts publishing legal articles)
- [ ] Individual attorney profile pages (when team grows)
- [ ] SEO: add Open Graph images, sitemap.xml, robots.txt
- [ ] Analytics: add Vercel Analytics or Google Analytics

---

## How to Continue Development
```bash
# Clone
git clone https://github.com/automatr101/1st-Law-Adabraka.git
cd 1st-Law-Adabraka

# Install
npm install

# Dev server
npm run dev  # → http://localhost:3000

# Deploy (auto on push, or manually)
git add .
git commit -m "your message"
git push  # Vercel auto-deploys
```

---

## Last Updated
June 1, 2026 — Initial build complete, deployed to Vercel.
