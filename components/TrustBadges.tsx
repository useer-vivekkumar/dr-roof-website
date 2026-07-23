import { ShieldCheck, Clock, Award, Users } from "lucide-react";
import { business } from "@/lib/business";

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Clock, label: "Same-Day Response" },
  { icon: Award, label: "Workmanship Warranty" },
  { icon: Users, label: `${business.reviewCount.toLocaleString()}+ Homeowners Served` },
];

export default function TrustBadges() {
  return (
    <section className="bg-paper py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-4 lg:px-10">
        {badges.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-copper-400">
              <Icon size={20} />
            </span>
            <span className="text-sm font-semibold text-slate-800">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
