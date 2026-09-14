import { Inter } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import ScrollToTop from "@/components/ScrollToTop";
import SkipLink from "@/components/SkipLink";
import ThemeProvider from "@/components/ThemeProvider";
import MotionProvider from "@/components/MotionProvider";
import { BUSINESS, SITE_NAME, SITE_URL } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Handcrafted Kitchens & Bedrooms in Cheshire`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Bespoke, handcrafted kitchens and bedrooms designed and fitted across Cheshire. Celebrating 50 years in business — visit our Hazel Grove showroom.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_GB",
  },
};

function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.addressLine1,
      addressLocality: "Hazel Grove, Stockport",
      addressRegion: "Cheshire",
      postalCode: "SK7 4AX",
      addressCountry: "GB",
    },
    telephone: BUSINESS.phoneDisplay,
    openingHoursSpecification: BUSINESS.hours.map(([days, hours]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: days,
      description: hours,
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <MotionProvider>
            <LocalBusinessJsonLd />
            <SkipLink />
            <ScrollToTop />
            <SiteChrome>{children}</SiteChrome>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
