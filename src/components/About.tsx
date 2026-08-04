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
            I&apos;m Desmond Egya, a full-stack developer passionate about
            building solutions that are as functional as they are
            impressive. When I&apos;m not coding like a machine or
            brainstorming new app ideas, you&apos;ll find me leveling up in
            video games, experimenting with photography, or watching
            football — because, let&apos;s face it, football is life. My
            development philosophy? Write clean code, solve real problems,
            and add a touch of creativity. I&apos;m the developer you want
            on your team if you&apos;re looking to hear users say,
            &quot;This is exactly what I needed!&quot;
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
