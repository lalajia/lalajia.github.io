import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    console.log("Button clicked");
    setShowForm(!showForm);
  };
  return (
    <div className="form">
      <div>
        <form>
          <h4> Click to Contact </h4>
          <a href="mailto:selenazheng3@gmail.com" style={{ color: "green" }}>
            Contact through email
          </a>
          <br />
          <a href="tel:+1778-929-3302" style={{ color: "green" }}>
            Contact on call
          </a>{" "}
          <br />
          <a href="SMS:+1778-929-3302" style={{ color: "green" }}>
            Send SMS
          </a>
          <br />
        </form>
      </div>

      <div>
        <button
          className="btn"
          style={{ padding: "10px", width: "7rem" }}
          onClick={toggleForm}
        >
          {showForm ? "Hide Form" : "Show Form"}
        </button>
        <form>
          {showForm && (
            <div>
              <form>
                <label>Your name</label>
                <input type="text" placeholder="Enter Your Name"></input>
                <label>Email/Phone</label>
                <input type="text" placeholder="Enter Your Email"></input>
                <label>Message</label>
                <textarea
                  rows={6}
                  type="text"
                  placeholder="It is just practice for from, please reach me by email or linkedin"
                ></textarea>
              </form>
              <div className="btncontainer">
                <button
                  onClick={() => window.alert("Do not click!")}
                  className="btn"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
