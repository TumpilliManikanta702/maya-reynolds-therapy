"use client";

import { useState } from "react";
import { FAQ_CONTENT } from "@/lib/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="scroll-mt-16 sm:scroll-mt-20 py-20 md:py-28 lg:py-32 bg-[#F6F1EA]/40 border-t border-[#E2DDD5]"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-6 bg-[#C9826B]" aria-hidden="true" />
            <span className="text-xs uppercase font-sans font-medium tracking-[0.22em] text-[#49645A]">
              COMMON QUESTIONS
            </span>
            <span className="h-px w-6 bg-[#C9826B]" aria-hidden="true" />
          </div>
          <h2
            id="faq-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242E2B] tracking-tight mb-4"
          >
            Frequently <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#548074] font-normal inline-block px-1.5 -rotate-1 align-middle">asked</span> questions
          </h2>
          <p className="font-sans text-base text-[#616E68]">
            Clear, transparent details regarding therapy format, clinical approaches, and what to expect when beginning work together.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="divide-y divide-[#E2DDD5] border-y border-[#E2DDD5] bg-[#FFFFFF] rounded-xl shadow-2xs overflow-hidden">
          {FAQ_CONTENT.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div key={faq.question} className="group">
                <button
                  id={headerId}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full py-6 px-6 sm:px-8 flex items-center justify-between text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#49645A] hover:bg-[#FAF8F5]/80 transition-colors"
                >
                  <span className="font-serif text-xl sm:text-2xl text-[#242E2B] font-normal pr-4 group-hover:text-[#49645A] transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-[#E2DDD5] flex items-center justify-center text-[#49645A] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#49645A] text-[#FFFFFF] border-[#49645A]" : "bg-transparent"
                    }`}
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`grid transition-all duration-300 ease-in-out px-6 sm:px-8 ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-sans text-base text-[#616E68] leading-relaxed pt-1 border-t border-[#E2DDD5]/40">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
