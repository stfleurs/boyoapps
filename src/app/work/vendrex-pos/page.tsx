import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { siteConfig } from "@/lib/metadata";
import Script from "next/script";

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  title: "Vendrex POS — Offline-First POS & Inventory Management System",
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

const challenges = [
  "Offline transaction processing",
  "Inventory synchronization across devices",
  "Barcode scanning in variable lighting",
  "Multi-currency pricing and reporting",
  "Employee access controls",
  "Sales and financial reporting",
  "Android + Web cross-platform delivery",
];

const engineering = [
  "Flutter",
  "Firebase",
  "Cloud Functions",
  "Offline persistence",
  "Camera barcode scanning",
  "Multi-currency data model",
];

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
          Vendrex POS — Offline-First POS &amp; Inventory Platform
        </h1>

        <section className="mt-12">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase">
            The Problem
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary">
            Small businesses need to manage sales and inventory even when
            internet connectivity isn&apos;t reliable.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase">
            The Challenge
          </h2>
          <p className="mt-4 text-sm font-semibold text-muted">
            The system needed to support:
          </p>
          <ul className="mt-3 space-y-2">
            {challenges.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-0.5 text-accent">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase">
            The Solution
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Boyo Apps designed an offline-first POS architecture that allows
            businesses to continue operating without a reliable connection,
            then synchronize their data automatically when connectivity
            returns. Every transaction, inventory change, and employee action
            works locally first — the cloud is a sync target, not a
            requirement.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase">
            Engineering
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {engineering.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-accent/20 bg-accent/5 px-3 py-1.5 text-sm font-medium text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase">
            Result
          </h2>
          <p className="mt-4 text-lg font-semibold text-primary">
            A complete production-ready business management platform available
            across mobile and web.
          </p>
          <div className="mt-6 rounded-xl border border-border bg-surface p-6">
            <p className="text-sm leading-relaxed text-muted">
              Vendrex handles sales, inventory, purchasing, employee management,
              and financial reporting. It runs in production across multiple
              businesses, processing transactions online and offline, and
              synchronizing data seamlessly when connectivity is available.
            </p>
          </div>
        </section>

        <section className="mt-16 border-t border-border pt-12">
          <h2 className="text-2xl font-bold text-primary">
            Engineering Deep Dive
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
                <span className="mt-1 text-accent">&#10003;</span>
                <span className="text-sm text-muted">{feature}</span>
              </li>
            ))}
          </ul>
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
                <span className="mt-1 text-accent">&#10003;</span>
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

        <div className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8">
          <a
            href="https://play.google.com/store/apps/details?id=vendrex.pos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all duration-300 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.5 4.45c-.02-.26-.19-.49-.45-.57-.23-.07-.47.04-.61.23l-2.3 3.01c-.25.33-.53.38-.81.15-.14-.12-.28-.26-.44-.41-.25-.23-.55-.23-.82 0-.16.15-.3.29-.44.41-.28.23-.55.29-.81.15L6.98 5.55c-.14-.19-.37-.28-.61-.23-.26.08-.43.31-.45.57-.05.72-.08 1.46-.08 2.19 0 2.85.27 5.57.8 8.12.14.67.7 1.09 1.14.67.52-.5 1.17-.82 1.84-.82.35 0 .7.12 1 .32.5.34.86.86 1.07 1.42.22.62.19 1.29-.1 1.87-.32.65-.85 1.07-1.43 1.16-.07.01-.13 0-.19-.02-.41-.14-.76-.38-1.02-.7-.3-.4-.5-.9-.54-1.42a28.9 28.9 0 0 1-.04-1.71c0-.39 0-.77-.02-1.15-.02-.6-.04-1.2-.05-1.8zm7.86 10.04c-.56.58-1.38.94-2.25 1.05-.88.11-1.75-.09-2.5-.54-.74-.45-1.29-1.13-1.59-1.91-.3-.78-.34-1.58-.11-2.34.27-.86.84-1.47 1.58-1.8.73-.33 1.53-.39 2.31-.16.78.23 1.39.75 1.76 1.35.32.51.4 1.08.25 1.65-.15.59-.6.96-1.14 1.15zM8.42 15.9c.53-.61 1.25-1 2.12-1.17.88-.17 1.76.07 2.5.64.74.58 1.31 1.44 1.62 2.39.32.97.37 1.97.1 2.92-.3.97-.94 1.67-1.73 2.07-.78.4-1.61.45-2.44.12-.84-.33-1.49-.96-1.87-1.75-.38-.79-.45-1.66-.15-2.46.32-.82.94-1.39 1.7-1.71zM9.12 9.04c-.19.19-.33.43-.4.69-.12.42-.05.87.18 1.2.23.32.56.5.93.5.38 0 .71-.18.93-.5.22-.33.3-.78.11-1.2-.19-.42-.45-.66-.71-.85-.26-.18-.56-.25-.9-.25-.34 0-.64.07-.9.22-.27.15-.45.38-.52.66z" />
            </svg>
            Get it on Google Play
          </a>
          <CTA href="https://vendrex.store/" variant="secondary">
            Visit Vendrex &rarr;
          </CTA>
          <CTA href="/contact/">Build Something Similar &rarr;</CTA>
        </div>
      </div>
    </>
  );
}
