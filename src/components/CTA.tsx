import { Link } from "@/i18n/navigation";

type CTAProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
};

const styles: Record<string, string> = {
  primary:
    "inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all duration-300 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 group",
  secondary:
    "inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-primary-light hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 group",
  outline:
    "inline-flex items-center gap-2.5 rounded-full border-2 border-border/80 bg-white/60 px-6 py-3 text-sm font-semibold text-primary backdrop-blur-sm transition-all duration-300 hover:border-accent hover:bg-white hover:text-accent hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 group",
};

export function CTA({ href, children, variant = "primary" }: CTAProps) {
  return (
    <Link href={href} className={styles[variant]}>
      <span>{children}</span>
      <svg
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </Link>
  );
}

