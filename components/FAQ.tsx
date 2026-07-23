"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { business } from "@/lib/business";

const faqs = [
  {
    q: "How much does a roof inspection cost?",
    a: `Nothing. We inspect the roof, document what we find with photos, and give you a written estimate at no cost — whether or not you move forward with the work.`,
  },
  {
    q: "How fast can someone come out after a storm?",
    a: "In most cases we can get a crew out within 24-48 hours, sooner for active leaks. Call the number above and we'll give you a realistic window.",
  },
  {
    q: "Do you work directly with insurance claims?",
    a: "Yes. We document storm damage the way adjusters expect to see it and can walk you through the claims process, though we don't guarantee claim outcomes.",
  },
  {
    q: "What areas do you actually serve?",
    a: `We take on residential and commercial jobs across ${business.serviceAreas.join(", ")}. If you're just outside that range, call and we'll let you know.`,
  },
  {
    q: "How long does a full roof replacement take?",
    a: "Most residential replacements are completed in a single day. Larger or more complex roofs may take two to three days, which we'll confirm in your estimate.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-600">
            Common questions
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
            Before you call
          </h2>
        </div>

        <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q}>
                <button
                  className="focus-ring flex w-full items-center justify-between gap-6 py-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-medium text-slate-900">
                    {faq.q}
                  </span>
                  <Plus
                    size={20}
                    className={`shrink-0 text-copper-600 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-sm leading-relaxed text-slate-600">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
