"use client";
import { Photo, SectionHeading, GrainOverlay, PrimaryButton } from "./ui";
import { Reveal, Stagger, Item } from "@/lib/motion";
import { METRICS, STEPS, BOOK_URL } from "@/lib/data";

/* ---------- About ---------- */
export function About() {
  return (
    <section
      id="about"
      className="section section--cream"
      aria-labelledby="about-title"
    >
      <div className="container about-grid">
        <Reveal className="about-copy">
          <h2 id="about-title" className="heading-xl">
            We curate <span className="serif">the game.</span>
          </h2>
          <p className="body-lg">
            A considered selection of matches, people and places.
          </p>
          <p className="meta">Balance · Pace · Atmosphere</p>
        </Reveal>
        <Stagger className="about-photos" gap={0.14}>
          <Item className="about-main">
            <Photo
              src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=80"
              alt="A player serving on a sunlit padel court"
              ratio="4 / 5"
              tone="forest"
              sizes="(min-width:1024px) 32vw, 70vw"
            />
          </Item>
          <Item className="about-second">
            <Photo
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
              alt="Friends talking courtside between matches"
              ratio="1 / 1"
              tone="olive"
              sizes="(min-width:1024px) 22vw, 50vw"
            />
            <p className="meta">
              Natural, comfortable — never just a competition.
            </p>
          </Item>
        </Stagger>
      </div>
    </section>
  );
}

/* ---------- Metrics ---------- */
export function MetricStrip() {
  return (
    <section
      className="section section--ivory section--tight"
      aria-labelledby="metrics-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeading id="metrics-title" title="A few quiet indicators" />
        </Reveal>
        <Stagger as="ul" className="metrics" gap={0.1}>
          {METRICS.map((m) => (
            <Item as="li" key={m.label} className="metric">
              <span className="metric-value">{m.value}</span>
              <span className="meta">{m.label}</span>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
export function StepList() {
  return (
    <section
      id="how-it-works"
      className="section section--ivory"
      aria-labelledby="process-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeading id="process-title" title="Simple, as it should be" />
        </Reveal>
        <Stagger as="ol" className="steps" gap={0.1}>
          {STEPS.map((s, i) => (
            <Item as="li" key={s.title} className="step">
              <span className="step-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="step-title">{s.title}</h3>
              <p className="body-md muted">{s.body}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------- Courts (mosaic) ---------- */
const MOSAIC = [
  {
    cls: "c-portrait",
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
    alt: "A player on the padel court",
    tone: "cream",
    tag: "Play your way",
  },
  {
    cls: "c-landscape",
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    alt: "Two players rallying at the net",
    tone: "olive",
    tag: "Book a court",
  },
  {
    cls: "c-square",
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1000&q=80",
    alt: "A padel court seen from behind the glass",
    tone: "forest",
    tag: "",
  },
  {
    cls: "c-detail",
    src: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1000&q=80",
    alt: "A racket and ball against the glass wall",
    tone: "cream",
    tag: "",
  },
  {
    cls: "c-wide",
    src: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1400&q=80",
    alt: "Padel courts at golden hour",
    tone: "forest",
    tag: "Stay for the vibe",
  },
] as const;

export function CommunityMosaic() {
  return (
    <section
      id="courts"
      className="section section--forest"
      aria-labelledby="courts-title"
    >
      <GrainOverlay />
      <div className="container above-grain">
        <Reveal>
          <SectionHeading
            id="courts-title"
            label="The courts"
            title={
              <>
                Your court. <span className="serif">your game.</span>
              </>
            }
            intro="Three courts. Plenty of reasons to stay for another match. Whether you're here for a quick game, a competitive session or simply looking to move after work, there's always room on court."
          />
        </Reveal>
        <Stagger className="mosaic" gap={0.1}>
          {MOSAIC.map((m) => (
            <Item key={m.cls} className={`mosaic-item ${m.cls}`}>
              <Photo
                src={m.src}
                alt={m.alt}
                tone={m.tone}
                className="photo--fill"
                sizes="(min-width:1024px) 40vw, 100vw"
              />
              {m.tag && <span className="mosaic-tag">{m.tag}</span>}
            </Item>
          ))}
        </Stagger>
        <Reveal className="courts-cta">
          <PrimaryButton href={BOOK_URL} icon>
            Book a court
          </PrimaryButton>
        </Reveal>
      </div>
    </section>
  );
}
