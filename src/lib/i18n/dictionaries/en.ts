export const en = {
  "common.contact": "Contact",
  "common.viewProject": "View project",
  "common.sourceCode": "Source",
  "common.liveDemo": "Live demo",
  "common.listen": "Listen",
  "common.languageToggle": "Switch to Portuguese",

  "nav.brand": "Felipe Penteado",
  "nav.dev": "Developer",
  "nav.audio": "Audio",
  "nav.home": "Home",

  "hub.tagline":
    "Systems developer and audio engineer. Pick a path to see the work.",
  "hub.dev.title": "Systems Developer",
  "hub.dev.description":
    "Backend systems, APIs, and developer tooling built to stay boring in production.",
  "hub.dev.cta": "View developer work",
  "hub.audio.title": "Audio Engineer",
  "hub.audio.description":
    "Mixing, mastering, and sound design for independent artists and studios.",
  "hub.audio.cta": "View audio work",

  "dev.hero.title": "Backend systems that stay boring in production.",
  "dev.hero.subtitle":
    "I design and build APIs, services, and developer tooling, with an emphasis on correctness, observability, and maintainability.",
  "dev.hero.cta": "View projects",
  "dev.about.title": "About",
  "dev.skills.title": "Skills & tools",
  "dev.projects.title": "Projects",
  "dev.cta.title": "Have a system that needs building or fixing?",
  "dev.cta.subtitle":
    "I'm open to backend, API, and tooling work. Send a note with what you're working on.",

  "audio.hero.title": "Mixes that translate everywhere they're played.",
  "audio.hero.subtitle":
    "I mix and master tracks for independent artists, working from a treated home studio with analog-modeled processing.",
  "audio.hero.cta": "Listen to mixes",
  "audio.about.title": "About",
  "audio.tracks.title": "Selected mixes",
  "audio.services.title": "Services",
  "audio.gear.title": "Studio & gear",
  "audio.credits.title": "Credits",
  "audio.cta.title": "Got a track that needs to translate everywhere?",
  "audio.cta.subtitle":
    "I'm taking on mixing, mastering, and sound design work. Send over your stems or a rough mix.",

  "footer.rights": "All rights reserved.",

  "notFound.title": "Page not found.",
  "notFound.description":
    "The page you're looking for doesn't exist, or it moved.",
  "notFound.cta": "Back to home",
} as const;

export type TranslationKey = keyof typeof en;
