import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Retail Software Solutions",
  description:
    "Custom retail software including POS, inventory management, and business operations tools for retail businesses.",
};

export default function Retail() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Software for Retail Businesses
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        From point-of-sale systems to inventory management, we build retail
        software that works reliably in real-world conditions.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="font-semibold text-primary">Point of Sale</h2>
          <p className="mt-2 text-sm text-muted">
            Modern POS systems with offline capability, multi-currency support,
            and real-time inventory tracking.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="font-semibold text-primary">Inventory Management</h2>
          <p className="mt-2 text-sm text-muted">
            Track stock across locations, manage purchase orders, and get
            real-time inventory insights.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <a
          href="/work/vendrex-pos/"
          className="block rounded-lg border border-border p-4 transition-colors hover:border-accent"
        >
          <span className="font-medium text-primary">See Vendrex &rarr;</span>
          <p className="mt-1 text-sm text-muted">
            Our POS and business management platform
          </p>
        </a>
      </div>
      <div className="mt-10">
        <CTA href="/contact/">Discuss Your Retail Project &rarr;</CTA>
      </div>
    </div>
  );
}
