'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useInView } from 'framer-motion'

const COLORS = ['#1A56FF', '#0D0D0D', '#8A8A8A']

export default function GsapFloatingOrbs() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const orbs = Array.from({ length: 8 }).map(() => {
      const orb = document.createElement('div')
      const size = Math.random() * 80 + 20
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      orb.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        opacity: ${Math.random() * 0.05 + 0.02};
        pointer-events: none;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `
      el.appendChild(orb)
      return orb
    })

    const ctx = gsap.context(() => {
      orbs.forEach((orb) => {
        gsap.to(orb, {
          x: () => (Math.random() - 0.5) * 300,
          y: () => (Math.random() - 0.5) * 300,
          scale: () => Math.random() * 1.5 + 0.5,
          duration: Math.random() * 8 + 6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={ref}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    />
  )
}
