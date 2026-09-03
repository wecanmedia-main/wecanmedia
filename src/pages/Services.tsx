import { useTranslation } from 'react-i18next'
import {
  Megaphone,
  Users,
  ShoppingBag,
  ArrowRight,
  Check,
  ShieldCheck,
  BarChart3,
  Clock,
  Sparkles,
} from "lucide-react"
import { NCHeader } from "@/components/nc/NCHeader"
import { NCFooter } from "@/components/nc/NCFooter"
import { NCFloatingCTA } from "@/components/nc/NCFloatingCTA"

const PILLARS = [
  {
    icon: Megaphone,
    title: "Group & Comment Seeding",
    desc: "Organic-looking posts and comments across Facebook groups and social platforms that build word-of-mouth before launch.",
    price: "From ฿281 / unit",
    anchor: "#seeding-rates",
  },
  {
    icon: Users,
    title: "KOL & Affiliate Campaigns",
    desc: "Nano to macro creators matched to your brand, running paid or affiliate content across TikTok, Instagram and Facebook.",
    price: "From ฿1,200 / creator",
    anchor: "#kol-rates",
  },
  {
    icon: ShoppingBag,
    title: "Verified E-Commerce Reviews",
    desc: "Text, photo and video reviews from real buyers on Shopee and Lazada that lift ranking and conversion.",
    price: "From ฿877 / unit",
    anchor: "#review-rates",
  },
]

const SEEDING_COLUMNS = ["Under 500", "500 – 999", "1,000 – 1,499", "1,500 – 2,999", "3,000+"]

const SEEDING_ROWS = [
  { label: "Seeding Post (Photo)", prices: ["1,700.00", "1,450.00", "1,400.00", "1,350.00", "1,300.00"] },
  { label: "Seeding Post (Text / Q&A)", prices: ["900.00", "800.00", "750.00", "720.00", "700.00"] },
  { label: "Seeding Comment", prices: ["300.00", "260.00", "240.00", "220.00", "200.00"] },
  { label: "+ Add on: Before / After Visual", prices: ["900.00", "800.00", "750.00", "720.00", "700.00"] },
]

const REVIEW_COLUMNS = ["300x", "500x", "1,000x", "2,000x"]

const REVIEW_ROWS_TABLE = [
  { label: "Text + Photo Review", prices: ["1,000.00", "900.00", "850.00", "800.00"] },
]

const KOL_TIERS = [
  { label: "Nano (1K – 10K Followers)", photo: "฿1,200 – ฿3,500", video: "฿1,920 – ฿5,600", story: "฿480 – ฿1,400", live: "฿2,400 – ฿7,000" },
  { label: "Micro (10K – 50K Followers)", photo: "฿3,500 – ฿9,000", video: "฿5,600 – ฿14,400", story: "฿1,400 – ฿3,600", live: "฿7,000 – ฿18,000" },
  { label: "Mid-Tier (50K – 200K Followers)", photo: "฿9,000 – ฿25,000", video: "฿14,400 – ฿40,000", story: "฿3,600 – ฿10,000", live: "฿18,000 – ฿50,000" },
  { label: "Macro (200K+ Followers)", photo: "฿25,000 – ฿70,000", video: "฿40,000 – ฿112,000", story: "฿10,000 – ฿28,000", live: "฿50,000 – ฿140,000" },
]

const PROCESS = [
  { step: "01", title: "Discovery Call", desc: "We map your goals, SKUs, budget and timeline in a 30-minute call.", icon: Clock },
  { step: "02", title: "Strategy & Matching", desc: "We build the creator/seeding mix and share a rate-locked proposal.", icon: Sparkles },
  { step: "03", title: "Campaign Execution", desc: "Content goes live across platforms with brand-safety checks at every stage.", icon: ShieldCheck },
  { step: "04", title: "Reporting & Optimization", desc: "You get full performance reporting and we tune the next wave.", icon: BarChart3 },
]

export default function Services() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white">
      <NCHeader />

      {/* Hero */}
      <section className="bg-[#00171F] pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-sm font-medium text-primary reveal">{t("Services & Rates")}</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold text-white max-w-3xl reveal">
            {t("Enterprise-scale campaigns, transparent pricing")}
          </h1>
          <p className="mt-5 text-white/60 max-w-2xl reveal">
            {t("Every rate on this page is the same rate we quote our largest clients — no hidden markups, no guesswork. Explore each service below or jump straight to the numbers.")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 reveal">
            {PILLARS.map((p) => (
              <a
                key={p.title}
                href={p.anchor}
                className="rounded-full border border-white/20 text-white/80 hover:text-primary hover:border-primary/50 transition-colors text-sm px-4 py-2"
              >
                {t(p.title)}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <a
              key={p.title}
              href={p.anchor}
              className="reveal group bg-[#f7faf9] border border-border rounded-3xl p-8 hover-lift transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{t(p.title)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(p.desc)}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">{p.price}</span>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Seeding rates */}
      <section id="seeding-rates" className="py-16 md:py-24 bg-[#f7faf9] scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="max-w-xl mb-10 reveal">
            <p className="text-sm font-medium text-primary/90">{t("Rate Card")}</p>
            <h2 className="mt-3 text-3xl md:text-[42px] font-bold text-foreground">{t("Group & Comment Seeding")}</h2>
            <p className="mt-3 text-muted-foreground">
              {t("All-in pricing per unit. Rates scale down automatically at higher volumes.")}
            </p>
          </div>
          <p className="mb-2 text-xs text-muted-foreground reveal sm:hidden">{t("Swipe to see all columns →")}</p>
          <div className="reveal overflow-x-auto rounded-2xl border border-border">
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
          <p className="mt-4 text-xs text-muted-foreground reveal">{t("Rates are per unit, THB. All prices exclude management fee (10%) and VAT.")}</p>
        </div>
      </section>

      {/* KOL rates */}
      <section id="kol-rates" className="py-16 md:py-24 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="max-w-xl mb-10 reveal">
            <p className="text-sm font-medium text-primary/90">{t("Rate Card")}</p>
            <h2 className="mt-3 text-3xl md:text-[42px] font-bold text-foreground">{t("KOL & Affiliate Campaigns")}</h2>
            <p className="mt-3 text-muted-foreground">
              {t("Indicative ranges per creator tier and content format. Final rates depend on niche, engagement rate and exclusivity.")}
            </p>
          </div>
          <p className="reveal mb-2 text-xs text-muted-foreground sm:hidden">{t("Swipe to see all columns →")}</p>
          <div className="reveal overflow-x-auto rounded-3xl border border-border">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="bg-muted text-xs font-semibold text-foreground uppercase tracking-wide">
                  <th className="text-left px-4 py-3">{t("Creator Tier")}</th>
                  <th className="text-right px-4 py-3">{t("Photo Post")}</th>
                  <th className="text-right px-4 py-3">{t("Video / Reel")}</th>
                  <th className="text-right px-4 py-3">{t("Story")}</th>
                  <th className="text-right px-4 py-3">{t("Live Session")}</th>
                </tr>
              </thead>
              <tbody>
                {KOL_TIERS.map((k, i) => (
                  <tr key={k.label} className={i % 2 ? "bg-white" : "bg-muted/40"}>
                    <td className="px-4 py-3 font-medium text-foreground">{t(k.label)}</td>
                    <td className="px-4 py-3 text-right text-primary font-semibold whitespace-nowrap">{k.photo}</td>
                    <td className="px-4 py-3 text-right text-primary font-semibold whitespace-nowrap">{k.video}</td>
                    <td className="px-4 py-3 text-right text-primary font-semibold whitespace-nowrap">{k.story}</td>
                    <td className="px-4 py-3 text-right text-primary font-semibold whitespace-nowrap">{k.live}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <a
            href="/#pricing"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary reveal"
          >
            {t("Try the interactive price calculator")}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Review rates */}
      <section id="review-rates" className="py-16 md:py-24 bg-[#f7faf9] scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="max-w-xl mb-10 reveal">
            <p className="text-sm font-medium text-primary/90">{t("Rate Card")}</p>
            <h2 className="mt-3 text-3xl md:text-[42px] font-bold text-foreground">{t("Shopee / Lazada Reviews")}</h2>
            <p className="mt-3 text-muted-foreground">
              {t("Shopee & Lazada review packages from real, verified buyers. THB per review.")}
            </p>
          </div>
          <div className="reveal overflow-x-auto rounded-2xl border border-border">
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
                {REVIEW_ROWS_TABLE.map((r) => (
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
          <p className="mt-6 text-xs text-muted-foreground reveal font-medium">
            {t("Note: Management fee (10%) is not included in any prices above. All prices exclude VAT. Final invoice will include applicable taxes, fees, and management charges.")}
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="max-w-xl mb-12 reveal">
            <p className="text-sm font-medium text-primary/90">{t("How It Works")}</p>
            <h2 className="mt-3 text-3xl md:text-[42px] font-bold text-foreground">{t("From brief to results in four steps")}</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {PROCESS.map((s) => (
              <div key={s.step} className="reveal bg-[#f7faf9] border border-border rounded-3xl p-6">
                <span className="text-xs font-semibold text-primary/70">{s.step}</span>
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center my-4">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground">{t(s.title)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(s.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#00171F]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-[42px] font-bold text-white reveal">
            {t("Ready to scale with real creators?")}
          </h2>
          <p className="mt-4 text-white/60 reveal">
            {t("Tell us your budget and goals — we'll come back with a rate-locked proposal within 48 hours.")}
          </p>
          <a
            href="/contact"
            className="reveal mt-8 inline-flex items-center gap-2 rounded-[9px] bg-primary text-[#3d3d3d] font-semibold px-6 py-3 text-sm hover-lift"
          >
            {t("Get a Firm Quote")}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <NCFooter />
      <NCFloatingCTA />
    </div>
  )
}
