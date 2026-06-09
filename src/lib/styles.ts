export const buttonVariants = {
  primary:
    "inline-flex items-center justify-center bg-brand-sage text-brand-cream font-semibold px-6 py-3 rounded-lg border-2 border-brand-sage hover:bg-brand-terra hover:border-brand-terra transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage",
  secondary:
    "inline-flex items-center justify-center bg-transparent text-brand-brown font-semibold px-6 py-3 rounded-lg border-2 border-brand-brown/25 hover:border-brand-sage hover:text-brand-sage transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage",
} as const;

export const sectionVariants = {
  default: "py-20 md:py-28 px-6 max-w-6xl mx-auto",
  full: "py-20 md:py-28 px-6",
  tight: "py-12 md:py-16 px-6 max-w-6xl mx-auto",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
export type SectionVariant = keyof typeof sectionVariants;
