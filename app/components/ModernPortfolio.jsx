"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "motion/react";

// --- Original Content Preserved ---
const projects = [
  {
    number: "01",
    title: "Talkk.AI",
    type: "Conversation AI WebApp",
    badge: "Enterprise AI",
    year: "2024",
    description:
      "Developed an interactive AI-powered chatbot platform that enables users to engage in seamless, real-time conversations. Built responsive and reusable UI components to deliver dynamic chat experiences and improve overall user engagement.",
    image: "/work-1.png",
    tags: ["Next.js", "Node.js", "Sass", "TalkkCMS"],
    highlights: [
      "Real-time state streaming",
      "Low-latency dialog UI",
      "CMS-driven modular pipelines",
    ],
  },
  {
    number: "02",
    title: "RMA QMS",
    type: "Mortgage WebApp",
    badge: "Fintech Workflow",
    year: "2023",
    description:
      "Developed a responsive mortgage management web application with intuitive interfaces and reusable React components. Integrated REST APIs and Redux for efficient data handling, ensuring smooth navigation and a consistent user experience.",
    image: "/work-2.png",
    tags: ["React", "Redux", "Bootstrap", "REST APIs"],
    highlights: [
      "Sub-second state dispatch",
      "Complex multi-step loan underwriting",
      "Strict Figma fidelity",
    ],
  },
  {
    number: "03",
    title: "School Management",
    type: "Admin Dashboard",
    badge: "EdTech Infrastructure",
    year: "2022",
    description:
      "Built a comprehensive school management platform to simplify student information, attendance tracking, and academic performance management. Developed reusable React components and responsive dashboards to streamline workflows for teachers and administrators.",
    image: "/work-3.png",
    tags: ["React", "Bootstrap", "CSS", "Node.js"],
    highlights: [
      "RBAC permission hierarchies",
      "Bulk attendance mutations",
      "High-volume data tables",
    ],
  },
];

const skillGroups = [
  {
    label: "Frontend Engineering",
    desc: "Scalable architecture, strict code hygiene, and fluid reactive UI.",
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
    label: "Product & Performance",
    desc: "Speed as a feature, accessibility, and zero-jank micro-interactions.",
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
    label: "Integration & Delivery",
    desc: "Production resilience, deterministic state management, and CI/CD ready code.",
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

// --- Experience Timeline with Date Ranges & 2-3 Bullet Points ---
const careerTimeline = [
  {
    role: "Software Engineer - Level 2",
    company: "Jazal Engineering & Contracting",
    period: "Mar 2026 - Sep 2026",
    location: "Abu Dhabi, UAE",
    bullets: [
      "Developed and maintained responsive frontend interfaces for the companys web platforms, focusing on usability, responsive design, and consistent user experience.",
      "Improved existing frontend interfaces by refining layouts, styling, responsiveness, and cross-browser compatibility.",
      "Maintained and enhanced existing web applications while ensuring reliable functionality across desktop and mobile devices.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Seed Global Education",
    period: "Feb 2025 - Jan 2026",
    location: "Global / Remote",
    bullets: [
      "Implemented dynamic, user-friendly interfaces for study-abroad search and application management, improving student navigation and onboarding experience by 30%.",
      "Led frontend integration of AI-powered features and live search APIs, enabling real-time information retrieval on universities, courses, and scholarships, reducing research time by 80%.",
      "Built reusable, accessible, mobile-first UI components, optimized for cross-browser compatibility and high-performance rendering.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Gray Matrix Solutions",
    period: "Feb 2023 - Dec 2024",
    location: "Mumbai, India",
    bullets: [
      "Developed and maintained responsive, scalable web applications using React.js, Next.js, JavaScript, Redux, Sass, and Bootstrap, following reusable component and modern frontend development practices.",
      "Translated Figma/UI designs into responsive, pixel-perfect interfaces, while focusing on performance optimization, cross-browser compatibility, accessibility, and consistent user experiences.",
      "Collaborated with backend, AI, and cross-functional teams to integrate RESTful APIs, manage application data and state, troubleshoot frontend issues, and deliver reliable production-ready web solutions.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Mak Byte",
    period: "Jul 2022 - Jan 2023",
    location: "India",
    bullets: [
      "Developed and maintained responsive web applications using React.js, JavaScript, Bootstrap, CSS, and RESTful APIs, following reusable and maintainable frontend development practices.",
      "Built reusable React components and interactive user interfaces, with a focus on responsive design, usability, performance, and consistent user experiences across devices.",
      "Collaborated with clients, administrators, and cross-functional teams to understand requirements, improve application workflows, integrate backend APIs, and deliver reliable frontend solutions.",
    ],
  },
];

// --- Interactive 3D Perspective Card (Apple / Awwwards Inspired) ---
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative rounded-3xl p-6 md:p-8 glass-panel border border-white/10 hover:border-emerald-500/40 transition-colors duration-500 will-change-transform text-left"
    >
      <div className="absolute inset-0 -z-10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Top Browser Bar / Metadata */}
      {/* <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <span className="ml-2 px-2.5 py-0.5 rounded-full bg-white/5 text-[11px] text-zinc-300 border border-white/5">
            {project.badge}
          </span>
        </div>
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Project Description & Details */}
        <div className="lg:col-span-5 space-y-5">
          <div>
            <p className="text-xs uppercase tracking-widest font-mono text-emerald-400 mb-1">
              {project.type}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-zinc-300 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Mockup */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-zinc-900/90 border border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-2xl">
            <Image
              src={project.image}
              alt={`${project.title} interface preview`}
              fill
              className="object-cover object-top filter brightness-95 group-hover:brightness-105 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- Interactive Breathing Particles (Fade In / Fade Out Stars) ---
function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = 0;
    let height = 0;
    const dpr =
      typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const numParticles = 80;
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * (width || window.innerWidth || 1200),
      y: Math.random() * (height || 800),
      radius: Math.random() * 1.6 + 0.8,
      alpha: Math.random() * 0.5 + 0.2,
      alphaSpeed:
        (Math.random() * 0.012 + 0.006) * (Math.random() > 0.5 ? 1 : -1),
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      color: Math.random() > 0.4 ? "16, 185, 129" : "220, 230, 245",
    }));

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha += p.alphaSpeed;
        if (p.alpha <= 0.1 || p.alpha >= 0.85) {
          p.alphaSpeed = -p.alphaSpeed;
        }

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let extraAlpha = 0;
        if (dist < 130) {
          extraAlpha = (1 - dist / 130) * 0.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${Math.min(p.alpha + extraAlpha, 1)})`;
        ctx.shadowBlur = p.radius > 1.2 ? 10 : 4;
        ctx.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[1] w-full h-full"
    />
  );
}

// --- Main Page Component ---
export default function ModernPortfolio() {
  const [dubaiTime, setDubaiTime] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Experience accordion state
  const [expandedExp, setExpandedExp] = useState(null);

  // Motion Scroll Progress
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Solid, flicker-free passive scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Live Dubai Time Clock (UTC+4)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setDubaiTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#070709] text-zinc-100 bg-noise selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Scroll indicator bar across the very top (Top-most z-index) */}
      <motion.div
        style={{ scaleX: smoothProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 origin-left z-[1000] shadow-[0_0_15px_rgba(16,185,129,1)] pointer-events-none"
      />

      {/* Ambient Radial Mesh Lights */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-mesh-radial" />
      <div className="fixed inset-0 pointer-events-none -z-10 bg-grid-pattern opacity-40" />

      {/* --- HUD / Navigation Bar (Always on top with z-[999], completely immune to 3D card layering) --- */}
      <header
        className={`fixed inset-x-0 top-0 z-[999] transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur border-b border-white/10 py-3.5 shadow-3xl shadow-black/80"
            : "bg-transparent border-b border-transparent py-5 md:py-6"
        }`}
      >
        <nav className="w-full max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          {/* Logo & Identity */}
          <a
            href="#top"
            className="flex items-center gap-3 group text-sm font-semibold tracking-tight text-white hover:text-emerald-400 transition-colors shrink-0"
          >
            <span className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-mono text-xs text-emerald-400 group-hover:scale-105 group-hover:bg-emerald-500/20 transition-transform shrink-0">
              OS
            </span>
            <div className="flex flex-col">
              <span className="leading-tight font-medium text-white group-hover:text-emerald-300 transition-colors whitespace-nowrap">
                Ovais Sharif
              </span>
              <span className="text-[10px] text-zinc-400 font-mono hidden sm:inline whitespace-nowrap">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.04] backdrop-blur-sm rounded-full p-1 border border-white/10 text-sm font-medium text-zinc-300 shrink-0">
            <a
              href="#about"
              className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              Experience
            </a>
            <a
              href="#work"
              className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              Selected Work
            </a>
            <a
              href="#skills"
              className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              Stack
            </a>
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
            >
              Contact
            </a>
          </div>

          {/* Right Status Pill & CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Live Dubai Time Indicator */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 shrink-0 whitespace-nowrap">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>DXB {dubaiTime || "12:00 PM"}</span>
            </div>

            {/* Enhanced Glow Download CV Button (Desktop) */}
            <a
              href="/Ovais_Sharif_CV_Full_Stack_Dev.pdf"
              download
              className="group relative hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs font-semibold text-zinc-950 overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.65)] shrink-0 whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-[length:200%_auto] transition-all duration-500 group-hover:bg-right" />
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none" />

              <span className="relative z-10 flex items-center gap-1.5 tracking-tight">
                <span>Download CV</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.4}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-300 hover:text-white focus:outline-none rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 mx-4 p-5 glass-panel rounded-2xl flex flex-col gap-4 text-sm font-medium border border-zinc-800 bg-[#070709]/95 backdrop-blur-xl shadow-2xl"
          >
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 py-1"
            >
              Experience
            </a>
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 py-1"
            >
              Selected Work (03)
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 py-1"
            >
              Stack &amp; Capabilities
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-emerald-400 py-1"
            >
              Get In Touch
            </a>
            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">
                DXB {dubaiTime}
              </span>

              <a
                href="/Ovais_Sharif_CV_Full_Stack_Dev.pdf"
                download
                className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-950 overflow-hidden bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.35)] active:scale-95 transition-all"
              >
                <span>Download CV</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.4}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section
        id="top"
        className="relative w-full pt-36 md:pt-48 pb-20 md:pb-28 overflow-hidden z-0"
      >
        <ParticlesBackground />

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-500/25 via-teal-400/20 to-transparent blur-[120px] pointer-events-none rounded-full z-0" />

        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center relative z-10 flex flex-col items-center space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-3 text-center py-2"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-none">
              Ovais Sharif
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-zinc-200">
              Software Engineer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="max-w-2xl mx-auto pt-2"
          >
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed text-center">
              Engineering high-performance web applications with a focus on
              interface craft, resilient API architecture, and agentic AI-driven
              velocity.
            </p>
          </motion.div>

          {/* 3-Column Engineering Telemetry Spec Bar */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="pt-6 w-full max-w-4xl mx-auto"
          >
            <div className="rounded-2xl glass-panel border border-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="space-y-1.5 md:border-r md:border-white/5 md:pr-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                    Frontend Architecture
                  </span>
                  <p className="text-md font-medium text-emerald-300">
                    React.js · Next.js · TypeScript
                  </p>
                </div>

                <div className="space-y-1.5 md:border-r md:border-white/5 md:pr-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                    Backend &amp; Microservices
                  </span>
                  <p className="text-md font-medium text-teal-300">
                    Python FastAPI · REST APIs
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                    Experience
                  </span>
                  <p className="text-md font-medium text-zinc-200">
                    4+ Years · UAE
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION (Sandboxed with 'relative isolate') --- */}
      <section
        id="about"
        className="relative isolate py-20 md:py-28 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/5"
      >
        <div className="space-y-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
              <span>01</span>
              <span>//</span>
              <span>Career History</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Work Experience
            </h2>
          </div>

          {/* Experience Accordion Dropdown Cards */}
          <div className="space-y-3.5 pt-2">
            {careerTimeline.map((item, idx) => {
              const isOpen = expandedExp === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setExpandedExp(isOpen ? null : idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setExpandedExp(isOpen ? null : idx);
                    }
                  }}
                  className={`group p-5 sm:p-6 rounded-2xl border transition-all duration-300 ease-out cursor-pointer text-left select-none hover:-translate-y-1 hover:scale-[1.01] hover:border-emerald-400/40 hover:bg-emerald-500/[0.04] hover:shadow-xl hover:shadow-emerald-500/10 hover:ring-1 hover:ring-emerald-400/20 ${
                    isOpen
                      ? "glass-panel border-emerald-500/40 bg-white/[0.04] shadow-lg shadow-emerald-950/20"
                      : "glass-card-interactive border-white/5 bg-white/[0.015]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base sm:text-lg font-semibold text-white">
                          {item.role}
                        </h3>
                        <span className="text-xs text-zinc-500 hidden sm:inline">
                          •
                        </span>
                        <span className="text-base font-mono font-semibold text-emerald-400">
                          {item.company}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                        {item.period}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className={`text-sm ${
                          isOpen ? "text-emerald-400" : "text-zinc-400"
                        }`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-white/10">
                          <ul className="space-y-2.5">
                            {item.bullets.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5 leading-relaxed"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SELECTED WORK EXHIBITION (Sandboxed with 'relative isolate' to contain 3D perspective cards) --- */}
      <section
        id="work"
        className="relative isolate py-20 md:py-28 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/5"
      >
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
                <span>02</span>
                <span>//</span>
                <span>Selected Work</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Products built{" "}
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-100">
                  for impact.
                </span>
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.number}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- TECHNICAL CAPABILITIES & ARCHITECTURE BENTO GRID (Sandboxed with 'relative isolate') --- */}
      <section
        id="skills"
        className="relative isolate py-20 md:py-28 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/5"
      >
        <div className="space-y-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
              <span>03</span>
              <span>//</span>
              <span>Technical Stack</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              A practical stack{" "}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-100">
                for real products.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group, groupIdx) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
                className="glass-card-interactive p-6 md:p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="text-xs font-mono text-emerald-400 mb-2">
                    0{groupIdx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {group.label}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {group.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2 pt-4 border-t border-white/5">
                  {group.items.map((skill, sIdx) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-300 hover:border-emerald-500/30 hover:bg-emerald-500/[0.03] transition-colors"
                    >
                      <span className="font-medium">{skill}</span>
                      <span className="font-mono text-[10px] text-zinc-500">
                        {String(sIdx + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full-Stack FastAPI & Systems Spotlight Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/25 bg-gradient-to-r from-emerald-950/20 via-zinc-900/40 to-transparent">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                  Full-Stack Specialization
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Python FastAPI Search Engine &amp; Reactive UI Bridge
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Beyond pure frontend styling, I build fast Python FastAPI
                  microservices designed for asynchronous query streaming, fuzzy
                  search indexing, and resilient REST API consumption in React
                  web clients.
                </p>
              </div>
              <div className="md:col-span-4 font-mono text-xs p-4 rounded-2xl bg-black/70 border border-white/10 text-emerald-300 space-y-2">
                <div className="text-zinc-500">// Benchmark Latency</div>
                <div>FastAPI Endpoint: {"< 14ms"}</div>
                <div>Frontend Re-render: 60fps</div>
                <div className="text-teal-400">
                  Async Query Parallelism: Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- KINETIC MARQUEE SECTION --- */}
      <div className="relative isolate py-10 overflow-hidden border-y border-white/5 bg-white/[0.01]">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 font-mono text-sm tracking-widest uppercase text-zinc-500">
          <span>• REACT.JS &amp; NEXT.JS ARCHITECTURE</span>
          <span>• Dubai, UAE</span>
          <span>• 4+ YEARS PRODUCTION DELIVERY</span>
          <span>• PYTHON FASTAPI INTEGRATION</span>
          <span>• CORE WEB VITALS OPTIMIZATION</span>
          <span>• FIGMA-TO-CODE ACCURACY</span>
          <span>• REACT.JS &amp; NEXT.JS ARCHITECTURE</span>
          <span>• Dubai, UAE</span>
          <span>• 4+ YEARS PRODUCTION DELIVERY</span>
          <span>• PYTHON FASTAPI INTEGRATION</span>
          <span>• CORE WEB VITALS OPTIMIZATION</span>
          <span>• FIGMA-TO-CODE ACCURACY</span>
        </div>
      </div>

      {/* --- CONTACT & CONVERSATION SECTION (Sandboxed with 'relative isolate') --- */}
      <section
        id="contact"
        className="relative isolate py-24 md:py-32 px-4 md:px-8 max-w-6xl mx-auto"
      >
        <div className="relative rounded-3xl glass-panel border border-white/10 p-8 sm:p-14 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
                <span>04</span>
                <span>//</span>
                <span>Let&apos;s Build What&apos;s Next</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Have a product{" "}
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-white">
                  worth shipping?
                </span>
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                I&apos;m open to joining ambitious product teams where
                thoughtful frontend engineering and full-stack ownership make a
                measurable difference.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <a
                href="mailto:sharifovais61@gmail.com"
                className="group p-5 rounded-2xl bg-white text-zinc-950 font-semibold flex items-center justify-between hover:bg-zinc-200 transition-all shadow-xl"
              >
                <div>
                  <div className="text-xs text-zinc-600 font-mono">
                    Direct Communication
                  </div>
                  <div className="text-base sm:text-lg">
                    sharifovais61@gmail.com
                  </div>
                </div>
                <span className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.linkedin.com/in/mohammad-ovais-sharif/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl glass-card-interactive border border-white/10 text-xs font-mono text-zinc-300 hover:text-white flex flex-col justify-between space-y-3"
                >
                  <span className="text-zinc-500">Professional</span>
                  <div className="font-semibold text-sm flex items-center justify-between">
                    <span>LinkedIn</span>
                    <span>↗</span>
                  </div>
                </a>

                <a
                  href="https://github.com/ovais-sharif"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl glass-card-interactive border border-white/10 text-xs font-mono text-zinc-300 hover:text-white flex flex-col justify-between space-y-3"
                >
                  <span className="text-zinc-500">Open Source</span>
                  <div className="font-semibold text-sm flex items-center justify-between">
                    <span>GitHub</span>
                    <span>↗</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative isolate border-t border-white/5 py-10 px-4 md:px-8 max-w-6xl mx-auto text-xs font-mono text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Ovais Sharif · Designed &amp; built with
          intention using AI Agents.
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ovais-sharif"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-ovais-sharif/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="#top"
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
