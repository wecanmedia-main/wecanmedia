import { useMemo, useState } from "react"
import { Calculator, ArrowRight } from "lucide-react"
import { useTranslation } from 'react-i18next'

const TIERS = [
  { id: "nano", label: "Nano (1K – 10K Followers)", low: 1200, high: 3500 },
  { id: "micro", label: "Micro (10K – 50K Followers)", low: 3500, high: 9000 },
  { id: "mid", label: "Mid-Tier (50K – 200K Followers)", low: 9000, high: 25000 },
  { id: "macro", label: "Macro (200K+ Followers)", low: 25000, high: 70000 },
]

const FORMATS = [
  { id: "photo", label: "Photo Post", mult: 1 },
  { id: "video", label: "Video / Reel", mult: 1.6 },
  { id: "story", label: "Story", mult: 0.4 },
  { id: "live", label: "Live Session", mult: 2 },
]

function fmt(n: number) {
  return "฿" + Math.round(n).toLocaleString("en-US")
}

export function NCKOLCalculator() {
  const { t } = useTranslation()
  const [tierId, setTierId] = useState(TIERS[0].id)
  const [formatId, setFormatId] = useState(FORMATS[0].id)
  const [qty, setQty] = useState(1)

  const { low, high } = useMemo(() => {
    const tier = TIERS.find((x) => x.id === tierId)!
    const format = FORMATS.find((x) => x.id === formatId)!
    const n = Math.max(1, Number(qty) || 1)
    return {
      low: tier.low * format.mult * n,
      high: tier.high * format.mult * n,
    }
  }, [tierId, formatId, qty])

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="max-w-xl mb-10 reveal">
          <p className="text-sm font-medium text-primary/90">{t("Estimate Your Campaign")}</p>
          <h2 className="mt-3 text-3xl md:text-[42px] font-bold text-foreground">
            {t("KOL Price Calculator")}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {t("A quick estimate based on creator tier, content format and volume. Final pricing depends on niche, engagement rate and campaign scope — contact us for a firm quote.")}
          </p>
        </div>

        <div className="reveal bg-[#f7faf9] border border-border rounded-3xl p-6 md:p-10 grid md:grid-cols-[1.2fr_1fr] gap-10">
          <div className="space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground">{t("Creator Tier")}</label>
              <select
                value={tierId}
                onChange={(e) => setTierId(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                {TIERS.map((tier) => (
                  <option key={tier.id} value={tier.id}>{t(tier.label)}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">{t("Content Format")}</label>
              <select
                value={formatId}
                onChange={(e) => setFormatId(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                {FORMATS.map((format) => (
                  <option key={format.id} value={format.id}>{t(format.label)}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">{t("Number of Creators / Posts")}</label>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>

          <div className="bg-[#00171F] rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center text-center">
            <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
              <Calculator className="w-5 h-5 text-primary" />
            </div>
            <p className="text-xs uppercase tracking-wide text-white/50">{t("Estimated Range")}</p>
            <p className="mt-2 text-2xl md:text-3xl font-bold text-white">
              {fmt(low)} – {fmt(high)}
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-[9px] bg-primary text-[#3d3d3d] font-semibold px-5 py-2.5 text-sm hover-lift"
            >
              {t("Get a Firm Quote")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NCKOLCalculator