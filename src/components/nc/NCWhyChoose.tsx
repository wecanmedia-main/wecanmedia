import { ArrowRight, X, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

export function NCWhyChoose() {
  const { t } = useTranslation()
  return (
    <section className="relative bg-[#00171F] py-16 md:py-24 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(500px circle at 80% 30%, hsl(167 40% 40% / 0.25), transparent 60%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <p className="text-sm font-medium text-primary/90">{t("Why Choose Us?")}</p>
          <h2 className="mt-3 text-3xl md:text-[42px] font-bold text-white">
            {t("Influencer Marketing,")} <span className="text-primary">{t("But Easy")}</span>
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            {t("We turn influencer marketing into a growth channel - driven by data, powered by creativity, and built for scale.")}
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[9px] bg-primary text-[#3d3d3d] font-semibold px-7 py-3.5 hover-lift"
            >
              {t("Book a Meeting")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="reveal relative min-h-[360px] flex items-center justify-center">
          {/* animated background rings */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 blur-2xl"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute w-40 h-40 rounded-full border border-primary/30"
          />
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute w-64 h-64 rounded-full border border-primary/15"
          />

          {/* orbiting icon */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-2 right-6 md:right-10 w-12 h-12 rounded-2xl bg-primary/20 backdrop-blur-sm flex items-center justify-center"
          >
            <Sparkles className="w-5 h-5 text-primary" />
          </motion.div>

          {/* floating call-to-action card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-white rounded-2xl shadow-2xl px-6 py-5 w-[280px] md:w-[320px]"
            >
              <span className="absolute top-3 right-3 text-neutral-300">
                <X className="w-4 h-4" />
              </span>
              <p className="text-lg font-bold text-neutral-900 leading-snug pr-4">
                {t("Scale your brand with top creators")}
              </p>
              <a
                href="/contact"
                className="mt-3 inline-flex items-center gap-1.5 text-primary font-semibold text-sm underline underline-offset-2 hover:text-primary/80 transition-colors"
              >
                {t("Book a call")}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NCWhyChoose
