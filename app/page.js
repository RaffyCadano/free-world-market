import Services from './sections/Services';
import Approach from './sections/Approach';
import Problem from './sections/Problem';
import Navbar from './components/Navbar';

export default function Page() {
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);

  useEffect(() => {
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isDesktop) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animationFrame;
    const speed = 0.18;

    const updateCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (cursorDot.current) {
        cursorDot.current.style.left = `${mouseX}px`;
        cursorDot.current.style.top = `${mouseY}px`;
        cursorDot.current.style.opacity = '1';
        cursorDot.current.style.visibility = 'visible';
      }

      if (cursorRing.current) {
        cursorRing.current.style.opacity = '1';
        cursorRing.current.style.visibility = 'visible';
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * speed;
      ringY += (mouseY - ringY) * speed;

      if (cursorRing.current) {
        cursorRing.current.style.left = `${ringX}px`;
        cursorRing.current.style.top = `${ringY}px`;
      }

      animationFrame = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', updateCursor);
    animateRing();

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

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
    </>
  );
}