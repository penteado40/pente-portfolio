"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlobeIcon as Globe } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n";

const navItems = [
  { href: "/", key: "nav.home" },
  { href: "/dev", key: "nav.dev" },
  { href: "/audio", key: "nav.audio" },
] as const;

export function Header() {
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {t("nav.brand")}
        </Link>

        <nav className="flex items-center gap-4 text-sm sm:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`relative pb-1 transition-colors after:absolute after:inset-x-0 after:-bottom-px after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-300 after:ease-out ${
                pathname === item.href
                  ? "text-accent after:scale-x-100"
                  : "text-muted after:scale-x-0 hover:text-foreground hover:after:scale-x-100"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "pt" : "en")}
            aria-label={t("common.languageToggle")}
            className="flex cursor-pointer items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            <Globe size={14} weight="bold" aria-hidden />
            {language.toUpperCase()}
          </button>
        </nav>
      </div>
    </header>
  );
}
