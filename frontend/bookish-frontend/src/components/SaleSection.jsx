import React from 'react'
import "../App.css"
import sale from "./images/sale.png"
import { useEffect } from "react";
export const SecondSection = () => {
   useEffect(() => {
      if (window.AOS) {
        window.AOS.init({ duration: 1000, once: true });
          window.AOS.refresh();
      }
    }, []);
  return (
    <section className="sale-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-left" data-aos-once="true">
            <h2 className="fw-bold sale-title mb-3">
              New Year Sale
            </h2>
            <p className="sale-text mb-4">
              Up to 50% off on bestsellers, fiction, and academic titles.
            </p>
            <a href="/sale" className="btn btn-light btn-lg sale-btn">
              Shop Now
            </a>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={sale}
              alt="2026 Sale"
              className="img-fluid sale-img" data-aos="zoom-in"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
export default SecondSection;