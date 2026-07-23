"use client";

import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { business } from "@/lib/business";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-premium border-b border-copper-500/30"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#top"
          className="focus-ring flex items-center gap-2 rounded-md"
        >
          <span className="font-display text-2xl font-semibold tracking-tight text-paper">
            Dr.<span className="text-copper-400"> Roof</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring rounded-md text-sm font-medium text-slate-200 transition-colors hover:text-copper-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={business.phoneHref}
            className="focus-ring flex items-center gap-2 rounded-md text-sm font-semibold text-paper transition-colors hover:text-copper-300"
          >
            <Phone size={16} className="text-copper-400" />
            {business.phone}
          </a>
          <a
            href="#contact"
            className="focus-ring rounded-full bg-copper-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5"
          >
            {business.cta}
          </a>
        </div>

        <button
          className="focus-ring rounded-md p-2 text-paper lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-700 bg-slate-900 px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring block text-base font-medium text-slate-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="focus-ring mt-6 block rounded-full bg-copper-gradient px-5 py-3 text-center text-sm font-semibold text-white"
          >
            {business.cta}
          </a>
        </div>
      )}
    </header>
  );
}
