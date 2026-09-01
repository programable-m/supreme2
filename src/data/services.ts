export type ServiceItem = {
  title: string
  subtitle?: string
  body: string
  icon?: string
  category?: string
}

export const TECHNICAL_HIGHLIGHTS: ServiceItem[] = [
  {
    title: 'React 19 & Next.js',
    subtitle: 'الواجهات التفاعلية',
    body: 'أداء فائق وتجارب مستخدم فائقة السلاسة والسرعة',
    icon: '/assets/icons/service-react.webp',
  },
  {
    title: 'Tailwind CSS 4',
    subtitle: 'التصميم والهندسة',
    body: 'تصاميم متجاوبة بصرية دقيقة بأقل حجم كود ممكن',
    icon: '/assets/icons/service-design.webp',
  },
  {
    title: 'Shopify / YouCan / COD',
    subtitle: 'منصات التجارة',
    body: 'أنظمة تجارة إلكترونية مهيأة لآلاف الطلبات اليومية',
    icon: '/assets/icons/service-ecommerce.webp',
  },
  {
    title: 'Server-Side CAPI',
    subtitle: 'تتبع الإعلانات',
    body: 'ربط مباشر للخوادم لتفادي حجب بيانات الإعلانات',
    icon: '/assets/icons/service-tracking.webp',
  },
  {
    title: 'Cloudflare & Global CDN',
    subtitle: 'الاستضافة والسرعة',
    body: 'توزيع محتوى عالمي وحماية من التوقف والهجمات',
    icon: '/assets/icons/service-support.webp',
  },
  {
    title: 'Technical SEO & Schema',
    subtitle: 'محركات البحث',
    body: 'تصدر نتائج البحث بجوجل وجلب زيارات مجانية مستمرة',
    icon: '/assets/icons/service-seo.webp',
  },
]

export const SERVICE_ITEMS = TECHNICAL_HIGHLIGHTS

export const ALL_SERVICES_LIST: string[] = [
  'تصميم مواقع إلكترونية',
  'تصميم متاجر إلكترونية',
  'صفحات هبوط',
  'الهوية البصرية',
  'تجهيز المواقع للبيع',
  'Meta Pixel',
  'Conversion API',
  'تحسين سرعة المواقع',
  'Technical SEO',
  'Schema',
  'WhatsApp',
  'Google Sheets',
  'أتمتة الطلبات',
  'تكامل شركات التوصيل',
]

