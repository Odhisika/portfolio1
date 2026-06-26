import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Francis Ganyo — Software Developer',
  description: 'Software developer building scalable, real-world solutions across web, fintech, and automation. Based in Ghana.',
  openGraph: {
    title: 'Francis Ganyo — Software Developer',
    description: 'Full-stack developer with a focus on backend systems, APIs, and African digital products.',
    url: 'https://francisganyo.dev',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
