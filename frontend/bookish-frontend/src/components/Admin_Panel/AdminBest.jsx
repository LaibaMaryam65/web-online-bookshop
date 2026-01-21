import { useEffect, useState } from "react";
import { getBooksByGenre } from "../../api/BooksApi"; 
import {
  getBestBooks,
  addBookToBest,
  deleteBestBook
} from "./AdminApi";
import "../../app.css";
import AdminNavbar from "./AdminNavbar.jsx";

const genres = ["Fiction", "Classic", "Historical", "Non-Fiction", "Contemporary"];

export default function AdminBest() {
  const [selectedGenre, setSelectedGenre] = useState("Fiction");
  const [allBooks, setAllBooks] = useState([]);
  const [bestBooks, setBestBooks] = useState([]);

  async function loadAllBooks() {
    const books = await getBooksByGenre(selectedGenre);
    setAllBooks(books);
  }

  async function loadBest() {
    const best = await getBestBooks();
    setBestBooks(best);
  }

  useEffect(() => {
    loadAllBooks();
    loadBest();
  }, [selectedGenre]);

  async function handleAdd(book) {
    const bestBook = {
      id: book.id.toString(),
      title: book.title,
      author: book.author,
      isbn:book.isbn,
      category: selectedGenre,
      price: book.price,
      coverImage: book.coverImage,
      reviews:book.reviews,
      stock:book.stock,
      format:book.format,
      publicationYear:book.publicationYear


    };
    const added = await addBookToBest(bestBook);
    if (added) loadBest();
  }

  async function handleRemove(book) {
    await deleteBestBook(book.id.toString());
    loadBest();
  }

  return (
    <div>
      <AdminNavbar />
      <br /><br />
      <div className="container my-4">
        <h2 className="text-center mb-4">Manage Best Sellers</h2>

        <div className="mb-4 d-flex align-items-center gap-2">
          <label className="fw-semibold mb-0">Filter by Genre:</label>
          <select
            className="form-select w-auto"
            value={selectedGenre}
            onChange={e => setSelectedGenre(e.target.value)}
          >
            {genres.map(g => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <h3 className="mb-3 border-bottom pb-1">Books ({selectedGenre})</h3>
            {allBooks.map(book => (
              <div key={book.id.toString()} className="card mb-3 shadow-sm">
                <div className="row g-0 align-items-center">
                  <div className="col-auto">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="img-fluid rounded-start"
                      style={{ width: '70px', height: '100px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col">
                    <div className="card-body py-2">
                      <h6 className="card-title mb-1">{book.title}</h6>
                      <p className="card-text mb-0 text-muted">{book.author}</p>
                      <p className="card-text mb-0 text-muted">{book.isbn}</p>
                      <p className="card-text text-secondary small">{selectedGenre}</p>
                    </div>
                  </div>
                  <div className="col-auto pe-3">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleAdd(book)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-6 mb-4">
            <h3 className="mb-3 border-bottom pb-1">All Best Sellers</h3>
            {bestBooks.map(book => (
              <div key={book.id.toString()} className="card mb-3 shadow-sm">
                <div className="row g-0 align-items-center">
                  <div className="col-auto">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="img-fluid rounded-start"
                      style={{ width: '70px', height: '100px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col">
                    <div className="card-body py-2">
                      <h6 className="card-title mb-1">{book.title}</h6>
                      <p className="card-text mb-0 text-muted">{book.author}</p>
                      <p className="card-text text-secondary small">{book.category}</p>
                    </div>
                  </div>
                  <div className="col-auto pe-3">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemove(book)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
