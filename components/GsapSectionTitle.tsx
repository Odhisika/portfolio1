'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface GsapSectionTitleProps {
  label: string
  title: string
  className?: string
}

export default function GsapSectionTitle({
  label,
  title,
  className = '',
}: GsapSectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const labelEl = el.querySelector('[data-label]')
    const lineEl = el.querySelector('[data-line]')
    const titleEl = el.querySelector('[data-title]')

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          once: true,
        },
      })

      tl.from(labelEl, {
        opacity: 0,
        y: 12,
        duration: 0.5,
        ease: 'power2.out',
      })
        .from(lineEl, {
          scaleX: 0,
          duration: 0.6,
          ease: 'power3.inOut',
          transformOrigin: 'left center',
        }, '-=0.3')
        .from(titleEl?.querySelectorAll('span') ?? [], {
          opacity: 0,
          y: 30,
          rotateX: 30,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
        }, '-=0.3')
    }, el)

    return () => ctx.revert()
  }, [])

  const words = title.split(' ')

  return (
    <div ref={ref} className={className}>
      <p
        data-label
        className="font-mono text-xs text-muted tracking-widest uppercase mb-3"
      >
        {label}
      </p>
      <div
        data-line
        className="h-px bg-border w-full mb-6"
      />
      <h2 data-title className="font-display text-4xl md:text-5xl text-ink leading-tight">
        {words.map((word, i) => (
          <span key={i} className="inline-block mr-[0.3em]">
            {word}
            {i === words.length - 1 && <span className="text-accent">.</span>}
          </span>
        ))}
      </h2>
    </div>
  )
}
