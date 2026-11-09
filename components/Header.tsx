"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NAV, BOOK_URL } from "@/lib/data";
import { PrimaryButton } from "./ui";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = NAV.map((n) => document.querySelector(n.href)).filter(
      Boolean,
    ) as Element[];
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && setActive(`#${e.target.id}`),
        ),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      className="site-header"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0.1, 1] }}
    >
      <div className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <a
          href="#top"
          className="wordmark"
          aria-label="PADELIX — back to top"
          onClick={() => setOpen(false)}
        >
          SVA SENAYAN
        </a>
        <nav aria-label="Primary" className="nav-desktop">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="nav-link"
              aria-current={active === n.href ? "true" : undefined}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <PrimaryButton href={BOOK_URL} icon className="btn--sm nav-cta">
            Book a court
          </PrimaryButton>
          <button
            type="button"
            className="menu-trigger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              aria-hidden="true"
              className={`burger ${open ? "burger--open" : ""}`}
            />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
