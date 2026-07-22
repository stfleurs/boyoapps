import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/metadata";

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  title: "How We Built an Offline-First POS System — Lessons From Vendrex",
  description:
    "Lessons learned from building Vendrex, a POS platform designed to work reliably without constant internet connectivity.",
  alternates: { canonical: `${siteUrl}/blog/how-we-built-an-offline-first-pos-system/` },
};

export default function BlogPost() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <p className="mb-2 text-sm font-semibold tracking-widest text-accent">
        BLOG POST
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        How We Built an Offline-First POS System
      </h1>
      <p className="mt-4 text-sm text-muted">
        Published July 22, 2026
      </p>

      <section className="mt-12">
        <p className="leading-relaxed text-muted">
          Most POS systems assume you have a reliable internet connection. Walk
          into any retail store in many parts of the world, and that assumption
          falls apart. When connectivity drops, cloud-only POS systems stop
          working — and that means lost sales, frustrated customers, and
          employees scrambling for paper receipts.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          We built Vendrex to solve this problem. The result is a production
          POS platform that handles sales, inventory, purchasing, employee
          management, and financial reporting — all designed to work fully
          offline. Here is what we learned.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-primary">
          Why Offline-First Matters
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          The core insight behind Vendrex is simple: businesses cannot control
          their internet provider. A POS system that stops working because the
          Wi-Fi is down is not a POS system — it is a liability. We designed
          Vendrex with a local-first architecture where every piece of
          operational data lives on the device. The cloud is a sync target, not
          a requirement.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-primary">
          The Sync Protocol
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          The most significant engineering challenge was designing a sync
          protocol that could handle extended offline periods — days or weeks
          without connectivity. The system tracks changes at the record level,
          maintains a sync queue that survives app restarts, and handles
          conflicts through timestamp-based reconciliation.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          When the device reconnects, changes are transmitted in order. If the
          same record was modified on two devices, the most recent change wins.
          This strategy is simple, predictable, and has proven reliable in
          production.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-primary">
          Multi-Currency Done Right
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Many POS systems treat multi-currency as a display feature — convert
          the price and move on. Reality is more complex. A customer may pay
          in one currency while the product cost of goods sold is tracked in
          another. Vendrex stores every transaction with its original currency,
          the settlement currency, and the accounting base currency, alongside
          the exchange rate at the time of the transaction.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-primary">
          Barcode Scanning in the Wild
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Barcode scanning sounds simple until you try to scan a faded,
          damaged label under fluorescent lighting with a phone camera. We
          spent significant time tuning focus parameters, lighting detection,
          and decode algorithms to achieve acceptable scan rates in real-world
          retail environments.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-primary">
          The Result
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Vendrex is live and in production. It handles thousands of
          transactions across multiple businesses. It works online, offline,
          and everywhere in between. The full case study with architecture
          details is available on our site.
        </p>
      </section>

      <div className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8">
        <Link
          href="/work/vendrex-pos/"
          className="inline-flex items-center gap-1 font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
        >
          Read the full Vendrex case study &rarr;
        </Link>
        <Link
          href="/blog/"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent"
        >
          &larr; Back to blog
        </Link>
      </div>
    </div>
  );
}
