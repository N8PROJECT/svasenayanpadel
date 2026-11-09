"use client";
import Image from "next/image";
import { useState, type ReactNode } from "react";

export function Arrow() {
  return (
    <svg className="arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 9.5l7-7M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type BtnProps = { href: string; children: ReactNode; icon?: boolean; external?: boolean; className?: string };
type BtnBase = BtnProps & { variant: "primary" | "secondary" };
function Btn({ href, children, variant, icon, external, className = "" }: BtnBase) {
  return (
    <a className={`btn btn--${variant} ${className}`} href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}{icon && <Arrow />}
    </a>
  );
}
export const PrimaryButton = (p: BtnProps) => <Btn {...p} variant="primary" />;
export const SecondaryButton = (p: BtnProps) => <Btn {...p} variant="secondary" />;

/** Small uppercase metadata label with a leading rule, e.g. "01 — About us". */
export function SectionLabel({ children, index }: { children: ReactNode; index?: string }) {
  return <span className="section-label">{index && <b>{index}</b>}{children}</span>;
}

export function SectionHeading({ id, label, index, title, intro }: { id?: string; label?: string; index?: string; title: ReactNode; intro?: string }) {
  return (
    <div className="section-heading">
      {label && <SectionLabel index={index}>{label}</SectionLabel>}
      <h2 id={id} className="heading-xl">{title}</h2>
      {intro && <p className="body-lg intro">{intro}</p>}
    </div>
  );
}

/** Subtle tactile grain. Parent must be position:relative. Use sparingly (tournaments, community, footer, hero). */
export function GrainOverlay({ strong = false }: { strong?: boolean }) {
  return <span aria-hidden="true" className={`grain-layer ${strong ? "grain-layer--strong" : ""}`} />;
}

/** Abstract top-down padel court geometry, used inside image placeholders. */
function CourtLines() {
  return (
    <svg className="court" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"
      fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="30" y="30" width="340" height="240" />
      <line x1="200" y1="30" x2="200" y2="270" strokeWidth="2" />
      <line x1="115" y1="30" x2="115" y2="270" />
      <line x1="285" y1="30" x2="285" y2="270" />
      <line x1="115" y1="150" x2="285" y2="150" />
      <circle cx="318" cy="92" r="9" />
    </svg>
  );
}

/** Image frame. Shows an intentional tonal placeholder (court geometry) until/unless the real image exists. */
export function Photo({ src, alt, ratio, sizes = "(min-width:1024px) 40vw, 100vw", priority, className = "", tone = "forest" }:
  { src: string; alt: string; ratio?: string; sizes?: string; priority?: boolean; className?: string; tone?: "forest" | "cream" | "olive" }) {
  const [ok, setOk] = useState(true);
  return (
    <div className={`photo photo--${tone} ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      <CourtLines />
      {ok && <Image src={src} alt={alt} fill sizes={sizes} priority={priority} onError={() => setOk(false)} />}
    </div>
  );
}
