export interface WhoWeHelpItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const HERO_CONTENT = {
  eyebrow: "THERAPY FOR ADULTS IN SANTA MONICA & ACROSS CALIFORNIA",
  headline: "Feel grounded in yourself again.",
  subtext:
    "Warm, collaborative therapy for adults navigating anxiety, panic, trauma, burnout, perfectionism, and chronic stress.",
  primaryCTA: {
    label: "SCHEDULE A CONSULTATION",
    href: "#contact",
  },
  secondaryCTA: {
    label: "LEARN MORE",
    href: "#about",
  },
  image: "/images/hero_space.jpg",
  imageAlt: "Calm, sunlit interior of a Santa Monica therapy office with natural light and minimalist armchair",
};

export const INTRO_CONTENT = {
  eyebrow: "A SPACE TO BREATHE",
  headline: "You can look like you're doing fine—and still feel exhausted inside.",
  paragraph1:
    "Many clients are high-achieving, thoughtful, capable, and self-aware while internally feeling overwhelmed, stuck in overthinking, emotionally on edge, or constantly bracing for something to go wrong.",
  paragraph2:
    "Therapy can provide space to slow down, understand what is happening beneath the surface, and develop more sustainable ways of living and working.",
  image: "/images/thoughtful_adult.jpg",
  imageAlt: "Thoughtful adult looking out a sunlit window in a calm, reflective space",
  pullQuote:
    "Therapy works best when you feel respected, understood, and actively involved in your own healing process.",
};

export const WHO_I_WORK_WITH_CONTENT = {
  eyebrow: "AREAS OF FOCUS",
  heading: "Who I Work With",
  description:
    "Therapy tailored specifically for adults seeking deeper understanding, practical stabilization, and lasting emotional ease.",
  categories: [
    {
      id: "anxiety-panic",
      title: "Anxiety & Panic",
      tagline: "Finding calm amid constant worry and tension",
      description:
        "Support for adults experiencing persistent worry, panic, physical tension, overthinking, or difficulty feeling at ease in daily life.",
      image: "/images/who_anxiety.jpg",
      imageAlt: "Adult walking thoughtfully along a calm Pacific ocean beach at golden hour",
      iconName: "waves",
    },
    {
      id: "professionals-achievers",
      title: "Professionals & Burnout",
      tagline: "Navigating high pressure without losing yourself",
      description:
        "Support for entrepreneurs, creatives, and professionals navigating burnout, perfectionism, and intense internal pressure.",
      image: "/images/who_professionals.jpg",
      imageAlt: "Professional taking a calm mindful pause by a sunlit window",
      iconName: "sparkles",
    },
    {
      id: "trauma-healing",
      title: "Adults Healing From Trauma",
      tagline: "A safe, paced path toward reconnecting with safety",
      description:
        "A careful, paced approach for adults working through past experiences and their lasting effects on relationships, confidence, and sense of safety.",
      image: "/images/who_trauma.jpg",
      imageAlt: "Adult walking peacefully along a warm coastal path at sunset",
      iconName: "shield",
    },
  ],
};

export const STATEMENT_CONTENT = {
  quote:
    "You deserve a space where you can slow down, feel understood, and reconnect with yourself.",
  subtext: "Santa Monica, California • In-Person & Telehealth",
  backgroundImage: "/images/statement_ocean.jpg",
  imageAlt: "Peaceful ocean horizon in Santa Monica at quiet dusk",
};

export const AREAS_OF_SUPPORT = [
  { name: "Anxiety", description: "Constant internal worry, restlessness, and nervous system activation" },
  { name: "Panic", description: "Sudden surges of fear, bodily overwhelm, and physical symptoms" },
  { name: "Trauma", description: "Single-incident and complex experiences impacting daily life" },
  { name: "Burnout", description: "Emotional, physical, and cognitive depletion from prolonged stress" },
  { name: "Perfectionism", description: "High internal standards accompanied by unrelenting self-criticism" },
  { name: "Chronic Stress", description: "Living in perpetual fight-or-flight without room for recovery" },
  { name: "Overthinking", description: "Looping thoughts, indecision, and difficulty quieting the mind" },
  { name: "Emotional Regulation", description: "Learning somatic tools to return to balance when triggered" },
  { name: "Confidence", description: "Rebuilding authentic self-worth from the inside out" },
  { name: "Relationships", description: "Addressing relational patterns and emotional boundaries" },
  { name: "Difficulty Sleeping", description: "Racing evening thoughts and difficulty achieving restorative rest" },
  { name: "Work-Related Stress", description: "Managing intense workplace demands, boundaries, and career fatigue" },
];

export const APPROACH_CONTENT = {
  eyebrow: "CLINICAL PERSPECTIVE",
  heading: "Therapy that's grounded in where you are—and where you want to go.",
  introduction:
    "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. We look at both the emotional and physiological dimensions of your experience.",
  pillars: [
    {
      title: "Warm & Collaborative",
      description:
        "Therapy is an active partnership. We work at your pace, honoring your insights and lived experience without judgment.",
    },
    {
      title: "Grounded & Supportive",
      description:
        "A steady, calming presence that helps you feel stabilized and anchored when emotions or stress feel overwhelming.",
    },
    {
      title: "Structured & Reflective",
      description:
        "Practical tools paired with deeper exploration so you gain both immediate coping strategies and long-term clarity.",
    },
    {
      title: "Safety & Stabilization First",
      description:
        "Establishing a firm foundation of physiological regulation and emotional safety before delving into challenging memories.",
    },
  ],
  modalities: [
    {
      name: "Cognitive Behavioral Therapy (CBT)",
      role: "Identifying and reshaping thought patterns and behavioral cycles that feed anxiety and burnout.",
    },
    {
      name: "EMDR",
      role: "Eye Movement Desensitization and Reprocessing to help the brain reprocess traumatic and distressing memories.",
    },
    {
      name: "Mindfulness-Based Practices",
      role: "Cultivating present-moment awareness, reducing reactive spirals, and softening self-criticism.",
    },
    {
      name: "Body-Oriented Techniques",
      role: "Integrating somatic awareness to release stored physical tension and regulate nervous system arousal.",
    },
  ],
  image: "/images/approach_grounding.jpg",
  imageAlt: "Natural river stones balanced beside a ceramic bowl with water, symbolizing mindfulness and stabilization",
};

export const SERVICES_CONTENT: ServiceItem[] = [
  {
    id: "trauma-therapy",
    number: "01",
    title: "Trauma Therapy",
    subtitle: "A careful, paced path toward safety and stabilization",
    description:
      "A careful, paced approach for adults working through single-incident trauma, complex trauma, and long-standing patterns connected to childhood, relationships, or chronic stress.",
    keyPoints: [
      "Single-incident and complex trauma support",
      "Paced carefully with an emphasis on safety and regulation",
      "Integration of EMDR and body-oriented techniques",
      "Helping you feel secure in your daily life, not just in session",
    ],
  },
  {
    id: "anxiety-panic-therapy",
    number: "02",
    title: "Anxiety & Panic Therapy",
    subtitle: "Moving from constant alarm to grounded ease",
    description:
      "Support for adults experiencing persistent worry, panic, tension, overthinking, difficulty sleeping, or feeling constantly on edge.",
    keyPoints: [
      "De-escalating panic attacks and physiological alarm",
      "Tools to interrupt chronic worry and repetitive overthinking",
      "Re-establishing restful sleep and physical ease",
      "Evidence-based CBT and mindfulness interventions",
    ],
  },
  {
    id: "burnout-perfectionism",
    number: "03",
    title: "Burnout & Perfectionism",
    subtitle: "Sustainable living for high achievers and professionals",
    description:
      "Support for professionals, entrepreneurs, and creatives who feel disconnected from themselves after years of pushing through stress, high expectations, and internal pressure.",
    keyPoints: [
      "Unpacking high internal expectations and fear of failure",
      "Recovering from cognitive and physical exhaustion",
      "Establishing healthy emotional and professional boundaries",
      "Creating sustainable, fulfilling ways of working and living",
    ],
  },
];

export const ABOUT_MAYA_CONTENT = {
  eyebrow: "ABOUT YOUR THERAPIST",
  heading: "Meet Dr. Maya Reynolds, PsyD",
  credentialsTitle: "Licensed Clinical Psychologist",
  locationBadge: "Santa Monica, CA • In-Person & Telehealth",
  bioParagraphs: [
    "I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.",
    "My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling 'functional' on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they're always bracing for something to go wrong. Others are navigating earlier life experiences that continue to affect their relationships, confidence, or sense of safety.",
    "I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.",
  ],
  quote:
    "If you're looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.",
  portraitImage: "/images/dr_maya_reynolds.png",
  portraitAlt: "Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist in Santa Monica",
};

export const OUR_OFFICE_CONTENT = {
  eyebrow: "OUR SANTA MONICA PRACTICE",
  heading: "A Calm Space to Slow Down",
  description:
    "My Santa Monica office is a quiet, private space designed to feel calm and grounding. With natural light and a comfortable, uncluttered environment, the space offers room to pause, reflect, and focus on yourself. Clients often share that the space itself helps them feel more at ease when they arrive.",
  inPerson: {
    label: "IN-PERSON THERAPY",
    addressLine1: "123th Street 45 W",
    addressLine2: "Santa Monica, CA 90401",
    note: "Quiet, private practice setting with ample natural light",
  },
  telehealth: {
    label: "SECURE TELEHEALTH",
    availability: "Available across California",
    note: "Secure telehealth sessions for clients located in California",
  },
  image1: "/images/office1.jpeg",
  image1Alt: "Santa Monica therapy office featuring quiet seating area with natural sunlight and comfortable armchair",
  image2: "/images/office2.jpeg",
  image2Alt: "Comfortable, uncluttered therapy consultation area designed for calm and grounding",
};

export const FAQ_CONTENT: FAQItem[] = [
  {
    question: "Do you offer in-person therapy in Santa Monica?",
    answer:
      "Yes. Maya offers in-person therapy from her quiet, private Santa Monica office located at 123th Street 45 W, Santa Monica, CA 90401.",
  },
  {
    question: "Do you offer telehealth?",
    answer:
      "Yes. Secure telehealth sessions are available for adult clients located anywhere in California.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Maya primarily works with adults, including professionals, entrepreneurs, creatives, and high-achieving individuals navigating anxiety, panic, trauma, burnout, perfectionism, and chronic stress.",
  },
  {
    question: "What therapeutic approaches do you use?",
    answer:
      "Maya integrates evidence-based Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented techniques tailored to each individual's unique needs.",
  },
  {
    question: "What can I expect from therapy?",
    answer:
      "Maya takes a warm, collaborative, and grounded approach. Sessions are structured enough to feel supportive and clarifying while allowing ample space for thoughtful reflection and deeper exploration.",
  },
  {
    question: "Do you work with trauma?",
    answer:
      "Trauma work is an important part of Maya's practice. Her approach is paced carefully with an emphasis on safety, stabilization, and helping clients feel regulated and secure in their daily lives.",
  },
];

export const FINAL_CTA_CONTENT = {
  eyebrow: "START YOUR THERAPY JOURNEY",
  heading: "You don't have to figure it all out alone.",
  subtext:
    "If you're ready to slow down, understand what you're experiencing, and begin building more sustainable ways of living and working, therapy can be a place to start.",
  buttonText: "SCHEDULE A CONSULTATION",
  buttonHref: "#contact",
  availabilityNote: "Accepting adult clients for in-person Santa Monica sessions & California telehealth.",
};
