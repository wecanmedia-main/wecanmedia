import { useTranslation } from 'react-i18next'
const SERVICES = [
  {
    title: "Seeding Campaigns",
    desc: "Product seeding across every major platform, including closed Facebook groups. Standard and bulk rates available for photo posts, text posts, and comments — scaled from single campaigns to 1,500+ unit programs.",
    tags: ["Photo Seeding Posts", "Text Seeding Posts", "Seeding Comments", "Bulk Rate Pricing"],
    img: "https://cdn.chantan.one/scraped-images/3a717ca744699760.jpg",
    bg: "bg-[#134e42]",
    tagBg: "bg-black/25",
  },
  {
    title: "KOL & Affiliate Campaigns",
    desc: "End-to-end management of paid influencer and affiliate/gifting collaborations — creator sourcing, briefing, content approval, logistics, and payout, matched to KOL tiers by follower size.",
    tags: ["Creator Sourcing by Tier", "Creative Briefs", "Content Approval", "Payout Management"],
    img: "https://cdn.chantan.one/scraped-images/857ed1e77a8b97ca.jpg",
    bg: "bg-[#2a2a83]",
    tagBg: "bg-black/25",
  },
  {
    title: "Verified E-Commerce Reviews",
    desc: "Text, photo, and star-rating reviews delivered on shopping apps and e-commerce platforms in bulk packs — built for product launches that need credible social proof fast.",
    tags: ["Pack A: 300+ Reviews", "Pack B: 500+ Reviews", "Text + Photo + Rating"],
    img: "https://cdn.chantan.one/scraped-images/0da39c30baa5e038.jpg",
    bg: "bg-[#134e42]",
    tagBg: "bg-black/25",
  },
]

export function NCServices() {
  const { t } = useTranslation()
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-xl mb-12 reveal">
          <h2 className="text-3xl md:text-[42px] font-bold text-foreground">{t("Our Services")}</h2>
          <p className="mt-3 text-muted-foreground">
            {t("Seeding, KOL/affiliate campaigns and verified reviews — built for enterprise brands.")}
          </p>
        </div>

        <div className="space-y-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className={`reveal ${s.bg} rounded-3xl overflow-hidden grid md:grid-cols-2 gap-8 items-center p-8 md:p-12`}
            >
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-white">{t(s.title)}</h3>
                <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed">{t(s.desc)}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-medium text-white ${s.tagBg} rounded-full px-3 py-1.5`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <img
                src={s.img}
                alt={t(s.title)}
                className="w-full h-56 md:h-72 object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NCServices
