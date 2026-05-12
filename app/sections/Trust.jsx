export default function Trust() {
  const stats = [
    {
      value: '$4.2M+',
      label: 'Revenue Generated'
    },

    {
      value: '130+',
      label: 'Luxury Brands'
    },

    {
      value: '92%',
      label: 'Retention Rate'
    },

    {
      value: '8K+',
      label: 'Warm Contacts'
    },

    {
      value: '5 Stage',
      label: 'Growth System'
    },

    {
      value: '90 Days',
      label: 'Average Scaling Window'
    }
  ];

  return (
    <section
      id="trust"
      className="trust-section"
    >
      <div className="wrap">
        <div className="eyebrow">
          Proven Results
        </div>

        <h2 className="section-title">
          Trusted by premium brands
          focused on long-term growth.
        </h2>

        <div className="trust-grid">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="trust-card"
            >
              <div className="trust-value">
                {stat.value}
              </div>

              <div className="trust-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-wrap">
          <div className="testimonial-card">
            <p>
              “Within 90 days we completely
              transformed our referral flow
              and doubled inbound demand.”
            </p>

            <span>
              — Private Wealth Firm
            </span>
          </div>

          <div className="testimonial-card">
            <p>
              “The positioning alone changed
              how premium clients perceived
              our company.”
            </p>

            <span>
              — Luxury Consultant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}