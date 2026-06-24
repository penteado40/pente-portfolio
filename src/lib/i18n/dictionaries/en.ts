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
    "I build backend systems and mix live sound — two crafts driven by the same instinct for invisible precision.",
  "hub.dev.title": "Systems Developer",
  "hub.dev.description":
    "APIs, services, and tooling built for teams that need things to work — quietly and reliably.",
  "hub.dev.cta": "View developer work",
  "hub.audio.title": "Audio Engineer",
  "hub.audio.description":
    "Live sound, studio mixing, and technical direction for vocal groups, artists, and major productions.",
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

  "audio.hero.title": "The best mix is the one nobody notices.",
  "audio.hero.subtitle":
    "I specialize in vocal music — live events, DVDs, and studio mixing for vocal groups, bands, and independent artists. Every mix is built to serve the song.",
  "audio.hero.cta": "Listen to mixes",
  "audio.about.title": "About",
  "audio.tracks.title": "Selected mixes",
  "audio.services.title": "Services",
  "audio.timeline.title": "Career",
  "audio.productions.title": "Productions",
  "audio.productions.others": "Other productions",
  "audio.productions.studio": "Studio mixing",
  "audio.productions.watch": "Watch",
  "audio.photos.title": "Photos",
  "audio.gear.title": "Studio & gear",
  "audio.credits.title": "Credits",
  "audio.cta.title": "Working on something that needs to sound right?",
  "audio.cta.subtitle":
    "I'm open to mixing, mastering, live sound, and technical direction work. Tell me about your project.",

  "footer.rights": "All rights reserved.",

  "dev.comingSoon.label": "Coming soon",
  "dev.comingSoon.title": "This page is under construction.",
  "dev.comingSoon.description": "Something is being put together here. Check back later.",
  "dev.comingSoon.cta": "Back to home",

  "notFound.title": "Page not found.",
  "notFound.description":
    "The page you're looking for doesn't exist, or it moved.",
  "notFound.cta": "Back to home",
} as const;

export type TranslationKey = keyof typeof en;
