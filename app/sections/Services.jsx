export default function Services() {
  const services = [
    {
      title: 'Luxury Web Design',
      text: 'Premium websites engineered for authority and conversion.'
    },
    {
      title: 'Referral Systems',
      text: 'Scalable acquisition systems designed for predictable growth.'
    },
    {
      title: 'Brand Positioning',
      text: 'Messaging refinement built to attract premium clients.'
    },
    {
      title: 'Conversion Optimization',
      text: 'Strategic optimization focused on lead quality and revenue.'
    },
    {
      title: 'Automation Systems',
      text: 'Automated workflows that increase efficiency and speed.'
    },
    {
      title: 'Growth Consulting',
      text: 'Strategic guidance for scaling luxury businesses.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="wrap">
        <div className="eyebrow">Core Services</div>

        <h2 className="section-title">
          Services engineered
          for premium growth.
        </h2>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
