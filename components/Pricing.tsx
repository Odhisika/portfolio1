'use client'

import GsapScrollReveal from './GsapScrollReveal'
import GsapSectionTitle from './GsapSectionTitle'

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

const webTiers: PricingTier[] = [
  {
    name: 'Basic',
    price: '$50 – $100',
    description: 'A simple, responsive landing page or small site to establish your online presence.',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Contact form',
      'Basic SEO setup',
      '1 round of revisions',
    ],
  },
  {
    name: 'Standard',
    price: '$200 – $500',
    description: 'A full business site with a CMS, blog, and everything you need to grow online.',
    features: [
      'Up to 15 pages',
      'CMS / Blog integration',
      'SEO optimization',
      'Email integration',
      'Social media links',
      '3 rounds of revisions',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$600 – $2,000',
    description: 'A fully custom web app or SaaS platform with backend, auth, and third-party APIs.',
    features: [
      'Full-stack custom app',
      'User authentication',
      'Database design & setup',
      'Third-party API integrations',
      'Admin dashboard',
      'Priority support',
    ],
  },
  {
    name: 'Custom',
    price: 'Custom',
    description: 'A unique project with specific requirements. Let&apos;s discuss what you need.',
    features: [
      'Tailored to your needs',
      'Any tech stack',
      'Scalable architecture',
      'Custom timeline',
      'Dedicated support',
    ],
  },
]

const mobileTiers: PricingTier[] = [
  {
    name: 'Basic',
    price: '$1,000 – $2,500',
    description: 'A clean, single-screen mobile app to get your idea in front of users fast.',
    features: [
      'Single-screen app',
      'Clean, modern UI',
      'Cross-platform (iOS/Android)',
      'App icon & branding',
      '1 round of revisions',
    ],
  },
  {
    name: 'Standard',
    price: '$3,000 – $6,000',
    description: 'A multi-screen app with a backend API, authentication, and a database.',
    features: [
      'Multi-screen navigation',
      'Backend API',
      'User auth & profiles',
      'Database integration',
      'Push notifications',
      '3 rounds of revisions',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$7,000 – $15,000',
    description: 'A full-featured app with real-time features, payments, and app store submission.',
    features: [
      'Full-featured application',
      'Real-time features',
      'Payment integration',
      'Admin dashboard',
      'App store submission',
      'Priority support & maintenance',
    ],
  },
  {
    name: 'Custom',
    price: 'Custom',
    description: 'A unique project with specific requirements. Let&apos;s discuss what you need.',
    features: [
      'Tailored to your needs',
      'Any tech stack',
      'Scalable architecture',
      'Custom timeline',
      'Dedicated support',
    ],
  },
]

function PricingCard({ tier, index, category }: { tier: PricingTier; index: number; category: string }) {
  const categoryLabel = category === 'web' ? 'Web Development' : 'Mobile App Development'
  const isCustom = tier.price === 'Custom'

  const mailtoHref = isCustom
    ? `mailto:francisganyo64@gmail.com?subject=${encodeURIComponent(
        `${categoryLabel} Project — Let's discuss`
      )}&body=${encodeURIComponent(
        `Hi Francis,%0A%0AI'm interested in building a ${categoryLabel.toLowerCase()}. Can you share more details and a custom quote?%0A%0AThanks.`
      )}`
    : `mailto:francisganyo64@gmail.com?subject=${encodeURIComponent(
        `${tier.name} — ${categoryLabel} Package Inquiry`
      )}&body=${encodeURIComponent(
        `Hi Francis,%0A%0AI'm interested in your ${tier.name} package for ${categoryLabel.toLowerCase()}. Please share more details.%0A%0AThanks.`
      )}`

  return (
    <GsapScrollReveal direction="up" distance={40} delay={index * 0.08}>
      <div
        className={`relative flex flex-col bg-white border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
          tier.highlighted
            ? 'border-accent shadow-md shadow-accent/5'
            : 'border-border hover:border-accent/30'
        }`}
      >
        {tier.highlighted && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-paper font-mono text-xs px-4 py-1 rounded-full">
            Most popular
          </span>
        )}

        <p className="font-mono text-xs text-ink/70 tracking-widest uppercase mb-1">
          {tier.name}
        </p>
        <p className="font-display text-3xl text-ink mb-3">{tier.price}</p>
        <p className="text-sm text-ink/80 leading-relaxed mb-6">{tier.description}</p>

        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-ink">
              <svg
                className="mt-0.5 shrink-0"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="8" cy="8" r="8" fill={tier.highlighted ? '#1A56FF' : '#0D0D0D'} />
                <path
                  d="M5 8.5L7 10.5L11 6"
                  stroke="#F7F5F0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <a
          href={mailtoHref}
          className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
            tier.highlighted
              ? 'bg-accent text-paper hover:bg-accent/90'
              : 'bg-ink text-paper hover:bg-accent'
          }`}
        >
          {isCustom ? 'Contact me' : 'Get a quote'}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7h8M8 3.5L11.5 7 8 10.5" />
          </svg>
        </a>
      </div>
    </GsapScrollReveal>
  )
}

function PricingSection({
  id,
  label,
  title,
  tiers,
}: {
  id: string
  label: string
  title: string
  tiers: PricingTier[]
}) {
  return (
    <section id={id} className="py-28 px-6 max-w-6xl mx-auto bg-[#F0EDE6]">
      <div className="mb-14">
        <GsapSectionTitle label={label} title={title} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
        {tiers.map((tier, i) => (
          <PricingCard key={tier.name} tier={tier} index={i} category={id === 'pricing-web' ? 'web' : 'mobile'} />
        ))}
      </div>
    </section>
  )
}

export default function Pricing() {
  return (
    <>
      <PricingSection
        id="pricing-web"
        label="Web Development"
        title="Web packages"
        tiers={webTiers}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      <PricingSection
        id="pricing-mobile"
        label="Mobile Development"
        title="Mobile packages"
        tiers={mobileTiers}
      />
    </>
  )
}
