import "./Occupation.css";
import vvvs from "../../assets/vvvs.jpg";
import cnc from "../../assets/cnc.jpg";
import jssateb from "../../assets/jssateb.jpeg";
function Occupation() {
  return (
    <>
      <div className="Occupation">
        <h3>Occupation</h3>
        <div className="occupationList">
          <div className="occupationItem">
            <h3>Degree</h3>
            <div
              style={{
                width: "210px",
                height: "1px",
                backgroundColor: "rgba(155, 154, 154, 1)",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            ></div>
            {/* horizontal line */}
            <a href="https://www.jssateb.ac.in/" target="_blank" rel="noopener noreferrer">
              <img src={jssateb} alt="college-img"/>
            </a>
            <p>JSSATE, Bengaluru</p>
            <p>2023-27</p>
            <p>GPA : <span>8.8 / 10</span></p>
          </div>
          <div className="occupationItem">
            <h3>Pre-University</h3>
            <div
              style={{
                width: "210px",
                height: "1px",
                backgroundColor: "rgba(155, 154, 154, 1)",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            ></div>
            {/* horizontal line */}
            <a href="">
              <img src={cnc} alt="any images realted to pu" />
            </a>
            <p>CNC PU college, Chitradurga</p>
            <p>2020-22</p>
            <p>Percentage : <span>90%</span></p>
          </div>
          <div className="occupationItem">
            <h3>Schooling</h3>
            <div
              style={{
                width: "210px",
                height: "1px",
                backgroundColor: "rgba(155, 154, 154, 1)",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            ></div>
            {/* horizontal line */}
            <a href="https://vidyavikasavidyasamsthe.com/" target="_blank" rel="noopener noreferrer">
              <img src={vvvs} alt="school-img" />
            </a>
            <p>Vidya Vikasa Vidya Samasthe, Chitradurga</p>
            <p>2011-20</p>
            <p>Grade : <span>A</span></p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Occupation;
