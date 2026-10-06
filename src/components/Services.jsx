import { motion } from "motion/react";
import {
  Code2,
  ShoppingBag,
  Smartphone,
  Palette,
  Zap,
  Rocket,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Website Development",
    text: "Modern custom websites built around your brand, goals and audience.",
  },
  {
    number: "02",
    icon: Palette,
    title: "UI / UX Design",
    text: "Clean, premium interfaces designed to make your website stand out.",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Responsive Design",
    text: "Websites designed to look great on desktop, tablet and mobile.",
  },
  {
    number: "04",
    icon: ShoppingBag,
    title: "E-Commerce",
    text: "Professional online stores designed around your products and customers.",
  },
  {
    number: "05",
    icon: Zap,
    title: "Shopify Websites",
    text: "Professional Shopify websites for brands ready to sell online.",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Deployment",
    text: "From development to deployment, I can help get your website live.",
  },
];

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-number">02 / SERVICES</span>
          <h2>
            What I
            <br />
            <span>create.</span>
          </h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                className="service-card"
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="service-top">
                  <span>{service.number}</span>
                  <Icon size={24} />
                </div>

                <h3>{service.title}</h3>
                <p>{service.text}</p>

                <span className="service-arrow">↗</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;