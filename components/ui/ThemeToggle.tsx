"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      style={{
        marginLeft: "auto",
        zIndex: 10,
        position: "fixed",
        top: 20,
        right: 20,
      }}
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        flex items-center justify-center
        h-10 w-10 rounded-full
        bg-secondary text-secondary-foreground
        border border-border
        transition-all duration-200
        hover:bg-accent
      "
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
