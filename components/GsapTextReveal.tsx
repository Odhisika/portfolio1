'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useInView } from 'framer-motion'

interface GsapTextRevealProps {
  children: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  delay?: number
  stagger?: number
  duration?: number
  once?: boolean
}

export default function GsapTextReveal({
  children,
  as: Tag = 'p',
  className = '',
  delay = 0,
  stagger = 0.04,
  duration = 0.6,
  once = true,
}: GsapTextRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as any, { once, margin: '-40px' })

  useEffect(() => {
    const el = ref.current
    if (!el || !isInView) return

    const chars = el.textContent?.split('') ?? []
    el.textContent = ''
    const spans = chars.map((char) => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      span.style.display = 'inline-block'
      span.style.opacity = '0'
      span.style.transform = 'translateY(40px) rotateX(40deg)'
      el.appendChild(span)
      return span
    })

    const ctx = gsap.context(() => {
      gsap.to(spans, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration,
        stagger,
        delay,
        ease: 'power3.out',
      })
    }, el)

    return () => ctx.revert()
  }, [isInView, delay, stagger, duration])

  return (
    <Tag ref={ref as any} className={className}>
      {children}
    </Tag>
  )
}
