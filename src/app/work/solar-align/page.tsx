import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/metadata";
import Script from "next/script";

const product = products.find((p) => p.slug === "solar-align")!;
const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  title: "Solar Align Pro — Solar Panel Alignment & ROI Tool",
  description:
    "How Boyo Apps built Solar Align Pro: a mobile application that uses device sensors and location data to calculate optimal solar panel positioning and provide ROI projections for solar energy professionals.",
  alternates: { canonical: `${siteUrl}/work/solar-align/` },
  openGraph: {
    title: "Solar Align Pro — Solar Optimization Case Study",
    description:
      "How Boyo Apps built a solar panel alignment and ROI tool using device sensors, location-based calculations, and solar position algorithms.",
    url: `${siteUrl}/work/solar-align/`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Align Pro — Solar Optimization Case Study",
    description:
      "How Boyo Apps built a solar panel alignment and ROI tool using device sensors, location-based calculations, and solar position algorithms.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Solar Align Pro",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android",
      description:
        "Solar panel alignment and ROI tool that uses device sensors and location data to help solar energy professionals optimize panel positioning and calculate returns.",
      author: { "@type": "Organization", name: "Boyo Apps" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does Solar Align Pro calculate optimal panel tilt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solar Align Pro uses the device's accelerometer and magnetometer combined with location data to measure current panel orientation, then calculates the optimal tilt angle based on latitude, time of year, and solar declination.",
          },
        },
        {
          "@type": "Question",
          name: "Does Solar Align Pro require an internet connection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solar Align Pro functions offline for core alignment measurements. Location-based solar calculations are performed on-device. Some features such as map data may require connectivity.",
          },
        },
        {
          "@type": "Question",
          name: "How accurate is the sensor-based alignment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Accuracy depends on the device's sensor quality, but Solar Align Pro applies sensor fusion algorithms and calibration guidance to deliver reliable alignment readings suitable for professional solar installation work.",
          },
        },
        {
          "@type": "Question",
          name: "Can Solar Align Pro calculate ROI for solar installations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Solar Align Pro includes an ROI analysis module that factors in panel efficiency gains from optimal alignment, local energy rates, installation costs, and estimated annual production to project payback periods and long-term savings.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Solar Align Pro designed for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solar Align Pro is designed for solar installation professionals, energy consultants, and solar enthusiasts who need accurate panel alignment measurements and financial projections without expensive specialized equipment.",
          },
        },
        {
          "@type": "Question",
          name: "Does the app track solar position throughout the day?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Solar Align Pro calculates the sun's position at any given time and location, allowing users to understand how shadows and seasonal changes affect panel performance throughout the day and year.",
          },
        },
      ],
    },
  ],
};

export default function SolarAlignCaseStudy() {
  return (
    <>
      <Script
        id="solar-align-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="mb-2 text-sm font-semibold tracking-widest text-accent">
          CASE STUDY
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Building a Solar Optimization Application
        </h1>

        <div className="mt-8 flex flex-wrap gap-2">
          {product.capabilities.map((cap) => (
            <span
              key={cap}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
            >
              {cap}
            </span>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Project Overview</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Solar Align Pro is a mobile application built by Boyo Apps that
            helps solar energy professionals and enthusiasts optimize solar
            panel positioning using the device&apos;s built-in sensors combined
            with location-based solar calculations and financial analysis.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The application replaces expensive dedicated alignment instruments
            with a smartphone-based solution that measures panel tilt and
            orientation, calculates optimal positioning based on solar
            geometry, and projects return on investment based on expected
            energy production improvements.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            The Industry Problem
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Solar panel efficiency is directly tied to alignment. Panels that
            are not positioned at the optimal tilt and orientation for their
            geographic location can underperform by 20 percent or more.
            Despite this, many solar installations are positioned based on
            rough estimates, roof geometry constraints, or rules of thumb
            rather than precise measurements.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Professional solar installers have access to digital inclinometers
            and solar path calculators, but these tools are expensive,
            specialize in a single function, and are not always available
            during site surveys. Smaller installers and individual system
            owners often rely on mobile compass apps or printed solar charts
            — tools that were never designed for this purpose and lack the
            accuracy needed for optimal panel placement.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Furthermore, even when alignment measurements are taken, the
            financial case for adjustment — how much additional energy a
            re-aligned panel will produce, and what that means in terms of
            payback period — requires calculations that most installers
            perform manually or skip entirely.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Why a Custom Solution Was Required
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Existing mobile alignment tools fell into two categories, neither
            of which was adequate. General-purpose compass and level
            applications provide raw sensor data without any solar-specific
            context. Dedicated solar calculator apps exist, but they typically
            require manual data entry of tilt and orientation measurements
            taken separately, adding friction to the workflow.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            What was missing was an application that combines measurement
            and calculation in a single workflow: place the phone on the
            panel, capture the alignment data, and immediately see the
            optimal positioning recommendation alongside the financial
            impact. Building a custom solution allowed Boyo Apps to design
            this integrated experience from the ground up.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Our Approach &amp; Solution
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Solar Align Pro was designed around a simple measurement workflow
            that mirrors how solar professionals actually work. The user
            places their device flat against the solar panel surface. The
            app reads the accelerometer to determine panel tilt and the
            magnetometer to determine azimuth orientation. GPS provides the
            installation location.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Once the current alignment is captured, the app calculates the
            optimal tilt angle for the installation&apos;s latitude and the
            current season using standard solar geometry algorithms. The
            difference between current and optimal alignment is displayed
            visually, along with the estimated efficiency gain from
            adjustment.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The ROI module takes the analysis further by factoring in local
            energy costs, system capacity, installation adjustment costs,
            and estimated production gains to calculate payback periods and
            long-term savings. This turns a technical measurement into a
            business case that installers can present to clients.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">Key Features</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Device sensor-based panel alignment measurement",
              "Location-aware solar position calculations",
              "ROI analysis and financial projections",
              "Offline functionality for field use",
              "Solar position tracking throughout the day/year",
              "Professional-grade accuracy for installation work",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-1 text-accent">✓</span>
                <span className="text-sm text-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Technical &amp; Engineering Challenges
          </h2>

          <h3 className="mt-6 text-lg font-bold text-primary">
            Sensor Fusion and Calibration
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            The quality of alignment data depends entirely on sensor accuracy,
            but smartphone sensors vary significantly between devices. The
            accelerometer provides reliable tilt when the device is stationary,
            but the magnetometer (compass) is susceptible to electromagnetic
            interference from nearby equipment, metal structures, and even
            the solar panels themselves. Solar Align Pro implements sensor
            fusion techniques that combine accelerometer, magnetometer, and
            gyroscope data to produce stable orientation readings, along
            with calibration guidance that walks users through the figure-8
            calibration pattern when interference is detected.
          </p>

          <h3 className="mt-6 text-lg font-bold text-primary">
            Solar Geometry Calculations
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            Computing the sun&apos;s position at a given location and time
            requires implementing solar declination, hour angle, and
            elevation-azimuth conversion algorithms. These calculations must
            account for latitude, longitude, time zone, day of year, and
            local atmospheric refraction. The app implements standard solar
            position algorithms that are accurate enough for professional
            installation work while running efficiently on mobile hardware.
          </p>

          <h3 className="mt-6 text-lg font-bold text-primary">
            ROI Calculation Engine
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            The financial model needs to estimate annual energy production
            based on panel specifications, local insolation data, alignment
            angles, and shading factors. It then computes payback periods
            using local electricity rates, installation adjustment costs,
            and applicable solar incentives. Building an ROI engine that
            produces credible, defensible numbers required research into
            standard photovoltaic performance modeling approaches adapted
            for mobile computation.
          </p>

          <h3 className="mt-6 text-lg font-bold text-primary">
            Field-Usable Interface
          </h3>
          <p className="mt-2 leading-relaxed text-muted">
            Solar Align Pro is used outdoors — on rooftops, in solar farms,
            and at installation sites — where screen glare, sunlight
            readability, and one-handed operation are real constraints. The
            interface uses high-contrast colors, large touch targets, and a
            simplified measurement flow that minimizes the number of screen
            interactions required to capture and save alignment data.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Architecture Highlights
          </h2>
          <ul className="mt-4 space-y-4">
            {[
              "Sensor fusion combining accelerometer, magnetometer, and gyroscope data",
              "On-device solar position calculation using standard solar geometry algorithms",
              "ROI projection engine with local energy rate and insolation modeling",
              "Offline-capable architecture with local data persistence",
              "GPS-integrated location services for automated positioning context",
              "Calibration guidance system for sensor accuracy assurance",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-accent">✓</span>
                <span className="text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Cross-Platform Considerations
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Solar Align Pro is built for Android, targeting the wide range
            of devices that solar professionals use in the field. The sensor
            access layer abstracts device-specific differences in
            accelerometer and magnetometer hardware, applying calibration
            corrections per sensor class where needed.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The solar calculation and ROI engines are implemented as
            platform-independent modules, meaning they could be reused in a
            web-based planning dashboard or an iOS version of the app
            without reimplementation. This architectural separation between
            sensor-dependent measurement and platform-independent calculation
            was a deliberate design decision to support future platform
        expansion.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            What Solar Align Pro Demonstrates About Boyo Apps
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Solar Align Pro showcases Boyo Apps&apos; ability to build
            applications that bridge hardware sensors and complex
            scientific computation. This project required understanding
            sensor physics, implementing solar geometry algorithms, and
            building a financial modeling engine — all within the
            constraints of a mobile application.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            It demonstrates that we can design software for specialized,
            technical domains where domain knowledge and computational rigor
            are as important as user experience design. These capabilities
            apply directly to building field operations tools, IoT
            applications, and data-driven business software for clients in
            energy, engineering, and scientific industries.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Related Services
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Building sensor-integrated mobile applications requires
            specialized expertise. Boyo Apps offers{" "}
            <a
              href="/services/mobile-app-development/"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              mobile app development
            </a>{" "}
            services that cover hardware integration, sensor data processing,
            and custom algorithm implementation. We also develop{" "}
            <a
              href="/services/business-app-development/"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              business applications
            </a>{" "}
            for field operations, asset management, and data-driven
            decision-making.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold text-primary">
                How does Solar Align Pro calculate optimal panel tilt?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Solar Align Pro uses the device&apos;s accelerometer and
                magnetometer combined with location data to measure current
                panel orientation, then calculates the optimal tilt angle
                based on latitude, time of year, and solar declination.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Does Solar Align Pro require an internet connection?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Solar Align Pro functions offline for core alignment
                measurements. Location-based solar calculations are
                performed on-device. Some features such as map data may
                require connectivity.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                How accurate is the sensor-based alignment?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Accuracy depends on the device&apos;s sensor quality, but
                Solar Align Pro applies sensor fusion algorithms and
                calibration guidance to deliver reliable alignment readings
                suitable for professional solar installation work.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Can Solar Align Pro calculate ROI for solar installations?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. Solar Align Pro includes an ROI analysis module that
                factors in panel efficiency gains from optimal alignment,
                local energy rates, installation costs, and estimated annual
                production to project payback periods and long-term savings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Who is Solar Align Pro designed for?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Solar Align Pro is designed for solar installation
                professionals, energy consultants, and solar enthusiasts who
                need accurate panel alignment measurements and financial
                projections without expensive specialized equipment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Does the app track solar position throughout the day?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Yes. Solar Align Pro calculates the sun&apos;s position at
                any given time and location, allowing users to understand how
                shadows and seasonal changes affect panel performance
                throughout the day and year.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8">
          <CTA href="/contact/">Build Something Similar &rarr;</CTA>
        </section>
      </div>
    </>
  );
}
