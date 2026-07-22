import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { CTA } from "@/components/CTA";
import { AppIcon } from "@/components/AppIcon";
import Link from "next/link";
import { featuredProducts } from "@/lib/products";

const productIcons: Record<string, string> = {
  "vendrex-pos": "/images/icons/vendrex-pos.webp",
  "tally-cart": "/images/icons/tally-cart.webp",
  "solar-align": "/images/icons/solar-align.webp",
  "receet-pro": "/images/icons/receet-pro.webp",
  "gqrly": "/images/icons/gqrly.webp",
  "next-up": "/images/icons/next-up.webp",
  "boyomart": "/images/icons/boyomart.webp",
};

export default function Home() {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden border-b border-border/50 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(232,62,91,0.06),transparent_50%)] px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-24">
        {/* Soft background ambient blur circles */}
        <div className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-40 h-96 w-96 rounded-full bg-accent-violet/10 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="max-w-xl">
              <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1.5 text-xs font-bold tracking-widest text-accent uppercase backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                MOBILE &bull; WEB &bull; BUSINESS SOFTWARE
              </div>
              
              <h1 className="mt-5 animate-fade-in-up text-[clamp(2.5rem,5vw,4.25rem)] font-extrabold leading-[1.08] tracking-tight text-primary">
                Boyo Apps Builds Apps That Solve
                <br />
                <span className="bg-gradient-to-r from-accent via-accent-dark to-accent-violet bg-clip-text text-transparent">
                  Real Business Problems.
                </span>
              </h1>
              
              <p className="mt-6 animate-fade-in-up max-w-lg text-lg leading-relaxed text-muted font-normal" style={{ animationDelay: "0.15s" }}>
                An independent software studio designing and developing custom mobile
                and web applications for businesses &mdash; from idea and architecture
                to launch and growth.
              </p>
              
              <div className="mt-8 flex animate-fade-in-up flex-wrap gap-4" style={{ animationDelay: "0.3s" }}>
                <CTA href="/contact/">Start Your Project</CTA>
                <CTA href="/work/" variant="outline">View Our Work</CTA>
              </div>

              {/* Credibility line */}
              <div className="mt-6 flex animate-fade-in-up flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-muted" style={{ animationDelay: "0.35s" }}>
                <span>Mobile Apps</span>
                <span className="text-border/60 hidden sm:inline">&middot;</span>
                <span>Web Applications</span>
                <span className="text-border/60 hidden sm:inline">&middot;</span>
                <span>Business Software</span>
                <span className="text-border/60 hidden sm:inline">&middot;</span>
                <span>SaaS</span>
              </div>
              <p className="mt-2 animate-fade-in-up text-sm text-muted/80" style={{ animationDelay: "0.4s" }}>
                From MVPs to production software &mdash; designed, developed and launched end-to-end.
              </p>

              {/* Capabilities badge strip */}
              <div className="mt-10 flex animate-fade-in-up flex-wrap items-center gap-4 text-xs font-semibold text-muted" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-1.5 rounded-lg border border-border/80 bg-white/70 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                  <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414c-.5511 0-.9996-.4486-.9996-.9997s.4485-.9996.9996-.9996c.5512 0 .9997.4485.9997.9996 0 .5511-.4485.9997-.9997.9997zm-11.046 0c-.5511 0-.9997-.4486-.9997-.9997s.4486-.9996.9997-.9996c.5511 0 .9996.4485.9996.9996 0 .5511-.4485.9997-.9996.9997zm11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1523-.5676.416.416 0 00-.5676.1523l-2.0223 3.503C15.5898 8.4116 13.8553 8 12 8s-3.5898.4116-5.1366.9499L4.841 5.4469a.416.416 0 00-.5676-.1523.416.416 0 00-.1523.5676l1.9973 3.4592C2.6889 11.054 0 14.739 0 19h24c0-4.261-2.6889-7.946-6.1185-9.6786z"/>
                  </svg>
                  <span>Android</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg border border-border/80 bg-white/70 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                  <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  <span>Web</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg border border-border/80 bg-white/70 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                  <svg className="h-4 w-4 text-accent-violet" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span>Cross-Platform</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg border border-border/80 bg-white/70 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                  <svg className="h-4 w-4 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                  </svg>
                  <span>Cloud</span>
                </div>
              </div>
            </div>

            {/* Hero product composition */}
            <div className="relative flex items-center justify-center py-8">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/15 via-accent-violet/15 to-accent/15 blur-3xl animate-pulse-glow" />

              {/* Main laptop — Vendrex */}
              <div className="hero-device relative z-10 w-full max-w-[530px] transition-transform duration-500 hover:scale-[1.01]">
                <div className="overflow-hidden rounded-xl border border-border/80 bg-white shadow-2xl shadow-primary/10">
                  <div className="flex items-center gap-1.5 border-b border-border/60 bg-surface/90 px-4 py-2.5 backdrop-blur-sm">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-[11px] font-semibold text-muted">Vendrex POS — Dashboard</span>
                  </div>
                  <div className="aspect-[16/10] bg-white">
                    <Image
                      src="/images/screenshots/vendrex-dashboard.svg"
                      alt="Vendrex POS business management dashboard showing sales, inventory and reporting"
                      width={1200}
                      height={750}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="mx-auto -mt-1 h-3 w-[55%] rounded-b-lg border border-t-0 border-border/60 bg-surface shadow-sm" />
              </div>

              {/* Left phone — Tally Cart */}
              <div className="hero-device absolute -bottom-4 -left-4 z-20 w-[38%] max-w-[200px] transition-transform duration-300 hover:scale-[1.03] lg:-bottom-6 lg:-left-8">
                <div className="overflow-hidden rounded-[1.8rem] border-[3px] border-primary bg-primary p-1.5 shadow-2xl shadow-primary/25">
                  <div className="overflow-hidden rounded-[1.5rem] bg-white">
                    <Image
                      src="/images/screenshots/tally-cart.svg"
                      alt="Tally Cart shared grocery list and budget tracking application"
                      width={360}
                      height={760}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right phone — Solar Align */}
              <div className="hero-device absolute -bottom-4 -right-4 z-20 w-[38%] max-w-[200px] transition-transform duration-300 hover:scale-[1.03] lg:-bottom-6 lg:-right-8">
                <div className="overflow-hidden rounded-[1.8rem] border-[3px] border-primary bg-primary p-1.5 shadow-2xl shadow-primary/25">
                  <div className="overflow-hidden rounded-[1.5rem] bg-white">
                    <Image
                      src="/images/screenshots/solar-align.svg"
                      alt="Solar Align Pro solar panel alignment and ROI optimization tool"
                      width={360}
                      height={760}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS WE'VE BUILT ─── */}
      <FadeIn>
        <section className="px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
              REAL PRODUCTS. REAL ENGINEERING.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-[clamp(2rem,3.5vw,3.25rem)] font-extrabold tracking-tight text-primary">
                  Products We&apos;ve Built
                </h2>
                <p className="mt-3 max-w-xl text-lg text-muted font-normal">
                  We build our own products to solve real problems. Now we help businesses do the same.
                </p>
              </div>
              <CTA href="/work/" variant="outline">Explore All Products</CTA>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => {
                const iconSrc = productIcons[product.slug];
                return (
                  <a
                    key={product.slug}
                    href={`/work/${product.slug}/`}
                    className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10"
                  >
                    <div>
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface shadow-sm border border-border/40 transition-transform duration-300 group-hover:scale-105">
                        {iconSrc ? (
                          <Image
                            src={iconSrc}
                            alt={`${product.name} app icon`}
                            width={80}
                            height={80}
                            className="size-full object-contain rounded-xl"
                          />
                        ) : (
                          <AppIcon name={product.name} color={product.iconColor} />
                        )}
                      </div>
                      <p className="text-xs font-bold tracking-wider text-accent uppercase">
                        {product.category}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-primary group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {product.shortDescription}
                      </p>
                      {product.googlePlay && (
                        <a
                          href={product.googlePlay}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-dark"
                        >
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.5 4.45c-.02-.26-.19-.49-.45-.57-.23-.07-.47.04-.61.23l-2.3 3.01c-.25.33-.53.38-.81.15-.14-.12-.28-.26-.44-.41-.25-.23-.55-.23-.82 0-.16.15-.3.29-.44.41-.28.23-.55.29-.81.15L6.98 5.55c-.14-.19-.37-.28-.61-.23-.26.08-.43.31-.45.57-.05.72-.08 1.46-.08 2.19 0 2.85.27 5.57.8 8.12.14.67.7 1.09 1.14.67.52-.5 1.17-.82 1.84-.82.35 0 .7.12 1 .32.5.34.86.86 1.07 1.42.22.62.19 1.29-.1 1.87-.32.65-.85 1.07-1.43 1.16-.07.01-.13 0-.19-.02-.41-.14-.76-.38-1.02-.7-.3-.4-.5-.9-.54-1.42a28.9 28.9 0 0 1-.04-1.71c0-.39 0-.77-.02-1.15-.02-.6-.04-1.2-.05-1.8zm7.86 10.04c-.56.58-1.38.94-2.25 1.05-.88.11-1.75-.09-2.5-.54-.74-.45-1.29-1.13-1.59-1.91-.3-.78-.34-1.58-.11-2.34.27-.86.84-1.47 1.58-1.8.73-.33 1.53-.39 2.31-.16.78.23 1.39.75 1.76 1.35.32.51.4 1.08.25 1.65-.15.59-.6.96-1.14 1.15zM8.42 15.9c.53-.61 1.25-1 2.12-1.17.88-.17 1.76.07 2.5.64.74.58 1.31 1.44 1.62 2.39.32.97.37 1.97.1 2.92-.3.97-.94 1.67-1.73 2.07-.78.4-1.61.45-2.44.12-.84-.33-1.49-.96-1.87-1.75-.38-.79-.45-1.66-.15-2.46.32-.82.94-1.39 1.7-1.71zM9.12 9.04c-.19.19-.33.43-.4.69-.12.42-.05.87.18 1.2.23.32.56.5.93.5.38 0 .71-.18.93-.5.22-.33.3-.78.11-1.2-.19-.42-.45-.66-.71-.85-.26-.18-.56-.25-.9-.25-.34 0-.64.07-.9.22-.27.15-.45.38-.52.66z" />
                          </svg>
                          Google Play
                        </a>
                      )}
                    </div>

                    <div className="mt-8 flex items-center gap-1.5 text-sm font-semibold text-accent">
                      <span>View Case Study</span>
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ─── CUSTOM SOFTWARE SERVICES ─── */}
      <FadeIn>
        <section className="relative overflow-hidden bg-surface-dark px-6 py-28 text-white lg:px-8">
          {/* Ambient lighting inside dark section */}
          <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-accent-violet/10 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent-light uppercase">
              WHAT WE DO
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,3.25rem)] font-extrabold tracking-tight">
              Custom Software for Your Business
            </h2>

            <div className="mt-16 grid divide-y divide-white/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
              {[
                {
                  num: "01",
                  title: "Mobile App Development",
                  desc: "Cross-platform and native mobile apps designed for performance, usability and real-world conditions.",
                  href: "/services/mobile-app-development/",
                  icon: (
                    <svg className="h-7 w-7 text-accent-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                  ),
                },
                {
                  num: "02",
                  title: "Business Applications",
                  desc: "Inventory systems, POS, field tools, dashboards and internal software tailored to your operations.",
                  href: "/services/business-app-development/",
                  icon: (
                    <svg className="h-7 w-7 text-accent-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  ),
                },
                {
                  num: "03",
                  title: "Web Application Development",
                  desc: "Secure, scalable web apps that help you run and grow your business from anywhere.",
                  href: "/services/web-app-development/",
                  icon: (
                    <svg className="h-7 w-7 text-accent-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  ),
                },
                {
                  num: "04",
                  title: "SaaS Product Development",
                  desc: "From MVP to full-scale SaaS platforms with subscriptions, analytics and cloud infrastructure.",
                  href: "/services/saas-development/",
                  icon: (
                    <svg className="h-7 w-7 text-accent-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                    </svg>
                  ),
                },
              ].map((service) => (
                <a
                  key={service.href}
                  href={service.href}
                  className="group flex flex-col justify-between px-8 py-10 transition-colors hover:bg-white/[0.03] first:pl-0 last:pr-0 lg:py-4"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                        {service.icon}
                      </div>
                      <span className="text-2xl font-black text-white/15 group-hover:text-accent-light/40 transition-colors">{service.num}</span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold transition-colors group-hover:text-accent-light">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-300">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-1.5 text-sm font-semibold text-accent-light">
                    <span>Learn more</span>
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ─── FEATURED CASE STUDY: VENDREX ─── */}
      <FadeIn>
        <section className="border-b border-border/40 px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
              FEATURED CASE STUDY
            </p>
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="max-w-xl">
                <h2 className="text-[clamp(2rem,3.5vw,3.25rem)] font-extrabold tracking-tight text-primary">
                  Vendrex
                </h2>
                <p className="mt-2 text-xl font-semibold text-accent">
                  Building a complete POS and business management platform.
                </p>
                <p className="mt-4 leading-relaxed text-muted text-base">
                  Boyo Apps developed Vendrex to help businesses manage sales,
                  inventory, customers, employees and reporting from a modern
                  mobile and web platform.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "POS",
                    "Inventory",
                    "Multi-currency",
                    "Offline",
                    "Barcode",
                    "Reports",
                    "Android",
                    "Web",
                  ].map((cap) => (
                    <span
                      key={cap}
                      className="rounded-lg border border-border/80 bg-surface/80 px-3 py-1.5 text-xs font-bold text-muted"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <CTA href="/work/vendrex-pos/">
                    View the Vendrex Case Study
                  </CTA>
                  <CTA href="https://vendrex.store/" variant="outline">
                    Visit Vendrex
                  </CTA>
                  <a
                    href="https://play.google.com/store/apps/details?id=vendrex.pos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all duration-300 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.5 4.45c-.02-.26-.19-.49-.45-.57-.23-.07-.47.04-.61.23l-2.3 3.01c-.25.33-.53.38-.81.15-.14-.12-.28-.26-.44-.41-.25-.23-.55-.23-.82 0-.16.15-.3.29-.44.41-.28.23-.55.29-.81.15L6.98 5.55c-.14-.19-.37-.28-.61-.23-.26.08-.43.31-.45.57-.05.72-.08 1.46-.08 2.19 0 2.85.27 5.57.8 8.12.14.67.7 1.09 1.14.67.52-.5 1.17-.82 1.84-.82.35 0 .7.12 1 .32.5.34.86.86 1.07 1.42.22.62.19 1.29-.1 1.87-.32.65-.85 1.07-1.43 1.16-.07.01-.13 0-.19-.02-.41-.14-.76-.38-1.02-.7-.3-.4-.5-.9-.54-1.42a28.9 28.9 0 0 1-.04-1.71c0-.39 0-.77-.02-1.15-.02-.6-.04-1.2-.05-1.8zm7.86 10.04c-.56.58-1.38.94-2.25 1.05-.88.11-1.75-.09-2.5-.54-.74-.45-1.29-1.13-1.59-1.91-.3-.78-.34-1.58-.11-2.34.27-.86.84-1.47 1.58-1.8.73-.33 1.53-.39 2.31-.16.78.23 1.39.75 1.76 1.35.32.51.4 1.08.25 1.65-.15.59-.6.96-1.14 1.15zM8.42 15.9c.53-.61 1.25-1 2.12-1.17.88-.17 1.76.07 2.5.64.74.58 1.31 1.44 1.62 2.39.32.97.37 1.97.1 2.92-.3.97-.94 1.67-1.73 2.07-.78.4-1.61.45-2.44.12-.84-.33-1.49-.96-1.87-1.75-.38-.79-.45-1.66-.15-2.46.32-.82.94-1.39 1.7-1.71zM9.12 9.04c-.19.19-.33.43-.4.69-.12.42-.05.87.18 1.2.23.32.56.5.93.5.38 0 .71-.18.93-.5.22-.33.3-.78.11-1.2-.19-.42-.45-.66-.71-.85-.26-.18-.56-.25-.9-.25-.34 0-.64.07-.9.22-.27.15-.45.38-.52.66z" />
                    </svg>
                    Get it on Google Play
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-xl border border-border/80 bg-white shadow-2xl shadow-primary/10 transition-transform duration-500 hover:scale-[1.01]">
                  <div className="flex items-center gap-1.5 border-b border-border/60 bg-surface px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-[11px] font-semibold text-muted">Vendrex POS</span>
                  </div>
                  <div className="aspect-[16/10] bg-white">
                    <Image
                      src="/images/screenshots/vendrex-dashboard.svg"
                      alt="Vendrex POS dashboard showing sales metrics, inventory and reporting"
                      width={1200}
                      height={750}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="mx-auto -mt-1 h-3 w-[55%] rounded-b-lg border border-t-0 border-border/60 bg-surface shadow-sm" />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ─── RELIABLE SOFTWARE. REAL IMPACT. ─── */}
      <FadeIn>
        <section className="px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Product imagery collage */}
              <div className="relative">
                <div className="relative z-10 mx-auto max-w-[480px]">
                  {/* Main large device */}
                  <div className="overflow-hidden rounded-xl border border-border/80 bg-white shadow-2xl shadow-primary/10">
                    <div className="flex items-center gap-1.5 border-b border-border/60 bg-surface px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-rose-400" />
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="ml-1.5 text-[10px] font-medium text-muted">Vendrex</span>
                    </div>
                    <div className="aspect-[16/9] bg-white">
                      <Image
                        src="/images/screenshots/vendrex-dashboard.svg"
                        alt="Vendrex POS application showing inventory management and sales tracking"
                        width={1200}
                        height={750}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Overlapping phone 1 */}
                  <div className="absolute -bottom-6 -left-4 z-20 w-[35%] max-w-[160px] transition-transform duration-300 hover:scale-105">
                    <div className="overflow-hidden rounded-[1.5rem] border-[3px] border-primary bg-primary p-1 shadow-2xl shadow-primary/25">
                      <div className="overflow-hidden rounded-[1.2rem] bg-white">
                        <Image
                          src="/images/screenshots/tally-cart.svg"
                          alt="Tally Cart mobile application"
                          width={360}
                          height={760}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Overlapping phone 2 */}
                  <div className="absolute -bottom-6 -right-4 z-20 w-[35%] max-w-[160px] transition-transform duration-300 hover:scale-105">
                    <div className="overflow-hidden rounded-[1.5rem] border-[3px] border-primary bg-primary p-1 shadow-2xl shadow-primary/25">
                      <div className="overflow-hidden rounded-[1.2rem] bg-white">
                        <Image
                          src="/images/screenshots/solar-align.svg"
                          alt="Solar Align Pro mobile application"
                          width={360}
                          height={760}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -right-8 -z-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
                <div className="absolute -left-8 -top-8 -z-10 h-64 w-64 rounded-full bg-accent-violet/10 blur-3xl animate-pulse-glow" />
              </div>

              <div className="max-w-xl">
                <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
                  BUILT FOR THE REAL WORLD
                </p>
                <h2 className="text-[clamp(2rem,3.5vw,3.25rem)] font-extrabold tracking-tight text-primary">
                  Reliable Software.
                  <br />
                  Real Impact.
                </h2>
                <div className="mt-10 space-y-6">
                  {[
                    {
                      title: "Offline-First",
                      desc: "Applications designed to remain operational during unreliable connectivity — proven in Vendrex and Tally Cart.",
                    },
                    {
                      title: "Multi-Currency & International",
                      desc: "Architecture supporting diverse currencies, languages and global market requirements.",
                    },
                    {
                      title: "Modern Technology & Best Practices",
                      desc: "Built using modern frameworks and secure cloud infrastructure designed to scale with your business.",
                    },
                    {
                      title: "Designed to Scale",
                      desc: "Clean software architecture that seamlessly grows alongside your users from MVP to full enterprise deployment.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-sm shadow-sm">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-primary text-base">{item.title}</h3>
                        <p className="mt-1 text-sm text-muted leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <CTA href="/about/" variant="outline">About Boyo Apps</CTA>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ─── FROM IDEA TO LAUNCH ─── */}
      <FadeIn>
        <section className="border-y border-border/40 bg-surface/80 px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
                OUR METHODOLOGY
              </p>
              <h2 className="text-[clamp(2rem,3.5vw,3.25rem)] font-extrabold tracking-tight text-primary">
                From Idea to Launch
              </h2>
              <p className="mt-4 text-base text-muted max-w-xl mx-auto">
                A structured engineering process taking your vision seamlessly from initial concept to high-performing production app.
              </p>
            </div>

            {/* Responsive process steps - single implementation using CSS Grid */}
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
              {[
                { step: "01", title: "Discovery", desc: "Understand the problem, users and requirements." },
                { step: "02", title: "Planning", desc: "Determine functionality, architecture and scope." },
                { step: "03", title: "Design", desc: "Create interfaces and workflows." },
                { step: "04", title: "Development", desc: "Build the application and backend." },
                { step: "05", title: "Testing", desc: "Test functionality, performance and reliability." },
                { step: "06", title: "Launch", desc: "Deploy to production and app stores." },
                { step: "07", title: "Evolve", desc: "Updates, monitoring and improvements." },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className="relative flex flex-col items-center text-center group"
                  data-index={i}
                >
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-border bg-white text-sm font-bold text-accent shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-white group-hover:shadow-md shadow-accent/20 z-10">
                    {item.step}
                  </div>
                  {/* Connecting line - only show between items, not after last */}
                  {i < 6 && (
                    <div className="absolute top-7 left-1/2 w-full h-0.5 bg-border/80 -z-10 lg:left-[calc(50%+1.75rem)] lg:w-[calc(100%-3.5rem)] transition-colors group-hover:bg-accent/40" />
                  )}
                  <h3 className="mt-4 font-bold text-primary group-hover:text-accent transition-colors text-sm lg:text-base">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted hidden lg:block">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ─── BEHIND BOYO APPS ─── */}
      <FadeIn>
        <section className="px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">
                  INDEPENDENT STUDIO
                </p>
                <h2 className="text-[clamp(2rem,3.5vw,3.25rem)] font-extrabold tracking-tight text-primary">
                  Behind Boyo Apps
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  Boyo Apps is an independent software studio focused on building
                  practical mobile and web applications that solve real-world problems.
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  Our portfolio spans business management, retail, finance, solar
                  technology, marketplaces, productivity and consumer applications.
                </p>
                <div className="mt-8">
                  <CTA href="/about/">About Boyo Apps</CTA>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { slug: "vendrex-pos", name: "Vendrex", category: "POS & Business Management", gradient: "linear-gradient(135deg,#2563eb,#1d4ed8)" },
                  { slug: "tally-cart", name: "Tally Cart", category: "Shopping & Budget", gradient: "linear-gradient(135deg,#059669,#047857)" },
                  { slug: "solar-align", name: "Solar Align", category: "Solar Optimization", gradient: "linear-gradient(135deg,#0f172a,#132e1a)" },
                  { slug: "receet-pro", name: "Receet Pro", category: "Personal Finance", gradient: "linear-gradient(135deg,#0d9488,#0f766e)" },
                  { slug: "gqrly", name: "GQRLY", category: "QR & Link Analytics", gradient: "linear-gradient(135deg,#7c3aed,#6366f1)" },
                  { slug: "next-up", name: "NeXT Up", category: "Reminders & Productivity", gradient: "linear-gradient(135deg,#1e3a5f,#172554)" },
                  { slug: "boyomart", name: "BoyoMart", category: "Local Marketplace", gradient: "linear-gradient(135deg,#e11d48,#be123c)" },
                  { slug: "solar-merge", name: "Solar Merge", category: "Puzzle Game", gradient: "linear-gradient(135deg,#d97706,#b45309)" },
                ].map((product) => {
                  const iconSrc = productIcons[product.slug];
                  return (
                    <Link
                      key={product.slug}
                      href={`/work/${product.slug}/`}
                      className="group relative flex min-h-[115px] flex-col justify-between rounded-xl p-5 shadow-md transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl"
                      style={{ background: product.gradient }}
                    >
                      <div className="flex items-start justify-between">
                        {iconSrc ? (
                          <Image
                            src={iconSrc}
                            alt={`${product.name} icon`}
                            width={48}
                            height={48}
                            className="h-11 w-11 object-contain rounded-lg"
                          />
                        ) : (
                          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/15 text-lg font-bold text-white">
                            {product.name[0]}
                          </div>
                        )}
                        <svg className="h-4 w-4 text-white/70 transition-all duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm font-bold text-white">{product.name}</p>
                        <p className="mt-0.5 text-[11px] font-medium text-white/70">{product.category}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ─── FINAL CTA ─── */}
      <FadeIn>
        <section className="px-6 pb-28 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface-dark via-navy to-navy-light px-8 py-20 text-center text-white shadow-2xl shadow-primary/20 sm:px-16">
              <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent-violet/20 blur-3xl animate-pulse-glow" />
              <div className="relative">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-accent to-accent-violet text-white shadow-lg shadow-accent/30 animate-float">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.26-1.5 1.5-2.5l-4.5-4.5c-1 0-1.79.79-2.5 1.5z" />
                    <path d="M12 15l-3-3 7.5-7.5a2.121 2.121 0 0 1 3 3L12 15z" />
                    <path d="M9 18l3 3" />
                  </svg>
                </div>
                <h2 className="text-[clamp(2rem,3.5vw,3.25rem)] font-extrabold tracking-tight">
                  Have an App Idea?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-lg text-gray-200 font-medium">
                  Let&apos;s <span className="text-accent-coral underline underline-offset-4 decoration-accent-coral/40">turn it into something</span> people can actually use.
                </p>
                <p className="mt-3 text-sm text-gray-300 max-w-md mx-auto">
                  Tell us about your business, the problem you&apos;re trying to
                  solve, and what you&apos;d like to build.
                </p>
                <div className="mt-10">
                  <CTA href="/contact/">Discuss Your Project</CTA>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
