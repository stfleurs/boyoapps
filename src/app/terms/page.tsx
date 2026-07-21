import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: July 2026</p>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-lg font-semibold text-primary">1. Services</h2>
          <p className="mt-2">
            Boyo Apps provides software development services. The specific terms of
            each engagement will be outlined in a separate agreement between Boyo
            Apps and the client.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">2. Intellectual Property</h2>
          <p className="mt-2">
            Upon full payment, the client retains ownership of the custom software
            developed specifically for their project. Boyo Apps retains the right to
            display the work in its portfolio unless otherwise agreed.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">3. Limitation of Liability</h2>
          <p className="mt-2">
            Boyo Apps shall not be liable for any indirect, incidental, or
            consequential damages arising from the use of our services or products.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">4. Contact</h2>
          <p className="mt-2">
            For questions about these terms, please{" "}
            <a href="/contact/" className="text-accent underline underline-offset-2">contact us</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
