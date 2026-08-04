"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { socials } from "@/lib/data";

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border py-8">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="ml-auto flex items-center gap-1 text-muted transition-colors hover:text-accent"
      >
        <ArrowUp size={16} />
        <ArrowUp size={16} />
      </button>

      <div className="mt-4 flex flex-col items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-end">
        <div className="flex gap-6">
          <span>© {new Date().getFullYear()} Dezzi</span>
          <span className="font-mono">{time || " "}</span>
        </div>

        <div className="flex flex-wrap gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="uppercase tracking-wide transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
