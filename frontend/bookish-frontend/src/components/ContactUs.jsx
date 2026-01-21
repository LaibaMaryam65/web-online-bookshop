import React, { useState } from "react";
import "../App.css";
import shop from "./images/shop.jpeg";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    alert(`Dear ${name} your request has been sent! `);


    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact-us py-5">
      <div className="container">
        <div className="row align-items-center gx-5">

          <h2 className="fw-bold mb-3">Contact Us Or Request a Book</h2>
          <p className="mb-4">
            Have questions or suggestions? <br/>Or want to Request a Book? <br/> We’d love to hear from you! Fill out the form below and our team will get back to you as soon as possible.
          </p>

          <div className="col-lg-6">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea 
                  className="form-control" 
                  rows="5" 
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark mt-2">Send Message</button>
            </form>
          </div>

          <div className="col-lg-6 text-center">
            <img 
              src={shop}
              alt="Contact us"
              className="img-fluid rounded contact-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
