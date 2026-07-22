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
        software that works reliably in real-world conditions &mdash; online
        and offline, across currencies, and at scale.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          What Retail Software We Build
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-primary">Point of Sale</h3>
            <p className="mt-2 text-sm text-muted">
              Modern POS systems with offline capability, multi-currency support,
              and real-time inventory tracking. Process sales, print receipts,
              and accept payments even when the internet is down.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-primary">Inventory Management</h3>
            <p className="mt-2 text-sm text-muted">
              Track stock across locations, manage purchase orders, receive
              low-stock alerts, and get real-time inventory insights from any
              device.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-primary">Multi-Currency &amp; Multi-Store</h3>
            <p className="mt-2 text-sm text-muted">
              Handle sales and inventory across multiple currencies and store
              locations from a single platform, with accurate financial
              reporting in your base currency.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-primary">Barcode &amp; Scanning</h3>
            <p className="mt-2 text-sm text-muted">
              Camera-based barcode scanning for rapid checkout, inventory
              receiving, stock counts, and product lookup across thousands of
              SKUs.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Why Retail Businesses Need Custom Software
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Off-the-shelf retail software forces businesses to adapt their
          operations to the software. Custom solutions do the opposite. When
          you need a specific workflow &mdash; accepting multiple currencies at
          the register, tracking inventory by case and unit, printing receipts
          in a specific format, or generating customized sales reports &mdash;
          generic POS systems either cannot do it or require expensive
          workarounds.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          We build retail software from the ground up around your actual
          operations. Our offline-first approach means your business never
          stops selling, even when the Wi-Fi goes down. Multi-currency is
          built into the data model, not added as an afterthought. Inventory
          updates happen in real time, whether scanned at the register or
          adjusted from the back office.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Related Capabilities
        </h2>
        <div className="mt-6 space-y-4">
          {[
            {
              title: "Offline-First Architecture",
              desc: "Full POS and inventory functionality without internet connectivity, with automatic cloud sync when reconnected.",
            },
            {
              title: "Purchase Order Management",
              desc: "Create, approve, and track purchase orders. Receive stock against POs with barcode verification.",
            },
            {
              title: "Employee & Role Management",
              desc: "Granular permissions for cashiers, managers, and owners. Track who performed which action and when.",
            },
            {
              title: "Reporting & Analytics",
              desc: "Sales summaries, inventory turnover, profit analysis, and employee performance metrics accessible from any device.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border p-4">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <a
          href="/work/vendrex-pos/"
          className="block rounded-lg border border-border p-4 transition-colors hover:border-accent"
        >
          <span className="font-medium text-primary">See Vendrex &rarr;</span>
          <p className="mt-1 text-sm text-muted">
            Our offline-first POS and business management platform &mdash; the
            real product behind our retail expertise
          </p>
        </a>
      </div>

      <div className="mt-12">
        <CTA href="/contact/">Discuss Your Retail Project &rarr;</CTA>
      </div>
    </div>
  );
}
