"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useLanguage } from "@/lib/i18n";
import { audioPhotos } from "@/lib/content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

export function PhotosSection() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = audioPhotos.map((p) => ({ src: p.src, alt: p.alt }));

  return (
    <section className="mx-auto max-w-7xl border-t border-border px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <SectionHeading title={t("audio.photos.title")} />

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {audioPhotos.map((photo, i) => (
          <ScrollReveal key={photo.src} delay={i * 0.06}>
            <button
              type="button"
              className="group relative w-full overflow-hidden rounded-2xl border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              aria-label={photo.alt}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </ScrollReveal>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </section>
  );
}
