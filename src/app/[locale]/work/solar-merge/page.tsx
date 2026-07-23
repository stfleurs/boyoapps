import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Script from "next/script";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";
import { siteConfig, buildAlternates } from "@/lib/metadata";

const product = products.find((p) => p.slug === "solar-merge")!;
const siteUrl = siteConfig.url;
const pathname = "/work/solar-merge/";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "caseStudies.solarMerge" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    ...buildAlternates(pathname, locale),
    openGraph: {
      title: t("og.title"),
      description: t("og.description"),
      url: `${siteUrl}/work/solar-merge/`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: t("og.title"),
      description: t("og.description"),
    },
  };
}

const jsonLdSolarMerge = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Solar Merge",
      applicationCategory: "GameApplication",
      operatingSystem: "Android",
      description:
        "An engaging solar-themed merge game for mobile devices with educational elements about renewable energy.",
      author: { "@type": "Organization", name: "Boyo Apps" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What type of game is Solar Merge?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solar Merge is a casual merge puzzle game where players combine solar-themed elements to progress through levels while learning about renewable energy concepts.",
          },
        },
        {
          "@type": "Question",
          name: "Does Solar Merge work offline?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Solar Merge is designed for offline gameplay, making it perfect for playing anywhere without an internet connection.",
          },
        },
        {
          "@type": "Question",
          name: "Is Solar Merge educational?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solar Merge combines puzzle mechanics with educational elements about solar energy and renewable resources, making learning fun and engaging.",
          },
        },
        {
          "@type": "Question",
          name: "What platforms is Solar Merge available on?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solar Merge is currently available for Android devices. Future platform expansion is being considered.",
          },
        },
      ],
    },
  ],
};

export default async function SolarMergePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("caseStudies.solarMerge");

  const faqIndices = [0, 1, 2, 3] as const;

  return (
    <>
      <Script
        id="solar-merge-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSolarMerge) }}
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
        <div className="mt-12 border-t border-border pt-8">
          <CTA href="/contact/">{t("ctas.buildSimilar")}</CTA>
        </div>
      </div>
    </>
  );
}
