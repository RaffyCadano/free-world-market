export default function Approach() {
  const phases = [
    {
      number: '01',
      title: 'Audit',
      text: 'We analyze positioning, referrals, conversion flow, and acquisition bottlenecks.'
    },

    {
      number: '02',
      title: 'Plan',
      text: 'A custom growth roadmap engineered around premium client acquisition.'
    },

    {
      number: '03',
      title: 'Implement',
      text: 'Landing pages, systems, messaging, and automation deployed rapidly.'
    },

    {
      number: '04',
      title: 'Analyze',
      text: 'We optimize metrics, lead quality, and conversion performance continuously.'
    }
  ];

  return (
    <section
      id="approach"
      className="approach-section"
    >
      <div className="wrap">
        <div className="eyebrow">
          Four Phase Process
        </div>

        <h2 className="section-title">
          Built like a growth system.
          Not a freelance project.
        </h2>

        <div className="approach-grid">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="approach-card"
            >
              <div className="phase-number">
                {phase.number}
              </div>

              <h3>{phase.title}</h3>

              <p>{phase.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}