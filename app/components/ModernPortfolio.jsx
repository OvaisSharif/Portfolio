'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'

const projects = [
  { number: '01', title: 'Talkk.AI', type: 'AI conversation platform', description: 'Modular conversation flows and real-time interactions designed to make complex AI feel effortless.', image: '/work-1.png', tags: ['Next.js', 'Node.js', 'Sass', 'TalkkCMS'] },
  { number: '02', title: 'RMA QMS', type: 'B2B mortgage platform', description: 'A pixel-accurate workflow system translated from Figma into a fast, responsive React product.', image: '/work-2.png', tags: ['React', 'Redux', 'Bootstrap', 'REST APIs'] },
  { number: '03', title: 'School management', type: 'Admin dashboard', description: 'Role-focused workflows for student records, attendance, and performance tracking.', image: '/work-3.png', tags: ['React', 'Bootstrap', 'CSS', 'Node.js'] },
]

const skills = ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'Tailwind CSS', 'Jest', 'Figma', 'Git', 'REST APIs']
const reveal = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } } }

export default function ModernPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 })
  const progressScale = useTransform(progress, [0, 1], [0, 1])

  return (
    <main id="top" className="portfolio-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progressScale }} aria-hidden="true" />
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#top" className="wordmark" onClick={closeMenu}><span>OS</span><strong>Ovais Sharif</strong></a>
        <div className="nav-status"><i /> Open to select work</div>
        <button className="menu-button" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button>
        <div id="nav-links" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Work</a><a href="#contact" onClick={closeMenu}>Contact</a><a className="nav-resume" href="/Ovais_Resume.pdf" download>Résumé <span>↗</span></a>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb orb-one" aria-hidden="true" /><div className="hero-orb orb-two" aria-hidden="true" />
        <div className="hero-meta"><span className="eyebrow">Frontend engineer / interface architect</span><span>Dubai, UAE · 4+ years</span></div>
        <div className="hero-content">
          <motion.p className="hero-kicker" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .6 }}>I build for the web<span className="accent-dot">.</span></motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25, duration: .75, ease: 'easeOut' }}>Digital products<br /><em>with a pulse.</em></motion.h1>
          <motion.p className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .38, duration: .6 }}>I&apos;m Ovais — a frontend developer crafting responsive products, thoughtful systems, and AI-enabled experiences with React and Next.js.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5, duration: .6 }}><motion.a className="button button-primary" href="#work" whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }}>See selected work <span>↓</span></motion.a><motion.a className="text-link" href="mailto:sharifovais61@gmail.com" whileHover={{ x: 5 }}>Start a conversation <span>↗</span></motion.a></motion.div>
        </div>
        <div className="hero-bottom"><span>Scroll to explore</span><span className="scroll-line" /></div>
      </section>

      <motion.section id="about" className="about-section section-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={reveal}>
        <div className="section-label"><span>01</span> About</div><div className="about-content"><p className="section-kicker">A little context</p><h2>Good interfaces are felt before they&apos;re understood.</h2><p className="body-copy">With 4+ years across B2B and B2C products, I turn ambitious ideas into reliable, refined interfaces. My work lives where frontend engineering, interaction, and visual design meet.</p><div className="stats"><div><strong>4<span>+</span></strong><span>Years building</span></div><div><strong>15<span>+</span></strong><span>Projects shipped</span></div><div><strong>∞</strong><span>Curiosity</span></div></div></div>
      </motion.section>

      <motion.section id="work" className="work-section section-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }} variants={reveal}><div className="section-label"><span>02</span> Selected work</div><div className="work-content"><div className="section-intro"><div><p className="section-kicker">Selected case studies</p><h2>Things I&apos;ve made<br /><em>useful.</em></h2></div><p>Product thinking, expressive UI, and a little engineering magic.</p></div><div className="project-list">{projects.map((project, index) => <motion.article key={project.number} className="project-card" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: index * .1, duration: .65 }} whileHover={{ y: -8 }}><div className="project-image"><Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 700px) 100vw, 55vw" /><span className="image-index">{project.number} / 03</span></div><div className="project-info"><div className="project-heading"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><span className="project-arrow">↗</span></div><p className="project-description">{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></motion.article>)}</div></div></motion.section>

      <motion.section className="skills-section section-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={reveal}><div className="section-label"><span>03</span> Toolkit</div><div className="skills-content"><p className="section-kicker">The stack</p><h2>Tools for making<br /><em>ideas real.</em></h2><div className="skill-grid">{skills.map((skill, index) => <motion.div key={skill} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .04 }}><span>0{index + 1}</span>{skill}</motion.div>)}</div></div></motion.section>

      <motion.section id="contact" className="contact-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }} variants={reveal}><p className="section-kicker">Have a project in mind?</p><h2>Let&apos;s make something<br /><em>people remember.</em></h2><a className="contact-email" href="mailto:sharifovais61@gmail.com">sharifovais61@gmail.com <span>↗</span></a></motion.section>
      <footer><span>© {new Date().getFullYear()} Ovais Sharif</span><span>Designed &amp; built with intention.</span><div><a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer>
    </main>
  )
}
