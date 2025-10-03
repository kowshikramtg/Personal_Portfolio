import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./dashboard.css";
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import download from "../../assets/download.png";
import logo from "../../assets/logo.png";
import ServiceSearch from "./ServiceSearch.jsx";
import PersoImg from "../images/persoImg.jsx";
import Paper from "../paper/Paper.jsx";
import Tech from "../technicalSkills/Tech.jsx";
import FamiliarSkills from "../familiarSkills/FamiliarSkills.jsx";
import Projects from "../projects/Projects.jsx";
import Occupation from "../occupation/Occupation.jsx";
import Certificates from "../certificates/Certificates.jsx";
import ContactMe from "../contactMe/ContactMe.jsx";
import ContactLinks from "../ContactLinks/ContactLinks.jsx";
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
            <Link
              to="main_content"
              smooth={true}
              duration={500}
              className="section-link"
            >
              <img src={logo} alt="" className="mainLogo" />
            </Link>
          </a>
          <a href="myCV">My CV</a>
          <div></div>
          <div
            style={{
              width: "100%",
              maxWidth: "180px",
              height: "2px",
              backgroundColor: "rgba(0, 0, 0, 1)",
              margin: "20px 0 10px 0",
            }}
          ></div>
          {/* horizontal-line  */}

          <div className="sections">
            <h2>Sections</h2>
            <ul>
              <li>
                <Link
                  to="familier_skills"
                  smooth={true}
                  duration={500}
                  className="section-link"
                >
                  Familier Skills
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="section-link"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="paper"
                  smooth={true}
                  duration={500}
                  className="section-link"
                >
                  Paper
                </Link>
              </li>
              <li>
                <Link
                  to="experiences"
                  smooth={true}
                  duration={500}
                  className="section-link"
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  to="technical_skills"
                  smooth={true}
                  duration={500}
                  className="section-link"
                >
                  Technical skills
                </Link>
              </li>
              <li>
                <Link
                  to="occupation"
                  smooth={true}
                  duration={500}
                  className="section-link"
                >
                  Occupation
                </Link>
              </li>
              <li>
                <Link
                  to="certificates"
                  smooth={true}
                  duration={500}
                  className="section-link"
                >
                  Certificates
                </Link>
              </li>
              <li>
                <Link
                  to="contact_me"
                  smooth={true}
                  duration={500}
                  className="section-link"
                >
                  Contact me
                </Link>
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
                <a
                  href="https://www.linkedin.com/in/kowshik-t-g-036b852b4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkdin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kowshikramtg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:kowshiktg3014@gmail.com?subject=topic&body=Hey,place%20your%20desc%20here...">
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.kaggle.com/kowshiktg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kaggle
                </a>
              </li>
              <li>
                <a href="https://medium.com/@kowshiktg3014">Medium</a>
              </li>
            </ul>
          </div>
        </div>

        {/* upper bar opnes here  */}
        <div className="upNavBar">
          {/* <div className="searchInput">
            <label htmlFor="searchIn">Services</label>
            <input
              id="searchIn"
              type="text"
              className="serviceSearch"
              placeholder="ex. Web-Design, Web-Dev..."
            />
          </div> */}
          <ServiceSearch />
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
            height: "960px",
            backgroundColor: "rgba(155, 154, 154, 1)",
            marginTop: "-7450px",
            marginLeft: "200px",
            position: "sticky",
            zIndex: "100",
            top: "0",
          }}
        ></div>

        {/* vertical line */}
        <div className="mainContent" id="main_content" name="main_content">
          <div className="perso">
            <div className="persoInfo">
              <h2>Kowshik</h2>
              <a
                href="mailto:kowshiktg3014@gmail.com?subject=topic&body=Hey,%20place%20your%20desc%20here..."
                className="email"
              >
                <img src={email} alt="emailLogo" />
                kowshiktg3014@gmail.com
              </a>
              <a
                href="https://www.google.com/maps/place/12.904650707169,77.5064444822303"
                target="_blank"
                className="location"
              >
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
          <div id="familier_skills" name="familier_skills" className="section">
            <FamiliarSkills />
          </div>
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
          <div id="projects" name="projects" className="section">
            {/* <h1>Projects</h1> */}
            <Projects />
          </div>
          <div
            style={{
              width: "1210px",
              height: "1px",
              backgroundColor: "rgba(155, 154, 154, 1)",
              marginLeft: "-10px",
              marginBottom: "20px",
            }}
          ></div>
          <div id="papers" name="papers" className="section">
            {/* <h1>papers</h1> */}
            <Paper />
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
          <div
            id="technical_skills"
            name="technical_skills"
            className="section"
          >
            {/* <h1>Technical skills</h1> */}
            <Tech />
          </div>
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
          <div id="occupation" name="occupation" className="section">
            {/* <h1>Occupation</h1> */}
            <Occupation />
          </div>
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
          <div id="certificates" name="certificates" className="section">
            {/* <h1>Certificates</h1> */}
            <Certificates />
          </div>
          <div
            style={{
              width: "1210px",
              height: "1px",
              backgroundColor: "rgba(155, 154, 154, 1)",
              marginLeft: "-10px",
              marginBottom: "40px",
              marginTop: "20px",
            }}
          ></div>
          <div id="contact_me" name="contact_me" className="connect section">
            {/* <h2>Connect with a coffee</h2> */}
            <ContactMe />
          </div>
          {/* coffee connect */}
          {/* <ContactLinks /> */}
        </div>
      </div>
    </>
  );
}
export default Dashboard;
