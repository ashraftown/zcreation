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

const whatsappMessage = "Hello, I would like to enquire about design services from Zcreation.";

export const navItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const siteContent = {
  brand: {
    name: "Zcreation",
    tagline: "Brings your business cards & flyers to life"
  },
  hero: {
    kicker: "Custom print-ready design",
    title: "Bring your cards, flyers, posters, and branded pieces to life.",
    description:
      "Zcreation designs bold promotional materials for businesses and personal brands, with a style that stands out in hand and on display.",
    contactNote: "WhatsApp is the fastest way to get started."
  },
  contact: {
    phone: "0730204450",
    email: "zcreation@gmail.com",
    whatsappHref: `https://wa.me/27730204450?text=${encodeURIComponent(whatsappMessage)}`
  } satisfies ContactInfo,
  services: [
    {
      title: "Business cards",
      description: "Sharp card layouts built to make first impressions feel polished and memorable.",
      badge: "Popular"
    },
    {
      title: "Flyers",
      description: "Promotional flyers designed for announcements, offers, launches, and events.",
      badge: "Print-ready"
    },
    {
      title: "Thank-you cards",
      description: "Branded inserts and appreciation cards for customer packaging and gifts.",
      badge: "Customer touch"
    },
    {
      title: "Posters",
      description: "Bold poster compositions for storefronts, promotions, community notices, and campaigns.",
      badge: "High visibility"
    },
    {
      title: "Custom requests",
      description: "Need something beyond the standard list? Zcreation also handles tailored promotional design work.",
      badge: "Custom"
    }
  ] satisfies ServiceItem[],
  portfolioPreview: {
    src: "/images/portfolio/thank-you-cards.svg",
    alt: "A collection of thank-you cards in different colors and styles"
  },
  about:
    "Zcreation focuses on custom promotional materials that help small businesses, side hustles, and personal brands present themselves clearly. The work blends practical contact information with attention-grabbing layout, colour, and typography.",
  process: [
    {
      title: "Share your idea",
      description: "Send the business name, service details, colours, and contact information you want included."
    },
    {
      title: "Approve the design",
      description: "Review the concept, request changes if needed, and confirm the direction before final delivery."
    },
    {
      title: "Receive your final design",
      description: "Get a polished design you can use for printing, promotion, or online sharing."
    }
  ]
};
