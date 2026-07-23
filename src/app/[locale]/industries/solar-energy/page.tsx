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
  const t = await getTranslations({ locale, namespace: "industries.solar" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    ...buildAlternates("/industries/solar-energy/", locale),
  };
}

export default async function SolarEnergy({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("industries.solar");

  const cardIndices = [0, 1, 2, 3] as const;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        {t("description")}
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {cardIndices.map((i) => (
          <div key={i} className="rounded-xl border border-border bg-surface p-6">
            <h2 className="font-semibold text-primary">{t(`cards.${i}.title`)}</h2>
            <p className="mt-2 text-sm text-muted">{t(`cards.${i}.description`)}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <a
          href="/work/solar-align/"
          className="block rounded-lg border border-border p-4 transition-colors hover:border-accent"
        >
          <span className="font-medium text-primary">{t("seeSolarAlign.link")}</span>
          <p className="mt-1 text-sm text-muted">{t("seeSolarAlign.description")}</p>
        </a>
      </div>
      <div className="mt-10">
        <CTA href="/contact/">{t("cta")}</CTA>
      </div>
    </div>
  );
}
