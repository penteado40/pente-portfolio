"use client";

import Image from "next/image";
import { ArrowDownIcon as ArrowDown } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n";
import { MagneticButton } from "@/components/MagneticButton";
import { TiltCard } from "@/components/TiltCard";

export function DevHero() {
  const { t } = useLanguage();

  return (
    <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 bg-glow-accent px-4 py-16 sm:px-6 md:grid-cols-12 md:gap-12 md:py-24 lg:px-8">
      <div className="md:col-span-7">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
          {t("hub.dev.title")}
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {t("dev.hero.title")}
        </h1>
        <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-muted">
          {t("dev.hero.subtitle")}
        </p>
        <MagneticButton
          href="#projects"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-shadow hover:shadow-[0_12px_30px_-12px_var(--color-accent)] active:scale-[0.98]"
        >
          {t("dev.hero.cta")}
          <ArrowDown size={16} weight="bold" aria-hidden />
        </MagneticButton>
      </div>

      <div className="relative md:col-span-5">
        <div
          aria-hidden
          className="absolute -right-6 -top-6 -z-10 size-40 rounded-full bg-accent/20 blur-3xl"
        />
        <TiltCard className="relative overflow-hidden rounded-2xl border border-border">
          {/* TODO: replace with a real photo of Felipe at work. */}
          <Image
            src="https://picsum.photos/seed/pente-dev-workspace/800/800"
            alt="Desk setup with multiple monitors showing code"
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
    </section>
  );
}
