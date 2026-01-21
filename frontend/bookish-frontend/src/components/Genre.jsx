import React, { useState, useEffect } from "react";
import SimpleBookCard from "./SimpleBookCard";
import FilterBar from "./FilterBar";
import GenreBanner from "./GenreBanner";

const categoriesList = [
  "Fiction",
  "Classic",
  "Historical",
  "Non-Fiction",
  "Contemporary"
];

const Genre = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/genres")
      .then(res => res.json())
      .then(data => {
        const allBooks = Object.entries(data).flatMap(
          ([cat, booksArray]) =>
            booksArray.map(book => ({ ...book, category: cat }))
        );
        setBooks(allBooks);
      })
      .catch(() => setBooks([]));
  }, []);

  const filteredBooks = books
    .filter(book =>
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
       book.author.toLowerCase().includes(search.toLowerCase())) &&
      (category === "" || book.category === category)
    )
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "title-asc") return a.title.localeCompare(b.title);
      if (sort === "title-desc") return b.title.localeCompare(a.title);
      return 0;
    });

  const handleReset = () => {
    setSearch("");
    setCategory("");
    setSort("");
  };

  return (
    <div className="container py-4">


      <GenreBanner onGenreSelect={setCategory} />

      <FilterBar
        search={search} setSearch={setSearch}
        category={category} setCategory={setCategory}
        sort={sort} setSort={setSort}
        categories={categoriesList}
        count={filteredBooks.length}
        onRefresh={handleReset}
      />

      <div className="row g-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <SimpleBookCard key={book.id} book={book} />
          ))
        ) : (
          <div className="text-center py-5">No books found</div>
        )}
      </div>
    </div>
  );
};

export default Genre;
