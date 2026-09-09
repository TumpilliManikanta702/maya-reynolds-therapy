"use client";

import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { scrollToSection } from "@/lib/scroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToSection(href);
    }
  };

  return (
    <footer className="bg-[#242E2B] text-[#FAF8F5] pt-16 pb-12 border-t border-[#FAF8F5]/15 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#FAF8F5]/15">
          {/* Brand & Credentials Column (5 cols) */}
          <div className="lg:col-span-5">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-normal mb-2">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-xs uppercase tracking-[0.18em] text-[#C9826B] font-medium mb-4">
              {SITE_CONFIG.title}
            </p>
            <p className="text-sm text-[#FAF8F5]/75 leading-relaxed max-w-sm mb-6">
              Warm, evidence-based psychotherapy for adults navigating anxiety, panic, trauma, professional burnout, and chronic stress.
            </p>
            <div className="inline-block px-3.5 py-1.5 bg-[#FAF8F5]/10 rounded-full text-xs text-[#E8DED0]">
              In-Person in Santa Monica & Telehealth Across California
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#E8DED0] mb-5">
              Practice Navigation
            </h4>
            <nav className="space-y-3 flex flex-col" aria-label="Footer Navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="text-sm text-[#FAF8F5]/80 hover:text-[#C9826B] transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#C9826B] cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Office & Session Details (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#E8DED0] mb-5">
              Santa Monica Practice
            </h4>
            <address className="not-italic text-sm text-[#FAF8F5]/80 leading-relaxed space-y-3 mb-6">
              <div>
                <strong className="block text-[#FAF8F5] font-medium">In-Person Appointments:</strong>
                <span>{SITE_CONFIG.address.street}</span>
                <br />
                <span>
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                </span>
              </div>
              <div className="pt-2 border-t border-[#FAF8F5]/10">
                <strong className="block text-[#FAF8F5] font-medium">California Telehealth:</strong>
                <span>Secure telehealth sessions for clients located in California</span>
              </div>
            </address>

            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#49645A] hover:bg-[#3B534B] text-[#FAF8F5] text-xs font-medium tracking-[0.18em] uppercase transition-all shadow-xs cursor-pointer"
            >
              Request Consultation
            </a>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/60 leading-relaxed">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-[0.7rem] text-[#FAF8F5]/50">
            Santa Monica, California • Licensed Clinical Psychologist
          </p>
        </div>
      </div>
    </footer>
  );
}
