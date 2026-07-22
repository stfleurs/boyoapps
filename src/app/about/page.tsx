import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Boyo Apps",
  description:
    "Boyo Apps is an independent software studio building real mobile and web applications. Meet Steeve St Fleur, the developer building products like Vendrex, Tally Cart, and more.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        About Boyo Apps
      </h1>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">The Studio</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Boyo Apps is an independent software studio &mdash; a solo developer who
          builds and operates real products, not an agency that outsources.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          That means you work directly with the person designing the architecture,
          writing the code, and maintaining the product. No project managers,
          no hand-offs, no junior devs learning on your dime.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          The portfolio spans business management, retail, finance, solar
          technology, marketplaces, productivity and consumer applications &mdash; all
          built and shipped to Google Play and the web.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">Behind Boyo Apps</h2>
        <p className="mt-6 leading-relaxed text-muted">
          I don&apos;t just build software for clients. I build products of my own.
        </p>
        <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
          <div className="flex h-24 w-24 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-accent to-accent/60 shadow-inner">
            <Image
              src="/images/founder/steeve-st-fleur.webp"
              alt="Steeve St Fleur"
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <p>
              Hi, I&apos;m <span className="font-semibold text-primary">Steeve St Fleur</span>, the developer and product builder behind Boyo Apps.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              I started Boyo Apps because I enjoy taking real problems, breaking them down,
              and turning them into software people can actually use.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              What began with building my own applications has grown into an
              independent software studio focused on custom mobile apps, web
              applications, business software, and SaaS products.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Today, the same thinking and engineering that go into my own products
              are available to businesses that need software built around the way they
              actually work.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">From an idea to a real product</h2>
        <p className="mt-4 leading-relaxed text-muted">
          I&apos;ve always been more interested in building complete things than simply
          writing code.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          When I see a problem, my first questions are usually:
        </p>
        <div className="mt-4 space-y-2">
          <p className="leading-relaxed text-muted">
            <span className="font-semibold text-primary">&bull; How could this work better?</span> What would the software need to do?
          </p>
          <p className="leading-relaxed text-muted">
            <span className="font-semibold text-primary">&bull; And how do I make it simple enough that people will actually want to use it</span>?
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-muted">
          That approach has led me to build products across very different areas &mdash; from
          point-of-sale and inventory management to marketplaces, receipts, solar
          tools, QR technology, and other business applications.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Some ideas are small experiments. Others grow into complete platforms.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          But each one teaches me more about what it takes to turn an idea into working software.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Because building the code is only part of the job.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          A real product needs thoughtful design, solid architecture, reliable data,
          useful features, testing, deployment, and the ability to evolve after launch.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          That&apos;s the experience I bring to every Boyo Apps project.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">I build the kind of software businesses depend on</h2>
        <p className="mt-4 leading-relaxed text-muted">
          One of the projects that best represents how I approach development is&nbsp;
          <span className="font-semibold text-primary">Vendrex</span>, a point-of-sale and business management platform
          built for real-world business operations.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Building a system like Vendrex means thinking beyond individual screens.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Sales affect inventory. Inventory affects reporting. Employees need different
          levels of access. Businesses may work with multiple currencies. Barcode
          scanning needs to feel immediate. And when internet access becomes unreliable,
          the business still needs to operate.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Those are the kinds of challenges I enjoy solving.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Across Boyo Apps products, I&apos;ve worked on systems involving:
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {[
            "Point of sale",
            "Inventory",
            "Offline-first applications",
            "Multi-currency systems",
            "Marketplaces",
            "Business reporting",
            "Barcode scanning",
            "QR technology",
            "Cloud infrastructure",
            "Mobile and web applications",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <span className="mt-1 text-accent">&bull;</span>
              <span className="text-sm text-muted">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 leading-relaxed text-muted">
          The goal isn&apos;t to add technology for the sake of technology.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          It&apos;s to make the technology solve the problem well.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">Why I build my own products</h2>
        <p className="mt-4 leading-relaxed text-muted">
          There&apos;s an important difference between knowing how to develop software and knowing
          what it feels like to be responsible for a product.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          When you build your own products, you have to make the decisions.
        </p>
        <div className="mt-4 space-y-2">
          <p className="leading-relaxed text-muted">
            <span className="font-semibold text-primary">&bull; What should be built first</span>?
          </p>
          <p className="leading-relaxed text-muted">
            <span className="font-semibold text-primary">&bull; What can wait</span>?
          </p>
          <p className="leading-relaxed text-muted">
            <span className="font-semibold text-primary">&bull; Will users understand this</span>?
          </p>
          <p className="leading-relaxed text-muted">
            <span className="font-semibold text-primary">&bull; Is the architecture going to hold up as the product grows</span>?
          </p>
          <p className="leading-relaxed text-muted">
            <span className="font-semibold text-primary">&bull; What happens when something fails</span>?
          </p>
          <p className="leading-relaxed text-muted">
            <span className="font-semibold text-primary">&bull; How do you turn a large idea into something you can actually ship</span>?
          </p>
          <p className="leading-relaxed text-muted">
            <span className="font-semibold text-primary">&bull; And after launch, what comes next</span>?
          </p>
        </div>
        <p className="mt-4 leading-relaxed text-muted">
          Building my own products has taught me to think about software from both sides:
          <span className="font-semibold text-primary"> as a developer and as a product owner.</span>
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          That matters when I work with clients.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          I&apos;m not here simply to take a list of features and turn them into code. I want to
          understand the problem behind those features and help find the right way to
          solve it.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">Small studio. Direct collaboration.</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Boyo Apps is intentionally an independent software studio.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          That means when you work with Boyo Apps, you&apos;re not being passed between
          salespeople, project managers, and developers who have never spoken to you.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          You work directly with the person building your product.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          I want to understand your business, what you&apos;re trying to accomplish, what
          isn&apos;t working today, and what success would actually look like for you.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Then we figure out what should be built.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          For some projects, that might be a focused first version that solves one
          important problem extremely well.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          For others, it could mean designing the foundation for a much larger platform.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Either way, the objective is the same:
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          <span className="font-semibold text-primary">&bull; Build something useful, reliable, and capable of growing with the idea behind it.</span>
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">Built beyond the portfolio</h2>
        <p className="mt-4 leading-relaxed text-muted">
          The products shown on this website aren&apos;t here just to make the portfolio look
          impressive.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          They&apos;re real software I&apos;ve spent time designing, engineering, testing,
          improving, and &mdash; in several cases &mdash; publishing for people to use.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          That experience has shaped the way I approach client projects.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          I understand what it means to start with an empty project and eventually reach
          the point where someone else can open the finished application and depend on it.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          That journey &mdash; from <span className="font-semibold text-primary">&ldquo;I have an idea&rdquo;</span> to
          <span className="font-semibold text-primary">&ldquo;people are using it&rdquo;</span> &mdash; is what
          Boyo Apps is built around.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">What I care about</h2>
        <p className="mt-4 leading-relaxed text-muted">
          I care about software that works.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Software that feels considered rather than thrown together.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Software whose architecture doesn&apos;t become a problem the moment the product
          starts growing.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          And software that solves a genuine problem instead of existing simply because
          someone could build it.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          I&apos;m constantly learning, experimenting, building, and improving the way I
          work. Every product presents a different problem, and that&apos;s a big part of why I enjoy doing this.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          There will always be another feature to figure out, another system to design,
          and another idea worth exploring.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">Have something you want to build</h2>
        <p className="mt-4 leading-relaxed text-muted">
          You don&apos;t need to arrive with a finished technical specification.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Maybe you already know exactly what you need.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Maybe you have a business process that takes too much time.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Maybe your current software doesn&apos;t fit the way your company operates.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Or maybe you simply have an idea and aren&apos;t sure yet what it would take to
          turn it into a real product.
        </p>
        <div className="mt-8">
          <p className="leading-relaxed text-muted">
            <span className="font-semibold text-primary">&bull; Tell me about the problem.</span>
          </p>
          <p className="leading-relaxed text-muted">
            <span className="font-semibold text-primary">We can start there.</span>
          </p>
        </div>
      </section>

      <div className="mt-12">
        <CTA href="/contact/">Start Your Project &rarr;</CTA>
      </div>
    </div>
  );
}