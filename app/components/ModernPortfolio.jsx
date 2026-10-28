"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const projects = [
  {
    number: "01",
    title: "Talkk.AI",
    type: "AI conversation platform",
    description:
      "Modular conversation flows and real-time interactions designed to make complex AI feel effortless.",
    image: "/work-1.png",
    tags: ["Next.js", "Node.js", "Sass", "TalkkCMS"],
  },
  {
    number: "02",
    title: "RMA QMS",
    type: "B2B mortgage platform",
    description:
      "A pixel-accurate workflow system translated from Figma into a fast, responsive React product.",
    image: "/work-2.png",
    tags: ["React", "Redux", "Bootstrap", "REST APIs"],
  },
  {
    number: "03",
    title: "School management",
    type: "Admin dashboard",
    description:
      "Role-focused workflows for student records, attendance, and performance tracking.",
    image: "/work-3.png",
    tags: ["React", "Bootstrap", "CSS", "Node.js"],
  },
];

const skillGroups = [
  {
    label: "Frontend engineering",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5 / CSS3",
      "SCSS / Sass",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    label: "Product & performance",
    items: [
      "Reusable components",
      "Responsive design",
      "Accessibility",
      "SEO",
      "Lazy loading",
      "Memoization",
      "Code splitting",
      "Core Web Vitals",
    ],
  },
  {
    label: "Integration & delivery",
    items: [
      "Redux / Redux-Thunk",
      "Context API",
      "REST APIs",
      "Jest",
      "React Testing Library",
      "Git / GitHub",
      "Webpack / Vite",
      "Figma",
    ],
  },
];
const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ModernPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });
  const progressScale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <main id="top" className="portfolio-shell">
      <motion.div
        className="scroll-progress"
        style={{ scaleX: progressScale }}
        aria-hidden="true"
      />
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#top" className="wordmark" onClick={closeMenu}>
          <span>OS</span>
          <strong>Ovais Sharif</strong>
        </a>
        <div className="nav-status">
          <i /> Open to select work
        </div>
        <button
          className="menu-button"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <div
          id="nav-links"
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a className="nav-resume" href="/Ovais_CV_Dubai.pdf" download>
            Download CV <span>↗</span>
          </a>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb orb-one" aria-hidden="true" />
        <div className="hero-orb orb-two" aria-hidden="true" />
        <div className="hero-meta">
          <span className="eyebrow">Frontend & Full Stack Engineer</span>
          <span>Dubai, UAE · 4+ years experience</span>
        </div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.75, ease: "easeOut" }}
          >
            Ships Frontends,
            <br />
            <em>Scales Full-Stack</em>
          </motion.h1>
          <motion.p
            className="hero-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.6 }}
          >
            I&apos;m Ovais Sharif — a frontend-led full stack developer based in
            Dubai, UAE. For more than four years I’ve built dashboards, portals
            and AI chat interfaces for education, mortgage and conversational AI
            teams, with React, Next.js, TypeScript and Node.js.
          </motion.p>
          {/* <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.a
              className="button button-primary"
              href="#work"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              See selected work <span>↓</span>
            </motion.a>
            <motion.a
              className="text-link"
              href="mailto:sharifovais61@gmail.com"
              whileHover={{ x: 5 }}
            >
              Start a conversation <span>↗</span>
            </motion.a>
          </motion.div> */}
        </div>
        <div className="hero-bottom">
          <span>Scroll to explore</span>
          <span className="scroll-line" />
        </div>
      </section>

      <motion.section
        id="about"
        className="about-section section-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
      >
        <div className="section-label">
          <span>01</span> About &amp; experience
        </div>
        <div className="about-content">
          <p className="section-kicker">A developer who ships</p>
          <h2>
            Turning complex product requirements into clear, scalable web
            experiences.
          </h2>
          <p className="body-copy">
            With 4+ years across Jazal Engineering, Seed Global Education, Gray
            Matrix Solutions, and Mak Byte, I build interfaces that are
            accessible, performant, and ready for real users. I partner with
            product, backend, AI, and design teams to move from Figma and API
            contracts to dependable production software.
          </p>
          <div className="stats">
            <div>
              <strong>
                4<span>+</span>
              </strong>
              <span>Years building</span>
            </div>
            <div>
              <strong>
                15<span>+</span>
              </strong>
              <span>Projects shipped</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Curiosity</span>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="work"
        className="work-section section-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={reveal}
      >
        <div className="section-label">
          <span>02</span> Selected work
        </div>
        <div className="work-content">
          <div className="section-intro">
            <div>
              <p className="section-kicker">Case studies from my toolkit</p>
              <h2>
                Products built
                <br />
                <em>for impact.</em>
              </h2>
            </div>
            <p>
              From conversational AI to operational dashboards, I make complex
              workflows feel simple, fast, and dependable.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <motion.article
                key={project.number}
                className="project-card"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.1, duration: 0.65 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 700px) 100vw, 55vw"
                  />
                  <span className="image-index">{project.number} / 03</span>
                </div>
                <div className="project-info">
                  <div className="project-heading">
                    <div>
                      <p className="project-type">{project.type}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <span className="project-arrow">↗</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="skills-section section-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
      >
        <div className="section-label">
          <span>03</span> Technical skills
        </div>
        <div className="skills-content">
          <p className="section-kicker">Core capabilities</p>
          <h2>
            A practical stack
            <br />
            <em>for real products.</em>
          </h2>
          <div className="skill-groups">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                className="skill-group"
                key={group.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.12 }}
              >
                <h3>{group.label}</h3>
                <div className="skill-grid">
                  {group.items.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="contact-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={reveal}
      >
        <div className="section-label">
          <span>04</span> Let&apos;s build what&apos;s next
        </div>
        <div className="contact-content">
          <div className="contact-heading">
            <p className="section-kicker">
              Open to full-stack &amp; frontend roles
            </p>
            <h2>
              Have a product
              <br />
              <em>worth shipping?</em>
            </h2>
          </div>
          <div className="contact-details">
            <p className="contact-copy">
              I&apos;m open to joining ambitious product teams where thoughtful
              frontend engineering and full-stack ownership make a measurable
              difference.
            </p>
            <a className="contact-email" href="mailto:sharifovais61@gmail.com">
              sharifovais61@gmail.com <span>↗</span>
            </a>
            <div className="social-links" aria-label="Social profiles">
              <a
                href="https://www.linkedin.com/in/ovais-sharif/"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <strong>Connect professionally ↗</strong>
              </a>
              <a
                href="https://github.com/ovais-sharif"
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <strong>Explore the code ↗</strong>
              </a>
            </div>
          </div>
        </div>
      </motion.section>
      <footer>
        <span>© {new Date().getFullYear()} Ovais Sharif</span>
        <span>Designed &amp; built with intention.</span>
        <div>
          <a
            href="https://github.com/ovais-sharif"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/ovais-sharif/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
