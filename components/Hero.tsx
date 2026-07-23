import { ShieldCheck, Star, Phone } from "lucide-react";
import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-storm-gradient pb-28 pt-36 lg:pb-36 lg:pt-44"
    >
      {/* Ambient roofline silhouette in the background */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-[0.08]"
      >
        <path
          d="M0,200 L0,120 L100,40 L200,120 L300,20 L400,120 L500,60 L600,120 L700,30 L800,120 L900,50 L1000,120 L1100,70 L1200,120 L1200,200 Z"
          fill="#D98A4F"
        />
      </svg>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10">
        {/* Left: headline + CTA */}
        <div className="relative z-10 animate-rise">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-copper-400/40 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <Star size={14} className="fill-copper-400 text-copper-400" />
            <span className="font-mono text-xs tracking-wide text-slate-200">
              {business.rating} rating · {business.reviewCount.toLocaleString()}+ reviews
            </span>
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-paper sm:text-6xl lg:text-7xl">
            Your roof takes the hit,
            <span className="block text-copper-400">so your home doesn&apos;t have to.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300">
            Dr. Roof has spent years keeping homes and businesses across metro
            Atlanta dry through summer storms and every season after. Real
            inspections, honest scopes, and crews who show up when they say
            they will.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="focus-ring rounded-full bg-copper-gradient px-8 py-4 text-center text-base font-semibold text-white shadow-premium transition-transform hover:-translate-y-0.5"
            >
              {business.cta}
            </a>
            <a
              href={business.phoneHref}
              className="focus-ring flex items-center justify-center gap-2 rounded-full border border-slate-500 px-8 py-4 text-base font-semibold text-paper transition-colors hover:border-copper-400 hover:text-copper-300"
            >
              <Phone size={18} />
              {business.phone}
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4">
            {business.serviceAreas.map((area) => (
              <span
                key={area}
                className="font-mono text-xs uppercase tracking-widest text-slate-400"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Right: floating stat / trust card */}
        <div className="relative z-10 flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-sm animate-drift rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-premium backdrop-blur-md">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-copper-gradient">
                <ShieldCheck size={22} className="text-white" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-paper">
                  Storm-Ready Guarantee
                </p>
                <p className="text-xs text-slate-400">Workmanship warranty on every job</p>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
              <div>
                <dt className="text-xs uppercase tracking-widest text-slate-400">Reviews</dt>
                <dd className="font-mono text-2xl font-semibold text-copper-300">
                  {business.reviewCount.toLocaleString()}+
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-slate-400">Avg. Rating</dt>
                <dd className="font-mono text-2xl font-semibold text-copper-300">
                  {business.rating}/5
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-slate-400">Inspection</dt>
                <dd className="font-mono text-2xl font-semibold text-copper-300">Free</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-slate-400">Response</dt>
                <dd className="font-mono text-2xl font-semibold text-copper-300">Same-day</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
