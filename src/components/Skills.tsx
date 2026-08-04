import { Reveal } from "./Reveal";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <Reveal>
        <h2 className="text-sm uppercase tracking-[0.2em] text-accent">
          Skills
        </h2>
        <p className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
          What I reach for day to day.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.category}
            delay={i * 0.08}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              {group.category}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
                >
                  <skill.icon size={15} />
                  {skill.name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
