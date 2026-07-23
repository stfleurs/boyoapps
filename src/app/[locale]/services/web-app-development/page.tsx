import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
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

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function WebAppDevelopment({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services.web");

  const whatWeBuildItems = t.raw("whatWeBuild.items") as {
    title: string;
    description: string;
  }[];
  const approachSections = t.raw("approach.sections") as {
    title: string;
    description: string;
  }[];
  const techItems = t.raw("techCapabilities.items") as string[];
  const whyChooseItems = t.raw("whyChoose.items") as {
    title: string;
    description: string;
  }[];
  const faqs = t.raw("faqs") as { question: string; answer: string }[];

  return (
    <>
      <Script
        id="web-dev-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="mb-2 text-sm font-semibold tracking-widest text-accent">
          {t("label")}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {t("description")}
        </p>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">
            {t("whatWeBuild.title")}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            {t("whatWeBuild.description")}
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {whatWeBuildItems.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border p-5"
              >
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">
            {t("approach.title")}
          </h2>
          <div className="mt-6 space-y-6">
            {approachSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-bold text-primary">
                  {section.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-8">
            <h2 className="text-xl font-bold text-primary">
              {t("techCapabilities.title")}
            </h2>
            <ul className="mt-4 space-y-3">
              {techItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span className="text-sm text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8">
            <h2 className="text-xl font-bold text-primary">
              {t("ourExperience.title")}
            </h2>
            <p className="mt-2 text-sm text-muted">
              {t("ourExperience.description")}
            </p>
            <p className="mt-4 text-sm text-muted">
              {t("ourExperience.description2")}
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">
            {t("whyChoose.title")}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.map((item) => (
              <div key={item.title} className="rounded-lg border border-border p-5">
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
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
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-semibold text-primary">
                  {faq.question}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16">
          <CTA href="/contact/">{t("cta")}</CTA>
        </div>
      </div>
    </>
  );
}
