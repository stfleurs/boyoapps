import type { Metadata } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/metadata";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Custom Mobile & Web App Development | Boyo Apps",
    template: "%s | Boyo Apps",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: "Custom Mobile & Web App Development | Boyo Apps",
    description: siteConfig.description,
    url: "/",
    siteName: "Boyo Apps",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Mobile & Web App Development | Boyo Apps",
    description: siteConfig.description,
  },
  icons: {
    icon: "/images/favicon/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${geistMono.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Boyo Apps",
            url: siteConfig.url,
            description: siteConfig.description,
            founder: { name: "Steeve St Fleur" },
            contactPoint: {
              "@type": "ContactPoint",
              url: `${siteConfig.url}/contact/`,
              contactType: "sales",
            },

          }),
        }}
      />
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
