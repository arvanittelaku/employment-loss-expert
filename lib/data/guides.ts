export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  aboutServiceId: string;
  sections: { heading: string; content: string }[];
};

export const guides: Guide[] = [
  {
    slug: "ogden-tables-loss-of-earnings-guide",
    title: "Ogden Tables Guide",
    metaTitle: "Ogden Tables & Loss of Earnings: A Solicitor's Guide",
    metaDescription:
      "Solicitor guide to Ogden Tables 8th Edition for loss of earnings. Multiplier, discount rate, disability definition, reduction factors.",
    h1: "Ogden Tables & Loss of Earnings: A Solicitor's Guide",
    aboutServiceId: "loss-of-earnings-pi",
    sections: [
      {
        heading: "What Are the Ogden Tables?",
        content:
          "The Ogden Tables are actuarial tables used in UK personal injury litigation to calculate multipliers for capitalising future loss of earnings and other periodical losses into lump sums. The 8th Edition (2020) is the current edition and must be used in all new claims. They are published by the Government Actuary's Department and endorsed by the Lord Chancellor.",
      },
      {
        heading: "Multiplier and Multiplicand",
        content:
          "The multiplicand is the annual net loss of earnings (pre-accident earnings minus post-injury residual earnings). The multiplier, derived from the Ogden Tables, represents the number of years' loss to be awarded as a capital sum. Future loss equals multiplicand multiplied by adjusted multiplier. The discount rate of -0.25% (Civil Liability Act 2018) is applied to adjust the table multiplier upward, reflecting low real investment returns.",
      },
      {
        heading: "Ogden 8th Edition Changes",
        content:
          "The 8th Edition introduced reduction factors (RF) for contingencies other than mortality, applied differently for disabled and non-disabled claimants. The disability definition follows the Equality Act 2010. Experts must justify whether the disabled or non-disabled table applies, as the disability reduction factor significantly reduces the multiplier and therefore the future loss award.",
      },
      {
        heading: "Tables Structure",
        content:
          "Tables 1 to 8 cover working life multipliers by age and sex. Tables 9 to 26 cover various life scenarios. Table H addresses pension loss. Employment experts select the appropriate table based on the claimant's age, sex, employment status (employed, unemployed, not in labour force), and disability status, then apply the discount rate adjustment.",
      },
      {
        heading: "The Employment Expert's Role",
        content:
          "The employment expert establishes the multiplicand through residual earning capacity and labour market analysis. The forensic accountant applies the Ogden multiplier and discount rate. In practice, a combined report from both experts or a forensic accountant with vocational input is standard in complex claims. Early agreement on disability table selection avoids costly disputes at trial.",
      },
    ],
  },
  {
    slug: "era-2025-et-loss-guide",
    title: "ERA 2025 ET Loss Guide",
    metaTitle: "ERA 2025 & ET Loss Calculations: What Solicitors Need to Know",
    metaDescription:
      "Solicitor guide to ERA 2025 impact on ET loss calculations. Cap removal, qualifying period, Polkey, Schedule of Loss.",
    h1: "ERA 2025 & ET Loss Calculations: What Solicitors Need to Know",
    aboutServiceId: "et-schedule-of-loss",
    sections: [
      {
        heading: "Cap Removal from January 2027",
        content:
          "The Employment Rights Act 2025 abolishes the statutory cap on unfair dismissal compensatory awards from 1 January 2027. Tribunals will assess compensation based solely on the employee's actual financial loss. The current cap (the lower of 52 weeks' gross pay or £118,223) will no longer limit exposure for senior employees and high earners.",
      },
      {
        heading: "Qualifying Period Reduction",
        content:
          "The unfair dismissal qualifying period reduces from two years to six months on the same date. More employees will gain protection, increasing ET claim volumes and the need for expert loss evidence in cases that previously settled below the cap without detailed quantification.",
      },
      {
        heading: "Polkey in an Uncapped World",
        content:
          "With uncapped awards, Polkey deductions become a critical tool for employers facing significant exposure. Employment loss experts should be instructed to model the financial impact of 0%, 25%, 50%, and 75% Polkey reductions so solicitors can advise clients on realistic settlement ranges and prepare tribunal submissions.",
      },
      {
        heading: "Schedule of Loss Methodology",
        content:
          "Schedules of Loss must now be prepared with the rigour of High Court litigation schedules. Each head (immediate loss, future loss, pension loss, loss of statutory rights) requires net income assessment, mitigation analysis, and supporting documentation. Templates designed for capped cases will underestimate exposure in uncapped claims.",
      },
      {
        heading: "Expert Instruction from 2027",
        content:
          "Employment loss experts will be required in virtually every significant ET case. Instruct early to establish baseline loss figures, support without prejudice negotiations, and ensure Polkey and mitigation arguments are supported by financial modelling rather than assertion.",
      },
    ],
  },
  {
    slug: "smith-v-manchester-guide",
    title: "Smith v Manchester Guide",
    metaTitle: "Smith v Manchester Awards: A Complete Solicitor's Guide",
    metaDescription:
      "Complete solicitor guide to Smith v Manchester awards. When applicable, quantum, vs multiplier method.",
    h1: "Smith v Manchester Awards: A Complete Solicitor's Guide",
    aboutServiceId: "smith-v-manchester",
    sections: [
      {
        heading: "When Smith v Manchester Applies",
        content:
          "Smith v Manchester awards apply where a claimant with an established career faces risk on the open labour market following injury, but conventional future loss of earnings cannot be precisely calculated using the multiplier/multiplicand method. Common scenarios include uncertain medical prognosis, fluctuating earning capacity, or claimants approaching retirement.",
      },
      {
        heading: "How the Award Is Assessed",
        content:
          "The tribunal or court awards a lump sum, typically up to 2 years' net earnings, assessed by reference to the degree of handicap on the open labour market. The employment expert provides evidence on pre-injury career, residual capacity, labour market risk, and comparable awards in similar cases.",
      },
      {
        heading: "Smith v Manchester vs Multiplier Method",
        content:
          "Where reliable earnings data and a stable residual capacity assessment exist, the multiplier method is preferred as it provides actuarially precise capitalisation. Smith v Manchester is a fallback where precision is impossible. Experts must explain why the multiplier method is inappropriate before recommending a Smith v Manchester approach.",
      },
      {
        heading: "Common Disputes",
        content:
          "Defendants often argue that the multiplier method should apply to reduce the award. Claimants argue for Smith v Manchester where residual capacity is uncertain. Joint instruction of vocational and accounting experts early helps resolve the appropriate methodology before expert reports are exchanged.",
      },
    ],
  },
  {
    slug: "et-schedule-of-loss-guide",
    title: "ET Schedule of Loss Guide",
    metaTitle: "ET Schedule of Loss: How Employment Loss Experts Help Solicitors",
    metaDescription:
      "Guide to ET Schedules of Loss. Each head of loss, Polkey, mitigation, ERA 2025 implications.",
    h1: "ET Schedule of Loss: How Employment Loss Experts Help Solicitors",
    aboutServiceId: "et-schedule-of-loss",
    sections: [
      {
        heading: "What a Schedule of Loss Contains",
        content:
          "A Schedule of Loss sets out all financial heads of claim in an ET case: basic award, compensatory award (immediate loss, future loss, pension loss, loss of statutory rights), and injury to feelings in discrimination claims. It is the central document for quantifying remedy and supports both tribunal determination and settlement negotiations.",
      },
      {
        heading: "Each Head of Loss Explained",
        content:
          "The basic award is calculated as age multiplied by years of service multiplied by weekly pay (capped at £719 per week). Immediate compensatory loss covers net weekly loss from dismissal to new employment or hearing. Future loss covers the period to find comparable work. Pension loss uses contribution or actuarial methods. Loss of statutory rights is conventionally £500.",
      },
      {
        heading: "Polkey and Mitigation",
        content:
          "Polkey reductions and mitigation credits must be clearly addressed in the Schedule. The expert documents the claimant's job search efforts, comparable roles applied for, and any unreasonable refusal of suitable employment. For Polkey, the employer's evidence on likely dismissal outcome should be modelled against the gross compensatory award.",
      },
      {
        heading: "ERA 2025 Implications",
        content:
          "For dismissals after 1 January 2027, Schedules must be prepared on an uncapped basis with full future loss quantification. Senior employee claims may involve multi-year future loss periods, pension loss on defined benefit schemes, and LTIP forfeiture. Expert-prepared Schedules carry significantly more weight in uncapped proceedings.",
      },
      {
        heading: "Expert Report Structure",
        content:
          "A compliant expert report under CPR Part 35 principles (applied in ET practice) includes the expert's qualifications, instructions received, documents relied upon, methodology, calculations, and a statement of truth. The report should address specific questions in the letter of instruction and distinguish facts from opinion.",
      },
    ],
  },
  {
    slug: "discrimination-loss-of-earnings",
    title: "Discrimination Loss of Earnings Guide",
    metaTitle: "Loss of Earnings in Discrimination Claims: Expert Evidence Guide",
    metaDescription:
      "Guide to loss of earnings in discrimination claims. Uncapped awards, Vento bands, career impact analysis.",
    h1: "Loss of Earnings in Discrimination Claims: Expert Evidence Guide",
    aboutServiceId: "discrimination-reports",
    sections: [
      {
        heading: "Uncapped Financial Loss",
        content:
          "Discrimination claims under the Equality Act 2010 carry uncapped compensation for financial losses. Unlike ordinary unfair dismissal (capped until January 2027), discrimination compensation has always required precise loss quantification for high-value claims. Employment loss experts are routinely instructed in disability, race, sex, and age discrimination claims with significant career impact.",
      },
      {
        heading: "Future Loss Methodology",
        content:
          "Future loss is assessed based on how long it will realistically take the claimant to find comparable employment, considering labour market conditions, the impact of discrimination on employability, and any need for retraining. Extended future loss periods apply where discrimination has caused permanent career damage.",
      },
      {
        heading: "Injury to Feelings vs Financial Loss",
        content:
          "Vento bands govern injury to feelings awards (lower £1,100 to £11,200; middle £11,200 to £33,700; upper £33,700 to £56,200 in 2025). Employment loss experts address financial heads only. Psychiatric injury from discrimination may require a separate medical expert. The tribunal assesses Vento awards independently of financial loss evidence.",
      },
      {
        heading: "Career Impact Analysis",
        content:
          "Discrimination may cause lasting damage to career trajectory, particularly where the claimant works in a small sector or has a public profile. Experts conduct labour market analysis to assess whether the claimant can return to comparable earnings and document any permanent reduction in earning capacity.",
      },
    ],
  },
  {
    slug: "family-law-employment-reports",
    title: "Family Law Employment Reports Guide",
    metaTitle: "Employment Reports in Family Law: FPR Part 25 Guide",
    metaDescription:
      "Guide to employment reports in family law. FPR Part 25, SJE, career gap analysis, economic disadvantage.",
    h1: "Employment Reports in Family Law: FPR Part 25 Guide",
    aboutServiceId: "loss-of-career-matrimonial",
    sections: [
      {
        heading: "FPR Part 25 Requirements",
        content:
          "Family court expert evidence is governed by FPR Part 25. Court permission may be required before instructing an expert. The expert's overriding duty is to the court. Reports must comply with FPR Part 25 practice directions, including the expert's qualifications, instructions, and a declaration that the expert understands their duty to the court.",
      },
      {
        heading: "Single Joint Expert in Family Proceedings",
        content:
          "Courts frequently direct a Single Joint Expert (SJE) for employment matters, jointly instructed by both parties. The SJE assesses both parties' earning capacity, career trajectories, and labour market prospects. Costs are typically shared equally. Early agreement on the expert's identity and letter of instruction avoids delay.",
      },
      {
        heading: "Career Gap Analysis",
        content:
          "Career gap analysis quantifies the financial difference between what a party would have earned had they continued their career uninterrupted and what they actually earned following a break for family responsibilities. This loss of career figure supports arguments for unequal division of matrimonial assets or spousal maintenance.",
      },
      {
        heading: "Economic Disadvantage",
        content:
          "Economic disadvantage quantifies the long-term financial impact of relationship breakdown on a party's earnings. It is particularly relevant in Scottish proceedings under the Family Law (Scotland) Act 1985. Experts assess whether a party's earning capacity has been permanently reduced by career sacrifices made during the marriage.",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

export function getGuideSlugs() {
  return guides.map((g) => g.slug);
}
