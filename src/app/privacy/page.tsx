import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: July 2026</p>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-lg font-semibold text-primary">1. Information We Collect</h2>
          <p className="mt-2">
            We collect information you provide directly, such as your name and email
            address when you submit our contact form. We also collect standard web
            analytics data including page views and referral sources.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">2. How We Use Your Information</h2>
          <p className="mt-2">
            We use your information to respond to your inquiries, improve our website,
            and communicate about our services. We do not sell your personal
            information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">3. Data Security</h2>
          <p className="mt-2">
            We implement reasonable security measures to protect your personal
            information. However, no method of electronic transmission is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">4. Third-Party Services</h2>
          <p className="mt-2">
            We may use third-party services for analytics and form processing. These
            services have their own privacy policies governing data handling.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary">5. Contact</h2>
          <p className="mt-2">
            If you have questions about this privacy policy, please contact us at
            hello@boyoapps.com.
          </p>
        </section>
      </div>
    </div>
  );
}
