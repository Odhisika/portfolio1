'use client'

import GsapScrollReveal from './GsapScrollReveal'
import GsapSectionTitle from './GsapSectionTitle'

const stack = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'] },
  { category: 'Backend', items: ['Django', 'Django REST', 'Node.js', 'Express.js'] },
  { category: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Radix UI'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Firebase', 'SQLite', 'Prisma'] },
  { category: 'DevOps & Tools', items: ['Git', 'Docker', 'Postman', 'Celery', 'Redis'] },
  { category: 'Payments', items: ['Paystack', 'Flutterwave', 'MTN MoMo', 'Stripe'] },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto bg-[#F0EDE6]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Left: text */}
        <div>
          <GsapSectionTitle
            label="About"
            title="Who I am"
          />

          <GsapScrollReveal direction="up" distance={30} delay={0.1}>
            <p className="text-base text-ink leading-relaxed mb-5">
              I'm <strong className="text-ink font-medium">Francis Ganyo</strong>, a software developer
              and CS student with a focus on building real products that solve real problems — especially
              in African markets.
            </p>
          </GsapScrollReveal>

          <GsapScrollReveal direction="up" distance={30} delay={0.15}>
            <p className="text-base text-ink leading-relaxed mb-5">
              My work spans full-stack web apps, SaaS platforms, fintech tools, and automation systems.
              I'm backend-heavy but comfortable across the stack. I've shipped a school management
              platform designed specifically for Ghana's education system, built trading bots, invoice
              tools, and more.
            </p>
          </GsapScrollReveal>

          <GsapScrollReveal direction="up" distance={30} delay={0.2}>
            <p className="text-base text-ink leading-relaxed mb-10">
              I care about clean architecture, production-ready code, and products that actually work
              for the users they're built for. Open to collaboration, freelance projects, and
              startup opportunities.
            </p>
          </GsapScrollReveal>

          {/* Stats */}
          <GsapScrollReveal direction="up" distance={30} delay={0.25}>
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: '33+', label: 'Repositories' },
                { num: '6+', label: 'Projects shipped' },
                { num: '3+', label: 'Years coding' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="font-display text-3xl text-ink mb-1">{num}</p>
                  <p className="text-xs text-ink/70">{label}</p>
                </div>
              ))}
            </div>
          </GsapScrollReveal>
        </div>

        {/* Right: stack */}
        <div>
          <GsapScrollReveal direction="left" distance={30} delay={0.1}>
            <p className="font-mono text-xs text-ink/70 tracking-widest uppercase mb-6">Tech Stack</p>
          </GsapScrollReveal>
          <div className="flex flex-col gap-6">
            {stack.map((group, i) => (
              <GsapScrollReveal key={group.category} direction="left" distance={30} delay={0.15 + i * 0.08}>
                <div>
                  <p className="text-xs font-medium text-ink mb-2.5">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-2.5 py-1.5 rounded-md bg-white border border-ink/10 text-ink/80 hover:border-accent hover:text-accent transition-colors duration-150 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </GsapScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
