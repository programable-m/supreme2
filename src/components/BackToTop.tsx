import { useEffect, useState } from 'react'
import { ArrowUpIcon } from './icons/Icon'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#top"
      aria-label="العودة للأعلى"
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-ink-border bg-ink-elevated text-paper shadow-lg transition-all duration-300 hover:border-brand hover:text-brand ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUpIcon className="h-5 w-5" />
      <span className="sr-only">العودة للأعلى</span>
    </a>
  )
}
