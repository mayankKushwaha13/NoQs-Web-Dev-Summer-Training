import "../styles/Hero.css"
import img from "../assets/image.png"

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">
        <h1>
          Build something amazing today
        </h1>

        <p>
          We help startups and businesses build modern websites.
        </p>

        <button>
          Get Started
        </button>
      </div>

      <div className="hero-right">
        <img
        src = {img}
        alt = "Hero"/>
      </div>

    </section>
  )
}

export default Hero