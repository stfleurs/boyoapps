import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { siteConfig } from "@/lib/metadata";
import Script from "next/script";

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  title: "Custom Business Application Development | Boyo Apps",
  description:
    "POS systems, inventory management, dashboards, internal tools and custom business software built for real-world operations — offline-first, multi-currency, and designed to scale.",
  alternates: { canonical: `${siteUrl}/services/business-app-development/` },
  openGraph: {
    title: "Custom Business Application Development | Boyo Apps",
    description:
      "Inventory systems, POS applications, dashboards, internal tools and custom software tailored to your business operations.",
    url: `${siteUrl}/services/business-app-development/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Business Application Development | Boyo Apps",
    description:
      "Inventory systems, POS applications, dashboards, internal tools and custom software tailored to your business operations.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Business Application Development",
  description:
    "POS systems, inventory management, employee tools, reporting dashboards, and custom business software built for real-world operational conditions.",
  provider: { "@type": "Organization", name: "Boyo Apps" },
  areaServed: "Worldwide",
  serviceType: "Business Application Development",
};

export default function BusinessAppDevelopment() {
  return (
    <>
      <Script
        id="business-dev-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="mb-2 text-sm font-semibold tracking-widest text-accent">
          SERVICE
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Custom Business Applications
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Inventory systems, POS applications, dashboards, internal tools and
          custom software — built around your actual business operations, not
          forced into generic templates.
        </p>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">
            What We Build
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Business software is fundamentally different from consumer apps.
            It must handle complex data models, enforce business rules,
            support multiple user roles, integrate with existing systems,
            and remain operational during every critical business hour. Our
            approach to business applications reflects these realities.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Point-of-Sale (POS) Systems",
                desc: "Complete POS platforms that handle sales processing, receipt printing, payment recording, and transaction history — online and offline.",
              },
              {
                title: "Inventory Management",
                desc: "Real-time inventory tracking with barcode scanning, stock level alerts, purchase order management, and multi-location support.",
              },
              {
                title: "Internal Business Dashboards",
                desc: "Web-based dashboards for monitoring sales, inventory turnover, employee performance, and operational metrics at a glance.",
              },
              {
                title: "Employee Management",
                desc: "Role-based access, time tracking, performance logging, and staff management tools integrated into your business workflow.",
              },
              {
                title: "Customer Management",
                desc: "Customer records, purchase history, loyalty tracking, and communication tools that help you build better customer relationships.",
              },
              {
                title: "Reporting & Analytics",
                desc: "Custom report builders and analytics views that transform operational data into actionable business intelligence.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border p-5"
              >
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">
            Our Approach to Business Software
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-primary">
                Offline-First by Necessity
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                When offline operation is important to the business, we
                design applications with local data storage and
                synchronization so critical workflows can continue during
                connectivity interruptions. This approach is proven in
                production by Vendrex, our offline-first POS platform
                deployed in real retail environments.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary">
                Multi-Currency &amp; International
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                Businesses operating across borders or serving international
                customers need software that handles multiple currencies
                natively — not as a display conversion, but as a core data
                model capability. Our business applications track
                transactions in their original currency, convert for
                reporting as needed, and maintain accurate financial records
                regardless of the currencies involved.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary">
                Role-Based Access &amp; Security
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                Different employees need different levels of access. Owners
                see financial reports and employee data. Managers handle
                inventory and purchasing. Cashiers process sales. Our
                applications implement granular role-based access controls
                that ensure each user sees and does only what their role
                requires.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary">
                Built to Integrate
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                Business software does not exist in isolation. We design
                custom API layers that connect your new application with
                existing accounting systems, e-commerce platforms, payment
                processors, and third-party services. Data flows between
                systems automatically, eliminating duplicate data entry and
                reducing errors.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-8">
            <h2 className="text-xl font-bold text-primary">
              Technical Capabilities
            </h2>
            <ul className="mt-4 space-y-3">
              {[
                "Offline-first data architecture",
                "Multi-currency financial data models",
                "Role-based access control",
                "Barcode & QR code scanning",
                "Receipt printing (Bluetooth & Wi-Fi)",
                "Real-time data synchronization",
                "Custom API & integration layer",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span className="text-sm text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8">
            <h2 className="text-xl font-bold text-primary">
              Proof in Production
            </h2>
            <p className="mt-2 text-sm text-muted">
              Our flagship business application:
            </p>
            <div className="mt-4 space-y-3">
              <a
                href="/work/vendrex-pos/"
                className="block rounded-lg border border-border p-4 transition-colors hover:border-accent"
              >
                <span className="font-medium text-primary">Vendrex</span>
                <p className="mt-1 text-xs text-muted">
                  Complete POS and inventory management platform with
                  offline-first architecture, multi-currency support, and
                  cross-platform Android + web deployment.
                </p>
                <span className="mt-1 inline-block text-sm text-accent">
                  View case study &rarr;
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">
            Why Businesses Choose Boyo Apps
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "We Operate Our Own Business Software",
                desc: "Vendrex runs in production. We eat our own cooking. Every lesson we learn from supporting real users goes directly into the applications we build for clients.",
              },
              {
                title: "We Understand Operational Reality",
                desc: "We build for the conditions businesses actually operate in — intermittent connectivity, multi-currency transactions, varied user skill levels, and demanding hours.",
              },
              {
                title: "Long-Term Partnership",
                desc: "Business software evolves. We build applications that can grow with your business and we stay engaged after launch for ongoing support and development.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-border p-5">
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold text-primary">
                How do you handle data security in business applications?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                We implement role-based access control, encrypt data both
                locally and in transit, and follow security best practices
                for authentication and session management. For sensitive
                financial data, we design audit trails and access logging
                into the application architecture.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Can you integrate with our existing accounting or ERP
                system?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. We build custom API adapters that connect your new
                application to existing systems. Whether you use a
                third-party platform, custom ERP software, or a legacy
                database, we can design the integration layer to sync data
                automatically.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Do you build mobile business apps, web apps, or both?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                We build both. Many of our business applications combine an
                Android mobile app for field or floor operations with a web
                dashboard for back-office management. We design the
                architecture so both platforms share the same data and
                business logic.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                What if my business needs a very specific workflow?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                That is exactly why businesses come to us. Unlike off-the-shelf
                software that forces you to adapt your process, we build
                applications around your specific workflows, business rules,
                and operational requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                How do you handle offline data to prevent loss?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                We use local-first storage with a sync engine that queues
                changes made offline and transmits them in order when
                connectivity returns. Conflict resolution strategies —
                typically last-writer-wins with timestamp tracking — prevent
                data loss when multiple devices modify the same records.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                How much does custom business software cost?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Costs vary significantly based on complexity, platform
                requirements, integrations, and timeline. We provide
                detailed project proposals after understanding your specific
                needs. Contact us to discuss your project and we will
                provide a scope and estimate.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-16">
          <CTA href="/contact/">Discuss Your Business App &rarr;</CTA>
        </div>
      </div>
    </>
  );
}
