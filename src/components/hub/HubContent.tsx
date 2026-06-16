"use client";

import { CodeIcon as Code, WaveformIcon as Waveform } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PersonaPanel } from "./PersonaPanel";

export function HubContent() {
  const { t } = useLanguage();

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {t("nav.brand")}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            {t("hub.tagline")}
          </p>
        </ScrollReveal>
      </div>

      <div className="grid flex-1 grid-cols-1 border-t border-border md:grid-cols-2">
        <PersonaPanel
          href="/dev"
          theme="dev"
          icon={Code}
          title={t("hub.dev.title")}
          description={t("hub.dev.description")}
          cta={t("hub.dev.cta")}
          image="https://picsum.photos/seed/pente-hub-dev-bg/1200/1200"
          priority
        />
        <PersonaPanel
          href="/audio"
          theme="audio"
          icon={Waveform}
          title={t("hub.audio.title")}
          description={t("hub.audio.description")}
          cta={t("hub.audio.cta")}
          image="/photos/pente-hub-audio-bg.jpg"
        />
      </div>
    </main>
  );
}
