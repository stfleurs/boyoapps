import type { Metadata } from "next";
import Script from "next/script";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/metadata";

const product = products.find((p) => p.slug === "gqrly")!;
const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  title: "GQRLY — QR Code Analytics Platform",
  description:
    "GQRLY is a QR code generation and analytics platform with real-time tracking and campaign management by Boyo Apps.",
  alternates: { canonical: `${siteUrl}/work/gqrly/` },
  openGraph: {
    title: "GQRLY — QR Code Analytics Platform",
    description:
      "GQRLY provides QR code generation with detailed analytics, scan tracking, and campaign management for businesses.",
    url: `${siteUrl}/work/gqrly/`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "GQRLY — QR Code Analytics Platform",
    description:
      "GQRLY provides QR code generation with detailed analytics, scan tracking, and campaign management for businesses.",
  },
};

const jsonLdGqrly = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "GQRLY",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "QR code generation and analytics platform with real-time tracking and campaign management.",
      url: "https://gqrly.com/",
      author: { "@type": "Organization", name: "Boyo Apps" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does GQRLY track QR code scans?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GQRLY uses dynamic QR codes that redirect through its servers, enabling real-time tracking of scan events including timestamp, location, device, and referrer information.",
          },
        },
        {
          "@type": "Question",
          name: "Can I create custom QR codes with my branding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GQRLY allows you to customize QR code colors to match your brand, add logo overlays, and modify the visual appearance while maintaining scannability.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a limit to how many QR codes I can generate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GQRLY offers both free and paid plans with different limits on the number of active QR codes, scan history retention, and analytics features.",
          },
        },
        {
          "@type": "Question",
          name: "How does GQRLY help with campaign management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GQRLY provides campaign tracking with custom URLs, UTM parameter support, and analytics dashboards that help businesses measure QR code performance across different marketing channels.",
          },
        },
      ],
    },
  ],
};

export default function GQRlyPage() {
  return (
    <>
      <Script
        id="gqrly-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGqrly) }}
      />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="mb-2 text-sm font-semibold tracking-widest text-accent">
          PRODUCT
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {product.name}
        </h1>
        <p className="mt-4 text-lg text-muted">{product.shortDescription}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {product.capabilities.map((cap) => (
            <span
              key={cap}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
            >
              {cap}
            </span>
          ))}
        </div>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">
            About {product.name}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            {product.longDescription}
          </p>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">
            Key Features
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "QR code generation with branding options",
              "Real-time scan analytics and tracking",
              "Campaign management dashboard",
              "UTM parameter support",
              "Multi-user collaboration",
              "Exportable scan data",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-1 text-accent">✓</span>
                <span className="text-sm text-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
        <div className="mt-12 border-t border-border pt-8">
          <CTA href="/contact/">Build Something Similar &rarr;</CTA>
        </div>
      </div>
    </>
  );
}