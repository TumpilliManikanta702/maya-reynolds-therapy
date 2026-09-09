import Image from "next/image";
import { STATEMENT_CONTENT } from "@/lib/content";

export default function StatementSection() {
  return (
    <section
      aria-label="Editorial Reflection"
      className="relative py-28 sm:py-36 md:py-44 lg:py-48 flex items-center justify-center overflow-hidden bg-[#242E2B]"
    >
      {/* Background Ocean Horizon Image with Warm Sunlit Contrast */}
      <Image
        src={STATEMENT_CONTENT.backgroundImage}
        alt={STATEMENT_CONTENT.imageAlt}
        fill
        sizes="100vw"
        className="object-cover object-center opacity-65 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#242E2B]/60 via-[#242E2B]/40 to-[#242E2B]/65" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <span className="inline-block h-0.5 w-12 bg-[#C9826B] mb-8" aria-hidden="true" />
        
        <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light leading-[1.28] text-[#FAF8F5] tracking-tight mb-8">
          &ldquo;{STATEMENT_CONTENT.quote}&rdquo;
        </p>

        <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-[#E8DED0] font-medium">
          {STATEMENT_CONTENT.subtext}
        </p>
      </div>
    </section>
  );
}
