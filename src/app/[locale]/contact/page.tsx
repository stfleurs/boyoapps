import type { Metadata } from "next";
import Script from "next/script";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ContactForm } from "./ContactForm";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("pageTitle"),
    description: t("description"),
  };
}

type Props = {
  params: Promise<{ locale: string }>;
};

type FaqItem = {
  question: string;
  answer: string;
};

export default async function Contact({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  const faqs = t.raw("faqs") as FaqItem[];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq: FaqItem) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="contact-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {t("pageTitle")}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {t("description")}
        </p>
        <ContactForm />

        <section className="mt-24 border-t border-border/60 pt-16">
          <h2 className="text-2xl font-bold text-primary mb-4">
            {t("faqTitle")}
          </h2>
          <p className="text-sm text-muted mb-8 max-w-2xl">
            {t("faqDescription")}
          </p>
          <dl className="space-y-6">
            {faqs.map((faq: FaqItem, i: number) => (
              <div key={i} className="border border-border/60 rounded-xl p-5">
                <dt className="font-semibold text-primary text-base">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </>
  );
}
