import { motion } from "motion/react";
import { ShoppingBag, ArrowUpRight } from "lucide-react";

function Shopify() {
  return (
    <section className="shopify-section" id="shopify">
      <div className="shopify-glow" />

      <div className="section-container">
        <motion.div
          className="shopify-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="shopify-icon">
            <ShoppingBag size={28} />
          </div>

          <span className="section-number">04 / SHOPIFY</span>

          <h2>
            Shopify websites
            <br />
            <span>built to sell.</span>
          </h2>

          <p>
            I also create professional Shopify websites for brands and
            businesses looking for a modern online store.
          </p>

          <a
            href="mailto:rswebmedia03@gmail.com?subject=Shopify%20Website%20Project"
            className="primary-button"
          >
            Discuss a Shopify Project
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Shopify;