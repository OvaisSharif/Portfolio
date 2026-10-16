'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

const projects = [
  { number: '01', title: 'Scalable product interfaces', type: 'Frontend systems', description: 'React and Next.js experiences designed to make complex workflows feel calm, fast, and intuitive.', image: '/work-1.png', tags: ['Next.js', 'React', 'TypeScript'] },
  { number: '02', title: 'Commerce, with character', type: 'Digital product', description: 'A considered storefront experience balancing conversion, clarity, and a flexible component system.', image: '/work-2.png', tags: ['Next.js', 'Tailwind', 'UI/UX'] },
  { number: '03', title: 'Interfaces that scale', type: 'Web application', description: 'A responsive application foundation built for teams that need speed without sacrificing craft.', image: '/work-3.png', tags: ['React', 'Redux', 'Firebase'] },
]

const skills = ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Redux', 'Figma', 'Git']

export default function ModernPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main id="top" className="portfolio-shell">
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#top" className="wordmark" onClick={() => setMenuOpen(false)}><span>OS</span> Ovais Sharif</a>
        <button className="menu-button" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button>
        <div id="nav-links" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-resume" href="/Ovais_Resume.pdf" download>Résumé <span>↗</span></a>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-meta"><span className="status-dot" /> Available for select opportunities <span className="meta-location">Based in Dubai, UAE</span></div>
        <motion.div className="hero-content" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}>
          <motion.p className="eyebrow" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>Frontend engineer / interface architect</motion.p>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}>Building digital products <em>people enjoy using.</em></motion.h1>
          <motion.p className="hero-copy" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>I&apos;m Ovais — a frontend engineer focused on creating thoughtful, high-performance experiences with React and Next.js.</motion.p>
          <motion.div className="hero-actions" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}><motion.a className="button button-primary" href="#work" whileHover={{ scale: 1.04, x: 4 }} whileTap={{ scale: 0.97 }}>Explore my work <span>↓</span></motion.a><motion.a className="text-link" href="mailto:ovais@example.com" whileHover={{ x: 4 }}>Let&apos;s talk <span>↗</span></motion.a></motion.div>
        </motion.div>
        <div className="hero-bottom"><span>01 — 03</span><span>Scroll to explore <span className="scroll-line" /></span></div>
      </section>

      <motion.section id="about" className="about-section section-grid" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
        <div className="section-label">About / 01</div>
        <div className="about-content"><h2>A developer who cares about the details <span>as much as the big picture.</span></h2><p>With 2.5+ years of experience, I turn ambitious ideas into reliable, refined products. My work sits at the intersection of engineering, interaction, and visual design.</p><div className="stats"><div><strong>2.5+</strong><span>Years building</span></div><div><strong>15+</strong><span>Projects shipped</span></div><div><strong>∞</strong><span>Curiosity</span></div></div></div>
      </motion.section>

      <motion.section id="work" className="work-section section-grid" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7 }}><div className="section-label">Selected work / 02</div><div className="work-content"><div className="section-intro"><h2>Recent things I&apos;ve made.</h2><p>A selection of products and experiments from the last few years.</p></div><div className="project-list">{projects.map((project) => <motion.article key={project.number} className="project-card" whileHover={{ y: -6 }}><div className="project-image"><Image src={project.image} alt="" fill sizes="(max-width: 700px) 100vw, 60vw" /></div><div className="project-info"><div className="project-heading"><span className="project-number">{project.number}</span><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><span className="project-arrow">↗</span></div><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></motion.article>)}</div></div></motion.section>

      <motion.section className="skills-section section-grid" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }}><div className="section-label">Toolkit / 03</div><div className="skills-content"><h2>Tools I use to turn ideas into <span>real things.</span></h2><div className="skill-grid">{skills.map((skill, index) => <div key={skill}><span>0{index + 1}</span>{skill}</div>)}</div></div></motion.section>

      <motion.section id="contact" className="contact-section" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }}><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s make something <em>meaningful.</em></h2><a className="contact-email" href="mailto:ovais@example.com">ovais@example.com <span>↗</span></a></motion.section>
      <footer><span>© {new Date().getFullYear()} Ovais Sharif</span><span>Designed & built with intention.</span><div><a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer>
    </main>
  )
}
