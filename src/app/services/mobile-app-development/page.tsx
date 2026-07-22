import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { siteConfig } from "@/lib/metadata";
import Script from "next/script";

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  title: "Custom Mobile App Development for Business",
  description:
    "Cross-platform and Android mobile applications designed for real-world business conditions — offline-first, cloud-synced, with barcode scanning, multi-currency, and real-time collaboration built in.",
  alternates: { canonical: `${siteUrl}/services/mobile-app-development/` },
  openGraph: {
    title: "Custom Mobile App Development for Business",
    description:
      "Cross-platform mobile applications designed around your business, users and real-world requirements. Android, offline-first, cloud-synced apps.",
    url: `${siteUrl}/services/mobile-app-development/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Mobile App Development for Business",
    description:
      "Cross-platform mobile applications designed around your business, users and real-world requirements. Android, offline-first, cloud-synced apps.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Mobile App Development",
  description:
    "Cross-platform and Android mobile application development for businesses, including offline-first architecture, cloud synchronization, barcode scanning, and real-time collaboration features.",
  provider: { "@type": "Organization", name: "Boyo Apps" },
  areaServed: "Worldwide",
  serviceType: "Mobile Application Development",
};

export default function MobileAppDevelopment() {
  return (
    <>
      <Script
        id="mobile-dev-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="mb-2 text-sm font-semibold tracking-widest text-accent">
          SERVICE
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Custom Mobile App Development
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Cross-platform mobile applications designed around your business,
          users and real-world requirements. From Android to cross-platform
          solutions, we build apps that work reliably in the conditions your
          users actually operate in.
        </p>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">
            What We Build
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            We build mobile applications that solve real operational problems —
            not just simple front-end apps, but full-featured mobile software
            with offline capabilities, cloud synchronization, hardware
            integration, and complex business logic. Our portfolio includes
            point-of-sale systems, collaborative shopping tools, field
            measurement applications, and productivity apps, all running on
            Android devices in production use.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Business mobile apps",
                desc: "Full-featured mobile applications for inventory management, sales processing, field operations, and internal business workflows.",
              },
              {
                title: "Consumer mobile applications",
                desc: "User-friendly apps designed for everyday use — shopping, finance, productivity, and lifestyle tools with polished interfaces.",
              },
              {
                title: "Offline-first mobile experiences",
                desc: "Applications that function fully without internet connectivity, with automatic cloud synchronization when connectivity is restored.",
              },
              {
                title: "Barcode scanning & data capture",
                desc: "Camera-based barcode scanning integrated into POS, inventory, and data collection workflows for rapid product identification and tracking.",
              },
              {
                title: "Real-time collaboration",
                desc: "Shared data models that allow multiple users to view and modify the same information simultaneously from different devices.",
              },
              {
                title: "Multi-currency & internationalized apps",
                desc: "Applications designed for global use with support for multiple currencies, languages, and regional formatting standards.",
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
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">
            Our Approach to Mobile Development
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-primary">
                Offline-First Architecture
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                Many mobile applications fail in production because they
                assume constant connectivity. We design with an offline-first
                mindset from day one. Data is stored locally on the device,
                the application operates with full functionality without a
                network, and changes sync to the cloud when connectivity
                becomes available. This approach — proven in our Vendrex POS
                and Tally Cart applications — ensures your app works
                reliably in the field, on the sales floor, or wherever your
                users actually are.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary">
                Cross-Platform by Default
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                We build Android applications that leverage the full
                capabilities of modern mobile hardware — cameras for
                barcode scanning, sensors for measurement, GPS for
                location services, and Bluetooth for peripheral connectivity.
                When a web dashboard or companion app is needed, we design
                the architecture so the same data layer and business logic
                serve both platforms without duplication.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary">
                Real-World Testing
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                Mobile apps are used in bright sunlight, on bumpy buses,
                in low-signal areas, and by users with varying technical
                comfort. We build and test for these conditions. Our
                applications handle screen glare with high-contrast
                interfaces, tolerate intermittent connectivity through
                offline-first data models, and are designed for users who
                need to complete tasks quickly with minimal friction.
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
                "Native Android development",
                "Cross-platform architecture",
                "Offline data synchronization",
                "Camera & barcode integration",
                "Bluetooth & peripheral support",
                "GPS & location-based features",
                "Cloud synchronization & backup",
                "Push notifications",
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
              Related Work
            </h2>
            <p className="mt-2 text-sm text-muted">
              These products demonstrate our mobile development capabilities:
            </p>
            <div className="mt-4 space-y-3">
              {[
                { name: "Tally Cart", href: "/work/tally-cart/", desc: "Collaborative grocery with barcode scanning" },
                { name: "Vendrex", href: "/work/vendrex-pos/", desc: "Offline-first POS & inventory management" },
                { name: "Solar Align Pro", href: "/work/solar-align/", desc: "Sensor-based solar panel alignment" },
                { name: "Receet Pro", href: "/work/receet-pro/", desc: "OCR receipt scanning & finance tracking" },
                { name: "NeXT Up", href: "/work/next-up/", desc: "Cross-device reminders & productivity" },
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
                  <span className="ml-2 text-sm text-accent">
                    View &rarr;
                  </span>
                </a>
              ))}
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
                title: "We Build Our Own Products",
                desc: "Every app we build for clients benefits from lessons learned building our own eight-product portfolio that ships to real users.",
              },
              {
                title: "Offline-First Expertise",
                desc: "Our speciality is building apps that work without reliable connectivity — a capability most development shops cannot deliver.",
              },
              {
                title: "Full-Stack Capability",
                desc: "We handle the entire stack — mobile front-end, cloud backend, database architecture, and deployment infrastructure.",
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
                Do you build for both Android and iOS?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Our primary mobile platform is Android. We design our data
                layers and business logic to be platform-independent, so
                expanding to iOS or adding a web companion app is
                architecturally straightforward. Let us know your platform
                requirements and we will advise on the best approach.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                How do you handle apps that need to work offline?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                We use a local-first architecture where all data is stored
                on the device and the app functions fully without
                connectivity. A sync layer in the background transmits
                changes to the cloud when a connection is available, with
                conflict resolution to prevent data loss.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Can you integrate hardware like barcode scanners or
                printers?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. Our applications integrate with device cameras for
                barcode scanning, Bluetooth and Wi-Fi printers for receipt
                printing, GPS for location services, and device sensors
                for measurement and alignment applications.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                How long does it take to build a mobile app?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Timelines depend on complexity. A focused MVP can take 8 to
                16 weeks. Full-featured applications with offline sync,
                hardware integration, and cloud backends typically range
                from 4 to 9 months depending on scope.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Do you provide ongoing support after launch?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. We offer post-launch maintenance, updates, monitoring,
                and feature development. Our goal is to build a long-term
                partnership, not just deliver a project and walk away.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Can you build an app that syncs with our existing business
                systems?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. We build custom API layers and integration adapters
                that connect mobile applications to existing ERP, accounting,
                CRM, or inventory systems. This is a standard part of our
                business application development process.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-16">
          <CTA href="/contact/">Start Your Mobile Project &rarr;</CTA>
        </div>
      </div>
    </>
  );
}
