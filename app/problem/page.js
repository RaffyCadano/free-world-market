import Navbar from '../components/Navbar';
import s from './problem.module.css';

export default function ProblemPage() {
  const problems = [
    {
      icon: '\u29bb',
      title: 'Unpredictable Leads',
      text: 'Referral-only growth creates inconsistent acquisition and unstable revenue. One dry quarter can derail a year of momentum.',
    },
    {
      icon: '\u25a1',
      title: 'Weak Positioning',
      text: 'Without authority systems and a clear premium narrative, high-value clients default to your competitors who appear more established.',
    },
    {
      icon: '\u2610',
      title: 'Manual Scaling',
      text: 'When every new client requires a personal touch to close, growth hits a hard ceiling tied to your personal bandwidth.',
    },
  ];

  const costs = [
    {
      stat: '73%',
      title: 'of premium businesses stall before year five',
      text: 'Not because of a product problem, but because their acquisition model never evolved beyond warm introductions and word of mouth.',
    },
    {
      stat: '4x',
      title: 'longer sales cycles without a positioning system',
      text: 'Undefined authority forces prospects to do their own research, comparison shop, and take longer to make a decision.',
    },
    {
      stat: '$240K',
      title: 'average annual revenue left on the table',
      text: 'From leads that were never captured, deals that closed too slowly, and clients who chose a better-positioned competitor.',
    },
    {
      stat: '91%',
      title: 'of high-intent buyers never return after bouncing',
      text: 'Without a conversion system in place, a premium buyer who lands on your site and leaves is almost certainly gone for good.',
    },
  ];

  const symptoms = [
    {
      num: '01',
      title: 'No consistent inbound',
      text: 'New business only arrives through personal relationships, not scalable channels.',
    },
    {
      num: '02',
      title: 'Price compression',
      text: 'Prospects push back on fees because your positioning does not command a premium.',
    },
    {
      num: '03',
      title: 'Long decision cycles',
      text: 'Interested buyers take weeks to commit because the value story is unclear.',
    },
    {
      num: '04',
      title: 'Invisible online',
      text: 'Your digital presence does not reflect the quality of your actual service.',
    },
    {
      num: '05',
      title: 'No follow-up system',
      text: 'Warm leads go cold because there is nothing nurturing them between touchpoints.',
    },
    {
      num: '06',
      title: 'Revenue plateau',
      text: 'Growth is capped by your personal capacity to network and close manually.',
    },
    {
      num: '07',
      title: 'Wrong-fit clients',
      text: 'The absence of a filter system means you attract low-margin engagements.',
    },
    {
      num: '08',
      title: 'Scattered messaging',
      text: 'Different channels tell a different story, diluting trust and authority.',
    },
  ];

  const oldWay = [
    'Waiting on referrals from existing clients',
    'Generic website that looks like every competitor',
    'No follow-up after initial inquiry',
    'Pricing based on what you think clients will accept',
    'Manually qualifying every lead with your own time',
    'Growth tied entirely to your personal network',
  ];

  const newWay = [
    'Predictable inbound from authority-driven content and SEO',
    'Premium digital presence that filters for high-value prospects',
    'Automated nurture sequences that close while you sleep',
    'Confident pricing backed by a clear positioning narrative',
    'Qualifying systems that only surface serious, ready-to-buy leads',
    'A scalable acquisition engine that grows without you in every loop',
  ];

  return (
    <>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────── */}
      <div className={s.hero}>
        <div className="wrap">
          <div className={s.heroInner}>
            <div className={s.eyebrow}>The Referral Ceiling</div>
            <h1 className={s.heroTitle}>
              Most premium businesses plateau<br />because referrals are
              not a <em>scalable system.</em>
            </h1>
            <p className={s.heroLead}>
              Premium growth requires predictable acquisition, stronger positioning,
              and conversion infrastructure. Without these, even excellent services
              stay invisible to the clients willing to pay for them.
            </p>
          </div>
        </div>
      </div>

      <div className="wrap">
        {/* ── Core problems ──────────────────────────── */}
        <div className={s.problemsGrid}>
          {problems.map((p) => (
            <div key={p.title} className={s.problemCard}>
              <span className={s.problemIcon}>{p.icon}</span>
              <div className={s.problemTitle}>{p.title}</div>
              <p className={s.problemText}>{p.text}</p>
            </div>
          ))}
        </div>

        <div className={s.divider}><div className={s.dividerGem} /></div>

        {/* ── Cost of inaction ───────────────────────── */}
        <div className={s.costSection}>
          <div className={s.sectionLabel}>The cost of staying still</div>
          <div className={s.sectionHeading}>What inaction actually costs you.</div>
          <div className={s.costGrid}>
            {costs.map((c) => (
              <div key={c.title} className={s.costCard}>
                <div className={s.costStat}>{c.stat}</div>
                <div className={s.costTitle}>{c.title}</div>
                <p className={s.costText}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Symptoms strip ───────────────────────────── */}
      <div className={s.symptomsSection}>
        <div className="wrap">
          <div className={s.sectionLabel}>Warning signs</div>
          <div className={s.sectionHeading}>Does any of this sound familiar?</div>
          <div className={s.symptomsGrid}>
            {symptoms.map((sym) => (
              <div key={sym.num} className={s.symptomCard}>
                <div className={s.symptomNum}>{sym.num}</div>
                <div className={s.symptomTitle}>{sym.title}</div>
                <p className={s.symptomText}>{sym.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap">
        {/* ── Old vs new ─────────────────────────────── */}
        <div className={s.contrastSection}>
          <div className={s.sectionLabel}>Old model vs new model</div>
          <div className={s.sectionHeading}>There is a better way to grow.</div>
          <div className={s.contrastGrid}>
            <div className={s.contrastOld}>
              <div className={s.contrastLabel}>The old model</div>
              <ul className={s.contrastList}>
                {oldWay.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className={s.contrastNew}>
              <div className={s.contrastLabel}>The new model</div>
              <ul className={s.contrastList}>
                {newWay.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* ── CTA ────────────────────────────────────── */}
        <div className={s.ctaSection}>
          <div className={s.ctaHeading}>
            Ready to build a system that works<br /><em>without you in every loop?</em>
          </div>
          <p className={s.ctaLead}>
            We design premium acquisition engines for service businesses that are
            serious about predictable, scalable revenue growth.
          </p>
          <div className={s.ctaActions}>
            <a href="/approach" className="cta-btn">See our approach</a>
            <a href="/pricing" className="cta-btn cta-secondary">View pricing</a>
          </div>
        </div>
      </div>
    </>
  );
}