import { ArrowRight } from "lucide-react"
import { useTranslation } from 'react-i18next'

const POSTS = [
  {
    title: "Influency.me Pricing and Review 2026",
    excerpt:
      "Influency.me pricing isn't published anywhere — not for the platform, not for the agency, not for the casting arm. Here's what we could actually verify, what the one disclosed pricing model tells you, and when a full-service agency is the better call.",
    img: "https://cdn.chantan.one/scraped-images/f057e4c285dbe61b.webp",
  },
  {
    title: "Tolt Pricing and Review 2026",
    excerpt:
      "Tolt pricing runs $69 to $199 a month with no commission on affiliate revenue — here's what that actually costs once payout fees and revenue bands are factored in, and the one thing Tolt doesn't do at any price.",
    img: "https://cdn.chantan.one/scraped-images/48a0f9e8082c54aa.webp",
  },
]

export function NCBlog() {
  const { t } = useTranslation()
  return (
    <section id="blog" className="bg-[#f6f6f6] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 reveal">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-[42px] font-bold text-foreground">{t("Our Blog")}</h2>
            <p className="mt-3 text-muted-foreground">
              {t("Stay ahead with the latest insights in the influencer marketing industry.")}
            </p>
          </div>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 rounded-[9px] bg-primary text-white font-semibold px-6 py-3 hover-lift"
          >
            {t("Explore Our Blog")}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {POSTS.map((p) => (
            <div key={p.title} className="reveal bg-white rounded-2xl overflow-hidden border border-border">
              <img src={p.img} alt={t(p.title)} className="w-full h-56 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <img
                    src="https://cdn.chantan.one/scraped-images/73ef1afae04c8a1c.webp"
                    alt={t("María Vincenzini")}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span>{t("María Vincenzini")}</span>
                  <span>·</span>
                  <span>{t("August 7, 2026")}</span>
                  <span>·</span>
                  <span>{t("5 min read")}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{t(p.title)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(p.excerpt)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NCBlog