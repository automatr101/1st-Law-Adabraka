import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1st Law — Legal Excellence, Every Step of the Way",
  description:
    "1st Law is a dynamic multi-practice law firm in Adabraka, Accra, Ghana. Corporate, litigation, real estate, employment, family, and criminal defense.",
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
