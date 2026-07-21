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
            <Link href="/" className="text-lg font-extrabold tracking-tight text-primary">
              BOYO <span className="font-light text-accent">APPS</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Mobile & web applications built for the real world.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-widest text-muted uppercase">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-widest text-muted uppercase">
              Work
            </h3>
            <ul className="space-y-3">
              {workLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-widest text-muted uppercase">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-8 text-xs font-semibold tracking-widest text-muted uppercase">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  className="text-sm text-muted transition-colors hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {siteConfig.links.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Boyo Apps. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy/" className="text-xs text-muted transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="text-xs text-muted transition-colors hover:text-accent">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
