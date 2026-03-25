export type ServiceItem = {
  title: string;
  description: string;
  badge?: string;
};

export type ContactInfo = {
  phone: string;
  email: string;
  whatsappHref: string;
};

export type NavItem = {
  label: string;
  href: string;
};

const whatsappMessage = "Hello, I would like to enquire about print services from Zcreation.";

export const navItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const siteContent = {
  brand: {
    name: "Zcreation",
    tagline: "Print that brings your ideas to life"
  },
  hero: {
    kicker: "Printed materials for business and events",
    title: "Business cards, flyers, posters, and more, printed for the final result.",
    description:
      "Zcreation focuses on printed materials for businesses, side hustles, and events. Bring your own design or request design as an optional add-on before print.",
    contactNote: "WhatsApp is the fastest way to request a quote or place a print order."
  },
  contact: {
    phone: "0730204450",
    email: "zcreation@gmail.com",
    whatsappHref: `https://wa.me/27730204450?text=${encodeURIComponent(whatsappMessage)}`
  } satisfies ContactInfo,
  services: [
    {
      title: "Business cards",
      description: "Business cards printed for a clean, professional first impression.",
      badge: "Popular"
    },
    {
      title: "Flyers",
      description: "Flyers for promotions, launches, announcements, and event handouts.",
      badge: "High demand"
    },
    {
      title: "Thank-you cards",
      description: "Printed thank-you cards and inserts for packaging, gifting, and customer orders.",
      badge: "Customer touch"
    },
    {
      title: "Posters",
      description: "Posters for storefronts, campaigns, community notices, and promotional display.",
      badge: "High visibility"
    },
    {
      title: "Design add-on",
      description: "Already have a design? Send it through. Need one created first? Design can be added before print.",
      badge: "Optional"
    }
  ] satisfies ServiceItem[],
  portfolioPreview: {
    src: "/images/portfolio/thank-you-cards.svg",
    alt: "A collection of thank-you cards in different colors and styles"
  },
  about:
    "Zcreation is a print-focused business producing practical promotional materials for small businesses, side hustles, and events. Clients can supply their own artwork, and design support is available separately when needed before printing.",
  process: [
    {
      title: "Send your print request",
      description: "Share the item you need, the quantity, size, and either your ready-made design or the details for a design add-on."
    },
    {
      title: "Confirm the details",
      description: "Approve the print specs, and if design is needed, review and confirm the artwork before production."
    },
    {
      title: "Receive the printed result",
      description: "Collect the finished printed pieces, ready to hand out, package, display, or distribute."
    }
  ]
};
