import { useTranslation } from 'react-i18next'

const SEEDING_COLUMNS = ["Under 500", "500 – 999", "1,000 – 1,499", "1,500 – 2,999", "3,000+"]

const SEEDING_ROWS = [
  { label: "Seeding Post (Photo)", prices: ["1,700.00", "1,450.00", "1,400.00", "1,350.00", "1,300.00"] },
  { label: "Seeding Post (Text / Q&A)", prices: ["900.00", "800.00", "750.00", "720.00", "700.00"] },
  { label: "Seeding Comment", prices: ["300.00", "260.00", "240.00", "220.00", "200.00"] },
  { label: "+ Add on: Before / After Visual", prices: ["900.00", "800.00", "750.00", "720.00", "700.00"] },
]

const REVIEW_COLUMNS = ["300x", "500x", "1,000x", "2,000x"]

const REVIEW_ROWS = [
  { label: "Text + Photo Review", prices: ["1,000.00", "900.00", "850.00", "800.00"] },
]

export function NCPricing() {
  const { t } = useTranslation()
  return (
    <section id="pricing" className="bg-[#f7faf9] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-xl mb-12 reveal">
          <p className="text-sm font-medium text-primary/90">{t("Rate Card")}</p>
        </div>

        {/* Community Seeding */}
        <div className="reveal mb-10">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-4">
            {t("Community Seeding")} · <span className="text-muted-foreground font-medium">{t("THB / unit")}</span>
          </h3>
          <p className="mb-2 text-xs text-muted-foreground sm:hidden">{t("Swipe to see all columns →")}</p>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm min-w-[680px]">
              <thead>
                <tr className="bg-primary/15">
                  <th className="text-left px-4 py-3 font-bold text-foreground text-xs uppercase tracking-wide">{t("Format")}</th>
                  {SEEDING_COLUMNS.map((c) => (
                    <th key={c} className="text-center px-4 py-3 font-bold text-foreground text-xs uppercase tracking-wide whitespace-nowrap">
                      {t(c)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SEEDING_ROWS.map((r, i) => (
                  <tr key={r.label} className={i % 2 ? "bg-white" : "bg-muted/40"}>
                    <td className="px-4 py-3.5 font-medium text-foreground whitespace-nowrap">{t(r.label)}</td>
                    {r.prices.map((p, j) => (
                      <td key={j} className="text-center px-4 py-3.5 font-semibold text-primary whitespace-nowrap">
                        {p}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Shopee / Lazada Reviews */}
        <div className="reveal">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-4">
            {t("Shopee / Lazada Reviews")} · <span className="text-muted-foreground font-medium">{t("THB / review")}</span>
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm min-w-[480px]">
              <thead>
                <tr className="bg-primary/15">
                  <th className="text-left px-4 py-3 font-bold text-foreground text-xs uppercase tracking-wide">{t("Pack")}</th>
                  {REVIEW_COLUMNS.map((c) => (
                    <th key={t(c)} className="text-center px-4 py-3 font-bold text-foreground text-xs uppercase tracking-wide">
                      {t(c)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {REVIEW_ROWS.map((r) => (
                  <tr key={r.label} className="bg-white">
                    <td className="px-4 py-3.5 font-medium text-foreground whitespace-nowrap">{t(r.label)}</td>
                    {r.prices.map((p, j) => (
                      <td key={j} className="text-center px-4 py-3.5 font-semibold text-primary whitespace-nowrap">
                        {p}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground reveal font-medium">
          {t("Note: Management fee (10%) is not included in any prices above. All prices exclude VAT. Final invoice will include applicable taxes, fees, and management charges.")}
        </p>
      </div>
    </section>
  )
}

export default NCPricing
