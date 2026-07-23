"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { business } from "@/lib/business";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const nextErrors: Record<string, string> = {};

    if (!name) nextErrors.name = "Enter your name.";
    if (!phone) nextErrors.phone = "Enter a phone number so we can reach you.";

    setErrors(nextErrors);
    setSubmitError("");

    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            phone,
            email: String(formData.get("email") || "").trim(),
            service: String(formData.get("service") || "").trim(),
            message: String(formData.get("message") || "").trim(),
          }),
        });

        if (!response.ok) throw new Error("Lead submission failed");

        setSubmitted(true);
        form.reset();
      } catch {
        setSubmitError(
          "We couldn't send your request. Please call us or try again shortly.",
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  return (
    <section id="contact" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-600">
            Get in touch
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
            Request your free inspection
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Tell us a little about your roof and the best way to reach you.
            We typically respond same-day.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={business.phoneHref}
              className="focus-ring flex items-center gap-4 rounded-xl"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-copper-400">
                <Phone size={18} />
              </span>
              <span className="text-base font-medium text-slate-800">
                {business.phone}
              </span>
            </a>
            <a
              href={`mailto:${business.email}`}
              className="focus-ring flex items-center gap-4 rounded-xl"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-copper-400">
                <Mail size={18} />
              </span>
              <span className="text-base font-medium text-slate-800">
                {business.email}
              </span>
            </a>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-copper-400">
                <MapPin size={18} />
              </span>
              <span className="text-base font-medium text-slate-800">
                {business.address}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 size={48} className="text-copper-500" />
              <h3 className="mt-5 font-display text-2xl font-semibold text-slate-900">
                Request received
              </h3>
              <p className="mt-2 max-w-sm text-sm text-slate-600">
                Thanks — we&apos;ll reach out shortly to schedule your free
                inspection. For anything urgent, call us directly at{" "}
                {business.phone}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="focus-ring w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-copper-500"
                    placeholder="Jamie Carter"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-copper-700">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="focus-ring w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-copper-500"
                    placeholder="(770) 555-0123"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-xs text-copper-700">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email <span className="text-slate-400">(optional)</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="focus-ring w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-copper-500"
                  placeholder="jamie@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  What do you need?
                </label>
                <select
                  id="service"
                  name="service"
                  className="focus-ring w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-copper-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {business.services.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                  <option value="Not sure">Not sure yet</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Details <span className="text-slate-400">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="focus-ring w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-copper-500"
                  placeholder="Tell us what's going on with your roof..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="focus-ring w-full rounded-full bg-copper-gradient px-8 py-4 text-base font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5"
              >
                {isSubmitting ? "Sending your request..." : business.cta}
              </button>
              {submitError && (
                <p className="text-center text-sm text-copper-700" role="alert">
                  {submitError}
                </p>
              )}
              <p className="text-center text-xs text-slate-400">
                By submitting, you agree to be contacted about your request.
                We don&apos;t share your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
