import { CONTACT } from '../data/contact'
import { MailIcon, PhoneIcon, WhatsappIcon } from './icons/Icon'

/**
 * The live page repeats the WhatsApp / phone / email links after several
 * sections in a row — the signature of an Elementor "floating buttons"
 * widget that stays on screen rather than three separately-placed groups.
 * Reconstructed here as one fixed, persistent widget.
 */
export default function FloatingContact() {
  const items = [
    { label: 'استشارة فورية عبر واتساب', href: CONTACT.whatsappHref, Icon: WhatsappIcon },
    { label: 'اتصل بنا الآن', href: CONTACT.phoneHref, Icon: PhoneIcon },
    { label: 'راسل فريق التصميم بالبريد', href: CONTACT.emailHref, Icon: MailIcon },
  ]

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden flex-col gap-3 sm:flex">
      {items.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-border bg-ink-elevated text-paper shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  )
}
