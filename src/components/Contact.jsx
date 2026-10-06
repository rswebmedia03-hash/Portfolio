import { motion } from "motion/react";
import { ArrowUpRight, Mail, Camera } from "lucide-react";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-glow" />

      <div className="section-container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-number">05 / START A PROJECT</span>

          <h2>
            Have an idea?
            <br />
            <span>Let's build it.</span>
          </h2>

          <p>
            Tell me about your website idea, business or project. Let's turn
            it into a professional digital experience.
          </p>

          <div className="contact-buttons">
            <a
              href="mailto:rswebmedia03@gmail.com?subject=I%20Want%20To%20Build%20A%20Website"
              className="primary-button"
            >
              Start Your Website
              <ArrowUpRight size={18} />
            </a>

            <a
              href="mailto:rswebmedia03@gmail.com"
              className="secondary-button"
            >
              <Mail size={17} />
              Email Me
            </a>
          </div>

          <div className="contact-socials">
            <a
              href="https://www.instagram.com/rswebmedia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Camera size={19} />
              @rswebmedia
            </a>

            <a href="mailto:rswebmedia03@gmail.com">
              <Mail size={19} />
              rswebmedia03@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;