import "./projects.css";
import project1 from '../../assets/project1.png'

function Project() {
    return (
        <>
        <div className="projects">
            <h2 className="ProjTitle">Projects</h2>
            <div className="projectsList">
              <div className="projectItem">
                <h3>Attendance-Bunk Calculator</h3>
                <div className="imgs"><img src={project1} alt="" /></div>
              </div>
              <div className="projectItem">
                <h3>Project 2</h3>
                <div className="imgs"><img src={project1} alt="" /></div>
              </div>
              <div className="projectItem center-big">
                <h3>Project 3</h3>
                <div className="imgs"><img src={project1} alt="" /></div>
              </div>
              <div className="projectItem center-small">
                <h3>Project 4</h3>
                <div className="imgs"><img src={project1} alt="" /></div>
              </div>
              <div className="projectItem right-top">
                <h3>Project 5</h3>
                <div className="imgs"><img src={project1} alt="" /></div>
              </div>
              <div className="projectItem right-bottom">
                <h3>Project 6</h3>
                <div className="imgs"><img src={project1} alt="" /></div>
              </div>
            </div>
          </div>
        </>
    )
}
export default Project;