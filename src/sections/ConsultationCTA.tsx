import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { CONTACT } from '../data/contact'
import { MailIcon, PhoneIcon, WhatsappIcon } from '../components/icons/Icon'

export default function ConsultationCTA() {
  return (
    <section id="consultation" className="section-y border-y border-ink-border bg-ink-soft">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            className="max-w-3xl"
            title="لسنا مجرد شركة تصميم عادية، نحن شريكك الرقمي لمضاعفة الأرباح!"
            subtitle="استشارة مجانية متاحة لتحديد أفضل هيكل لمشروعك، متجرك، ومسار التحويل الأنسب لحملاتك الإعلانية مع فريق Taswe9."
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={CONTACT.emailHref} className="btn-outline">
              <MailIcon className="h-4 w-4" />
              راسلنا بالبريد
            </a>
            <a href={CONTACT.whatsappHref} className="btn-primary">
              <WhatsappIcon className="h-4 w-4" />
              استشارة فورية عبر واتساب
            </a>
            <a href={CONTACT.phoneHref} className="btn-outline">
              <PhoneIcon className="h-4 w-4" />
              اتصل بنا الآن!
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

