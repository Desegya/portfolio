"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const STARS = [
  { top: "22%", left: "20%", size: 2, delay: 0.15 },
  { top: "58%", left: "30%", size: 1.5, delay: 0.25 },
  { top: "32%", left: "42%", size: 1.5, delay: 0.35 },
];

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // One-shot mount flag to avoid a hydration mismatch between server (no theme) and client — not a cascading update.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-7 w-14" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative h-7 w-14 shrink-0 overflow-hidden rounded-full border border-border"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #7dd3fc 0%, #fde68a 65%, #fca5a5 100%)",
        }}
        animate={{ opacity: isDark ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0f172a 0%, #1e1b3a 55%, #4c1d95 100%)",
        }}
        animate={{ opacity: isDark ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {STARS.map((star, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: isDark ? 1 : 0 }}
          transition={{ duration: 0.4, delay: isDark ? star.delay : 0 }}
        />
      ))}

      <motion.div
        className="absolute top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm"
        animate={{ x: isDark ? 30 : 2 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        <motion.div
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {isDark ? (
            <Moon size={14} className="text-indigo-900" />
          ) : (
            <Sun size={14} className="text-amber-500" />
          )}
        </motion.div>
      </motion.div>
    </button>
  );
}
