import Navbar from '../components/Navbar';
import s from './pricing.module.css';

export default function PricingPage() {
  const tiers = [
    {
      name: 'Foundation',
      price: '$3K',
      cadence: 'one-time',
      desc: 'For premium service businesses ready to sharpen positioning and attract higher-quality leads.',
      features: [
        'Full digital positioning audit',
        'Messaging framework & brand voice',
        'Landing page redesign (1 page)',
        'Lead capture & CRM setup',
        'Email welcome sequence (3 emails)',
        '30-day strategy roadmap',
      ],
    },
    {
      name: "Founder's Special",
      price: '$7K',
      cadence: 'one-time',
      desc: 'A complete premium acquisition system built to convert high-value clients at scale.',
      featured: true,
      features: [
        'Everything in Foundation',
        'Full funnel build (3-5 pages)',
        'Paid traffic strategy & setup',
        'Sales automation & follow-up sequences',
        'Calendar & booking system integration',
        'Monthly performance review (3 months)',
        'Priority support & iteration sprints',
      ],
    },
    {
      name: 'Enterprise',
      price: '$15K+',
      cadence: 'custom scope',
      desc: 'Advanced growth consulting and bespoke systems for established businesses scaling aggressively.',
      features: [
        "Everything in Founder's Special",
        'Dedicated growth strategist',
        'Multi-channel campaign management',
        'Custom CRM & pipeline architecture',
        'C-suite reporting & quarterly reviews',
        'White-glove onboarding & training',
        'Ongoing retainer available',
      ],
    },
  ];

  const highlights = [
    {
      icon: '\u25c8',
      title: 'No long-term lock-in',
      text: 'Every engagement is scoped upfront. You own all deliverables from day one - no subscriptions, no surprises.',
    },
    {
      icon: '\u2b21',
      title: 'Built around your goals',
      text: 'We start with a discovery call to understand your pipeline, pricing, and growth targets before recommending a tier.',
    },
    {
      icon: '\u25c7',
      title: 'ROI-first mindset',
      text: 'Our frameworks are designed to return multiples on your investment within the first 90 days of deployment.',
    },
  ];

  const compareRows = [
    { feature: 'Positioning audit', foundation: true, founders: true, enterprise: true },
    { feature: 'Funnel build', foundation: false, founders: true, enterprise: true },
    { feature: 'Paid traffic setup', foundation: false, founders: true, enterprise: true },
    { feature: 'CRM & automation', foundation: true, founders: true, enterprise: true },
    { feature: 'Custom architecture', foundation: false, founders: false, enterprise: true },
    { feature: 'Dedicated strategist', foundation: false, founders: false, enterprise: true },
    { feature: 'Quarterly reviews', foundation: false, founders: false, enterprise: true },
    { feature: 'Retainer option', foundation: false, founders: false, enterprise: true },
  ];

  const faqs = [
    {
      q: 'How long does each engagement take?',
      a: "Foundation typically wraps in 2-3 weeks. Founder's Special runs 6-8 weeks from kickoff to full deployment. Enterprise timelines are scoped during discovery.",
    },
    {
      q: 'Do I need to have existing traffic or a team?',
      a: 'No. We build from wherever you are. Whether you have zero online presence or an existing funnel that is not converting, we work with your current assets.',
    },
    {
      q: 'Can I upgrade from one tier to another?',
      a: "Yes. Many clients start with Foundation to validate messaging, then move to Founder's Special once they are ready to scale paid acquisition.",
    },
    {
      q: 'What does the discovery call involve?',
      a: 'A 30-minute call to understand your business model, current acquisition challenges, target client profile, and growth goals. No pressure, no pitch.',
    },
    {
      q: 'Is there a payment plan?',
      a: "Foundation and Founder's Special can be split 50/50 at kickoff and delivery. Enterprise retainers are billed monthly.",
    },
    {
      q: 'What industries do you serve?',
      a: 'We specialize in premium service businesses - consultants, agencies, financial advisors, coaches, law firms, and high-ticket B2B providers.',
    },
  ];

  return (
    <>
      <Navbar />

      <div className={s.hero}>
        <div className="wrap">
          <div className={s.heroInner}>
            <div className={s.eyebrow}>Pricing</div>
            <h1 className={s.heroTitle}>
              Investment options for<br /><em>serious businesses.</em>
            </h1>
            <p className={s.heroLead}>
              Transparent, performance-driven packages built for premium service businesses
              that are ready to grow without guesswork. Every tier is scoped to deliver
              a measurable return.
            </p>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className={s.tiersSection}>
          <div className={s.tiersGrid}>
            {tiers.map((tier) => (
              <div key={tier.name} className={tier.featured ? `${s.tier} ${s.featured}` : s.tier}>
                {tier.featured && <div className={s.featuredBadge}>Most Popular</div>}
                <div className={s.tierName}>{tier.name}</div>
                <div className={s.tierPrice}>{tier.price}</div>
                <div className={s.tierCadence}>{tier.cadence}</div>
                <p className={s.tierDesc}>{tier.desc}</p>
                <ul className={s.tierFeatures}>
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <button className={s.tierBtn}>Book Discovery Call</button>
              </div>
            ))}
          </div>
        </div>

        <div className={s.divider}><div className={s.dividerGem} /></div>

        <div className={s.highlightsSection}>
          <div className={s.sectionLabel}>Why it works</div>
          <div className={s.sectionHeading}>What every engagement includes.</div>
          <div className={s.highlightsGrid}>
            {highlights.map((h) => (
              <div key={h.title} className={s.highlightCard}>
                <div className={s.highlightIcon}>{h.icon}</div>
                <div className={s.highlightTitle}>{h.title}</div>
                <p className={s.highlightText}>{h.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={s.divider}><div className={s.dividerGem} /></div>

        <div className={s.compareSection}>
          <div className={s.sectionLabel}>Side by side</div>
          <div className={s.sectionHeading}>Compare what is included.</div>
          <table className={s.compareTable}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Foundation</th>
                <th>Founders Special</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>{row.foundation ? <span className={s.check}>&#10022;</span> : <span className={s.dash}>&mdash;</span>}</td>
                  <td>{row.founders ? <span className={s.check}>&#10022;</span> : <span className={s.dash}>&mdash;</span>}</td>
                  <td>{row.enterprise ? <span className={s.check}>&#10022;</span> : <span className={s.dash}>&mdash;</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={s.divider}><div className={s.dividerGem} /></div>

        <div className={s.faqSection}>
          <div className={s.sectionLabel}>Common questions</div>
          <div className={s.sectionHeading}>Everything you need to know.</div>
          <div className={s.faqGrid}>
            {faqs.map((item) => (
              <div key={item.q} className={s.faqItem}>
                <div className={s.faqQ}>{item.q}</div>
                <p className={s.faqA}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={s.ctaSection}>
          <div className={s.ctaHeading}>
            Ready to build a <em>premium</em><br />acquisition system?
          </div>
          <p className={s.ctaLead}>
            Book a 30-minute discovery call and we will map out the right engagement
            for your business, your goals, and your timeline.
          </p>
          <div className={s.ctaActions}>
            <a href="/approach" className="cta-btn">See our approach</a>
            <a href="/" className="cta-btn cta-secondary">Return home</a>
          </div>
          <p className={s.ctaNote}>No obligation &nbsp;&middot;&nbsp; No sales pressure &nbsp;&middot;&nbsp; 30 minutes</p>
        </div>
      </div>
    </>
  );
}