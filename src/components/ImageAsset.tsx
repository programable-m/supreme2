import { useState } from 'react'

type ImageAssetProps = {
  src: string
  alt: string
  className?: string
  /** Shown inside the placeholder box before the real file exists. Defaults to the filename. */
  label?: string
  loading?: 'lazy' | 'eager'
}

/**
 * Drop-in <img> replacement used everywhere a real Taswe9 photo/graphic
 * belongs. It requests the real file from /public/assets/..., and if that
 * file hasn't been added yet (404), it swaps to a clearly-labelled
 * placeholder instead of a broken-image icon — so the layout, spacing and
 * proportions stay correct while you're still gathering assets.
 */
export default function ImageAsset({ src, alt, className = '', label, loading = 'lazy' }: ImageAssetProps) {
  const [failed, setFailed] = useState(false)
  const filename = src.split('/').pop() ?? src

  const baseUrl = (import.meta as unknown as { env?: { BASE_URL?: string } }).env?.BASE_URL || './'
  const resolvedSrc = src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')
    ? src
    : src.startsWith('/')
    ? `${baseUrl}${src.slice(1)}`
    : `${baseUrl}${src}`

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 border border-dashed border-ink-border bg-ink-soft text-center text-paper-muted ${className}`}
      >
        <svg viewBox="0 0 24 24" width={28} height={28} fill="none" stroke="currentColor" strokeWidth={1.4}>
          <rect x="3" y="4.5" width="18" height="15" rx="2" />
          <circle cx="9" cy="10" r="1.6" />
          <path d="M21 16.5l-5.2-5-4.3 4.2-2-1.9L3 18" />
        </svg>
        <span className="px-3 text-xs leading-snug">
          {label ?? filename}
        </span>
      </div>
    )
  }

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}
