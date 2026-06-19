"use client";

import {
  SpeakerHighIcon as SpeakerHigh,
  PlugsConnectedIcon as PlugsConnected,
  AppWindowIcon as AppWindow,
  MicrophoneIcon as Microphone,
  type Icon,
} from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n";
import { audioContent } from "@/lib/content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

const GEAR_ICONS: Icon[] = [SpeakerHigh, PlugsConnected, AppWindow, Microphone];

export function GearCreditsSection() {
  const { t, language } = useLanguage();
  const { gear } = audioContent[language];

  return (
    <section className="mx-auto max-w-7xl border-t border-border px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <SectionHeading title={t("audio.gear.title")} />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {gear.map((group, index) => {
          const GearIcon = GEAR_ICONS[index % GEAR_ICONS.length];
          const tinted = index % 2 === 1;
          return (
            <ScrollReveal
              key={group.category}
              delay={index * 0.06}
              className={`hover-lift rounded-2xl border border-border p-6 ${
                tinted ? "bg-accent/5" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10">
                  <GearIcon size={20} weight="light" className="text-accent" aria-hidden />
                </div>
                <h3 className="text-sm font-medium uppercase tracking-wide text-muted">
                  {group.category}
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          );
        })}
      </div>


    </section>
  );
}
