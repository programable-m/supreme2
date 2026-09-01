import Reveal from '../components/Reveal'

export default function GrowthSection() {
  return (
    <section id="growth" className="section-y bg-ink-soft">
      <div className="container-page">
        <Reveal>
          <h2 className="max-w-3xl text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
            تصميم جذاب. برمجة هندسية متينة. جاهز للنمو والتحويل.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-8 grid gap-8 text-base leading-relaxed text-paper-muted sm:text-lg lg:grid-cols-3 lg:gap-10">
          <p>
            موقعك الرقمي مبرمج ليكون متوافقاً تماماً مع كافة الهواتف والشاشات، وسريعاً جداً في التحميل، مع هيكل بصري واضح وتجربة تصفح تجعل العميل ينتقل للشراء دون تردد.
          </p>
          <p>
            لا نستخدم قوالب مستهلكة؛ نحن نحلل طبيعة منتجك وجمهورك المستهدف لنبني واجهة قوية تعزز ثقة الزائر وتبرز ريادة علامتك التجارية أمام المنافسين.
          </p>
          <p>
            تواصل مستمر وسريع عبر الواتساب والهاتف، مع التزام تام بمواعيد التسليم ودعم تقني لمساعدتك في إطلاق حملاتك الإعلانية بنجاح.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

