import Navbar from '../components/Navbar';
import s from './approach.module.css';

export default function ApproachPage() {
  const phases = [
    {
      number: '01',
      title: 'Audit',
      text: 'We analyze positioning, referrals, and acquisition bottlenecks to find where revenue is leaking.'
    },
    {
      number: '02',
      title: 'Plan',
      text: 'A custom roadmap engineered around premium client growth, realistic timelines, and key milestones.'
    },
    {
      number: '03',
      title: 'Implement',
      text: 'Systems, messaging, automation, and conversion assets are deployed with precision and speed.'
    },
    {
      number: '04',
      title: 'Analyze',
      text: 'Continuous optimization focused on lead quality, deal velocity, and sustainable revenue metrics.'
    }
  ];

  const values = [
    {
      icon: '⬡',
      title: 'Clarity over noise',
      text: 'We cut through generic marketing tactics and align your narrative with the customer journey — fewer distractions, stronger offers, a cleaner path to high-value appointments.'
    },
    {
      icon: '◈',
      title: 'Momentum built on evidence',
      text: 'Every tactic is validated by traffic, conversion, and lead quality data. We prioritize changes that move the needle, never vanity metrics.'
    },
    {
      icon: '◇',
      title: 'Engineered for premium growth',
      text: 'Your brand, pricing, and lead nurturing are designed to attract better prospects and increase average deal size — a smarter growth engine, not just more volume.'
    }
  ];

  const impacts = [
    {
      stat: '3×',
      title: 'Reliable lead flow',
      text: 'A consistent pipeline of inbound inquiries with stronger intent, so your team spends less time chasing and more time closing.'
    },
    {
      stat: '68%',
      title: 'Higher close rates',
      text: 'Position your services as the natural choice for premium customers with messaging that feels confident, distinct, and conversion-focused.'
    },
    {
      stat: '< 30 days',
      title: 'Rapid refinement',
      text: 'We deploy quickly, monitor closely, and iterate constantly — you never wait months to understand what is working.'
    }
  ];

  return (
    <>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────── */}
      <div className={s.hero}>
        <div className="wrap">
          <div className={s.heroInner}>
            <div className={s.eyebrow}>Four Phase Process</div>
            <h1 className={s.heroTitle}>
              Built like a <em>scalable</em><br />growth system.
            </h1>
            <p className={s.heroLead}>
              Every engagement begins with data, moves through a focused strategy, and ends
              with measurable revenue acceleration. We design digital experiences that feel
              exclusive, convert premium audiences, and build momentum without complexity.
            </p>
          </div>
        </div>
      </div>

      {/* ── Four phases ──────────────────────────────── */}
      <div className="wrap">
        <div className={s.phasesWrap}>
          <div className={s.phasesGrid}>
            {phases.map((phase) => (
              <div key={phase.number} className={s.phaseCard}>
                <div className={s.phaseNum}>{phase.number}</div>
                <div className={s.phaseTitle}>{phase.title}</div>
                <p className={s.phaseText}>{phase.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Values ───────────────────────────────────── */}
        <div className={s.valuesSection}>
          <div className={s.sectionLabel}>Our principles</div>
          <div className={s.sectionHeading}>How we think about growth.</div>

          <div className={s.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={s.valueCard}>
                <div className={s.valueIcon}>{v.icon}</div>
                <div className={s.valueTitle}>{v.title}</div>
                <p className={s.valueText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={s.divider}><div className={s.dividerGem} /></div>
      </div>

      {/* ── Impact ───────────────────────────────────── */}
      <div className={s.impactSection}>
        <div className="wrap">
          <div className={s.sectionLabel}>What you can expect</div>
          <div className={s.sectionHeading}>What high-performance growth feels like.</div>

          <div className={s.impactGrid}>
            {impacts.map((item) => (
              <div key={item.title} className={s.impactCard}>
                <div className={s.impactNum}>{item.stat}</div>
                <div className={s.impactTitle}>{item.title}</div>
                <p className={s.impactText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────── */}
      <div className="wrap">
        <div className={s.ctaSection}>
          <p className={s.ctaQuote}>
            &ldquo;Start with an audit, keep the plan simple, and scale only what
            proves itself in the market. This is how premium businesses grow without
            burning cash or sacrificing control.&rdquo;
          </p>
          <div className={s.ctaActions}>
            <a href="/pricing" className="cta-btn">Explore pricing</a>
            <a href="/" className="cta-btn cta-secondary">Return home</a>
          </div>
        </div>
      </div>
    </>
  );
}
