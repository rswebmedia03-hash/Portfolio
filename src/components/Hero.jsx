import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function Hero() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="top">
      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <motion.div
          className="availability"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="status-dot" />
          Available for new projects
        </motion.div>

        <p className="hero-label">WEB DEVELOPER / RSWEBMEDIA</p>

        <h1>
          I BUILD
          <span> DIGITAL</span>
          <br />
          EXPERIENCES.
        </h1>

        <p className="hero-description">
          I create modern, responsive and professional websites for businesses,
          brands and individuals — designed to look great and built to perform.
        </p>

        <div className="hero-buttons">
          <button className="primary-button" onClick={scrollToWork}>
            View My Work
            <ArrowUpRight size={18} />
          </button>

          <button className="secondary-button" onClick={scrollToContact}>
            Start Your Website
          </button>
        </div>

        <div className="hero-meta">
          <span>WEB DEVELOPMENT</span>
          <span>SHOPIFY</span>
          <span>UI / UX</span>
        </div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <span>SCROLL</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}

export default Hero;