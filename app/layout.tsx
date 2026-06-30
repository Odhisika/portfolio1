import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://francisganyo.dev'
const siteName = 'Francis Ganyo Software Developer'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: 'Software developer — also known as Odhisika — building scalable, real world solutions across web, fintech, and automation. Based in Ghana.',
  robots: { index: true, follow: true },
  openGraph: {
    title: siteName,
    description: 'Odhisika (Francis Ganyo) — Full-stack developer with a focus on backend systems, APIs, and African digital products.',
    url: siteUrl,
    siteName: 'Francis Ganyo',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: 'Odhisika (Francis Ganyo) — Full-stack developer with a focus on backend systems, APIs, and African digital products.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
      description: 'Software developer — also known as Odhisika — building scalable, real-world solutions across web, fintech, and automation.',
    },
    {
      '@type': 'Person',
      name: 'Francis Ganyo',
      alternateName: 'Odhisika',
      url: siteUrl,
      jobTitle: 'Software Developer',
      knowsAbout: ['Node.js', 'Django', 'React', 'TypeScript', 'PostgreSQL', 'Python', 'Firebase', 'Docker'],
      sameAs: [
        'https://github.com/Odhisika',
        'https://linkedin.com/in/francisganyo',
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
