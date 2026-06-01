"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { NavDropdown as NavDropdownType } from "@/lib/navigation";

type NavDropdownProps = {
  item: NavDropdownType;
};

export function NavDropdown({ item }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative flex items-center" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      <Link
        href={item.href}
        className={`flex min-h-11 items-center rounded-l px-2 py-2 text-sm transition-colors hover:bg-section-alt ${
          item.highlight ? "font-semibold text-highlight" : "text-body hover:text-primary"
        }`}
      >
        {item.label}
      </Link>
      <button
        type="button"
        className={`flex min-h-11 items-center rounded-r px-1 py-2 transition-colors hover:bg-section-alt ${
          item.highlight ? "text-highlight" : "text-body"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${item.label} menu`}
        onClick={() => setOpen(!open)}
      >
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute left-0 top-full z-50 mt-1 max-h-[70vh] min-w-[260px] overflow-y-auto rounded-lg border border-border bg-white py-2 shadow-lg"
          role="menu"
        >
          {item.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-2.5 text-sm transition-colors hover:bg-section-alt ${
                link.highlight ? "font-semibold text-highlight" : "text-body hover:text-primary"
              }`}
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
