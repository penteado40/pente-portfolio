"use client";

import Image from "next/image";
import { ArrowDownIcon as ArrowDown } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n";
import { MagneticButton } from "@/components/MagneticButton";
import { TiltCard } from "@/components/TiltCard";

export function AudioHero() {
  const { t } = useLanguage();

  return (
    <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 bg-glow-accent px-4 py-16 sm:px-6 md:grid-cols-12 md:gap-12 md:py-24 lg:px-8">
      <div className="relative order-2 md:order-1 md:col-span-5">
        <div
          aria-hidden
          className="absolute -bottom-6 -left-6 -z-10 size-40 rounded-full bg-accent/20 blur-3xl"
        />
        <TiltCard className="relative overflow-hidden rounded-2xl border border-border">
          <Image
            src="/photos/pente-audio-hero.jpg"
            alt="Home studio with mixing console and monitors"
            width={800}
            height={800}
            className="h-full w-full object-cover"
            priority
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"
          />
        </TiltCard>
      </div>

      <div className="order-1 md:order-2 md:col-span-7">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
          {t("hub.audio.title")}
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {t("audio.hero.title")}
        </h1>
        <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-muted">
          {t("audio.hero.subtitle")}
        </p>
        <MagneticButton
          href="#tracks"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-shadow hover:shadow-[0_12px_30px_-12px_var(--color-accent)] active:scale-[0.98]"
        >
          {t("audio.hero.cta")}
          <ArrowDown size={16} weight="bold" aria-hidden />
        </MagneticButton>
      </div>
    </section>
  );
}
