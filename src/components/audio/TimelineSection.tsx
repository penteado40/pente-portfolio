"use client";

import { useLanguage } from "@/lib/i18n";
import { audioContent } from "@/lib/content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

export function TimelineSection() {
  const { t, language } = useLanguage();
  const { timeline } = audioContent[language];

  return (
    <section className="mx-auto max-w-7xl border-t border-border px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <SectionHeading title={t("audio.timeline.title")} />

      <div className="mt-10 max-w-2xl">
        <div className="relative">
          <div className="absolute left-[3.25rem] top-0 h-full w-px bg-border" aria-hidden />

          <ol className="space-y-8">
            {timeline.map((entry, index) => (
              <ScrollReveal
                key={entry.year}
                delay={index * 0.08}
                className="relative flex items-start gap-6"
              >
                <span className="w-16 shrink-0 pt-0.5 text-right text-sm font-semibold tabular-nums text-accent">
                  {entry.year}
                </span>
                <div
                  className="relative z-10 mt-1.5 size-3 shrink-0 rounded-full border-2 border-accent bg-background"
                  aria-hidden
                />
                <p className="text-sm leading-relaxed text-muted">{entry.description}</p>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
