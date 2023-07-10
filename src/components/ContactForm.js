import React from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  return (
    <div className="form">
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
        <button onClick={() => window.alert("Do not click!")} className="btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
