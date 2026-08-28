import { useState } from "react"
import { NCHeader } from "@/components/nc/NCHeader"
import { NCFooter } from "@/components/nc/NCFooter"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useTranslation } from 'react-i18next'

const SERVICES = ["Seeding Campaign", "KOL / Affiliate Campaign", "E-Commerce Reviews", "Other / Not Sure"]

const Contact = () => {
  const { t } = useTranslation()
  const { toast } = useToast()
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    service: SERVICES[0],
    volume: "",
    message: "",
  })

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New enquiry: ${form.service} — ${form.company || form.name}`)
    const body = encodeURIComponent(
      `Company: ${form.company}\nContact person: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nEstimated volume: ${form.volume}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:hello@wecanmedia.co.th?subject=${subject}&body=${body}`
    toast({ title: "Opening your email app…", description: "Send the message and we'll get back to you shortly." })
  }

  return (
    <div className="min-h-screen bg-white">
      <NCHeader />
      <section className="bg-[#00171F] pt-[140px] pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-sm font-medium text-primary/90">{t("Get In Touch")}</p>
          <h1 className="mt-3 text-3xl md:text-[42px] font-bold text-white max-w-xl">
            {t("Let's scope your seeding, KOL or review program")}
          </h1>
          <p className="mt-4 text-white/70 max-w-xl">
            {t("Tell us about your brand and volume, and we'll come back with a tailored rate proposal.")}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[1fr_1.3fr] gap-12">
          <div className="reveal space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t("Email")}</p>
                <p className="text-sm text-muted-foreground">{t("hello@wecanmedia.co.th")}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t("Phone")}</p>
                <p className="text-sm text-muted-foreground">02 026 1613</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t("Office")}</p>
                <p className="text-sm text-muted-foreground">{t("20F UBC 591 Sukhumvit 33 Alley, Khlong Tan Nuea, Watthana, Khlong Tan Nuea, Vadhana, Bangkok 10110")}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal bg-card border border-border rounded-3xl p-6 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground">{t("Company Name")}</label>
                <input
                  required
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">{t("Contact Person")}</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">{t("Email")}</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">{t("Phone")}</label>
                <input
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">{t("Service Interested In")}</label>
                <select
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  {SERVICES.map((s) => (
                    <option key={t(s)} value={t(s)}>{t(s)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">{t("Estimated Volume")}</label>
                <input
                  placeholder={t("e.g. 2,000 seeding posts")}
                  value={form.volume}
                  onChange={(e) => update("volume", e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">{t("Message")}</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-[9px] bg-primary text-[#3d3d3d] font-semibold px-7 py-3.5 hover-lift"
            >
              {t("Send Enquiry")}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      <NCFooter />
    </div>
  )
}

export default Contact