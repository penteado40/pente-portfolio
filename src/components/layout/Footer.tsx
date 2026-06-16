"use client";

import {
  EnvelopeSimpleIcon as EnvelopeSimple,
  GithubLogoIcon as GithubLogo,
  LinkedinLogoIcon as LinkedinLogo,
  SoundcloudLogoIcon as SoundcloudLogo,
  InstagramLogoIcon as InstagramLogo,
  type Icon,
} from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n";
import type { SocialLink } from "@/lib/content";

const ICONS: Record<string, Icon> = {
  Email: EnvelopeSimple,
  GitHub: GithubLogo,
  LinkedIn: LinkedinLogo,
  SoundCloud: SoundcloudLogo,
  Instagram: InstagramLogo,
};

export function Footer({ links }: { links: SocialLink[] }) {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-border">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-muted">
          {t("nav.brand")} &middot; {t("footer.rights")}
        </p>
        <ul className="flex flex-wrap gap-3">
          {links.map((link) => {
            const isExternal = link.href.startsWith("http");
            const LinkIcon = ICONS[link.label];
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {LinkIcon && <LinkIcon size={16} weight="light" aria-hidden />}
                  {link.label === "Email" ? t("common.contact") : link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
