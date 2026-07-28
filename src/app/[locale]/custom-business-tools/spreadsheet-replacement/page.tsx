import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { CTA } from "@/components/CTA";
import { siteConfig, buildAlternates } from "@/lib/metadata";
import Script from "next/script";
import { Link } from "@/i18n/navigation";

const path = "/custom-business-tools/spreadsheet-replacement/";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Spreadsheet Replacement — Custom Software",
  description:
    "Replace critical spreadsheets with custom-built software. Structured forms, automatic calculations, role-based access, and one source of truth.",
  provider: { "@type": "Organization", name: "Boyo Apps" },
  areaServed: "Worldwide",
  serviceType: "Spreadsheet Replacement Software Development",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "spreadsheetReplacement" });
  return {
    title: t("pageTitle"),
    description: t("metaDescription"),
    ...buildAlternates(path, locale),
    openGraph: {
      title: t("pageTitle"),
      description: t("metaDescription"),
      url: `${siteConfig.url}/custom-business-tools/spreadsheet-replacement/`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("pageTitle"),
      description: t("metaDescription"),
    },
  };
}

export default async function SpreadsheetReplacement({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("spreadsheetReplacement");

  const steps = t.raw("process.steps") as Array<{ step: string; title: string; description: string }>;
  const signs = t.raw("problem.signs") as Array<{ title: string; description: string }>;
  const scenarios = t.raw("beforeAfter.scenarios") as Array<{
    before: { title: string; items: string[] };
    after: { title: string; items: string[] };
  }>;
  const whoItems = t.raw("whoFor.items") as string[];
  const faqItems = t.raw("faq.items") as Array<{ question: string; answer: string }>;

  return (
    <>
      <Script
        id="spreadsheet-replacement-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border/50 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(232,62,91,0.06),transparent_50%)] px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
              {t("hero.label")}
            </p>
            <h1 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-primary max-w-4xl">
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {t("hero.description")}
            </p>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
                {t("problem.label")}
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-extrabold tracking-tight text-primary">
                {t("problem.title")}
              </h2>
              <p className="mt-6 leading-relaxed text-muted">
                {t("problem.paragraph1")}
              </p>
              <p className="mt-4 leading-relaxed text-muted font-semibold text-primary">
                {t("problem.paragraph2")}
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {signs.map((sign, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-2xl border border-border/80 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-600">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="15" y1="9" x2="9" y2="15" />
                      <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-primary">{sign.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{sign.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEFORE / AFTER */}
        <section className="border-y border-border/40 bg-surface/80 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
                {t("beforeAfter.label")}
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-extrabold tracking-tight text-primary">
                {t("beforeAfter.title")}
              </h2>
            </div>

            <div className="space-y-12">
              {scenarios.map((scenario, i) => (
                <div key={i} className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-2xl border border-border/80 bg-white p-8">
                    <h3 className="text-lg font-bold text-rose-600 mb-4">{scenario.before.title}</h3>
                    <ul className="space-y-3">
                      {scenario.before.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-muted">
                          <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8">
                    <h3 className="text-lg font-bold text-accent mb-4">{scenario.after.title}</h3>
                    <ul className="space-y-3">
                      {scenario.after.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-muted">
                          <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
                {t("process.label")}
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-extrabold tracking-tight text-primary">
                {t("process.title")}
              </h2>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col rounded-2xl border border-border/80 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="border-y border-border/40 bg-surface/80 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
              {t("whoFor.label")}
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-extrabold tracking-tight text-primary">
              {t("whoFor.title")}
            </h2>
            <ul className="mt-8 space-y-4">
              {whoItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PRICING */}
        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
              {t("pricing.label")}
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-extrabold tracking-tight text-primary">
              {t("pricing.title")}
            </h2>
            <p className="mt-6 leading-relaxed text-muted">{t("pricing.paragraph1")}</p>
            <p className="mt-4 leading-relaxed text-muted">{t("pricing.paragraph2")}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-y border-border/40 bg-surface/80 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
              {t("faq.label")}
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-extrabold tracking-tight text-primary mb-12">
              {t("faq.title")}
            </h2>
            <div className="space-y-8">
              {faqItems.map((item, i) => (
                <div key={i} className="rounded-2xl border border-border/80 bg-white p-8">
                  <h3 className="text-lg font-bold text-primary">{item.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINK */}
        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm text-muted">
              <Link href="/custom-business-tools/" className="text-accent font-semibold hover:underline">
                {locale === "fr" ? "Voir tous les outils business sur mesure" : "See all custom business tools"}
              </Link>
              {" "}{locale === "fr" ? "ou" : "or"}{" "}
              <Link href="/contact/" className="text-accent font-semibold hover:underline">
                {locale === "fr" ? "contactez-nous directement" : "contact us directly"}
              </Link>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface-dark via-navy to-navy-light px-8 py-20 text-center text-white shadow-2xl shadow-primary/20 sm:px-16">
              <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent-violet/20 blur-3xl animate-pulse-glow" />
              <div className="relative">
                <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-tight">
                  {t("cta.title")}
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-lg text-gray-200 font-medium">
                  {t("cta.description")}
                </p>
                <div className="mt-10">
                  <CTA href="/contact/">{t("cta.button")}</CTA>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
