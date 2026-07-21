import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Small Business Software Solutions",
  description:
    "Custom software solutions for small businesses including POS, inventory, and business management tools.",
};

export default function SmallBusiness() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Software for Small Businesses
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        Replace spreadsheets, paper processes, and disconnected tools with
        custom software designed for how your business actually operates.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {[
          { title: "Business Management", desc: "Manage customers, sales, employees, and reporting from one platform." },
          { title: "Inventory Tracking", desc: "Real-time inventory management with barcode scanning and purchase orders." },
          { title: "Mobile Solutions", desc: "Give your team access to business tools from anywhere." },
          { title: "Multi-Currency", desc: "Software that handles operations across multiple currencies." },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-border bg-surface p-6">
            <h2 className="font-semibold text-primary">{item.title}</h2>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <CTA href="/contact/">Discuss Your Project &rarr;</CTA>
      </div>
    </div>
  );
}
