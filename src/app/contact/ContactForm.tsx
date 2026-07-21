"use client";

import { useState } from "react";
import Link from "next/link";
import { CTA } from "@/components/CTA";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  if (submitted) {
    return (
      <div className="mt-12 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Thanks — we&apos;ve received your project details.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          We&apos;ll review what you&apos;ve shared and get back to you
          shortly.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CTA href="/work/">Explore Our Work</CTA>
          <Link
            href="/"
            className="text-sm font-semibold text-muted underline underline-offset-2 transition-colors hover:text-accent"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setSending(true);
        setError(false);
        const form = e.currentTarget;
        const data = new FormData(form);
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
        Do not fill this field
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
            Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary">
            Email <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-primary">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          autoComplete="organization"
          className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Your company (optional)"
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-primary">
          What would you like to build? <span className="text-accent">*</span>
        </label>
        <select
          id="type"
          name="type"
          required
          className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <option value="">Select an option</option>
          <option value="Mobile App">Mobile App</option>
          <option value="Business Application">Business Application</option>
          <option value="Web Application">Web Application</option>
          <option value="SaaS Product">SaaS Product</option>
          <option value="Existing App Improvement">Existing Application Improvement</option>
          <option value="Not Sure Yet">Not Sure Yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary">
          Tell us about your project <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Describe your project, goals, and any requirements..."
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-primary">
            Approximate Budget
          </label>
          <select
            id="budget"
            name="budget"
            className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="">Select a range</option>
            <option value="Under $2,500">Under $2,500</option>
            <option value="$2,500–$5,000">$2,500–$5,000</option>
            <option value="$5,000–$10,000">$5,000–$10,000</option>
            <option value="$10,000–$25,000">$10,000–$25,000</option>
            <option value="$25,000+">$25,000+</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-primary">
            Target Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="">Select a timeline</option>
            <option value="ASAP">As soon as possible</option>
            <option value="1-3 months">1&ndash;3 months</option>
            <option value="3-6 months">3&ndash;6 months</option>
            <option value="6+ months">6+ months</option>
            <option value="Exploring">Exploring an idea</option>
          </select>
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try again later.
        </p>
      )}
      <button
        type="submit"
        disabled={sending}
        className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all duration-300 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? "Sending…" : "Tell Us About Your Project"}
      </button>
    </form>
  );
}
