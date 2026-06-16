"use client";

import {
  SlidersHorizontalIcon as SlidersHorizontal,
  WaveSineIcon as WaveSine,
  MicrophoneIcon as Microphone,
  SparkleIcon as Sparkle,
  type Icon,
} from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n";
import { audioContent } from "@/lib/content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

const SERVICE_ICONS: Icon[] = [SlidersHorizontal, WaveSine, Microphone, Sparkle];

export function ServicesSection() {
  const { t, language } = useLanguage();
  const { services } = audioContent[language];

  return (
    <section className="mx-auto max-w-7xl border-t border-border px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <SectionHeading title={t("audio.services.title")} />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((service, index) => {
          const ServiceIcon = SERVICE_ICONS[index % SERVICE_ICONS.length];
          const tinted = index % 2 === 0;
          return (
            <ScrollReveal
              key={service.title}
              delay={index * 0.06}
              className={`hover-lift rounded-2xl border border-border p-6 ${
                tinted ? "bg-accent/5" : ""
              }`}
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10">
                <ServiceIcon size={20} weight="light" className="text-accent" aria-hidden />
              </div>
              <h3 className="mt-4 text-base font-medium">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
