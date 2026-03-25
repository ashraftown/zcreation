export type PortfolioItem = {
  src: string;
  alt: string;
  title: string;
  category: string;
  size: "wide" | "tall" | "square";
};

export const portfolioItems: PortfolioItem[] = [
  {
    src: "/images/portfolio/thank-you-cards.svg",
    alt: "Thank-you card designs displayed on a wood texture background",
    title: "Thank-you card collection",
    category: "Thank-you cards",
    size: "square"
  },
  {
    src: "/images/portfolio/plumbing-flyer.svg",
    alt: "Blue plumbing services flyer and business card design",
    title: "Plumbing flyer package",
    category: "Flyers",
    size: "tall"
  },
  {
    src: "/images/portfolio/carwash-flyer.svg",
    alt: "Carwash flyer with a bright blue car and water graphics",
    title: "Fast & Clean flyer",
    category: "Flyers",
    size: "tall"
  },
  {
    src: "/images/portfolio/business-cards.svg",
    alt: "Assorted business card designs shown together",
    title: "Business card mix",
    category: "Business cards",
    size: "wide"
  },
  {
    src: "/images/portfolio/mixed-client-work.svg",
    alt: "Mixed client work collage including carwash, insurance, and cleaning service designs",
    title: "Mixed client work",
    category: "Mixed client work",
    size: "square"
  }
];
