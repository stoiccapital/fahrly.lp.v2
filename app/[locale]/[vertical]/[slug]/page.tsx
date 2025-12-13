import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { findLandingPageConfig } from '@/lp-system/config/lp-config';
import { loadPageCopy } from '@/lp-system/locales';
import { LandingPageTemplate } from '@/lp-system/templates/LandingPage';

type PageProps = {
  params: Promise<{
    locale: string;
    vertical: string;
    slug: string;
  }>;
};

// Get base URL from environment variable or runtime headers
async function getBaseUrl(): Promise<string> {
  // Prefer environment variable if set
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }
  
  // Fallback to runtime detection
  try {
    const headersList = await headers();
    const host = headersList.get('host');
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    if (host) {
      return `${protocol}://${host}`;
    }
  } catch {
    // Headers not available (e.g., during build)
  }
  
  // Final fallback (should not be used in production)
  return '';
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, vertical, slug } = await params;

  // Validate locale
  if (locale !== 'en' && locale !== 'de') {
    return {};
  }

  // Find landing page config
  const config = findLandingPageConfig(locale as 'en' | 'de', vertical, slug);
  if (!config) {
    return {};
  }

  // Load copy
  const copy = loadPageCopy(locale as 'en' | 'de', config.id);
  if (!copy) {
    return {};
  }

  // Build canonical URL
  const baseUrl = await getBaseUrl();
  const canonicalUrl = baseUrl ? `${baseUrl}/${locale}/${vertical}/${slug}` : undefined;

  return {
    title: copy.hero.title,
    description: copy.hero.subtitle,
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
  };
}

export default async function LandingPage({ params }: PageProps) {
  const { locale, vertical, slug } = await params;

  // Validate locale
  if (locale !== 'en' && locale !== 'de') {
    notFound();
  }

  // Find landing page config
  const config = findLandingPageConfig(locale as 'en' | 'de', vertical, slug);
  if (!config) {
    notFound();
  }

  // Load copy
  const copy = loadPageCopy(locale as 'en' | 'de', config.id);
  if (!copy) {
    notFound();
  }

  // Build canonical URL for structured data
  const baseUrl = await getBaseUrl();
  const canonicalUrl = baseUrl ? `${baseUrl}/${locale}/${vertical}/${slug}` : undefined;

  // Structured data (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: copy.hero.title,
    description: copy.hero.subtitle,
    ...(canonicalUrl && { url: canonicalUrl }),
    mainEntity: {
      '@type': 'Organization',
      name: 'Company Name',
      ...(baseUrl && { url: baseUrl }),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LandingPageTemplate theme={config.theme} copy={copy} locale={locale as 'en' | 'de'} />
    </>
  );
}

