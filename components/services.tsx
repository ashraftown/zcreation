import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/lib/site-content";

export function Services() {
  return (
    <section className="content-section services-section" id="services">
      <SectionHeading
        eyebrow="Services"
        title="Printed materials for everyday business and event needs"
        description="Zcreation prints business cards, flyers, posters, thank-you cards, and more. If you already have a design, send it through. If not, design can be added separately."
      />
      <div className="services-grid">
        {siteContent.services.map((service) => (
          <article key={service.title} className="service-card">
            <span className="service-badge">{service.badge}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
