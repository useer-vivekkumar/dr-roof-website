import {
  Home,
  Building2,
  Hammer,
  Wrench,
  ClipboardCheck,
} from "lucide-react";
import { business } from "@/lib/business";
import RoofDivider from "./RoofDivider";

const icons = [Home, Building2, Hammer, Wrench, ClipboardCheck];

export default function Services() {
  return (
    <>
      <section id="services" className="bg-slate-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-400">
              What we do
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-paper sm:text-5xl">
              Five services. One standard.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              Whether it&apos;s a single leak or a full commercial re-roof,
              every job gets the same inspection-first approach.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {business.services.map((service, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={service.name}
                  className="group rounded-2xl border border-slate-700/60 bg-slate-800/40 p-8 transition-all hover:-translate-y-1 hover:border-copper-500/50 hover:bg-slate-800"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper-gradient text-white transition-transform group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-paper">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {service.description}
                  </p>
                </div>
              );
            })}

            {/* CTA card filling the 6th grid slot */}
            <div className="flex flex-col justify-between rounded-2xl bg-copper-gradient p-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-white">
                  Not sure what you need?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  Start with a free inspection and we&apos;ll tell you
                  exactly where your roof stands.
                </p>
              </div>
              <a
                href="#contact"
                className="focus-ring mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-copper-700 transition-transform hover:-translate-y-0.5"
              >
                {business.cta}
              </a>
            </div>
          </div>
        </div>
      </section>
      <RoofDivider direction="down" color="#F7F5F1" height={48} />
    </>
  );
}
