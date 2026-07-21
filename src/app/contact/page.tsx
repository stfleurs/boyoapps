import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project and let's turn your idea into something people can actually use.",
};

export default function Contact() {
  return (
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
    </div>
  );
}
