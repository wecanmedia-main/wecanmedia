import { useEffect } from "react"
import { useTranslation } from "react-i18next"

// Keeps the browser tab title + meta description in sync with the language
// toggle. These live in the document head (outside the translated React
// tree), so we push the translated strings in as a side effect.
export function SeoMeta() {
  const { t, i18n } = useTranslation()

  const title = t("WeCan Media | Seeding, KOL & E-Commerce Review Campaigns in Thailand")
  const description = t(
    "Enterprise-scale seeding, KOL/affiliate campaigns and verified e-commerce reviews for brands in Thailand — transparent pricing, real creators, full reporting."
  )

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