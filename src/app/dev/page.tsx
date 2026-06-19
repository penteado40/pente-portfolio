"use client";

import Link from "next/link";
import { ArrowLeftIcon as ArrowLeft } from "@phosphor-icons/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { socialLinks } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function DevPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8"
      >
        <p className="font-mono text-sm tracking-[0.3em] text-accent">
          {t("dev.comingSoon.label")}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {t("dev.comingSoon.title")}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
          {t("dev.comingSoon.description")}
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_var(--color-accent)] active:scale-[0.98]"
        >
          <ArrowLeft size={16} weight="bold" aria-hidden />
          {t("dev.comingSoon.cta")}
        </Link>
      </main>
      <Footer links={socialLinks} />
    </>
  );
}
