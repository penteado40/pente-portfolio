import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HubContent } from "@/components/hub/HubContent";
import { socialLinks } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Header />
      <HubContent />
      <Footer links={socialLinks} />
    </>
  );
}
