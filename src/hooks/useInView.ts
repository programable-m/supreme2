import { useEffect, useRef, useState } from 'react'

/**
 * Fires once when the referenced element scrolls into view, then
 * disconnects. Used to drive the section-level fade-up reveal that
 * Elementor sites of this kind almost always ship (entrance animations are
 * a built-in Elementor feature) — applied once per section on entrance,
 * not per child element, to keep the motion restrained.
 */
export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
