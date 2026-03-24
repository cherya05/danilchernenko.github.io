const skills = [
  { name: 'Linux', category: 'devops' },
  { name: 'Python', category: 'backend' },
  { name: 'Docker', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'Helm', category: 'devops' },
  { name: 'Terraform', category: 'devops' },
  { name: 'AWS', category: 'devops' },
  { name: 'MySQL', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'GitHub Actions', category: 'devops' },
  { name: 'ELK', category: 'devops' },
  { name: 'Prometheus', category: 'devops' },
  { name: 'Grafana', category: 'devops' },
]

const projects = [
  {
    name: 'TinyCloud',
    description: 'URL shortener with QR code generation — full-stack app with React frontend, Flask API, Kubernetes deployment, and CI/CD pipeline.',
    tech: ['React', 'TypeScript', 'Python', 'Flask', 'Docker', 'Kubernetes', 'Helm', 'Terraform'],
    url: 'https://github.com/danilchernenko/tinycloud',
  },
]

export default function App() {
  return (
    <>
      <div className="scene">
        <div className="glow g1" />
        <div className="glow g2" />
      </div>

      <div className="page">
        <nav>
          <a className="logo" href="#">
            <span className="logo-mark">DC</span>
            DANIL CHERNENKO
          </a>
          <div className="nav-links">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero">
          <div className="eyebrow">Portfolio</div>
          <h1>Danil<br /><strong>Chernenko</strong></h1>
          <p className="hero-sub">
            Full-stack developer & DevOps engineer. Building reliable systems from code to cloud.
          </p>
          <div className="hero-actions">
            <a className="btn-main" href="https://github.com/danilchernenko" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <section className="section" id="skills">
          <div className="sec-head">
            <span className="sec-title">Skills & Technologies</span>
          </div>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.name} className={`skill-chip ${s.category}`}>
                {s.name}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="sec-head">
            <span className="sec-title">Projects</span>
          </div>
          <div className="projects-list">
            {projects.map((p) => (
              <a key={p.name} className="project-card" href={p.url} target="_blank" rel="noreferrer">
                <div className="project-name">{p.name}</div>
                <p className="project-desc">{p.description}</p>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="sec-head">
            <span className="sec-title">Contact</span>
          </div>
          <div className="contact-links">
            <a className="contact-item" href="https://github.com/danilchernenko" target="_blank" rel="noreferrer">
              GitHub — danilchernenko
            </a>
          </div>
        </section>

        <footer>
          <span>Danil Chernenko © 2025</span>
        </footer>
      </div>
    </>
  )
}