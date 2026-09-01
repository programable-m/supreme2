import { FOOTER_LINKS } from '../data/nav'
import { SOCIAL_LINKS } from '../data/contact'
import ImageAsset from './ImageAsset'
import { InstagramIcon, TelegramIcon, WhatsappIcon } from './icons/Icon'

const SOCIAL_ICONS: Record<string, typeof TelegramIcon> = {
  Telegram: TelegramIcon,
  WhatsApp: WhatsappIcon,
  Instagram: InstagramIcon,
}

export default function Footer() {
  return (
    <footer className="border-t border-ink-border bg-ink-soft">
      <div className="container-page flex flex-col gap-10 py-14">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <a href="#top" className="flex items-center gap-2" aria-label="Taswe9 الرئيسية">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand font-black text-ink">
              T
            </span>
            <span className="text-xl font-extrabold tracking-tight text-paper">
              TASWE<span className="text-brand">9</span>
            </span>
          </a>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-paper-muted transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href }) => {
              const Icon = SOCIAL_ICONS[label]
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-border text-paper-muted transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-ink-border pt-8 text-sm text-paper-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} TASWE9. جميع الحقوق محفوظة.</p>
          <p>بنيت خصيصاً للنمو ومضاعفة المبيعات عبر الإنترنت.</p>
          <a href="#top" className="font-semibold text-paper transition-colors hover:text-brand">
            العودة للأعلى ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

