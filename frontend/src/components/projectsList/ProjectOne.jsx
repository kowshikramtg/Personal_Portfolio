import React from "react";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import '../../App.css';

function ProjectOne() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="flex flex-col bg-red-500">
        <div>
          <Link
            to="main_content"
            smooth={true}
            duration={500}
            className="logoLink"
          >
            <img src={logo} alt="" className="w-20" />
          </Link>
        </div>
        <div className="dateAndTime">
          <p className="day">
            {now.toLocaleDateString(undefined, { weekday: "short" })}
          </p>
          <p className="date"> {now.toLocaleDateString()}</p>
          <p className="time"> {now.toLocaleTimeString()}</p>
        </div>
      </div>
    </>
  );
}
export default ProjectOne;
