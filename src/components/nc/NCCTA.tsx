import { ArrowRight } from "lucide-react"
import { useTranslation } from 'react-i18next'

export function NCCTA() {
  const { t } = useTranslation()
  return (
    <section className="relative bg-[#00171F] py-20 md:py-28 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(600px circle at 50% 0%, hsl(167 40% 40% / 0.3), transparent 65%)",
        }}
      />
      <div className="relative max-w-2xl mx-auto px-6 md:px-10 text-center reveal">
        <p className="text-sm md:text-base text-white/60">
          {t("We don't just run campaigns — we craft influencer strategies that drive real impact.")}
        </p>
        <h2 className="mt-4 text-3xl md:text-[42px] font-bold text-white">
          {t("Smarter Influencer Marketing Starts Here")}
        </h2>
        <div className="mt-8 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[9px] bg-primary text-[#3d3d3d] font-semibold px-7 py-3.5 hover-lift"
          >
            {t("Let's collaborate")}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default NCCTA