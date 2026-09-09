"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { scrollToSection } from "@/lib/scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Track scroll position for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Handle direct visits with hash on initial mount or popstate
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        scrollToSection(window.location.hash);
      }
    };

    if (window.location.hash) {
      const timer = setTimeout(handleHash, 150);
      return () => clearTimeout(timer);
    }

    window.addEventListener("popstate", handleHash);
    return () => window.removeEventListener("popstate", handleHash);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      closeMenu();
      scrollToSection(href);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E2DDD5]/80 py-3"
          : "bg-[#FAF8F5] border-b border-[#E2DDD5]/50 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Logo Area */}
        <Link
          href="/"
          className="group flex flex-col focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#49645A] rounded-xs"
        >
          <span className="font-serif text-2xl sm:text-2xl lg:text-[1.7rem] font-medium tracking-tight text-[#242E2B] group-hover:text-[#49645A] transition-colors">
            {SITE_CONFIG.name}
          </span>
          <span className="text-[0.68rem] tracking-[0.2em] uppercase font-sans font-medium text-[#616E68] -mt-0.5">
            {SITE_CONFIG.title} • Santa Monica
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-7 lg:space-x-8"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.filter((item) => item.href !== "#contact").map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              className="text-[0.78rem] tracking-[0.16em] uppercase font-medium text-[#242E2B]/85 hover:text-[#49645A] transition-colors relative py-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#49645A] rounded-xs after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#49645A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 cursor-pointer"
            >
              {item.label}
            </a>
          ))}

          {/* Signature Oval Pill Consultation CTA (Inspired by Reference Site) */}
          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "#contact")}
            className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-[#242E2B]/60 text-[#242E2B] hover:border-[#49645A] hover:bg-[#49645A] hover:text-[#FAF8F5] text-[0.75rem] font-medium tracking-[0.18em] uppercase transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#49645A] focus-visible:ring-offset-2 cursor-pointer"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          ref={toggleButtonRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          suppressHydrationWarning
          className="md:hidden inline-flex items-center justify-center p-2.5 text-[#29332F] hover:text-[#49645A] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#49645A] rounded-sm transition-colors"
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
            aria-hidden="true"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Backdrop and Navigation Menu */}
      {isOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="md:hidden fixed inset-0 top-[73px] z-40 bg-[#FAF8F5] flex flex-col justify-between px-8 py-8 overflow-y-auto border-t border-[#E2DDD5]"
        >
          <div className="space-y-6">
            <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="font-serif text-2xl text-[#242E2B] hover:text-[#49645A] transition-colors py-1.5 border-b border-[#E2DDD5]/60 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, "#contact")}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-[#242E2B] bg-[#242E2B] hover:bg-[#49645A] text-[#FAF8F5] text-xs font-medium tracking-[0.18em] uppercase transition-all shadow-xs cursor-pointer"
              >
                Contact Practice
              </a>
            </div>
          </div>

          {/* Mobile Footer Note */}
          <div className="pt-8 border-t border-[#E2DDD5]/80 text-xs text-[#616E68] space-y-1.5">
            <p className="font-serif text-base text-[#242E2B]">{SITE_CONFIG.name}</p>
            <p>{SITE_CONFIG.address.full}</p>
            <p className="text-[#49645A] font-medium">{SITE_CONFIG.telehealth}</p>
          </div>
        </div>
      )}
    </header>
  );
}
