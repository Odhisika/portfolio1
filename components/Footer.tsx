export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
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
    </footer>
  )
}
