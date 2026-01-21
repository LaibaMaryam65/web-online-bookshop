import { Link } from "react-router-dom";
import logo from "../../components/images/logo.png";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container-fluid px-4">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src={logo} alt="Bookish Alcove Logo" height="40" />
          <span className="fw-bold">Admin Panel</span>
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
              <Link className="nav-link" to="/admin">Add</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/featured">Featured</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/latest">Latest</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/sale">Sale</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/admin/bestseller">BestSeller</Link>
            </li>
              <li className="nav-item">
              <Link className="nav-link" to="/admin/orders">Orders</Link>
            </li>
          </ul>
          <div className="right d-flex align-items-center gap-3">
            <Link to="/" className="btn btn-outline-dark btn-sm">Logout</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
