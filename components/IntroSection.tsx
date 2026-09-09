import Image from "next/image";
import { INTRO_CONTENT } from "@/lib/content";

export default function IntroSection() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="py-20 md:py-28 lg:py-32 bg-[#F6F1EA]/40 border-y border-[#E2DDD5]/70"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Thoughtful Portrait with soft frame */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-md bg-[#E8DED0] border border-[#E2DDD5]">
              <Image
                src={INTRO_CONTENT.image}
                alt={INTRO_CONTENT.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 480px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-radial from-transparent to-[#242E2B]/10 pointer-events-none" />
            </div>
            {/* Small decorative terracotta accent tick */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-[#C9826B]/50 rounded-bl-sm pointer-events-none" />
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#C9826B]" aria-hidden="true" />
              <span className="text-xs uppercase font-sans font-medium tracking-[0.22em] text-[#49645A]">
                {INTRO_CONTENT.eyebrow}
              </span>
            </div>

            <h2
              id="intro-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-normal leading-[1.2] text-[#242E2B] mb-6 tracking-tight"
            >
              You can look like you&apos;re doing fine—
              <span className="block italic text-[#49645A] font-normal mt-1">
                and still feel exhausted inside.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#616E68] leading-relaxed font-sans mb-8">
              <p>{INTRO_CONTENT.paragraph1}</p>
              <p>{INTRO_CONTENT.paragraph2}</p>
            </div>

            {/* Editorial Pull Quote */}
            <div className="pl-6 border-l-2 border-[#49645A]/50 py-2">
              <blockquote className="font-serif text-xl sm:text-2xl italic text-[#242E2B] leading-snug">
                &ldquo;{INTRO_CONTENT.pullQuote}&rdquo;
              </blockquote>
              <cite className="block mt-2 font-sans not-italic text-xs tracking-wider uppercase text-[#49645A] font-medium">
                — Dr. Maya Reynolds, PsyD
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
