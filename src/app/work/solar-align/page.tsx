import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Solar Align Pro Case Study",
  description:
    "How Boyo Apps built a solar panel alignment and ROI tool using device sensors and location data.",
};

export default function SolarAlignCaseStudy() {
  const product = products.find((p) => p.slug === "solar-align")!;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <p className="mb-2 text-sm font-semibold tracking-widest text-accent">
        CASE STUDY
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Building a Solar Optimization Application
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
          Solar Align Pro helps solar energy professionals and enthusiasts
          optimize panel positioning using device sensors and location-based
          calculations.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-primary">The Problem</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Solar panel efficiency depends heavily on proper alignment. Existing
          tools were either expensive professional equipment or inaccurate
          consumer approximations with no scientific basis.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-primary">The Solution</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Solar Align Pro leverages the device&apos;s built-in sensors combined
          with location data and specialized solar calculations to provide
          accurate panel alignment guidance and ROI projections.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-primary">Key Features</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Device sensor-based alignment",
            "Location-aware calculations",
            "ROI analysis & projections",
            "Offline functionality",
            "Solar position tracking",
            "Professional-grade accuracy",
          ].map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-1 text-accent">✓</span>
              <span className="text-sm text-muted">{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8">
        <CTA href="/contact/">Build Something Similar &rarr;</CTA>
      </section>
    </div>
  );
}
