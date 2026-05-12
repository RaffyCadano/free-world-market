import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';

export default function ProblemPage() {
  const problems = [
    {
      title: 'Unpredictable Leads',
      text: 'Referral-only growth creates inconsistent acquisition and unstable revenue.'
    },

    {
      title: 'Weak Positioning',
      text: 'Without authority systems, premium clients choose competitors first.'
    },

    {
      title: 'Manual Scaling',
      text: 'Businesses plateau when every sale depends on referrals alone.'
    }
  ];

  return (
    <>
      <Navbar />

      <section className="problem-section">
        <div className="wrap">
          <div className="eyebrow">
            The Referral Ceiling
          </div>

          <h1 className="section-title">
            Most luxury businesses
            plateau because referrals
            are not scalable systems.
          </h1>

          <p className="section-text">
            Premium growth requires
            predictable acquisition,
            stronger positioning,
            and conversion systems.
          </p>

          <div className="problem-grid">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="problem-card"
              >
                <h3>{problem.title}</h3>

                <p>{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CustomCursor />
    </>
  );
}