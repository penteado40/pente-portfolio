"use client";

import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react";
import { useLanguage, type TranslationKey } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MagneticButton } from "@/components/MagneticButton";

type CtaBandProps = {
  titleKey: TranslationKey;
  subtitleKey: TranslationKey;
  href: string;
};

/** Full-width closing statement with a single magnetic CTA. */
export function CtaBand({ titleKey, subtitleKey, href }: CtaBandProps) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-t border-border bg-glow-accent px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <ScrollReveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t(titleKey)}</h2>
        <p className="mx-auto mt-4 max-w-[50ch] text-base leading-relaxed text-muted">
          {t(subtitleKey)}
        </p>
        <MagneticButton
          href={href}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-shadow hover:shadow-[0_12px_30px_-12px_var(--color-accent)] active:scale-[0.98]"
        >
          {t("common.contact")}
          <ArrowUpRight size={16} weight="bold" aria-hidden />
        </MagneticButton>
      </ScrollReveal>
    </section>
  );
}
