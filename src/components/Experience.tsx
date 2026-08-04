import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <Reveal>
        <h2 className="text-sm uppercase tracking-[0.2em] text-accent">
          Experience
        </h2>
        <p className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Where I&apos;ve put in the work.
        </p>
      </Reveal>

      <div className="mt-12 divide-y divide-border rounded-2xl border border-border">
        {experience.map((entry, i) => (
          <Reveal key={entry.company} delay={i * 0.06} className="p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {entry.company}
                  </h3>
                  {entry.current && (
                    <span className="flex items-center gap-1.5 text-xs text-accent">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted">{entry.role}</p>
              </div>
              {entry.href && (
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm transition-colors hover:text-accent"
                >
                  Learn more <ArrowUpRight size={14} />
                </a>
              )}
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              {entry.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
