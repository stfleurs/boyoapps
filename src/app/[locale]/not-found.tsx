"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="flex flex-1 items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary">{t("code")}</h1>
        <p className="mt-4 text-lg text-muted">
          {t("message")}
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}
