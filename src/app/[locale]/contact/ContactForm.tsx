"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { CTA } from "@/components/CTA";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const t = useTranslations("contact");

  if (submitted) {
    return (
      <div className="mt-12 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {t("success.title")}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {t("success.description")}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CTA href="/work/">{t("success.exploreWork")}</CTA>
          <Link
            href="/"
            className="text-sm font-semibold text-muted underline underline-offset-2 transition-colors hover:text-accent"
          >
            {t("success.backHome")}
          </Link>
        </div>
      </div>
    );
  }

  const form = t.raw("form") as {
    labels: Record<string, string>;
    placeholders: Record<string, string>;
    projectTypes: Record<string, string>;
    budgetOptions: Record<string, string>;
    timelineOptions: Record<string, string>;
    honeypot: string;
    submit: string;
    sending: string;
    error: string;
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setSending(true);
        setError(false);
        const formElem = e.currentTarget;
        const data = new FormData(formElem);
        try {
          const res = await fetch("https://formspree.io/f/xbdnkpnq", {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" },
          });
          if (res.ok) setSubmitted(true);
          else setError(true);
        } catch {
          setError(true);
        } finally {
          setSending(false);
        }
      }}
      className="mt-12 space-y-6"
    >
      <label className="sr-only" htmlFor="_honeypot">
        {form.honeypot}
      </label>
      <input
        type="text"
        name="_honeypot"
        id="_honeypot"
        className="absolute -left-[9999px]"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary">
            {form.labels.name} <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder={form.placeholders.name}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary">
            {form.labels.email} <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder={form.placeholders.email}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-primary">
          {form.labels.company}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          autoComplete="organization"
          className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder={form.placeholders.company}
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-primary">
          {form.labels.projectType} <span className="text-accent">*</span>
        </label>
        <select
          id="type"
          name="type"
          required
          className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <option value="">{form.projectTypes.select}</option>
          <option value="Mobile App">{form.projectTypes.mobileApp}</option>
          <option value="Business Application">{form.projectTypes.businessApp}</option>
          <option value="Web Application">{form.projectTypes.webApp}</option>
          <option value="SaaS Product">{form.projectTypes.saas}</option>
          <option value="Existing App Improvement">{form.projectTypes.existingApp}</option>
          <option value="Not Sure Yet">{form.projectTypes.notSure}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary">
          {form.labels.message} <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder={form.placeholders.message}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-primary">
            {form.labels.budget}
          </label>
          <select
            id="budget"
            name="budget"
            className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="">{form.budgetOptions.select}</option>
            <option value="Under $2,500">{form.budgetOptions.under2500}</option>
            <option value="$2,500–$5,000">{form.budgetOptions["2500to5000"]}</option>
            <option value="$5,000–$10,000">{form.budgetOptions["5000to10000"]}</option>
            <option value="$10,000–$25,000">{form.budgetOptions["10000to25000"]}</option>
            <option value="$25,000+">{form.budgetOptions["25000plus"]}</option>
            <option value="Not sure yet">{form.budgetOptions.notSure}</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-primary">
            {form.labels.timeline}
          </label>
          <select
            id="timeline"
            name="timeline"
            className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="">{form.timelineOptions.select}</option>
            <option value="ASAP">{form.timelineOptions.asap}</option>
            <option value="1-3 months">{form.timelineOptions["1to3months"]}</option>
            <option value="3-6 months">{form.timelineOptions["3to6months"]}</option>
            <option value="6+ months">{form.timelineOptions["6plusMonths"]}</option>
            <option value="Exploring">{form.timelineOptions.exploring}</option>
          </select>
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {form.error}
        </p>
      )}
      <button
        type="submit"
        disabled={sending}
        className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all duration-300 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? form.sending : form.submit}
      </button>
    </form>
  );
}
