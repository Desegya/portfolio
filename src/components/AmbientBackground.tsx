"use client";

import { motion } from "framer-motion";

const GRAIN =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";

/**
 * One continuous atmosphere for the whole page, not a per-section decoration:
 * fixed to the viewport so it stays put while content scrolls past it. A warm
 * glow drifts slowly (never spins/pulses) plus a static grain layer for
 * texture, so the page has a heartbeat without turning into SaaS-template decor.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        className="absolute h-[40rem] w-[40rem] rounded-full opacity-[0.14] blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
        initial={{ top: "-15%", left: "-10%" }}
        animate={{
          top: ["-15%", "55%", "-15%"],
          left: ["-10%", "60%", "-10%"],
        }}
        transition={{
          duration: 48,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />
    </div>
  );
}
