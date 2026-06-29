'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function GsapCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const ctx = gsap.context(() => {
      const pos = { x: 0, y: 0 }
      const target = { x: 0, y: 0 }

      const onMove = (e: MouseEvent) => {
        target.x = e.clientX
        target.y = e.clientY
      }

      window.addEventListener('mousemove', onMove)

      gsap.ticker.add(() => {
        pos.x += (target.x - pos.x) * 0.1
        pos.y += (target.y - pos.y) * 0.1
        gsap.set(cursor, { x: pos.x - 12, y: pos.y - 12 })
      })
    }, cursor)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-accent/40 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
    />
  )
}
