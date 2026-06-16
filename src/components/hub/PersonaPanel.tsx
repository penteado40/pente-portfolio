import Link from "next/link";
import Image from "next/image";
import type { Icon } from "@phosphor-icons/react";
import { ArrowRightIcon as ArrowRight } from "@phosphor-icons/react";

type PersonaPanelProps = {
  href: string;
  theme: "dev" | "audio";
  icon: Icon;
  title: string;
  description: string;
  cta: string;
  image: string;
  priority?: boolean;
};

export function PersonaPanel({
  href,
  theme,
  icon: PersonaIcon,
  title,
  description,
  cta,
  image,
  priority,
}: PersonaPanelProps) {
  return (
    <Link
      href={href}
      className={`theme-${theme} group relative flex flex-col justify-between gap-8 overflow-hidden border-border px-6 py-12 transition-colors sm:px-10 sm:py-16 ${
        theme === "dev" ? "border-b md:border-r md:border-b-0" : ""
      }`}
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          className="object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-80"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/10" />
      </div>

      <div className="relative flex size-14 items-center justify-center rounded-2xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
        <PersonaIcon size={28} weight="light" className="text-accent" aria-hidden />
      </div>

      <div className="relative space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <p className="max-w-sm text-base leading-relaxed text-muted">{description}</p>
      </div>

      <span className="relative inline-flex items-center gap-2 text-sm font-medium text-accent">
        {cta}
        <ArrowRight
          size={16}
          weight="bold"
          className="transition-transform group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  );
}
