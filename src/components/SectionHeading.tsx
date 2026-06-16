import { ScrollReveal } from "@/components/ScrollReveal";

type SectionHeadingProps = {
  title: string;
};

/** Section heading with a short accent rule, revealed on scroll. */
export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <div className="flex items-center gap-4">
        <span aria-hidden className="h-px w-8 shrink-0 bg-accent" />
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      </div>
    </ScrollReveal>
  );
}
