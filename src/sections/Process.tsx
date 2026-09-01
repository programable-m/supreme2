import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { PROCESS_STEPS } from '../data/process'

export default function Process() {
  return (
    <section id="process" className="section-y bg-ink-soft">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            className="max-w-2xl"
            title="خطوات عمل مرنة وسريعة من الفكرة إلى الإطلاق"
            subtitle="منهجية دقيقة ومدروسة لتسليم موقعك بأعلى جودة وفي أقل من 3 أيام."
          />
        </Reveal>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 70} className="card relative p-7 bg-ink-surface/70 hover:border-brand/50">
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/40 bg-brand/10 text-lg font-black text-brand">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-paper">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper-muted">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

