'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { allProjects, Project } from '../app/data/projects'
import ProjectCard from './ProjectCard'
import FadeIn from './FadeIn'

const filters = ['all', 'saas', 'fintech', 'automation', 'web'] as const
type Filter = typeof filters[number]

export default function Projects() {
  const [active, setActive] = useState<Filter>('all')

  const filtered = active === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <FadeIn>
        <div className="flex items-end justify-between mb-4 flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs text-muted tracking-widest uppercase mb-3">
              Selected Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink">
              Projects<span className="text-accent">.</span>
            </h2>
          </div>
          <a
            href="https://github.com/Odhisika"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent flex items-center gap-2 transition-colors"
          >
            All repos on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </FadeIn>

      {/* Divider */}
      <FadeIn delay={0.1}>
        <div className="h-px bg-border mb-10" />
      </FadeIn>

      {/* Filter tabs */}
      <FadeIn delay={0.15}>
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 capitalize ${
                active === f
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-transparent text-muted border-border hover:border-ink hover:text-ink'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              featured={project.featured && active === 'all' && i < 2}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="text-muted text-sm text-center py-12">No projects in this category yet.</p>
      )}
    </section>
  )
}
