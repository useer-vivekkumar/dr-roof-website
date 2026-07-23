import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { business } from "@/lib/business";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-2xl font-semibold text-paper">
              Dr.<span className="text-copper-400"> Roof</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Residential and commercial roofing across metro Atlanta —
              inspections, repair, and replacement done right the first time.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dr. Roof on Facebook"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-copper-400 hover:text-copper-400"
              >
                <Facebook size={16} />
              </a>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dr. Roof on Instagram"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-copper-400 hover:text-copper-400"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="focus-ring text-sm text-slate-300 transition-colors hover:text-copper-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {business.services.map((s) => (
                <li key={s.name} className="text-sm text-slate-300">
                  {s.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={business.phoneHref}
                  className="focus-ring flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-copper-300"
                >
                  <Phone size={15} />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="focus-ring flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-copper-300"
                >
                  <Mail size={15} />
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                {business.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 py-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Dr. Roof. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Serving {business.serviceAreas.join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
