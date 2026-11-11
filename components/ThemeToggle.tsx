'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-slate-800/40 border border-slate-700/50" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative p-2 rounded-xl text-slate-400 hover:text-slate-100 bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/60 dark:border-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600 transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}
