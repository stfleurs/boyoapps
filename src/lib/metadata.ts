import type { Metadata } from "next";

export const siteConfig = {
  name: "Boyo Apps",
  description:
    "Boyo Apps builds custom mobile apps, web applications and business software. Explore our products and turn your business idea into reliable software.",
  url: "https://boyoapps.web.app",
  ogImage: "/og-image.jpg",
  email: "boyoapps@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/steeve-st-fleur/",
    github: "https://github.com/stfleurs",
  },
};

const locales = ["en", "fr"];

export function buildAlternates(path: string, locale: string) {
  const baseUrl = siteConfig.url;
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${baseUrl}/${l}${path}`;
  }
  languages["x-default"] = `${baseUrl}/en${path}`;
  return {
    alternates: {
      canonical: `${baseUrl}/${locale}${path}`,
      languages,
    },
  };
}