import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* About Section */}
          <div className="footer-about">
            <h4>Bookish Alcove</h4>
            <p>Your haven for books – from classics to modern tales, explore, read, and enjoy.</p>
          </div>

   
          <div className="footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/genre">Shop</a></li>
              <li><p>Contact us: +92 1112223335</p></li>
            </ul>
          </div>


          <div className="footer-social">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

   
          <div className="footer-newsletter">
            <h5>Subscribe</h5>
            <form>
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

 
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Bookish Alcove</span>
        <span className="footer-divider">|</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
