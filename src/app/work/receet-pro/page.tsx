import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/metadata";
import Script from "next/script";

const product = products.find((p) => p.slug === "receet-pro")!;
const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  title: "Receet Pro — Personal Finance App with Receipt Scanning & OCR",
  description:
    "How Boyo Apps built Receet Pro: a personal finance application with OCR-based receipt scanning, multi-currency expense tracking, budgeting tools, and financial insights.",
  alternates: { canonical: `${siteUrl}/work/receet-pro/` },
  openGraph: {
    title: "Receet Pro — Personal Finance & Receipt Scanning Case Study",
    description:
      "How Boyo Apps built a personal finance application with OCR receipt scanning, multi-currency expense tracking, budgeting, and financial insights.",
    url: `${siteUrl}/work/receet-pro/`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Receet Pro — Personal Finance & Receipt Scanning Case Study",
    description:
      "How Boyo Apps built a personal finance application with OCR receipt scanning, multi-currency expense tracking, budgeting, and financial insights.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Receet Pro",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Android",
      description:
        "Personal finance management application with OCR-based receipt scanning, multi-currency expense tracking, budget management, and financial insights.",
      author: { "@type": "Organization", name: "Boyo Apps" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does Receet Pro scan receipts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Receet Pro uses the device camera to capture receipt images and applies optical character recognition to extract merchant names, dates, line items, amounts, and currency information automatically.",
          },
        },
        {
          "@type": "Question",
          name: "Does Receet Pro support multiple currencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Receet Pro tracks expenses in multiple currencies and provides consolidated reporting in a user-selected base currency with real-time conversion rates.",
          },
        },
        {
          "@type": "Question",
          name: "Can I set budgets and track spending?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Receet Pro includes budget management tools that let you set spending limits by category or overall, track progress throughout the month, and receive notifications when approaching limits.",
          },
        },
        {
          "@type": "Question",
          name: "How are expenses categorized automatically?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Receet Pro uses a rule-based categorization engine that assigns categories based on merchant names, transaction types, and user-defined rules. Users can override or refine categories manually.",
          },
        },
        {
          "@type": "Question",
          name: "Is my financial data stored securely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Receet Pro encrypts data both locally on the device and during cloud synchronization. Receipt images and financial records are stored securely with access controlled through device authentication.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of financial insights does Receet Pro provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Receet Pro provides spending trends by category, monthly comparison reports, merchant-level expense breakdowns, currency exposure analysis, and budget adherence tracking to help users understand their financial habits.",
          },
        },
      ],
    },
  ],
};

export default function ReceetProCaseStudy() {
  return (
    <>
      <Script
        id="receet-pro-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="mb-2 text-sm font-semibold tracking-widest text-accent">
          CASE STUDY
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Building a Personal Finance &amp; Receipt Scanning App
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
            Receet Pro is a personal finance management application designed
            and built by Boyo Apps that combines optical character recognition
            for receipt scanning with multi-currency expense tracking,
            budgeting tools, and financial analytics — all in a single mobile
            application.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The app addresses a common financial pain point: tracking where
            money actually goes. Physical receipts get lost or fade. Digital
            records are scattered across banking apps, email confirmations,
            and paper statements. Understanding spending patterns across
            currencies and categories requires manual effort that most people
            do not sustain. Receet Pro automates the data entry work and
            provides the visibility needed to make informed financial
            decisions.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            The User Problem
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Managing personal finances across multiple currencies is a
            challenge that grows with every international transaction,
            cross-border purchase, or multi-currency income stream. Receipts
            accumulate in wallets and drawers. Credit card statements arrive
            in different currencies. Understanding total spending requires
            manual conversion and categorization that few people have the
            time or discipline to maintain.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Existing expense tracking applications typically require manual
            entry of every transaction or depend on bank account integration
            that may not be available for all financial institutions,
            particularly in emerging markets. Cash transactions — still a
            significant portion of spending in many economies — are
            invisible to card-linked tracking apps, creating a gap in
            financial visibility.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Why a Custom Solution Was Required
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Most personal finance applications are designed for single-currency
            users with bank account integration in developed financial
            markets. They do not handle multi-currency cash expenses well,
            nor do they provide receipt scanning that works across different
            receipt formats and languages.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Building Receet Pro as a custom solution allowed Boyo Apps to
            design the expense capture workflow around the universal
            starting point of financial tracking — the receipt — rather than
            assuming bank connectivity or manual data entry. The application
            was designed from the start for users who deal with multiple
            currencies, cash transactions, and diverse receipt formats.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Our Approach &amp; Solution
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Receet Pro&apos;s core workflow is simple: take a photo of a
            receipt, and the app extracts the relevant financial data. The
            OCR pipeline processes the receipt image to identify the merchant,
            transaction date, line items, individual amounts, total, currency,
            and payment method. The user reviews and confirms the extracted
            data — a process that takes seconds — and the expense is
            automatically categorized and recorded.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Behind the scanning interface, Receet Pro maintains a structured
            expense database organized by date, category, currency, merchant,
            and budget period. The analytics engine transforms this data
            into spending trends, category breakdowns, and budget tracking
            visualizations that give users a clear picture of their financial
            habits without requiring them to manually compile or analyze
            anything.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Budget management is integrated into the expense tracking flow.
            Users define monthly budgets by category — groceries, transport,
            dining, utilities — and Receet Pro tracks spending against each
            budget in real time, sending notifications when limits are
            approached or exceeded.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">Key Features</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Receipt scanning with OCR data extraction",
              "Multi-currency expense tracking",
              "Budget management with real-time tracking",
              "Financial insights and spending reports",
              "Automatic expense categorization",
              "Cloud synchronization for data backup",
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
            OCR Accuracy Across Receipt Formats
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            Receipts come in an enormous variety of formats: thermal paper
            that fades over time, faded ink on aged receipts, densely packed
            item lists, multiple currencies on a single receipt, handwritten
            totals on printed receipts, and receipts in different languages.
            The OCR pipeline had to handle this variability while reliably
            extracting the data fields that matter — merchant, date, total,
            and currency.
          </p>
          <p className="mt-2 leading-relaxed text-muted">
            The solution combines image preprocessing techniques —
            adaptive thresholding, deskewing, and contrast enhancement —
            with a structured extraction layer that understands common
            receipt layouts. Rather than treating the receipt as raw text,
            the extraction engine looks for patterns: dates in expected
            formats, totals near the bottom, currency symbols preceding
            amounts.
          </p>

          <h3 className="mt-6 text-lg font-bold text-primary">
            Multi-Currency Financial Data Model
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            Every expense in Receet Pro stores the original currency and
            amount alongside the user&apos;s base currency equivalent. This
            dual-currency data model ensures that reports can be generated
            in any currency without introducing conversion rounding errors.
            The exchange rate at the time of the transaction is stored with
            each record, providing an audit trail for historical analysis.
          </p>

          <h3 className="mt-6 text-lg font-bold text-primary">
            Categorization Engine
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            Automatically categorizing expenses requires mapping merchant
            names and transaction types to spending categories. Receet Pro
            implements a rule-based categorization system that learns from
            user corrections over time. When a user re-categorizes a
            transaction, the engine updates its rules to handle similar
            future transactions correctly — reducing manual categorization
            effort as the user continues using the app.
          </p>

          <h3 className="mt-6 text-lg font-bold text-primary">
            Offline Scanning and Sync
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            Users scan receipts in stores, markets, and restaurants —
            locations where connectivity may be limited. Receet Pro performs
            the full OCR pipeline on the device, storing extracted data
            locally. Cloud synchronization runs in the background when
            connectivity is available, ensuring data is backed up without
            requiring the user to be online during the scanning workflow.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Architecture Highlights
          </h2>
          <ul className="mt-4 space-y-4">
            {[
              "On-device OCR pipeline with receipt-specific image preprocessing",
              "Multi-currency data model with per-transaction exchange rate storage",
              "Rule-based categorization engine with learning from user corrections",
              "Offline-first architecture with background cloud synchronization",
              "Budget tracking with category-level spending limits and notifications",
              "Spending analytics with trend analysis and comparative reporting",
              "Secure local storage with encrypted data transmission",
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
            Receet Pro was developed for Android with the OCR pipeline and
            financial data model designed as portable modules. The
            categorization engine, multi-currency data model, and budget
            tracking logic are platform-independent, allowing the same
            business logic to be reused in a future web dashboard or iOS
            application.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The user interface is optimized for phone-sized screens, where
            receipt scanning is most natural, while maintaining a structure
            that would scale to tablet and desktop layouts for the analytics
            and reporting features.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            What Receet Pro Demonstrates About Boyo Apps
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Receet Pro showcases Boyo Apps&apos; ability to build applications
            that integrate computer vision — OCR-based data extraction from
            real-world documents — with financial data processing and
            analytics. This combination of image processing, financial data
            modeling, and user experience design demonstrates the cross-
            disciplinary engineering capability that we bring to custom
            software projects.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The project also reflects our approach to building applications
            that work in the user&apos;s actual environment — full offline
            support, multi-currency handling, and adaptability to diverse
            input formats — rather than requiring users to fit their
            workflow to the software&apos;s assumptions.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Related Services
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Applications that require document scanning, OCR, or financial
            data processing share architectural patterns that Boyo Apps has
            experience delivering. Our{" "}
            <a
              href="/services/mobile-app-development/"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              mobile app development
            </a>{" "}
            services cover camera integration, image processing, and
            on-device machine learning. We also develop{" "}
            <a
              href="/services/saas-development/"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              SaaS products
            </a>{" "}
            with analytics dashboards and{" "}
            <a
              href="/services/business-app-development/"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              business applications
            </a>{" "}
            that handle complex financial data processing.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold text-primary">
                How does Receet Pro scan receipts?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Receet Pro uses the device camera to capture receipt images
                and applies optical character recognition to extract merchant
                names, dates, line items, amounts, and currency information
                automatically.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Does Receet Pro support multiple currencies?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. Receet Pro tracks expenses in multiple currencies and
                provides consolidated reporting in a user-selected base
                currency with real-time conversion rates.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Can I set budgets and track spending?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Receet Pro includes budget management tools that let you set
                spending limits by category or overall, track progress
                throughout the month, and receive notifications when
                approaching limits.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                How are expenses categorized automatically?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Receet Pro uses a rule-based categorization engine that
                assigns categories based on merchant names, transaction types,
                and user-defined rules. Users can override or refine
                categories manually.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Is my financial data stored securely?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. Receet Pro encrypts data both locally on the device and
                during cloud synchronization. Receipt images and financial
                records are stored securely with access controlled through
                device authentication.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                What kind of financial insights does Receet Pro provide?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Receet Pro provides spending trends by category, monthly
                comparison reports, merchant-level expense breakdowns,
                currency exposure analysis, and budget adherence tracking to
                help users understand their financial habits.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8">
          <CTA href="/contact/">Build Something Similar &rarr;</CTA>
        </section>
      </div>
    </>
  );
}
