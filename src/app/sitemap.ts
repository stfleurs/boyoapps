import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://boyoapps.web.app";

  const routes = [
    "",
    "/services/mobile-app-development/",
    "/services/business-app-development/",
    "/services/web-app-development/",
    "/services/saas-development/",
    "/work/",
    "/work/vendrex-pos/",
    "/work/tally-cart/",
    "/work/solar-align/",
    "/work/receet-pro/",
    "/work/gqrly/",
    "/work/next-up/",
    "/work/boyomart/",
    "/work/solar-merge/",
    "/industries/retail/",
    "/industries/small-business/",
    "/industries/solar-energy/",
    "/about/",
    "/blog/",
    "/contact/",
    "/privacy/",
    "/terms/",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
