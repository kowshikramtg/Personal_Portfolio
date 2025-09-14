import "./paper.css"
import paperImg from "../../assets/paperImg.png"
function Paper() {
  return (
    <>
      <div className="paper">
        <h3>Paper</h3>
        <img src={paperImg} alt="paper-img" />
        <p>
          I excitingly wrote a Research Paper titled <b>“Applications of Hasse
          diagram in the field of Space Missions”</b>, which published in NCAIT ‘25.
          This paper defines the the need of discrete mathematics, mainly Hasse
          diagram, in space organizations for their effective and smooth Task
          scheduling, Module system design, Designing Autonomous Decision-making
          system, Reducing Fault tolerance and Redundancy System in all
          onboarding and ongoing missions with fluency in the task.
        </p>
        <div className="paperInfo">
          <div className="publisher">
            <h4>Publisher</h4>
            {/* horizontal line */}
            <div
            style={{
              width: "210px",
              height: "2px",
              backgroundColor: "rgba(155, 154, 154, 1)",
              marginBottom: "15px",
              marginTop:"15px",
            }}
          ></div>
            <p className="pp">NCAIT</p>
          </div>
          <div className="publishYear">
            <h4>Published Year</h4>
            {/* horizontal line */}
            <div
            style={{
              width: "210px",
              height: "2px",
              backgroundColor: "rgba(155, 154, 154, 1)",
              marginBottom: "15px",
              marginTop:"15px",
            }}
          ></div>
            <p className="pp">2025</p>
          </div>
          <div className="Guide">
            <h4>Guide</h4>
            {/* horizontal line */}
            <div
            style={{
              width: "210px",
              height: "2px",
              backgroundColor: "rgba(155, 154, 154, 1)",
              marginBottom: "15px",
              marginTop:"15px",
            }}
          ></div>
            <p className="ppp"><a href="https://www.linkedin.com/in/radhika-anumanchi-74153245?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0pZcbBLXTWiJHoTZ%2FTPw9A%3D%3D"target="_blank" rel="noopener noreferrer" className="pp">Mrs. A Radhika</a></p><br/>
            <a href="https://www.linkedin.com/in/nethravathi-b-b9218410a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BekbAgO07TmmlZ2HqW914mQ%3D%3D" target="_blank" rel="noopener noreferrer" className="pp">Dr. Nethravathi B</a>
          </div>
          <div className="paperLink">
            <h4>Paper Link</h4>
            {/* horizontal line */}
            <div
            style={{
              width: "210px",
              height: "2px",
              backgroundColor: "rgba(155, 154, 154, 1)",
              marginBottom: "25px",
              marginTop:"15px",
            }}
          ></div>
            <a href="#">link to</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Paper;