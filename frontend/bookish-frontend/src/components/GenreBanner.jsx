import React from "react";
import "./../App.css";

const GenreBanner = ({ onGenreSelect }) => {
  const genres = [
    "Fiction",
    "Classic",
    "Historical",
    "Non-Fiction",
    "Contemporary"
  ];

  return (
    <section className="genre-banner mb-4">
      <div className="genres-grid">
        {genres.map(genre => (
          <div
            key={genre}
            className="genre-card"
            onClick={() => onGenreSelect(genre)}
          >
            <h3>{genre}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenreBanner;
