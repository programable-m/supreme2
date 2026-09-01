import Reveal from '../components/Reveal'
import ImageAsset from '../components/ImageAsset'
import { PORTFOLIO_ITEMS } from '../data/portfolio'

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-y">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">نتائج حقيقية ونمو متسارع</p>
            <h2 className="text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
              مشاريع ومتاجر إلكترونية نفخر بإنجازها
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paper-muted sm:text-lg">
              تصاميم مخصصة للتحويل وتجربة مستخدم مدروسة بدقة لتحقيق أعلى مبيعات.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <Reveal key={item.name} delay={i * 50}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
                className="card group block overflow-hidden hover:border-brand"
              >
                <div className="overflow-hidden bg-ink-soft">
                  <ImageAsset
                    src={item.image}
                    alt={`${item.name} — مشروع من Taswe9`}
                    label={item.image.split('/').pop()}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-center justify-center gap-3 px-4 py-5 text-center">
                  <span className="h-px flex-1 bg-brand/40" />
                  <span className="text-sm font-bold text-paper transition-colors group-hover:text-brand" dir="ltr">
                    {item.name}
                  </span>
                  <span className="h-px flex-1 bg-brand/40" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
