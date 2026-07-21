import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { siteConfig } from "@/lib/metadata";
import Script from "next/script";

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  title: "SaaS Product Development Company | Boyo Apps",
  description:
    "From MVP to full-scale subscription platforms with authentication, billing, analytics and cloud infrastructure. We build SaaS applications that scale.",
  alternates: { canonical: `${siteUrl}/services/saas-development/` },
  openGraph: {
    title: "SaaS Product Development | Boyo Apps",
    description:
      "From MVP to full-scale subscription platforms with authentication, billing, analytics and cloud infrastructure.",
    url: `${siteUrl}/services/saas-development/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Product Development | Boyo Apps",
    description:
      "From MVP to full-scale subscription platforms with authentication, billing, analytics and cloud infrastructure.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SaaS Product Development",
  description:
    "End-to-end SaaS application development from MVP to full-scale subscription platforms with authentication, billing, analytics, and cloud infrastructure.",
  provider: { "@type": "Organization", name: "Boyo Apps" },
  areaServed: "Worldwide",
  serviceType: "SaaS Development",
};

export default function SaaSDevelopment() {
  return (
    <>
      <Script
        id="saas-dev-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="mb-2 text-sm font-semibold tracking-widest text-accent">
          SERVICE
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          SaaS Product Development
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          From MVP to full-scale subscription platforms with authentication,
          billing, analytics and cloud infrastructure. We take SaaS products
          from concept to launch and beyond.
        </p>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">
            What We Build
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            SaaS products are fundamentally different from one-off software
            projects. They must support multiple tenants, handle subscription
            billing, scale efficiently as the user base grows, and provide
            ongoing value that justifies recurring payments. Our approach to
            SaaS development reflects these realities from the first line of
            code.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "MVP Development & Validation",
                desc: "Minimum viable products designed to test market assumptions quickly, with just enough functionality to validate demand and gather user feedback.",
              },
              {
                title: "Subscription Billing Systems",
                desc: "Complete billing infrastructure with tiered pricing, free trials, payment gateway integration, invoicing, and subscription management dashboards.",
              },
              {
                title: "User Authentication & Authorization",
                desc: "Secure sign-up, login, password management, social authentication, and role-based access control for multi-user SaaS platforms.",
              },
              {
                title: "Analytics & Reporting Dashboards",
                desc: "Data visualization dashboards that give SaaS operators visibility into user activity, revenue metrics, churn rates, and feature adoption.",
              },
              {
                title: "Cloud Architecture & Scaling",
                desc: "Cloud infrastructure designed to scale from dozens to thousands of users without major architectural changes, with monitoring and alerting built in.",
              },
              {
                title: "API-First Platforms",
                desc: "SaaS products designed with APIs at the core, enabling integrations, third-party developer access, and headless front-end architectures.",
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
            Our Approach to SaaS Development
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-primary">
                Start with an MVP, Build Toward Scale
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                We believe in launching early and iterating based on real
                user feedback. Our SaaS development process begins with
                identifying the core value proposition and building only
                what is needed to test it in the market. The architecture
                is designed to support future growth, but we do not build
                features for hypothetical users. As the product gains
                traction, we expand functionality based on actual usage
                patterns and customer requests.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary">
                Multi-Tenant Architecture
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                For SaaS products that benefit from shared infrastructure,
                we typically use a multi-tenant architecture where each
                customer&apos;s data is isolated and secure while sharing the
                same application infrastructure. This approach keeps
                operational costs low as the customer base grows and
                simplifies deployment. For products with stricter isolation
                requirements, we can adapt the architecture accordingly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary">
                Billing &amp; Subscription Integration
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                Subscription billing is one of the most critical components
                of a SaaS product. We integrate payment gateways such as
                Stripe with support for tiered pricing, free trials,
                usage-based billing, coupon codes, and automated invoice
                generation. The billing system is designed to handle failed
                payments, subscription upgrades and downgrades, and
                prorated charges without manual intervention.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary">
                Analytics-First Mindset
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                SaaS businesses need visibility into how their product is
                being used. We build analytics tracking into the application
                from day one — monitoring user sign-ups, activation rates,
                feature adoption, retention, and revenue metrics. These
                analytics inform product decisions and help identify
                opportunities for improvement.
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
                "Multi-tenant architecture & data isolation",
                "Subscription billing & payment integration",
                "User authentication & role management",
                "Real-time data & collaboration features",
                "Cloud infrastructure & deployment (Firebase)",
                "Analytics tracking & reporting dashboards",
                "REST API design",
                "CI/CD pipeline & automated deployment",
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
              SaaS Experience in Production
            </h2>
            <p className="mt-2 text-sm text-muted">
              Our products include subscription-based applications and
              cloud-synced services that demonstrate our SaaS development
              capabilities:
            </p>
            <div className="mt-4 space-y-3">
              {[
                { name: "Vendrex", href: "/work/vendrex-pos/", desc: "Cross-platform POS with cloud sync and multi-user access" },
                { name: "GQRLY", href: "/work/gqrly/", desc: "QR code generation & analytics platform" },
                { name: "Tally Cart", href: "/work/tally-cart/", desc: "Collaborative shopping with shared real-time data" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg border border-border p-4 transition-colors hover:border-accent"
                >
                  <span className="font-medium text-primary">{item.name}</span>
                  <span className="ml-1 text-xs text-muted">
                    — {item.desc}
                  </span>
                  <span className="ml-2 text-sm text-accent">View &rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">
            Why Businesses Choose Boyo Apps for SaaS Development
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "We Build Our Own SaaS Products",
                desc: "We operate SaaS platforms ourselves. We understand subscription metrics, user retention, and the operational challenges that SaaS founders face because we live them.",
              },
              {
                title: "Full-Lifecycle Development",
                desc: "We take SaaS products from initial concept through MVP, launch, growth, and ongoing iteration — not just the initial build phase.",
              },
              {
                title: "Cross-Platform by Design",
                desc: "Many SaaS products benefit from both a web platform and a mobile companion app. We build both, sharing architecture and data layers between them.",
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
                How do you handle multi-tenancy in SaaS applications?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                We use a shared-database, isolated-data approach where all
                tenants share the same application infrastructure but each
                tenant&apos;s data is scoped through row-level tenant
                identifiers. This keeps operational costs low while
                maintaining data isolation and security.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                What payment systems do you integrate for SaaS billing?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                We integrate Stripe for subscription billing, with support
                for tiered pricing, free trials, usage-based billing,
                coupon codes, and automated invoice generation. We can
                also integrate region-specific payment processors as
                needed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                How long does it take to build an MVP for a SaaS product?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                A focused SaaS MVP with core functionality, user
                authentication, and basic billing can typically be built
                in 8 to 14 weeks. The timeline depends on complexity, the
                number of user roles, and integration requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Can you build both a web SaaS and a mobile companion app?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. Many of our SaaS products combine a web dashboard for
                administration and analytics with a mobile application for
                end users. We design a shared backend architecture that
                serves both platforms from the same data layer.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Do you provide ongoing support after the SaaS product
                launches?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. SaaS products require continuous development —
                feature requests, bug fixes, infrastructure maintenance,
                and platform updates. We offer ongoing retainer-based
                support and development partnerships for post-launch
                growth.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                What if I only have an idea and no technical background?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                That is a common starting point. We guide founders through
                the process — from refining the concept, defining the MVP
                scope, choosing the right technology stack, and building
                the product. You do not need a technical background to work
                with us; you just need a clear understanding of the problem
                you are solving.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-16">
          <CTA href="/contact/">Discuss Your SaaS Idea &rarr;</CTA>
        </div>
      </div>
    </>
  );
}
