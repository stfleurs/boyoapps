import type { Metadata } from "next";
import Script from "next/script";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project and let's turn your idea into something people can actually use.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to build an app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on scope. A focused MVP typically runs $5,000–$25,000. A full-featured business application with offline sync, multi-currency, and cross-platform delivery can range $25,000–$100,000+. We provide a detailed proposal after understanding your requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How long does app development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An MVP takes 8–16 weeks. Full-featured business applications with offline architecture, multi-currency, and cross-platform delivery typically range 4–9 months depending on complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Can you improve an existing application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can audit, refactor, add features, fix bugs, or rebuild parts of an existing codebase. We first assess the current architecture and technical debt, then propose a phased improvement plan.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build both the mobile app and backend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We deliver full-stack: mobile front-end (Android/Flutter), web dashboard (Next.js/React), cloud backend (Firebase/Node.js), database, authentication, APIs, and sync infrastructure — all from one team.",
      },
    },
    {
      "@type": "Question",
      name: "Do you publish applications to Google Play and the App Store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle the full release process: store listings, screenshots, privacy policies, compliance, test tracks, and production rollout. We've published multiple apps to Google Play and can guide iOS App Store submission.",
      },
    },
    {
      "@type": "Question",
      name: "Can my application work offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Offline-first architecture is a core specialty. We build apps that function fully without connectivity — local data storage, background sync queues, conflict resolution — and synchronize automatically when online. Vendrex and Tally Cart are production proof.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing maintenance and support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer post-launch retainers for bug fixes, platform updates, feature additions, monitoring, and scaling. Our goal is a long-term partnership, not a handoff.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We've built software for businesses in multiple countries and time zones. Communication happens via email, video calls, and async tools. Our products (Vendrex, Receet Pro) already serve users globally with multi-currency and multi-language support.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns the source code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You do. All code, assets, and IP created for your project are yours. We deliver the full repository, documentation, and deployment credentials. No lock-in.",
      },
    },
  ],
};

export default function Contact() {
  const faqs = faqJsonLd.mainEntity;

  return (
    <>
      <Script
        id="contact-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Have an App Idea?
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Let&apos;s turn it into something people can actually use. Tell us
          about your business, the problem you&apos;re trying to solve, and
          what you&apos;d like to build.
        </p>
        <ContactForm />

        <section className="mt-24 border-t border-border/60 pt-16">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-muted mb-8 max-w-2xl">
            Quick answers before we hop on a call.
          </p>
          <dl className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border/60 rounded-xl p-5">
                <dt className="font-semibold text-primary text-base">
                  {faq.name}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">
                  {faq.acceptedAnswer.text}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </>
  );
}
