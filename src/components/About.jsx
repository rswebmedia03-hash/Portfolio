import { motion } from "motion/react";

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-number">01 / ABOUT</span>
          <h2>
            Building websites
            <br />
            <span>with purpose.</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-large-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              RSWEBMEDIA is my personal web-development brand where I design
              and build modern digital experiences.
            </p>
          </motion.div>

          <motion.div
            className="about-description"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              My focus is simple — create websites that look professional,
              feel modern and work smoothly across every device.
            </p>

            <p>
              From custom websites and interactive experiences to e-commerce
              and Shopify development, I turn ideas into complete websites.
            </p>

            <a
              href="mailto:rswebmedia03@gmail.com"
              className="text-link"
            >
              Let's work together ↗
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;