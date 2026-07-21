import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "SaaS Product Development | Boyo Apps",
  description:
    "From MVP to full-scale subscription platforms with authentication, billing, analytics and cloud infrastructure.",
};

export default function SaaSDevelopment() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        SaaS Product Development
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        From MVP to full-scale subscription platforms with authentication,
        billing, analytics and cloud infrastructure.
      </p>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-primary">What We Build</h2>
          <ul className="mt-6 space-y-4">
            {[
              "MVP development & validation",
              "Subscription billing systems",
              "User authentication & authorization",
              "Analytics & reporting dashboards",
              "Cloud architecture & scaling",
              "Web + mobile SaaS applications",
              "API-first platforms",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-accent">&check;</span>
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-surface p-8">
          <h2 className="text-2xl font-bold text-primary">SaaS Experience</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Our products include subscription-based applications, cloud-synced
            services, and platforms serving multiple users with role-based
            access and real-time collaboration.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <CTA href="/contact/">Discuss Your SaaS Idea &rarr;</CTA>
      </div>
    </div>
  );
}
