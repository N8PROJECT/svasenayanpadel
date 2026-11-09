"use client";
import { PrimaryButton, Photo, SectionLabel } from "./ui";
import { Reveal, Stagger, Item } from "@/lib/motion";

const QUERY = "SVA+Senayan+Padel+Club+STC+Senayan+Jakarta";
// Keyless Google Maps embed. For an exact pin, use Google Maps > Share > Embed a map and paste that src here.
const MAP_EMBED = `https://www.google.com/maps?q=${QUERY}&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${QUERY}`;

const DETAILS = [
  { label: "Where", value: "STC Senayan" },
  { label: "Floor", value: "6th Floor" },
  { label: "City", value: "Jakarta" },
];

export function LocationSection() {
  return (
    <section
      id="location"
      className="section section--ivory location"
      aria-labelledby="location-title"
    >
      <div className="container location-grid">
        <Reveal className="location-copy">
          <SectionLabel>Find us</SectionLabel>
          <h2 id="location-title" className="heading-xl loc-title">
            <span className="loc-ln">Meet us</span>
            <span className="loc-ln serif">in Senayan.</span>
          </h2>
          <p className="body-lg loc-text">
            Right in the middle of Jakarta, made for your next game, your next
            session and whatever comes after.
          </p>
          <dl className="loc-details">
            {DETAILS.map((d) => (
              <div key={d.label} className="loc-detail">
                <dt className="meta">{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
          <PrimaryButton href={DIRECTIONS_URL} external icon>
            Get directions
          </PrimaryButton>
        </Reveal>

        <Stagger className="location-media" gap={0.14}>
          <Item className="loc-map">
            <iframe
              title="Map showing SVA Senayan Padel Club at STC Senayan, Jakarta"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Item>
          <Item className="loc-card">
            <span className="meta loc-card-label">Visit</span>
            <span className="loc-card-name">SVA Senayan Padel Club</span>
            <address className="loc-card-address">
              STC Senayan
              <br />
              6th Floor
              <br />
              Jakarta
            </address>
          </Item>
          <Item className="loc-photo">
            <Photo
              src="/images/location.jpg"
              alt="The SVA Senayan Padel Club entrance"
              ratio="1 / 1"
              tone="olive"
              sizes="(min-width:1024px) 16vw, 30vw"
            />
          </Item>
        </Stagger>
      </div>
    </section>
  );
}
