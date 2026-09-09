import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Alex_Brush } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: "Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Dr. Maya Reynolds, PsyD offers therapy for anxiety, trauma, burnout, panic, and perfectionism for adults in Santa Monica and across California. In-person and secure telehealth sessions available.",
  keywords: [
    "Santa Monica therapist",
    "therapy in Santa Monica",
    "adult therapy Santa Monica",
    "anxiety therapy Santa Monica",
    "trauma therapy Santa Monica",
    "burnout therapy California",
    "telehealth therapy California",
    "Dr. Maya Reynolds PsyD",
    "licensed clinical psychologist Santa Monica",
    "CBT therapy Santa Monica",
    "EMDR therapy Santa Monica",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: true,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
    description:
      "Dr. Maya Reynolds, PsyD offers therapy for anxiety, trauma, burnout, panic, and perfectionism for adults in Santa Monica and across California. In-person and secure telehealth sessions available.",
    url: SITE_CONFIG.siteUrl,
    siteName: "Dr. Maya Reynolds, PsyD | Clinical Psychology",
    images: [
      {
        url: "/images/dr_maya_reynolds.png",
        width: 1200,
        height: 630,
        alt: "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
    description:
      "Dr. Maya Reynolds, PsyD offers therapy for anxiety, trauma, burnout, panic, and perfectionism for adults in Santa Monica and across California.",
    images: ["/images/dr_maya_reynolds.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Maya Reynolds, PsyD",
    description:
      "Licensed Clinical Psychologist offering in-person therapy in Santa Monica and telehealth sessions across California for adults navigating anxiety, panic, trauma, and burnout.",
    url: SITE_CONFIG.siteUrl,
    image: `${SITE_CONFIG.siteUrl}/images/dr_maya_reynolds.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: "US",
    },
    medicalSpecialty: "Clinical Psychology",
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Trauma Therapy",
      },
      {
        "@type": "MedicalTherapy",
        name: "Anxiety & Panic Therapy",
      },
      {
        "@type": "MedicalTherapy",
        name: "Burnout & Perfectionism Support",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Santa Monica",
      },
      {
        "@type": "State",
        name: "California",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${dmSans.variable} ${alexBrush.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-[#242E2B] font-sans antialiased selection:bg-[#E8DED0] selection:text-[#242E2B]">
        {children}
      </body>
    </html>
  );
}
