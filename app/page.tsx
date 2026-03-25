import { AboutProcess } from "@/components/about-process";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="site-shell">
      <Hero />
      <Services />
      <Portfolio />
      <AboutProcess />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
