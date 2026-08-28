import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { useTranslation } from 'react-i18next'

export function NCFloatingCTA() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (dismissed || !visible) return null

  return (
    <div className="fixed bottom-5 right-5 z-40 max-w-[280px] bg-white rounded-2xl shadow-xl border border-border p-4 hidden sm:block">
      <button
        onClick={() => setDismissed(true)}
        aria-label={t("Dismiss")}
        className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
      >
        <X className="w-3.5 h-3.5" />
      </button>
      <p className="text-sm font-medium text-foreground pr-4">{t("Scale your brand with top creators")}</p>
      <a
        href="/contact"
        className="mt-2 inline-block text-sm text-primary underline underline-offset-2"
      >
        {t("Book a call")}
      </a>
    </div>
  )
}

export default NCFloatingCTA