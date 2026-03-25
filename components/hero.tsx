import Image from "next/image";
import { navItems, siteContent } from "@/lib/site-content";

const featuredNotes = ["Business cards", "Flyers", "Thank-you cards", "Posters"];
const heroStats = [
  { value: "01", label: "Print-first service" },
  { value: "24h", label: "Fast replies on WhatsApp" },
  { value: "BYOD", label: "Bring your own design" }
];

export function Hero() {
  const { brand, contact, hero, portfolioPreview } = siteContent;

  return (
    <section className="hero-section">
      <div className="hero-orb hero-orb-left" aria-hidden="true" />
      <div className="hero-orb hero-orb-right" aria-hidden="true" />
      <header className="topbar">
        <a href="#" className="brand-lockup" aria-label={`${brand.name} home`}>
          <span className="brand-mark">ZC</span>
          <span>
            <strong>{brand.name}</strong>
            <small>{brand.tagline}</small>
          </span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">{hero.kicker}</p>
          <h1>{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>

          <div className="hero-chip-row" aria-label="Featured services">
            {featuredNotes.map((item) => (
              <span key={item} className="hero-chip">
                {item}
              </span>
            ))}
          </div>

          <div className="cta-row">
            <a className="button button-primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
            <a className="button button-secondary" href={`tel:${contact.phone}`}>
              Call now
            </a>
            <a className="button button-ghost" href="#portfolio">
              View portfolio
            </a>
          </div>

          <div className="hero-proof-strip" aria-label="Studio highlights">
            {heroStats.map((item) => (
              <div key={item.label} className="hero-proof-item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Featured Zcreation work">
          <div className="visual-frame visual-frame-large">
            <Image
              src="/images/brand/hero-brand-card.svg"
              alt="Zcreation brand artwork in cream, burgundy, and gold"
              width={600}
              height={450}
              priority
            />
          </div>
          <div className="visual-frame visual-frame-floating">
            <Image src={portfolioPreview.src} alt={portfolioPreview.alt} width={500} height={620} />
          </div>
          <div className="hero-contact-card">
            <p className="contact-card-label">Direct contact</p>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <p>{hero.contactNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
