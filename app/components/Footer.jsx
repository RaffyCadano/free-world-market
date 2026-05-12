import s from './Footer.module.css';

const nav = [
  {
    heading: 'Company',
    links: [
      { label: 'Problem', href: '/problem' },
      { label: 'Approach', href: '/approach' },
      { label: 'Services', href: '/services' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Luxury Web Design', href: '/services' },
      { label: 'Brand Positioning', href: '/services' },
      { label: 'Referral Systems', href: '/services' },
      { label: 'Growth Consulting', href: '/services' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'Book a Call', href: '/pricing' },
      { label: 'hello@freeworldmarket.com', href: 'mailto:hello@freeworldmarket.com' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
  },
];

const socials = [
  { icon: 'in', href: '#', label: 'LinkedIn' },
  { icon: 'ig', href: '#', label: 'Instagram' },
  { icon: 'tw', href: '#', label: 'Twitter' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className="wrap">
        <div className={s.top}>
          {/* Brand column */}
          <div className={s.brand}>
            <div className={s.logo}>Luxe Growth</div>
            <p className={s.tagline}>
              Premium acquisition systems and digital experiences
              built for service businesses that are serious about
              scalable, predictable growth.
            </p>
            <div className={s.socialRow}>
              {socials.map((sc) => (
                <a key={sc.label} href={sc.href} className={s.socialLink} aria-label={sc.label}>
                  {sc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {nav.map((col) => (
            <div key={col.heading} className={s.col}>
              <div className={s.colHeading}>{col.heading}</div>
              {col.links.map((link) => (
                <a key={link.label} href={link.href} className={s.colLink}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className={s.bottom}>
          <span className={s.copy}>
            &copy; {year} Free World Market. All rights reserved.
          </span>
          <div className={s.legalLinks}>
            <a href="#" className={s.legalLink}>Privacy Policy</a>
            <a href="#" className={s.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
