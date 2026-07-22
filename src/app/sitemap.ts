import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://boyoapps.web.app";
  const today = new Date();

  const routes = [
    { path: "", lastModified: today, changeFrequency: "weekly" as const, priority: 1 },
    { path: "/about/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/contact/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/blog/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/privacy/", lastModified: today, changeFrequency: "yearly" as const, priority: 0.4 },
    { path: "/terms/", lastModified: today, changeFrequency: "yearly" as const, priority: 0.4 },
    { path: "/services/mobile-app-development/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services/business-app-development/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services/web-app-development/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services/saas-development/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/work/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/work/vendrex-pos/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/work/tally-cart/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/work/receet-pro/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/work/solar-align/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/work/boyomart/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/work/next-up/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/work/gqrly/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/work/solar-merge/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.5 },
    { path: "/industries/retail/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/industries/small-business/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/industries/solar-energy/", lastModified: today, changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}