import { useState } from 'react'
import { NAV_LINKS } from '../data/nav'
import { CONTACT } from '../data/contact'
import { ChevronDownIcon, CloseIcon, MailIcon, WhatsappIcon } from './icons/Icon'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden ${open ? '' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-ink-elevated shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-ink-border px-5">
          <span className="text-sm font-semibold text-paper-muted">القائمة</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق القائمة"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-border text-paper"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setExpanded(expanded === link.label ? null : link.label)}
                      aria-expanded={expanded === link.label}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-right text-base font-semibold text-paper"
                    >
                      <span>{link.label}</span>
                      <ChevronDownIcon
                        className={`h-4 w-4 transition-transform ${expanded === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {expanded === link.label && (
                      <ul className="mb-2 mr-3 flex flex-col gap-1 border-r border-ink-border pr-4">
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              onClick={onClose}
                              className={`block rounded-lg px-3 py-2 text-sm ${
                                child.current ? 'text-brand' : 'text-paper-muted'
                              }`}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="block rounded-xl px-3 py-3 text-base font-semibold text-paper"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 border-t border-ink-border p-5">
          <a href={CONTACT.whatsappHref} className="btn-primary w-full">
            <WhatsappIcon className="h-4 w-4" />
            تواصل عبر واتساب
          </a>
          <a href={CONTACT.emailHref} className="btn-outline w-full text-xs">
            <MailIcon className="h-4 w-4" />
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  )
}
