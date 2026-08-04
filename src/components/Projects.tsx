import Image from "next/image";
import { ArrowUpRight, Github, Hammer, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <Reveal>
        <h2 className="text-sm uppercase tracking-[0.2em] text-accent">
          Selected work
        </h2>
        <p className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
          A few things I&apos;ve built and shipped.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.name + i}
            delay={i * 0.08}
            className={project.comingSoon ? "" : "sm:col-span-2"}
          >
            {project.comingSoon ? (
              <div className="flex h-full min-h-[220px] flex-col justify-between rounded-2xl border border-dashed border-border p-6 text-muted">
                <Hammer size={20} className="text-muted" />
                <div>
                  <p className="font-medium text-foreground">
                    {project.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ) : (
              <div className="group flex flex-col gap-6 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-accent/50 sm:flex-row sm:p-6">
                {project.image && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl sm:w-1/2">
                    <Image
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.launchingSoon && (
                      <span className="flex items-center gap-1 rounded-full border border-accent/40 px-3 py-1 font-mono text-xs text-accent">
                        <Sparkles size={11} /> Launching soon
                      </span>
                    )}
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-5 flex gap-5 text-sm">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 transition-colors hover:text-accent"
                      >
                        Live demo <ArrowUpRight size={14} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 transition-colors hover:text-accent"
                      >
                        <Github size={14} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
