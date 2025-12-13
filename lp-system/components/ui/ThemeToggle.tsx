'use client';

import React, { useEffect, useState } from 'react';
import { THEME_COOKIE_KEY, type Theme } from '../../config/preferences';

/**
 * ThemeToggle Component
 * Client-only toggle for switching between light and dark themes
 * Updates cookie and <html> class/attribute immediately
 */
export function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Determine current theme from DOM on mount
  useEffect(() => {
    const html = document.documentElement;
    // Check if dark class is present (Tailwind's authoritative selector)
    const isDark = html.classList.contains('dark');
    const detectedTheme: Theme = isDark ? 'dark' : 'light';
    setCurrentTheme(detectedTheme);
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const nextTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Update cookie
    document.cookie = `${THEME_COOKIE_KEY}=${nextTheme}; path=/; max-age=31536000; samesite=lax`;
    
    // Update <html> element using Tailwind's class selector
    const html = document.documentElement;
    if (nextTheme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    // Keep data-theme as mirror for consistency
    html.dataset.theme = nextTheme;
    
    setCurrentTheme(nextTheme);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Switch theme"
        className="px-2 py-1 text-sm rounded cursor-pointer transition-colors text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-ring-focus opacity-0"
        disabled
      >
        ☀
      </button>
    );
  }

  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
  const ariaLabel = `Switch to ${nextTheme} mode`;

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={ariaLabel}
      className="px-2 py-1 text-sm rounded cursor-pointer transition-colors text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-ring-focus"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      {currentTheme === 'light' ? '🌙' : '☀'}
    </button>
  );
}
