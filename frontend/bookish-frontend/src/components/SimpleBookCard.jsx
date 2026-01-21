import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
const SimpleBookCard = ({ book }) => {
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
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card shadow-sm mb-4">
        <img src={book.coverImage} alt={book.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>ISBN:</strong> {book.isbn}</p>
          <p><strong>Category:</strong> {book.category}</p>
          <p><strong>Price:</strong> Rs.{book.price}</p>

          <div className="d-grid gap-2 mt-3">
            <Link to={`/book/${book.id}`}>
              <button className="btn btn-primary w-100">Details</button>
            </Link>
            <button className="btn btn-dark"  onClick={() => addToCart(book)}>
              Add to Cart
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleBookCard;
