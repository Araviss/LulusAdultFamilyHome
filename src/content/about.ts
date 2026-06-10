import type { Value } from "../types";

export const ABOUT_HERO = {
  label: "Our Story",
  title: "A home built on knowing you",
  highlight: "",
  image: "/images/hero.jpg",
  imageAlt: "A caregiver sharing a warm moment with an older adult outdoors",
  description:
    "Licensed, inspected, and intentionally small — Lulu's Care exists because we believe the best care happens in a real home, not a facility.",
};

export const TIZITA = {
  eyebrow: "Our Caregiver",
  heading: "Meet Tizita",
  paragraphs: [
    "I became a professional caregiver in 2018, and most of that time was spent in memory and dementia care. Working in larger settings taught me a lot — but it also showed me what those settings couldn't give: the time and consistency that real relationships require.",
    "I opened Lulu's Care because I wanted to create something I could genuinely stand behind. A place where families don't have to wonder whether their loved one is known — where every caregiver knows each resident's name, their routines, and what a good day looks like for them.",
    "The home is small by design. Six residents is not a limitation — it's how we do this well.",
  ],
  credentials: "[Certifications / training — pending from Tizita]",
  // REPLACE WITH REAL PHOTO — portrait orientation preferred
  image: "/images/tizita.svg",
  imageAlt: "Tizita, owner and primary caregiver at Lulu's Care in Everett, WA",
};

export const THE_HOME = {
  eyebrow: "Our Space",
  heading: "A real home in Everett",
  description:
    "Lulu's Care is a licensed adult family home in a quiet residential neighborhood in Everett, WA. It looks like a home because it is one.",
  details: [
    // CONFIRM WITH OWNER: verify all details before publishing
    { label: "Capacity", value: "Up to 6 residents" },
    { label: "Location", value: "Everett, WA" },
    { label: "Licensing", value: "WA State licensed & inspected" },
    { label: "Rooms", value: "Private & semi-private available" },
  ],
  body: [
    "Rooms are private or semi-private, and shared spaces — the living room, dining room, kitchen — are designed to feel residential. This isn't a hallway with numbered doors. Meals happen around the same table. Mornings follow a rhythm residents come to rely on.",
    "Outdoor access and a safe, familiar environment are part of daily life, not an amenity.",
  ],
  // TODO: replace with real photo — exterior, living room, or backyard
  image: "",
  imageAlt: "The home at Lulu's Care in Everett, WA",
};

export const VALUES: Value[] = [
  {
    title: "Know the whole person",
    description:
      "We learn each resident's history, preferences, and daily rhythms before we learn their diagnosis. Care built on who they are, not just what they need.",
    icon: "heart",
  },
  {
    title: "Consistency over shifts",
    description:
      "The same home, the same routines, the same familiar faces. For people with memory needs especially, a stable environment isn't a comfort — it's care.",
    icon: "clock",
  },
  {
    title: "Always kept in the loop",
    description:
      "Families receive regular updates and are included in care decisions. You can reach us any time with questions — we'd rather over-communicate than leave you guessing.",
    icon: "users",
  },
  {
    title: "A routine worth keeping",
    description:
      "Stable daily rhythms matter. We pay attention to how someone takes their coffee, which chair they prefer, what music they like — and we keep those things consistent.",
    icon: "home",
  },
];
