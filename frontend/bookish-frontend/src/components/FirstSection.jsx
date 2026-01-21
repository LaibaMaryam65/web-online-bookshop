import First from "./images/First.jpeg";
import "../App.css";
import { useEffect } from "react";
const FirstSection = () => {
    useEffect(() => {
         if (window.AOS) {
           window.AOS.init({ duration: 1000, once: true });
             window.AOS.refresh();
         }
       }, []);
  return (
    <section className="first py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0" data-aos="fade-left" data-aos-once="true" data-aos-duration="200">
            <h1 className="fw-bold first-title">
              Discover Your Next <br /> Favorite Book
            </h1>
            <p className="first-text mt-3">
              Explore fiction, non-fiction, academics, and bestsellers — all in one place.
            </p>
            <div className="mt-4">
              <a href="/featured" className="btn btn-dark me-2">Shop Now</a>
              <a href="/genre" className="btn btn-outline-dark">Browse Books</a>
            </div>
          </div>

          <div className="col-md-6 text-center" data-aos="zoom-out" data-aos-once="true">
            <img
              src={First}
              alt="Books"
              className="img-fluid first-img" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FirstSection;
