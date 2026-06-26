'use client'

import { motion } from 'framer-motion'

const skills = ['Node.js', 'Django', 'React', 'TypeScript', 'PostgreSQL', 'Python', 'Firebase', 'Docker']

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 max-w-6xl mx-auto">
      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-2 mb-10"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-mono text-muted tracking-widest uppercase">
          Available for projects
        </span>
      </motion.div>

      {/* Headline */}
      <div className="overflow-hidden mb-6">
        <motion.h1
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ink leading-[1.05] tracking-tight"
        >
          Francis Ganyo<span className="text-accent">.</span>
        </motion.h1>
      </div>

      <div className="overflow-hidden mb-10">
        <motion.p
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-muted italic leading-tight"
        >
          Software developer
        </motion.p>
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="text-base md:text-lg text-muted max-w-xl leading-relaxed mb-12"
      >
        I build scalable, real-world software — from SaaS platforms for Ghanaian schools to trading
        automation and fintech tools. Backend-heavy, full-stack capable.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-wrap gap-4 mb-16"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-ink text-paper text-sm px-6 py-3 rounded-full hover:bg-accent transition-colors duration-200"
        >
          See my work
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-border text-ink text-sm px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors duration-200"
        >
          Get in touch
        </a>
      </motion.div>

      {/* Skills strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-wrap gap-2"
      >
        {skills.map((skill, i) => (
          <span
            key={skill}
            className="font-mono text-xs px-3 py-1.5 rounded-md bg-white border border-border text-muted"
          >
            {skill}
          </span>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-10 right-8 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-muted tracking-widest uppercase rotate-90 origin-right mb-4">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-muted/40"
        />
      </motion.div>
    </section>
  )
}
