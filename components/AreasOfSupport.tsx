import Link from "next/link";
import { AREAS_OF_SUPPORT } from "@/lib/content";

export default function AreasOfSupport() {
  return (
    <section
      id="support"
      aria-labelledby="areas-of-support-heading"
      className="scroll-mt-16 sm:scroll-mt-20 py-20 md:py-28 lg:py-32 bg-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Header Column (5 cols on lg) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#C9826B]" aria-hidden="true" />
              <span className="text-xs uppercase font-sans font-medium tracking-[0.24em] text-[#49645A]">
                CLINICAL FOCUS
              </span>
            </div>

            <h2
              id="areas-of-support-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242E2B] tracking-tight mb-5"
            >
              Our areas of{" "}
              <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#548074] font-normal inline-block px-1 -rotate-1 align-middle">
                expertise
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#616E68] leading-relaxed mb-8 max-w-md">
              Evidence-based psychotherapy tailored for adults navigating anxiety, panic, trauma, professional burnout, and life transitions in Santa Monica and across California.
            </p>

            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-[#49645A] font-semibold hover:text-[#242E2B] transition-colors group"
              >
                <span>Inquire about your needs</span>
                <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Two-Column Hairline List (7 cols on lg, inspired by Reference Screenshot 4) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {/* Column 1 */}
              <div className="border-t border-[#E2DDD5]">
                {AREAS_OF_SUPPORT.slice(0, 6).map((area, index) => (
                  <div
                    key={area.name}
                    className="py-4.5 sm:py-5 border-b border-[#E2DDD5] group flex flex-col justify-center transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-[0.8rem] font-sans font-medium tracking-[0.2em] uppercase text-[#242E2B] group-hover:text-[#49645A] transition-colors">
                        {area.name}
                      </span>
                      <span className="text-[0.68rem] text-[#616E68]/50 font-mono">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-xs text-[#616E68] mt-1 line-clamp-1 font-sans">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="border-t border-[#E2DDD5]">
                {AREAS_OF_SUPPORT.slice(6, 12).map((area, index) => (
                  <div
                    key={area.name}
                    className="py-4.5 sm:py-5 border-b border-[#E2DDD5] group flex flex-col justify-center transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-[0.8rem] font-sans font-medium tracking-[0.2em] uppercase text-[#242E2B] group-hover:text-[#49645A] transition-colors">
                        {area.name}
                      </span>
                      <span className="text-[0.68rem] text-[#616E68]/50 font-mono">
                        {String(index + 7).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-xs text-[#616E68] mt-1 line-clamp-1 font-sans">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
