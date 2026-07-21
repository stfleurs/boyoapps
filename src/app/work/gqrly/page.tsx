import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "GQRLY — QR Code Analytics",
  description: "QR code generation and analytics platform by Boyo Apps.",
};

export default function GQRlyPage() {
  const product = products.find((p) => p.slug === "gqrly")!;
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <p className="mb-2 text-sm font-semibold tracking-widest text-accent">PRODUCT</p>
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">{product.name}</h1>
      <p className="mt-4 text-lg text-muted">{product.shortDescription}</p>
      <div className="mt-8 flex flex-wrap gap-2">
        {product.capabilities.map((cap) => (
          <span key={cap} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">{cap}</span>
        ))}
      </div>
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">About {product.name}</h2>
        <p className="mt-4 leading-relaxed text-muted">{product.longDescription}</p>
      </section>
      <div className="mt-12 border-t border-border pt-8">
        <CTA href="/contact/">Build Something Similar &rarr;</CTA>
      </div>
    </div>
  );
}
