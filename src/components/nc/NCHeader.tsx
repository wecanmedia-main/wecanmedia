import { useEffect, useState } from "react"
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react"
import { useTranslation } from 'react-i18next'
import { LanguageToggle } from "../LanguageToggle"

const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
]

export function NCHeader() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Sticky LINE Icon */}
      <a
        href="https://lin.ee/67M9LzF"
        target="_blank"
        rel="noreferrer"
        aria-label={t("LINE")}
        className="fixed right-6 bottom-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      >
        <img src="/assets/line-sticky-icon.webp" alt={t("LINE")} className="w-6 h-6" />
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#00171F]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 h-16 md:h-20 flex items-center justify-between gap-3">
        <a href="/" className="flex items-center shrink-0">
          <img
            src="/assets/wecan-logo.webp"
            alt={t("WeCan Media")}
            className="h-7 sm:h-8 md:h-7 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/90 hover:text-primary transition-colors"
            >
              {t(item.label)}
            </a>
          ))}
        </nav>
        <LanguageToggle />

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[9px] bg-primary text-[#3d3d3d] font-semibold px-5 py-2.5 text-sm hover-lift"
          >
            {t("Let's Connect!")}
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-[9px] bg-[#6bbfad]/20 text-white p-2.5"
            aria-label={t("Menu")}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden rounded-[9px] bg-white/10 text-white p-2"
          aria-label={t("Menu")}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

        {open && (
        <div className="md:hidden bg-[#00171F] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white/90 text-sm font-medium"
            >
              {t(item.label)}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-[9px] bg-primary text-[#3d3d3d] font-semibold px-5 py-2.5 text-sm flex-1"
            >
              {t("Let's Connect!")} <ArrowRight className="w-4 h-4" />
            </a>
            <div className="ml-2">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  )
}

export default NCHeader