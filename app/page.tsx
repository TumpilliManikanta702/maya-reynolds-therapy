import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import WhoIWorkWith from "@/components/WhoIWorkWith";
import StatementSection from "@/components/StatementSection";
import AreasOfSupport from "@/components/AreasOfSupport";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import AboutMaya from "@/components/AboutMaya";
import OurOffice from "@/components/OurOffice";
import FAQ from "@/components/FAQ";
import AppointmentCTA from "@/components/AppointmentCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Accessible Skip Link for Keyboard Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#49645A] focus:text-[#F8F5EF] focus:shadow-lg focus:outline-none rounded-xs text-xs uppercase tracking-wider font-semibold"
      >
        Skip to main content
      </a>

      {/* Primary Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        <Hero />
        <IntroSection />
        <WhoIWorkWith />
        <StatementSection />
        <AreasOfSupport />
        <Approach />
        <Services />
        <AboutMaya />
        <OurOffice />
        <FAQ />
        <AppointmentCTA />
      </main>

      {/* Practice Footer */}
      <Footer />
    </div>
  );
}
