import Services from './sections/Services';
import Approach from './sections/Approach';
import Problem from './sections/Problem';
import Navbar from './components/Navbar';
import CalendlyButton from './components/CalendlyButton';
import s from './home.module.css';

const marqueeItems = [
  'Premium Web Design',
  'Referral Systems',
  'Brand Positioning',
  'Conversion Funnels',
  'Automation & CRM',
  'Growth Consulting',
  'Premium Web Design',
  'Referral Systems',
  'Brand Positioning',
  'Conversion Funnels',
  'Automation & CRM',
  'Growth Consulting',
];

const results = [
  { num: '3x', label: 'Average lead volume increase' },
  { num: '68%', label: 'Higher close rate after positioning' },
  { num: '< 30d', label: 'Time to first qualified booking' },
  { num: '$2.4M', label: 'Revenue generated for clients' },
];

const testimonials = [
  {
    quote: 'Within 60 days of launch, we booked more qualified discovery calls than in the previous six months combined. The funnel just works.',
    author: 'James R.',
    role: 'Founder, Financial Advisory Firm',
  },
  {
    quote: 'The positioning work alone changed how prospects talk to us. They come in already convinced. The close is almost a formality now.',
    author: 'Mara T.',
    role: 'Managing Partner, Boutique Law Firm',
  },
  {
    quote: 'We had tried three agencies before. This was the first time someone actually understood what premium clients need to see before they trust you.',
    author: 'Daniel K.',
    role: 'CEO, High-Ticket B2B Consultancy',
  },
];

const differentiators = [
  {
    title: 'We build systems, not websites',
    text: 'Every deliverable is designed to generate revenue — not just look good in a screenshot.',
  },
  {
    title: 'Premium-only focus',
    text: 'We work exclusively with service businesses in the premium tier. We understand your buyer.',
  },
  {
    title: 'Data-driven from day one',
    text: 'Every decision is validated by traffic, conversion, and lead quality data — never guesswork.',
  },
  {
    title: 'You own everything',
    text: 'No lock-in, no retainer traps. All deliverables are yours from the moment they go live.',
  },
];

const metrics = [
  { num: '47+', label: 'Premium clients served' },
  { num: '94%', label: 'Client retention after first engagement' },
  { num: '18mo', label: 'Average client relationship' },
  { num: '5★', label: 'Average engagement rating' },
];

export default function Page() {
  return (
    <>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────── */}
      <div className={s.hero}>

          <div className={s.heroInner}>
            <div className={s.eyebrow}>Premium Digital Growth</div>
            <h1 className={s.heroTitle}>
              Build <em>premium</em><br />digital experiences<br />that actually convert.
            </h1>
            <p className={s.heroLead}>
              Conversion-focused websites, acquisition systems, and brand positioning
              engineered for premium service businesses ready to grow beyond referrals.
            </p>
            <div className={s.heroActions}>
              <CalendlyButton location="hero" className="cta-btn">Book a Discovery Call</CalendlyButton>
              <a href="/approach" className="cta-btn cta-secondary">See our approach</a>
            </div>

            <div className={s.statsRow}>
              {results.map((r) => (
                <div key={r.label} className={s.statItem}>
                  <div className={s.statValue}>{r.num}</div>
                  <div className={s.statLabel}>{r.label}</div>
                </div>
              ))}
            </div>
          </div>
      </div>

      {/* ── Marquee ──────────────────────────────────── */}
      <div className={s.marqueeWrap}>
        <div className={s.marqueeTrack}>
          {marqueeItems.map((item, i) => (
            <div key={i} className={s.marqueeItem}>
              <span className={s.marqueeDot} />
              <span className={s.marqueeText}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Problem section ──────────────────────────── */}
      <Problem />

      {/* ── Results strip ────────────────────────────── */}
      <div className={s.resultsSection}>
        <div className="wrap">
          <div className={s.sectionLabel}>Proven outcomes</div>
          <div className={s.sectionHeading}>Numbers that speak for themselves.</div>
          <div className={s.resultsGrid}>
            {results.map((r) => (
              <div key={r.label} className={s.resultCard}>
                <div className={s.resultNum}>{r.num}</div>
                <div className={s.resultLabel}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Approach section ─────────────────────────── */}
      <Approach />

      {/* ── Services section ─────────────────────────── */}
      <Services />

      {/* ── Differentiators ──────────────────────────── */}
      <div className={s.diffSection}>
        <div className="wrap">
          <div className={s.diffGrid}>
            <div className={s.diffLeft}>
              <div className={s.sectionLabel}>Why Free World Market</div>
              <div className={s.sectionHeading}>
                What makes us<br /><em>different.</em>
              </div>
              <ul className={s.diffList}>
                {differentiators.map((d, i) => (
                  <li key={d.title} className={s.diffItem}>
                    <span className={s.diffItemNum}>0{i + 1}</span>
                    <span className={s.diffItemText}>
                      <strong>{d.title} — </strong>{d.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={s.diffRight}>
              {metrics.map((m) => (
                <div key={m.label} className={s.diffMetric}>
                  <div className={s.diffMetricNum}>{m.num}</div>
                  <div className={s.diffMetricLabel}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Testimonials ─────────────────────────────── */}
      <div className="wrap">
        <div className={s.testimonialsSection}>
          <div className={s.sectionLabel}>Client results</div>
          <div className={s.sectionHeading}>What our clients say.</div>
          <div className={s.testimonialsGrid}>
            {testimonials.map((t) => (
              <div key={t.author} className={s.testimonialCard}>
                <div className={s.testimonialStars}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={s.star}>★</span>
                  ))}
                </div>
                <p className={s.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={s.testimonialAuthor}>{t.author}</div>
                <div className={s.testimonialRole}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={s.divider}><div className={s.dividerGem} /></div>

        {/* ── Final CTA ──────────────────────────────── */}
        <div className={s.ctaSection}>
          <div className={s.ctaHeading}>
            Ready to grow<br />beyond <em>the referral ceiling?</em>
          </div>
          <p className={s.ctaLead}>
            Book a free 30-minute discovery call. We will audit your current acquisition
            model and map out the fastest path to premium, predictable growth.
          </p>
          <div className={s.ctaActions}>
            <CalendlyButton location="cta_final" className="cta-btn">Book discovery call</CalendlyButton>
            <a href="/services" className="cta-btn cta-secondary">Explore services</a>
          </div>
          <p className={s.ctaNote}>No obligation &nbsp;&middot;&nbsp; No sales pitch &nbsp;&middot;&nbsp; 30 minutes</p>
        </div>
      </div>
    </>
  );
}