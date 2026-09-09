"use client";

import { useState } from "react";
import { FINAL_CTA_CONTENT } from "@/lib/content";
import { SITE_CONFIG } from "@/lib/constants";

export default function AppointmentCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    format: "santa-monica-in-person",
    interest: "anxiety",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-16 sm:scroll-mt-20 py-20 md:py-28 lg:py-32 bg-[#49645A] text-[#FAF8F5] relative overflow-hidden"
    >
      {/* Background Decorative Rings */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[#FAF8F5]/10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-[#FAF8F5]/10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Content (6 cols) */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#C9826B]" aria-hidden="true" />
              <span className="text-xs uppercase font-sans font-medium tracking-[0.22em] text-[#E8DED0]">
                {FINAL_CTA_CONTENT.eyebrow}
              </span>
            </div>

            <h2
              id="contact-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#FAF8F5] tracking-tight mb-6"
            >
              {FINAL_CTA_CONTENT.heading}
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#FAF8F5]/85 leading-relaxed mb-8">
              {FINAL_CTA_CONTENT.subtext}
            </p>

            <div className="space-y-4 pt-6 border-t border-[#FAF8F5]/20 text-sm font-sans text-[#FAF8F5]/80">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C9826B]" aria-hidden="true" />
                <span>In-Person Consultations: {SITE_CONFIG.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C9826B]" aria-hidden="true" />
                <span>Virtual Telehealth: Available to adults across California</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Consultation Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#FFFFFF] text-[#242E2B] p-8 sm:p-10 rounded-xl shadow-xl border border-[#E2DDD5]">
            {submitted ? (
              <div className="py-12 text-center" role="status" aria-live="polite">
                <div className="w-12 h-12 rounded-full bg-[#EFF4F2] text-[#49645A] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-[#242E2B] font-normal mb-2">
                  Inquiry Received
                </h3>
                <p className="font-sans text-sm text-[#616E68] max-w-md mx-auto">
                  Thank you for reaching out to Dr. Maya Reynolds&apos; practice. Your inquiry will be reviewed with care.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" aria-label="Consultation Inquiry Form">
                <h3 className="font-serif text-2xl text-[#242E2B] font-normal mb-1">
                  Request a Consultation
                </h3>
                <p className="font-sans text-xs text-[#616E68] mb-4">
                  Fill out this brief inquiry form to get in touch with the practice.
                </p>

                <div>
                  <label htmlFor="name" className="block text-xs font-sans uppercase tracking-wider text-[#242E2B] font-medium mb-1.5">
                    Your Full Name <span className="text-[#C9826B]" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    suppressHydrationWarning
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E2DDD5] rounded-lg text-sm font-sans text-[#242E2B] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#49645A] focus-visible:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-sans uppercase tracking-wider text-[#242E2B] font-medium mb-1.5">
                    Email Address <span className="text-[#C9826B]" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    suppressHydrationWarning
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E2DDD5] rounded-lg text-sm font-sans text-[#242E2B] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#49645A] focus-visible:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="format" className="block text-xs font-sans uppercase tracking-wider text-[#242E2B] font-medium mb-1.5">
                      Care Setting
                    </label>
                    <select
                      id="format"
                      name="format"
                      suppressHydrationWarning
                      value={formData.format}
                      onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E2DDD5] rounded-lg text-sm font-sans text-[#242E2B] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#49645A]"
                    >
                      <option value="santa-monica-in-person">Santa Monica (In-Person)</option>
                      <option value="california-telehealth">California (Telehealth)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-xs font-sans uppercase tracking-wider text-[#242E2B] font-medium mb-1.5">
                      Primary Focus
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      suppressHydrationWarning
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E2DDD5] rounded-lg text-sm font-sans text-[#242E2B] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#49645A]"
                    >
                      <option value="anxiety">Anxiety & Panic</option>
                      <option value="burnout">Burnout & Perfectionism</option>
                      <option value="trauma">Trauma Healing</option>
                      <option value="general">Stress & Emotional Regulation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-sans uppercase tracking-wider text-[#242E2B] font-medium mb-1.5">
                    Brief Note (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    suppressHydrationWarning
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share a few words about what you hope to work on..."
                    className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#E2DDD5] rounded-lg text-sm font-sans text-[#242E2B] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#49645A] focus-visible:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  suppressHydrationWarning
                  className="w-full py-3.5 px-6 rounded-full bg-[#49645A] hover:bg-[#3B534B] text-[#FAF8F5] text-[0.8rem] font-medium tracking-[0.18em] uppercase transition-all shadow-xs hover:shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#49645A] focus-visible:ring-offset-2 cursor-pointer"
                >
                  {FINAL_CTA_CONTENT.buttonText}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
