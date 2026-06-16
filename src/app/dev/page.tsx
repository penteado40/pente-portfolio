import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBand } from "@/components/CtaBand";
import { DevHero } from "@/components/dev/DevHero";
import { AboutSection } from "@/components/dev/AboutSection";
import { SkillsSection } from "@/components/dev/SkillsSection";
import { ProjectsSection } from "@/components/dev/ProjectsSection";
import { socialLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Felipe Penteado | Systems Developer",
};

const emailHref = socialLinks.find((link) => link.label === "Email")?.href ?? "mailto:felipe@example.com";

export default function DevPage() {
  return (
    <div className="theme-dev flex flex-1 flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <DevHero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CtaBand titleKey="dev.cta.title" subtitleKey="dev.cta.subtitle" href={emailHref} />
      </main>
      <Footer links={socialLinks} />
    </div>
  );
}
