import type { TrustSignal, CarePillar, Testimonial } from "../types";

export const HERO = {
  headline: "A home where your loved one truly belongs",
  subtext: "Compassionate, personalized care for elderly adults and those with memory care needs, in a warm Everett home.",
  primaryCTA: { label: "Schedule a Tour", href: "/contact" },
  secondaryCTA: { label: "Learn About Our Care", href: "/services" },
};

export const TRUST_SIGNALS: TrustSignal[] = [
  { value: "Caring Since 2018", label: "Experienced in memory & dementia care." },
  { value: "Licensed & Bonded", label: "State of Washington certified AFH" },
  { value: "Intentionally Small", label: "Close-knit setting where everyone is known by name" },
];

export const CARE_PILLARS: CarePillar[] = [
  {
    shortTitle: "Memory & Dementia Care",
    title: "Memory & Dementia Care",
    lede: "Specialized support for residents living with dementia, Alzheimer's, and developmental disabilities.",
    description: "Our approach is patient, routine-centered, and shaped by years of hands-on experience in memory care. Families tell us the difference shows within the first week.",
    // CONFIRM WITH OWNER: both items below are unverified
    detail: "Dementia specialty trained · Structured daily routines",
    image: "/images/care-hands.jpg",
    imageAlt: "Caregiver gently supporting a resident's hand during a sensory activity",
  },
  {
    shortTitle: "Care That Knows You",
    title: "Personalized Attention",
    lede: "Every person receives care built around their individual needs, preferences, and daily rhythm.",
    description: "You will always reach someone who knows your loved one by name, not a shift supervisor reading from a chart.",
    // VERIFIED: "6 residents max" — CONFIRM WITH OWNER: "Individual care plans", "Families always welcome"
    detail: "Small home setting · Tailored to each person · Families always welcome",
    image: "/images/bedroom.jpg", // TODO: swap for environmental or hands-based photo
    imageAlt: "Caregiver and resident in a one-on-one conversation in a comfortable living space",
  },
  {
    shortTitle: "Meals From Our Kitchen",
    title: "Home-Cooked Meals",
    lede: "Three nutritious meals daily, prepared fresh, with snacks, coffee, and tea throughout the day.",
    description: "We accommodate dietary needs and preferences. Mealtimes are unhurried, eaten together, and treated as part of the care.",
    // VERIFIED: "Cooked fresh daily" — CONFIRM WITH OWNER: "Dietary needs accommodated", "Shared family-style meals"
    detail: "Prepared fresh each day · Dietary needs accommodated · Shared mealtimes",
    image: "/images/kitchen.jpg",
    imageAlt: "A freshly prepared home-cooked meal with vegetables, bread, and fresh juice",
  },
];

export const TESTIMONIAL: Testimonial = {
  quote: "From the very first visit, Tizita made us feel like family. Our mother is happier and more at ease here than we've seen her in years.",
  author: "Sarah A.",
  relationship: "Daughter of a resident",
};
