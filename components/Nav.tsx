'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Refund Policy', href: '/refund-policy' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [legalOpen, setLegalOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200/50 shadow-sm' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`font-display text-lg tracking-tight transition-colors duration-300 ${scrolled ? 'text-ink' : 'text-white'}`}>
          FG<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-300 ${
                scrolled ? 'text-muted hover:text-ink' : 'text-zinc-300 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          {/* Legal dropdown */}
          <div className="relative group">
            <button
              className={`text-sm transition-colors duration-300 flex items-center gap-1 ${
                scrolled ? 'text-muted hover:text-ink' : 'text-zinc-300 hover:text-white'
              }`}
              onClick={() => setLegalOpen(!legalOpen)}
            >
              Legal
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  legalOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {legalOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-zinc-200/50 py-2 z-50"
              >
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-ink hover:bg-zinc-50 transition-colors"
                    onClick={() => setLegalOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
          <a
            href="#contact"
            className={`text-sm px-4 py-2 rounded-full transition-colors duration-300 ${
              scrolled
                ? 'bg-ink text-paper hover:bg-accent'
                : 'bg-white text-zinc-950 hover:bg-zinc-200'
            }`}
          >
            Hire me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 transition-all duration-200 ${scrolled ? 'bg-ink' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 transition-all duration-200 ${scrolled ? 'bg-ink' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 transition-all duration-200 ${scrolled ? 'bg-ink' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-zinc-200/60 px-6 pb-6 flex flex-col gap-4 shadow-md"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-ink py-2 border-b border-border/50"
            >
              {link.label}
            </a>
          ))}
          {/* Legal links in mobile menu */}
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-ink py-2 border-b border-border/50"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm bg-ink text-paper px-4 py-3 rounded-full text-center hover:bg-accent transition-colors"
          >
            Hire me
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
