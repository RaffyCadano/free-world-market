import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';

export default function ApproachPage() {
  const phases = [
    {
      number: '01',
      title: 'Audit',
      text: 'We analyze positioning, referrals, and acquisition bottlenecks.'
    },

    {
      number: '02',
      title: 'Plan',
      text: 'A custom roadmap engineered around premium client growth.'
    },

    {
      number: '03',
      title: 'Implement',
      text: 'Systems, messaging, automation, and conversion assets deployed rapidly.'
    },

    {
      number: '04',
      title: 'Analyze',
      text: 'Continuous optimization focused on metrics and lead quality.'
    }
  ];

  return (
    <>
      <Navbar />

      <section className="approach-section">
        <div className="wrap">
          <div className="eyebrow">
            Four Phase Process
          </div>

          <h1 className="section-title">
            Built like a scalable
            growth system.
          </h1>

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
      <CustomCursor />
    </>
  );
}