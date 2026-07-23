import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/metadata";
import Script from "next/script";

const product = products.find((p) => p.slug === "receet-pro")!;
const siteUrl = siteConfig.url;

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "caseStudies.receetPro" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: { canonical: `${siteUrl}/work/receet-pro/` },
    openGraph: {
      title: t("og.title"),
      description: t("og.description"),
      url: `${siteUrl}/work/receet-pro/`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: t("og.title"),
      description: t("og.description"),
    },
  };
}

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

export default async function ReceetProCaseStudy({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("caseStudies.receetPro");

  const faqIndices = [0, 1, 2, 3, 4, 5] as const;

  return (
    <>
      <Script
        id="receet-pro-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="mb-2 text-sm font-semibold tracking-widest text-accent">
          {t("label")}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {t("title")}
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
          <h2 className="text-2xl font-bold text-primary">{t("projectOverview.title")}</h2>
          {t.raw("projectOverview.paragraphs").map((paragraph: string, i: number) => (
            <p key={i} className="mt-4 leading-relaxed text-muted">{paragraph}</p>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">{t("userProblem.title")}</h2>
          {t.raw("userProblem.paragraphs").map((paragraph: string, i: number) => (
            <p key={i} className="mt-4 leading-relaxed text-muted">{paragraph}</p>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">{t("whyCustom.title")}</h2>
          {t.raw("whyCustom.paragraphs").map((paragraph: string, i: number) => (
            <p key={i} className="mt-4 leading-relaxed text-muted">{paragraph}</p>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">{t("solution.title")}</h2>
          {t.raw("solution.paragraphs").map((paragraph: string, i: number) => (
            <p key={i} className="mt-4 leading-relaxed text-muted">{paragraph}</p>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">{t("keyFeatures.title")}</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {t.raw("keyFeatures.items").map((feature: string) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-1 text-accent">✓</span>
                <span className="text-sm text-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">{t("engineeringChallenges.title")}</h2>
          {t.raw("engineeringChallenges.sections").map((section: { title: string; description: string }) => (
            <div key={section.title}>
              <h3 className="mt-6 text-lg font-bold text-primary">{section.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{section.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">{t("architectureHighlights.title")}</h2>
          <ul className="mt-4 space-y-4">
            {t.raw("architectureHighlights.items").map((item: string) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-accent">✓</span>
                <span className="text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">{t("crossPlatform.title")}</h2>
          {t.raw("crossPlatform.paragraphs").map((paragraph: string, i: number) => (
            <p key={i} className="mt-4 leading-relaxed text-muted">{paragraph}</p>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">{t("whatItDemonstrates.title")}</h2>
          {t.raw("whatItDemonstrates.paragraphs").map((paragraph: string, i: number) => (
            <p key={i} className="mt-4 leading-relaxed text-muted">{paragraph}</p>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">{t("relatedServices.title")}</h2>
          <p className="mt-4 leading-relaxed text-muted">{t("relatedServices.description")}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">{t("faqTitle")}</h2>
          <div className="mt-6 space-y-6">
            {faqIndices.map((i) => (
              <div key={i}>
                <h3 className="font-semibold text-primary">{t(`faqs.${i}.question`)}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{t(`faqs.${i}.answer`)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8">
          <CTA href="/contact/">{t("ctas.buildSimilar")}</CTA>
        </section>
      </div>
    </>
  );
}
