import React, { useState, useEffect } from "react";
import "./Certificates.css";
import bharatiya from "../../assets/certificates_img/bharatiya-A-H.png";
import cicada from "../../assets/certificates_img/cicada.png";
import colossus from "../../assets/certificates_img/colossus.jpg";
import ideaforge from "../../assets/certificates_img/ideaforge.jpg";
import inceptrix from "../../assets/certificates_img/inceptrix.png";
import infosys from "../../assets/certificates_img/infosys.png";
import ncait from "../../assets/certificates_img/ncait.jpg";
import agentic from "../../assets/certificates_img/agenticAi-google.png";
import kaggle from "../../assets/certificates_img/kaggle.png";

function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Sample certificate data
  const certificates = [
    {
      id: 1,
      title: "Bharatiya Antariksh Hackathon",
      image: bharatiya,
      description:
      "Very proud to be a part of this hackathon, where we worked on a project that can help in space missions. But we couldn't make in any place",
      certifiedBy: "ISRO + Hack2skill",
      certifiedOn: "September 2025",
      linkedPeople: [""],
      takeaway: "Understood the need of AI in space missions and organizations.",
      link:"https://certificate.hack2skill.com/user/isrobah25/2025H2S06BAH25-P03552",
    },
    {
      id: 2,
      title: "Agentic AI day - Google",
      image: agentic,
      description:
      "Understood the need of AI in modern applications, with it's capabilities and limitations",
      certifiedBy: "Google + Hack2skill",
      certifiedOn: "August 2025",
      linkedPeople: [""],
      takeaway: "Understood the need of AI in modern applications, with it's capabilities and limitations",
      link:"https://certificate.hack2skill.com/user/aidayideasubmission/2025H2S06AID-I25270",
    },
    {
      id: 3,
      title: "Intro to Machine Learning",
      image: kaggle,
      description:
        "I learnt the basics of machine learning, participated in competation, and finished that project",
      certifiedBy: "Kaggle",
      certifiedOn: "July 2025",
      linkedPeople: [""],
      takeaway: "Learnt how exactly models work with codes and math behind it, also the most important, \"Python\"",
      link:"https://www.kaggle.com/learn/certification/kowshiktg/intro-to-machine-learning",
    },
    {
      id: 4,
      title: "NCAIT '25 - National Conference on Advancement in Information Technology",
      image: ncait,
      description:
      "i wrote a paper on \"Applications of Hasse diagram in space missions\" where i presented infront of panel members. you can seek more information in \"Paper\" Section",
      certifiedBy: "ISE - JSSATE, Bengaluru",
      certifiedOn: "May 2025",
      linkedPeople: ["Mrs. A Radhika", "Dr. Netravathi B K"],
      takeaway: "Learnt more about research, how to write a research paper, and also how to present it on the panel",
    },
    {
      id: 5,
      title: "Colossus 2.0",
      image: colossus,
      description:
      "we worked on blockchain technology, and created a project with a group of 4 members",
      certifiedBy: "Ambedkar institute of Technology, Bengaluru",
      certifiedOn: "April 2025",
      linkedPeople: [""],
      takeaway: "we worked on blockchain technology, and created a project with a group of 4 members that stood out between top 20 teams",
      
    },
    {
      id: 6,
      title: "Inceptrix",
      image: inceptrix,
      description:
      "we (the team) participated among 500+ teams in an AI project competition",
      certifiedBy: "Inceptrix- jain university, Bengaluru",
      certifiedOn: "April 2025",
      linkedPeople: [""],
      takeaway: "we (the team) participated among 500+ teams in an AI project competition",
    },
    {
      id: 7,
      title: "Cicada",
      image: cicada,
      description:
      "Me with my team, wowrked on \"figma\" which we didn't had any idea, at last, we finished the project proeffiently.",
      certifiedBy: "Atria Institute of Technology, Bengaluru",
      certifiedOn: "November 2024",
      linkedPeople: [""],
      takeaway: "Me with my team, wowrked on \"figma\" which we didn't had any idea, at last, we finished the project proeffiently.",
    },
    {
      id: 8,
      title: "IdeaForge",
      image: ideaforge,
      description:
      "With team of 4 members, we created a project that stood in 1st place",
      certifiedBy: "Samyog- JSSATE, Bengaluru",
      certifiedOn: "October 2024",
      linkedPeople: [""],
      takeaway:
      "Solid foundation in design principles and user-centered approach",
    },
    {
      id: 9,
      title: "Introduction to Cybersecurity",
      image: infosys,
      description:
      "It was a beautifull learning, from basics, where i learnt what's cybersecurity, why it is needed, types of cyber attacks, and how to prevent them",
      certifiedBy: "Infosys springboard",
      certifiedOn: "June 2024",
      linkedPeople: [""],
      takeaway: "It was a beautifull learning, from basics, where i learnt what's cybersecurity, why it is needed, types of cyber attacks, and how to prevent them",
    },
  ];

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [certificates.length, isPaused]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? certificates.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === certificates.length - 1 ? 0 : currentIndex + 1
    );
  };

  const currentCertificate = certificates[currentIndex];

  return (
    <div className="certificate-container">
      {/* Title */}
      <h1 className="main-title">Certificates</h1>

      {/* Carousel Container */}
      <div className="carousel-wrapper">
        {/* Navigation Arrows */}
        <button onClick={goToPrevious} className="nav-arrow nav-arrow-left">
          <span className="arrow-icon">‹</span>
        </button>

        <button onClick={goToNext} className="nav-arrow nav-arrow-right">
          <span className="arrow-icon">›</span>
        </button>

        {/* Certificate Display Area */}
        <div className="certificates-display" 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        >
          {certificates.map((cert, index) => {
            const position = index - currentIndex;
            const isCenter = position === 0;
            const isVisible = Math.abs(position) <= 1;

            let className = "certificate-card";
            if (isCenter) {
              className += " certificate-center";
            } else {
              className += " certificate-side";
            }
            if (!isVisible) {
              className += " certificate-hidden";
            }

            const style = {
              transform: `translateX(${position * 85}%) ${
                isCenter ? "scale(1)" : "scale(0.85)"
              }`,
              zIndex: isCenter ? 20 : 10,
              filter: isCenter ? "blur(0px)" : "blur(2px)",
              opacity: isCenter ? 1 : isVisible ? 0.7 : 0,
            };

            return (
              <div key={cert.id} className={className} style={style}>
                <div className="certificate-content">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="certificate-image"
                  />
                  {/* <div className="certificate-overlay">
                    <h3 className="certificate-title">{cert.title}</h3>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Indicators */}
        <div className="progress-indicators">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`progress-dot ${
                index === currentIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* Certificate Details */}
      <div className="certificate-details">
        <h2 className="certificate-heading">
          {currentCertificate.title}
        </h2>

        <p className="certificate-description">
          {currentCertificate.description}
        </p>

        {/* Certificate Info Grid */}
        <div className="info-grid">
          {/* Certified By */}
          <div className="info-item">
            <h3 className="info-title">Certified by</h3>
            <p className="info-content">{currentCertificate.certifiedBy}</p>
          </div>

          {/* Certified On */}
          <div className="info-item">
            <h3 className="info-title">Certified on</h3>
            <p className="info-content">{currentCertificate.certifiedOn}</p>
          </div>

          {/* Linked People */}
          <div className="info-item">
            <h3 className="info-title">linked people</h3>
            <div className="info-content">
              {currentCertificate.linkedPeople.map((person, index) => (
                <p key={index} className="person-name">
                  {person}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Link To Button */}
        <a href={currentCertificate.link} target="_blank" rel="noopener noreferrer">
          <button className="link-button">link to</button>
        </a>
      </div>
    </div>
  );
}

export default Certificates;
