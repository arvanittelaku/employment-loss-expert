export type ServiceFaq = { question: string; answer: string };

export type Service = {
  id: string;
  title: string;
  description: string;
  methodology: { step: string; detail: string }[];
  faqs: ServiceFaq[];
  caseTypeLink?: string;
};

export const services: Service[] = [
  {
    id: "loss-of-earnings-pi",
    title: "Loss of Earnings Reports (PI)",
    description:
      "Comprehensive loss of earnings reports for personal injury and clinical negligence claims, establishing pre-accident earnings baselines and calculating past and future loss using Ogden Tables methodology.",
    methodology: [
      { step: "Earnings baseline", detail: "Establish pre-accident net earnings from tax records and employer evidence" },
      { step: "Residual capacity", detail: "Assess post-injury earning capacity with vocational input" },
      { step: "Multiplicand", detail: "Calculate annual net earnings loss" },
      { step: "Ogden multiplier", detail: "Apply Ogden Tables 8th Edition with discount rate -0.25%" },
      { step: "Past loss", detail: "Net loss from injury to trial or settlement" },
      { step: "Future loss", detail: "Capitalised lump sum or PPO recommendation" },
    ],
    faqs: [
      {
        question: "When is a loss of earnings report needed in a PI claim?",
        answer:
          "A loss of earnings report is needed whenever loss of earnings is a significant head of damage, including self-employed claimants, business owners, unusual earnings histories, career changes due to injury, or where Smith v Manchester is in issue.",
      },
      {
        question: "What documents are required for a PI loss of earnings report?",
        answer:
          "Typically 5 years of tax returns and P60s, employment contracts, employer references, medical evidence on functional capacity, and evidence of post-injury employment attempts or residual earning capacity.",
      },
      {
        question: "How are Ogden Tables used in loss of earnings reports?",
        answer:
          "The expert applies Ogden Tables 8th Edition multipliers to the annual net earnings loss (multiplicand), adjusted for age, sex, employment status, disability status, and the -0.25% discount rate under the Civil Liability Act 2018.",
      },
    ],
    caseTypeLink: "/case-types/personal-injury-loss-of-earnings",
  },
  {
    id: "residual-earning-capacity",
    title: "Residual Earning Capacity Assessment",
    description:
      "Expert assessment of what a claimant can realistically earn post-injury or post-dismissal, considering medical limitations, transferable skills, and labour market conditions.",
    methodology: [
      { step: "Functional review", detail: "Analyse medical evidence on work capacity" },
      { step: "Skills mapping", detail: "Identify transferable skills and retraining needs" },
      { step: "Labour market", detail: "Research suitable roles and salary ranges" },
      { step: "Earnings projection", detail: "Project realistic post-injury earnings trajectory" },
    ],
    faqs: [
      {
        question: "What is residual earning capacity?",
        answer:
          "Residual earning capacity is what the claimant can realistically earn post-injury or post-dismissal, considering medical limitations, transferable skills, and labour market conditions. It forms the basis of the multiplicand in PI claims.",
      },
      {
        question: "Who provides residual earning capacity evidence?",
        answer:
          "Typically an employment consultant or vocational rehabilitation expert with labour market expertise. In complex cases, they work alongside a forensic accountant who quantifies the financial loss.",
      },
    ],
    caseTypeLink: "/case-types/personal-injury-loss-of-earnings",
  },
  {
    id: "labour-market-analysis",
    title: "Labour Market Analysis",
    description:
      "Detailed analysis of employment availability, salary levels, and career progression in the claimant's sector and alternative sectors.",
    methodology: [
      { step: "Sector research", detail: "ONS and industry salary data analysis" },
      { step: "Role matching", detail: "Identify comparable positions within capacity" },
      { step: "Geographic scope", detail: "Assess local and national labour market" },
      { step: "Report", detail: "Court-admissible labour market evidence" },
    ],
    faqs: [
      {
        question: "What does a labour market analysis report include?",
        answer:
          "A labour market analysis identifies suitable roles within the claimant's functional capacity, salary ranges from ONS and industry data, geographic availability of work, and realistic career progression in alternative sectors.",
      },
      {
        question: "When is labour market analysis essential?",
        answer:
          "It is essential where residual earning capacity is disputed, the claimant must change career due to injury, or Smith v Manchester handicap on the open labour market is in issue.",
      },
    ],
  },
  {
    id: "smith-v-manchester",
    title: "Smith v Manchester Reports",
    description:
      "Expert reports supporting Smith v Manchester awards where claimants face handicap on the open labour market following injury.",
    methodology: [
      { step: "Career assessment", detail: "Establish pre-injury career trajectory" },
      { step: "Risk analysis", detail: "Assess open market employment risk" },
      { step: "Quantum", detail: "Typically up to 2 years net earnings lump sum" },
      { step: "Justification", detail: "Explain why multiplier method is inappropriate" },
    ],
    faqs: [
      {
        question: "When is a Smith v Manchester award appropriate?",
        answer:
          "Where a claimant has an established career and faces risk on the open labour market post-injury, but future loss cannot be precisely calculated using the multiplier/multiplicand method. Typically awarded as up to 2 years' net earnings.",
      },
      {
        question: "What is the difference between Smith v Manchester and the multiplier method?",
        answer:
          "The multiplier method provides actuarially precise capitalisation of future loss. Smith v Manchester is a lump sum fallback where precision is impossible due to uncertain prognosis or fluctuating earning capacity.",
      },
    ],
    caseTypeLink: "/guides/smith-v-manchester-guide",
  },
  {
    id: "pension-loss",
    title: "Pension Loss Calculations",
    description:
      "Calculation of pension loss in PI, ET, and matrimonial proceedings using Ogden Tables H and contribution or actuarial methods.",
    methodology: [
      { step: "Scheme review", detail: "DC or DB pension scheme analysis" },
      { step: "Contribution loss", detail: "Calculate lost employer and employee contributions" },
      { step: "Capitalisation", detail: "Ogden Tables H for future pension loss" },
      { step: "Tax adjustment", detail: "Net of tax pension loss figures" },
    ],
    faqs: [
      {
        question: "How is pension loss calculated in employment cases?",
        answer:
          "For defined contribution schemes, lost contributions are calculated. For defined benefit schemes, actuarial methods apply. In PI, Ogden Tables H capitalise future pension loss into a lump sum.",
      },
      {
        question: "Is pension loss recoverable in ET claims?",
        answer:
          "Yes. Pension loss is a recognised head of compensatory award in unfair dismissal and discrimination claims, calculated as weekly pension loss multiplied by the relevant period.",
      },
    ],
  },
  {
    id: "et-schedule-of-loss",
    title: "ET Schedule of Loss Preparation",
    description:
      "Preparation and review of Employment Tribunal Schedules of Loss for complex and high-value cases, including ERA 2025 uncapped methodology.",
    methodology: [
      { step: "Basic award", detail: "Age x service x weekly pay calculation" },
      { step: "Immediate loss", detail: "Net weekly loss from dismissal to new employment" },
      { step: "Future loss", detail: "Weeks to find comparable employment" },
      { step: "Pension and rights", detail: "Pension loss and statutory rights head" },
      { step: "Polkey modelling", detail: "Financial impact of percentage reductions" },
    ],
    faqs: [
      {
        question: "What is an ET Schedule of Loss?",
        answer:
          "A Schedule of Loss sets out all financial heads of claim in an ET case: basic award, immediate and future loss of earnings, pension loss, loss of statutory rights, and injury to feelings in discrimination claims.",
      },
      {
        question: "How does ERA 2025 affect Schedule of Loss preparation?",
        answer:
          "From 1 January 2027, unfair dismissal compensation is uncapped. Schedules must quantify actual financial loss with the same rigour as High Court litigation, making expert-prepared Schedules essential in significant cases.",
      },
      {
        question: "What is a Polkey reduction?",
        answer:
          "A percentage reduction to compensatory awards where the tribunal finds the claimant would have been dismissed anyway even with a fair procedure. Experts model the financial impact of different Polkey percentages.",
      },
    ],
    caseTypeLink: "/case-types/unfair-dismissal-et",
  },
  {
    id: "discrimination-reports",
    title: "Discrimination Compensation Reports",
    description:
      "Financial loss calculations for discrimination, harassment, and victimisation claims with uncapped compensation potential.",
    methodology: [
      { step: "Past loss", detail: "Loss from detriment or dismissal to tribunal" },
      { step: "Future loss", detail: "Career impact and recovery period" },
      { step: "Pension loss", detail: "Lost pension contributions" },
      { step: "Vento distinction", detail: "Financial heads separate from injury to feelings" },
    ],
    faqs: [
      {
        question: "What financial losses are recoverable in discrimination claims?",
        answer:
          "Past and future loss of earnings, pension loss, and in some cases personal injury for psychiatric harm. Injury to feelings (Vento bands) is assessed separately by the tribunal.",
      },
      {
        question: "What are Vento bands?",
        answer:
          "Vento bands set guideline ranges for injury to feelings: lower £1,100 to £11,200; middle £11,200 to £33,700; upper £33,700 to £56,200 (2025 update). Employment loss experts address financial heads only.",
      },
    ],
    caseTypeLink: "/case-types/discrimination-employment-loss",
  },
  {
    id: "loss-of-career-matrimonial",
    title: "Loss of Career (Matrimonial)",
    description:
      "FPR Part 25 compliant employment reports for financial remedy proceedings, including career gap analysis and earning capacity assessment.",
    methodology: [
      { step: "Career model", detail: "But-for earnings trajectory analysis" },
      { step: "Career gap", detail: "Financial impact of family-related career breaks" },
      { step: "Earning capacity", detail: "Current and future capacity of both parties" },
      { step: "SJE reports", detail: "Single joint expert reports where directed" },
    ],
    faqs: [
      {
        question: "When is an employment expert needed in divorce proceedings?",
        answer:
          "Where earning capacity of either party is a significant issue, typically where one party sacrificed career progression, self-employment income is disputed, or retraining costs form part of settlement discussions.",
      },
      {
        question: "What is a career gap analysis?",
        answer:
          "Career gap analysis establishes the financial difference between what a party would have earned had they continued their career uninterrupted versus actual earnings following a break for family responsibilities.",
      },
      {
        question: "Can the court appoint a Single Joint Expert for employment matters?",
        answer:
          "Yes. Courts frequently direct an SJE under FPR Part 25 for employment matters in financial remedy proceedings, jointly instructed by both parties with costs typically shared equally.",
      },
    ],
    caseTypeLink: "/case-types/divorce-loss-of-career",
  },
];

/** All service FAQs flattened for schema and consolidated display */
export const allServiceFaqs = services.flatMap((s) =>
  s.faqs.map((faq) => ({
    ...faq,
    serviceId: s.id,
    serviceTitle: s.title,
  }))
);

export const homepageServices = services.map((s) => ({
  title: s.title,
  href: `/services#${s.id}`,
}));
