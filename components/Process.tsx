import RoofDivider from "./RoofDivider";

const steps = [
  {
    number: "01",
    title: "Free inspection",
    description:
      "We walk the roof, check attic ventilation, and photograph every finding — usually within 24-48 hours of your call.",
  },
  {
    number: "02",
    title: "Written estimate",
    description:
      "You get an itemized scope and price the same day, with options if more than one approach makes sense.",
  },
  {
    number: "03",
    title: "Scheduled install",
    description:
      "We confirm a firm date, order materials in advance, and protect landscaping before the crew arrives.",
  },
  {
    number: "04",
    title: "Final walkthrough",
    description:
      "A magnetic sweep for debris, a full site check, and a walkthrough with you before we call the job done.",
  },
];

export default function Process() {
  return (
    <>
      <RoofDivider direction="up" color="#0F1620" height={48} />
      <section id="process" className="bg-slate-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">
              How a project runs
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-paper sm:text-5xl">
              Four steps. No surprises.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                <span className="font-display text-6xl font-semibold text-slate-800">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-paper">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute right-[-1rem] top-6 hidden h-px w-8 bg-copper-500/40 lg:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <RoofDivider direction="down" color="#F7F5F1" height={48} />
    </>
  );
}
