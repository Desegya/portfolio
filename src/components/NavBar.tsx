"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
// import { Download } from "lucide-react"; // re-enable when resume.pdf is added
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          Dezzi
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {/* Resume link — re-enable once resume.pdf is added to /public
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            <Download size={14} />
            Resume
          </a>
          */}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-5 pb-5 text-sm md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          {/* Resume link — re-enable once resume.pdf is added to /public
          <a
            href="/resume.pdf"
            download
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-3 text-muted transition-colors hover:text-foreground"
          >
            <Download size={14} />
            Resume
          </a>
          */}
        </nav>
      )}
    </header>
  );
}
