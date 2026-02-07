import "./projects.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

function Project() {
  return (
    <>
      <div className="projects">
        <h2 className="ProjTitle">Projects</h2>
        <div className="projectsList">
          <div className="projectItem firstItem">
                <a
                  href="https://sudhaherbalbeautyparlour.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <h3>Sudha Herbal Beauty Parlour</h3>
                  <div className="project-image-wrapper">
                    <img
                      src={project3}
                      alt="parlor image"
                      className="project-img"
                    />
                    <div className="tech-overlay">
                      <div className="tech">
                        <span>MERN</span>
                        <div className="bar">
                          <div style={{ width: "90%" }}></div>
                        </div>
                        <span className="percent">90%</span>
                      </div>
                      <div className="tech">
                        <span>CSS</span>
                        <div className="bar">
                          <div style={{ width: "6%" }}></div>
                        </div>
                        <span className="percent">6%</span>
                      </div>
                      <div className="tech">
                        <span>API</span>
                        <div className="bar">
                          <div style={{ width: "4%" }}></div>
                        </div>
                        <span className="percent">4%</span>
                      </div>
                    </div>
                  </div>
                </a>
          </div>
          <div className="projectItem">
            <a
              href="https://attendance-calculator-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <h3>Attendance-Bunk Calculator</h3>
              <div className="project-image-wrapper">
                <img
                  src={project1}
                  alt="website Dashboard"
                  className="project-img"
                />

                <div className="tech-overlay">
                  <div className="tech">
                    <span>JS</span>
                    <div className="bar">
                      <div style={{ width: "70%" }}></div>
                    </div>
                    <span className="percent">65%</span>
                  </div>
                  <div className="tech">
                    <span>CSS</span>
                    <div className="bar">
                      <div style={{ width: "20%" }}></div>
                    </div>
                    <span className="percent">28%</span>
                  </div>
                  <div className="tech">
                    <span>HTML</span>
                    <div className="bar">
                      <div style={{ width: "10%" }}></div>
                    </div>
                    <span className="percent">7%</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="projectItem center-big">
            <a
              href="https://dad-joke-generate.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <h3>Dad Joke Generate</h3>
              <div className="project-image-wrapper">
                <img
                  src={project2}
                  alt="Dad joke Generate"
                  className="project-img"
                />
                <div className="tech-overlay">
                  <div className="tech">
                    <span>HTML</span>
                    <div className="bar">
                      <div style={{ width: "70%" }}></div>
                    </div>
                    <span className="percent">76%</span>
                  </div>
                  <div className="tech">
                    <span>JS</span>
                    <div className="bar">
                      <div style={{ width: "20%" }}></div>
                    </div>
                    <span className="percent">19%</span>
                  </div>
                  <div className="tech">
                    <span>API</span>
                    <div className="bar">
                      <div style={{ width: "10%" }}></div>
                    </div>
                    <span className="percent">5%</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="projectItem right-bottom">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="imgs"
            >
              <h3>on work</h3>
              <div className="imgs">
                <img src="" alt="project2" />
              </div>
            </a>
          </div>
          {/* <div className="projectItem center-small">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="imgs"
            >
              <h3>Project 4</h3>
              <div className="imgs">
                <img src="" alt="" />
              </div>
            </a>
          </div>
          <div className="projectItem right-top">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="imgs"
            >
              <h3>Project 5</h3>
              <div className="imgs">
                <img src="" alt="" />
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default Project;

