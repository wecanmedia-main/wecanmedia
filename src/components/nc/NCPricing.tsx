import { Check } from "lucide-react"
import { useTranslation } from 'react-i18next'

const SEEDING_ROWS = [
  { label: "Photo Seeding Post (100 KOLs)", standard: "฿1,700.00", bulk: "฿1,700.00" },
  { label: "Photo Seeding Post (300 KOLs)", standard: "฿1,450.00", bulk: "฿1,450.00" },
  { label: "Photo Seeding Post (1,500+ KOLs)", standard: "฿1,300.00", bulk: "฿1,300.00" },
  { label: "Comment Seeding (360 comments)", standard: "฿300.00", bulk: "฿300.00" },
  { label: "Comment Seeding (1,500+ comments)", standard: "฿200.00", bulk: "฿200.00" },
  { label: "KOL Group Seeding (100 groups)", standard: "฿1,200.00", bulk: "฿1,200.00" },
  { label: "KOL Group Seeding (300 groups)", standard: "฿1,000.00", bulk: "฿1,000.00" },
  { label: "KOL Group Seeding (500+ groups)", standard: "฿850.00", bulk: "฿850.00" },
  { label: "Community Seeding (300x)", standard: "฿1,000.00", bulk: "฿1,000.00" },
  { label: "Community Seeding (500x)", standard: "฿900.00", bulk: "฿900.00" },
  { label: "Community Seeding (1,000x)", standard: "฿850.00", bulk: "฿850.00" },
  { label: "Community Seeding (2,000x)", standard: "฿800.00", bulk: "฿800.00" },
]

const REVIEW_TIERS = [
  {
    name: "Text Review",
    volume: "Starter: 100 | Standard: 300 | Scale: 500 | Launch: 1,000",
    price: "฿900.00 / unit",
    features: ["5-star rating with written copy", "Shopee & e-commerce platforms", "Product cost included for items under 500 baht"],
  },
  {
    name: "Photo Review",
    volume: "Starter: 100 | Standard: 300 | Scale: 500 | Launch: 1,000",
    price: "฿1,200.00 / unit",
    features: ["Product-in-use photo + rating", "Highest weight in Shopee ranking", "Best ROI per baht spent"],
    highlight: true,
  },
  {
    name: "Video Review",
    volume: "Starter: 100 | Standard: 300 | Scale: 500 | Launch: 1,000",
    price: "฿2,300.00 / unit",
    features: ["Short-form video + rating", "Use on hero SKUs only", "Highest engagement impact"],
  },
]

export function NCPricing() {
  const { t } = useTranslation()
  return (
    <section id="pricing" className="bg-[#f7faf9] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-xl mb-12 reveal">
          <p className="text-sm font-medium text-primary/90">{t("Rate Card")}</p>
          <h2 className="mt-3 text-3xl md:text-[42px] font-bold text-foreground">
            {t("Seeding & Review Pricing")}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {t("Transparent per-unit pricing for seeding, and tiered rates for verified reviews — all social platforms including closed Facebook groups.")}
          </p>
        </div>

        <div className="reveal bg-white rounded-3xl border border-border p-8 mb-8">
          <h3 className="text-xl font-bold text-foreground">{t("Facebook Group & Comment Seeding")}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{t("All-in pricing per unit. Rates scale with volume commitment.")}</p>
          {/* Mobile: stacked cards */}
          <div className="mt-6 space-y-2.5 sm:hidden">
            {SEEDING_ROWS.map((r) => (
              <div key={r.label} className="rounded-2xl border border-border bg-white px-4 py-3.5">
                <p className="text-sm font-medium text-foreground leading-snug">{t(r.label)}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{t("Mgmt Fee")}: {t("Excl.")}</span>
                  <span className="text-base font-semibold text-primary">{r.standard}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Desktop: table */}
          <div className="mt-6 hidden sm:block overflow-hidden rounded-2xl border border-border">
            <div className="grid grid-cols-3 bg-muted text-xs font-semibold text-foreground uppercase tracking-wide px-4 py-3">
              <span>{t("Format & Volume")}</span>
              <span className="text-right">{t("All-In Price")}</span>
              <span className="text-right">{t("Mgmt Fee")}</span>
            </div>
            {SEEDING_ROWS.map((r, i) => (
              <div
                key={r.label}
                className={`grid grid-cols-3 px-4 py-3 text-sm ${i % 2 ? "bg-white" : "bg-muted/40"}`}
              >
                <span className="text-foreground font-medium">{t(r.label)}</span>
                <span className="text-right font-semibold text-primary">{r.standard}</span>
                <span className="text-right text-muted-foreground text-xs">{t("Excl.")}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{t("Scale efficiency applies automatically at higher volumes. Management fee (10%) and VAT not included.")}</p>
        </div>

        <div className="reveal grid md:grid-cols-3 gap-6">
          {REVIEW_TIERS.map((p) => (
            <div
              key={p.name}
              className={`bg-white rounded-3xl border p-6 flex flex-col ${
                p.highlight ? "border-primary shadow-lg md:-translate-y-2" : "border-border"
              }`}
            >
              {p.highlight && (
                <span className="mb-3 inline-block w-fit text-[11px] font-semibold uppercase tracking-wide text-primary bg-primary/10 rounded-full px-3 py-1">
                  {t("Most Popular")}
                </span>
              )}
              <h3 className="text-lg font-bold text-foreground">{t(p.name)}</h3>
              <p className="text-sm text-muted-foreground">{t(p.volume)}</p>
              <p className="mt-4 text-2xl font-bold text-primary">{p.price}</p>
              <ul className="mt-4 space-y-2 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {t(f)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground reveal">
          {t("KOL and paid influencer campaign rates are quoted per creator tier and content format. No volume discounts on reviews — they are your proof point. Get in touch for a tailored proposal.")}
        </p>
        <p className="mt-3 text-xs text-muted-foreground reveal font-medium">
          {t("Note: Management fee (10%) is not included in any prices above. All prices exclude VAT. Final invoice will include applicable taxes, fees, and management charges.")}
        </p>
        <p className="mt-2 text-xs text-muted-foreground reveal">
          {t("All packages exclude management fee (10%) and VAT.")}
        </p>
      </div>
    </section>
  )
}

export default NCPricing
