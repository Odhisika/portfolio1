import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  
  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Refund Policy', href: '/refund-policy' },
  ]
  
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <span className="font-display text-ink">
            FG<span className="text-accent">.</span>
          </span>
          <p className="font-mono text-xs text-muted">
            © {year} Francis Ganyo. Built with Next.js &amp; Framer Motion.
          </p>
          <a
            href="https://github.com/Odhisika"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            github.com/Odhisika →
          </a>
        </div>
        
        {/* Legal links */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-6">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
