import Reveal from '../components/Reveal'
import { CONTACT } from '../data/contact'

export default function FinalCTA() {
  return (
    <section id="contact" className="section-y">
      <div className="container-page">
        <Reveal className="card flex flex-col items-center gap-6 px-8 py-16 text-center sm:px-16">
          <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl">
            هل لديك مشروع طموح؟ دعنا نبدأ ببنائه الآن!
          </h2>
          <a
            href={CONTACT.emailHref}
            className="text-lg font-semibold text-brand transition-colors hover:text-brand-light sm:text-xl"
            dir="ltr"
          >
            {CONTACT.email}
          </a>
          <a href={CONTACT.whatsappHref} className="btn-primary mt-2">
            ابدأ المحادثة عبر واتساب
          </a>
        </Reveal>
      </div>
    </section>
  )
}

