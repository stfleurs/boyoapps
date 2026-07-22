import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/metadata";
import Script from "next/script";

const product = products.find((p) => p.slug === "tally-cart")!;
const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  title: "Tally Cart — Real-Time Collaborative Grocery & Budget App",
  description:
    "How Boyo Apps built Tally Cart: a real-time collaborative grocery list and budget tracking app with shelf-price barcode scanning, multi-currency support, and offline functionality.",
  alternates: { canonical: `${siteUrl}/work/tally-cart/` },
  openGraph: {
    title: "Tally Cart — Collaborative Grocery & Budget App Case Study",
    description:
      "How Boyo Apps built a real-time collaborative grocery and budget application with barcode scanning, price tracking, and multi-currency support.",
    url: `${siteUrl}/work/tally-cart/`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tally Cart — Collaborative Grocery & Budget App Case Study",
    description:
      "How Boyo Apps built a real-time collaborative grocery and budget application with barcode scanning, price tracking, and multi-currency support.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Tally Cart",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Android",
      description:
        "Shared grocery list and budget tracking application with real-time collaboration, shelf-price scanning and shopping expense management.",
      url: "https://tallycart-prod.web.app/",
      author: { "@type": "Organization", name: "Boyo Apps" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does Tally Cart handle real-time list collaboration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tally Cart uses a cloud-synchronized data model where list changes made by one user appear instantly on all connected devices. Each user sees item additions, removals, and check-offs in real time during the shopping trip.",
          },
        },
        {
          "@type": "Question",
          name: "Can I scan barcodes to check prices in-store?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Tally Cart includes a barcode scanner that lets you scan shelf labels to retrieve prices and add items to your list with their current price, helping you track spending as you shop.",
          },
        },
        {
          "@type": "Question",
          name: "Does Tally Cart work without internet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Tally Cart functions fully offline, storing data locally on the device. Lists, scans, and budget updates sync automatically when connectivity is restored.",
          },
        },
        {
          "@type": "Question",
          name: "Can I track spending against a budget?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tally Cart lets you set a budget for each shopping trip. As items are scanned or added, the running total updates in real time, helping you stay within your target.",
          },
        },
        {
          "@type": "Question",
          name: "Does Tally Cart support international users?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Tally Cart supports multiple languages and handles multiple currencies, making it suitable for users in different countries and international households.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Tally Cart different from a simple notes app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tally Cart is purpose-built for grocery shopping. It provides real-time collaboration, barcode-based price scanning, budget tracking per trip, expense history, and multi-currency support — features no generic notes app can offer.",
          },
        },
      ],
    },
  ],
};

export default function TallyCartCaseStudy() {
  return (
    <>
      <Script
        id="tally-cart-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          <h2 className="text-2xl font-bold text-primary">Project Overview</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Tally Cart is a mobile application designed and built by Boyo Apps
            that transforms grocery shopping from a solo errand into a
            collaborative, budget-aware experience. It combines shared
            shopping lists with real-time synchronization, barcode-based shelf
            price scanning, trip-level budget tracking, and multi-currency
            support in a single intuitive app.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The app addresses a universal problem: households struggle to
            coordinate grocery shopping across multiple people, track what
            they are spending while in the store, and maintain visibility
            into their grocery expenses over time. Tally Cart solves these
            problems by making the shopping list a live, shared document
            that updates in real time as anyone adds, checks off, or scans
            items.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            The User Problem
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Families, roommates, and partners face a familiar frustration:
            coordinating grocery shopping across multiple people without
            duplicate purchases, forgotten items, or budget surprises. A
            family member picks up milk on the way home, not knowing someone
            else already bought it. A roommate shops without checking the
            shared list and misses items. The weekly grocery bill exceeds
            expectations because nobody tracked spending while shopping.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Existing solutions — generic notes apps, messaging groups, or
            paper lists — lack the features needed for effective grocery
            coordination. They do not provide real-time updates, price
            tracking, budget awareness, or the ability to scan shelf labels
            for accurate cost comparison.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Why a Custom Solution Was Required
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Generic productivity and notes applications lack several
            capabilities that grocery shopping specifically requires.
            Real-time collaboration in a notes app requires all users to
            be online and actively refreshing. Budget tracking requires
            manual data entry of prices. Barcode scanning — the fastest
            way to identify a product and its price — is absent from most
            list applications.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Building a purpose-built application allowed Boyo Apps to design
            the entire experience around the grocery shopping workflow:
            starting a trip, sharing access with household members, scanning
            items as they go into the cart, watching the running total
            approach the budget, and reviewing the completed trip afterward.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Our Approach &amp; Solution
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Tally Cart was built as a native Android application with a
            cloud-connected data layer designed for real-time synchronization.
            Each shopping trip is a shared session. When one user scans a
            barcode or checks off an item, the change propagates to all
            connected devices within seconds.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The barcode scanning feature uses the device camera to read
            product barcodes and look up prices from a curated product
            database. When a price is not available in the database, users
            can manually enter it, contributing to the shared knowledge
            base for future trips.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Budget tracking is integrated directly into the shopping
            experience. Each trip has a configurable budget target. As items
            are added with their scanned or entered prices, the running
            total updates in real time, color-coding the progress from green
            to amber to red as the budget is approached.
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

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Technical &amp; Engineering Challenges
          </h2>

          <h3 className="mt-6 text-lg font-bold text-primary">
            Real-Time Synchronization at Scale
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            The core technical challenge was delivering real-time list
            updates without requiring always-on connectivity. A shared
            shopping list may have multiple participants — one in the store
            scanning items, two at home adding to the list — and every
            change must reach every participant promptly. The solution
            combines a local-first data store with a cloud sync layer that
            propagates changes incrementally, minimizing data transfer while
            maintaining consistency.
          </p>

          <h3 className="mt-6 text-lg font-bold text-primary">
            Barcode Scanning Reliability
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            Scanning shelf labels in a grocery store presents unique
            challenges: glossy packaging creates reflections, curved
            surfaces on bottles distort barcodes, and low-light conditions
            in some store aisles reduce camera performance. The scanning
            pipeline had to handle these conditions gracefully while
            delivering fast decode times. The solution involved tuning
            camera focus modes, implementing adaptive exposure, and
            applying image preprocessing before decode attempts.
          </p>

          <h3 className="mt-6 text-lg font-bold text-primary">
            Multi-Currency Pricing
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            Users in different countries or cross-border households need to
            see prices in their preferred currency. The app maintains a
            currency conversion layer that displays prices in the user&apos;s
            chosen currency while storing base prices in their original
            currency to avoid rounding accumulation across conversions.
          </p>

          <h3 className="mt-6 text-lg font-bold text-primary">
            Offline-First Data Model
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            A shopping trip cannot pause because connectivity drops. Tally
            Cart stores all list data, scan history, and budget records
            locally on the device. When connectivity is restored, changes
            sync to the cloud and propagate to other participants. The
            sync protocol uses change tracking to transmit only what has
            changed since the last sync, keeping data transfer minimal.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Architecture Highlights
          </h2>
          <ul className="mt-4 space-y-4">
            {[
              "Local-first architecture with cloud synchronization",
              "Real-time data propagation across multiple devices",
              "Integrated barcode scanning with adaptive camera pipeline",
              "Multi-currency support with configurable display preferences",
              "Offline operation with automatic sync recovery",
              "Trip-level budget tracking with real-time running totals",
              "Internationalization for language and regional formatting",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-accent">✓</span>
                <span className="text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Cross-Platform Considerations
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Tally Cart was initially developed for Android, with the
            architecture designed to support future expansion to other
            platforms. The data layer and synchronization protocol are
            platform-agnostic, meaning the same cloud backend can serve
            Android and future iOS or web clients. The barcode scanning
            pipeline is specific to the Android camera API, but the product
            lookup and price database are shared services.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The user interface follows Material Design guidelines for a
            familiar Android experience, while maintaining a clean,
            uncluttered layout that works across phone screen sizes from
            compact handsets to large tablets.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            What Tally Cart Demonstrates About Boyo Apps
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Tally Cart demonstrates Boyo Apps&apos; ability to build consumer
            mobile applications with real-time collaborative features,
            offline-first reliability, and practical everyday utility. The
            project showcases our expertise in real-time data synchronization,
            camera-based scanning, multi-currency handling, and
            internationalization — technical capabilities that transfer
            directly to business and enterprise applications.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            It also reflects our product design philosophy: identify a
            specific, universal problem, and solve it with software that is
            simple to use but technically robust under the surface.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Related Services
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            If you are considering building a collaborative mobile
            application or a consumer app with real-time features, Boyo
            Apps provides{" "}
            <a
              href="/services/mobile-app-development/"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              mobile app development
            </a>{" "}
            and{" "}
            <a
              href="/services/saas-development/"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              SaaS development
            </a>{" "}
            services. We also build{" "}
            <a
              href="/services/web-app-development/"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              web applications
            </a>{" "}
            and{" "}
            <a
              href="/services/business-app-development/"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              business software
            </a>{" "}
            with similar real-time and offline capabilities.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold text-primary">
                How does Tally Cart handle real-time list collaboration?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Tally Cart uses a cloud-synchronized data model where list
                changes made by one user appear instantly on all connected
                devices. Each user sees item additions, removals, and
                check-offs in real time during the shopping trip.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Can I scan barcodes to check prices in-store?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. Tally Cart includes a barcode scanner that lets you scan
                shelf labels to retrieve prices and add items to your list
                with their current price, helping you track spending as you
                shop.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Does Tally Cart work without internet?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. Tally Cart functions fully offline, storing data locally
                on the device. Lists, scans, and budget updates sync
                automatically when connectivity is restored.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Can I track spending against a budget?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Tally Cart lets you set a budget for each shopping trip. As
                items are scanned or added, the running total updates in real
                time, helping you stay within your target.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Does Tally Cart support international users?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. Tally Cart supports multiple languages and handles
                multiple currencies, making it suitable for users in
                different countries and international households.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                What makes Tally Cart different from a simple notes app?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Tally Cart is purpose-built for grocery shopping. It provides
                real-time collaboration, barcode-based price scanning, budget
                tracking per trip, expense history, and multi-currency
                support — features no generic notes app can offer.
              </p>
            </div>
          </div>
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
    </>
  );
}
