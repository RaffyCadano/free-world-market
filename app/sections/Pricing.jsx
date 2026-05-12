export default function Pricing() {
  const tiers = [
    {
      name: 'Foundation',
      price: '$3K',
      desc: 'Ideal for businesses building authority and premium positioning.',
      featured: false
    },

    {
      name: 'Founder’s Special',
      price: '$7K',
      desc: 'Complete luxury acquisition system with conversion optimization.',
      featured: true
    },

    {
      name: 'Enterprise',
      price: '$15K+',
      desc: 'Advanced scaling systems and long-term strategic consulting.',
      featured: false
    }
  ];

  return (
    <section
      id="pricing"
      className="pricing-section"
    >
      <div className="wrap">
        <div className="eyebrow">
          Pricing
        </div>

        <h2 className="section-title">
          Built for serious businesses
          ready to scale.
        </h2>

        <div className="tiers-grid">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={
                tier.featured
                  ? 'tier featured'
                  : 'tier'
              }
            >
              {tier.featured && (
                <div className="tier-badge">
                  Primary Offer
                </div>
              )}

              <h3>{tier.name}</h3>

              <div className="tier-price">
                {tier.price}
              </div>

              <p>{tier.desc}</p>

              <button
                className="cta-btn"
                data-cta="pricing"
              >
                Book Discovery Call
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}