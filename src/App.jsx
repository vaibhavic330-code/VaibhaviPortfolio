import "./App.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "Java",
  "SQL",
  "Machine Learning",
  "Data Science",
  "Git & GitHub",
];

const projects = [
  {
    number: "01",
    title: "Zoom Video Conferencing",
    description:
      "A video conferencing application built to support online meetings and real-time communication.",
    technologies: ["React", "Node.js", "WebRTC"],
    link: "https://github.com/vaibhavic330-code/Zoom",
    linkText: "View on GitHub",
  },
  {
    number: "02",
    title: "TechLearn",
    description:
      "An educational website concept focused on technology courses and learning resources.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "#",
    linkText: "Coming Soon",
  },
];

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home">
          VC<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="nav-contact"
          href="https://www.linkedin.com/in/vaibhavi-chavan-97b45b32a/"
          target="_blank"
          rel="noreferrer"
        >
          Let's Connect <span>↗</span>
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span>
              COMPUTER SCIENCE STUDENT
            </p>

            <h1>
              Hi, I'm <span>Vaibhavi Chavan</span>
            </h1>

            <h2>
              Aspiring Software Developer
              <br />
              <span>Full Stack Development | AI/ML & Data Science</span>
            </h2>

            <p className="hero-description">
              I am a Computer Science student passionate about building
              meaningful digital experiences, exploring emerging technologies,
              and solving real-world problems through code.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button button-primary">
                Explore My Work <span>↗</span>
              </a>
              <a href="#contact" className="button button-secondary">
                Contact Me
              </a>
            </div>

            <div className="social-links">
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
          </div>

          <div className="hero-image-wrap">
            <div className="image-glow"></div>
            <div className="image-frame">
              <img
                src="/profile.png"
                alt="Vaibhavi Chavan"
                className="profile-photo"
              />
            </div>
            <div className="image-caption">
              <span className="caption-dot"></span>
              <span>Learning · Building · Growing</span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>
              About <span>Me</span>
            </h2>
          </div>

          <div className="about-card">
            <p>
              I'm <strong>Vaibhavi Chavan</strong>, a Computer Science student
              currently pursuing my B.Tech at Shreeyash College of Engineering
              and Technology, Chhatrapati Sambhajinagar.
            </p>
            <p>
              I have a diploma background in Computer Science and Engineering
              and an interest in software development, frontend technologies,
              Artificial Intelligence, Machine Learning, and Data Science.
            </p>
            <p>
              I enjoy learning new technologies, developing projects, and
              continuously improving my problem-solving and development skills.
              My goal is to grow as a software developer and contribute to
              impactful projects.
            </p>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section" id="education">
          <div className="section-heading">
            <p className="eyebrow">MY ACADEMIC JOURNEY</p>
            <h2>
              <span>Education</span>
            </h2>
          </div>

          <div className="education-list">
            <article className="education-card">
              <div className="education-year">2024 — 2027</div>
              <div>
                <h3>B.Tech in Computer Science</h3>
                <p>
                  Shreeyash College of Engineering and Technology
                </p>
                <span>Chhatrapati Sambhajinagar · Pursuing</span>
              </div>
              <span className="education-badge">Pursuing</span>
            </article>

            <article className="education-card">
              <div className="education-year">2021 — 2024</div>
              <div>
                <h3>Diploma in Computer Science and Engineering</h3>
                <p>Government Polytechnic, Jalgaon</p>
                <span>Completed</span>
              </div>
              <span className="education-badge">Completed</span>
            </article>

            <article className="education-card">
              <div className="education-year">10th Standard</div>
              <div>
                <h3>Secondary School Education</h3>
                <p>10th Standard</p>
                <span>Scored 91%</span>
              </div>
              <span className="education-badge">91%</span>
            </article>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">WHAT I WORK WITH</p>
            <h2>
              My <span>Skills</span>
            </h2>
            <p className="section-description">
              Technologies and tools I have learned and continue to develop my
              skills in.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">SOME THINGS I'VE BUILT</p>
            <h2>
              Featured <span>Projects</span>
            </h2>
            <p className="section-description">
              A selection of projects that reflect my learning and development
              journey.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-icon">↗</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target={project.link === "#" ? undefined : "_blank"}
                  rel={project.link === "#" ? undefined : "noreferrer"}
                  className="project-link"
                >
                  {project.linkText} <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>
            <h2>
              Let's build something <span>great together.</span>
            </h2>
            <p>
              I'm open to connecting, learning, and exploring opportunities in
              software development and technology.
            </p>

            <div className="contact-buttons">
              <a
                className="button button-primary"
                href="https://www.linkedin.com/in/vaibhavi-chavan-97b45b32a/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn ↗
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/vaibhavic330-code"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          VC<span>.</span>
        </a>
        <p>Designed & built by Vaibhavi Chavan</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;