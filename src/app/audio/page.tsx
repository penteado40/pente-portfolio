import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBand } from "@/components/CtaBand";
import { AudioHero } from "@/components/audio/AudioHero";
import { AboutSection } from "@/components/audio/AboutSection";
import { TracksSection } from "@/components/audio/TracksSection";
import { ServicesSection } from "@/components/audio/ServicesSection";
import { GearCreditsSection } from "@/components/audio/GearCreditsSection";
import { audioSocialLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Felipe Penteado | Audio Engineer",
};

const emailHref =
  audioSocialLinks.find((link) => link.label === "Email")?.href ?? "mailto:felipe@example.com";

export default function AudioPage() {
  return (
    <div className="theme-audio flex flex-1 flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <AudioHero />
        <AboutSection />
        <TracksSection />
        <ServicesSection />
        <GearCreditsSection />
        <CtaBand titleKey="audio.cta.title" subtitleKey="audio.cta.subtitle" href={emailHref} />
      </main>
      <Footer links={audioSocialLinks} />
    </div>
  );
}
