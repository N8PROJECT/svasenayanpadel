"use client";
import {
  PrimaryButton,
  SecondaryButton,
  Photo,
  SectionLabel,
  GrainOverlay,
} from "./ui";
import { Reveal, Stagger, Item } from "@/lib/motion";

// Where the club posts its session schedule. Swap for an internal page later if one exists.
const SCHEDULE_URL = "https://www.instagram.com/svasenayanpadel/";

const POINTS = [
  {
    title: "Live DJ sets",
    body: "Selected sessions where the music is part of the game, not a separate event.",
  },
  {
    title: "Morning or after dark",
    body: "Some sessions run in the morning, others once the sun goes down.",
  },
  {
    title: "Still on court",
    body: "The court stays in play while the music does its thing.",
  },
];

export function DJSection() {
  return (
    <section
      id="vibes"
      className="section section--forest dj"
      aria-labelledby="dj-title"
    >
      <GrainOverlay strong />
      <div className="container above-grain dj-grid">
        <div className="dj-copy">
          <Reveal>
            <SectionLabel>Padel + DJ</SectionLabel>
            <h2 id="dj-title" className="heading-xl dj-title">
              <span className="dj-ln">The game</span>
              <span className="dj-ln serif">has a soundtrack.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="dj-prose body-lg">
            <p>
              Padel comes first. But at SVA, the music is part of the
              experience.
            </p>
            <p>
              Selected sessions bring a DJ to the club — a morning game or a
              night after dark — while the court stays in play.
            </p>
          </Reveal>
          <Stagger as="ol" className="dj-points" gap={0.1}>
            {POINTS.map((p, i) => (
              <Item as="li" key={p.title} className="dj-point">
                <span className="dj-point-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="dj-point-title">{p.title}</h3>
                <p className="body-md">{p.body}</p>
              </Item>
            ))}
          </Stagger>
          <Reveal className="dj-cta">
            <p className="meta dj-descriptor">
              Padel · DJ · Social · After dark
            </p>
          </Reveal>
        </div>
        <Stagger className="dj-media" gap={0.14}>
          <Item className="dj-main">
            <Photo
              src="/images/dj-1.jpg"
              alt="A DJ playing a live set at the club"
              ratio="4 / 5"
              tone="forest"
              sizes="(min-width:1024px) 36vw, 80vw"
            />
            <span className="dj-flag">Padel + DJ</span>
          </Item>
          <Item className="dj-second">
            <Photo
              src="/images/dj-2.jpg"
              alt="Players on court while the music plays"
              ratio="1 / 1"
              tone="olive"
              sizes="(min-width:1024px) 20vw, 45vw"
            />
          </Item>
        </Stagger>
      </div>
    </section>
  );
}
