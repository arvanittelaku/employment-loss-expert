/**
 * Internal links per SEO Architecture §3 (hub rules).
 * Used by RelatedLinks on case types, practice areas, and guides.
 */

export type RelatedLink = { href: string; label: string };

const universal = {
  howLoss: { href: "/how-loss-is-calculated", label: "How employment loss is calculated in UK proceedings" },
  howToInstruct: { href: "/how-to-instruct", label: "How to instruct an employment loss expert witness" },
  instruct: { href: "/how-to-instruct", label: "How to instruct an employment loss expert witness" },
  qualifications: { href: "/qualifications", label: "Expert witness qualifications and CPR Part 35" },
  fees: { href: "/fees", label: "Employment loss expert witness fees UK" },
  contact: { href: "/contact", label: "Instruct an employment loss expert witness" },
  glossary: { href: "/glossary", label: "Employment loss glossary" },
  era2025: { href: "/era-2025", label: "ERA 2025 and uncapped ET awards" },
  guides: { href: "/guides", label: "Solicitor guides" },
  faq: { href: "/faq", label: "Employment loss expert witness FAQ" },
};

const caseTypeLinks: Record<string, RelatedLink[]> = {
  "personal-injury-loss-of-earnings": [
    { href: "/practice-areas/personal-injury", label: "Personal injury employment loss experts" },
    { href: "/services#loss-of-earnings-pi", label: "Loss of earnings reports (PI)" },
    { href: "/guides/ogden-tables-loss-of-earnings-guide", label: "Ogden Tables and loss of earnings guide" },
    { href: "/guides/smith-v-manchester-guide", label: "Smith v Manchester awards guide" },
    { href: "/glossary#ogden-tables-8th-edition", label: "Ogden Tables (8th Edition)" },
    { href: "/glossary#smith-v-manchester-award", label: "Smith v Manchester award" },
    universal.howLoss,
    universal.instruct,
    universal.contact,
  ],
  "clinical-negligence-employment-loss": [
    { href: "/practice-areas/personal-injury", label: "Personal injury practice area" },
    { href: "/case-types/personal-injury-loss-of-earnings", label: "Personal injury loss of earnings" },
    { href: "/guides/ogden-tables-loss-of-earnings-guide", label: "Ogden Tables guide" },
    { href: "/glossary#ogden-tables-8th-edition", label: "Ogden Tables (8th Edition)" },
    { href: "/glossary#residual-earning-capacity", label: "Residual earning capacity" },
    universal.howLoss,
    universal.instruct,
    universal.contact,
  ],
  "unfair-dismissal-et": [
    { href: "/practice-areas/employment-tribunal", label: "Employment tribunal loss experts" },
    { href: "/era-2025", label: "ERA 2025 uncapped unfair dismissal awards" },
    { href: "/guides/era-2025-et-loss-guide", label: "ERA 2025 and ET loss calculations guide" },
    { href: "/guides/et-schedule-of-loss-guide", label: "ET Schedule of Loss guide" },
    { href: "/glossary#polkey-reduction", label: "Polkey reduction" },
    { href: "/glossary#schedule-of-loss", label: "Schedule of Loss" },
    universal.howLoss,
    universal.instruct,
    universal.contact,
  ],
  "discrimination-employment-loss": [
    { href: "/practice-areas/employment-tribunal", label: "Employment tribunal practice area" },
    { href: "/guides/discrimination-loss-of-earnings", label: "Loss of earnings in discrimination claims" },
    { href: "/services#discrimination-reports", label: "Discrimination compensation reports" },
    { href: "/glossary#vento-bands", label: "Vento bands (2025)" },
    { href: "/glossary#injury-to-feelings", label: "Injury to feelings" },
    universal.howLoss,
    universal.instruct,
    universal.contact,
  ],
  "whistleblowing-detriment": [
    { href: "/practice-areas/employment-tribunal", label: "Employment tribunal practice area" },
    { href: "/era-2025", label: "ERA 2025 whistleblowing changes" },
    { href: "/guides/et-schedule-of-loss-guide", label: "ET Schedule of Loss guide" },
    { href: "/glossary#whistleblowing-protected-disclosure", label: "Whistleblowing (protected disclosure)" },
    { href: "/glossary#protective-award", label: "Protective award" },
    universal.howLoss,
    universal.instruct,
    universal.contact,
  ],
  "wrongful-dismissal": [
    { href: "/practice-areas/employment-tribunal", label: "Employment tribunal practice area" },
    { href: "/services#et-schedule-of-loss", label: "ET Schedule of Loss preparation" },
    { href: "/case-types/unfair-dismissal-et", label: "Unfair dismissal ET loss" },
    { href: "/glossary#wrongful-dismissal", label: "Wrongful dismissal" },
    { href: "/glossary#compensatory-award-et", label: "Compensatory award (ET)" },
    universal.howLoss,
    universal.instruct,
    universal.contact,
  ],
  "divorce-loss-of-career": [
    { href: "/practice-areas/family-law", label: "Family law employment loss experts" },
    { href: "/guides/family-law-employment-reports", label: "Employment reports in family law (FPR Part 25)" },
    { href: "/services#loss-of-career-matrimonial", label: "Loss of career (matrimonial) reports" },
    { href: "/glossary#loss-of-career", label: "Loss of career" },
    { href: "/glossary#career-gap-analysis", label: "Career gap analysis" },
    universal.howLoss,
    universal.instruct,
    universal.contact,
  ],
  "fatal-accident-dependency": [
    { href: "/practice-areas/personal-injury", label: "Personal injury practice area" },
    { href: "/services#loss-of-earnings-pi", label: "Loss of earnings reports" },
    { href: "/guides/ogden-tables-loss-of-earnings-guide", label: "Ogden Tables guide" },
    { href: "/glossary#future-loss-of-earnings", label: "Future loss of earnings" },
    { href: "/glossary#ogden-tables-8th-edition", label: "Ogden Tables (8th Edition)" },
    universal.howLoss,
    universal.instruct,
    universal.contact,
  ],
  "educational-negligence-career-loss": [
    { href: "/practice-areas/personal-injury", label: "Personal injury practice area" },
    { href: "/guides/ogden-tables-loss-of-earnings-guide", label: "Ogden Tables guide" },
    { href: "/glossary#future-loss-of-earnings", label: "Future loss of earnings" },
    { href: "/glossary#loss-of-career", label: "Loss of career" },
    universal.howLoss,
    universal.instruct,
    universal.contact,
  ],
  "redundancy-settlement-disputes": [
    { href: "/practice-areas/employment-tribunal", label: "Employment tribunal practice area" },
    { href: "/era-2025", label: "ERA 2025 settlement valuation" },
    { href: "/case-types/unfair-dismissal-et", label: "Unfair dismissal ET loss" },
    { href: "/glossary#compensatory-award-et", label: "Compensatory award (ET)" },
    { href: "/glossary#basic-award-et", label: "Basic award (ET)" },
    universal.howLoss,
    universal.instruct,
    universal.contact,
  ],
};

const practiceAreaLinks: Record<string, RelatedLink[]> = {
  "personal-injury": [
    { href: "/case-types/personal-injury-loss-of-earnings", label: "Personal injury loss of earnings" },
    { href: "/case-types/clinical-negligence-employment-loss", label: "Clinical negligence employment loss" },
    { href: "/case-types/fatal-accident-dependency", label: "Fatal accident dependency" },
    { href: "/services#loss-of-earnings-pi", label: "Loss of earnings reports (PI)" },
    { href: "/guides/ogden-tables-loss-of-earnings-guide", label: "Ogden Tables guide" },
    { href: "/guides/smith-v-manchester-guide", label: "Smith v Manchester guide" },
    universal.howLoss,
    universal.qualifications,
    universal.contact,
  ],
  "employment-tribunal": [
    { href: "/case-types/unfair-dismissal-et", label: "Unfair dismissal ET loss" },
    { href: "/case-types/discrimination-employment-loss", label: "Discrimination employment loss" },
    { href: "/case-types/whistleblowing-detriment", label: "Whistleblowing detriment" },
    { href: "/era-2025", label: "ERA 2025 guide" },
    { href: "/guides/et-schedule-of-loss-guide", label: "ET Schedule of Loss guide" },
    { href: "/services#et-schedule-of-loss", label: "ET Schedule of Loss preparation" },
    universal.howLoss,
    universal.qualifications,
    universal.contact,
  ],
  "family-law": [
    { href: "/case-types/divorce-loss-of-career", label: "Divorce and loss of career" },
    { href: "/case-types/educational-negligence-career-loss", label: "Educational negligence career loss" },
    { href: "/case-types/personal-injury-loss-of-earnings", label: "Loss of earnings (earning capacity in remedy)" },
    { href: "/guides/family-law-employment-reports", label: "Family law employment reports guide" },
    { href: "/services#loss-of-career-matrimonial", label: "Loss of career (matrimonial) service" },
    { href: "/glossary#fpr-part-25", label: "FPR Part 25" },
    universal.howLoss,
    universal.qualifications,
    universal.contact,
  ],
};

const guideLinks: Record<string, RelatedLink[]> = {
  "ogden-tables-loss-of-earnings-guide": [
    universal.guides,
    { href: "/practice-areas/personal-injury", label: "Personal injury practice area" },
    { href: "/case-types/personal-injury-loss-of-earnings", label: "PI loss of earnings case type" },
    universal.howLoss,
    universal.era2025,
    universal.instruct,
    universal.contact,
  ],
  "era-2025-et-loss-guide": [
    universal.guides,
    universal.era2025,
    { href: "/practice-areas/employment-tribunal", label: "Employment tribunal practice area" },
    { href: "/case-types/unfair-dismissal-et", label: "Unfair dismissal ET" },
    universal.howLoss,
    universal.instruct,
    universal.contact,
  ],
  "smith-v-manchester-guide": [
    universal.guides,
    { href: "/case-types/personal-injury-loss-of-earnings", label: "Personal injury loss of earnings" },
    { href: "/services#smith-v-manchester", label: "Smith v Manchester reports" },
    universal.howLoss,
    universal.instruct,
    universal.contact,
  ],
  "et-schedule-of-loss-guide": [
    universal.guides,
    { href: "/practice-areas/employment-tribunal", label: "Employment tribunal practice area" },
    { href: "/case-types/unfair-dismissal-et", label: "Unfair dismissal ET" },
    universal.era2025,
    universal.howLoss,
    universal.instruct,
    universal.contact,
  ],
  "discrimination-loss-of-earnings": [
    universal.guides,
    { href: "/case-types/discrimination-employment-loss", label: "Discrimination employment loss" },
    { href: "/practice-areas/employment-tribunal", label: "Employment tribunal practice area" },
    universal.howLoss,
    universal.instruct,
    universal.contact,
  ],
  "family-law-employment-reports": [
    universal.guides,
    { href: "/practice-areas/family-law", label: "Family law practice area" },
    { href: "/case-types/divorce-loss-of-career", label: "Divorce and loss of career" },
    universal.howLoss,
    universal.instruct,
    universal.contact,
  ],
};

export const era2025RelatedLinks: RelatedLink[] = [
  { href: "/practice-areas/employment-tribunal", label: "Employment tribunal loss expert witnesses" },
  { href: "/how-loss-is-calculated", label: "How employment loss is calculated (ET method)" },
  { href: "/guides/era-2025-et-loss-guide", label: "ERA 2025 and ET loss calculations guide" },
  { href: "/case-types/unfair-dismissal-et", label: "Unfair dismissal ET loss expert" },
  { href: "/glossary#polkey-reduction", label: "Polkey reduction" },
  { href: "/glossary#employment-rights-act-2025-era-2025", label: "Employment Rights Act 2025 (ERA 2025)" },
  universal.contact,
];

export const howLossCalculatedRelatedLinks: RelatedLink[] = [
  { href: "/practice-areas/personal-injury", label: "Personal injury practice area" },
  { href: "/practice-areas/employment-tribunal", label: "Employment tribunal practice area" },
  { href: "/practice-areas/family-law", label: "Family law practice area" },
  { href: "/case-types/personal-injury-loss-of-earnings", label: "Personal injury loss of earnings" },
  { href: "/case-types/unfair-dismissal-et", label: "Unfair dismissal ET" },
  { href: "/case-types/divorce-loss-of-career", label: "Divorce and loss of career" },
  { href: "/guides/ogden-tables-loss-of-earnings-guide", label: "Ogden Tables loss of earnings guide" },
  { href: "/guides/smith-v-manchester-guide", label: "Smith v Manchester awards guide" },
  { href: "/guides/era-2025-et-loss-guide", label: "ERA 2025 ET loss calculations guide" },
  { href: "/guides/et-schedule-of-loss-guide", label: "ET Schedule of Loss guide" },
  { href: "/glossary#multiplier-multiplicand", label: "Multiplier and multiplicand" },
  { href: "/glossary#ogden-tables-8th-edition", label: "Ogden Tables (8th Edition)" },
  { href: "/glossary#discount-rate-0-25", label: "Discount rate (-0.25%)" },
  { href: "/glossary#schedule-of-loss", label: "Schedule of Loss" },
  { href: "/glossary#polkey-reduction", label: "Polkey reduction" },
  { href: "/glossary#pension-loss", label: "Pension loss" },
  { href: "/glossary#mitigation-employment", label: "Mitigation (employment)" },
  { href: "/glossary#smith-v-manchester-award", label: "Smith v Manchester award" },
  universal.glossary,
  universal.contact,
];

export const practiceAreasHubLinks: RelatedLink[] = [
  { href: "/practice-areas/personal-injury", label: "Personal injury employment loss experts" },
  { href: "/practice-areas/employment-tribunal", label: "Employment tribunal loss experts" },
  { href: "/practice-areas/family-law", label: "Family law employment loss experts" },
  { href: "/case-types", label: "Case types requiring expert evidence" },
  universal.howLoss,
  universal.era2025,
  universal.guides,
  universal.qualifications,
  universal.contact,
];

export const caseTypesHubLinks: RelatedLink[] = [
  { href: "/case-types/personal-injury-loss-of-earnings", label: "Personal injury loss of earnings" },
  { href: "/case-types/unfair-dismissal-et", label: "Unfair dismissal ET" },
  { href: "/case-types/discrimination-employment-loss", label: "Discrimination employment loss" },
  { href: "/case-types/divorce-loss-of-career", label: "Divorce and loss of career" },
  universal.howLoss,
  universal.era2025,
  universal.guides,
  universal.instruct,
  universal.contact,
];

export const servicesHubLinks: RelatedLink[] = [
  { href: "/services#loss-of-earnings-pi", label: "Loss of earnings reports (PI)" },
  { href: "/services#et-schedule-of-loss", label: "ET Schedule of Loss preparation" },
  { href: "/services#smith-v-manchester", label: "Smith v Manchester reports" },
  { href: "/services#loss-of-career-matrimonial", label: "Loss of career (matrimonial)" },
  { href: "/practice-areas/personal-injury", label: "Personal injury practice area" },
  { href: "/practice-areas/employment-tribunal", label: "Employment tribunal practice area" },
  universal.howLoss,
  universal.guides,
  universal.fees,
  universal.instruct,
  universal.contact,
];

export const guidesHubLinks: RelatedLink[] = [
  { href: "/guides/ogden-tables-loss-of-earnings-guide", label: "Ogden Tables loss of earnings guide" },
  { href: "/guides/era-2025-et-loss-guide", label: "ERA 2025 ET loss guide" },
  { href: "/guides/et-schedule-of-loss-guide", label: "ET Schedule of Loss guide" },
  { href: "/guides/smith-v-manchester-guide", label: "Smith v Manchester guide" },
  universal.howLoss,
  universal.era2025,
  universal.glossary,
  universal.instruct,
  universal.contact,
];

export const glossaryHubLinks: RelatedLink[] = [
  universal.howLoss,
  universal.era2025,
  universal.guides,
  universal.faq,
  universal.contact,
];

export const faqHubLinks: RelatedLink[] = [
  universal.howLoss,
  universal.era2025,
  universal.guides,
  universal.glossary,
  universal.fees,
  universal.instruct,
  universal.qualifications,
  universal.contact,
];

export const feesHubLinks: RelatedLink[] = [
  universal.instruct,
  universal.qualifications,
  { href: "/services", label: "Employment loss expert witness services" },
  universal.howLoss,
  universal.faq,
  universal.contact,
];

export const howToInstructHubLinks: RelatedLink[] = [
  universal.qualifications,
  universal.fees,
  { href: "/practice-areas/personal-injury", label: "Personal injury practice area" },
  { href: "/practice-areas/employment-tribunal", label: "Employment tribunal practice area" },
  { href: "/practice-areas/family-law", label: "Family law practice area" },
  universal.howLoss,
  universal.guides,
  universal.contact,
];

export const qualificationsHubLinks: RelatedLink[] = [
  { href: "/glossary#cpr-part-35", label: "CPR Part 35" },
  { href: "/glossary#the-ikarian-reefer-duties", label: "Ikarian Reefer duties" },
  { href: "/glossary#fpr-part-25", label: "FPR Part 25" },
  universal.howToInstruct,
  universal.fees,
  universal.howLoss,
  universal.contact,
];

export const whatIsExpertLinks: RelatedLink[] = [
  { href: "/", label: "Employment loss expert witness UK homepage" },
  universal.howLoss,
  universal.era2025,
  { href: "/practice-areas/personal-injury", label: "Personal injury practice area" },
  { href: "/practice-areas/employment-tribunal", label: "Employment tribunal practice area" },
  { href: "/practice-areas/family-law", label: "Family law practice area" },
  universal.qualifications,
  universal.instruct,
  universal.contact,
];

export function getCaseTypeRelatedLinks(slug: string): RelatedLink[] {
  return caseTypeLinks[slug] ?? [universal.howLoss, universal.contact];
}

export function getPracticeAreaRelatedLinks(slug: string): RelatedLink[] {
  return practiceAreaLinks[slug] ?? [universal.howLoss, universal.contact];
}

export function getGuideRelatedLinks(slug: string): RelatedLink[] {
  return guideLinks[slug] ?? [universal.guides, universal.howLoss, universal.contact];
}
