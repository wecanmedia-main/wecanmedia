import { useEffect } from "react"
import { useTranslation } from "react-i18next"

// Keeps the browser tab title + meta description in sync with the language
// toggle. Built from strings already in the translation catalog (used
// elsewhere on the site) so both English and Thai versions are always
// correct and in sync with the rest of the copy.
export function SeoMeta() {
  const { t, i18n } = useTranslation()

  const title = `${t("WeCan Media")} | ${t("Seeding, KOL/affiliate campaigns and verified reviews — built for enterprise brands.")}`
  const description = t("Seeding, KOL/affiliate campaigns and verified e-commerce reviews — run at enterprise scale, with transparent rate cards and full reporting.")

  useEffect(() => {
    document.title = title

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute(attr, value)
    }

    setMeta('meta[name="description"]', "content", description)
    setMeta('meta[property="og:title"]', "content", title)
    setMeta('meta[property="og:description"]', "content", description)
  }, [i18n.language, title, description])

  return null
}

export default SeoMeta
