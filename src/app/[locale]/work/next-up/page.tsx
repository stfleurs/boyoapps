import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Script from "next/script";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";
import { siteConfig, buildAlternates } from "@/lib/metadata";

const product = products.find((p) => p.slug === "next-up")!;
const siteUrl = siteConfig.url;
const pathname = "/work/next-up/";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "caseStudies.nextUp" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    ...buildAlternates(pathname, locale),
    openGraph: {
      title: t("og.title"),
      description: t("og.description"),
      url: `${siteUrl}/work/next-up/`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: t("og.title"),
      description: t("og.description"),
    },
  };
}

const jsonLdNextUp = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "NeXT Up",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "Android",
      description:
        "Cross-device reminder and productivity application with cloud synchronization.",
      author: { "@type": "Organization", name: "Boyo Apps" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does NeXT Up sync across devices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NeXT Up uses cloud synchronization to keep your reminders and tasks updated across all your devices in real time.",
          },
        },
        {
          "@type": "Question",
          name: "Can I set recurring reminders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. NeXT Up supports recurring reminders with customizable intervals including daily, weekly, monthly, and custom patterns.",
          },
        },
        {
          "@type": "Question",
          name: "Does NeXT Up work offline?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NeXT Up stores data locally on your device and syncs to the cloud when connectivity is available, ensuring your reminders are always accessible.",
          },
        },
        {
          "@type": "Question",
          name: "Can I organize tasks with categories or labels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. NeXT Up allows you to categorize tasks and reminders, making it easy to filter and focus on specific areas of your work or life.",
          },
        },
      ],
    },
  ],
};

export default async function NextUpPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("caseStudies.nextUp");

  const faqIndices = [0, 1, 2, 3] as const;

  return (
    <>
      <Script
        id="next-up-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdNextUp) }}
      />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="mb-2 text-sm font-semibold tracking-widest text-accent">
          {t("label")}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-muted">{t("shortDescription")}</p>
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
          <h2 className="text-2xl font-bold text-primary">
            {t("aboutTitle")}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            {t("longDescription")}
          </p>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">
            {t("keyFeaturesTitle")}
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {t.raw("keyFeatures").map((feature: string) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-1 text-accent">✓</span>
                <span className="text-sm text-muted">{feature}</span>
              </li>
            ))}
          </ul>
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
        <div className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8">
          {product.googlePlay && (
            <CTA href={product.googlePlay} variant="secondary">
              {t("ctas.googlePlay")}
            </CTA>
          )}
          <CTA href="/contact/">{t("ctas.buildSimilar")}</CTA>
        </div>
      </div>
    </>
  );
}
