"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const EASE = [0.2, 0, 0.1, 1] as const;
// once:false => every animation replays each time the element re-enters the viewport (up or down).
export const VIEWPORT = { once: false, amount: 0.2, margin: "0px 0px -8% 0px" } as const;

function useItemVariants(y = 20): Variants {
  const reduce = useReducedMotion();
  if (reduce) return { hidden: { opacity: 1 }, visible: { opacity: 1 } };
  return {
    hidden: { opacity: 0, y, scale: 0.98 },
    visible: (d: number = 0) => ({ opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE, delay: d } }),
  };
}

export function Reveal({ children, delay = 0, y = 20, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const variants = useItemVariants(y);
  return (
    <motion.div className={className} variants={variants} custom={delay}
      initial="hidden" whileInView="visible" viewport={VIEWPORT}>
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, gap = 0.1, as = "div" }: { children: ReactNode; className?: string; gap?: number; as?: "div" | "ul" | "ol" }) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp className={className} initial="hidden" whileInView="visible" viewport={VIEWPORT}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: gap } } }}>
      {children}
    </Comp>
  );
}

export function Item({ children, className, as = "div", y = 20 }: { children: ReactNode; className?: string; as?: "div" | "li" | "article"; y?: number }) {
  const variants = useItemVariants(y);
  const Comp = motion[as] as typeof motion.div;
  return <Comp className={className} variants={variants}>{children}</Comp>;
}
