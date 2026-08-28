const skills = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "JUnit 5",
  "Mockito",
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "SQL",
  "Git & GitHub",
  "Docker",
  "REST APIs",
  "HTML",
  "CSS",
];

const projects = [
  {
    title: "Hotel Presidente — Hotel Management System",
    category: "BACKEND · CLIENT PROJECT",
    description:
      "Hotel management platform for room availability, inventory, point of sale and guest billing. Working primarily on backend architecture, API design, data modeling, authentication and permissions.",
    tech: ["Node.js", "Express", "PostgreSQL", "React Native"],
  },
  {
    title: "Estudio 301 — Creative Studio Website",
    category: "FRONTEND · FREELANCE",
    description:
      "Responsive website developed for a creative studio. Built reusable React components, responsive layouts, animations, routing and contact functionality while working directly with the client.",
    tech: ["React", "JavaScript", "Tailwind CSS", "React Router"],
  },
  {
    title: "VR Interview Simulator",
    category: "UNITY · C#",
    description:
      "Recovered and extended an existing virtual reality interview simulator. Fixed build issues and implemented interview flow controls, audio recording and improved character animation transitions.",
    tech: ["Unity", "C#", "VR"],
  },
  {
  title: "Laboratorio Digital — UABC",
  category: "BACKEND · FREELANCE",
  description:
    "Digital laboratory platform developed for Universidad Autónoma de Baja California. Built a secure file upload module with Node.js and Express, implementing file type validation, rate limiting and external storage with Supabase to improve security and reduce server exposure.",
  tech: ["Node.js", "Express", "Supabase", "S3 Storage", "Security"],
},
  {
    title: "LeetArena — Competitive Coding Platform",
    category: "BACKEND · TEAM PROJECT",
    description:
      "Backend platform for competitive programming matches built with Java and Spring Boot. Worked on match lifecycle features including configurable match duration, automatic expiration handling and scheduling, as well as integration and manual testing with PostgreSQL.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Maven", "JUnit"],
  },
  
];

function App() {
  return (
    <main className="page">
      <div className="resume">
        <header className="hero">
          <div className="heroContent">
            <p className="label">SOFTWARE ENGINEERING</p>

            <h1>
              Carlos Miguel
              <br />
              Ibarra Mora
            </h1>

            <p className="role">Backend Developer · Full-Stack Developer</p>

            <p className="summary">
              Software Engineering student focused on backend development with
              Java and Spring Boot, currently expanding into full-stack
              development with React and Node.js. Experienced in REST APIs,
              databases, testing, mobile applications and software quality.
            </p>
          </div>

          <div className="contact">
            <span>📍 Ensenada, Baja California, Mexico</span>

            <a href="mailto:carlosmiguelibarra01@gmail.com">
              ✉ carlosmiguelibarra01@gmail.com
            </a>

            <a
              href="https://github.com/CarlosIbarraMora"
              target="_blank"
              rel="noreferrer"
            >
              ↗ GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/carlos-ibarra-mora-457853229/"
              target="_blank"
              rel="noreferrer"
            >
              ↗ LinkedIn
            </a>
          </div>
        </header>

        <div className="content">
          <aside className="sidebar">
            <section>
              <h2>Technical Skills</h2>

              <div className="skills">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </section>

            <section>
              <h2>Education</h2>

              <div className="education">
                <h3>B.S. Software Engineering</h3>

                <p className="secondary">
                  CETYS Universidad
                  <br />
                  Campus Ensenada
                </p>

                <p className="highlight">
                  Expected graduation
                  <br />
                  June 2027
                </p>

                <p>
                  Software Engineering student with a strong academic record.
                </p>

                <p className="grade">Academic average: 98 / 100</p>
              </div>
            </section>

            <section>
              <h2>Languages</h2>

              <div className="language">
                <div>
                  <strong>Spanish</strong>
                  <span>Native</span>
                </div>

                <div>
                  <strong>English</strong>
                  <span>Cambridge C1</span>
                </div>
              </div>
            </section>
          </aside>

          <section className="projects">
            <h2>Selected Projects</h2>

            <div className="projectGrid">
              {projects.map((project) => (
                <article className="project" key={project.title}>
                  <p className="projectCategory">{project.category}</p>

                  <h3>{project.title}</h3>

                  <p className="projectDescription">{project.description}</p>

                  <div className="tech">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="focus">
              <p className="projectCategory">CURRENT FOCUS</p>

              <h3>Backend Engineering → Full-Stack Development</h3>

              <p>
                Strengthening JavaScript, React, Node.js and cloud deployment
                skills while continuing to build reliable backend systems with
                clean API design, automated testing, relational databases and
                security best practices.
              </p>
            </div>
          </section>
        </div>

        <footer>
          <span>Built with React + Vite</span>
          <span>Deployed with Microsoft Azure ☁️</span>
        </footer>
      </div>
    </main>
  );
}

export default App;
