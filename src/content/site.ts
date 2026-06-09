import type { NavLink } from "../types";

export const SITE_NAME = "Lulu's Care Adult Family Home";
export const SITE_TAGLINE = "A warm home in Everett, WA";
export const SITE_DESCRIPTION =
  "Lulu's Care Adult Family Home in Everett, WA provides personalized, compassionate care for elderly adults, memory care, and adults with disabilities in a warm, home-like setting.";
export const SITE_URL = "https://luluscare.com";

export const PHONE = "206-372-1541";
export const EMAIL = "tizitasiyoum@gmail.com";
export const ADDRESS = {
  city: "Everett",
  state: "WA",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
