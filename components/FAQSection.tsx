"use client";

import { useState } from "react";

type FAQ = { question: string; answer: string };

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-8">
      <h2 className="mb-6 text-2xl font-bold text-primary">{title}</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="rounded-lg border border-border bg-white card-shadow">
            <button
              type="button"
              className="flex min-h-11 w-full items-center justify-between gap-4 px-4 py-4 text-left font-semibold text-primary"
              aria-expanded={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              <span className="shrink-0 text-accent" aria-hidden>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="border-t border-border px-4 pb-4 pt-2 text-body">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
