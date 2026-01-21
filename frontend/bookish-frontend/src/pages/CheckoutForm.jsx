import { useState, useEffect } from "react";
import '../app.css';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function CheckoutPage() {

  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const totalPrice = cart.reduce(
  (acc, item) => acc + Number(item.price) * (item.quantity || 1),
  0
);


  const handleSubmit = (e) => {
  e.preventDefault();

  if (!cart.length) return alert("Your cart is empty!");


  const order = {
    id: Date.now(),
    customer: {
      name,
      email,
      address,
      city,
      zip
    },
    payment: {
      cardNumber,
      expiry,
      cvv
    },
    items: cart.map(item => ({
      id: item.id,
      title: item.title,
      price: parseFloat(item.price.toString().replace("Rs.", "").trim()),
      quantity: item.quantity || 1
    })),
    total: cart.reduce(
      (sum, item) => sum + parseFloat(item.price.toString().replace("Rs.", "").trim()) * (item.quantity || 1),
      0
    ),
    date: new Date().toLocaleString()
  };

 
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  setName("");
  setEmail("");
  setAddress("");
  setCity("");
  setZip("");
  setCardNumber("");
  setExpiry("");
  setCvv("");
  setCart([]);
  localStorage.removeItem("cart");
  window.dispatchEvent(new Event("cartUpdated"));

  alert("Order placed successfully!");
};

const groupedCart = Object.values(
  cart.reduce((acc, item) => {
    const key = item.title;

    if (!acc[key]) {
      acc[key] = {
        ...item,
        quantity: item.quantity || 1  
      };
    } else {
      acc[key].quantity += item.quantity || 1;
    }

    return acc;
  }, {})
);
  

  return (
    <div>
        <Navbar/>
        <br/>
    <div className="checkout-page">
      <div className="checkout-wrapper">
    
        <div className="order-summary">
          <h3>Order Summary</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
             {groupedCart.map((item, index) => (
    <li key={index}>
      {item.title} × {item.quantity} — Rs.{item.price * item.quantity}
    </li>
  ))}
            </ul>
          )}
          <hr />
          <p><strong>Total: Rs.{totalPrice}</strong></p>
                <button className="btn btn-dark"><a href="/genre" className="text-decoration-none text-white">Keep Shopping</a></button>
        </div>


        <form className="checkout-card" onSubmit={handleSubmit}>
          <h2>Checkout</h2>
<br/>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>ZIP Code</label>
              <input
                type="text"
                placeholder="ZIP"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </div>
          </div>

          <h3>Payment Info</h3>
          <br/>
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                type="month"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                required
              />
            </div>
                <br/>
            <div className="form-group">
              <label>CVV</label>
              <input
                type="text"
                placeholder="XXX"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default CheckoutPage;
