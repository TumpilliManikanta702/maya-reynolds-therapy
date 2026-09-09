import Image from "next/image";
import { OUR_OFFICE_CONTENT } from "@/lib/content";

export default function OurOffice() {
  return (
    <section
      id="office"
      aria-labelledby="our-office-heading"
      className="scroll-mt-16 sm:scroll-mt-20 py-20 md:py-28 lg:py-32 bg-[#FAF8F5] border-t border-[#E2DDD5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-6 bg-[#C9826B]" aria-hidden="true" />
            <span className="text-xs uppercase font-sans font-medium tracking-[0.22em] text-[#49645A]">
              {OUR_OFFICE_CONTENT.eyebrow}
            </span>
          </div>
          <h2
            id="our-office-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242E2B] tracking-tight mb-5"
          >
            A Calm <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#548074] font-normal inline-block px-1.5 -rotate-1 align-middle">space</span> to Slow Down
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#616E68] leading-relaxed">
            {OUR_OFFICE_CONTENT.description}
          </p>
        </div>

        {/* Asymmetric Dual Office Images Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Primary Office Image (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-[#E8DED0] border border-[#E2DDD5]">
              <Image
                src={OUR_OFFICE_CONTENT.image1}
                alt={OUR_OFFICE_CONTENT.image1Alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 680px"
                className="object-cover object-center transform hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
            <p className="mt-3 text-xs font-sans text-[#616E68] italic">
              Quiet, sunlit seating area for in-person consultations in Santa Monica
            </p>
          </div>

          {/* Secondary Office Image (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col justify-center">
            <div className="relative aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5] rounded-xl overflow-hidden shadow-md bg-[#E8DED0] border border-[#E2DDD5]">
              <Image
                src={OUR_OFFICE_CONTENT.image2}
                alt={OUR_OFFICE_CONTENT.image2Alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 460px"
                className="object-cover object-center transform hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
            <p className="mt-3 text-xs font-sans text-[#616E68] italic">
              Comfortable, uncluttered space designed for safety and ease
            </p>
          </div>
        </div>

        {/* Practice Locations & Care Modality Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-[#E2DDD5]">
          {/* In-Person Practice Box */}
          <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-xl border border-[#E2DDD5] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#EFF4F2] flex items-center justify-center text-[#49645A]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#49645A]">
                  {OUR_OFFICE_CONTENT.inPerson.label}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#242E2B] font-normal mb-2">
                Santa Monica Office
              </h3>
              <address className="not-italic font-sans text-base text-[#616E68] leading-relaxed mb-4">
                {OUR_OFFICE_CONTENT.inPerson.addressLine1}
                <br />
                {OUR_OFFICE_CONTENT.inPerson.addressLine2}
              </address>
            </div>
            <p className="font-sans text-xs text-[#49645A] pt-4 border-t border-[#E2DDD5] font-medium">
              {OUR_OFFICE_CONTENT.inPerson.note}
            </p>
          </div>

          {/* Telehealth Across CA Box */}
          <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-xl border border-[#E2DDD5] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#FAF0EB] flex items-center justify-center text-[#C9826B]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                  </svg>
                </div>
                <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C9826B]">
                  {OUR_OFFICE_CONTENT.telehealth.label}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#242E2B] font-normal mb-2">
                Virtual Consultations
              </h3>
              <p className="font-sans text-base text-[#616E68] leading-relaxed mb-4">
                {OUR_OFFICE_CONTENT.telehealth.availability}
              </p>
            </div>
            <p className="font-sans text-xs text-[#C9826B] pt-4 border-t border-[#E2DDD5] font-medium">
              {OUR_OFFICE_CONTENT.telehealth.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
