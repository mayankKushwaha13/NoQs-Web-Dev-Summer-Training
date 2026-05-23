import FeatureCard from "./FeatureCard"
import "../styles/Features.css"

function Features() {

  return (

    <section className="features">

      <h2>
        Everything you need to grow
      </h2>

      <div className="features-grid">

        <FeatureCard
          title="Fast Performance"
          description="Optimized for speed and fast loading."
        />

        <FeatureCard
          title="Secure & Reliable"
          description="Built with best practices and security."
        />

        <FeatureCard
          title="Scalable Design"
          description="Scale your business without problems."
        />

      </div>

    </section>
  )
}

export default Features