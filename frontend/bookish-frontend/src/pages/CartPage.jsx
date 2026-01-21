import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage = () => {
  const [cart, setCart] = useState(() => {
    // ensure each book has a quantity
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return savedCart.map(b => ({ ...b, quantity: b.quantity || 1 }));
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated")); // update Navbar badge
  }, [cart]);

const removeFromCart = (id) => {
  const updatedCart = cart.filter(b => b.id !== id);
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated")); 
};


  const increaseQuantity = (id) => {
    const updated = cart.map(book =>
      book.id === id ? { ...book, quantity: book.quantity + 1 } : book
    );
    setCart(updated);
  };

  const decreaseQuantity = (id) => {
    const updated = cart
      .map(book =>
        book.id === id ? { ...book, quantity: book.quantity - 1 } : book
      )
      .filter(book => book.quantity > 0);
    setCart(updated);
  };

  const total = cart.reduce(
    (sum, book) => sum + parseFloat(book.price.toString().replace("Rs.", "").trim()) * book.quantity,
    0
  );

  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <h2 className="fw-bold">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="empty mt-4">No Products Added.</div>
        ) : (
          <>
            <div className="row">
              {cart.map((book) => (
                <div key={book.id} className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5>{book.title}</h5>
                      <p>Rs. {book.price}</p>

                      <div className="d-flex align-items-center gap-2 mb-2">
                        <button className="btn btn-sm btn-secondary" onClick={() => decreaseQuantity(book.id)}>-</button>
                        <span>{book.quantity}</span>
                        <button className="btn btn-sm btn-secondary" onClick={() => increaseQuantity(book.id)}>+</button>
                      </div>

                      <p>Total: Rs. {parseFloat(book.price.toString().replace("Rs.", "").trim()) * book.quantity}</p>

                      <button
                        className="btn btn-danger w-100"
                        onClick={() => removeFromCart(book.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary mt-4 p-3 border-top">
              <h5>Total: Rs. {total}</h5>
              <button className="btn btn-success mt-2">
                <a href="/checkout" className="text-decoration-none text-white">Checkout</a>
              </button>
            </div>
          </>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default CartPage;
