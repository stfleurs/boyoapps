import type { Metadata } from "next";
import Script from "next/script";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/metadata";

const product = products.find((p) => p.slug === "solar-merge")!;
const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  title: "Solar Merge — Solar-Themed Mobile Game",
  description:
    "Solar Merge is a casual solar-themed merge game for mobile devices, built by Boyo Apps.",
  alternates: { canonical: `${siteUrl}/work/solar-merge/` },
  openGraph: {
    title: "Solar Merge — Solar-Themed Mobile Game",
    description:
      "Solar Merge is a casual mobile game with solar energy themes, combining puzzle mechanics with educational elements.",
    url: `${siteUrl}/work/solar-merge/`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Merge — Solar-Themed Mobile Game",
    description:
      "Solar Merge is a casual mobile game with solar energy themes, combining puzzle mechanics with educational elements.",
  },
};

const jsonLdSolarMerge = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Solar Merge",
      applicationCategory: "GameApplication",
      operatingSystem: "Android",
      description:
        "An engaging solar-themed merge game for mobile devices with educational elements about renewable energy.",
      author: { "@type": "Organization", name: "Boyo Apps" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What type of game is Solar Merge?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solar Merge is a casual merge puzzle game where players combine solar-themed elements to progress through levels while learning about renewable energy concepts.",
          },
        },
        {
          "@type": "Question",
          name: "Does Solar Merge work offline?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Solar Merge is designed for offline gameplay, making it perfect for playing anywhere without an internet connection.",
          },
        },
        {
          "@type": "Question",
          name: "Is Solar Merge educational?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solar Merge combines puzzle mechanics with educational elements about solar energy and renewable resources, making learning fun and engaging.",
          },
        },
        {
          "@type": "Question",
          name: "What platforms is Solar Merge available on?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solar Merge is currently available for Android devices. Future platform expansion is being considered.",
          },
        },
      ],
    },
  ],
};

export default function SolarMergePage() {
  return (
    <>
      <Script
        id="solar-merge-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSolarMerge) }}
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
              "Solar-themed merge puzzle mechanics",
              "Educational renewable energy elements",
              "Offline gameplay support",
              "Progressive level system",
              "Engaging casual gameplay",
              "Mobile-optimized interface",
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