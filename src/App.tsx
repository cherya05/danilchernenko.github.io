import { useEffect, useState } from 'react'

type View = 'home' | 'tinycloud'

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

function readView(): View {
  return window.location.hash === '#tinycloud' ? 'tinycloud' : 'home'
}

function TinyCloudPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="detail-page">
      <nav>
        <button className="back-link" type="button" onClick={onBack}>
          Back
        </button>
        <div className="nav-links">
          <a href="https://github.com/cherya05/tinycloud-frontend" target="_blank" rel="noreferrer">Frontend</a>
          <a href="https://github.com/cherya05/tinycloud-backend" target="_blank" rel="noreferrer">Backend</a>
          <a href="https://github.com/cherya05/tinycloud-infra" target="_blank" rel="noreferrer">Infra</a>
        </div>
      </nav>

      <section className="detail-hero">
        <div className="detail-kicker">Project Spotlight</div>
        <h1 className="detail-title">TinyCloud</h1>
        <p className="detail-copy">
          A full-stack URL shortener built as a real DevOps learning project: application delivery, CI/CD,
          Kubernetes deployment, and observability in one system.
        </p>
      </section>

      <section className="section project-gallery">
        <div className="sec-head">
          <span className="sec-title">Project View</span>
        </div>
        <div className="gallery-grid">
          <article className="shot-card shot-primary">
            <div className="shot-meta">
              <span className="shot-label">Screen 01</span>
              <span className="shot-caption">Landing and link creation flow</span>
            </div>
            <div className="tinycloud-shot">
              <div className="shot-nav">
                <div className="shot-brand">
                  <span className="shot-brand-mark">cloud</span>
                  tinycloud
                </div>
                <div className="shot-links">
                  <span>Links</span>
                  <span>Docs</span>
                </div>
                <div className="shot-status">Online</div>
              </div>

              <div className="shot-hero">
                <div className="shot-eyebrow">Your personal link infrastructure</div>
                <div className="shot-heading">
                  Short links.
                  <br />
                  <strong>Big reach.</strong>
                </div>
                <p className="shot-subcopy">
                  Shorten URLs, generate QR codes, and manage every link powered by your own TinyCloud API.
                </p>
              </div>

              <div className="shot-form">
                <div className="shot-tabs">
                  <span className="active">Shorten a Link</span>
                  <span>Generate QR Code</span>
                </div>
                <div className="shot-input-label">Long URL</div>
                <div className="shot-input">https://paste-your-long-url-here.com/path</div>
                <div className="shot-button">Shorten Link</div>
              </div>

              <div className="shot-links-table">
                <div className="shot-table-head">
                  <span>Your links</span>
                  <span>2 links</span>
                </div>
                <div className="shot-row">
                  <span className="shot-code">K26nTX6U</span>
                  <span>https://www.uefa.com/uefachampionsleague/</span>
                </div>
                <div className="shot-row">
                  <span className="shot-code">1tNfn9Qq</span>
                  <span>https://www.nba.com/player/201935/james-harden</span>
                </div>
              </div>
            </div>
          </article>

          <article className="shot-card shot-secondary">
            <div className="shot-meta">
              <span className="shot-label">Screen 02</span>
              <span className="shot-caption">Delivery and platform snapshot</span>
            </div>
            <div className="ops-shot">
              <div className="ops-header">
                <span className="ops-pill">CI/CD</span>
                <span className="ops-pill">Kubernetes</span>
                <span className="ops-pill">Monitoring</span>
              </div>

              <div className="ops-grid">
                <div className="ops-panel">
                  <div className="ops-title">Release flow</div>
                  <div className="ops-line">
                    <span className="ops-node on">Push main</span>
                    <span className="ops-node on">Build image</span>
                    <span className="ops-node on">Push chart</span>
                    <span className="ops-node on">Deploy dev</span>
                  </div>
                </div>

                <div className="ops-panel">
                  <div className="ops-title">Environments</div>
                  <div className="env-stack">
                    <span>dev</span>
                    <span>staging</span>
                    <span>prod</span>
                  </div>
                </div>

                <div className="ops-panel">
                  <div className="ops-title">What was delivered</div>
                  <ul className="ops-list">
                    <li>Containerized frontend and backend</li>
                    <li>Built CI/CD with GitHub Actions</li>
                    <li>Deployed workloads to Kubernetes</li>
                    <li>Added metrics and monitoring layer</li>
                    <li>Provisioned infra with Terraform</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section detail-notes">
        <div className="sec-head">
          <span className="sec-title">Highlights</span>
        </div>
        <div className="detail-note-grid">
          <div className="detail-note">
            <span className="detail-note-label">Goal</span>
            <p>Build a project that shows both application work and platform ownership.</p>
          </div>
          <div className="detail-note">
            <span className="detail-note-label">My role</span>
            <p>Implemented delivery flow end to end: app, containers, CI/CD, infra, and observability.</p>
          </div>
          <div className="detail-note">
            <span className="detail-note-label">Stack</span>
            <p>React, Flask, PostgreSQL, Docker, GitHub Actions, Helm, Terraform, Kubernetes, Prometheus.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function App() {
  const [view, setView] = useState<View>(() => readView())

  useEffect(() => {
    const onHashChange = () => setView(readView())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  function openTinyCloud() {
    window.location.hash = 'tinycloud'
  }

  function goHome() {
    window.location.hash = ''
  }

  if (view === 'tinycloud') {
    return (
      <>
        <div className="scene">
          <div className="glow g1" />
          <div className="glow g2" />
        </div>
        <div className="page">
          <TinyCloudPage onBack={goHome} />
        </div>
      </>
    )
  }

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
            <a href="#tinycloud">Showcase</a>
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
              <article
                key={p.name}
                className={`project-card${p.name === 'tinycloud-frontend' ? ' project-card-clickable' : ''}`}
                onClick={p.name === 'tinycloud-frontend' ? openTinyCloud : undefined}
                role={p.name === 'tinycloud-frontend' ? 'button' : undefined}
                tabIndex={p.name === 'tinycloud-frontend' ? 0 : undefined}
                onKeyDown={p.name === 'tinycloud-frontend'
                  ? (event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        openTinyCloud()
                      }
                    }
                  : undefined}
              >
                <div className="project-name-row">
                  <div className="project-name">{p.name}</div>
                  <a
                    className="project-link"
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={p.name === 'tinycloud-frontend' ? (event) => event.stopPropagation() : undefined}
                  >
                    Open repo
                  </a>
                </div>
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
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="sec-head">
            <span className="sec-title">Contact</span>
          </div>
          <div className="contact-links">
            <a className="contact-item" href="mailto:cherdanil79@gmail.com">
              <span className="contact-label">Email</span>
              <span className="contact-value">cherdanil79@gmail.com</span>
            </a>
            <a className="contact-item" href="https://linkedin.com/in/danil-chernenko/" target="_blank" rel="noreferrer">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">danil-chernenko</span>
            </a>
            <a className="contact-item" href="https://github.com/cherya05" target="_blank" rel="noreferrer">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">cherya05</span>
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
