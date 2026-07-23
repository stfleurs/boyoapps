import type { Metadata } from "next";
import { buildAlternates } from "@/lib/metadata";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { products } from "@/lib/products";
import { AppIcon } from "@/components/AppIcon";

const productIcons: Record<string, string> = {
  "vendrex-pos": "/images/icons/vendrex-pos.webp",
  "tally-cart": "/images/icons/tally-cart.webp",
  "solar-align": "/images/icons/solar-align.webp",
  "receet-pro": "/images/icons/receet-pro.webp",
  "gqrly": "/images/icons/gqrly.webp",
  "next-up": "/images/icons/next-up.webp",
  "boyomart": "/images/icons/boyomart.webp",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "work" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    ...buildAlternates("/work/", locale),
  };
}

export default async function Work({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("work");
  const p = await getTranslations("products");

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        {t("description")}
      </p>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/work/${product.slug}/`}
            className="group rounded-2xl border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl"
          >
            {productIcons[product.slug] ? (
              <Image
                src={productIcons[product.slug]}
                alt={`${p(`${product.slug}.name`)} app icon`}
                width={64}
                height={64}
                className="h-14 w-14 object-contain"
              />
            ) : (
              <AppIcon name={p(`${product.slug}.name`)} color={product.iconColor} />
            )}
            <p className="mt-4 text-xs font-semibold tracking-wider text-muted">
              {p(`${product.slug}.category`)}
            </p>
            <h2 className="mt-1.5 text-xl font-semibold text-primary group-hover:text-accent">
              {p(`${product.slug}.name`)}
            </h2>
            {product.status !== "live" && (
              <span className="mt-2 inline-block rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                {product.status === "development"
                  ? t("statusBadges.inDevelopment")
                  : t("statusBadges.concept")}
              </span>
            )}
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {p(`${product.slug}.shortDescription`)}
            </p>
            {product.googlePlay && (
              <a
                href={product.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-dark"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.5 4.45c-.02-.26-.19-.49-.45-.57-.23-.07-.47.04-.61.23l-2.3 3.01c-.25.33-.53.38-.81.15-.14-.12-.28-.26-.44-.41-.25-.23-.55-.23-.82 0-.16.15-.3.29-.44.41-.28.23-.55.29-.81.15L6.98 5.55c-.14-.19-.37-.28-.61-.23-.26.08-.43.31-.45.57-.05.72-.08 1.46-.08 2.19 0 2.85.27 5.57.8 8.12.14.67.7 1.09 1.14.67.52-.5 1.17-.82 1.84-.82.35 0 .7.12 1 .32.5.34.86.86 1.07 1.42.22.62.19 1.29-.1 1.87-.32.65-.85 1.07-1.43 1.16-.07.01-.13 0-.19-.02-.41-.14-.76-.38-1.02-.7-.3-.4-.5-.9-.54-1.42a28.9 28.9 0 0 1-.04-1.71c0-.39 0-.77-.02-1.15-.02-.6-.04-1.2-.05-1.8zm7.86 10.04c-.56.58-1.38.94-2.25 1.05-.88.11-1.75-.09-2.5-.54-.74-.45-1.29-1.13-1.59-1.91-.3-.78-.34-1.58-.11-2.34.27-.86.84-1.47 1.58-1.8.73-.33 1.53-.39 2.31-.16.78.23 1.39.75 1.76 1.35.32.51.4 1.08.25 1.65-.15.59-.6.96-1.14 1.15zM8.42 15.9c.53-.61 1.25-1 2.12-1.17.88-.17 1.76.07 2.5.64.74.58 1.31 1.44 1.62 2.39.32.97.37 1.97.1 2.92-.3.97-.94 1.67-1.73 2.07-.78.4-1.61.45-2.44.12-.84-.33-1.49-.96-1.87-1.75-.38-.79-.45-1.66-.15-2.46.32-.82.94-1.39 1.7-1.71zM9.12 9.04c-.19.19-.33.43-.4.69-.12.42-.05.87.18 1.2.23.32.56.5.93.5.38 0 .71-.18.93-.5.22-.33.3-.78.11-1.2-.19-.42-.45-.66-.71-.85-.26-.18-.56-.25-.9-.25-.34 0-.64.07-.9.22-.27.15-.45.38-.52.66z" />
                </svg>
                {t("googlePlay")}
              </a>
            )}
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
              {t("viewDetails")}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
