import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE, SITE_URL } from "@/lib/site";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${SITE.name} | Adabraka — ${SITE.tagline}`,
    description:
      "A relationship-driven multi-practice law firm in Adabraka, Accra, Ghana. Professional legal counsel since 2005.",
    url: SITE_URL,
    siteName: SITE.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${SITE.name} — ${SITE.tagline}` }],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Adabraka — ${SITE.tagline}`,
    description:
      "A relationship-driven multi-practice law firm in Adabraka, Accra, Ghana. Professional legal counsel since 2005.",
    images: ["/opengraph-image"],
  },
  keywords: [
    "law firm Ghana",
    "law firm Accra",
    "lawyer Accra",
    "lawyer Adabraka",
    "legal services Adabraka",
    "corporate law Ghana",
    "civil litigation Accra",
    "real estate lawyer Ghana",
    "criminal defense lawyer Accra",
    "family law Ghana",
    "employment law Ghana",
    "1st Law",
    "legal practitioners Ghana",
    "legal consultants Accra",
  ],
  category: "Legal Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <StructuredData />
      </head>
      <body className="min-h-full bg-[#0A0A0A] text-[#FAFAFA] antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
