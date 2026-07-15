import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://francisganyo.dev'
const siteName = 'Francis Ganyo Software Developer'
const businessName = 'Francis Ganyo Software Development Services'
const businessDescription = 'Professional software development and consulting services specializing in custom web applications, backend systems, fintech solutions, API development, and payment integration. Based in Ghana, serving clients globally with a focus on African markets.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: businessDescription,
  robots: { index: true, follow: true },
  openGraph: {
    title: siteName,
    description: businessDescription,
    url: siteUrl,
    siteName: businessName,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: businessDescription,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: businessName,
      url: siteUrl,
      description: businessDescription,
    },
    {
      '@type': 'Person',
      name: 'Francis Ganyo',
      alternateName: 'Odhisika',
      url: siteUrl,
      jobTitle: 'Software Developer & Consultant',
      worksFor: {
        '@type': 'Organization',
        name: businessName,
        description: businessDescription,
        foundingDate: '2023',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'GH',
          addressLocality: 'Accra',
        },
      },
      knowsAbout: ['Node.js', 'Django', 'React', 'TypeScript', 'PostgreSQL', 'Python', 'Firebase', 'Docker', 'Payment Integration', 'Fintech', 'API Development', 'Backend Systems'],
      sameAs: [
        'https://github.com/Odhisika',
        'https://linkedin.com/in/francisganyo',
      ],
    },
    {
      '@type': 'Organization',
      name: businessName,
      description: businessDescription,
      url: siteUrl,
      foundingDate: '2023',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GH',
        addressLocality: 'Accra',
      },
      hasMap: 'https://goo.gl/maps/place/Ghana',
      email: 'francisganyo98@gmail.com',
      sameAs: [
        'https://github.com/Odhisika',
        'https://linkedin.com/in/francisganyo',
        'https://francisganyo.dev',
      ],
    },
    {
      '@type': 'ProfessionalService',
      name: businessName,
      description: businessDescription,
      url: siteUrl,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GH',
        addressLocality: 'Accra',
      },
      telephone: '+233',
      email: 'francisganyo98@gmail.com',
      hasMap: 'https://goo.gl/maps/place/Ghana',
      openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 09:00-17:00',
      priceRange: 'Varies by project',
      servesCuisine: 'Software Development',
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
