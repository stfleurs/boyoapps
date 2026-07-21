import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights and technical articles from the Boyo Apps team on software development, mobile apps, and business technology.",
};

export default function Blog() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Blog
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Insights and technical articles from the Boyo Apps team on software
        development, mobile apps, and business technology.
      </p>

      <div className="mt-12 space-y-8">
        {[
          {
            title: "How We Built an Offline-First POS System",
            desc: "Lessons learned from building Vendrex, a POS platform designed to work reliably without constant internet connectivity.",
            date: "Coming soon",
          },
          {
            title: "Building Multi-Currency Software: What We Learned From Vendrex",
            desc: "Multi-currency architecture isn't just about exchange rates. Here's what we discovered building a real-world multi-currency application.",
            date: "Coming soon",
          },
          {
            title: "Mobile App vs Web App: Which Does Your Business Need?",
            desc: "A practical guide to choosing the right platform for your business application.",
            date: "Coming soon",
          },
        ].map((post) => (
          <article
            key={post.title}
            className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent"
          >
            <p className="text-xs font-medium text-muted">{post.date}</p>
            <h2 className="mt-2 text-xl font-semibold text-primary">
              {post.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{post.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
