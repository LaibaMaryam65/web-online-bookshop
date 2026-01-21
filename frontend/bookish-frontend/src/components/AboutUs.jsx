import React from "react";
import "../App.css";
import logo from "./images/logo.jpeg"

const AboutUs = () => {
  return (
    <section className="about-us py-5">
      <div className="container">
        <div className="row align-items-center gx-5">

          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">About Bookish Alcove</h2>
            <p className="mb-4">
              Bookish Alcove is a haven for book lovers, providing an extensive collection from timeless classics to contemporary hits.
              Our mission is to connect readers with the stories they love, while offering fast delivery, excellent support, and personalized recommendations.
            </p>
            <ul className="list-unstyled text-muted fw-medium">
              <li className="mb-3"><i className="fa-solid fa-check me-2 text-dark"></i>Curated collections for every taste</li>
              <li className="mb-3"><i className="fa-solid fa-check me-2 text-dark"></i>Expert book recommendations</li>
              <li className="mb-3"><i className="fa-solid fa-check me-2 text-dark"></i>Community events & reading clubs</li>
              <li className="mb-3"><i className="fa-solid fa-check me-2 text-dark"></i>Author interviews and book news</li>
            </ul>
          </div>

          <div className="col-lg-6 text-center">
            <img 
              src={logo}
              alt="Books and reading"
              className="img-fluid rounded about-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
