import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights and technical articles from the Boyo Apps team on software development, mobile apps, and business technology.",
};

export default function Blog() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Blog
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Insights and technical articles from the Boyo Apps team on software
        development, mobile apps, and business technology.
      </p>

      <div className="mt-12 space-y-8">
        <Link
          href="/blog/how-we-built-an-offline-first-pos-system/"
          className="block rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent"
        >
          <p className="text-xs font-medium text-accent">July 22, 2026</p>
          <h2 className="mt-2 text-xl font-semibold text-primary">
            How We Built an Offline-First POS System
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Lessons learned from building Vendrex, a POS platform designed to
            work reliably without constant internet connectivity.
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
            Read post &rarr;
          </span>
        </Link>

        <div className="rounded-xl border border-border bg-surface p-6 opacity-60">
          <p className="text-xs font-medium text-muted">Coming soon</p>
          <h2 className="mt-2 text-xl font-semibold text-primary">
            Building Multi-Currency Software: What We Learned From Vendrex
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Multi-currency architecture isn&apos;t just about exchange rates. Here&apos;s what we discovered building a real-world multi-currency application.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6 opacity-60">
          <p className="text-xs font-medium text-muted">Coming soon</p>
          <h2 className="mt-2 text-xl font-semibold text-primary">
            Mobile App vs Web App: Which Does Your Business Need?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            A practical guide to choosing the right platform for your business application.
          </p>
        </div>
      </div>
    </div>
  );
}
