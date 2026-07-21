import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Vendrex POS Case Study",
  description:
    "How Boyo Apps built an offline-first, multi-currency POS and inventory management platform for businesses.",
};

export default function VendrexCaseStudy() {
  const product = products.find((p) => p.slug === "vendrex-pos")!;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <p className="mb-2 text-sm font-semibold tracking-widest text-accent">
        CASE STUDY
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Building an Offline-First POS &amp; Inventory Platform
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
          Businesses in markets with unreliable connectivity need POS and
          inventory systems that continue functioning during network outages.
          Many existing solutions require constant internet access, making them
          unsuitable for real-world business operations.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-primary">The Solution</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Vendrex was designed from the ground up as an offline-first
          application. Sales, inventory and customer data are stored locally
          and automatically synchronize when connectivity is restored.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-primary">Key Features</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Complete POS with receipt printing",
            "Real-time inventory tracking",
            "Multi-currency support",
            "Offline-first architecture",
            "Barcode scanning",
            "Purchase order management",
            "Employee management",
            "Sales reporting & analytics",
          ].map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-1 text-accent">&check;</span>
              <span className="text-sm text-muted">{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-primary">Technical Highlights</h2>
        <ul className="mt-4 space-y-4">
          {[
            "Offline data synchronization with conflict resolution",
            "Real-time multi-currency conversion engine",
            "Cross-platform Android + Web architecture",
            "Cloud sync with local-first data storage",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 text-accent">&check;</span>
              <span className="text-sm text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8">
        <CTA href="https://vendrex.store/" variant="secondary">
          Visit Vendrex &rarr;
        </CTA>
        <CTA href="/contact/">Build Something Similar &rarr;</CTA>
      </section>
    </div>
  );
}
