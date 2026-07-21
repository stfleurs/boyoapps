import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/metadata";

const serviceLinks = [
  { href: "/services/mobile-app-development/", label: "Mobile App Development" },
  { href: "/services/business-app-development/", label: "Business Applications" },
  { href: "/services/web-app-development/", label: "Web App Development" },
  { href: "/services/saas-development/", label: "SaaS Development" },
];

const workLinks = [
  { href: "/work/vendrex-pos/", label: "Vendrex" },
  { href: "/work/tally-cart/", label: "Tally Cart" },
  { href: "/work/solar-align/", label: "Solar Align" },
  { href: "/work/receet-pro/", label: "Receet Pro" },
  { href: "/work/", label: "View All Work" },
];

const companyLinks = [
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="group inline-block transition-transform duration-200 hover:scale-[1.02]">
              <Image
                src="/images/logo/boyo-apps-logo.webp"
                alt="Boyo Apps"
                width={732}
                height={243}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Mobile &amp; web applications built for the real world.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-widest text-primary/60 uppercase">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-widest text-primary/60 uppercase">
              Work
            </h3>
            <ul className="space-y-3">
              {workLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-widest text-primary/60 uppercase">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-8 text-xs font-bold tracking-widest text-primary/60 uppercase">
              Connect
            </h3>
            <ul className="space-y-3">

              <li>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-accent"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Send a Message
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Boyo Apps. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy/" className="text-xs text-muted transition-colors duration-200 hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="text-xs text-muted transition-colors duration-200 hover:text-accent">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

