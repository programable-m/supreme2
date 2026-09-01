import Reveal from '../components/Reveal'
import ImageAsset from '../components/ImageAsset'

export default function FirstImpression() {
  return (
    <section id="first-impression" className="section-y overflow-hidden">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="relative mx-auto aspect-square w-full max-w-md lg:order-2">
          {/* Decorative graphics */}
          <ImageAsset
            src="/assets/images/first-impression-pattern-01.webp"
            alt=""
            label="first-impression-pattern-01.webp"
            className="pointer-events-none absolute -left-6 -top-6 h-40 w-40 object-contain opacity-70"
          />
          <ImageAsset
            src="/assets/images/first-impression-pattern-02.webp"
            alt=""
            label="first-impression-pattern-02.webp"
            className="pointer-events-none absolute -bottom-8 -right-4 h-44 w-44 object-contain opacity-70"
          />

          <ImageAsset
            src="/assets/images/website-impression.webp"
            alt="A Taswe9 website shown as a strong first impression"
            label="website-impression.webp"
            className="relative z-10 aspect-square w-full rounded-3xl object-cover shadow-2xl"
          />
          <ImageAsset
            src="/assets/images/first-impression-02.webp"
            alt=""
            label="first-impression-02.webp"
            className="absolute -bottom-10 -left-10 z-20 hidden h-36 w-48 rounded-2xl border-4 border-ink object-cover shadow-xl sm:block"
          />
        </Reveal>

        <Reveal className="lg:order-1">
          <SectionHeadingLocal />
        </Reveal>
      </div>
    </section>
  )
}

function SectionHeadingLocal() {
  return (
    <div className="max-w-xl">
      <h2 className="text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
        موقعك الإلكتروني هو الانطباع الأول والأهم لعلامتك التجارية
      </h2>
      <p className="mt-6 text-base leading-relaxed text-paper-muted sm:text-lg">
        عندما يتعرف العميل على علامتك التجارية أو يرى إعلاناتك، فإن وجهته الأولى هي موقعك الإلكتروني. في ثوانٍ معدودة، يتشكل القرار إما بالشراء أو المغادرة. الموقع المتقن يبني الثقة والمصداقية، ويقنع الزائر بجودة ما تقدمه.
      </p>
      <p className="mt-4 text-base leading-relaxed text-paper-muted sm:text-lg">
        في Taswe9، نبتكر مواقع متكاملة تجمع بين التصميم العصري وسرعة التحميل وسلاسة الشراء، مع مراعاة أدق التفاصيل لتجربة مستخدم لا مثيل لها عبر الهواتف المحمولة وكافة الأجهزة.
      </p>
    </div>
  )
}
