# Pente Portfolio

Personal portfolio site for Felipe Penteado, covering two professional identities:

- **Systems Developer** — skills, projects, and experience
- **Audio Engineer** — services, tracks/mixes, gear, and credits

## Structure

- `/` — landing hub with a split choice between the two personas
- `/dev` — Systems Developer page
- `/audio` — Audio Engineer page

Both persona pages share a common design system (typography, layout, components) with a distinct accent palette per persona, dark mode by default, and an EN/PT language switcher.

## Stack

- [Next.js](https://nextjs.org/) + React
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for subtle scroll/hover animations
- Deployed on [Vercel](https://vercel.com/)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Content

Content (bio, projects, skills, services, tracks, credits) lives in typed data files per language and is edited directly in the codebase — no CMS.
