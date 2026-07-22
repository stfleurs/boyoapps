import type { Metadata } from "next";
import Script from "next/script";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/metadata";

const product = products.find((p) => p.slug === "boyomart")!;
const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  title: "BoyoMart — Local Marketplace",
  description:
    "BoyoMart is a local buy-and-sell marketplace with listings, location-based discovery, messaging and search, built by Boyo Apps.",
  alternates: { canonical: `${siteUrl}/work/boyomart/` },
  openGraph: {
    title: "BoyoMart — Local Marketplace",
    description:
      "BoyoMart is a local marketplace platform connecting buyers and sellers with location-based discovery, in-app messaging, and powerful search.",
    url: `${siteUrl}/work/boyomart/`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "BoyoMart — Local Marketplace",
    description:
      "BoyoMart is a local marketplace platform connecting buyers and sellers with location-based discovery, in-app messaging, and powerful search.",
  },
};

const jsonLdBoyoMart = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "BoyoMart",
      applicationCategory: "SocialNetworking",
      operatingSystem: "Android",
      description:
        "Local buy-and-sell marketplace with listings, location-based discovery, messaging and search.",
      author: { "@type": "Organization", name: "Boyo Apps" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does BoyoMart help buyers find local sellers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BoyoMart uses location-based discovery to show nearby listings sorted by distance, helping buyers find local sellers and merchants conveniently.",
          },
        },
        {
          "@type": "Question",
          name: "Can sellers manage their listings through the app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. BoyoMart provides seller dashboards with listing management, order tracking, and in-app messaging to communicate with buyers.",
          },
        },
        {
          "@type": "Question",
          name: "Does BoyoMart support payments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BoyoMart facilitates marketplace connections between buyers and sellers, with payment processing handled outside the app as per local regulations.",
          },
        },
        {
          "@type": "Question",
          name: "What types of items and services are available on BoyoMart?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BoyoMart supports a wide range of categories including electronics, furniture, vehicles, real estate, services, and local business listings to meet diverse community needs.",
          },
        },
      ],
    },
  ],
};

export default function BoyoMartPage() {
  return (
    <>
      <Script
        id="boyomart-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBoyoMart) }}
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
              "Location-based discovery",
              "In-app messaging for buyers and sellers",
              "Powerful search and filtering",
              "Seller profiles and ratings",
              "Real-time listing updates",
              "Mobile-optimized interface",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-1 text-accent">✓</span>
                <span className="text-sm text-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
        <div className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8">
          {product.googlePlay && (
            <CTA href={product.googlePlay} variant="secondary">
              View on Google Play &rarr;
            </CTA>
          )}
          <CTA href="/contact/">Build Something Similar &rarr;</CTA>
        </div>
      </div>
    </>
  );
}