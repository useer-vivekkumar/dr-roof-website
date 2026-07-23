import { Star, Quote } from "lucide-react";
import { business } from "@/lib/business";
import RoofDivider from "./RoofDivider";

const testimonials = [
  {
    quote:
      "They found a flashing issue our last contractor missed and sent photos before recommending anything. The install crew was done in a day.",
    name: "Sample review",
    location: "Roswell, GA",
  },
  {
    quote:
      "Estimate matched the final invoice exactly. No surprise charges, and they cleaned up better than the crew that built the house.",
    name: "Sample review",
    location: "Marietta, GA",
  },
  {
    quote:
      "Called after a storm and had someone out the next morning. Walked us through the insurance paperwork too, which we didn't expect.",
    name: "Sample review",
    location: "Atlanta, GA",
  },
];

export default function Testimonials() {
  return (
    <>
      <section id="testimonials" className="bg-slate-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">
                Trusted across metro Atlanta
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold text-paper sm:text-5xl">
                What homeowners tell us
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-copper-400 text-copper-400"
                  />
                ))}
              </div>
              <span className="font-mono text-sm text-slate-300">
                {business.rating} · {business.reviewCount.toLocaleString()}+ reviews
              </span>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="flex flex-col justify-between rounded-2xl border border-slate-700/60 bg-slate-800/40 p-8"
              >
                <div>
                  <Quote size={24} className="text-copper-500" />
                  <blockquote className="mt-5 text-base leading-relaxed text-slate-200">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-8 border-t border-slate-700/60 pt-4">
                  <p className="text-sm font-semibold text-paper">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.location} · Illustrative sample</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-slate-500">
            Sample quotes shown for illustration. Verified customer reviews
            available on our Google and Facebook business pages.
          </p>
        </div>
      </section>
      <RoofDivider direction="down" color="#F7F5F1" height={48} />
    </>
  );
}
