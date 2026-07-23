import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { CTA } from "@/components/CTA";
import { siteConfig, buildAlternates } from "@/lib/metadata";
import Script from "next/script";

const path = "/services/business-app-development/";

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

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  return {
    title: "Custom Business Application Development",
    description: "POS systems, inventory management, dashboards, internal tools and custom business software built for real-world operations — offline-first, multi-currency, and designed to scale.",
    ...buildAlternates(path, locale),
    openGraph: {
      title: "Custom Business Application Development",
      description: "Inventory systems, POS applications, dashboards, internal tools and custom software tailored to your business operations.",
      url: `${siteConfig.url}/services/business-app-development/`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Business Application Development",
      description: "Inventory systems, POS applications, dashboards, internal tools and custom software tailored to your business operations.",
    },
  };
}

export default async function BusinessAppDevelopment({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services.business");

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
        id="business-dev-schema"
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
              {t("proofInProduction.title")}
            </h2>
            <p className="mt-2 text-sm text-muted">
              {t("proofInProduction.description")}
            </p>
            <div className="mt-4 space-y-3">
              <a
                href="/work/vendrex-pos/"
                className="block rounded-lg border border-border p-4 transition-colors hover:border-accent"
              >
                <span className="font-medium text-primary">{t("proofInProduction.item.name")}</span>
                <p className="mt-1 text-xs text-muted">
                  {t("proofInProduction.item.description")}
                </p>
                <span className="mt-1 inline-block text-sm text-accent">
                  {t("proofInProduction.item.viewCaseStudy")}
                </span>
              </a>
            </div>
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
