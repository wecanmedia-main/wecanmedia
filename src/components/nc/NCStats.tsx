import { ArrowRight, Youtube, Music2, Instagram, Facebook } from "lucide-react"
import { useTranslation } from 'react-i18next'

export function NCStats() {
  const { t } = useTranslation()
  return (
    <section id="about" className="bg-[#00171F] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 reveal">
            <div className="bg-white rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">{t("8X+")}</div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground">{t("Avg. ROAS Increase")}</div>
            </div>
            <div className="bg-white rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">-52%</div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground">{t("Avg. CAC Reduction")}</div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden flex flex-col">
              <div className="p-4 sm:p-6 pb-2">
                <div className="text-3xl md:text-4xl font-bold text-foreground">{t("120K+")}</div>
                <div className="mt-2 text-xs md:text-sm text-muted-foreground">{t("UGC Collected")}</div>
              </div>
              <img
                src="/assets/nc-stats-phone.webp"
                alt={t("UGC content example")}
                className="w-full h-40 object-cover mt-2"
              />
            </div>

            <div className="rounded-2xl overflow-hidden flex flex-col">
              <div className="h-32 md:h-36 bg-cover bg-center" style={{ backgroundImage: "url('/assets/nc-hero-photo.webp')" }} />
              <div className="bg-white p-4 sm:p-6 flex-1">
                <div className="text-3xl md:text-4xl font-bold text-foreground">{t("50K+")}</div>
                <div className="mt-2 text-xs md:text-sm text-muted-foreground flex items-center justify-between gap-2">
                  <span>{t("Influencer Partnerships")}</span>
                  <span className="flex -space-x-1 shrink-0">
                    <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[9px] font-bold ring-2 ring-white">N</span>
                    <span className="w-5 h-5 rounded-full bg-red-700 flex items-center justify-center ring-2 ring-white">
                      <Youtube className="w-2.5 h-2.5 text-white" />
                    </span>
                    <span className="w-5 h-5 rounded-full bg-blue-800 flex items-center justify-center ring-2 ring-white">
                      <Facebook className="w-2.5 h-2.5 text-white" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <p className="text-sm font-medium text-primary/90">{t("Technology and Top Talent Combined")}</p>
            <h2 className="mt-3 text-3xl md:text-[42px] leading-tight font-bold text-white">
              {t("Elevate Your Brand with Influencer Marketing*")}
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              {t("With over 50K influencer partnerships and 120K+ high-quality UGC created in 8 years, we're the perfect partner to help you succeed with Influencer Marketing!")}
            </p>
            <p className="mt-6 text-xs uppercase tracking-wide text-white/50">{t("Turn Influence Into Growth")}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[9px] bg-primary text-[#3d3d3d] font-semibold px-6 py-3 hover-lift"
              >
                {t("Contact Us")}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-[9px] border border-white/30 text-white font-semibold px-6 py-3 hover:bg-white/10 transition-colors"
              >
                {t("Our Services")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NCStats
