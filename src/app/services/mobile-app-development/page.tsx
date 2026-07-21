import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Custom Mobile App Development for Businesses",
  description:
    "Cross-platform mobile applications designed around your business, users and real-world requirements. Android, offline-first, cloud-synced apps.",
};

export default function MobileAppDevelopment() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Custom Mobile App Development
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Cross-platform mobile applications designed around your business, users
        and real-world requirements. From Android to cross-platform solutions,
        we build apps that work reliably.
      </p>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-primary">What We Build</h2>
          <ul className="mt-6 space-y-4">
            {[
              "Business mobile apps",
              "Consumer mobile applications",
              "Offline-first mobile experiences",
              "Cloud-synchronized applications",
              "Barcode scanning & data capture",
              "Real-time collaboration",
              "Multi-currency & internationalized apps",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-accent">&check;</span>
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-surface p-8">
          <h2 className="text-2xl font-bold text-primary">Related Work</h2>
          <div className="mt-6 space-y-4">
            {[
              { name: "Tally Cart", href: "/work/tally-cart/" },
              { name: "Vendrex", href: "/work/vendrex-pos/" },
              { name: "Solar Align Pro", href: "/work/solar-align/" },
              { name: "NeXT Up", href: "/work/next-up/" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg border border-border p-4 transition-colors hover:border-accent"
              >
                <span className="font-medium text-primary">{item.name}</span>
                <span className="ml-2 text-sm text-accent">View case study &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <CTA href="/contact/">Start Your Mobile Project &rarr;</CTA>
      </div>
    </div>
  );
}
