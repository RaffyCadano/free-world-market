import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';
import s from './services.module.css';

export default function ServicesPage() {
  const services = [
    {
      icon: '\u25c7',
      title: 'Luxury Web Design',
      text: 'Premium websites engineered for authority and conversion. Every design decision is driven by your target client profile and built to establish instant credibility.',
      link: 'Explore design work',
    },
    {
      icon: '\u29bb',
      title: 'Referral Systems',
      text: 'Scalable acquisition systems that move beyond warm introductions. We build referral infrastructure that generates qualified leads without your constant involvement.',
      link: 'How referral systems work',
    },
    {
      icon: '\u25a1',
      title: 'Brand Positioning',
      text: 'Messaging refinement built to attract premium clients and repel low-margin ones. We craft the narrative that justifies higher pricing and closes faster.',
      link: 'See positioning examples',
    },
    {
      icon: '\u2b21',
      title: 'Conversion Optimization',
      text: 'Strategic optimization focused on lead quality and revenue, not just traffic. We audit and rebuild every touchpoint in your acquisition funnel.',
      link: 'View optimization process',
    },
    {
      icon: '\u25c8',
      title: 'Automation Systems',
      text: 'Automated workflows that nurture leads, qualify prospects, and book calls while you sleep. Built on proven CRM and sequencing infrastructure.',
      link: 'Explore automation stacks',
    },
    {
      icon: '\u2610',
      title: 'Growth Consulting',
      text: 'Strategic guidance for scaling premium businesses past the referral ceiling. Monthly advisory sessions backed by data, frameworks, and direct implementation support.',
      link: 'Learn about consulting',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Discovery call',
      text: 'We map your current acquisition model, ideal client profile, and growth constraints in 30 minutes.',
    },
    {
      num: '02',
      title: 'Strategy & scope',
      text: 'A tailored roadmap identifying the highest-leverage interventions for your specific situation.',
    },
    {
      num: '03',
      title: 'Build & deploy',
      text: 'We build and launch every deliverable with precision, keeping you informed at each milestone.',
    },
    {
      num: '04',
      title: 'Measure & refine',
      text: 'Ongoing optimization based on real performance data until results are consistent and predictable.',
    },
  ];

  const deliverables = [
    {
      category: 'Web & Design',
      title: 'What we build for you',
      items: [
        'Full website design & development (Next.js or Webflow)',
        'Landing pages and conversion-focused microsites',
        'Mobile-first, premium-feel UI with custom animations',
        'Brand identity refresh and style guide',
        'Photography and visual direction briefs',
      ],
    },
    {
      category: 'Acquisition & Funnels',
      title: 'How we grow your pipeline',
      items: [
        'End-to-end funnel architecture and copywriting',
        'Paid traffic strategy (Meta, Google, LinkedIn)',
        'SEO positioning and authority content plan',
        'Lead magnet creation and gated asset design',
        'A/B testing framework and conversion reporting',
      ],
    },
    {
      category: 'Automation & CRM',
      title: 'Systems that work without you',
      items: [
        'CRM setup and pipeline configuration (HubSpot, GoHighLevel)',
        'Email and SMS nurture sequences',
        'Calendar booking integration and reminder flows',
        'Lead scoring and qualification automation',
        'Monthly performance dashboards',
      ],
    },
    {
      category: 'Consulting & Strategy',
      title: 'The thinking behind the build',
      items: [
        'Positioning and pricing strategy sessions',
        'Competitive landscape and market gap analysis',
        'Monthly advisory retainer with dedicated strategist',
        'Quarterly growth review and roadmap refresh',
        'Team training on systems and sales process',
      ],
    },
  ];

  const proof = [
    {
      quote: 'Within 60 days of the new funnel going live, we booked more qualified discovery calls than in the previous six months combined.',
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

  return (
    <>
      <Navbar />
      <CustomCursor />

      {/* ── Hero ─────────────────────────────────────── */}
      <div className={s.hero}>
        <div className="wrap">
          <div className={s.heroInner}>
            <div className={s.eyebrow}>Core Services</div>
            <h1 className={s.heroTitle}>
              Services engineered<br />for <em>premium growth.</em>
            </h1>
            <p className={s.heroLead}>
              Every service is designed around one outcome: attracting better clients,
              closing more confidently, and building a business that does not depend on
              the next referral to survive.
            </p>
          </div>
        </div>
      </div>

      <div className="wrap">

        {/* ── Services grid ──────────────────────────── */}
        <div className={s.servicesGrid}>
          {services.map((svc) => (
            <div key={svc.title} className={s.serviceCard}>
              <span className={s.serviceIcon}>{svc.icon}</span>
              <div className={s.serviceTitle}>{svc.title}</div>
              <p className={s.serviceText}>{svc.text}</p>
              <span className={s.serviceLink}>{svc.link} &rarr;</span>
            </div>
          ))}
        </div>

        <div className={s.divider}><div className={s.dividerGem} /></div>

        {/* ── Deliverables ───────────────────────────── */}
        <div className={s.deliverablesSection}>
          <div className={s.sectionLabel}>What you get</div>
          <div className={s.sectionHeading}>Every deliverable, spelled out.</div>
          <div className={s.deliverablesGrid}>
            {deliverables.map((d) => (
              <div key={d.title} className={s.deliverableCard}>
                <div className={s.deliverableCategory}>{d.category}</div>
                <div className={s.deliverableTitle}>{d.title}</div>
                <ul className={s.deliverableList}>
                  {d.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Process strip ────────────────────────────── */}
      <div className={s.processSection}>
        <div className="wrap">
          <div className={s.sectionLabel}>How we work</div>
          <div className={s.sectionHeading}>From first call to full deployment.</div>
          <div className={s.processSteps}>
            {steps.map((step) => (
              <div key={step.num} className={s.stepCard}>
                <div className={s.stepNum}>{step.num}</div>
                <div className={s.stepTitle}>{step.title}</div>
                <p className={s.stepText}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap">

        {/* ── Social proof ───────────────────────────── */}
        <div className={s.proofSection}>
          <div className={s.sectionLabel}>Client results</div>
          <div className={s.sectionHeading}>What our clients say.</div>
          <div className={s.proofGrid}>
            {proof.map((p) => (
              <div key={p.author} className={s.proofCard}>
                <p className={s.proofQuote}>&ldquo;{p.quote}&rdquo;</p>
                <div className={s.proofAuthor}>{p.author}</div>
                <div className={s.proofRole}>{p.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ────────────────────────────────────── */}
        <div className={s.ctaSection}>
          <div className={s.ctaHeading}>
            Not sure which service<br />is right for <em>your business?</em>
          </div>
          <p className={s.ctaLead}>
            Book a 30-minute discovery call. We will audit your current acquisition model
            and recommend the highest-leverage starting point for your goals.
          </p>
          <div className={s.ctaActions}>
            <a href="/pricing" className="cta-btn">View pricing</a>
            <a href="/approach" className="cta-btn cta-secondary">See our approach</a>
          </div>
        </div>

      </div>
    </>
  );
}