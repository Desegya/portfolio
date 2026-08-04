"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[85vh] flex-col justify-between pt-32 pb-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent">
          Based in Nigeria
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
          Full-stack developer,
          <br />
          <span className="text-muted">building things people</span>
          <br />
          actually enjoy using.
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
      >
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Most people call me Dezzi. I design and build web and mobile
          products end-to-end — from the database up to the pixels — and
          I&apos;m always up for interesting freelance work.
        </p>

        <a
          href="#work"
          className="group flex items-center gap-2 text-sm uppercase tracking-wide text-muted transition-colors hover:text-foreground"
        >
          See my work
          <ArrowDown
            size={16}
            className="transition-transform group-hover:translate-y-1"
          />
        </a>
      </motion.div>
    </section>
  );
}
