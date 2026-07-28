import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { CTA } from "@/components/CTA";
import { NutritionDemo } from "@/components/NutritionDemo";
import { siteConfig, buildAlternates } from "@/lib/metadata";
import Script from "next/script";
import { Link } from "@/i18n/navigation";

const path = "/custom-business-tools/";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Business Tools",
  description: "Custom internal tools, business software and workflow applications built around the way your business already operates.",
  provider: { "@type": "Organization", name: "Boyo Apps" },
  areaServed: "Worldwide",
  serviceType: "Custom Business Tool Development",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "customBusinessTools" });
  return {
    title: t("pageTitle"),
    description: t("metaDescription"),
    ...buildAlternates(path, locale),
    openGraph: {
      title: t("pageTitle"),
      description: t("metaDescription"),
      url: `${siteConfig.url}/custom-business-tools/`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("pageTitle"),
      description: t("metaDescription"),
    },
  };
}

export default async function CustomBusinessTools({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("customBusinessTools");

  const steps = t.raw("process.steps") as Array<{ step: string; title: string; description: string }>;

  return (
    <>
      <Script
        id="custom-business-tools-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border/50 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(232,62,91,0.06),transparent_50%)] px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">{t("hero.label")}</p>
            <h1 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-primary max-w-4xl">
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {t("hero.description")}
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl grid items-start gap-16 lg:grid-cols-2">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">{t("story.label")}</p>
              <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-extrabold tracking-tight text-primary">{t("story.title")}</h2>
              <p className="mt-6 leading-relaxed text-muted">{t("story.paragraph1")}</p>
              <p className="mt-4 leading-relaxed text-muted font-semibold text-primary">{t("story.paragraph2")}</p>
              <p className="mt-4 leading-relaxed text-muted">{t("story.paragraph3")}</p>
            </div>
            
            {/* Screenshot */}
            <div className="relative">
              <div className="overflow-hidden rounded-xl border border-border/80 bg-white shadow-2xl shadow-primary/10">
                <div className="flex items-center gap-1.5 border-b border-border/60 bg-surface/90 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-[11px] font-semibold text-muted">Custom Nutrition Planning Tool</span>
                </div>
                <div className="relative">
                  <Image
                    src={locale === "fr" ? "/images/nutritional_tool/nutritional_tool_screenshot_fr.webp" : "/images/nutritional_tool/nutritional_tool_screenshot_en.webp"}
                    alt={locale === "fr" ? "Outil de nutrition sur mesure" : "Custom nutrition tool showing meal description and structured output"}
                    width={1200}
                    height={750}
                    className="w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2 sm:flex-row">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/90 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20 text-[10px]">1</span>
                      {t("screenshotLabels.step1")}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent/90 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm">
                      <span className="flex h-4 w-4 items-center justify-center rounded-lg bg-white/20 text-[10px]">2</span>
                      {t("screenshotLabels.step2")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mx-auto -mt-1 h-3 w-[55%] rounded-b-lg border border-t-0 border-border/60 bg-surface shadow-sm" />
            </div>
          </div>
        </section>

        {/* FLOW + DEMO */}
        <section className="border-y border-border/40 bg-surface/80 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* 3-step flow */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-white/80 px-5 py-3 text-center">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">{t("flow.input")}</span>
                <span className="text-sm text-muted">{t("flow.inputExample")}</span>
              </div>
              <svg className="hidden h-5 w-5 text-accent sm:block flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              <div className="flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/5 px-5 py-3 text-center">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">{t("flow.rules")}</span>
                <span className="text-sm text-muted">{t("flow.rulesExample")}</span>
              </div>
              <svg className="hidden h-5 w-5 text-accent sm:block flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              <div className="flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/5 px-5 py-3 text-center">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">{t("flow.output")}</span>
                <span className="text-sm text-muted">{t("flow.outputExample")}</span>
              </div>
            </div>

            {/* Demo heading */}
            <div className="mt-16 mb-8 text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-primary">{t("demo.title")}</h2>
              <p className="mt-2 text-sm text-muted max-w-lg mx-auto">{t("demo.subtitle")}</p>
            </div>

            {/* Interactive demo */}
            <NutritionDemo locale={locale} />
          </div>
        </section>

        {/* IMAGINE CTA */}
        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="rounded-2xl bg-surface/80 border border-border/40 px-8 py-10">
              <p className="text-lg font-bold text-primary">{t("imagine.title")}</p>
              <p className="mt-3 text-sm text-muted leading-relaxed">{t("imagine.list")}</p>
              <p className="mt-4 text-base font-semibold text-primary">{t("imagine.closing")}</p>
              <div className="mt-8">
                <CTA href="/contact/">{t("cta.button")}</CTA>
              </div>
            </div>
          </div>
        </section>

        {/* SPREADSHEET SECTION */}
        <section className="px-6 py-24 lg:px-8 border-t border-border/40">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-tight text-primary">{t("sections.spreadsheet.title")}</h2>
            <p className="mt-6 leading-relaxed text-muted">{t("sections.spreadsheet.paragraph1")}</p>
            <p className="mt-4 leading-relaxed text-muted">{t("sections.spreadsheet.paragraph2")}</p>
            <div className="mt-8">
              <Link href="/custom-business-tools/spreadsheet-replacement/" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                {locale === "fr" ? "En savoir plus sur le remplacement de tableurs" : "Learn more about spreadsheet replacement"}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* TURN INFO SECTION + INDUSTRY EXAMPLES */}
        <section className="border-y border-border/40 bg-surface/80 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-tight text-primary">{t("sections.turnInfo.title")}</h2>
              <p className="mt-4 text-base text-muted max-w-xl mx-auto">{t("sections.turnInfo.paragraph1")}</p>
              <p className="mt-3 text-sm text-muted max-w-xl mx-auto">{t("sections.turnInfo.paragraph2")}</p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
              {(t.raw("industryExamples") as Record<string, { label: string; input: string; rules: string; output: string }>).constructor === Object 
                ? Object.entries(t.raw("industryExamples") as Record<string, { label: string; input: string; rules: string; output: string }>).map(([key, example]) => (
                    <div key={key} className="rounded-2xl border border-border/80 bg-white p-8 text-center">
                      <p className="text-xs font-bold tracking-wider text-accent uppercase mb-6">{example.label}</p>
                      <div className="space-y-3">
                        <div className="rounded-lg bg-surface/80 px-4 py-2">
                          <span className="text-xs text-muted">{example.input}</span>
                        </div>
                        <svg className="mx-auto h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <polyline points="19 12 12 19 5 12" />
                        </svg>
                        <div className="rounded-lg bg-accent/5 border border-accent/20 px-4 py-2">
                          <span className="text-xs text-accent font-medium">{example.rules}</span>
                        </div>
                        <svg className="mx-auto h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <polyline points="19 12 12 19 5 12" />
                        </svg>
                        <div className="rounded-lg bg-primary/5 border border-primary/20 px-4 py-3">
                          <span className="text-sm font-bold text-primary">{example.output}</span>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </section>

        {/* BROADER LESSON */}
        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-tight text-primary">{t("broaderLesson.title")}</h2>
            <p className="mt-4 text-base text-muted max-w-xl mx-auto">{t("broaderLesson.description")}</p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-y border-border/40 bg-surface/80 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">{t("process.label")}</p>
              <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-extrabold tracking-tight text-primary">{t("process.title")}</h2>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((item) => (
                <div key={item.step} className="flex flex-col rounded-2xl border border-border/80 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20">
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

        {/* FINAL CTA */}
        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface-dark via-navy to-navy-light px-8 py-20 text-center text-white shadow-2xl shadow-primary/20 sm:px-16">
              <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent-violet/20 blur-3xl animate-pulse-glow" />
              <div className="relative">
                <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-tight">{t("cta.title")}</h2>
                <p className="mx-auto mt-4 max-w-lg text-lg text-gray-200 font-medium">{t("cta.description")}</p>
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
