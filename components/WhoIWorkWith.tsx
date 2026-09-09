import Image from "next/image";
import Link from "next/link";
import { WHO_I_WORK_WITH_CONTENT } from "@/lib/content";

export default function WhoIWorkWith() {
  return (
    <section
      id="support"
      aria-labelledby="who-i-work-with-heading"
      className="scroll-mt-16 sm:scroll-mt-20 py-20 md:py-28 lg:py-32 bg-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-6 bg-[#C9826B]" aria-hidden="true" />
            <span className="text-xs uppercase font-sans font-medium tracking-[0.22em] text-[#49645A]">
              {WHO_I_WORK_WITH_CONTENT.eyebrow}
            </span>
            <span className="h-px w-6 bg-[#C9826B]" aria-hidden="true" />
          </div>
          <h2
            id="who-i-work-with-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242E2B] tracking-tight mb-5"
          >
            Who I <span className="font-script text-4xl sm:text-5xl lg:text-[3.5rem] text-[#548074] font-normal inline-block px-1.5 -rotate-1 align-middle">work with</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#616E68] leading-relaxed">
            {WHO_I_WORK_WITH_CONTENT.description}
          </p>
        </div>

        {/* 3 Photographic Cards Grid (Inspired by Reference Site's "Who We Help") */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {WHO_I_WORK_WITH_CONTENT.categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-[#FFFFFF] rounded-xl border border-[#E2DDD5] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-[#49645A]/60"
            >
              <div>
                {/* Editorial Photo Header */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E8DED0]">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242E2B]/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Body */}
                <div className="p-7 sm:p-8">
                  <h3 className="font-serif text-2xl sm:text-[1.65rem] text-[#242E2B] font-normal mb-2 group-hover:text-[#49645A] transition-colors">
                    {category.title}
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-wider text-[#C9826B] font-medium mb-4">
                    {category.tagline}
                  </p>
                  <p className="font-sans text-sm text-[#616E68] leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="px-7 sm:px-8 pb-7 sm:pb-8 pt-2">
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.16em] text-[#49645A] font-semibold hover:text-[#242E2B] transition-colors group-hover:gap-3"
                >
                  <span>Explore specialized care</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
