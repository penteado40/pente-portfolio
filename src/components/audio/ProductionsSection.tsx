"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowSquareOutIcon as ArrowSquareOut } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n";
import { audioContent, type Production } from "@/lib/content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

function PhotoCarousel({ photos, title }: { photos: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  if (photos.length === 0) {
    return (
      <div className="flex aspect-video w-full items-center justify-center bg-white/[0.03] text-xs text-muted">
        Fotos em breve
      </div>
    );
  }

  function handleScroll() {
    if (!ref.current) return;
    const index = Math.round(ref.current.scrollLeft / ref.current.clientWidth);
    setActiveIndex(index);
  }

  return (
    <div className="relative">
      <div
        ref={ref}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((src, i) => (
          <div key={src} className="relative aspect-video w-full shrink-0 snap-start">
            <Image
              src={src}
              alt={`${title} — ${i + 1}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {photos.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Foto ${i + 1}`}
              onClick={() => {
                ref.current?.scrollTo({ left: i * ref.current.clientWidth, behavior: "smooth" });
              }}
              className={`size-1.5 rounded-full transition-colors ${
                i === activeIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductionCard({ production, featured }: { production: Production; featured?: boolean }) {
  const { t } = useLanguage();

  return (
    <div className="hover-lift flex flex-col overflow-hidden rounded-2xl border border-border">
      <PhotoCarousel photos={production.photos} title={production.title} />
      <div className="flex flex-1 flex-col justify-between gap-4 p-6">
        <div>
          <h3 className={featured ? "text-xl font-medium" : "text-lg font-medium"}>
            {production.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{production.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {production.roles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
        {production.link && (
          <a
            href={production.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            <ArrowSquareOut size={16} weight="bold" aria-hidden />
            {t("audio.productions.watch")}
          </a>
        )}
      </div>
    </div>
  );
}

export function ProductionsSection() {
  const { t, language } = useLanguage();
  const { featuredProductions, otherProductions, studioArtists } = audioContent[language];
  const [featured, ...rest] = featuredProductions;

  return (
    <section className="mx-auto max-w-7xl border-t border-border px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <SectionHeading title={t("audio.productions.title")} />

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {featured && (
          <ScrollReveal className="md:col-span-2">
            <ProductionCard production={featured} featured />
          </ScrollReveal>
        )}
        {rest.map((production, index) => (
          <ScrollReveal key={production.title} delay={index * 0.06}>
            <ProductionCard production={production} />
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
        <ScrollReveal>
          <h3 className="text-sm font-medium uppercase tracking-wide text-muted">
            {t("audio.productions.others")}
          </h3>
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {otherProductions.map((name) => (
              <li key={name} className="py-3 text-sm text-foreground">
                {name}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <h3 className="text-sm font-medium uppercase tracking-wide text-muted">
            {t("audio.productions.studio")}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {studioArtists.map((artist) => (
              <li
                key={artist}
                className="rounded-full border border-border px-3 py-1 text-sm text-foreground"
              >
                {artist}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
