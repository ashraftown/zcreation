import { navItems, siteContent } from "@/lib/site-content";

export function SiteFooter() {
  const { brand, contact } = siteContent;

  return (
    <footer className="site-footer">
      <div>
        <p className="footer-brand">{brand.name}</p>
        <p>{brand.tagline}</p>
      </div>
      <div className="footer-links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
      <div className="footer-contact">
        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
    </footer>
  );
}
