# PADELIX landing page
Next.js 15 (App Router) + Framer Motion + plain CSS tokens.

    npm install && npm run dev

Add photos to `public/images/`: hero, about-1, about-2, tournament-lisbon, tournament-cascais,
community-1..5, testimonial-1, testimonial-2 (.jpg). Missing files fall back to a tonal placeholder.
All copy marked TODO in `lib/data.ts` (metrics, events, contacts, testimonial consent) must be verified.

## Brand update (SVA-inspired)
Palette, fonts (Manrope + Cormorant Garamond), grain and event variants (standard / featured / championship)
are defined in `app/globals.css`, `components/ui.tsx` and `lib/data.ts`. Placeholders are forest/cream/olive
frames with abstract court geometry; real photos placed in `public/images/` automatically cover them.
