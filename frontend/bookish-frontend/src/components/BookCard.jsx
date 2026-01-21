import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {

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

  return (
    <div className="col-sm-6 col-md-3" data-aos="zoom-out">
      <div className="card h-100 shadow-sm">
        <img
          src={book.coverImage}
          className="card-img-top"
          alt={book.title}
        />

        <div className="card-body text-center">
          <h6 className="card-title">{book.title}</h6>
          <div className="card-info">
            <div className="card-info-item">
          <p className="text-muted mb-1"><strong>Author:</strong> {book.author}</p>
          <p className="text-muted mb-1"><strong>Category:</strong> {book.category}</p>
          </div>
          <div className="card-info-item">
          <p className="text-muted mb-1"><strong>ISBN:</strong> {book.isbn}</p>
          <p className="fw-bold mb-3"><strong>Price:</strong> <span className="text-success">Rs. {book.price}</span></p>
          </div>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-dark flex-fill"  onClick={() => addToCart(book)}>
              Add to Cart
            </button>

            <Link to={`/book/${book.id}`} className="flex-fill">
              <button className="btn btn-outline-primary w-100">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
