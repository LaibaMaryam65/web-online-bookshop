import logo from "../components/images/logo.png";
import { useState, useEffect } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [cartCount, setCartCount] = useState(
    JSON.parse(localStorage.getItem("cart"))?.reduce((sum, b) => sum + (b.quantity || 1), 0) || 0
  );

  useEffect(() => {
  const updateCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQty = cart.reduce((sum, b) => sum + (b.quantity || 1), 0);
    setCartCount(totalQty);
  };

  window.addEventListener("cartUpdated", updateCount);
  updateCount(); // initialize on page load

  return () => window.removeEventListener("cartUpdated", updateCount);
}, []);

  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container-fluid px-4">

        
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img
            src={logo}
            alt="Bookish Alcove Logo"
            height="40"
          />
          <span className="fw-bold"><a href="/" className="text-decoration-none text-white">Bookish  Alcove</a></span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/featured">Featured</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/latest">Latest</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/genre">Genre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sale">Sale</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="/bestseller">BestSeller</a>
            </li>
          </ul>
        <div className="right d-flex align-items-center gap-3">
          <a href="/cart" className="cart-icon text-dark fs-5 position-relative">
            <i className="fa-solid fa-cart-shopping"></i>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </a>
             <button className="btn">
             <a href="/login">Admin</a>
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
