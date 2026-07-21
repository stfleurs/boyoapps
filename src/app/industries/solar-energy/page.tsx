import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Solar Energy Software Solutions",
  description:
    "Custom software for the solar energy industry including panel alignment tools, ROI calculators, and field applications.",
};

export default function SolarEnergy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Software for Solar Energy
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        Custom applications for solar energy professionals including alignment
        tools, ROI analysis, and field data collection.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {[
          { title: "Solar Panel Alignment", desc: "Sensor-based alignment tools for optimal panel positioning." },
          { title: "ROI Analysis", desc: "Calculate and project solar investment returns." },
          { title: "Field Applications", desc: "Mobile tools for solar technicians and installers." },
          { title: "Energy Monitoring", desc: "Track and analyze energy production data." },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-border bg-surface p-6">
            <h2 className="font-semibold text-primary">{item.title}</h2>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <a
          href="/work/solar-align/"
          className="block rounded-lg border border-border p-4 transition-colors hover:border-accent"
        >
          <span className="font-medium text-primary">See Solar Align Pro &rarr;</span>
          <p className="mt-1 text-sm text-muted">Our solar optimization application</p>
        </a>
      </div>
      <div className="mt-10">
        <CTA href="/contact/">Discuss Your Energy Project &rarr;</CTA>
      </div>
    </div>
  );
}
