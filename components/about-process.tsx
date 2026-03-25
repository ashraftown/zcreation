import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/lib/site-content";

export function AboutProcess() {
  return (
    <section className="content-section about-section" id="about">
      <div className="about-copy">
        <SectionHeading
          eyebrow="About Zcreation"
          title="Custom cards, flyers, and poster work shaped around your idea"
          description={siteContent.about}
        />
      </div>
      <div className="process-panel">
        {siteContent.process.map((step, index) => (
          <article key={step.title} className="process-step">
            <span className="process-index">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
