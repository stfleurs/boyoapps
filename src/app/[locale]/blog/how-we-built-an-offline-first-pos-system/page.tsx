import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { siteConfig, buildAlternates } from "@/lib/metadata";

const siteUrl = siteConfig.url;
const pathname = "/blog/how-we-built-an-offline-first-pos-system/";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blogPost" });
  return {
    title: t("title"),
    description: t.raw("sections")[0].paragraphs[0].substring(0, 160),
    ...buildAlternates(pathname, locale),
  };
}

type Props = {
  params: Promise<{ locale: string }>;
};

type Section = {
  heading?: string;
  paragraphs: string[];
};

export default async function BlogPost({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blogPost");

  const sections = t.raw("sections") as Section[];
  const links = t.raw("links") as { caseStudy: string; backToBlog: string };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <p className="mb-2 text-sm font-semibold tracking-widest text-accent">
        {t("label")}
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-4 text-sm text-muted">
        {t("date")}
      </p>

      {sections.map((section, si) => (
        <section key={si} className={si === 0 ? "mt-12" : "mt-10"}>
          {section.heading && (
            <h2 className="text-2xl font-bold text-primary">
              {section.heading}
            </h2>
          )}
          {section.paragraphs.map((paragraph, pi) => (
            <p key={pi} className={pi > 0 ? "mt-4 leading-relaxed text-muted" : "mt-4 leading-relaxed text-muted"}>
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <div className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8">
        <Link
          href="/work/vendrex-pos/"
          className="inline-flex items-center gap-1 font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
        >
          {links.caseStudy}
        </Link>
        <Link
          href="/blog/"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent"
        >
          {links.backToBlog}
        </Link>
      </div>
    </div>
  );
}
