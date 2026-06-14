import "./projects.css";
import { projectsData } from "./projectsData";

function Project() {
  return (
    <>
      <div className="projects">
        <h2 className="ProjTitle">Projects</h2>
        <div className="projectsList">
          {
            projectsData.map((project, index) => (
              <div
                key={index}
                className={`projectItem ${project.className || ""}`}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <h3>{project.title}</h3>

                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="project-img"
                    />

                    <div className="tech-overlay">
                      {project.techs.map((tech, i) => (
                        <div className="tech" key={i}>
                          <span>{tech.name}</span>

                          <div className="bar">
                            <div style={{ width: tech.width }}></div>
                          </div>

                          <span className="percent">
                            {tech.percent}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
export default Project;

