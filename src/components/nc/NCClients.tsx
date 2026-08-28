import { useTranslation } from 'react-i18next'
const LOGOS = [
  "/assets/client-jollyhair.webp",
  "/assets/client-glory.webp",
  "/assets/client-major.webp",
  "/assets/client-powerbuy.webp",
  "/assets/client-ormana.webp",
  "/assets/client-gousto.webp",
]

export function NCClients() {
  const { t } = useTranslation()
  return (
    <section className="bg-white py-10 md:py-14 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 reveal">
          {t("Our clients & brands we grow")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12 md:gap-y-6 reveal">
          {LOGOS.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={t("Company Logo")}
              className={`w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${
                src.includes("jollyhair") ? "h-16 md:h-20" : "h-6 md:h-8"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NCClients