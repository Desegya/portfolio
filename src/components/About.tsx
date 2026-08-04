import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import myPhoto from "@/assets/me.jpeg";
import { email } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="grid gap-10 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-16">
        <Reveal>
          <Image
            src={myPhoto}
            alt="Portrait of Desmond Egya"
            width={200}
            height={200}
            className="h-40 w-40 rounded-full object-cover ring-1 ring-border sm:h-52 sm:w-52"
          />
        </Reveal>

        <Reveal delay={0.1}>
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
