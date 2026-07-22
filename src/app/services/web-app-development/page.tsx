import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { siteConfig } from "@/lib/metadata";
import Script from "next/script";

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  title: "Custom Web Application Development",
  description:
    "Scalable web applications, admin dashboards, customer portals, and cloud-based business software built with modern technologies and designed for real-world use.",
  alternates: { canonical: `${siteUrl}/services/web-app-development/` },
  openGraph: {
    title: "Custom Web Application Development",
    description:
      "Secure, scalable web applications that allow your team and customers to access your software from anywhere, on any device.",
    url: `${siteUrl}/services/web-app-development/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Application Development",
    description:
      "Secure, scalable web applications that allow your team and customers to access your software from anywhere, on any device.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Web Application Development",
  description:
    "Scalable web applications, dashboards, portals, and cloud-based business software built with modern frameworks and cloud infrastructure.",
  provider: { "@type": "Organization", name: "Boyo Apps" },
  areaServed: "Worldwide",
  serviceType: "Web Application Development",
};

export default function WebAppDevelopment() {
  return (
    <>
      <Script
        id="web-dev-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="mb-2 text-sm font-semibold tracking-widest text-accent">
          SERVICE
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Custom Web Application Development
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Secure, scalable web applications that allow your team and customers
          to access your software from anywhere, on any device — from
          administrative dashboards to customer-facing platforms.
        </p>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">
            What We Build
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Web applications are the backbone of modern business operations.
            They power back-office management, customer self-service portals,
            analytics dashboards, marketplace platforms, and the administrative
            interfaces that keep organizations running. Our web applications
            are built to be responsive, performant, and maintainable over the
            long term.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Cloud-Based Business Applications",
                desc: "Full-featured web applications for managing inventory, processing orders, tracking finances, and running business operations from any browser.",
              },
              {
                title: "Admin Dashboards & Management Panels",
                desc: "Data-rich dashboards that display key metrics, enable data exploration, and provide administrative control over your business systems.",
              },
              {
                title: "Customer Portals",
                desc: "Self-service portals where customers can view their data, manage accounts, submit requests, and track order or service status.",
              },
              {
                title: "E-Commerce & Marketplace Platforms",
                desc: "Custom online selling platforms with product catalogs, cart and checkout workflows, payment processing, and seller management.",
              },
              {
                title: "API Development & Integration",
                desc: "Custom APIs that connect your web application with mobile apps, third-party services, payment gateways, and legacy systems.",
              },
              {
                title: "SaaS Platforms",
                desc: "Multi-tenant subscription-based web applications with user authentication, billing integration, and tiered access control.",
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
            Our Approach to Web Development
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-primary">
                Modern Framework Foundation
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                We build web applications using modern frameworks that
                provide performance, developer productivity, and long-term
                maintainability. Our stack typically includes React or
                Next.js for the front-end with Node.js or Firebase for the
                backend. We choose technologies based on the specific
                requirements of each project rather than applying a
                one-size-fits-all approach.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary">
                Responsive by Default
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                Every web application we build works across desktop, tablet,
                and mobile browsers. The interface adapts to screen size
                without losing functionality — not just resizing content but
                restructuring navigation, data tables, and forms to remain
                usable on smaller screens.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary">
                Cloud-Native Architecture
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                Web applications hosted on modern cloud infrastructure scale
                from a handful of users to thousands without architectural
                changes. We design for horizontal scaling, implement database
                indexing strategies, and set up monitoring and alerting from
                day one. The result is an application that stays performant
                as your user base grows.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary">
                Security as a Design Principle
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                Authentication, authorization, data validation, and
                encryption are built into the architecture, not added as an
                afterthought. We implement industry-standard security
                practices including HTTPS enforcement, CSRF protection,
                input sanitization, and secure session management in every
                web application we deliver.
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
                "React, Next.js & modern front-end frameworks",
                "Node.js, Firebase & serverless backends",
                "REST API design",
                "Cloud database architecture",
                "Responsive design across all devices",
                "Authentication & authorization systems",
                "Cloud hosting & deployment (Firebase)",
                "CI/CD pipelines & automated testing",
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
              Our Web Experience
            </h2>
            <p className="mt-2 text-sm text-muted">
              Our products span web-based POS, inventory dashboards, analytics
              platforms, marketplace interfaces and SaaS applications — all
              built with modern technologies. This site itself is a Next.js
              web application, demonstrating our front-end and deployment
              capabilities firsthand.
            </p>
            <p className="mt-4 text-sm text-muted">
              The Vendrex web dashboard, GQRLY analytics platform, and multiple
              product landing pages we operate are examples of our web
              development work running in production.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">
            Why Businesses Choose Boyo Apps for Web Development
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Full-Stack Delivery",
                desc: "We handle front-end, back-end, database, and deployment — delivering a complete web application rather than just a front-end design.",
              },
              {
                title: "Mobile + Web Together",
                desc: "If you need both a mobile app and a web dashboard, we build them on a shared architecture so data stays consistent across platforms.",
              },
              {
                title: "Long-Term Maintainability",
                desc: "Clean code, documentation, and modern frameworks mean your web application remains maintainable and extensible years after launch.",
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
                What technologies do you use for web applications?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                We primarily build with React and Next.js for front-end
                applications paired with Node.js or Firebase for back-end
                services. Our database choices depend on the application
                requirements. We deploy on Firebase, which provides
                reliable cloud infrastructure as the user base grows.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Can you build a web app that works alongside our mobile
                app?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. This is one of our core strengths. We design shared
                data layers and API architectures that serve both web
                dashboards and mobile applications from the same backend.
                This ensures inventory counts, customer data, and
                transaction records are consistent across all platforms.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                How do you handle performance as user numbers grow?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                We design for scale from the start. This means efficient
                database queries, proper indexing, pagination for data-heavy
                views, caching strategies, and cloud infrastructure that
                can scale horizontally as traffic increases.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Do you build e-commerce or marketplace platforms?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. We built BoyoMart, a local marketplace platform with
                product listings, location-based discovery, in-app
                messaging, and seller profiles. We can build similar
                custom e-commerce and marketplace solutions tailored to
                your specific business model.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Can you integrate payment processing into a web
                application?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. We integrate payment gateways such as Stripe into web
                applications. We handle the full payment flow — checkout,
                receipt generation, refund processing, and transaction
                history. We can also work with region-specific processors
                as needed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                How long does it take to build a custom web application?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                A focused MVP web application typically takes 6 to 14 weeks
                depending on complexity. Full-featured platforms with
                multiple user roles, integrations, and advanced functionality
                typically range from 3 to 8 months.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-16">
          <CTA href="/contact/">Start Your Web Project &rarr;</CTA>
        </div>
      </div>
    </>
  );
}
