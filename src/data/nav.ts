export type NavLink = {
  label: string
  href: string
  children?: { label: string; href: string; current?: boolean }[]
}

export const NAV_LINKS: NavLink[] = [
  { label: 'الرئيسية', href: '#top' },
  { label: 'عن الشركة', href: '#first-impression' },
  {
    label: 'الخدمات والأعمال',
    href: '#services',
    children: [
      { label: 'تصميم مواقع إلكترونية', href: '#services', current: true },
      { label: 'تصميم متاجر إلكترونية', href: '#services' },
      { label: 'صفحات هبوط مخصصة', href: '#services' },
      { label: 'الهوية البصرية', href: '#services' },
      { label: 'تجهيز المواقع للبيع و Meta Pixel', href: '#services' },
      { label: 'باقة Taswe9 المتكاملة', href: '#package' },
    ],
  },
  { label: 'أعمالنا', href: '#portfolio' },
  { label: 'الأسعار', href: '#pricing' },
  { label: 'خطوات العمل', href: '#process' },
  { label: 'تواصل معنا', href: '#contact' },
]

export const FOOTER_LINKS = [
  { label: 'الرئيسية', href: '#top' },
  { label: 'أعمالنا', href: '#portfolio' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'باقات الأسعار', href: '#pricing' },
  { label: 'تواصل معنا', href: '#contact' },
]

