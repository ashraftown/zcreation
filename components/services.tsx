import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/lib/site-content";

export function Services() {
  return (
    <section className="content-section services-section" id="services">
      <SectionHeading
        eyebrow="Services"
        title="Print-ready design work with real promotional impact"
        description="Zcreation creates custom visuals for everyday business marketing, event promotion, and branded handouts."
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
