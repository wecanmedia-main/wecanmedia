import { useState } from "react"
import { Linkedin, MessageCircle } from "lucide-react"
import { useTranslation } from 'react-i18next'

export function NCFooter() {
  const { t } = useTranslation()
  const [email, setEmail] = useState("")
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#00171F] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1.3fr_1fr_1.2fr] gap-10">
          <div>
            <img
              src="/assets/wecan-logo.webp"
              alt={t("WeCan Media")}
              className="h-9 w-auto mb-4"
            />
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {t("Seeding, KOL/affiliate campaigns and verified e-commerce reviews — run at enterprise scale, with transparent rate cards and full reporting.")}
            </p>
            <p className="mt-5 text-xs text-white/50">{t("Follow us on:")}</p>
            <div className="mt-3 flex gap-3">
              <a
                href="https://lin.ee/67M9LzF"
                target="_blank"
                rel="noreferrer"
                aria-label={t("LINE")}
                className="text-white/60 hover:text-primary transition-colors"
              >
                <img src="/assets/line-sticky-icon.webp" alt={t("LINE")} className="w-4 h-4" />
              </a>
              <a
                href="https://th.linkedin.com/company/wecan-media-thailand?"
                target="_blank"
                rel="noreferrer"
                aria-label={t("LinkedIn")}
                className="text-white/60 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide text-white/50 uppercase">{t("Main Pages")}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/" className="text-white/70 hover:text-primary transition-colors">{t("Home")}</a></li>
              <li><a href="/services" className="text-white/70 hover:text-primary transition-colors">{t("Services")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide text-white/50 uppercase">{t("Contact Info")}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/contact" className="text-white/70 hover:text-primary transition-colors">{t("Contact Us")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide text-white/50 uppercase">{t("Subscribe To Our Newsletter")}</h4>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex rounded-[9px] overflow-hidden border border-white/20"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("Your email")}
                className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-[#3d3d3d] text-sm font-semibold px-4 py-2 shrink-0"
              >
                {t("Join")}
              </button>
            </form>
            <p className="mt-2 text-[11px] text-white/40">
              {t("By signing up you agree to our Terms of Use")}
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 text-xs text-white/40 text-center">
          © {year} {t("WeCan Media. All rights reserved.")}
        </div>
      </div>
    </footer>
  )
}

export default NCFooter