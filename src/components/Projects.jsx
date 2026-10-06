import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Ganpati Invitation 2026",
    category: "Interactive Web Experience",
    description:
      "A visually immersive digital invitation experience created for Ganpati Chaturthi with a strong focus on animation, interaction, and responsive presentation.",
    tags: ["Web Development", "Interactive", "Responsive"],
    url: "https://ganpati-invitation-2026.vercel.app/",
  },
  {
    number: "02",
    title: "boAt Airdopes 141",
    category: "3D Product Experience",
    description:
      "A modern 3D product website designed around the boAt Airdopes 141, combining immersive visuals, interactive presentation, and a premium product-focused interface.",
    tags: ["3D Web", "Product Design", "Interactive"],
    url: "https://airdopes-3-d--rswebmedia03.replit.app/",
  },
  {
    number: "03",
    title: "Hotel Royal Inn",
    category: "Hotel Website",
    description:
      "A professional hospitality website designed to showcase Hotel Royal Inn with an elegant interface focused on the property, rooms, amenities, and guest experience.",
    tags: ["Hospitality", "Responsive", "Web Design"],
    url: "https://hotel-royal-inn-2yt.caffeine.xyz/",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="work">
      <div className="projects-container">

        {/* Section Header */}
        <div className="section-heading projects-heading">
          <div>
            <span className="section-label">03 — SELECTED WORK</span>

            <h2>
              Websites I&apos;ve
              <br />
              <span>Built.</span>
            </h2>
          </div>

          <p>
            A selection of digital experiences designed and developed with
            a focus on modern interfaces, responsive layouts, interaction,
            and performance.
          </p>
        </div>

        {/* Projects */}
        <div className="projects-list">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.number}
            >
              {/* Project Number */}
              <div className="project-number">
                {project.number}
              </div>

              {/* Browser Preview */}
              <div className="project-preview">
                <div className="browser-window">

                  {/* Browser Top Bar */}
                  <div className="browser-top">
                    <div className="browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="browser-address">
                      {new URL(project.url).hostname}
                    </div>

                    <div className="browser-icon">
                      <ExternalLink size={13} />
                    </div>
                  </div>

                  {/* Website Preview */}
                  <div className="browser-content">
                    <div className="preview-gradient"></div>

                    <div className="preview-content">
                      <span className="preview-label">
                        RSWEBMEDIA
                      </span>

                      <h3>{project.title}</h3>

                      <span className="preview-category">
                        {project.category}
                      </span>
                    </div>

                    <div className="preview-orb preview-orb-one"></div>
                    <div className="preview-orb preview-orb-two"></div>
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div className="project-info">

                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>0{index + 1}</span>
                </div>

                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {/* View Website */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <span>View Live Website</span>

                  <span className="project-link-icon">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="projects-bottom">
          <p>
            Have a project in mind?
          </p>

          <a href="#contact">
            Let&apos;s build something exceptional
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}