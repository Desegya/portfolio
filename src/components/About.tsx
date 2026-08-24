"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { email } from "@/lib/data";

function PhotoCard() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-60, 60], [10, -10]), {
    stiffness: 250,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-60, 60], [-10, 10]), {
    stiffness: 250,
    damping: 20,
  });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 800 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, rotateZ: -4 }}
        className="w-fit rounded-2xl border-2 border-accent/30 bg-surface p-3 shadow-xl"
      >
        <div className="relative h-60 w-52 overflow-hidden rounded-xl sm:h-64 sm:w-56">
          <Image
            src="/images/dezzi.jpeg"
            alt="Portrait of Desmond Egya"
            fill
            sizes="(max-width: 640px) 208px, 224px"
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="grid gap-12 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-16">
        <Reveal>
          <PhotoCard />
        </Reveal>

        <Reveal delay={0.1} className="sm:pt-6">
          <h2 className="text-sm uppercase tracking-[0.2em] text-accent">
            About me
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed">
            I&apos;m Desmond Egya — Dezzi to most people. Over the years
            I&apos;ve gone from writing my first lines of React to
            shipping production software full-time: mobile banking apps,
            admin systems, and the APIs holding it all together. I care
            about the parts that don&apos;t show — code that&apos;s easy
            to reason about months later, systems that hold up under real
            users, decisions made for the right reasons.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            Outside of work, I&apos;m still a gamer, I still catch every
            football match I can, I still lose an evening to a good movie,
            and there&apos;s always a book somewhere in progress.
            Different hobbies, same instinct — get curious, go deep,
            finish the thing.
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
