"use client";

import Image from "next/image";
import { HERO_CONTENT } from "@/lib/content";
import { scrollToSection } from "@/lib/scroll";

export default function Hero() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToSection(href);
    }
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#FAF8F5] pt-8 pb-20 md:pt-11 md:pb-28 lg:pt-14 lg:pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Content Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center max-w-2xl">
            {/* H1 Heading - Single H1 on page with integrated specialty & location SEO */}
            <h1
              id="hero-heading"
              className="mb-6 tracking-tight"
            >
              <span className="inline-flex items-center gap-2 mb-5">
                <span className="h-px w-6 bg-[#C9826B]" aria-hidden="true" />
                <span className="text-[0.72rem] sm:text-xs uppercase font-sans font-medium tracking-[0.24em] text-[#49645A]">
                  {HERO_CONTENT.eyebrow}
                </span>
              </span>
              <span className="block font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal leading-[1.18] text-[#242E2B]">
                Feel <span className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] text-[#548074] font-normal inline-block px-1.5 -rotate-1 align-middle">grounded</span> in yourself again.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-lg sm:text-xl text-[#616E68] leading-relaxed mb-8 sm:mb-10 max-w-xl">
              {HERO_CONTENT.subtext}
            </p>

            {/* CTA Group with Refined Pill Geometry */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <a
                href={HERO_CONTENT.primaryCTA.href}
                onClick={(e) => handleAnchorClick(e, HERO_CONTENT.primaryCTA.href)}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#49645A] hover:bg-[#3B534B] text-[#FAF8F5] text-[0.78rem] font-medium tracking-[0.18em] uppercase transition-all duration-200 shadow-xs hover:shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#49645A] focus-visible:ring-offset-2 text-center cursor-pointer"
              >
                {HERO_CONTENT.primaryCTA.label}
              </a>
              <a
                href={HERO_CONTENT.secondaryCTA.href}
                onClick={(e) => handleAnchorClick(e, HERO_CONTENT.secondaryCTA.href)}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-[#242E2B]/40 hover:border-[#242E2B] text-[#242E2B] hover:text-[#49645A] bg-transparent text-[0.78rem] font-medium tracking-[0.18em] uppercase transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#49645A] text-center cursor-pointer"
              >
                {HERO_CONTENT.secondaryCTA.label}
              </a>
            </div>

            {/* Micro Badges / Practice Highlights */}
            <div className="mt-12 pt-8 border-t border-[#E2DDD5] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-sans text-[#616E68]">
              <div>
                <span className="block font-medium text-[#242E2B] uppercase tracking-wider text-[0.7rem]">Location</span>
                <span>Santa Monica, CA</span>
              </div>
              <div>
                <span className="block font-medium text-[#242E2B] uppercase tracking-wider text-[0.7rem]">Care Format</span>
                <span>In-Person & Telehealth</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-medium text-[#242E2B] uppercase tracking-wider text-[0.7rem]">Focus</span>
                <span>Adults & Professionals</span>
              </div>
            </div>
          </div>

          {/* Right Editorial Image Frame (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            {/* Soft decorative background backdrop mirroring reference site's offset shapes */}
            <div
              className="absolute -inset-4 sm:-inset-6 bg-[#E8DED0]/60 rounded-2xl transform translate-x-2 translate-y-3 -z-10"
              aria-hidden="true"
            />
            
            <div className="relative overflow-hidden rounded-xl bg-[#E8DED0] shadow-lg aspect-[4/5] w-full">
              <Image
                src={HERO_CONTENT.image}
                alt={HERO_CONTENT.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
                className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242E2B]/25 via-transparent to-transparent pointer-events-none" />

              {/* Serene bottom caption pill */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-xs px-4 py-2.5 rounded-full border border-[#E2DDD5]/90 text-[0.75rem] font-sans text-[#242E2B] flex items-center justify-between shadow-2xs">
                <span className="font-serif italic text-sm text-[#49645A]">A quiet space for reflection</span>
                <span className="uppercase text-[0.65rem] tracking-wider text-[#616E68]">Santa Monica Practice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
