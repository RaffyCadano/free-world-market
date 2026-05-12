import Navbar from '../components/Navbar';

export default function PricingPage() {
  const tiers = [
    {
      name: 'Foundation',
      price: '$3K',
      desc: 'Perfect for premium positioning.'
    },

    {
      name: 'Founder’s Special',
      price: '$7K',
      desc: 'Complete luxury acquisition system.'
    },

    {
      name: 'Enterprise',
      price: '$15K+',
      desc: 'Advanced consulting and scaling systems.'
    }
  ];

  return (
    <>
      <Navbar />

      <section className="pricing-section">
        <div className="wrap">
          <div className="eyebrow">
            Pricing
          </div>

          <h1 className="section-title">
            Investment options for
            serious businesses.
          </h1>

          <div className="tiers-grid">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="tier"
              >
                <h3>{tier.name}</h3>

                <div className="tier-price">
                  {tier.price}
                </div>

                <p>{tier.desc}</p>

                <button className="cta-btn">
                  Book Discovery Call
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}