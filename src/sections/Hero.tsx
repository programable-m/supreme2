import Reveal from '../components/Reveal'
import ImageAsset from '../components/ImageAsset'
import { CONTACT } from '../data/contact'
import { PhoneIcon, WhatsappIcon } from '../components/icons/Icon'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-16 sm:pt-20 lg:pb-24">
      {/* Decorative background pattern */}
      <ImageAsset
        src="/assets/images/hero-pattern.webp"
        alt=""
        label="hero-pattern.webp (decorative)"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />

      <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-10">
        <Reveal>
          <p className="eyebrow mb-4">تصميم وتطوير المواقع والمتاجر الإلكترونية</p>
          <h1 className="text-4xl leading-[1.15] sm:text-5xl lg:text-[3.25rem]">
            نبني لك مواقع ومتاجر إلكترونية مخصصة للبيع وتحقيق أعلى عائد إعلاني
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-muted sm:text-lg">
            وجود واجهة رقمية احترافية ومبنية للبيع هو العامل الحاسم لنجاح أي نشاط تجاري اليوم. في Taswe9، نبتكر منصات ومتاجر إلكترونية فائقة السرعة والتجهيز، مصممة خصيصاً لمضاعفة التحويلات ورفع العائد الإعلاني.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-paper-muted sm:text-lg">
            كل مشروع يتم تنفيذه بحرفية عالية دون قوالب مكررة: تصاميم عصرية متجاوبة مع كافة الهواتف، كود نظيف وسريع، وتكامل كامل مع أدوات التتبع وبكسل الإعلانات لتوليد أرباح حقيقية من اليوم الأول.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={CONTACT.phoneHref} className="btn-primary">
              <PhoneIcon className="h-4 w-4" />
              اتصل بنا الآن!
            </a>
            <a href={CONTACT.whatsappHref} className="btn-outline">
              <WhatsappIcon className="h-4 w-4" />
              تحدث معنا عبر واتساب
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <ImageAsset
            src="/assets/images/hero.webp"
            alt="تصميم وبرمجة مواقع Taswe9 الاحترافية"
            label="hero.webp"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl border border-ink-border"
          />
        </Reveal>
      </div>
    </section>
  )
}

