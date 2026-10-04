import "./App.css";

const skills = [
  {
    title: "Frontend Development",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS","Redux/Redux Toolkit"],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "REST APIs","Authentication"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "SQL"],
  },
  {
    title: "Programming & AI/ML",
    items: ["Python", "Pandas", "NumPy","Matplotlib","Scikit-learn", "Machine Learning"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Terminal"],
  },
];

const projects = [
  {
    number: "01",
    name: "MeetFlow",
    category: "Full Stack · Video Conferencing",
    description:
      "A full-stack video conferencing application built with React, Node.js, Express and MongoDB, featuring user registration, authentication and real-time meeting functionality.",
    stack: ["React", "Node.js","Express", "WebRTC", "MongoDB"],
    link: "https://github.com/vaibhavic330-code/MeetFlow",
    linkLabel: "View GitHub Repository",
  },
  {
    number: "02",
    name: "TechLearn",
    category: "Frontend · Course Website",
    description:
      "A course website project built to present learning content through a structured and user-friendly web interface.",
    stack: ["React", "Vite", "JavaScript", "CSS"],
    link: "",
    linkLabel: "Add repository link",
  },
  {
    number: "03",
    name: "Credit-Wise Loan Prediction",
    category: "AI / Machine Learning",
    description:
      "A machine learning project concept for analyzing applicant information and predicting loan approval outcomes.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    link: "https://github.com/vaibhavic330-code/Credit-Wise-Loan-Prediction",
    linkLabel: "Add repository link",
  },
  {
    number: "04",
    name: "RentShieldAI",
    category: "AI · Rental Discovery. Team Project",
    description:
      "An AI-focused rental discovery project concept combining application development and machine learning.",
    stack: ["Python", "FastAPI", "Machine Learning", "MongoDB"],
    link: "",
    linkLabel: "Add repository link",
  },
  {
    number: "05",
    name: "LeadFlow",
    category: "Full Stack .Lead Management System",
    description:
      "A project included in the portfolio plan. Add the final project description, features, and repository after confirming the details.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
    link: "https://github.com/vaibhavic330-code/LeadFlow",
    linkLabel: "Add repository link",
  },
];

const buildItems = [
  {
    icon: "⌘",
    title: "Full Stack Web Applications",
    description:
      "Responsive web experiences with clear user flows and maintainable interfaces.",
  },
  {
    icon: "↗",
    title: "REST API Integration",
    description:
      "Application features that connect frontend interfaces with backend services.",
  },
  {
    icon: "✳",
    title: "AI / ML Projects",
    description:
      "Learning-focused solutions that apply data analysis and machine learning concepts.",
  },
  {
    icon: "▣",
    title: "Responsive User Interfaces",
    description:
      "Clean layouts designed to work across desktop, tablet, and mobile screens.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="portfolio">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Vaibhavi Chavan home">
          <span className="brand-mark">V</span>
          <span>Vaibhavi Chavan</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a className="nav-resume" href="/resume.pdf" download>
            Resume <span aria-hidden="true">↓</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
               Open to Full Stack &amp; Software Development Opportunities
            </div>

            <p className="hero-intro">Hello, I’m</p>
            <h1>
              Vaibhavi
              <span>Chavan.</span>
            </h1>

            <h2> Full Stack Developer &amp; AI/ML Enthusiast</h2>

            <p className="hero-description">
              I build full-stack web applications using React, Node.js, Express and MongoDB, and develop AI/ML projects with Python and Scikit-learn.
            </p>

            <p className="hero-education">
              B.Tech CSE · Diploma in Computer Engineering · 2027 Graduate
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View My Work <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-outline" href="/resume.pdf" download>
                Download Resume <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/vaibhavi-chavan-97b45b32a/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/vaibhavic330-code"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a href="#contact">Let’s connect ↗</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="photo-frame">
              <img
                src="/profile.png"
                alt="Vaibhavi Chavan"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.nextElementSibling.style.display = "grid";
                }}
              />
              <div className="photo-fallback">VC</div>
            </div>
            <div className="floating-card floating-card-top">
              <span className="floating-icon">✦</span>
              <span>
                <strong>Curious mind</strong>
                <small>Always learning</small>
              </span>
            </div>
            <div className="floating-card floating-card-bottom">
              <span className="code-icon">&lt;/&gt;</span>
              <span>
                <strong>Building</strong>
                <small>One project at a time</small>
              </span>
            </div>
            <div className="visual-caption">Computer Science · 2027</div>
          </div>
        </section>

        <section className="quick-facts section-wrap">
          <div>
            <span className="fact-number">01</span>
            <span className="fact-label">Computer Science</span>
          </div>
          <div>
            <span className="fact-number">02</span>
            <span className="fact-label">Full Stack Development</span>
          </div>
          <div>
            <span className="fact-number">03</span>
            <span className="fact-label">AI / Machine Learning</span>
          </div>
        </section>

        <section className="content-section section-wrap" id="about">
          <SectionHeading
            eyebrow="01 / ABOUT ME"
            title="A little about me"
            description="A Computer Science student passionate about building practical software solutions."
          />

          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">
                I’m <strong>Vaibhavi Chavan</strong>, a Computer Science
                undergraduate passionate about building practical software solutions and continuously learning new technologies.
                
              </p>
              <p>
                My development experience includes building applications with React, JavaScript, Node.js, Express.js, MongoDB and REST APIs. I also work with Python, Pandas, NumPy and Scikit-learn for machine learning and data-focused projects.
              </p>
              <p>
                I’m currently pursuing my B.Tech in Computer Science after
                completing a diploma in Computer Science and Engineering. I’m
                looking forward to opportunities where I can learn, contribute,
                and grow as a software developer.
              </p>
            </div>

            <aside className="about-note">
              <span className="note-symbol">✳</span>
              <h3>My approach</h3>
              <p>
                Stay curious. Build with purpose. Learn from every challenge.
              </p>
              <div className="note-line" />
              <span className="note-caption">OPEN TO INTERNSHIPS &amp; ROLES</span>
            </aside>
          </div>
        </section>

        <section className="content-section section-wrap" id="education">
          <SectionHeading
            eyebrow="02 / EDUCATION"
            title="My academic journey"
            description="Building a strong foundation in computer science and engineering."
          />

          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-card">
                <div className="timeline-topline">
                  <span className="timeline-date">2024 — 2027</span>
                  <span className="current-badge">Currently pursuing</span>
                </div>
                <h3>B.Tech in Computer Science</h3>
                <p className="institution">
                  Shreeyash College of Engineering and Technology
                </p>
                <p className="location">
                  Chhatrapati Sambhajinagar, Maharashtra
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-card">
                <div className="timeline-topline">
                  <span className="timeline-date">2021 — 2024</span>
                  <span className="completed-badge">Completed</span>
                </div>
                <h3>Diploma in Computer Science and Engineering</h3>
                <p className="institution">Government Polytechnic, Jalgaon</p>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-card">
                <div className="timeline-topline">
                  <span className="timeline-date">10th Standard</span>
                </div>
                <h3>Secondary School Education</h3>
                <p className="institution">
                  <strong>91%</strong> in 10th standard
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="content-section section-wrap" id="skills">
          <SectionHeading
            eyebrow="03 / SKILLS"
            title="Tools I work with"
            description="Technologies and areas I’m developing through learning and projects."
          />

          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span className="skill-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section section-wrap" id="projects">
          <SectionHeading
            eyebrow="04 / SELECTED WORK"
            title="Projects & practice"
            description="A selection of development work and project areas from my portfolio."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="project-link-wrap">
                  {project.link ? (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.linkLabel} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="project-link project-link-muted">
                      {project.linkLabel}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="project-note">
            Project descriptions and repository links should be checked and
            updated with the final details before publishing.
          </p>
        </section>

        <section className="content-section section-wrap" id="build">
          <SectionHeading
            eyebrow="05 / WHAT I CAN BUILD"
            title="From ideas to applications"
            description="The kinds of solutions I’m interested in creating."
          />

          <div className="build-grid">
            {buildItems.map((item) => (
              <article className="build-card" key={item.title}>
                <span className="build-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section section-wrap" id="experience">
          <SectionHeading
            eyebrow="06 / Project Experience"
            title="Learning by building"
            description="I gain practical experience by designing, developing and improving full-stack and machine-learning projects. My work includes building React interfaces, developing Node.js and Express APIs, integrating MongoDB databases, implementing authentication, using Git/GitHub for version control, and applying machine-learning techniques with Python."
          />

          <div className="experience-card">
            <div className="experience-icon">⌘</div>
            <div>
              <span className="experience-label">PROJECT-BASED EXPERIENCE</span>
              <h3>Hands-on development</h3>
              <p>
                I apply concepts through web development projects, explore
                frontend and backend workflows, and use version control to
                manage my work. Each project helps me strengthen my
                problem-solving and development process.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="learning">
          <SectionHeading
            eyebrow="07 / GROWTH"
            title="Always learning"
            description="Areas I’m interested in exploring and strengthening next."
          />

          <div className="learning-panel">
            <span className="learning-star">✦</span>
            <div className="learning-tags">
              {[
                "Data Structures & Algorithms",
                "Next.js",
                "AI / Machine Learning",
                "Docker",
          
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="certifications">
          <SectionHeading
            eyebrow="08 / CERTIFICATIONS"
            title="Learning milestones"
            description="Verified certifications can be added here as they are completed."
          />
          <div className="empty-state">
            <span>＋</span>
            <p>
              Certification details will be added when the certificate name,
              issuing organization, and date are available.
            </p>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <span className="eyebrow">09 / GET IN TOUCH</span>
            <h2>
              Let’s build
              <span> something meaningful.</span>
            </h2>
            <p>
              I’m open to internships, entry-level opportunities, and
              conversations about software development, full stack projects,
              and AI/ML.
            </p>

            <div className="contact-actions">
              <a
                className="button button-primary"
                href="https://www.linkedin.com/in/vaibhavi-chavan-97b45b32a/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn ↗
              </a>
              <a
                className="button button-outline"
                href="https://github.com/vaibhavic330-code"
                target="_blank"
                rel="noreferrer"
              >
                Explore GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="footer-brand" href="#home">
          <span className="brand-mark">VC</span>
          Vaibhavi Chavan
        </a>
        <p>Designed &amp; built with curiosity.</p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/vaibhavi-chavan-97b45b32a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/vaibhavic330-code"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
        <span className="copyright">
          © {new Date().getFullYear()} Vaibhavi Chavan
        </span>
      </footer>
    </div>
  );
}

export default App;