"use client";

import Link from "next/link";
import { useState } from "react";
import { desktopNav, mobileNavGroups, isDropdown } from "@/lib/navigation";
import { NavDropdown } from "./NavDropdown";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold text-primary sm:text-xl"
          onClick={() => setOpen(false)}
        >
          EmploymentLossExpert
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
          {desktopNav.map((item) =>
            isDropdown(item) ? (
              <NavDropdown key={item.label} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`flex min-h-11 items-center rounded px-2 py-2 text-sm transition-colors hover:bg-section-alt ${
                  item.highlight
                    ? "font-semibold text-highlight"
                    : "text-body hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden min-h-11 items-center rounded bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary sm:inline-flex"
          >
            Contact Us
          </Link>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded border border-border p-2 text-primary lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-white lg:hidden">
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-4">
            <Link
              href="/"
              className="mb-4 flex min-h-11 items-center rounded px-3 py-2 text-sm font-medium text-body hover:bg-section-alt"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            {mobileNavGroups.map((group) => (
              <div key={group.label} className="mb-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  {group.label}
                </p>
                <ul className="space-y-1">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`flex min-h-11 items-center rounded px-3 py-2 text-sm ${
                          "highlight" in link && link.highlight
                            ? "font-semibold text-highlight"
                            : "text-body hover:bg-section-alt"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-2 flex min-h-11 w-full items-center justify-center rounded bg-accent px-4 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
