import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/metadata";
import Script from "next/script";

const product = products.find((p) => p.slug === "vendrex-pos")!;
const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  title: "Vendrex POS — Offline-First POS & Inventory Management System | Boyo Apps",
  description:
    "How Boyo Apps built Vendrex: a complete offline-first POS and inventory management platform with multi-currency support, barcode scanning, and real-time cloud sync for businesses.",
  alternates: { canonical: `${siteUrl}/work/vendrex-pos/` },
  openGraph: {
    title: "Vendrex POS — Offline-First POS & Inventory Case Study",
    description:
      "How Boyo Apps built an offline-first, multi-currency POS and inventory management platform for businesses in connectivity-constrained markets.",
    url: `${siteUrl}/work/vendrex-pos/`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendrex POS — Offline-First POS & Inventory Case Study",
    description:
      "How Boyo Apps built an offline-first, multi-currency POS and inventory management platform for businesses in connectivity-constrained markets.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Vendrex POS",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android, Web",
      description:
        "Complete POS and inventory management software with offline support, multi-currency operations and business management tools.",
      url: "https://vendrex.store/",
      author: { "@type": "Organization", name: "Boyo Apps" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does Vendrex handle offline transactions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vendrex stores all transaction data locally on the device using an embedded database. When connectivity is restored, changes sync automatically to the cloud with conflict resolution to prevent data loss or duplication.",
          },
        },
        {
          "@type": "Question",
          name: "Can Vendrex manage multiple currencies simultaneously?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Vendrex includes a built-in multi-currency engine that supports real-time conversion, separate pricing per currency, and accurate financial reporting across currencies.",
          },
        },
        {
          "@type": "Question",
          name: "Is Vendrex available on both mobile and desktop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vendrex is available as an Android mobile application for in-store operations and as a web application for back-office management, inventory oversight, and reporting.",
          },
        },
        {
          "@type": "Question",
          name: "Does Vendrex support barcode scanning for inventory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Vendrex integrates with device cameras for barcode scanning, enabling quick product lookup, price retrieval, and inventory updates during receiving and sales.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of reporting does Vendrex provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vendrex provides sales reporting, inventory turnover analysis, employee performance metrics, purchase order tracking, and financial summaries that help businesses make data-driven decisions.",
          },
        },
        {
          "@type": "Question",
          name: "Who typically uses Vendrex?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vendrex is designed for retail stores, grocery shops, wholesale distributors, and small to medium businesses that need a reliable POS system that works in real-world connectivity conditions.",
          },
        },
      ],
    },
  ],
};

export default function VendrexCaseStudy() {
  return (
    <>
      <Script
        id="vendrex-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          <h2 className="text-2xl font-bold text-primary">Project Overview</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Vendrex is a complete point-of-sale and business management
            platform designed and built by Boyo Apps. It replaces traditional
            cash registers and disconnected spreadsheets with a unified
            mobile and web system that handles sales, inventory, purchasing,
            employee management, and financial reporting.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The platform was built to address a fundamental gap in the retail
            software market: most POS systems require constant internet
            connectivity, yet many businesses operate in areas where reliable
            connectivity is not guaranteed. Vendrex was architected from the
            ground up as an offline-first system, ensuring that a network
            outage never stops a sale.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            The Business Problem
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Small and medium retail businesses face a persistent challenge:
            they need modern POS capabilities but cannot rely on stable
            internet connectivity throughout their operating hours. Cloud-only
            POS systems fail during network interruptions, forcing businesses
            to revert to paper records or lose sales entirely.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Additionally, many of these businesses operate in multi-currency
            environments — accepting payments in multiple currencies while
            managing inventory valued in different denominations. Existing
            POS software either lacked multi-currency support entirely or
            implemented it as an afterthought, leading to accounting
            discrepancies and reporting inaccuracies.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Inventory management was another pain point. Businesses tracked
            stock manually or through disconnected spreadsheets, leading to
            overselling, stockouts, and lost revenue. They needed a system
            where a barcode scan at the point of sale instantly updated
            inventory levels across all channels.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Why a Custom Solution Was Required
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Off-the-shelf POS systems offered a poor fit for three reasons.
            First, most required monthly subscriptions that were cost-prohibitive
            for small businesses. Second, their offline capabilities were
            limited to caching recent data rather than supporting full
            offline operations with conflict resolution. Third, they did not
            handle multi-currency workflows in a way that matched how
            businesses actually operate — accepting multiple currencies at
            the register while tracking cost of goods sold in a base currency.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            A custom solution allowed Boyo Apps to design the data model,
            synchronization protocol, and user experience specifically around
            these real-world requirements rather than forcing businesses to
            adapt to generic software limitations.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Our Approach &amp; Solution
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Boyo Apps designed Vendrex as a cross-platform application with a
            shared core architecture. The Android application handles
            in-store POS operations, while the web dashboard provides
            back-office management, reporting, and administrative functions.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Data flows through a local-first architecture. The mobile
            application stores all operational data in an embedded local
            database. When the device has connectivity, changes sync to the
            cloud backend. When offline, the application continues operating
            with full functionality. Conflict resolution is handled through
            a last-writer-wins strategy with timestamp-based reconciliation.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The user interface was designed for retail staff with varying
            levels of technical experience. The POS flow guides cashiers
            through transactions step by step, while the inventory and
            reporting interfaces provide power users with the depth they
            need without overwhelming casual operators.
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
            Offline Data Synchronization
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            The most significant engineering challenge was designing a sync
            protocol that could handle extended offline periods — days or
            weeks without connectivity — while ensuring no data loss when
            the device reconnected. The system had to track changes at the
            record level, maintain a sync queue that could survive app
            restarts, and handle conflicts when the same record was modified
            on multiple devices.
          </p>

          <h3 className="mt-6 text-lg font-bold text-primary">
            Multi-Currency Data Model
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            Every financial transaction in Vendrex involved multiple
            currencies: the sale currency, the settlement currency, and the
            accounting base currency. The data model had to store all three
            alongside real-time exchange rates, ensuring that reports could
            be generated in any currency without rounding errors or
            reconciliation issues.
          </p>

          <h3 className="mt-6 text-lg font-bold text-primary">
            Barcode Scanning Performance
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            Barcode scanning had to work reliably across a wide range of
            products and label conditions — damaged barcodes, low-contrast
            printing, and reflective surfaces. The camera-based scanner
            required careful tuning of focus parameters, lighting detection,
            and decode algorithms to achieve acceptable scan rates in
            real-world retail environments.
          </p>

          <h3 className="mt-6 text-lg font-bold text-primary">
            Cross-Platform Architecture
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            Maintaining feature parity between the Android POS app and the
            web dashboard required a shared business logic layer and
            consistent API contracts. The web dashboard had to handle large
            inventory datasets and complex reporting queries that the mobile
            app did not need, while still sharing the same data model and
            business rules.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Architecture Highlights
          </h2>
          <ul className="mt-4 space-y-4">
            {[
              "Offline data synchronization with timestamp-based conflict resolution",
              "Real-time multi-currency conversion engine with exchange rate management",
              "Cross-platform Android + Web architecture with shared data layer",
              "Cloud sync with local-first data storage and offline queue",
              "Role-based access control for employees, managers, and administrators",
              "Barcode scanning integrated directly into POS and inventory workflows",
              "Receipt printing over Bluetooth and Wi-Fi thermal printers",
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
            The Android POS application was designed for use on handheld
            devices and tablets with touch-first interactions, barcode
            scanner integration, and Bluetooth printer support. The web
            dashboard targeted desktop browsers with keyboard and mouse
            workflows optimized for data entry, reporting, and batch
            operations.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Both platforms share a common API layer and data model, ensuring
            that inventory counts, sales records, and customer data remain
            consistent regardless of which platform is used to access or
            modify them. This cross-platform approach allows businesses to
            use Android devices on the sales floor and web browsers in the
            back office, all working from the same dataset.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            What Vendrex Demonstrates About Boyo Apps
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Vendrex showcases Boyo Apps&apos; ability to design and deliver
            production-grade business software that operates reliably in
            real-world conditions. The project required deep thinking about
            data synchronization, multi-currency financial modeling, and
            cross-platform architecture — the same engineering disciplines
            that apply to building custom business applications for clients.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            It also demonstrates our approach to product design: understanding
            the actual working conditions of end users and building software
            that adapts to those conditions rather than requiring users to
            adapt to the software.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Related Services
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Looking to build similar software for your business? Boyo Apps
            offers{" "}
            <a
              href="/services/mobile-app-development/"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              mobile app development
            </a>
            ,{" "}
            <a
              href="/services/business-app-development/"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              business application development
            </a>
            , and{" "}
            <a
              href="/services/web-app-development/"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              web application development
            </a>{" "}
            services. We also build{" "}
            <a
              href="/services/saas-development/"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              SaaS products
            </a>{" "}
            for companies launching subscription-based platforms.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold text-primary">
                How does Vendrex handle offline transactions?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Vendrex stores all transaction data locally on the device
                using an embedded database. When connectivity is restored,
                changes sync automatically to the cloud with conflict
                resolution to prevent data loss or duplication.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Can Vendrex manage multiple currencies simultaneously?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. Vendrex includes a built-in multi-currency engine that
                supports real-time conversion, separate pricing per currency,
                and accurate financial reporting across currencies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Is Vendrex available on both mobile and desktop?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Vendrex is available as an Android mobile application for
                in-store operations and as a web application for back-office
                management, inventory oversight, and reporting.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Does Vendrex support barcode scanning for inventory?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. Vendrex integrates with device cameras for barcode
                scanning, enabling quick product lookup, price retrieval, and
                inventory updates during receiving and sales.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                What kind of reporting does Vendrex provide?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Vendrex provides sales reporting, inventory turnover analysis,
                employee performance metrics, purchase order tracking, and
                financial summaries that help businesses make data-driven
                decisions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Who typically uses Vendrex?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Vendrex is designed for retail stores, grocery shops,
                wholesale distributors, and small to medium businesses that
                need a reliable POS system that works in real-world
                connectivity conditions.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8">
          <CTA href="https://vendrex.store/" variant="secondary">
            Visit Vendrex &rarr;
          </CTA>
          <CTA href="/contact/">Build Something Similar &rarr;</CTA>
        </section>
      </div>
    </>
  );
}
