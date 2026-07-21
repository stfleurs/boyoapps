import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Boyo Apps is an independent software studio focused on building practical mobile and web applications.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        About Boyo Apps
      </h1>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">The Studio</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Boyo Apps is an independent software studio focused on building
          practical mobile and web applications that solve real-world problems.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Our portfolio spans business management, retail, finance, solar
          technology, marketplaces, productivity and consumer applications.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          We don&apos;t just claim we can build applications. We&apos;ve
          already built, published and maintained multiple production
          applications available on Google Play and the web.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">What We Believe</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Real Products Matter",
              desc: "The best evidence of capability is shipping real software that real people use.",
            },
            {
              title: "Practical Engineering",
              desc: "Software should work under real-world conditions — offline, across currencies, and at scale.",
            },
            {
              title: "Long-Term Thinking",
              desc: "We build applications designed to evolve, not throwaway prototypes.",
            },
            {
              title: "Clear Communication",
              desc: "Good software comes from understanding the problem first.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">Technologies &amp; Expertise</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Flutter",
            "Dart",
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Firebase",
            "Cloud Firestore",
            "REST APIs",
            "Offline Architecture",
            "Multi-Currency Systems",
            "Cross-Platform Development",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-12">
        <h2 className="text-2xl font-bold text-primary">Founder</h2>
        <div className="mt-6 flex items-start gap-6">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-xl font-bold text-accent">
            SS
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">Steeve St Fleur</h3>
            <p className="mt-2 leading-relaxed text-muted">
              Steeve is a software developer and the founder of Boyo Apps. With
              experience building production applications across multiple
              domains, he leads the studio&apos;s product development and
              client work.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-12">
        <CTA href="/contact/">Start a Project &rarr;</CTA>
      </div>
    </div>
  );
}
