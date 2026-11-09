"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  SectionLabel,
  PrimaryButton,
  SecondaryButton,
  GrainOverlay,
  Arrow,
} from "./ui";
import { Stagger, Item } from "@/lib/motion";
import { BOOK_URL } from "@/lib/data";

const fmt = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.06]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);

  return (
    <section
      id="top"
      ref={ref}
      className="hero relative overflow-hidden w-full h-screen"
      aria-labelledby="hero-title"
    >
      {/* Bungkus media dengan posisi absolute agar menutupi seluruh section */}
      <motion.div
        className="hero-media absolute inset-0 w-full h-full overflow-hidden"
        style={{ scale }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover object-top" // <-- Ubah di sini
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Browser Anda tidak mendukung tag video.
        </video>
      </motion.div>

      <div className="hero-overlay absolute inset-0 z-10" aria-hidden="true" />
      <GrainOverlay />

      <motion.div className="hero-inner relative z-20" style={{ y: copyY }}>
        <Stagger className="hero-copy" gap={0.11}>
          <Item>
            <h1 id="hero-title" className="display-xl">
              <span className="brk">Play the game </span>
              <span className="brk serif hero-serif">feel the vibe</span>
            </h1>
          </Item>
          <Item className="hero-desc">
            <p className="body-lg">
              A place to play, meet, move and stay awhile.
            </p>
          </Item>
          <Item className="hero-actions">
            <PrimaryButton href={BOOK_URL} icon>
              BOOK A COURT
            </PrimaryButton>
          </Item>
        </Stagger>
      </motion.div>
    </section>
  );
}
