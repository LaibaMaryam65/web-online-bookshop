import React, { useEffect, useState } from "react";

import BookCard from "./BookCard";

const Latest = ({ limit, category }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/latestBooks")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(console.error);
  }, []);

  
  useEffect(() => {
    if (window.AOS && books.length > 0) {
      window.AOS.init({ duration: 1000, once: false });
      window.AOS.refresh();
    }
  }, [books]);

  let displayed = books;
  if (category) displayed = displayed.filter(b => b.category === category);
  if (limit) displayed = displayed.slice(0, limit);

  return (
    <section className="latest-books py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Latest Books</h2>
        <div className="row g-4">
          {displayed.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Latest;
