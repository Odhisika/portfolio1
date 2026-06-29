'use client'

import { motion } from 'framer-motion'
import { Project } from '../app/data/projects'

const categoryColors: Record<string, string> = {
  saas: 'bg-blue-50 text-blue-700',
  fintech: 'bg-emerald-50 text-emerald-700',
  automation: 'bg-purple-50 text-purple-700',
  web: 'bg-orange-50 text-orange-700',
}

const statusDot: Record<string, string> = {
  live: 'bg-green-400',
  'in-progress': 'bg-yellow-400',
  complete: 'bg-blue-400',
}

const statusLabel: Record<string, string> = {
  live: 'Live',
  'in-progress': 'In Progress',
  complete: 'Complete',
}

interface ProjectCardProps {
  project: Project
  index: number
  featured?: boolean
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -4 }}
      className={`group relative bg-white rounded-2xl border border-border overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5 ${
        featured ? 'p-8' : 'p-6'
      }`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[project.category]}`}>
            {project.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-ink/70">
            <span className={`w-1.5 h-1.5 rounded-full ${statusDot[project.status]}`} />
            {statusLabel[project.status]}
          </span>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink/40 hover:text-accent transition-colors shrink-0"
          aria-label="View on GitHub"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
      </div>

      {/* Title */}
      <h3 className={`font-display text-ink mb-3 leading-snug ${featured ? 'text-2xl' : 'text-xl'}`}>
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-ink leading-relaxed mb-6 flex-1">
        {featured ? project.longDesc : project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.slice(0, featured ? 6 : 4).map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2.5 py-1 rounded-md bg-white text-ink/80 border border-ink/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  )
}
