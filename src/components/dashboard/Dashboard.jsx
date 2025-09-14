import React, { useEffect, useState } from "react";
import "./dashboard.css";
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import download from "../../assets/download.png";
import logo from "../../assets/logo.png";
import PersoImg from "../images/persoImg.jsx";
import Paper from "../paper/Paper.jsx";
import Tech from "../technicalSkills/Tech.jsx";
import FamiliarSkills from "../../components/familiarSkills/FamiliarSkills.jsx";
import Projects from "../../components/projects/Projects.jsx";
import Occupation from "../occupation/Occupation.jsx";
import Certificates from "../certificates/Certificates.jsx";
// import { List } from "react-scroll";

function Dashboard() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="content">
        <div className="sideBar">
          <a href="#">
            <img src={logo} alt="" className="mainLogo" />
          </a>
          <a href="myCV">My CV</a>
          <div></div>
          <div
            style={{
              width: "180px",
              height: "2px",
              backgroundColor: "rgba(155, 154, 154, 1)",
              marginBottom: "10px",
              marginTop: "20px",
              marginLeft: "-10px",
            }}
          ></div>
          {/* horizontal-line  */}

          <div className="sections">
            <h2>Sections</h2>
            <ul>
              <li>
                <a href="#">Familier Skills</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Paper</a>
              </li>
              <li>
                <a href="#">Experiences</a>
              </li>
              <li>
                <a href="#">Technical skills</a>
              </li>
              <li>
                <a href="#">Occupation</a>
              </li>
              <li>
                <a href="#">Certificates</a>
              </li>
              <li>
                <a href="#">Contact me</a>
              </li>
            </ul>
          </div>
          <div
            style={{
              width: "180px",
              height: "2px",
              backgroundColor: "rgba(155, 154, 154, 1)",
              marginLeft: "-10px",
              marginBottom: "10px",
            }}
          ></div>
          {/* horizontal line */}
          <div className="impLinks">
            <h2>Imp Links</h2>
            <ul>
              <li>
                <a href="#">Resume</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kowshik-t-g-036b852b4" target="_blank" rel="noopener noreferrer">Linkdin</a>
              </li>
              <li>
                <a href="https://github.com/kowshikramtg" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li>
                <a href="mailto:kowshiktg3014@gmail.com?subject=topic&body=Hey,place%20your%20desc%20here...">Email</a>
              </li>
              <li>
                <a href="https://www.kaggle.com/kowshiktg" target="_blank" rel="noopener noreferrer">Kaggle</a>
              </li>
              <li>
                <a href="https://medium.com/@kowshiktg3014">Medium</a>
              </li>
            </ul>
          </div>
        </div>

        {/* upper bar opnes here  */}
        <div className="upNavBar">
          <div className="searchInput">
            <label htmlFor="searchIn">Services</label>
            <input
              id="searchIn"
              type="text"
              className="serviceSearch"
              placeholder="ex. Web-Design, Web-Dev..."
            />
          </div>
          <div className="dateAndTime">
            <p className="day">
              {now.toLocaleDateString(undefined, { weekday: "short" })}
            </p>
            <p className="date"> {now.toLocaleDateString()}</p>
            <p className="time"> {now.toLocaleTimeString()}</p>
          </div>
        </div>
        {/* upper bar ends here  */}

        <div
          style={{
            width: "1px",
            height: "940px",
            backgroundColor: "rgba(155, 154, 154, 1)",
            marginTop: "-5560px",
            marginLeft: "200px",
            position:"sticky",
            zIndex:"100",
            top:"0",
          }}
        ></div>

        {/* vertical line */}
        <div className="mainContent">
          <div className="perso">
            <div className="persoInfo">
              <h2>Kowshik</h2>
              <a href="mailto:kowshiktg3014@gmail.com?subject=topic&body=Hey,place%20your%20desc%20here%20..." className="email">
                <img src={email} alt="emailLogo" />
                kowshiktg3014@gmail.com
              </a>
              <a href="https://www.google.com/maps/place/12.904650707169,77.5064444822303" target="_blank" className="location">
                <img src={location} alt="locationLogo" />
                Bengaluru, India
              </a>
              <a href="#" className="Resume">
                <img src={download} alt="downloadLogo" />
                Resume
              </a>
              <p>
                Focused and ambitious engineering student specializing in
                Information Science and Engineering in Bengaluru. Leveraging
                into deep thoughts and forming into actions. Actively working on
                real-world problems as Projects, Open contributions, Hackathons.
              </p>
            </div>
            <div className="persoImgs">
              <PersoImg />
            </div>
          </div>
          {/* horizontal line */}
          <div
            style={{
              width: "1210px",
              height: "1px",
              backgroundColor: "rgba(155, 154, 154, 1)",
              marginLeft: "-10px",
              marginBottom: "20px",
            }}
          ></div>
          <FamiliarSkills />
          {/* horizontal line */}
          <div
            style={{
              width: "1210px",
              height: "1px",
              backgroundColor: "rgba(155, 154, 154, 1)",
              marginLeft: "-10px",
              marginBottom: "50px",
            }}
          ></div>
          {/* horizontal line */}
          <Projects />
          <div
            style={{
              width: "1210px",
              height: "1px",
              backgroundColor: "rgba(155, 154, 154, 1)",
              marginLeft: "-10px",
              marginBottom: "20px",
            }}
          ></div>
          <Paper />
          {/* horizontal line */}
          <div
            style={{
              width: "1210px",
              height: "1px",
              backgroundColor: "rgba(155, 154, 154, 1)",
              marginLeft: "-10px",
              marginBottom: "20px",
            }}
          ></div>
          <Tech />
          {/* horiontal line */}
          <div
            style={{
              width: "1210px",
              height: "1px",
              backgroundColor: "rgba(155, 154, 154, 1)",
              marginLeft: "-10px",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          ></div>
          <Occupation/>
          <div
            style={{
              width: "1210px",
              height: "1px",
              backgroundColor: "rgba(155, 154, 154, 1)",
              marginLeft: "-10px",
              marginBottom: "20px",
              marginTop: "280px",
            }}
          ></div>
          {/* horizontal line */}
          <Certificates/>
          {/* <div className="certificates">
            <h2>Certificates</h2>
            <img src="" alt="all images" />
            <h3>Certificate-1</h3>
            <p>
              a short desc. on certifcate, like, name of the event, why did i
              got that ?, location, what did i get i return / takeaway
            </p>
            <div className="certificateInfo">
              <div className="certifiedBy">
                <h4>Certified By</h4>
                <p>ORG. name</p>
              </div>
              <div className="certifiedOn">
                <h4>Certified on</h4>
                <p>Month + year</p>
              </div>
              <div className="linkedPeople">
                <h4>Linked People(optional)</h4>
                <p>name-1</p>
                <p>name-2</p>
              </div>
              <div className="certificateLink">
                <a href="#">link to</a>
              </div>
            </div>
          </div> */}
          <div className="connect">
            <h2>Connect with a coffee</h2>
          </div>
          {/* coffee connect */}
          <footer>
            <h2>Contact links</h2>
            <div className="contactlinklist">
              <img src="" alt="" className="email" />
              <img src="" alt="" className="linkdin" />
              <img src="" alt="" className="X" />
              <img src="" alt="" className="discord" />
              <img src="" alt="" className="gitHub" />
              <img src="" alt="" className="medium" />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
