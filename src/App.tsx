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
    name: 'tinycloud-frontend',
    task: 'Build a clean user-facing interface for TinyCloud URL management.',
    contribution: 'Built the UI, connected it to the API, containerized the app, and prepared Kubernetes delivery.',
    tech: ['React', 'TypeScript', 'Vite', 'Nginx', 'Docker', 'Helm'],
    result: 'Shipped a frontend that runs locally, in containers, and in Kubernetes environments.',
    url: 'https://github.com/cherya05/tinycloud-frontend',
  },
  {
    name: 'tinycloud-project',
    task: 'Create the backend service for URL shortening, redirects, and CRUD operations.',
    contribution: 'Built the Flask API, containerized it, added CI/CD, database migrations, and metrics.',
    tech: ['Python', 'Flask', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Prometheus'],
    result: 'Delivered a deployable backend with automated image/chart publishing and observable runtime behavior.',
    url: 'https://github.com/cherya05/tinycloud-backend',
  },
  {
    name: 'tinycloud-infra',
    task: 'Provision and operate the cloud environment for TinyCloud across multiple stages.',
    contribution: 'Provisioned infra with Terraform, built Helmfile-based deploy flow, and wired cross-repo delivery.',
    tech: ['Terraform', 'Kubernetes', 'Helmfile', 'AWS ECR', 'Civo', 'GitHub Actions'],
    result: 'Enabled repeatable deployments to dev, staging, and prod from versioned application artifacts.',
    url: 'https://github.com/cherya05/tinycloud-infra',
  },
  {
    name: 'tinycloud-environment',
    task: 'Add the shared operational layer around the application runtime.',
    contribution: 'Added monitoring resources, ServiceMonitors, and supporting environment manifests for the cluster.',
    tech: ['Prometheus', 'Grafana', 'ServiceMonitor', 'Helm', 'Kubernetes'],
    result: 'Improved observability and made environment-level add-ons easier to manage outside app repos.',
    url: 'https://github.com/cherya05/tinycloud-environment',
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
          <div className="hero-role">DevOps Engineer</div>
          <p className="hero-sub">
            Linux and cloud-focused engineer learning production infrastructure, containers, CI/CD, and Kubernetes,
            currently looking for an internship or junior role.
          </p>
          <div className="hero-actions">
            <a className="btn-main" href="https://github.com/cherya05" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn-secondary" href="Danil_Chernenko__CV.pdf" download="Danil_Chernenko__CV.pdf">
              Download CV
            </a>
          </div>
        </div>

        <section className="section about-section" id="about">
          <div className="sec-head">
            <span className="sec-title">About Me</span>
          </div>
          <div className="about-card">
            <p className="about-copy">
              Danil is a DevOps-focused engineer building hands-on projects around Linux, containers, CI/CD,
              Kubernetes, and cloud infrastructure.
            </p>
            <p className="about-copy">
              Right now the focus is learning by shipping real systems end to end and growing into an internship, junior role,
              or an entry-level path in support engineering, cloud engineering, or SRE.
            </p>
            <div className="about-focus">
              <span className="focus-tag">Linux</span>
              <span className="focus-tag">Containers</span>
              <span className="focus-tag">CI/CD</span>
              <span className="focus-tag">Kubernetes</span>
              <span className="focus-tag">Cloud</span>
            </div>
          </div>
        </section>

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
                <div className="project-grid">
                  <div className="project-row">
                    <span className="project-label">Task</span>
                    <p className="project-desc">{p.task}</p>
                  </div>
                  <div className="project-row">
                    <span className="project-label">What I did</span>
                    <p className="project-desc">{p.contribution}</p>
                  </div>
                  <div className="project-row">
                    <span className="project-label">Result</span>
                    <p className="project-desc">{p.result}</p>
                  </div>
                </div>
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
            <a className="contact-item" href="mailto:cherdanil79@gmail.com">
              Email — cherdanil79@gmail.com
            </a>
            <a className="contact-item" href="https://linkedin.com/in/danil-chernenko/" target="_blank" rel="noreferrer">
              LinkedIn — danil-chernenko
            </a>
            <a className="contact-item" href="https://github.com/cherya05" target="_blank" rel="noreferrer">
              GitHub — cherya05
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
