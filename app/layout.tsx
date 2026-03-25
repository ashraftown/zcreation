import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zcreation | Business Cards, Flyers, Posters & Custom Design",
  description:
    "Zcreation creates bold business cards, flyers, thank-you cards, posters, and custom promotional designs with WhatsApp, phone, and email contact options.",
  openGraph: {
    title: "Zcreation | Business Cards, Flyers, Posters & Custom Design",
    description:
      "Custom print-ready promotional materials for businesses and personal brands.",
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
