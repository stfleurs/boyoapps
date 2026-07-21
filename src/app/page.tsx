import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { CTA } from "@/components/CTA";
import { AppIcon } from "@/components/AppIcon";
import { featuredProducts } from "@/lib/products";

const productIcons: Record<string, string> = {
  "vendrex-pos": "/images/icons/vendrex.svg",
  "tally-cart": "/images/icons/tally-cart.svg",
  "solar-align": "/images/icons/solar-align.svg",
  "receet-pro": "/images/icons/receet-pro.svg",
};

export default function Home() {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden border-b border-border/40 bg-[linear-gradient(to_bottom_right,#fff,#f0f5ff,#faf5ff)] px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="max-w-xl">
              <p className="animate-fade-in text-sm font-semibold tracking-[0.15em] text-accent">
                MOBILE &bull; WEB &bull; BUSINESS SOFTWARE
              </p>
              <h1 className="mt-4 animate-fade-in-up text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight text-primary">
                We Build Apps That Solve
                <br />
                <span className="text-accent">Real Business Problems.</span>
              </h1>
              <p className="mt-6 animate-fade-in-up max-w-lg text-lg leading-relaxed text-muted" style={{ animationDelay: "0.15s" }}>
                Boyo Apps designs and develops custom mobile and web applications
                for businesses &mdash; from idea and architecture to launch and
                growth.
              </p>
              <div className="mt-8 flex animate-fade-in-up flex-wrap gap-4" style={{ animationDelay: "0.3s" }}>
                <CTA href="/contact/">Start Your Project</CTA>
                <CTA href="/work/" variant="outline">View Our Work</CTA>
              </div>
              <div className="mt-8 flex animate-fade-in-up flex-wrap gap-6 text-sm text-muted" style={{ animationDelay: "0.4s" }}>
                <span className="font-medium">Android</span>
                <span className="text-border/60">|</span>
                <span className="font-medium">Web</span>
                <span className="text-border/60">|</span>
                <span className="font-medium">Cross-Platform</span>
                <span className="text-border/60">|</span>
                <span className="font-medium">Cloud</span>
              </div>
            </div>

            {/* Hero product composition */}
            <div className="relative flex items-center justify-center py-8">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/5 via-accent-violet/5 to-accent/5 blur-3xl" />

              {/* Main laptop — Vendrex */}
              <div className="hero-device w-full max-w-[520px]">
                <div className="overflow-hidden rounded-xl border border-border/60 bg-white shadow-2xl">
                  <div className="flex items-center gap-1.5 border-b border-border/60 bg-surface px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    <span className="ml-2 text-[10px] text-muted">Vendrex POS — Dashboard</span>
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
                <div className="mx-auto -mt-1 h-3 w-[55%] rounded-b-lg border border-t-0 border-border/60 bg-surface" />
              </div>

              {/* Left phone — Tally Cart */}
              <div className="hero-device absolute -bottom-4 -left-4 w-[38%] max-w-[200px] lg:-bottom-6 lg:-left-8">
                <div className="overflow-hidden rounded-[1.8rem] border-[3px] border-primary bg-primary p-1.5 shadow-2xl">
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
              <div className="hero-device absolute -bottom-4 -right-4 w-[38%] max-w-[200px] lg:-bottom-6 lg:-right-8">
                <div className="overflow-hidden rounded-[1.8rem] border-[3px] border-primary bg-primary p-1.5 shadow-2xl">
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
            <p className="mb-3 text-sm font-semibold tracking-[0.15em] text-accent">
              REAL PRODUCTS. REAL ENGINEERING.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-[clamp(1.75rem,3vw,3rem)] font-bold tracking-tight text-primary">
                  Products We&apos;ve Built
                </h2>
                <p className="mt-3 max-w-xl text-lg text-muted">
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
                    className="group relative rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/20 hover:shadow-xl"
                  >
                    {iconSrc ? (
                      <Image
                        src={iconSrc}
                        alt={`${product.name} app icon`}
                        width={80}
                        height={80}
                        className="h-14 w-14"
                      />
                    ) : (
                      <AppIcon name={product.name} color={product.iconColor} />
                    )}
                    <p className="mt-5 text-xs font-semibold tracking-wider text-muted">
                      {product.category}
                    </p>
                    <h3 className="mt-1.5 text-lg font-bold text-primary group-hover:text-accent">
                      {product.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {product.shortDescription}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      View Case Study <span className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ─── CUSTOM SOFTWARE SERVICES ─── */}
      <FadeIn>
        <section className="bg-surface-dark px-6 py-28 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.15em] text-accent-light">
              WHAT WE DO
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,3rem)] font-bold tracking-tight">
              Custom Software for Your Business
            </h2>

            <div className="mt-16 grid divide-y divide-white/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
              {[
                {
                  num: "01",
                  title: "Mobile App Development",
                  desc: "Cross-platform mobile applications designed around your business, users and real-world requirements.",
                  href: "/services/mobile-app-development/",
                },
                {
                  num: "02",
                  title: "Business Applications",
                  desc: "Inventory systems, POS applications, dashboards, internal tools and custom software tailored to your operations.",
                  href: "/services/business-app-development/",
                },
                {
                  num: "03",
                  title: "Web App Development",
                  desc: "Secure, scalable web applications accessible from anywhere.",
                  href: "/services/web-app-development/",
                },
                {
                  num: "04",
                  title: "SaaS Development",
                  desc: "From MVP to full-scale subscription platforms with authentication, billing and cloud infrastructure.",
                  href: "/services/saas-development/",
                },
              ].map((service) => (
                <a
                  key={service.href}
                  href={service.href}
                  className="group px-8 py-8 first:pt-0 last:pb-0 lg:py-0 lg:first:pl-0 lg:last:pr-0"
                >
                  <span className="text-3xl font-bold text-white/10">{service.num}</span>
                  <h3 className="mt-3 text-lg font-bold transition-colors group-hover:text-accent-light">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {service.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-light">
                    Learn more <span className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
                  </span>
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
            <p className="mb-3 text-sm font-semibold tracking-[0.15em] text-accent">
              FEATURED CASE STUDY
            </p>
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="max-w-xl">
                <h2 className="text-[clamp(1.75rem,3vw,3rem)] font-bold tracking-tight text-primary">
                  Vendrex
                </h2>
                <p className="mt-2 text-lg font-medium text-muted">
                  Building a complete POS and business management platform.
                </p>
                <p className="mt-4 leading-relaxed text-muted">
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
                      className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted"
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
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-xl border border-border/60 bg-white shadow-2xl">
                  <div className="flex items-center gap-1.5 border-b border-border/60 bg-surface px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    <span className="ml-2 text-[10px] text-muted">Vendrex POS</span>
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
                <div className="mx-auto -mt-1 h-3 w-[55%] rounded-b-lg border border-t-0 border-border/60 bg-surface" />
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
                  <div className="overflow-hidden rounded-xl border border-border/60 bg-white shadow-xl">
                    <div className="flex items-center gap-1.5 border-b border-border/60 bg-surface px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400" />
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                      <span className="ml-1.5 text-[9px] text-muted">Vendrex</span>
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
                  <div className="absolute -bottom-6 -left-4 w-[35%] max-w-[160px]">
                    <div className="overflow-hidden rounded-[1.5rem] border-[3px] border-primary bg-primary p-1 shadow-xl">
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
                  <div className="absolute -bottom-6 -right-4 w-[35%] max-w-[160px]">
                    <div className="overflow-hidden rounded-[1.5rem] border-[3px] border-primary bg-primary p-1 shadow-xl">
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

                <div className="absolute -bottom-8 -right-8 -z-10 h-56 w-56 rounded-full bg-accent/5 blur-3xl" />
                <div className="absolute -left-8 -top-8 -z-10 h-56 w-56 rounded-full bg-accent-violet/5 blur-3xl" />
              </div>

              <div className="max-w-xl">
                <h2 className="text-[clamp(1.75rem,3vw,3rem)] font-bold tracking-tight text-primary">
                  Reliable Software. Real Impact.
                </h2>
                <div className="mt-10 space-y-8">
                  {[
                    {
                      title: "Offline-First",
                      desc: "Applications designed to remain useful during unreliable connectivity — proven in Vendrex and Tally Cart.",
                    },
                    {
                      title: "Multi-Currency &amp; International",
                      desc: "Architecture capable of supporting currencies, languages and markets across our product portfolio.",
                    },
                    {
                      title: "Modern Technology",
                      desc: "Built using modern development technologies and cloud infrastructure that scale with your business.",
                    },
                    {
                      title: "Designed to Scale",
                      desc: "Software architecture capable of growing alongside the product or business, from MVP to production.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs text-accent">
                        &check;
                      </div>
                      <div>
                        <h3 className="font-bold text-primary">{item.title.replace("&amp;", "&")}</h3>
                        <p className="mt-1 text-sm text-muted">{item.desc}</p>
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
        <section className="border-y border-border/40 bg-surface px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-[clamp(1.75rem,3vw,3rem)] font-bold tracking-tight text-primary">
                From Idea to Launch
              </h2>
              <p className="mt-4 text-muted">
                A structured process that takes your concept from discovery through development
                to a production application.
              </p>
            </div>

            {/* Desktop horizontal timeline */}
            <div className="mt-16 hidden items-start lg:flex">
              {[
                { step: "01", title: "Discovery" },
                { step: "02", title: "Planning" },
                { step: "03", title: "Design" },
                { step: "04", title: "Development" },
                { step: "05", title: "Testing" },
                { step: "06", title: "Launch" },
                { step: "07", title: "Evolve" },
              ].map((item, i) => (
                <div key={item.step} className="group flex flex-1 flex-col items-center">
                  <div className="relative flex w-full items-center justify-center">
                    <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-white text-sm font-bold text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                      {item.step}
                    </div>
                    {i < 6 && (
                      <div className="absolute left-[60%] top-1/2 h-px w-[80%] bg-border" />
                    )}
                  </div>
                  <p className="mt-3 text-sm font-bold text-primary">{item.title}</p>
                </div>
              ))}
            </div>

            {/* Mobile/tablet grid */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:hidden">
              {[
                { step: "01", title: "Discovery", desc: "Understand the problem, users and requirements." },
                { step: "02", title: "Planning", desc: "Determine functionality, architecture and scope." },
                { step: "03", title: "Design", desc: "Create interfaces and workflows." },
                { step: "04", title: "Development", desc: "Build the application and backend." },
                { step: "05", title: "Testing", desc: "Test functionality, performance and reliability." },
                { step: "06", title: "Launch", desc: "Deploy to production and app stores." },
                { step: "07", title: "Evolve", desc: "Updates, monitoring and improvements." },
              ].map((item) => (
                <div key={item.step} className="rounded-xl border border-border bg-white p-5">
                  <span className="text-2xl font-bold text-accent/30">{item.step}</span>
                  <h3 className="mt-1 font-bold text-primary">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted">{item.desc}</p>
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
                <h2 className="text-[clamp(1.75rem,3vw,3rem)] font-bold tracking-tight text-primary">
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
                  { name: "Vendrex", color: "bg-blue-500" },
                  { name: "Tally Cart", color: "bg-emerald-500" },
                  { name: "Solar Align", color: "bg-gray-800" },
                  { name: "Receet Pro", color: "bg-teal-500" },
                  { name: "GQRLY", color: "bg-purple-500" },
                  { name: "NeXT Up", color: "bg-blue-900" },
                  { name: "BoyoMart", color: "bg-rose-500" },
                  { name: "Solar Merge", color: "bg-amber-500" },
                ].map((product) => (
                  <div
                    key={product.name}
                    className={`${product.color} flex items-center justify-center rounded-xl p-6 text-center shadow-sm`}
                  >
                    <span className="text-sm font-bold text-white">{product.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ─── FINAL CTA ─── */}
      <FadeIn>
        <section className="px-6 pb-28 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface-dark to-navy-light px-8 py-20 text-center text-white shadow-2xl sm:px-16">
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent-violet/10 blur-3xl" />
              <div className="relative">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h2 className="text-[clamp(1.75rem,3vw,3rem)] font-bold tracking-tight">
                  Have an App Idea?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-lg text-gray-300">
                  Let&apos;s turn it into something people can actually use.
                </p>
                <p className="mt-2 text-sm text-gray-400">
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
