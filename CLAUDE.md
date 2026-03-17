# Design Rules — Orit GTM Website

## Stack
- Pure HTML + CSS + vanilla JS
- Deployed on Netlify (Netlify Forms for contact)
- GitHub repo: oritgtm

## DO
- Light, minimal, clean, modern — shadcn aesthetic
- Palette: whites (#FAFAF8), grays, light green (muted), beige + one amber/stone accent (#B45309)
- Good typography hierarchy, compact vertical rhythm (not excessive whitespace)
- Mobile responsive (breakpoint: 768px)
- Light motion: scroll via IntersectionObserver, smooth transitions (200–300ms), subtle hover states
- Lucide icons (CDN via unpkg)
- Min font size: 15px (body), 14px (captions/labels only)
- Inter typeface from Google Fonts

## DO NOT
- No bright saturated gradients or gradient text
- No emoji icons — use Lucide only
- No marketing language like "revolutionary", "game-changing", "transformative"
- No dark mode
- No heavy box-shadows or busy background patterns
- No border-radius (border-radius: 0 everywhere)
- No cramped spacing or tint fonts below 14px
- No excessive whitespace / oversized section padding

## Color Tokens
```
--bg:             #FAFAF8   (warm off-white background)
--surface:        #FFFFFF   (card/nav surfaces)
--text-primary:   #1C1917   (stone-900)
--text-secondary: #78716C   (stone-500)
--text-tertiary:  #A8A29E   (stone-400)
--border:         #E7E5E4   (stone-200)
--fill:           #F5F4F2   (light fill)
--fill-green:     #D4E8D4   (muted green, use sparingly)
--accent:         #B45309   (amber-700, CTAs + hover accents only)
--accent-hover:   #92400E   (amber-800)
```

## Pages
1. `index.html` — Home (Hero, Marquee, How I Work, What I Offer, Client Logos, Footer)
2. `case-studies.html` — Placeholder (Coming Soon)
3. `contact.html` — Contact form (Netlify Forms)

## Sections — Home
- Nav: sticky, wordmark left, links right, border on scroll
- Hero: 2-col (text left / profile photo right), H1 + subtext + CTAs
- Marquee: scrolling service tags below hero
- How I Work: 4 service cards in 2×2 grid (Lucide icons)
- What I Offer: personal message, 2 paragraphs
- Client Logos: grayscale by default, color on hover
- Footer: wordmark + tagline / nav links / LinkedIn + email
