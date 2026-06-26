export interface Project {
  id: string
  title: string
  description: string
  longDesc: string
  tags: string[]
  category: 'saas' | 'fintech' | 'automation' | 'web'
  github: string
  status: 'live' | 'in-progress' | 'complete'
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'imperial-academy',
    title: 'Imperial Academy',
    description: 'Full-stack educational platform for schools, students, and administrators.',
    longDesc: 'A modern school management platform with AI integration via Google Generative AI, JWT-based authentication, interactive maps, and a dynamic admin dashboard. Built with Next.js 15, Express.js, and Prisma ORM.',
    tags: ['Next.js 15', 'TypeScript', 'Express.js', 'Prisma', 'Google AI', 'JWT'],
    category: 'saas',
    github: 'https://github.com/Odhisika/imperialAcademy',
    status: 'complete',
    featured: true,
  },
  {
    id: 'ghana-school-saas',
    title: 'Ghana School SaaS',
    description: 'Multi-tenant school management system built for Ghanaian primary and secondary schools.',
    longDesc: 'Comprehensive SaaS platform supporting P1–SHS3 with multi-tenancy, role-based access, Ghana-format report cards, Mobile Money payments (MTN MoMo, Vodafone, AirtelTigo), Paystack/Flutterwave, SMS notifications, and Celery task queues.',
    tags: ['Django', 'Firebase', 'Python', 'Celery', 'Paystack', 'MTN MoMo'],
    category: 'saas',
    github: 'https://github.com/Odhisika/schoolSaas',
    status: 'in-progress',
    featured: true,
  },
  {
    id: 'invoice-generator',
    title: 'Invoice Generator',
    description: 'Web app for generating, managing, and downloading professional invoices.',
    longDesc: 'Django-based invoice system with user accounts, invoice creation flows, PDF generation, and a clean templated UI. Handles multiple clients, line items, and tax calculations.',
    tags: ['Django', 'Python', 'HTML', 'CSS', 'PDF'],
    category: 'web',
    github: 'https://github.com/Odhisika/invoice_generator',
    status: 'complete',
    featured: true,
  },
  {
    id: 'trading-bots',
    title: 'Trading Bots',
    description: 'Automated Python bots for executing trading strategies.',
    longDesc: 'Algorithmic trading bots written in Python with automated execution logic, strategy backtesting, and real-time market data processing. Built for crypto/financial markets.',
    tags: ['Python', 'Automation', 'Fintech', 'Algorithms'],
    category: 'fintech',
    github: 'https://github.com/Odhisika/trading-bots',
    status: 'complete',
    featured: false,
  },
  {
    id: 'salary-pilot',
    title: 'SalaryPilot',
    description: 'Payroll automation tool for calculating and processing salaries.',
    longDesc: 'Python-based payroll management system that automates salary computation, tax deductions, and payslip generation for small teams and businesses.',
    tags: ['Python', 'Automation', 'Payroll', 'Finance'],
    category: 'automation',
    github: 'https://github.com/Odhisika/salaryPilot',
    status: 'complete',
    featured: false,
  },
  {
    id: 'west-links',
    title: 'WestLinks',
    description: 'Official link hub and landing page for West brand properties.',
    longDesc: 'A streamlined, branded link hub connecting all West-affiliated digital properties and social channels in a single clean interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    github: 'https://github.com/Odhisika/ofiicialWestLinks',
    status: 'complete',
    featured: false,
  },
]

export const featuredProjects = projects.filter(p => p.featured)
export const allProjects = projects
