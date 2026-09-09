import Link from "next/link";
import { SERVICES_CONTENT } from "@/lib/content";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-16 sm:scroll-mt-20 py-20 md:py-28 lg:py-32 bg-[#FAF8F5] border-t border-[#E2DDD5]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-6 bg-[#C9826B]" aria-hidden="true" />
            <span className="text-xs uppercase font-sans font-medium tracking-[0.22em] text-[#49645A]">
              PRACTICE SERVICES
            </span>
          </div>
          <h2
            id="services-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242E2B] tracking-tight mb-5"
          >
            Specialized <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#548074] font-normal inline-block px-1.5 -rotate-1 align-middle">care</span> for adults
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#616E68] leading-relaxed">
            In-depth psychological treatment tailored to address trauma, persistent anxiety, and high-achiever burnout. Available in-person in Santa Monica and via secure telehealth across California.
          </p>
        </div>

        {/* 3 Editorial Service Rows */}
        <div className="space-y-10 sm:space-y-12">
          {SERVICES_CONTENT.map((service) => (
            <div
              key={service.id}
              className="bg-[#FFFFFF] p-8 sm:p-12 lg:p-14 rounded-xl border border-[#E2DDD5] shadow-xs hover:border-[#49645A]/60 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Number & Titles (5 cols) */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-serif text-3xl sm:text-4xl text-[#C9826B] italic font-normal">
                      {service.number}
                    </span>
                    <span className="h-px w-10 bg-[#E2DDD5]" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#242E2B] font-normal mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm uppercase tracking-wider text-[#49645A] font-medium mb-6">
                    {service.subtitle}
                  </p>
                  <p className="font-sans text-base text-[#616E68] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Key Points & CTA (7 cols) */}
                <div className="lg:col-span-7 lg:pl-8 lg:border-l border-[#E2DDD5] flex flex-col justify-between h-full">
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-[0.18em] text-[#242E2B] font-semibold mb-5">
                      Clinical Focus & Methods:
                    </h4>
                    <ul className="space-y-3.5 mb-8">
                      {service.keyPoints.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm sm:text-base text-[#616E68] font-sans">
                          <svg
                            className="w-4 h-4 text-[#49645A] mt-1 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-[#E2DDD5] flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs font-sans text-[#616E68]">
                      Santa Monica In-Person & California Telehealth
                    </span>
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.16em] text-[#49645A] font-semibold hover:text-[#242E2B] transition-colors"
                    >
                      <span>Inquire about {service.title}</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
