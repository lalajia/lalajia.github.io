import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Header heading="Contact" />
      <ContactForm />
      <Footer></Footer>
    </div>
  );
};

export default Contact;
