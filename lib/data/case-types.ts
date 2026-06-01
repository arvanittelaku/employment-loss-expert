export type CaseType = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  paragraphs: string[];
  faqs: { question: string; answer: string }[];
  practiceArea: { label: string; href: string };
  relatedServices: string[];
};

export const caseTypes: CaseType[] = [
  {
    slug: "personal-injury-loss-of-earnings",
    title: "Personal Injury Loss of Earnings",
    metaTitle: "Personal Injury Loss of Earnings Expert Witness UK",
    metaDescription:
      "Employment loss expert witnesses for UK personal injury loss of earnings claims. Ogden Tables, Smith v Manchester, past and future loss.",
    h1: "Personal Injury Loss of Earnings Expert Witness UK",
    paragraphs: [
      "Personal injury loss of earnings is one of the most significant heads of damage in serious injury claims. Employment loss expert witnesses establish the claimant's pre-accident earnings position, assess residual earning capacity post-injury, and calculate past and future financial loss using the multiplier/multiplicand method with Ogden Tables 8th Edition.",
      "Where the claimant is self-employed, a business owner, or has an unusual earnings history, vocational and forensic accounting expertise is essential to establish a reliable earnings baseline. Smith v Manchester awards may apply where the claimant faces handicap on the open labour market but future loss cannot be precisely quantified.",
      "Our experts prepare CPR Part 35 compliant reports covering career model analysis, labour market assessment, pension loss, and the application of the -0.25% discount rate under the Civil Liability Act 2018.",
    ],
    faqs: [
      {
        question: "How is future loss of earnings calculated in personal injury?",
        answer:
          "The multiplier/multiplicand method applies: the multiplicand is the annual net earnings loss; the multiplier is derived from the Ogden Tables 8th Edition, adjusted for age, sex, employment status, and whether the claimant is disabled under the Equality Act 2010 definition, then further adjusted for the prescribed discount rate of -0.25%. The resulting lump sum represents the present value of all future earnings losses.",
      },
      {
        question: "When is a Smith v Manchester award appropriate?",
        answer:
          "A Smith v Manchester award is appropriate where a claimant has an established career pre-accident and faces a risk on the open labour market post-injury, but where it is not possible to calculate future loss precisely using the multiplier/multiplicand method. The award is a lump sum, typically up to 2 years' net earnings, assessed by reference to the degree of risk and the claimant's labour market position.",
      },
    ],
    practiceArea: { label: "Personal Injury", href: "/practice-areas/personal-injury" },
    relatedServices: ["loss-of-earnings-pi", "smith-v-manchester", "residual-earning-capacity"],
  },
  {
    slug: "clinical-negligence-employment-loss",
    title: "Clinical Negligence Employment Loss",
    metaTitle: "Clinical Negligence Employment Loss Expert Witness UK",
    metaDescription:
      "Employment loss expert evidence for UK clinical negligence claims. Career change, causation, and Ogden Tables methodology.",
    h1: "Clinical Negligence Employment Loss Expert Witness UK",
    paragraphs: [
      "Employment loss in clinical negligence claims arises where avoidable medical injury causes a reduction in earning capacity or forces a career change. The calculation methodology mirrors personal injury: establishing what the claimant would have earned absent the negligent injury and comparing it to actual or projected post-negligence earnings.",
      "The key additional challenge in clinical negligence is causation: the expert must address whether the avoidable injury (not a pre-existing condition) caused the employment loss. Interaction with care and accommodation heads of loss also requires careful coordination between experts.",
      "Our employment loss experts work alongside care experts and treating clinicians to produce integrated, defensible loss of earnings evidence for High Court and County Court clinical negligence proceedings.",
    ],
    faqs: [
      {
        question: "How does clinical negligence affect employment loss calculations?",
        answer:
          "Employment loss in clinical negligence claims is calculated using the same multiplier/multiplicand and Ogden Tables methodology as personal injury, establishing what the claimant would have earned absent the negligent injury and comparing it to their actual or projected post-negligence earnings. The key additional issue is establishing causation: that the avoidable injury (not a pre-existing condition) caused the employment loss.",
      },
      {
        question: "What documents are needed for a clinical negligence employment report?",
        answer:
          "Tax returns and employment history for 5 years pre-injury; employer's reference and HR records; medical evidence on functional limitations; evidence of any employment attempts post-injury; expert evidence on residual earning capacity; and the care expert's findings on the claimant's daily functional capacity.",
      },
    ],
    practiceArea: { label: "Personal Injury", href: "/practice-areas/personal-injury" },
    relatedServices: ["loss-of-earnings-pi", "residual-earning-capacity", "labour-market-analysis"],
  },
  {
    slug: "unfair-dismissal-et",
    title: "Unfair Dismissal ET",
    metaTitle: "Unfair Dismissal ET Loss Expert Witness UK",
    metaDescription:
      "Employment loss experts for unfair dismissal ET claims. Schedule of Loss, Polkey, ERA 2025 uncapped awards.",
    h1: "Unfair Dismissal ET Loss Expert Witness UK",
    paragraphs: [
      "Unfair dismissal claims require precise quantification of compensatory awards covering immediate loss of earnings from dismissal to new employment, future loss while the claimant finds comparable work, pension loss, and loss of statutory rights. Employment loss experts prepare and review Schedules of Loss for complex cases.",
      "From 1 January 2027, the Employment Rights Act 2025 removes the statutory cap on unfair dismissal compensation. For senior employees and high earners, uncapped awards mean expert evidence of actual financial loss replaces the rough estimates that sufficed under the capped regime.",
      "Polkey reductions become increasingly important in uncapped cases. Our experts model the financial impact of different Polkey percentage outcomes to support settlement strategy and tribunal advocacy.",
    ],
    faqs: [
      {
        question: "How will ERA 2025 change unfair dismissal loss calculations?",
        answer:
          "From 1 January 2027, the Employment Rights Act 2025 removes the cap on compensatory awards, meaning the tribunal will assess actual financial loss without the current £118,223 ceiling. For senior employees and high earners, this significantly increases exposure and makes precise expert evidence of actual financial loss essential rather than approximate.",
      },
      {
        question: "What is a Polkey reduction and how is it calculated?",
        answer:
          "A Polkey reduction reflects the chance that the claimant would have been dismissed anyway even if a fair procedure had been followed. The tribunal applies a percentage reduction (e.g. 25%, 50%) to the compensatory award. Employment loss experts model the financial impact of different percentage outcomes, helping solicitors advise on likely ranges and settlement strategy.",
      },
    ],
    practiceArea: { label: "Employment Tribunal", href: "/practice-areas/employment-tribunal" },
    relatedServices: ["et-schedule-of-loss"],
  },
  {
    slug: "discrimination-employment-loss",
    title: "Discrimination Employment Loss",
    metaTitle: "Discrimination Employment Loss Expert Witness UK",
    metaDescription:
      "Employment loss experts for UK discrimination claims. Uncapped awards, Vento bands, future loss of earnings.",
    h1: "Discrimination Employment Loss Expert Witness UK",
    paragraphs: [
      "Discrimination claims under the Equality Act 2010 carry uncapped compensation for financial losses including past and future loss of earnings, pension loss, and in some cases personal injury for psychiatric harm. Employment loss experts calculate the financial heads while injury to feelings (Vento bands) is assessed separately by the tribunal.",
      "The career impact of discrimination may differ by protected characteristic. Disability discrimination may involve permanent reduction in earning capacity requiring Ogden-style analysis, while age or sex discrimination may involve shorter recovery periods with full earnings restoration expected.",
      "Our experts prepare discrimination compensation reports addressing immediate and future loss, mitigation, and the interaction between financial loss and non-financial remedy.",
    ],
    faqs: [
      {
        question: "What financial losses are recoverable in discrimination claims?",
        answer:
          "Discrimination claims carry uncapped compensation covering: past loss of earnings (from dismissal or detriment to tribunal); future loss of earnings (how long it will realistically take to find comparable work); pension loss; injury to feelings (Vento bands); and in some cases, personal injury (psychiatric harm from discrimination). Employment loss experts calculate the financial heads; injury to feelings is assessed by the tribunal independently.",
      },
      {
        question:
          "Are there differences in loss calculations for different protected characteristics?",
        answer:
          "The financial loss methodology is the same across all protected characteristics. However, the career impact may differ. For example, a disability discrimination claim may involve a permanent reduction in earning capacity requiring Ogden Tables-style analysis, whereas an age or sex discrimination claim may involve a shorter recovery period with full earnings restoration expected.",
      },
    ],
    practiceArea: { label: "Employment Tribunal", href: "/practice-areas/employment-tribunal" },
    relatedServices: ["discrimination-reports", "et-schedule-of-loss"],
  },
  {
    slug: "whistleblowing-detriment",
    title: "Whistleblowing Detriment",
    metaTitle: "Whistleblowing Employment Loss Expert Witness UK",
    metaDescription:
      "Employment loss experts for UK whistleblowing claims. Uncapped awards, ERA 2025 protected disclosures.",
    h1: "Whistleblowing Employment Loss Expert Witness UK",
    paragraphs: [
      "Whistleblowing (protected disclosure) claims carry uncapped compensation for all financial losses flowing from detriment or dismissal. Employment loss experts calculate past and future earnings loss, pension loss, and longer-term career impact where whistleblowing has damaged reputation or employability.",
      "From 6 April 2026, sexual harassment disclosures become qualifying protected disclosures under ERA 2025, expanding the pool of uncapped whistleblowing claims and increasing demand for employment loss expert evidence.",
      "Our experts apply ET methodology with particular attention to career trajectory impact, labour market conditions in the claimant's sector, and the realistic period for recovery of comparable employment.",
    ],
    faqs: [
      {
        question: "What financial losses are recoverable in whistleblowing claims?",
        answer:
          "Whistleblowing (protected disclosure) claims carry uncapped compensation for all financial losses flowing from the detriment or dismissal, including past and future earnings loss, pension loss, and where the whistleblowing has damaged the claimant's career prospects or reputation, longer-term future loss. Employment loss experts calculate these heads using ET methodology.",
      },
      {
        question: "What changed for whistleblowing under ERA 2025?",
        answer:
          "From 6 April 2026, sexual harassment disclosures are qualifying protected disclosures under whistleblowing law, meaning employees who report sexual harassment gain protection from detriment and unfair dismissal. This expands the pool of uncapped whistleblowing claims and increases the volume of cases where employment loss expert evidence will be needed.",
      },
    ],
    practiceArea: { label: "Employment Tribunal", href: "/practice-areas/employment-tribunal" },
    relatedServices: ["et-schedule-of-loss", "discrimination-reports"],
  },
  {
    slug: "wrongful-dismissal",
    title: "Wrongful Dismissal",
    metaTitle: "Wrongful Dismissal Employment Loss Expert Witness UK",
    metaDescription:
      "Employment loss experts for wrongful dismissal. Notice period losses, LTIP, bonus calculations, High Court jurisdiction.",
    h1: "Wrongful Dismissal Employment Loss Expert Witness UK",
    paragraphs: [
      "Wrongful dismissal is a breach of contract claim, typically for failure to give proper contractual notice. Damages are limited to the notice period but can be substantial for senior executives with long notice periods, significant LTIP awards, or bonus entitlements forfeited on dismissal.",
      "Employment loss experts model the value of unvested LTIP awards using share price, performance conditions, and probability of vesting. Bonus losses are calculated by reference to contractual entitlement and historical bonus patterns.",
      "Wrongful dismissal claims may proceed in the High Court or Employment Tribunal depending on value and complexity. Our forensic accountants provide quantum evidence suitable for both jurisdictions.",
    ],
    faqs: [
      {
        question: "What is the difference between wrongful and unfair dismissal?",
        answer:
          "Wrongful dismissal is a breach of contract claim, typically for failure to give proper contractual notice. Damages are limited to the notice period. Unfair dismissal is a statutory claim with compensatory awards based on actual financial loss (uncapped from January 2027). For senior executives with long contractual notice periods or significant LTIP/bonus awards, wrongful dismissal can produce very substantial damages.",
      },
      {
        question: "How are LTIP and bonus losses calculated on dismissal?",
        answer:
          "LTIP losses are calculated by assessing which awards would have vested during the notice period (or which were forfeited on dismissal contrary to the plan rules). Employment loss experts model the value of unvested awards using the share price, performance conditions, and probability of vesting, producing a present value for the lost LTIP.",
      },
    ],
    practiceArea: { label: "Employment Tribunal", href: "/practice-areas/employment-tribunal" },
    relatedServices: ["et-schedule-of-loss"],
  },
  {
    slug: "divorce-loss-of-career",
    title: "Divorce Loss of Career",
    metaTitle: "Divorce & Loss of Career Employment Loss Expert Witness UK",
    metaDescription:
      "Employment loss experts for divorce and financial remedy. FPR Part 25, career gap analysis, SJE reports.",
    h1: "Divorce & Loss of Career Employment Loss Expert Witness UK",
    paragraphs: [
      "In financial remedy proceedings, employment loss experts assess the employment prospects and earning capacity of both parties. This is particularly important where one spouse has sacrificed career progression for family responsibilities or where self-employment income is disputed.",
      "Career gap analysis establishes the financial difference between what a party would have earned had they continued their career uninterrupted versus what they actually earned following a break for family responsibilities. This loss of career figure informs the overall financial remedy calculation.",
      "Courts frequently direct Single Joint Expert (SJE) appointments for employment matters under FPR Part 25. Our experts prepare compliant reports addressing both parties' earning capacity and labour market prospects.",
    ],
    faqs: [
      {
        question: "How does a career gap affect financial remedy proceedings?",
        answer:
          "Where one party has reduced their working hours or taken a career break for family responsibilities, an employment expert quantifies the financial impact: the difference between actual earnings and what they would have earned absent the career interruption. This loss of career figure informs the overall financial remedy calculation and may support a larger share of matrimonial assets.",
      },
      {
        question: "Can the court require both parties to be assessed by the same employment expert?",
        answer:
          "Yes. In financial remedy proceedings, the court often directs a Single Joint Expert (SJE) for employment matters under FPR Part 25, jointly instructed by both parties. The SJE provides independent evidence on both parties' earning capacity and labour market prospects.",
      },
    ],
    practiceArea: { label: "Family Law", href: "/practice-areas/family-law" },
    relatedServices: ["loss-of-career-matrimonial"],
  },
  {
    slug: "fatal-accident-dependency",
    title: "Fatal Accident Dependency",
    metaTitle: "Fatal Accident Dependency Employment Loss Expert Witness UK",
    metaDescription:
      "Employment loss experts for Fatal Accidents Act 1976 claims. Dependency capitalisation, career model analysis.",
    h1: "Fatal Accident Dependency Employment Loss Expert Witness UK",
    paragraphs: [
      "Under the Fatal Accidents Act 1976, dependants may claim for the financial benefit they would have received from the deceased. Employment loss experts construct a career model showing the deceased's likely earnings trajectory using employment history, qualifications, sector data, and career progression patterns.",
      "The annual dependency figure (net income less the deceased's personal expenditure) is capitalised using the Ogden multiplier from the date of death. Services dependency (childcare, housework) is calculated separately by the care expert.",
      "Our experts provide FAA 1976 compliant evidence on financial income dependency, working alongside care experts and forensic accountants in fatal accident claims.",
    ],
    faqs: [
      {
        question: "How is the deceased's future earning trajectory established?",
        answer:
          "The employment expert constructs a career model showing the deceased's likely earnings path using their employment history, qualifications, sector data, and career progression patterns in comparable roles. This establishes the annual dependency figure that is then capitalised by the Ogden multiplier from the date of death.",
      },
      {
        question: "What is included in the dependency calculation?",
        answer:
          "The financial dependency is the deceased's net income less their own personal expenditure: the net amount that would have been available for the dependants. Services dependency (childcare, housework, DIY) is calculated separately by the care expert. Employment experts address the financial income dependency only.",
      },
    ],
    practiceArea: { label: "Personal Injury", href: "/practice-areas/personal-injury" },
    relatedServices: ["loss-of-earnings-pi", "pension-loss"],
  },
  {
    slug: "educational-negligence-career-loss",
    title: "Educational Negligence Career Loss",
    metaTitle: "Educational Negligence Career Loss Expert Witness UK",
    metaDescription:
      "Employment loss experts for educational negligence career loss claims. But-for career analysis, Ogden methodology.",
    h1: "Educational Negligence Career Loss Expert Witness UK",
    paragraphs: [
      "Educational negligence claims arise where failures in schooling (unaddressed SEND needs, bullying, dyslexia support failures) cause measurable career and earnings loss. Employment loss experts construct a but-for career model showing what qualifications and career the claimant would have followed absent the negligence.",
      "The earnings difference between the but-for trajectory and actual outcome is capitalised using Ogden Tables in the same way as personal injury loss of earnings. Comparative data on career outcomes for similarly situated individuals with appropriate support is essential.",
      "Our experts combine vocational assessment with financial quantification to produce defensible career loss evidence for County Court and High Court educational negligence claims.",
    ],
    faqs: [
      {
        question: "How is career loss calculated in educational negligence claims?",
        answer:
          "The expert constructs a but-for career model showing what qualifications the claimant would have obtained and what career they would have followed absent the educational negligence. This is compared to their actual educational and career outcome. The earnings difference is capitalised using Ogden Tables in the same way as PI loss of earnings.",
      },
      {
        question: "What evidence is needed for an educational negligence career loss report?",
        answer:
          "Educational records; evidence of the SEND need or learning difficulty that was not addressed; comparative data on career outcomes for similarly situated individuals with appropriate support; the claimant's actual educational and employment history; and labour market data on the relevant occupational sector.",
      },
    ],
    practiceArea: { label: "Personal Injury", href: "/practice-areas/personal-injury" },
    relatedServices: ["loss-of-earnings-pi", "labour-market-analysis"],
  },
  {
    slug: "redundancy-settlement-disputes",
    title: "Redundancy Settlement Disputes",
    metaTitle: "Redundancy & Settlement Dispute Employment Loss Expert Witness UK",
    metaDescription:
      "Employment loss experts for redundancy settlement valuation. ERA 2025 uncapped exposure, ACAS COT3 analysis.",
    h1: "Redundancy & Settlement Dispute Employment Loss Expert Witness UK",
    paragraphs: [
      "When employees consider settlement offers following redundancy or potential unfair dismissal, employment loss experts model the range of potential tribunal awards to help solicitors advise whether an offer reflects fair value. This is particularly critical after ERA 2025 removes the compensation cap from January 2027.",
      "Expert evidence supports valuation of waiver of statutory rights, combined redundancy and unfair dismissal losses, and the true cost of accepting settlement versus proceeding to tribunal.",
      "Our experts provide clear scenario modelling for ACAS conciliation, without prejudice negotiations, and COT3 settlement discussions.",
    ],
    faqs: [
      {
        question: "When is expert evidence needed to value a settlement offer?",
        answer:
          "Where a settlement is being considered in a case involving significant future loss, particularly after ERA 2025 removes the compensation cap, an employment loss expert can model the range of potential tribunal awards to help solicitors advise clients on whether an offer reflects fair value. This is particularly important for senior employees where uncapped losses could far exceed the settlement offer.",
      },
      {
        question: "What is the value of losing statutory rights in a settlement?",
        answer:
          "An employee who settles waives their statutory employment rights, including the right to claim unfair dismissal for any future dismissal without the qualifying period being met afresh. The tribunal awards £500 conventionally for loss of statutory rights. In ERA 2025 cases, this figure may need reconsideration given the changed qualifying period rules.",
      },
    ],
    practiceArea: { label: "Employment Tribunal", href: "/practice-areas/employment-tribunal" },
    relatedServices: ["et-schedule-of-loss"],
  },
];

export function getCaseType(slug: string) {
  return caseTypes.find((c) => c.slug === slug);
}

export function getCaseTypeSlugs() {
  return caseTypes.map((c) => c.slug);
}
