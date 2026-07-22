import type { Metadata } from "next";
import Script from "next/script";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/metadata";

const product = products.find((p) => p.slug === "next-up")!;
const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  title: "NeXT Up — Cross-Device Reminder & Productivity App",
  description:
    "NeXT Up is a cross-device reminder and productivity application with cloud synchronization, built by Boyo Apps.",
  alternates: { canonical: `${siteUrl}/work/next-up/` },
  openGraph: {
    title: "NeXT Up — Cross-Device Reminder & Productivity App",
    description:
      "NeXT Up keeps you organized across devices with smart reminders, task management, and seamless cloud sync.",
    url: `${siteUrl}/work/next-up/`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeXT Up — Cross-Device Reminder & Productivity App",
    description:
      "NeXT Up keeps you organized across devices with smart reminders, task management, and seamless cloud sync.",
  },
};

const jsonLdNextUp = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "NeXT Up",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "Android",
      description:
        "Cross-device reminder and productivity application with cloud synchronization.",
      author: { "@type": "Organization", name: "Boyo Apps" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does NeXT Up sync across devices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NeXT Up uses cloud synchronization to keep your reminders and tasks updated across all your devices in real time.",
          },
        },
        {
          "@type": "Question",
          name: "Can I set recurring reminders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. NeXT Up supports recurring reminders with customizable intervals including daily, weekly, monthly, and custom patterns.",
          },
        },
        {
          "@type": "Question",
          name: "Does NeXT Up work offline?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NeXT Up stores data locally on your device and syncs to the cloud when connectivity is available, ensuring your reminders are always accessible.",
          },
        },
        {
          "@type": "Question",
          name: "Can I organize tasks with categories or labels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. NeXT Up allows you to categorize tasks and reminders, making it easy to filter and focus on specific areas of your work or life.",
          },
        },
      ],
    },
  ],
};

export default function NextUpPage() {
  return (
    <>
      <Script
        id="next-up-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdNextUp) }}
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
              "Cross-device synchronization",
              "Smart reminders with customizable intervals",
              "Task management with categories",
              "Cloud backup and restore",
              "Offline functionality",
              "Intuitive mobile interface",
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