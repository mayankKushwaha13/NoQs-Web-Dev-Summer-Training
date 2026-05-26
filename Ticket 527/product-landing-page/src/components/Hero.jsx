import heroImg from "../assets/hero.webp";

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-text">
        <h1>Modern Products For Modern People</h1>

        <p>
          Experience smooth design, blazing-fast performance,
          and dynamic content powered by APIs.
        </p>

        <button>Explore Products</button>
      </div>

      <div className="hero-image">
        <img
          src={heroImg}
          alt="hero"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Hero;