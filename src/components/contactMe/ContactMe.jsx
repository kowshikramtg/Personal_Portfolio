import React, { useState } from "react";
import "./ContactMe.css";

function ContactMe() {
  const [selection, setSelection] = useState("select");

  return (
    <>
      <h1 className="title">Contact Me</h1>
      <p className="subtitle">Let’s connect & explore opportunities </p>
      <div className="contact-container">
        <form className="contact-form">
          {/* Basic Info */}
          <div className="form-group name-email">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              required
            />
            <label htmlFor="email">Email</label>
            <input
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
              <select id="role" name="role" required>
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
                id="meet"
                name="meet"
                value={selection}
                onChange={(e) => setSelection(e.target.value)}
                required
              >
                <option value="select">--Select--</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          {selection === "yes" ? (
            <>
              <div className="form-inline">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input type="date" id="date" name="date" required />
                </div>

                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <input type="time" id="time" name="time" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="meetDetails">
                  Tell me a bit about the meet
                </label>
                <textarea
                  id="meetDetails"
                  name="meetDetails"
                  placeholder="Purpose of meet..."
                  rows="5"
                  required
                />
              </div>
            </>
          ) : (
            <div className="form-group">
              <label htmlFor="msg">Any Message?</label>
              <textarea
                id="msg"
                name="msg"
                placeholder="Type your message..."
                rows="5"
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="form-actions">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactMe;
