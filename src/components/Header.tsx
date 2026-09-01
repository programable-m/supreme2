import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/nav'
import { ChevronDownIcon, MenuIcon, MoonIcon, SearchIcon } from './icons/Icon'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-ink-border' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2" aria-label="Taswe9 الرئيسية">
          {/* Logo mark */}
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand font-black text-ink">
              T
            </span>
            <span className="text-xl font-extrabold tracking-tight text-paper">
              TASWE<span className="text-brand">9</span>
            </span>
          </div>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="group relative py-3">
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-sm font-semibold text-paper transition-colors hover:text-brand"
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDownIcon className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-20 w-72 -translate-x-1/2 translate-y-1 rounded-2xl border border-ink-border bg-ink-elevated p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      aria-current={child.current ? 'page' : undefined}
                      className={`block rounded-xl px-4 py-2.5 text-sm transition-colors hover:bg-ink-surface hover:text-brand ${
                        child.current ? 'text-brand' : 'text-paper-muted'
                      }`}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-paper transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="تبديل المظهر"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-ink-border text-paper transition-colors hover:border-brand hover:text-brand sm:flex"
          >
            <MoonIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="بحث"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-ink-border text-paper transition-colors hover:border-brand hover:text-brand sm:flex"
          >
            <SearchIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="فتح القائمة"
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-border text-paper lg:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
