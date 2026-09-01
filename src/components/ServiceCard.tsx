import ImageAsset from './ImageAsset'
import type { ServiceItem } from '../data/services'

export default function ServiceCard({ title, subtitle, body, icon }: ServiceItem) {
  return (
    <div className="card h-full p-8 hover:border-brand/60 transition-all duration-300">
      {icon && (
        <ImageAsset
          src={icon}
          alt=""
          label={icon.split('/').pop()}
          className="h-12 w-12 object-contain"
        />
      )}
      {subtitle && (
        <span className="inline-block mt-4 text-xs font-bold text-brand tracking-wider">
          {subtitle}
        </span>
      )}
      <h3 className={`text-xl font-bold text-paper ${subtitle ? 'mt-1' : 'mt-6'}`}>{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-paper-muted">{body}</p>
    </div>
  )
}
