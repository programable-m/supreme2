import Reveal from '../components/Reveal'
import ImageAsset from '../components/ImageAsset'
import { CONTACT } from '../data/contact'
import { MailIcon, PhoneIcon, WhatsappIcon } from '../components/icons/Icon'

export default function CompletePackage() {
  return (
    <section id="package" className="section-y overflow-hidden">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <h2 className="max-w-xl text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
            حل رقمي متكامل وشامل من Taswe9
          </h2>

          <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-paper-muted sm:text-lg">
            <p>
              باقة شاملة صُممت خصيصاً للأنشطة التجارية ورواد الأعمال الراغبين في منصة بيع احترافية وسريعة، دون الانتظار لشهور ودون تكاليف وتعقيدات غير مبررة.
            </p>
            <p>
              يتم تصميم وبرمجة موقعك ليكون فائق السرعة، متجاوباً بدقة مع الهواتف، ومهيئاً لمحركات البحث مع مسار طلب وشراء مباشر يحقق أعلى معدلات تحويل للزوار.
            </p>
            <p>
              نربط لك أزرار الواتساب المباشرة، بكسل Meta Pixel، ونماذج الطلب الذكية، مع إمكانية ربط جداول Google Sheets وتكامل شركات التوصيل لأتمتة المبيعات بالكامل.
            </p>
            <p>
              استضافة سحابية عالية الأمان وسريعة، مع دعم فني متواصل وتعديلات لضمان انطلاقة ناجحة لنشاطك التجاري.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={CONTACT.whatsappHref} aria-label="تواصل 24/7 عبر واتساب" className="btn-primary">
              <WhatsappIcon className="h-4 w-4" />
              <span>تواصل عبر واتساب</span>
            </a>
            <a href={CONTACT.phoneHref} aria-label="اتصل بنا الآن" className="btn-outline !px-4">
              <PhoneIcon className="h-4 w-4" />
            </a>
            <a href={CONTACT.emailHref} aria-label="راسلنا عبر البريد" className="btn-outline !px-4">
              <MailIcon className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="mx-auto w-full max-w-[280px]">
          <ImageAsset
            src="/assets/images/package-phone-mockup.webp"
            alt="موقع Taswe9 معروض على شاشة هاتف ذكي"
            label="package-phone-mockup.webp"
            className="aspect-[9/19] w-full rounded-[2.5rem] object-cover shadow-2xl border border-ink-border"
          />
        </Reveal>
      </div>
    </section>
  )
}

