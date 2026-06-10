import type { FaqItem, ServiceCluster } from "../types";

export const SERVICES_HERO = {
  title: "Care built around each resident",
  description:
    "Every service here is part of daily life at Lulu's — included as standard, not an add-on.",
};

export const CORE_CARE_INTRO = {
  heading: "What daily care includes",
  body: "Every resident receives full daily support as part of living at Lulu's. Nothing listed here is an add-on or upcharge — it is simply what care looks like in this home.",
};

export const CORE_CLUSTERS: ServiceCluster[] = [
  {
    heading: "Personal care",
    body: "Bathing, dressing, grooming, mobility assistance, and toileting — handled with patience and dignity, adapted to each resident's abilities and preferences.",
  },
  {
    heading: "Health & medication support",
    body: "Medication management and reminders, coordination with doctors, pharmacies, and visiting providers. Health changes are noticed early because the same people provide care every day. We work with visiting nurses and outside providers for specialized medical needs — if you have questions about a specific condition, ask us directly.",
  },
  {
    heading: "Daily life",
    body: "Three home-cooked meals daily plus snacks, coffee, and tea. Housekeeping, laundry, and linens all included. Dietary needs and preferences accommodated.",
  },
  {
    heading: "Always attended",
    body: "A caregiver is present in the home at all times. We are happy to discuss staffing specifics during a call or visit.",
  },
];

export const MEMORY_CARE = {
  heading: "Memory & dementia care",
  paragraphs: [
    "This is the home's specialty. Tizita's experience is grounded in dementia and memory care — it is built into how this home operates, not layered on as an option. [PLACEHOLDER — specialty training claim pending owner confirmation. Do not invent licensing or credential claims.]",
    "The environment is designed to help: predictable daily routines, a calm residential setting, and a small number of residents who come to know each other and the space. For people with memory loss, familiarity is not a comfort — it is care.",
    "Families are kept informed as needs change. If a resident's condition shifts, we communicate directly and adjust care accordingly.",
  ],
};

export const WHO_WE_SERVE = {
  heading: "Who we serve",
  intro:
    "Honest fit matters more than a sales pitch — here is who tends to do well at Lulu's.",
  goodFit: {
    heading: "We're a good fit for",
    items: [
      "Adults living with dementia, Alzheimer's, or other memory conditions",
      "Adults who need daily personal care and hands-on support",
      "Adults with mobility limitations or fall-risk considerations",
      "Families looking for a long-term residential placement",
      "Adults who benefit from a calm, small-home environment",
    ],
  },
  notFit: {
    heading: "We may not be the right fit for",
    items: [
      "Individuals requiring skilled nursing care or complex medical procedures",
      "Individuals whose behavioral needs require a secured or specialized facility",
      "Care situations that fall outside the scope of Washington State AFH licensing",
    ],
  },
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What's included in the monthly cost?",
    answer:
      "Daily personal care, three home-cooked meals, snacks and beverages throughout the day, housekeeping, laundry, and linens are all included. There are no surprise add-ons for standard daily care — what we describe is what is covered.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Cost is assessed individually based on each resident's care needs — it is not a flat rate. We would rather have that conversation directly than quote a number that does not reflect your situation. Call us and we will walk through it honestly.",
  },
  {
    question: "Do you accept Medicaid?",
    answer:
      "[PLACEHOLDER — payment types (private pay, Medicaid waiver) pending owner confirmation. Do not publish until confirmed.]",
  },
  {
    question: "Can families visit anytime?",
    answer:
      "Yes. There is no visiting-hours policy at Lulu's. Families are welcome to visit, and we encourage ongoing involvement in care decisions.",
  },
  {
    question: "How are medications handled?",
    answer:
      "[PLACEHOLDER — medication management details (administration, storage, pharmacy coordination) pending owner confirmation.]",
  },
  {
    question: "Can you accommodate dietary needs?",
    answer:
      "Yes. Meals are cooked fresh daily and we accommodate dietary needs and preferences. Let us know what matters during your initial conversation.",
  },
  {
    question: "What should we bring when moving in?",
    answer:
      "[PLACEHOLDER — move-in list pending owner input. Typically includes clothing, toiletries, comfort items, medical records — confirm specifics before publishing.]",
  },
];
