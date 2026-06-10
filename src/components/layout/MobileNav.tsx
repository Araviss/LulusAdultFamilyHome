import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavLink } from "../../types";

interface Props {
  links: NavLink[];
}

export default function MobileNav({ links }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="relative z-[9999] md:hidden">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="p-2 border border-brand-black/20 rounded-md hover:border-brand-sage hover:text-brand-sage transition-colors duration-200"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div
          className="fixed top-20 left-0 right-0 bottom-0 z-[9998] bg-brand-white flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col px-6 gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="text-2xl font-semibold py-4 border-b border-brand-black/10 hover:text-brand-sage transition-colors duration-200"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="px-6 mt-auto pb-10">
            <a
              href="/contact"
              onClick={close}
              className="block w-full text-center bg-brand-sage text-brand-white font-semibold px-6 py-4 rounded-lg hover:bg-brand-terra transition-colors duration-200 text-lg"
            >
              Schedule a Tour
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
