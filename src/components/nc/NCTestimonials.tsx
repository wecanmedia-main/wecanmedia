import { useTranslation } from 'react-i18next'
const TESTIMONIALS = [
  {
    tag: "Entertainment | Tech",
    title: "Revolutionizing Entertainment",
    subtitle:
      "AI-Powered Interactive Experiences | Transforming entertainment with intelligent, immersive, and data-driven gaming solutions",
    quote:
      "NC Media didn't just connect us with influencers—they curated long-term partners who genuinely love our products. Their ability to blend strategy with creativity helped us double our ROI in just two months.",
    author: "Immersive Gamebox",
    img: "https://cdn.chantan.one/scraped-images/e15fb970822a2148.jpg",
  },
  {
    tag: "Lifestyle | Streetwear",
    title: "From Local to Lifestyle Brand",
    subtitle:
      "Blending New York culture with contemporary fashion, built for creators and communities worldwide",
    quote:
      "NC Media has been the partner we were searching for! They make it simple to connect with the right influencers who truly represent our brand. We love how they handle everything from campaign setup to affiliate content and payouts. Their support has saved us hours and helped us scale faster — highly recommended!",
    author: "NY State of Mind",
    img: "https://cdn.chantan.one/scraped-images/3a0f86b69fece1a3.jpg",
  },
  {
    tag: "Clean Hair Care | Lifestyle",
    title: "Elevating Hair Care",
    subtitle:
      "Fun, effective formulas for all hair types — clean ingredients, professional roots, and bold personality",
    quote:
      "NC Media completely changed how we manage influencer campaigns. They helped us find creators who really resonate with our vibe, handled everything from discovery to payouts, and let us scale without sacrificing the Allooys energy. Highly recommend!",
    author: "allyoos",
    img: "https://cdn.chantan.one/scraped-images/5c2a1f4c3e85fdc0.jpg",
  },
]

export function NCTestimonials() {
  const { t } = useTranslation()
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-xl mb-12 reveal">
          <h2 className="text-3xl md:text-[42px] font-bold text-foreground">{t("What People Say")}</h2>
          <p className="mt-3 text-muted-foreground">{t("Discover what our clients say about us!")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div key={item.author} className="reveal rounded-2xl border border-border overflow-hidden">
              <img src={item.img} alt={t(item.author)} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-xs font-medium text-primary">{item.tag}</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{t(item.title)}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{t(item.subtitle)}</p>
                <p className="mt-4 text-sm text-foreground/80 leading-relaxed">"{t(item.quote)}"</p>
                <p className="mt-4 text-sm font-semibold text-foreground">— {t(item.author)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NCTestimonials