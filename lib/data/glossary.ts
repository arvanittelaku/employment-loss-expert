export type GlossaryTerm = {
  term: string;
  /** Standalone first sentence for GEO / FAQ schema */
  summary: string;
  definition: string;
  fragmentId: string;
  link?: { href: string; label?: string };
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Basic Award (ET)",
    fragmentId: "basic-award-et",
    summary: "The basic award is a statutory unfair dismissal award based on age, length of service, and weekly pay.",
    definition:
      "It is calculated as age multiplied by years of service multiplied by weekly pay, subject to a weekly pay cap of £719. It is separate from the compensatory award and does not require proof of financial loss.",
    link: { href: "/practice-areas/employment-tribunal", label: "Employment tribunal practice area" },
  },
  {
    term: "Career Gap Analysis",
    fragmentId: "career-gap-analysis",
    summary:
      "Career gap analysis measures the earnings difference between an uninterrupted career path and actual earnings after a family-related career break.",
    definition:
      "It establishes what a party would have earned had they continued their career uninterrupted versus what they actually earned following a break for family responsibilities. Central to loss of career claims in financial remedy proceedings.",
    link: { href: "/practice-areas/family-law", label: "Family law practice area" },
  },
  {
    term: "Compensatory Award (ET)",
    fragmentId: "compensatory-award-et",
    summary:
      "The compensatory award is the main financial remedy for unfair dismissal, covering actual loss of earnings and related heads.",
    definition:
      "It covers immediate and future loss of earnings, pension loss, and loss of statutory rights. Currently capped at £118,223 or 52 weeks gross pay until 1 January 2027, when ERA 2025 removes the cap.",
    link: { href: "/era-2025", label: "ERA 2025 and uncapped awards" },
  },
  {
    term: "CPR Part 35",
    fragmentId: "cpr-part-35",
    summary: "CPR Part 35 governs expert evidence in civil proceedings, including personal injury claims.",
    definition:
      "Experts owe an overriding duty to the court, must provide objective opinions, and reports must comply with Practice Direction 35.",
    link: { href: "/qualifications", label: "Expert qualifications" },
  },
  {
    term: "Discount Rate (-0.25%)",
    fragmentId: "discount-rate-0-25",
    summary:
      "The discount rate is the prescribed real rate used to adjust Ogden multipliers in personal injury future loss claims.",
    definition:
      "Set at -0.25% under the Civil Liability Act 2018, it reflects assumed investment return on a lump sum. A lower rate increases future loss awards.",
    link: { href: "/how-loss-is-calculated", label: "How loss is calculated" },
  },
  {
    term: "Economic Disadvantage",
    fragmentId: "economic-disadvantage",
    summary:
      "Economic disadvantage quantifies long-term earnings loss following relationship breakdown, especially in Scottish financial remedy cases.",
    definition:
      "It is a statutory factor under the Family Law (Scotland) Act 1985 measuring the financial impact on a party's long-term earnings.",
    link: { href: "/practice-areas/family-law", label: "Family law practice area" },
  },
  {
    term: "Employment Rights Act 2025 (ERA 2025)",
    fragmentId: "employment-rights-act-2025-era-2025",
    summary:
      "ERA 2025 removes the unfair dismissal compensatory award cap from 1 January 2027 and reduces the qualifying period to six months.",
    definition:
      "It is the most significant change to UK employment law in over a decade for employment tribunal compensation and expert loss evidence.",
    link: { href: "/era-2025", label: "ERA 2025 guide" },
  },
  {
    term: "Equality Act 2010 Protected Characteristics",
    fragmentId: "equality-act-2010-protected-characteristics",
    summary:
      "Protected characteristics are the grounds on which discrimination claims may be brought under the Equality Act 2010.",
    definition:
      "They include age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, and sexual orientation. Discrimination claims carry uncapped compensation.",
    link: { href: "/case-types/discrimination-employment-loss", label: "Discrimination employment loss" },
  },
  {
    term: "FPR Part 25",
    fragmentId: "fpr-part-25",
    summary: "FPR Part 25 governs expert evidence in family proceedings in England and Wales.",
    definition:
      "Court permission may be required before instructing an expert. Experts owe an overriding duty to the court and must comply with FPR Part 25 practice directions.",
    link: { href: "/practice-areas/family-law", label: "Family law practice area" },
  },
  {
    term: "Future Loss of Earnings",
    fragmentId: "future-loss-of-earnings",
    summary:
      "Future loss of earnings compensates projected earnings lost from trial or settlement until recovery or end of working life.",
    definition:
      "In PI it is capitalised using Ogden Tables; in ET it is typically weekly net loss multiplied by weeks to find comparable employment.",
    link: { href: "/how-loss-is-calculated", label: "How loss is calculated" },
  },
  {
    term: "The Ikarian Reefer Duties",
    fragmentId: "the-ikarian-reefer-duties",
    summary:
      "Ikarian Reefer duties require expert witnesses to give independent, objective evidence to assist the court.",
    definition:
      "Established in National Justice Compania Naviera SA v Prudential Assurance Co Ltd [1993], experts must not omit material facts that detract from their conclusions.",
    link: { href: "/qualifications", label: "Expert qualifications" },
  },
  {
    term: "Injury to Feelings",
    fragmentId: "injury-to-feelings",
    summary:
      "Injury to feelings is non-financial compensation for distress in discrimination claims, assessed using Vento bands.",
    definition:
      "It is assessed by the tribunal separately from financial loss of earnings, which employment loss experts quantify.",
    link: { href: "/case-types/discrimination-employment-loss", label: "Discrimination employment loss" },
  },
  {
    term: "Labour Market Analysis",
    fragmentId: "labour-market-analysis",
    summary:
      "Labour market analysis assesses suitable jobs, salary levels, and employment availability within a claimant's capacity.",
    definition:
      "Employment consultants use sector data and functional limitations to establish residual earning capacity and mitigation.",
    link: { href: "/services#labour-market-analysis", label: "Labour market analysis service" },
  },
  {
    term: "Loss of Career",
    fragmentId: "loss-of-career",
    summary:
      "Loss of career is the financial impact of career interruption, often from family responsibilities during marriage.",
    definition:
      "It is quantified through career gap analysis in financial remedy proceedings and informs asset division or maintenance.",
    link: { href: "/case-types/divorce-loss-of-career", label: "Divorce and loss of career" },
  },
  {
    term: "Loss of Statutory Rights",
    fragmentId: "loss-of-statutory-rights",
    summary:
      "Loss of statutory rights is a conventional ET award for losing employment protections, typically £500.",
    definition:
      "It may need reconsideration under ERA 2025 given the shorter unfair dismissal qualifying period from January 2027.",
    link: { href: "/guides/et-schedule-of-loss-guide", label: "ET Schedule of Loss guide" },
  },
  {
    term: "Mitigation (Employment)",
    fragmentId: "mitigation-employment",
    summary:
      "Mitigation is the claimant's duty to take reasonable steps to reduce employment-related financial loss.",
    definition:
      "This includes seeking alternative work, retraining, or accepting comparable employment. Failure to mitigate may reduce compensatory awards.",
    link: { href: "/how-loss-is-calculated", label: "How loss is calculated" },
  },
  {
    term: "Multiplier/Multiplicand",
    fragmentId: "multiplier-multiplicand",
    summary:
      "Multiplier and multiplicand are the core PI method for capitalising future loss of earnings into a lump sum.",
    definition:
      "The multiplicand is annual net earnings loss; the multiplier from Ogden Tables gives present value of future loss.",
    link: { href: "/how-loss-is-calculated", label: "How loss is calculated" },
  },
  {
    term: "Ogden Tables (8th Edition)",
    fragmentId: "ogden-tables-8th-edition",
    summary:
      "Ogden Tables are actuarial tables used to capitalise future losses in UK personal injury claims.",
    definition:
      "The 8th Edition (2020) is current, includes disability reduction factors, and applies with the -0.25% discount rate.",
    link: { href: "/guides/ogden-tables-loss-of-earnings-guide", label: "Ogden Tables guide" },
  },
  {
    term: "Party-Appointed Expert (PAE)",
    fragmentId: "party-appointed-expert-pae",
    summary:
      "A party-appointed expert is instructed by one side only, unlike a single joint expert.",
    definition:
      "Each party may instruct their own employment loss expert, though the court may later direct a single joint expert.",
    link: { href: "/how-to-instruct", label: "How to instruct an expert" },
  },
  {
    term: "Past Loss of Earnings",
    fragmentId: "past-loss-of-earnings",
    summary:
      "Past loss of earnings covers net earnings lost from injury or dismissal up to trial or settlement.",
    definition:
      "It is calculated over the relevant period net of tax and National Insurance.",
    link: { href: "/how-loss-is-calculated", label: "How loss is calculated" },
  },
  {
    term: "Pension Loss",
    fragmentId: "pension-loss",
    summary:
      "Pension loss compensates lost pension benefits due to injury, dismissal, or career interruption.",
    definition:
      "Methods include contribution analysis for DC schemes and actuarial approaches for DB schemes; PI may use Ogden Tables H.",
    link: { href: "/services#pension-loss", label: "Pension loss calculations" },
  },
  {
    term: "Polkey Reduction",
    fragmentId: "polkey-reduction",
    summary:
      "A Polkey reduction lowers ET compensatory awards where dismissal would have occurred anyway despite procedural unfairness.",
    definition:
      "The tribunal applies a percentage reduction (Polkey v AE Dayton Services Ltd [1987]). Critical in uncapped ERA 2025 cases.",
    link: { href: "/practice-areas/employment-tribunal", label: "Employment tribunal practice area" },
  },
  {
    term: "Protective Award",
    fragmentId: "protective-award",
    summary:
      "A protective award compensates employees for failure to consult on collective redundancies.",
    definition:
      "It is up to 90 days' gross pay per employee, increasing to 180 days from April 2026 under ERA 2025.",
    link: { href: "/era-2025", label: "ERA 2025 guide" },
  },
  {
    term: "Residual Earning Capacity",
    fragmentId: "residual-earning-capacity",
    summary:
      "Residual earning capacity is what a claimant can realistically earn after injury or dismissal.",
    definition:
      "It considers medical limits, skills, and labour market conditions and drives the PI multiplicand and ET future loss.",
    link: { href: "/services#residual-earning-capacity", label: "Residual earning capacity service" },
  },
  {
    term: "Schedule of Loss",
    fragmentId: "schedule-of-loss",
    summary:
      "A Schedule of Loss sets out all financial heads of claim in employment tribunal proceedings.",
    definition:
      "It includes basic award, compensatory loss, pension loss, statutory rights, and injury to feelings in discrimination claims.",
    link: { href: "/guides/et-schedule-of-loss-guide", label: "ET Schedule of Loss guide" },
  },
  {
    term: "Single Joint Expert (SJE)",
    fragmentId: "single-joint-expert-sje",
    summary:
      "A single joint expert is one expert instructed jointly by all parties, common in family and some ET cases.",
    definition:
      "Costs are typically shared equally. The expert owes an overriding duty to the court under FPR Part 25 or CPR Part 35.",
    link: { href: "/how-to-instruct", label: "How to instruct an expert" },
  },
  {
    term: "Smith v Manchester Award",
    fragmentId: "smith-v-manchester-award",
    summary:
      "A Smith v Manchester award is a lump sum for labour market handicap when future PI loss cannot be precisely calculated.",
    definition:
      "It is typically up to two years' net earnings for claimants with established careers at risk on the open market.",
    link: { href: "/guides/smith-v-manchester-guide", label: "Smith v Manchester guide" },
  },
  {
    term: "Vento Bands",
    fragmentId: "vento-bands",
    summary:
      "Vento bands are guideline ranges for injury to feelings awards in discrimination claims.",
    definition:
      "2025 figures: lower £1,100 to £11,200; middle £11,200 to £33,700; upper £33,700 to £56,200. Assessed by the tribunal, not the financial expert.",
    link: { href: "/case-types/discrimination-employment-loss", label: "Discrimination employment loss" },
  },
  {
    term: "Vocational Rehabilitation",
    fragmentId: "vocational-rehabilitation",
    summary:
      "Vocational rehabilitation supports return to work after injury or dismissal through retraining and employability planning.",
    definition:
      "Vocational experts assess retraining needs, timescales, and residual earning capacity for expert reports.",
    link: { href: "/services#residual-earning-capacity", label: "Residual earning capacity service" },
  },
  {
    term: "Whistleblowing (Protected Disclosure)",
    fragmentId: "whistleblowing-protected-disclosure",
    summary:
      "Whistleblowing protects workers who make qualifying disclosures from detriment and uncapped financial loss claims.",
    definition:
      "From 6 April 2026, sexual harassment disclosures are qualifying disclosures under ERA 2025.",
    link: { href: "/case-types/whistleblowing-detriment", label: "Whistleblowing detriment" },
  },
  {
    term: "Wrongful Dismissal",
    fragmentId: "wrongful-dismissal",
    summary:
      "Wrongful dismissal is a breach of contract claim, usually for failure to give proper notice.",
    definition:
      "Damages are typically limited to the notice period but may include significant LTIP or bonus losses for executives.",
    link: { href: "/case-types/wrongful-dismissal", label: "Wrongful dismissal case type" },
  },
  {
    term: "Zero-Hours Contract (ERA 2025 changes)",
    fragmentId: "zero-hours-contract-era-2025-changes",
    summary:
      "ERA 2025 expands rights for zero-hours workers, affecting earnings and loss calculations in ET claims.",
    definition:
      "Changes include guaranteed hours and compensation for cancelled shifts, relevant to baseline earnings evidence.",
    link: { href: "/era-2025", label: "ERA 2025 guide" },
  },
];
