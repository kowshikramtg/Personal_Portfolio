import "./projects.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";

function Project() {
  return (
    <>
      <div className="projects">
        <h2 className="ProjTitle">Projects</h2>
        <div className="projectsList">
          <div className="projectItem firstItem">
            <a
              href="https://attendance-calculator-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="imgs"
            >
              <h3>Attendance-Bunk Calculator</h3>
              <div className="imgs">
                <img src={project1} alt="website Dashboard" />
              </div>
            </a>
          </div>
          <div className="projectItem">
            <a href="">
              <h3>on work</h3>
              <div className="imgs">
                <img src="" alt="project3" />
              </div>
            </a>
          </div>
          <div className="projectItem center-big">
            <a
              href="https://dad-joke-generate.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="imgs"
            >
              <h3>Dad joke generate</h3>
              <img src={project2} alt="Dad joke Generate" />
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
