import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1st Law — Legal Excellence, Every Step of the Way",
  description:
    "1st Law is a dynamic multi-practice law firm in Adabraka, Accra, Ghana. Specialising in Corporate, Litigation, Real Estate, Employment, Family, and Criminal Defence.",
  metadataBase: new URL("https://1st-law-website.vercel.app"),
  openGraph: {
    title: "1st Law | Adabraka — Legal Excellence, Every Step of the Way",
    description:
      "A relationship-driven multi-practice law firm in Adabraka, Accra, Ghana. Professional legal counsel since 2005.",
    url: "https://1st-law-website.vercel.app",
    siteName: "1st Law",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "1st Law — Legal Excellence, Every Step of the Way",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1st Law | Adabraka — Legal Excellence, Every Step of the Way",
    description:
      "A relationship-driven multi-practice law firm in Adabraka, Accra, Ghana. Professional legal counsel since 2005.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "law firm Ghana",
    "lawyer Accra",
    "legal services Adabraka",
    "corporate law Ghana",
    "civil litigation Accra",
    "real estate lawyer Ghana",
    "criminal defense Accra",
    "1st Law",
    "legal counsel Ghana",
  ],
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-[#0A0A0A] text-[#FAFAFA] antialiased">
        {children}
      </body>
    </html>
  );
}
