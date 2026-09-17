import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownToLine, ArrowRight, Cloud, Code2, Mail, MapPin, Menu, Server, Sparkles, X } from 'lucide-react';
import './styles.css';

const avatarUrl = new URL('../assets/images/avatar.png', import.meta.url).href;
const cvUrl = new URL('../assets/EMANUEL_PAULO_JAVA_DEVELOPER__CV.pdf', import.meta.url).href;

const experiences = [
  {
    period: '2 Nov 2026 — Present',
    company: 'Vodafone Portugal',
    role: 'Backend Developer',
    description: 'Building and evolving digital channel platforms, integrations and reliable customer-facing services within Vodafone Portugal’s Backend Engineering team.',
    tags: ['Java', 'Spring Boot', 'AWS', 'Microservices'],
    current: true,
  },
  {
    period: '2025 — 2026',
    company: 'Asseco PST',
    role: 'Java Backend Developer',
    description: 'Built financial-services integrations, batch processing flows and channel APIs with strong attention to reliability, security and observability.',
    tags: ['Java 21', 'Spring Boot', 'RabbitMQ', 'SQL Server'],
  },
  {
    period: '2024 — 2025',
    company: 'Critical TechWorks · BMW Group',
    role: 'Java Developer',
    description: 'Contributed to automotive software using reactive Java services, clean APIs and collaborative engineering practices.',
    tags: ['Quarkus', 'Panache', 'Mutiny', 'Docker'],
  },
];

const projects = [
  {
    number: '01',
    title: 'GitHub Battle',
    description: 'An open-source full-stack arena that compares GitHub developers through transparent weighted scoring. Spring Boot API, OpenAPI contract, GitHub integration, extensive automated tests and a responsive React frontend.',
    tags: ['Open Source', 'Spring Boot 4', 'React', 'Azure'],
    link: 'https://emanueldemarao18.github.io/github-battle-web/',
  },
  {
    number: '02',
    title: 'SnapVegan',
    description: 'A product-focused platform that helps people discover whether products match a vegan lifestyle through a fast, mobile-first experience.',
    tags: ['React', 'TypeScript', 'Product'],
    link: 'https://github.com/emanueldemarao18',
  },
  {
    number: '03',
    title: 'MyLinks API',
    description: 'A backend service for organising and reviewing saved links, built around authentication, clean data modelling and maintainable APIs.',
    tags: ['NestJS', 'Prisma', 'MySQL'],
    link: 'https://github.com/emanueldemarao18/my-saved-links',
  },
];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <header className="nav-shell">
        <nav className="nav container" aria-label="Main navigation">
          <a className="logo" href="#home" aria-label="Emanuel Paulo home">EP<span>.</span></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['About', 'Experience', 'Projects', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
          </div>
          <a className="button button-ghost nav-cv" href={cvUrl} download>
            <ArrowDownToLine size={17} /> Download CV
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow hero-enter delay-1"><span /> BACKEND ENGINEER · LISBON, PORTUGAL</div>
            <h1 className="hero-enter delay-2">Building reliable<br /><em>backend systems.</em></h1>
            <p className="hero-lead hero-enter delay-3">Java · Spring Boot · Microservices · REST APIs · AWS · Kubernetes</p>
            <p className="hero-description hero-enter delay-3">I turn complex business requirements into scalable platforms, secure integrations and software teams can trust.</p>
            <div className="hero-actions hero-enter delay-4">
              <a className="button button-primary" href="#projects">View projects <ArrowRight size={18} /></a>
              <a className="button button-ghost" href={cvUrl} download><ArrowDownToLine size={18} /> Download CV</a>
            </div>
            <div className="socials hero-enter delay-4">
              <a href="https://github.com/emanueldemarao18" target="_blank" aria-label="GitHub"><span>GH</span></a>
              <a href="https://www.linkedin.com/in/emanueldemarao/" target="_blank" aria-label="LinkedIn"><span>IN</span></a>
              <a href="mailto:emanueldemarao@gmail.com" aria-label="Email"><Mail /></a>
            </div>
          </div>

          <div className="hero-visual hero-enter delay-3" aria-label="Emanuel Paulo avatar and code preview">
            <div className="orb orb-one" /><div className="orb orb-two" />
            <div className="portrait-card">
              <img src={avatarUrl} alt="Emanuel Paulo's GitHub avatar" />
              <div className="portrait-label"><strong>EMANUEL PAULO</strong><span>BACKEND ENGINEER</span></div>
              <div className="portrait-mark">EP.<small>BUILD<br />DEPLOY<br />IMPROVE</small></div>
            </div>
            <div className="code-card float">
              <div className="code-top"><span /><span /><span /><small>Application.java</small></div>
              <pre><code><b>@SpringBootApplication</b>{'\n'}public class Application {'{'}{'\n'}  public static void main(String[] args) {'{'}{'\n'}    SpringApplication.run(Application.class, args);{'\n'}  {'}'}{'\n'}{'}'}</code></pre>
            </div>
          </div>

          <div className="proof-grid hero-enter delay-4">
            <article><Server /><div><strong>2+ years</strong><span>building backend systems</span></div></article>
            <article><Code2 /><div><strong>Java & Spring</strong><span>production experience</span></div></article>
            <article><Cloud /><div><strong>Cloud-native</strong><span>scalable · resilient · secure</span></div></article>
          </div>
        </section>

        <section className="section container" id="about">
          <div className="section-kicker reveal">01 / ABOUT</div>
          <div className="about-grid">
            <h2 className="reveal">Engineer by craft.<br /><span>Builder by mindset.</span></h2>
            <div className="about-copy reveal">
              <p>I’m Emanuel, a backend engineer focused on the Java and Spring ecosystem. I enjoy the invisible work that makes products feel effortless: dependable services, clear contracts, thoughtful data flows and systems that remain understandable as they grow.</p>
              <p>Alongside professional engineering, I’m studying Software Engineering and exploring cloud, AI engineering and the next generation of developer tools.</p>
              <div className="location"><MapPin size={18} /> Lisbon, Portugal</div>
            </div>
          </div>
        </section>

        <section className="section container" id="experience">
          <div className="section-kicker reveal">02 / EXPERIENCE</div>
          <div className="section-heading reveal"><h2>Where I’ve built.</h2><p>Experience across telecom, financial services and automotive software.</p></div>
          <div className="timeline">
            {experiences.map((item, index) => (
              <article className="experience-card reveal" key={item.company} style={{ '--delay': `${index * 90}ms` } as React.CSSProperties}>
                <div className="experience-period">{item.period}</div>
                <div className="experience-main">
                  <div className="experience-title"><h3>{item.role}</h3>{item.current && <span>Current</span>}</div>
                  <h4>{item.company}</h4>
                  <p>{item.description}</p>
                  <div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="section-kicker reveal">03 / SELECTED WORK</div>
          <div className="section-heading reveal"><h2>Projects with purpose.</h2><p>Things I build to learn, solve and ship.</p></div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a className="project-card reveal" href={project.link} target="_blank" key={project.title} style={{ '--delay': `${index * 100}ms` } as React.CSSProperties}>
                <div className="project-top"><span>{project.number}</span><ArrowRight /></div>
                <div><h3>{project.title}</h3><p>{project.description}</p></div>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </a>
            ))}
          </div>
        </section>

        <section className="section stack-section container">
          <div className="section-kicker reveal">04 / TOOLBOX</div>
          <div className="stack-marquee reveal" aria-label="Technology stack">
            <div>{['Java', 'Spring Boot', 'Quarkus', 'REST APIs', 'Microservices', 'RabbitMQ', 'SQL', 'Docker', 'AWS', 'Kubernetes'].map(x => <span key={x}>{x}</span>)}</div>
          </div>
          <div className="learning-card reveal"><Sparkles /><div><small>CURRENTLY EXPLORING</small><strong>AI Engineering, cloud architecture and Swift.</strong></div></div>
        </section>

        <section className="contact section container" id="contact">
          <div className="contact-card reveal">
            <div><div className="section-kicker">05 / CONTACT</div><h2>Let’s build something<br /><span>that matters.</span></h2></div>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:emanueldemarao@gmail.com">Start a conversation <Mail size={18} /></a>
              <a className="text-link" href="https://www.linkedin.com/in/emanueldemarao/" target="_blank">Connect on LinkedIn <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="container footer"><a className="logo" href="#home">EP<span>.</span></a><p>Designed & built by Emanuel Paulo · 2026</p><a href="#home">Back to top ↑</a></footer>
    </>
  );
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
