import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: "Blog",
    description: t("description"),
  };
}

type Props = {
  params: Promise<{ locale: string }>;
};

type BlogPost = {
  date: string;
  title: string;
  description: string;
  readPost?: string;
};

export default async function Blog({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");

  const posts = t.raw("posts") as BlogPost[];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Blog
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        {t("description")}
      </p>

      <div className="mt-12 space-y-8">
        {posts.map((post, index) =>
          post.readPost ? (
            <Link
              key={index}
              href="/blog/how-we-built-an-offline-first-pos-system/"
              className="block rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <p className="text-xs font-medium text-accent">{post.date}</p>
              <h2 className="mt-2 text-xl font-semibold text-primary">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {post.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
                {post.readPost}
              </span>
            </Link>
          ) : (
            <div
              key={index}
              className="rounded-xl border border-border bg-surface p-6 opacity-60"
            >
              <p className="text-xs font-medium text-muted">{post.date}</p>
              <h2 className="mt-2 text-xl font-semibold text-primary">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {post.description}
              </p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
