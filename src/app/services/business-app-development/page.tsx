import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Custom Business App Development | Boyo Apps",
  description:
    "Inventory systems, POS applications, dashboards, internal tools and custom software tailored to your business operations.",
};

export default function BusinessAppDevelopment() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Custom Business Applications
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Inventory systems, POS applications, dashboards, internal tools and
        custom software &mdash; built around your actual business operations.
      </p>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-primary">What We Build</h2>
          <ul className="mt-6 space-y-4">
            {[
              "Point-of-sale (POS) systems",
              "Inventory management software",
              "Internal business dashboards",
              "Employee management tools",
              "Customer management systems",
              "Purchase order & procurement",
              "Reporting & analytics",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-accent">✓</span>
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-surface p-8">
          <h2 className="text-2xl font-bold text-primary">Primary Proof</h2>
          <div className="mt-6 space-y-4">
            <a
              href="/work/vendrex-pos/"
              className="block rounded-lg border border-border p-4 transition-colors hover:border-accent"
            >
              <span className="font-medium text-primary">Vendrex</span>
              <span className="ml-2 text-sm text-accent">View case study &rarr;</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <CTA href="/contact/">Discuss Your Business App &rarr;</CTA>
      </div>
    </div>
  );
}
