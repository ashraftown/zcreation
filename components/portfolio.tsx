import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { portfolioItems } from "@/lib/portfolio-data";

export function Portfolio() {
  return (
    <section className="content-section portfolio-section" id="portfolio">
      <SectionHeading
        eyebrow="Portfolio"
        title="Completed work that shows the style range"
        description="The gallery mixes flyers, business cards, thank-you cards, and client promotional pieces inspired by the supplied examples."
      />
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <figure key={item.src} className={`portfolio-card portfolio-card-${item.size}`}>
            <div className="portfolio-image-wrap">
              <Image src={item.src} alt={item.alt} width={900} height={1100} />
            </div>
            <figcaption>
              <span>{item.category}</span>
              <strong>{item.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
