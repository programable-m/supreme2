import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import { SERVICE_ITEMS, ALL_SERVICES_LIST } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="section-y">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">خدماتنا وحلولنا التقنية</h2>
            <p className="mt-5 text-base leading-relaxed text-paper-muted sm:text-lg">
              نجمع بين أحدث التقنيات والتصميم العصري الموجه للبيع لتقديم مواقع ومتاجر رقمية فائقة السرعة، متوافقة مع محركات البحث ومجهزة لأعلى عائد إعلاني.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_ITEMS.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>

        {/* Extended Services Capabilities List */}
        <Reveal delay={200} className="mt-12 rounded-3xl border border-ink-border bg-ink-surface/50 p-8">
          <h3 className="text-lg font-bold text-paper mb-4">نطاق الخدمات والتكاملات المتاحة:</h3>
          <div className="flex flex-wrap gap-2.5">
            {ALL_SERVICES_LIST.map((serviceName) => (
              <span
                key={serviceName}
                className="inline-flex items-center rounded-xl border border-ink-border bg-ink-elevated px-4 py-2 text-xs font-semibold text-paper-muted hover:border-brand hover:text-brand transition-colors"
              >
                {serviceName}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

