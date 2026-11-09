// Content model per UI-structure §10. Replace placeholders with verified business data.
export type NavItem = { label: string; href: string };
export type Metric = { value: string; label: string };
export type EventVariant = "standard" | "featured" | "championship";
export type Tournament = {
  id: string;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  venueName: string;
  locationLabel: string;
  image: string;
  variant: EventVariant;
  status: "open" | "waitlist" | "closed" | "cancelled";
  entryUrl: string;
};
export type Testimonial = {
  quote: string;
  detail?: string;
  authorName: string;
  authorRole?: string;
  image?: string;
  consentConfirmed: boolean;
};

export const NAV: NavItem[] = [
  { label: "About us", href: "#about" },
  { label: "Courts", href: "#courts" },
  { label: "Vibes", href: "#vibes" },
  { label: "Location", href: "#location" },
];

// TODO: verify before production (reference-screenshot values)
export const METRICS: Metric[] = [
  { value: "1,500+", label: "Matches played" },
  { value: "91%", label: "Returning players" },
  { value: "950+", label: "Active members" },
  { value: "40+", label: "Tournaments each year" },
];

export const STATUS_LABEL: Record<Tournament["status"], string> = {
  open: "Open for requests",
  waitlist: "Waitlist",
  closed: "Registration closed",
  cancelled: "Cancelled",
};

export const STEPS = [
  { title: "Book a court", body: "Pick your time. Bring your people." },
  {
    title: "Play your way",
    body: "Casual games, competitive rallies or something in between.",
  },
  {
    title: "Meet & stay",
    body: "Catch the music, grab a drink, meet someone new.",
  },
  { title: "Come back", body: "Stay for another game. That's the SVA rhythm." },
];

// Attribution shows only when consentConfirmed === true. Controls render only when length > 1.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "It feels more like a private gathering than a tournament.",
    detail:
      "The level is consistent, and everything is quietly well organised.",
    authorName: "PADELIX player",
    image: "/images/testimonial-1.jpg",
    consentConfirmed: false,
  },
];

// TODO: official contact + social accounts
export const FOOTER_CONTACT = [
  { label: "+62 821-1661-547", href: "tel:+62 821-1661-547", external: false },
];
export const FOOTER_SOCIAL = [
  { label: "Instagram", href: "https://instagram.com/", external: true },
  { label: "Facebook", href: "https://facebook.com/", external: true },
];

export const BOOK_URL =
  "https://courtside.id/mobile-apps?mitra_id=a1254803-71f1-4e24-b752-53a70491c020";
