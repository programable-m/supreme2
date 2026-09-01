import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { PRICING_PLANS, OFFER_ITEMS } from '../data/offer'
import { WhatsappIcon } from '../components/icons/Icon'

export default function PricingOffer() {
  return (
    <section id="pricing" className="section-y bg-ink-soft">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            className="max-w-2xl"
            title="باقات الأسعار والتجهيز المخصصة للنمو والمبيعات"
            subtitle="اختر الباقة المناسبة لحجم نشاطك التجاري، مع ضمان كفاءة الأداء وسرعة التنفيذ والتجهيز الكامل للبيع."
          />
        </Reveal>

        {/* 3 Pricing Plans */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRICING_PLANS.map((plan, i) => {
            const planWhatsappUrl = `https://wa.me/212779063241?text=${encodeURIComponent(plan.whatsappText)}`
            return (
              <Reveal
                key={plan.title}
                delay={i * 80}
                className={`card relative flex flex-col justify-between p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'border-brand shadow-glow ring-1 ring-brand/50 bg-ink-elevated'
                    : 'bg-ink-surface/70 hover:border-brand/50'
                }`}
              >
                {plan.popular && plan.popularBadge && (
                  <span className="absolute -top-3.5 right-6 rounded-full bg-brand px-4 py-1 text-xs font-black text-ink shadow-md">
                    {plan.popularBadge}
                  </span>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-paper">{plan.title}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-brand sm:text-5xl">{plan.price}</span>
                    <span className="text-base font-bold text-paper-muted">{plan.currency}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-paper-muted min-h-[48px]">
                    {plan.description}
                  </p>

                  <div className="my-6 h-px bg-ink-border" />

                  <ul className="space-y-3 text-sm text-paper-muted">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                          <svg viewBox="0 0 16 16" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M3 8.5L6.5 12L13 4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href={planWhatsappUrl}
                    className={`w-full justify-center ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
                  >
                    <WhatsappIcon className="h-4 w-4" />
                    {plan.ctaText}
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* All-Inclusive Launch Inclusions */}
        <div className="mt-20">
          <Reveal>
            <div className="text-center max-w-xl mx-auto mb-10">
              <h3 className="text-2xl font-bold text-paper">ما الذي نضمنه لك في كل مشروع:</h3>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {OFFER_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 50} className="card h-full p-7">
                <h4 className="text-lg font-bold leading-snug text-paper">{item.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-paper-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

