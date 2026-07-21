import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Custom Web Application Development | Boyo Apps",
  description:
    "Secure, scalable web applications that allow your team and customers to access your software from anywhere.",
};

export default function WebAppDevelopment() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Custom Web Application Development
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Secure, scalable web applications that allow your team and customers to
        access your software from anywhere, on any device.
      </p>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-primary">What We Build</h2>
          <ul className="mt-6 space-y-4">
            {[
              "Cloud-based business applications",
              "Admin dashboards & management panels",
              "Customer portals",
              "Responsive web applications",
              "API development & integration",
              "Database architecture",
              "Authentication & authorization systems",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-accent">&check;</span>
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-surface p-8">
          <h2 className="text-2xl font-bold text-primary">Our Web Experience</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Our products span web-based POS, inventory dashboards, analytics
            platforms, marketplace interfaces and SaaS applications &mdash; all
            built with modern technologies.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <CTA href="/contact/">Start Your Web Project &rarr;</CTA>
      </div>
    </div>
  );
}
