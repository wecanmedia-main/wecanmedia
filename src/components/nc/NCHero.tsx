import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Eye, BarChart3 } from "lucide-react"
import { useTranslation } from 'react-i18next'

export function NCHero() {
  const { t } = useTranslation()
  return (
    <section id="hero" className="relative bg-[#00171F] pt-[140px] pb-16 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(600px circle at 15% 20%, hsl(167 40% 40% / 0.25), transparent 60%), radial-gradient(500px circle at 85% 60%, hsl(167 40% 30% / 0.2), transparent 60%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-sm md:text-base font-medium text-primary/90 tracking-wide"
          >
            {t("We help brands lead - not just show up.")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="mt-4 text-[42px] md:text-[56px] leading-[1.05] font-bold text-white"
          >
            {t("Influence That Performs.")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
            className="mt-5 text-base md:text-lg text-white/70 max-w-xl"
          >
            <strong className="font-semibold text-white/90">
              {t("WeCan Media runs seeding, KOL and verified review programs")}
            </strong>{" "}
            {t("at scale — product seeding, paid & affiliate creator campaigns, and rated reviews on shopping apps and e-commerce, all with transparent rate cards.")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
            className="mt-8"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-[9px] bg-primary text-[#3d3d3d] font-semibold px-7 py-3.5 hover-lift"
            >
              {t("Book a 1:1 Meeting")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto max-w-sm md:max-w-none"
        >
          <div
            className="pointer-events-none absolute -inset-6 -z-10 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(hsl(167 40% 55% / 0.5) 2px, transparent 2px)",
              backgroundSize: "14px 14px",
              maskImage: "radial-gradient(circle at 70% 30%, black 40%, transparent 75%)",
            }}
          />
          <img
            src="/assets/nc-hero-photo.webp"
            alt={t("Creator content example")}
            className="w-full rounded-2xl object-cover shadow-2xl"
          />

          <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-700" />
            <span className="text-xs font-semibold text-foreground">{t("ROI: +125%")}</span>
          </div>

          <div className="absolute bottom-16 -left-6 bg-blue-900 text-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span className="text-xs font-semibold">{t("IMP: 152.3K")}</span>
          </div>

          <div className="absolute bottom-4 right-2 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-semibold text-foreground">{t("CTR: 3.1%")}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NCHero
