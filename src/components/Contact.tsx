import { ArrowUpRight } from "lucide-react";
// import { Download } from "lucide-react"; // re-enable when resume.pdf is added
import { Reveal } from "./Reveal";
import { email } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <Reveal className="rounded-3xl border border-border bg-surface px-8 py-16 text-center sm:px-16">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Let&apos;s build something.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Got a project, a role, or just want to talk shop? My inbox is
          open — I read everything myself.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            {email} <ArrowUpRight size={14} />
          </a>
          {/* Resume link — re-enable once resume.pdf is added to /public
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            <Download size={14} /> Download resume
          </a>
          */}
        </div>
      </Reveal>
    </section>
  );
}
