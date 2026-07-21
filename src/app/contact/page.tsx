import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

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
        Let&apos;s turn it into something people can actually use. Tell us about
        your business, the problem you&apos;re trying to solve, and what
        you&apos;d like to build.
      </p>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="mt-12 space-y-6"
      >
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
            <option value="">Select a option</option>
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
            <input
              type="text"
              id="budget"
              name="budget"
              className="mt-1.5 block w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Optional"
            />
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

        <button
          type="submit"
          className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Tell Us About Your Project
        </button>
      </form>
    </div>
  );
}
