import { Phone } from "lucide-react";
import { business } from "@/lib/business";

export default function CTABanner() {
  return (
    <section className="bg-copper-gradient py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center lg:px-10">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Not sure if it&apos;s a repair or a replacement?
        </h2>
        <p className="max-w-xl text-white/85">
          Get a free, no-pressure inspection and a straight answer — in
          writing — before you decide anything.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="focus-ring rounded-full bg-white px-8 py-4 text-base font-semibold text-copper-700 shadow-premium transition-transform hover:-translate-y-0.5"
          >
            {business.cta}
          </a>
          <a
            href={business.phoneHref}
            className="focus-ring flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone size={18} />
            {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
