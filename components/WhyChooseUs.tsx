import { Camera, FileText, PhoneCall, HardHat } from "lucide-react";

const reasons = [
  {
    icon: Camera,
    title: "Photo-documented findings",
    description:
      "Every inspection comes with photos of exactly what we found, so you're never taking our word for it.",
  },
  {
    icon: FileText,
    title: "Written, itemized estimates",
    description:
      "No verbal ballparks. You get a scope of work and a price before anyone touches a shingle.",
  },
  {
    icon: PhoneCall,
    title: "A crew that answers the phone",
    description:
      "Questions during the job get answered same-day, not routed through a call center.",
  },
  {
    icon: HardHat,
    title: "Crews who clean up after themselves",
    description:
      "Magnetic nail sweeps and full debris removal are standard on every job, not an add-on.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-600">
              Why homeowners choose us
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              The difference is in what you don&apos;t have to chase.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-copper-300 bg-copper-100 text-copper-600">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
