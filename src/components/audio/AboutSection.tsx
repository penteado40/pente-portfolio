"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { audioContent } from "@/lib/content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";

export function AboutSection() {
  const { t, language } = useLanguage();
  const { bio } = audioContent[language];

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 border-t border-border px-4 py-16 sm:px-6 md:grid-cols-12 md:gap-12 md:py-24 lg:px-8">
      <div className="order-2 md:order-1 md:col-span-7">
        <SectionHeading title={t("audio.about.title")} />
        <div className="mt-6 max-w-[65ch] space-y-4 text-base leading-relaxed text-muted">
          {bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <ScrollReveal className="relative order-1 md:order-2 md:col-span-5">
        <TiltCard className="relative aspect-square overflow-hidden rounded-2xl border border-border">
          {/* TODO: replace with a real photo of Felipe in the studio. */}
          <Image
            src="/photos/pente-portrait.jpg"
            alt="Felipe Penteado"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </TiltCard>
      </ScrollReveal>
    </section>
  );
}
