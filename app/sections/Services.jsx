export default function Services() {
  const services = [
    {
      title: 'Luxury Web Design',
      text: 'Premium websites engineered for authority, conversion, and client trust.'
    },

    {
      title: 'Referral Systems',
      text: 'Scalable acquisition systems that turn referrals into predictable growth.'
    },

    {
      title: 'Brand Positioning',
      text: 'Messaging and visual refinement built to attract high-value clients.'
    },

    {
      title: 'Conversion Optimization',
      text: 'Strategic optimization focused on revenue, lead quality, and performance.'
    },

    {
      title: 'Automation Systems',
      text: 'Automated workflows that reduce manual effort and improve conversion speed.'
    },

    {
      title: 'Growth Consulting',
      text: 'Strategic guidance for scaling luxury businesses beyond word-of-mouth.'
    }
  ];

  return (
    <section
      id="services"
      className="services-section"
    >
      <div className="wrap">
        <div className="eyebrow">
          Core Services
        </div>

        <h2 className="section-title">
          Everything required to
          scale a premium brand.
        </h2>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card"
            >
              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <div className="service-link">
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}