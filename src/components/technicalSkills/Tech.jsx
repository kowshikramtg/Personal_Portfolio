import "./tech.css";
import reactLogo from "../../assets/rjs.png";
import mongodbLogo from "../../assets/mongodb.png";
import nodejsLogo from "../../assets/nodejs.png";
import htmlLogo from "../../assets/html.png";
import css from "../../assets/css.png";
import tailwindcssLogo from "../../assets/tailwindcss.png";
import js from "../../assets/js.png";
import java from "../../assets/Java-Logo.jpg";
import python from "../../assets/python.jpg";
import cprog from "../../assets/C-prog.png";
import figma from "../../assets/figma.png";
import pytorch from "../../assets/pytorch.png";
import github from "../../assets/githubLogo.png";
function Tech() {
  return (
    <>
      <div className="main">
        <h2>Technical Skills</h2>
        <div className="technical">
          <div className="skillsList">
            <div className="skillItem"><img src={reactLogo} alt="" /></div>
            <div className="skillItem"><img src={figma} alt="" /></div>
            <div className="skillItem"><img src={js} alt="" /></div>
            <div className="skillItem"><img src={java} alt="" /></div>
            <div className="skillItem"><img src={github} alt="" /></div>
            <div className="skillItem"><img src={htmlLogo} alt="" /></div>
            <div className="skillItem"><img src={css} alt="" /></div>
            <div className="skillItem"><img src={tailwindcssLogo} alt="" /></div>
            <div className="skillItem"><img src={python} alt="" /></div>
            <div className="skillItem"><img src={cprog} alt="" /></div>
            <div className="skillItem"><img src={nodejsLogo} alt="" /></div>
            <div className="skillItem"><img src={pytorch} alt="" /></div>
            <div className="skillItem"><img src={mongodbLogo} alt="" /></div>
          </div>
          {/* vertical line */}
          <div
            style={{
              width: "1px",
              height: "210px",
              backgroundColor: "rgba(155, 154, 154, 1)",
              marginBottom: "15px",
              marginTop:"15px",
            }}
          ></div>
          <p>
            With the diverse field of Technical skills anf knowledge , I’m able
            to modernize the projects as needed. Form scratch of developing to
            deploying with AI.
          </p>
        </div>
      </div>
    </>
  );
}
export default Tech;
