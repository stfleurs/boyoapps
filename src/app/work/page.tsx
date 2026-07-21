import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore the products and applications built by Boyo Apps. Real engineering, real products, real results.",
};

export default function Work() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Our Work
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Real products. Real engineering. Every application here was designed,
        built and shipped by Boyo Apps.
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
                alt={`${product.name} app icon`}
                width={64}
                height={64}
                className="h-14 w-14 object-contain"
              />
            ) : (
              <AppIcon name={product.name} color={product.iconColor} />
            )}
            <p className="mt-4 text-xs font-semibold tracking-wider text-muted">
              {product.category}
            </p>
            <h2 className="mt-1.5 text-xl font-semibold text-primary group-hover:text-accent">
              {product.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {product.shortDescription}
            </p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
              View details <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
