import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BookDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams(); 
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`http://localhost:3001/genres`);
        if (!res.ok) throw new Error("Failed to fetch genres");
        const genresData = await res.json();

        const allBooks = Object.values(genresData).flat();
        const foundBook = allBooks.find(b => String(b.id) === String(id));

        if (!foundBook) throw new Error("Book not found");
        setBook(foundBook);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

 
 const addToCart = (bookToAdd) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingBook = cart.find(b => b.id === bookToAdd.id);

  if (existingBook) {
    existingBook.quantity += 1; 
  } else {
    cart.push({ ...bookToAdd, quantity: 1 }); 
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdated")); 
  alert("Book added to cart!");
};



  if (loading) return <div className="loading">Loading book details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!book) return <div className="loading">Book not found...</div>;

  return (
    <div>
      <Navbar />
      <div className="container book-details-container my-5">
        <div className="book-image">
          <img
            src={book.coverImage}
            alt={book.title}
            className="img-fluid rounded shadow-sm"
          />
        </div>

        <div className="book-info">
          <h2 className="book-title">{book.title}</h2>
          <h5 className="book-author"><strong>Author:</strong> {book.author}</h5>
           {book.category && <p><strong>Category:</strong> {book.category}</p>}
          {book.publisher && <p><strong>Publisher:</strong> {book.publisher}</p>}
          {book.isbn && <p><strong>ISBN:</strong> {book.isbn}</p>}
          {book.price && <p className="price"><strong>Price:</strong> Rs. {book.price}</p>}
          {book.format && <p><strong>Format:</strong> {book.format}</p>}
          {book.publicationYear && <p><strong>Publication Year:</strong> {book.publicationYear}</p>}
          {book.description && <p className="book-description mt-3"><span className="fw-bold">Description: </span>{book.description}</p>}
          {book.stock !== undefined && (
            <p className={`stock ${book.stock === 0 ? "out" : "in"}`}>
              <strong>Stock:</strong> {book.stock === 0 ? "Out of Stock" : `${book.stock} available`}
            </p>
          )}

          {book.reviews && (
            <div className="reviews">
              <div className="stars">
                {[1,2,3,4,5].map(i =>
                  i <= Math.round(book.reviews.rating) ? 
                    <i key={i} className="fas fa-star"></i> : 
                    <i key={i} className="far fa-star"></i>
                )}
              </div>
              <span className="review-count fw-bold">{book.reviews.rating} Ratings ({book.reviews.count} reviews)</span>
            </div>
          )}

          
          <div className="mt-4">
            <button className="btn btn-primary" onClick={() => addToCart(book)}>
              Add to Cart
            </button>
          </div>
             <div className="mt-4">
            <button className="btn btn-primary"    onClick={() => navigate(-1)}>
            Back
            </button>
          </div>
        </div>
             
      </div>
      <Footer />
    </div>
  );
};

export default BookDetails;
