import { business } from "@/lib/business";
import RoofDivider from "./RoofDivider";

export default function About() {
  return (
    <>
      <section id="about" className="bg-paper py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-600">
              Based in Roswell, GA
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Local crews. Straight answers.
              <br />A roof that actually gets fixed.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Dr. Roof was built around a simple idea: homeowners deserve to
              understand what&apos;s happening on top of their house. We walk
              every roof ourselves, document what we find with photos, and
              explain your options before any work begins — no upsells, no
              vague estimates.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              From single-shingle repairs to full commercial replacements,
              our crews work across {business.serviceAreas.join(", ")} with
              the same standard: clean job sites, on-time crews, and a roof
              that&apos;s built to outlast the warranty.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
              <div>
                <p className="font-display text-3xl font-semibold text-slate-900">
                  {business.rating}
                </p>
                <p className="mt-1 text-sm text-slate-500">Average rating</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-slate-900">
                  {business.reviewCount.toLocaleString()}+
                </p>
                <p className="mt-1 text-sm text-slate-500">Verified reviews</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-slate-900">
                  3
                </p>
                <p className="mt-1 text-sm text-slate-500">Counties served</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-storm-gradient shadow-premium">
              <div className="flex h-full flex-col justify-end p-8">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 400 200"
                  className="mb-6 h-auto w-full opacity-90"
                >
                  <path
                    d="M0,200 L0,150 L66,90 L133,150 L200,60 L266,150 L333,100 L400,150 L400,200 Z"
                    fill="#B5652D"
                    opacity="0.85"
                  />
                  <path
                    d="M0,200 L0,170 L66,130 L133,170 L200,110 L266,170 L333,140 L400,170 L400,200 Z"
                    fill="#D98A4F"
                  />
                </svg>
                <p className="font-display text-2xl font-semibold text-paper">
                  Every roof, inspected like it&apos;s ours.
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  {business.address}
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-card sm:block">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
                Est. response time
              </p>
              <p className="font-display text-2xl font-semibold text-copper-600">
                Same day
              </p>
            </div>
          </div>
        </div>
      </section>
      <RoofDivider direction="down" color="#1E2A38" height={48} />
    </>
  );
}
