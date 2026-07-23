"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("header");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/services/mobile-app-development/", label: t("services") },
    { href: "/work/", label: t("work") },
    { href: "/industries/retail/", label: t("industries") },
    { href: "/about/", label: t("about") },
    { href: "/blog/", label: t("blog") },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-white/85 shadow-sm backdrop-blur-md py-3.5"
          : "border-b border-transparent bg-white/60 backdrop-blur-sm py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]">
          <Image
            src="/images/logo/boyo-apps-logo.webp"
            alt="Boyo Apps"
            width={732}
            height={243}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-light hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {t("letsTalk")}
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-1 md:hidden"
          aria-label={open ? t("ariaMenuClose") : t("ariaMenuOpen")}
          aria-expanded={open}
        >
          <span className={`h-0.5 w-6 bg-primary transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-primary transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-primary transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-white/95 px-6 pb-6 pt-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-light"
            >
              {t("letsTalk")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
