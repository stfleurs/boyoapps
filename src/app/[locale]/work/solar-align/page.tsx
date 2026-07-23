import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";
import { siteConfig, buildAlternates } from "@/lib/metadata";
import Script from "next/script";

const product = products.find((p) => p.slug === "solar-align")!;
const siteUrl = siteConfig.url;
const pathname = "/work/solar-align/";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "caseStudies.solarAlign" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    ...buildAlternates(pathname, locale),
    openGraph: {
      title: t("og.title"),
      description: t("og.description"),
      url: `${siteUrl}/work/solar-align/`,
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
      name: "Solar Align Pro",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android",
      description:
        "Solar panel alignment and ROI tool that uses device sensors and location data to help solar energy professionals optimize panel positioning and calculate returns.",
      author: { "@type": "Organization", name: "Boyo Apps" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does Solar Align Pro calculate optimal panel tilt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solar Align Pro uses the device's accelerometer and magnetometer combined with location data to measure current panel orientation, then calculates the optimal tilt angle based on latitude, time of year, and solar declination.",
          },
        },
        {
          "@type": "Question",
          name: "Does Solar Align Pro require an internet connection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solar Align Pro functions offline for core alignment measurements. Location-based solar calculations are performed on-device. Some features such as map data may require connectivity.",
          },
        },
        {
          "@type": "Question",
          name: "How accurate is the sensor-based alignment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Accuracy depends on the device's sensor quality, but Solar Align Pro applies sensor fusion algorithms and calibration guidance to deliver reliable alignment readings suitable for professional solar installation work.",
          },
        },
        {
          "@type": "Question",
          name: "Can Solar Align Pro calculate ROI for solar installations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Solar Align Pro includes an ROI analysis module that factors in panel efficiency gains from optimal alignment, local energy rates, installation costs, and estimated annual production to project payback periods and long-term savings.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Solar Align Pro designed for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solar Align Pro is designed for solar installation professionals, energy consultants, and solar enthusiasts who need accurate panel alignment measurements and financial projections without expensive specialized equipment.",
          },
        },
        {
          "@type": "Question",
          name: "Does the app track solar position throughout the day?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Solar Align Pro calculates the sun's position at any given time and location, allowing users to understand how shadows and seasonal changes affect panel performance throughout the day and year.",
          },
        },
      ],
    },
  ],
};

export default async function SolarAlignCaseStudy({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("caseStudies.solarAlign");

  const faqIndices = [0, 1, 2, 3, 4, 5] as const;

  return (
    <>
      <Script
        id="solar-align-schema"
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
          <h2 className="text-2xl font-bold text-primary">{t("industryProblem.title")}</h2>
          {t.raw("industryProblem.paragraphs").map((paragraph: string, i: number) => (
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
