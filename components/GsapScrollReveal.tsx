'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface GsapScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
  distance?: number
  duration?: number
  stagger?: number
  once?: boolean
}

export default function GsapScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 60,
  duration = 0.8,
  stagger = 0,
  once = true,
}: GsapScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const fromVars: gsap.TweenVars = {
      opacity: 0,
    }

    if (direction === 'up') fromVars.y = distance
    else if (direction === 'down') fromVars.y = -distance
    else if (direction === 'left') fromVars.x = distance
    else if (direction === 'right') fromVars.x = -distance
    else if (direction === 'scale') fromVars.scale = 0.85

    const targets = stagger > 0
      ? el.children
      : el

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        ...fromVars,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once,
          toggleActions: once
            ? 'play none none none'
            : 'play reverse play reverse',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [delay, direction, distance, duration, stagger, once])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
