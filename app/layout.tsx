import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zcreation | Business Cards, Flyers, Posters & Printing",
  description:
    "Zcreation is a print-focused business for business cards, flyers, thank-you cards, posters, and related printed materials, with optional design add-ons.",
  openGraph: {
    title: "Zcreation | Business Cards, Flyers, Posters & Printing",
    description:
      "Print-focused promotional materials with optional design support before production.",
    images: [
      {
        url: "/images/brand/hero-brand-card.svg",
        width: 1200,
        height: 900,
        alt: "Zcreation brand card"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
