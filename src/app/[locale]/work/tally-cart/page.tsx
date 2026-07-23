import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";
import { siteConfig, buildAlternates } from "@/lib/metadata";
import Script from "next/script";

const product = products.find((p) => p.slug === "tally-cart")!;
const siteUrl = siteConfig.url;
const pathname = "/work/tally-cart/";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "caseStudies.tallyCart" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    ...buildAlternates(pathname, locale),
    openGraph: {
      title: t("og.title"),
      description: t("og.description"),
      url: `${siteUrl}/work/tally-cart/`,
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
      name: "Tally Cart",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Android",
      description:
        "Shared grocery list and budget tracking application with real-time collaboration, shelf-price scanning and shopping expense management.",
      url: "https://tallycart-prod.web.app/",
      author: { "@type": "Organization", name: "Boyo Apps" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does Tally Cart handle real-time list collaboration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tally Cart uses a cloud-synchronized data model where list changes made by one user appear instantly on all connected devices. Each user sees item additions, removals, and check-offs in real time during the shopping trip.",
          },
        },
        {
          "@type": "Question",
          name: "Can I scan barcodes to check prices in-store?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Tally Cart includes a barcode scanner that lets you scan shelf labels to retrieve prices and add items to your list with their current price, helping you track spending as you shop.",
          },
        },
        {
          "@type": "Question",
          name: "Does Tally Cart work without internet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Tally Cart functions fully offline, storing data locally on the device. Lists, scans, and budget updates sync automatically when connectivity is restored.",
          },
        },
        {
          "@type": "Question",
          name: "Can I track spending against a budget?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tally Cart lets you set a budget for each shopping trip. As items are scanned or added, the running total updates in real time, helping you stay within your target.",
          },
        },
        {
          "@type": "Question",
          name: "Does Tally Cart support international users?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Tally Cart supports multiple languages and handles multiple currencies, making it suitable for users in different countries and international households.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Tally Cart different from a simple notes app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tally Cart is purpose-built for grocery shopping. It provides real-time collaboration, barcode-based price scanning, budget tracking per trip, expense history, and multi-currency support — features no generic notes app can offer.",
          },
        },
      ],
    },
  ],
};

export default async function TallyCartCaseStudy({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("caseStudies.tallyCart");

  const featureIndices = [0, 1, 2, 3, 4, 5, 6, 7] as const;
  const faqIndices = [0, 1, 2, 3, 4, 5] as const;

  return (
    <>
      <Script
        id="tally-cart-schema"
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
          <CTA href={product.website!} variant="secondary">
            {t("ctas.visit")}
          </CTA>
          {product.googlePlay && (
            <CTA href={product.googlePlay} variant="secondary">
              {t("ctas.googlePlay")}
            </CTA>
          )}
          <CTA href="/contact/">{t("ctas.buildSimilar")}</CTA>
        </section>
      </div>
    </>
  );
}
