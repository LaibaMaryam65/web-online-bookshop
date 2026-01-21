import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // separate CSS
import { useEffect } from "react";
const AllGenresCard = () => {
     useEffect(() => {
          if (window.AOS) {
            window.AOS.init({ duration: 1000, once: true });
              window.AOS.refresh();
          }
        }, []);
  return (
    <Link to="/genre" className="all-genres-card-link">
      <div className="all-genres-card" data-aos="fade-right">
        <h2>View All Genres</h2>
        <p>Explore Fiction, Non-Fiction, Historical, Classic & Contemporary</p>
        <p><i class="fa-solid fa-arrow-right"></i></p>
      </div>
    </Link>
  );
};

export default AllGenresCard;
