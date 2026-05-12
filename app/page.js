import Marquee from './sections/Marquee';
import FinalCTA from './sections/FinalCTA';
import Pricing from './sections/Pricing';
import Trust from './sections/Trust';
import Services from './sections/Services';
import Approach from './sections/Approach';
import Problem from './sections/Problem';
import Navbar from './components/Navbar';

export default function Page() {
  return (
    <>
      <Navbar />

      <section
        className="hero"
        id="hero"
      >
        <div className="hero-content">
          <h1 className="hero-title">
            Build Premium
            Digital Experiences
          </h1>

          <p className="hero-text">
            Conversion-focused websites
            engineered for growth and
            modern brands.
          </p>

          <button
            className="cta-btn"
            data-cta="hero"
          >
            Book Call
          </button>
        </div>
      </section>

      <Marquee />

      <Problem />

      <Approach />
      
      <Services />
      
      <Trust />
      
      <Pricing />
      
      <FinalCTA />
      
    </>
  );
}