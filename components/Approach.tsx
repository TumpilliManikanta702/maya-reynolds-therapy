import Image from "next/image";
import { APPROACH_CONTENT } from "@/lib/content";

export default function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="scroll-mt-16 sm:scroll-mt-20 py-20 md:py-28 lg:py-32 bg-[#F6F1EA]/40 border-t border-[#E2DDD5]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Header Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#C9826B]" aria-hidden="true" />
              <span className="text-xs uppercase font-sans font-medium tracking-[0.22em] text-[#49645A]">
                {APPROACH_CONTENT.eyebrow}
              </span>
            </div>
            <h2
              id="approach-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-normal leading-[1.2] text-[#242E2B] tracking-tight mb-6"
            >
              Therapy that&apos;s grounded in where you are{" "}
              <span className="font-script text-4xl sm:text-5xl lg:text-[3.5rem] text-[#548074] font-normal inline-block px-1 align-middle">&amp;</span>{" "}
              where you want to go.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#616E68] leading-relaxed">
              {APPROACH_CONTENT.introduction}
            </p>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-[#E8DED0] border border-[#E2DDD5]">
              <Image
                src={APPROACH_CONTENT.image}
                alt={APPROACH_CONTENT.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 480px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* 4 Therapeutic Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 pt-8 border-t border-[#E2DDD5]">
          {APPROACH_CONTENT.pillars.map((pillar) => (
            <div key={pillar.title} className="flex flex-col">
              <span className="h-0.5 w-8 bg-[#C9826B] mb-4" aria-hidden="true" />
              <h3 className="font-serif text-xl sm:text-2xl text-[#242E2B] font-normal mb-2">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-[#616E68] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Evidence-Based Modalities Box */}
        <div className="bg-[#FFFFFF] p-8 sm:p-12 rounded-xl border border-[#E2DDD5] shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-[0.7rem] uppercase font-sans font-medium tracking-[0.2em] text-[#49645A] block mb-2">
              INTEGRATIVE MODALITIES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#242E2B] font-normal">
              Evidence-based practices tailored to your nervous system
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {APPROACH_CONTENT.modalities.map((modality) => (
              <div key={modality.name} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#49645A] mt-2 shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="font-serif text-lg sm:text-xl text-[#242E2B] font-medium mb-1">
                    {modality.name}
                  </h4>
                  <p className="font-sans text-sm text-[#616E68] leading-relaxed">
                    {modality.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
