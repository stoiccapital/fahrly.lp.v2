import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { THEME_COOKIE_KEY, DEFAULT_THEME, isValidTheme, type Theme } from "../lp-system/config/preferences";

export const metadata: Metadata = {
  title: "Landing Page Template",
  description: "Minimal reusable landing page template",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read theme from cookie on server
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get(THEME_COOKIE_KEY);
  
  // Resolve theme deterministically
  let theme: Theme = DEFAULT_THEME;
  if (themeCookie?.value && isValidTheme(themeCookie.value)) {
    theme = themeCookie.value;
  }

  // Tailwind uses "dark" class on <html> for dark mode
  // Light mode = no class (empty string)
  const htmlClassName = theme === 'dark' ? 'dark' : '';

  return (
    <html lang="en" className={htmlClassName} data-theme={theme}>
      <body className="bg-bg-default text-text-primary">
        {children}
      </body>
    </html>
  );
}
