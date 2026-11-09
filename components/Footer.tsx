"use client";
import { useId, useState } from "react";
import { Reveal, Stagger, Item } from "@/lib/motion";
import { NAV, FOOTER_CONTACT, FOOTER_SOCIAL } from "@/lib/data";
import { GrainOverlay } from "./ui";

type Status = "idle" | "loading" | "success" | "error";

export default function Footer() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMsg("Enter a valid email address, for example name@example.com.");
      return;
    }
    setStatus("loading");
    setMsg("");
    try {
      // TODO: replace with the real endpoint (e.g. POST /api/invite)
      await new Promise((r) => setTimeout(r, 700));
      setStatus("success");
      setMsg("Thank you. We will be in touch with your invitation.");
      setEmail("");
    } catch {
      setStatus("error");
      setMsg("Something went wrong. Please try again.");
    }
  }

  const linkProps = (external: boolean) =>
    external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <footer id="contact" className="footer" aria-labelledby="footer-title">
      <GrainOverlay strong />
      <div className="container footer-top above-grain">
        <Reveal className="footer-cta">
          <h2 id="footer-title" className="heading-xl">
            Step onto <span className="serif">the court</span>
          </h2>
          <p className="body-lg footer-copy">
            Join a small circle of players who enjoy the game for its own sake.
          </p>
        </Reveal>
        <Stagger className="footer-links" gap={0.1}>
          <Item>
            <h3 className="meta">Navigate</h3>
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </Item>
          <Item>
            <h3 className="meta">Contact</h3>
            <ul>
              {FOOTER_CONTACT.map((c) => (
                <li key={c.label}>
                  <a href={c.href} {...linkProps(c.external)}>
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </Item>
          <Item>
            <h3 className="meta">Social</h3>
            <ul>
              {FOOTER_SOCIAL.map((c) => (
                <li key={c.label}>
                  <a href={c.href} {...linkProps(c.external)}>
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </Item>
        </Stagger>
      </div>

      {/* Diperbaiki: Properti y={40} dihapus dan ditambahkan padding/margin pengganti */}
      <Reveal className="footer-bottom">
        <div className="container above-grain pt-12 pb-6 border-t border-white/10">
          <div className="legal-row">
            <p className="meta">© 2026 PADELIX. All rights reserved.</p>
            <p className="meta">
              Good games. Good people. A better way to play.
            </p>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
