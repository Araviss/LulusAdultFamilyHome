export interface NavLink {
  label: string;
  href: string;
}

export interface CareService {
  id: string;
  title: string;
  summary: string;
  icon: string;
}

export interface TrustSignal {
  value: string;
  label: string;
  icon: string;
}

export interface CarePillar {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  relationship: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  isPlaceholder: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  inquiryType: string;
  message: string;
  honeypot?: string;
}
