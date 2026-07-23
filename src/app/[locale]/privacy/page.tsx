import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "privacy" });

  return {
    title: t("meta.title"),
  };
}

export default async function Privacy({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  const sections = ["infoWeCollect", "howWeUseInfo", "dataSecurity", "thirdParty"] as const;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-4 text-sm text-muted">{t("lastUpdated")}</p>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted">
        {sections.map((section) => (
          <section key={section}>
            <h2 className="text-lg font-semibold text-primary">{t(`sections.${section}.title`)}</h2>
            <p className="mt-2">{t(`sections.${section}.content`)}</p>
          </section>
        ))}
        <section>
          <h2 className="text-lg font-semibold text-primary">{t("sections.contact.title")}</h2>
          <p className="mt-2">
            {t.rich("sections.contact.content", {
              link: (chunks) => (
                <Link href="/contact/" className="text-accent underline underline-offset-2">{chunks}</Link>
              ),
            })}
          </p>
        </section>
      </div>
    </div>
  );
}
