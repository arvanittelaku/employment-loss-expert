import { services } from "./data/services";
import { caseTypes } from "./data/case-types";

export const serviceNavLinks = services.map((s) => ({
  label: s.title,
  href: `/services#${s.id}`,
}));

export const practiceAreaNavLinks = [
  { label: "Personal Injury", href: "/practice-areas/personal-injury" },
  { label: "Employment Tribunal", href: "/practice-areas/employment-tribunal" },
  { label: "Family Law", href: "/practice-areas/family-law" },
  { label: "All Practice Areas", href: "/practice-areas" },
];

export const caseTypeNavLinks = caseTypes.map((c) => ({
  label: c.title,
  href: `/case-types/${c.slug}`,
}));

export const resourcesNavLinks = [
  { label: "Solicitor Guides", href: "/guides" },
  { label: "How to Instruct", href: "/how-to-instruct" },
  { label: "Qualifications", href: "/qualifications" },
];

export type NavLink = { label: string; href: string; highlight?: boolean };

export type NavDropdown = {
  type: "dropdown";
  label: string;
  href: string;
  links: NavLink[];
  highlight?: boolean;
};

export type NavItem = NavLink | NavDropdown;

export function isDropdown(item: NavItem): item is NavDropdown {
  return "type" in item && item.type === "dropdown";
}

export const desktopNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    type: "dropdown",
    label: "Services",
    href: "/services",
    links: [{ label: "All Services", href: "/services" }, ...serviceNavLinks],
  },
  { label: "How Loss Is Calculated", href: "/how-loss-is-calculated" },
  {
    type: "dropdown",
    label: "Practice Areas",
    href: "/practice-areas",
    links: practiceAreaNavLinks,
  },
  { label: "ERA 2025", href: "/era-2025", highlight: true },
  {
    type: "dropdown",
    label: "Case Types",
    href: "/case-types",
    links: [{ label: "All Case Types", href: "/case-types" }, ...caseTypeNavLinks],
  },
  {
    type: "dropdown",
    label: "Resources",
    href: "/guides",
    links: resourcesNavLinks,
  },
];

export const mobileNavGroups = [
  {
    label: "Services",
    links: [{ label: "All Services", href: "/services" }, ...serviceNavLinks],
  },
  {
    label: "Practice Areas",
    links: practiceAreaNavLinks,
  },
  {
    label: "ERA 2025",
    links: [{ label: "ERA 2025 Guide", href: "/era-2025", highlight: true }],
  },
  {
    label: "Case Types",
    links: [{ label: "All Case Types", href: "/case-types" }, ...caseTypeNavLinks],
  },
  {
    label: "Resources",
    links: [
      ...resourcesNavLinks,
      { label: "Glossary", href: "/glossary" },
      { label: "How Loss Is Calculated", href: "/how-loss-is-calculated" },
    ],
  },
  {
    label: "More",
    links: [
      { label: "What Is an Employment Expert?", href: "/what-is-an-employment-loss-expert" },
    ],
  },
];

export const footerColumns = [
  {
    title: "Services",
    links: serviceNavLinks,
  },
  {
    title: "Practice Areas",
    links: [
      { label: "Personal Injury", href: "/practice-areas/personal-injury" },
      { label: "Employment Tribunal", href: "/practice-areas/employment-tribunal" },
      { label: "Family Law", href: "/practice-areas/family-law" },
      { label: "ERA 2025 Guide", href: "/era-2025" },
      { label: "All Case Types", href: "/case-types" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Solicitor Guides", href: "/guides" },
      { label: "Glossary", href: "/glossary" },
      { label: "How Loss Is Calculated", href: "/how-loss-is-calculated" },
      {
        label: "What Is an Employment Expert?",
        href: "/what-is-an-employment-loss-expert",
      },
      { label: "How to Instruct", href: "/how-to-instruct" },
      { label: "Qualifications", href: "/qualifications" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "What Is an Employment Expert?", href: "/what-is-an-employment-loss-expert" },
      { label: "How to Instruct", href: "/how-to-instruct" },
    ],
  },
];
