import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Tally Cart Case Study",
  description:
    "How Boyo Apps built a real-time collaborative grocery and budget application with barcode scanning.",
};

export default function TallyCartCaseStudy() {
  const product = products.find((p) => p.slug === "tally-cart")!;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <p className="mb-2 text-sm font-semibold tracking-widest text-accent">
        CASE STUDY
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Building a Real-Time Collaborative Grocery &amp; Budget App
      </h1>

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
        <h2 className="text-2xl font-bold text-primary">Overview</h2>
        <p className="mt-4 leading-relaxed text-muted">
          {product.longDescription}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-primary">The Problem</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Families and roommates needed a way to collaborate on grocery
          shopping in real-time, track spending against budgets, and scan
          shelf prices &mdash; all without requiring everyone to be in the
          same store at the same time.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-primary">The Solution</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Tally Cart combines shared grocery lists with real-time
          collaboration, budget tracking, and barcode-based price scanning
          in a single intuitive mobile application.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-primary">Key Features</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Real-time list collaboration",
            "Shelf price barcode scanning",
            "Budget tracking per shopping trip",
            "Offline functionality",
            "Multi-currency support",
            "Subscription management",
            "Internationalization",
            "Cloud synchronization",
          ].map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-1 text-accent">✓</span>
              <span className="text-sm text-muted">{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8">
        <CTA href={product.website!} variant="secondary">
          Visit Tally Cart &rarr;
        </CTA>
        {product.googlePlay && (
          <CTA href={product.googlePlay} variant="secondary">
            View on Google Play &rarr;
          </CTA>
        )}
        <CTA href="/contact/">Build Something Similar &rarr;</CTA>
      </section>
    </div>
  );
}
