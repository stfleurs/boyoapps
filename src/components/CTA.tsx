import Link from "next/link";

type CTAProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
};

const styles: Record<string, string> = {
  primary:
    "inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 group",
  secondary:
    "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 group",
  outline:
    "inline-flex items-center gap-2 rounded-full border-2 border-border px-6 py-3 text-sm font-semibold text-primary transition-all hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 group",
};

export function CTA({ href, children, variant = "primary" }: CTAProps) {
  return (
    <Link href={href} className={styles[variant]}>
      <span>{children}</span>
      <span className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
    </Link>
  );
}
