import React, { useState } from "react";
import "./ContactMe.css";
import Swal from "sweetalert2";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [wantMeet, setWantMeet] = useState("select"); // one state variable
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = { name, email, role, wantMeet, date, time, description };

  //   const res = await fetch("api/contact", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });
  //   if (res.ok) {
  //     alert("Submitted!");
  //   } else {
  //     alert("Error!");
  //   }
  // };

  // web3 forms ~~>

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f2ab6438-2ad3-459f-a3bb-14125f5901db");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1 className="title">Contact Me</h1>
        <p className="subtitle">Let’s connect & explore opportunities</p>
        <div className="contact-container">
          <div className="contact-form">
            {/* Basic Info */}
            <div className="form-group name-email">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                name="name"
                placeholder="Your name.."
                required
              />
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                placeholder="Your email.."
                required
              />
            </div>

            <div className="he">
              <div className="form-group">
                <label htmlFor="role">What suits you the best?</label>
                <select
                  id="role"
                  name="role"
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">-- Select your role --</option>
                  <option value="student">Student</option>
                  <option value="tech-entrepreneur">Tech Entrepreneur</option>
                  <option value="event-organizer">Event Organizer</option>
                  <option value="councilor">Councilor</option>
                  <option value="employee">Employee</option>
                  <option value="entrepreneur">Entrepreneur</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Meet Section */}
              <div className="form-group">
                <label htmlFor="meet">Would you like a Meet?</label>
                <select
                  value={wantMeet}
                  onChange={(e) => setWantMeet(e.target.value)}
                  id="meet"
                  name="meet"
                  required
                >
                  <option value="select">--Select--</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>

            {wantMeet === "yes" ? (
              <>
                <div className="form-inline">
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="meetDetails">
                    Tell me a bit about the meet
                  </label>
                  <textarea
                    id="meetDetails"
                    name="message"
                    placeholder="Purpose of meet..."
                    rows="5"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
              </>
            ) : (
              <div className="form-group">
                <label htmlFor="msg">Any Message?</label>
                <textarea
                  id="msg"
                  name="message"
                  placeholder="Type your message..."
                  rows="5"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="form-actions">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactMe;
