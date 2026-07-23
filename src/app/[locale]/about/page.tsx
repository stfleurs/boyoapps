import type { Metadata } from "next";
import { buildAlternates } from "@/lib/metadata";
import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { CTA } from "@/components/CTA";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("pageTitle"),
    ...buildAlternates("/about/", locale),
  };
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function About({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  const theStudio = t.raw("sections.theStudio") as { title: string; paragraphs: string[] };
  const behindBoyoApps = t.raw("sections.behindBoyoApps") as {
    title: string;
    intro: string;
    name: string;
    bio: string[];
  };
  const fromIdeaToProduct = t.raw("sections.fromIdeaToProduct") as { title: string; paragraphs: string[] };
  const softwareDependOn = t.raw("sections.softwareBusinessesDependOn") as {
    title: string;
    paragraphs: string[];
    items: string[];
    closing: string[];
  };
  const whyBuildMyOwn = t.raw("sections.whyBuildMyOwn") as {
    title: string;
    paragraphs: string[];
  };
  const smallStudio = t.raw("sections.smallStudio") as {
    title: string;
    paragraphs: string[];
  };
  const builtBeyondPortfolio = t.raw("sections.builtBeyondPortfolio") as {
    title: string;
    paragraphs: string[];
  };
  const whatICareAbout = t.raw("sections.whatICareAbout") as {
    title: string;
    paragraphs: string[];
  };
  const haveSomethingToBuild = t.raw("sections.haveSomethingToBuild") as {
    title: string;
    paragraphs: string[];
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        {t("pageTitle")}
      </h1>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">{theStudio.title}</h2>
        {theStudio.paragraphs.map((paragraph: string, i: number) => (
          <p key={i} className="mt-4 leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">{behindBoyoApps.title}</h2>
        <p className="mt-6 leading-relaxed text-muted">
          {behindBoyoApps.intro}
        </p>
        <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
          <div className="flex h-24 w-24 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-accent to-accent/60 shadow-inner">
            <Image
              src="/images/founder/steeve-st-fleur.webp"
              alt="Steeve St Fleur"
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            {behindBoyoApps.bio.map((paragraph: string, i: number) => (
              <p key={i} className={i > 0 ? "mt-4 leading-relaxed text-muted" : "leading-relaxed text-muted"}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">{fromIdeaToProduct.title}</h2>
        {fromIdeaToProduct.paragraphs.map((paragraph: string, i: number) => (
          <p key={i} className="mt-4 leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">{softwareDependOn.title}</h2>
        {softwareDependOn.paragraphs.map((paragraph: string, i: number) => (
          <p key={i} className="mt-4 leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {softwareDependOn.items.map((item: string) => (
            <div key={item} className="flex items-start gap-2">
              <span className="mt-1 text-accent">&bull;</span>
              <span className="text-sm text-muted">{item}</span>
            </div>
          ))}
        </div>
        {softwareDependOn.closing.map((paragraph: string, i: number) => (
          <p key={i} className="mt-4 leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">{whyBuildMyOwn.title}</h2>
        {whyBuildMyOwn.paragraphs.map((paragraph: string, i: number) => (
          <p key={i} className="mt-4 leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">{smallStudio.title}</h2>
        {smallStudio.paragraphs.map((paragraph: string, i: number) => (
          <p key={i} className="mt-4 leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">{builtBeyondPortfolio.title}</h2>
        {builtBeyondPortfolio.paragraphs.map((paragraph: string, i: number) => (
          <p key={i} className="mt-4 leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">{whatICareAbout.title}</h2>
        {whatICareAbout.paragraphs.map((paragraph: string, i: number) => (
          <p key={i} className="mt-4 leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">{haveSomethingToBuild.title}</h2>
        {haveSomethingToBuild.paragraphs.map((paragraph: string, i: number) => (
          <p key={i} className="mt-4 leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </section>

      <div className="mt-12">
        <CTA href="/contact/">{t("finalCta")}</CTA>
      </div>
    </div>
  );
}
