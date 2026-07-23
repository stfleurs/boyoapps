import type { Metadata } from "next";
import { buildAlternates } from "@/lib/metadata";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { CTA } from "@/components/CTA";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "industries.retail" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    ...buildAlternates("/industries/retail/", locale),
  };
}

export default async function Retail({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("industries.retail");

  const cardIndices = [0, 1, 2, 3] as const;
  const capabilityIndices = [0, 1, 2, 3] as const;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        {t("description")}
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          {t("cardsTitle")}
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {cardIndices.map((i) => (
            <div key={i} className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-semibold text-primary">{t(`cards.${i}.title`)}</h3>
              <p className="mt-2 text-sm text-muted">{t(`cards.${i}.description`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          {t("whyCustomSoftware.title")}
        </h2>
        {t.raw("whyCustomSoftware.paragraphs").map((paragraph: string, i: number) => (
          <p key={i} className="mt-4 leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          {t("relatedCapabilities.title")}
        </h2>
        <div className="mt-6 space-y-4">
          {capabilityIndices.map((i) => (
            <div key={i} className="rounded-lg border border-border p-4">
              <h3 className="font-semibold text-primary">{t(`relatedCapabilities.items.${i}.title`)}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{t(`relatedCapabilities.items.${i}.description`)}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <a
          href="/work/vendrex-pos/"
          className="block rounded-lg border border-border p-4 transition-colors hover:border-accent"
        >
          <span className="font-medium text-primary">{t("seeVendrex.link")}</span>
          <p className="mt-1 text-sm text-muted">
            {t("seeVendrex.description")}
          </p>
        </a>
      </div>

      <div className="mt-12">
        <CTA href="/contact/">{t("cta")}</CTA>
      </div>
    </div>
  );
}
