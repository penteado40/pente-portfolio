"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { audioContent, type Track } from "@/lib/content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TrackEmbed } from "@/lib/embeds/TrackEmbed";

function TrackCard({ track, featured }: { track: Track; featured?: boolean }) {
  return (
    <div className={`flex flex-col gap-4 ${featured ? "md:flex-row md:items-center md:gap-8" : ""}`}>
      {track.cover && (
        <div
          className={`relative shrink-0 overflow-hidden rounded-2xl border border-border ${
            featured ? "aspect-square w-full md:w-56" : "aspect-square w-full"
          }`}
        >
          <Image
            src={track.cover}
            alt=""
            fill
            sizes={featured ? "(min-width: 768px) 224px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            className="object-cover"
          />
        </div>
      )}
      <div className={`space-y-3 ${featured ? "min-w-0 flex-1" : ""}`}>
        <div>
          <h3 className="text-base font-medium">{track.title}</h3>
          <p className="text-sm text-muted">{track.artist}</p>
        </div>
        <TrackEmbed url={track.url} title={track.title} />
      </div>
    </div>
  );
}

export function TracksSection() {
  const { t, language } = useLanguage();
  const { tracks } = audioContent[language];
  const [featured, ...rest] = tracks;

  return (
    <section
      id="tracks"
      className="mx-auto max-w-7xl border-t border-border px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <SectionHeading title={t("audio.tracks.title")} />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {featured && (
          <ScrollReveal className="md:col-span-2">
            <TrackCard track={featured} featured />
          </ScrollReveal>
        )}
        {rest.map((track, index) => (
          <ScrollReveal key={track.title} delay={index * 0.06}>
            <TrackCard track={track} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
