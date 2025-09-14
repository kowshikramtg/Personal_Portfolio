// import react from "react";
import "./familiarSkills.css"
import reactLogo from "../../assets/rjs.png";
import mongodbLogo from "../../assets/mongodb.png";
import nodejsLogo from "../../assets/nodejs.png";
import htmlLogo from "../../assets/html.png";
import tailwindcssLogo from "../../assets/tailwindcss.png";
import figma from "../../assets/figma.png";
function FamiliarSkills() {
    return (
        <>
        <div className="familiarSkills">
            <h3>Familiar Skills</h3>
            <div className="skillsImg">
              <img src={reactLogo} alt="skill1" className="famSkill"/>
              <img src={htmlLogo} alt="skill3" className="famSkill"/>
              <img src={tailwindcssLogo} alt="skill2" className="famSkill"/>
              <img src={nodejsLogo} alt="skill4" className="famSkill"/>
              <img src={mongodbLogo} alt="skill5" className="famSkill"/>
              <img src={figma} alt="skill5" className="famSkill"/>
            </div>
          </div>
        </>
    )
}
export default FamiliarSkills;