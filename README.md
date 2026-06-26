# Francis Ganyo — Portfolio

A clean, high-quality developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Deployed as a static site on Netlify.

## Tech Stack

- **Framework**: Next.js 14 (static export)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Fonts**: DM Serif Display + Inter + JetBrains Mono
- **Hosting**: Netlify (no database needed)

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## Before you deploy

### 1. Update your contact details

Open `components/Contact.tsx` and update:

```ts
const WHATSAPP_NUMBER = '233575035893'
const EMAIL = 'francisganyo64@gmail.com'
const LINKEDIN = 'https://linkedin.com/in/francisganyo'
```

### 2. Update or add projects

Open `app/data/projects.ts` and edit the projects array. Each project takes:

```ts
{
  id: 'unique-id',
  title: 'Project Name',
  description: 'Short one-liner',
  longDesc: 'Full paragraph description shown on featured cards',
  tags: ['Tech', 'Stack'],
  category: 'saas' | 'fintech' | 'automation' | 'web',
  github: 'https://github.com/...',
  status: 'live' | 'in-progress' | 'complete',
  featured: true | false,
}
```

---

## Deploy to Netlify

### Option A — GitHub (recommended)

1. Push this folder to a new GitHub repo
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Connect the repo
4. Build command: `npm run build`
5. Publish directory: `out`
6. Click **Deploy**

### Option B — Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=out
```

---

## Customization

| File | What to change |
|------|---------------|
| `app/data/projects.ts` | Add / edit projects |
| `components/Hero.tsx` | Tagline, skills chips |
| `components/About.tsx` | Bio text, stats, stack |
| `components/Contact.tsx` | WhatsApp number, email, LinkedIn |
| `tailwind.config.js` | Colors (`accent`, `ink`, `paper`) |
| `app/layout.tsx` | SEO metadata, page title |
