import Image from "next/image";
import Link from "next/link";
import { ABOUT_MAYA_CONTENT } from "@/lib/content";

export default function AboutMaya() {
  return (
    <section
      id="about"
      aria-labelledby="about-maya-heading"
      className="scroll-mt-16 sm:scroll-mt-20 py-20 md:py-28 lg:py-32 bg-[#F6F1EA]/40 border-t border-[#E2DDD5]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Portrait */}
          <div className="lg:col-span-5 relative">
            {/* Subtle terracotta / warm sand background offset layer */}
            <div
              className="absolute -inset-4 sm:-inset-5 bg-[#E8DED0] rounded-xl transform -translate-x-2 -translate-y-2 -z-10"
              aria-hidden="true"
            />

            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-xl overflow-hidden shadow-lg bg-[#E8DED0] border border-[#E2DDD5]">
              <Image
                src={ABOUT_MAYA_CONTENT.portraitImage}
                alt={ABOUT_MAYA_CONTENT.portraitAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242E2B]/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Credential Badge Overlay */}
            <div className="mt-4 p-4 bg-[#FFFFFF] rounded-lg border border-[#E2DDD5] shadow-xs flex items-center justify-between">
              <div>
                <span className="block font-serif text-lg text-[#242E2B] font-medium">
                  Dr. Maya Reynolds, PsyD
                </span>
                <span className="block text-xs uppercase tracking-wider text-[#616E68] font-sans">
                  {ABOUT_MAYA_CONTENT.credentialsTitle}
                </span>
              </div>
              <span className="text-[0.7rem] uppercase tracking-wider px-3 py-1 bg-[#EFF4F2] text-[#49645A] font-medium rounded-full">
                Santa Monica, CA
              </span>
            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#C9826B]" aria-hidden="true" />
              <span className="text-xs uppercase font-sans font-medium tracking-[0.22em] text-[#49645A]">
                {ABOUT_MAYA_CONTENT.eyebrow}
              </span>
            </div>

            <h2
              id="about-maya-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242E2B] tracking-tight mb-4"
            >
              {ABOUT_MAYA_CONTENT.heading}
            </h2>

            <p className="font-sans text-xs uppercase tracking-[0.16em] text-[#C9826B] font-medium mb-8">
              {ABOUT_MAYA_CONTENT.locationBadge}
            </p>

            <div className="space-y-4 font-sans text-base sm:text-lg text-[#616E68] leading-relaxed mb-8">
              {ABOUT_MAYA_CONTENT.bioParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Authentic Quote from Profile */}
            <div className="p-6 bg-[#FFFFFF] rounded-lg border-l-2 border-[#49645A] shadow-2xs mb-8">
              <blockquote className="font-serif text-lg sm:text-xl italic text-[#242E2B] leading-snug">
                &ldquo;{ABOUT_MAYA_CONTENT.quote}&rdquo;
              </blockquote>
            </div>

            {/* Actions */}
            <div>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#49645A] hover:bg-[#3B534B] text-[#FAF8F5] text-[0.78rem] font-medium tracking-[0.18em] uppercase transition-all shadow-xs"
              >
                Connect with Dr. Reynolds
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
