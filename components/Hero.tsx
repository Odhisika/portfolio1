'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { CosmicParallaxBg } from './ui/parallax-cosmic-background'

const skills = ['Node.js', 'Django', 'React', 'TypeScript', 'PostgreSQL', 'Python', 'Firebase', 'Docker']

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(badgeRef.current, { opacity: 0, y: 10, duration: 0.5 })

      if (headlineRef.current) {
        const chars = headlineRef.current.querySelectorAll('.char')
        tl.from(chars, {
          opacity: 0,
          y: 80,
          rotateZ: -8,
          stagger: 0.03,
          duration: 0.6,
        }, '-=0.2')
      }

      tl.from(subtitleRef.current, { opacity: 0, y: 20, duration: 0.4 }, '-=0.1')
        .from(descRef.current, { opacity: 0, y: 16, duration: 0.5 }, '-=0.2')
        .from(ctaRef.current, { opacity: 0, y: 16, duration: 0.5 }, '-=0.1')
        .from(skillsRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.2')
    })

    return () => ctx.revert()
  }, [])

  const nameChars = 'Francis Ganyo.'.split('').map((char, i) => (
    <span key={i} className="char inline-block" style={{ display: 'inline-block' }}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 max-w-6xl mx-auto relative overflow-hidden">
      {/* Cosmic parallax background */}
      <CosmicParallaxBg
        head="Software Engineer"
        text="Innovate, Build, Scale, Deliver"
        loop={true}
      />

      {/* Status badge */}
      <div ref={badgeRef}>
        <div className="flex items-center gap-2 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-emerald-400/90 tracking-widest uppercase">
            Available for projects
          </span>
        </div>
      </div>

      {/* Headline */}
      <div className="overflow-hidden mb-6">
        <h1
          ref={headlineRef}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight"
        >
          {nameChars}
        </h1>
      </div>

      <div className="overflow-hidden mb-10">
        <p
          ref={subtitleRef}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-zinc-300 italic leading-tight"
        >
          Odhisika / Software developer
        </p>
      </div>

      {/* Description */}
      <p
        ref={descRef}
        className="text-base md:text-lg text-zinc-300 max-w-xl leading-relaxed mb-12"
      >
        I'm Odhisika — a backend-heavy full-stack developer and Computer Science student focused on
        building robust, real-world products that solve tangible problems. From multi-tenant
        school management SaaS platforms in Ghana to algorithmic trading automation and
        fintech integrations, I engineer systems designed for scale and clean execution.
      </p>

      {/* CTAs */}
      <div ref={ctaRef} className="flex flex-wrap gap-4 mb-16">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-white text-zinc-950 font-medium text-sm px-6 py-3 rounded-full hover:bg-zinc-200 transition-colors duration-200"
        >
          See my work
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-white/30 text-white font-medium text-sm px-6 py-3 rounded-full hover:border-white hover:bg-white/10 transition-all duration-200"
        >
          Get in touch
        </a>
      </div>

      {/* Skills strip */}
      <div ref={skillsRef} className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={skill}
            className="font-mono text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 backdrop-blur-sm hover:border-white/20 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Decorative line */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-48 hidden lg:block">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 hidden md:flex flex-col items-center gap-2">
        <span className="text-xs font-mono text-white/40 tracking-widest uppercase rotate-90 origin-right mb-4">
          scroll
        </span>
        <div className="w-px h-8 bg-white/20 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-2 bg-white rounded-full animate-scrollDot" />
        </div>
      </div>
    </section>
  )
}
