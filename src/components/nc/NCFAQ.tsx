import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useTranslation } from 'react-i18next'

const FAQS = [
  {
    q: "Can you run seeding, KOL and review programs at enterprise scale, across multiple markets?",
    a: "Yes — our rate structure is built for volume from day one. Standard rates apply to single campaigns; bulk rates automatically kick in above 1,500 posts per campaign, and every program can run in parallel across markets with one point of contact.",
  },
  {
    q: "How do you keep brand safety and quality control across thousands of creators?",
    a: "Every creator and seeding account is vetted before onboarding, content goes through a brief-and-approval step before it publishes, and we monitor delivery in real time so off-brand content never reaches your audience.",
  },
  {
    q: "How is pricing structured for seeding and reviews?",
    a: "Seeding is priced per unit by format (photo post, text post, comment) with a standard rate and a lower bulk rate above 1,500 units per campaign. E-commerce reviews are sold in packs — Pack A (300+ reviews) and Pack B (500+ reviews), each including text, photo, and star rating, with product cost billed separately.",
  },
  {
    q: "Do the e-commerce reviews comply with platform policies?",
    a: "Reviews are delivered by real accounts with purchase-consistent behavior on the shopping app or marketplace you specify, and we structure delivery pacing to stay within each platform's normal review patterns.",
  },
  {
    q: "What reporting do we get on a campaign?",
    a: "You receive a full delivery report per campaign — units delivered, creator/account breakdown, content links, and timing — plus ongoing performance metrics like ROAS and CAC impact for paid and affiliate campaigns.",
  },
  {
    q: "What's the minimum commitment and turnaround time?",
    a: "We scope minimums per service and market during onboarding. Standard-rate campaigns typically launch within days of brief approval; bulk campaigns are scheduled against a delivery calendar we agree with you upfront.",
  },
]

export function NCFAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="mb-10 reveal">
          <h2 className="text-3xl md:text-[42px] font-bold text-foreground">{t("Frequently Asked Questions")}</h2>
          <p className="mt-3 text-muted-foreground">
            {t("Answers for brand and procurement teams evaluating seeding, KOL and review programs.")}
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="reveal border border-border rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-foreground">{t(f.q)}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{t(f.a)}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NCFAQ
