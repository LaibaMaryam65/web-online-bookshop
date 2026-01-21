import React from "react";
import "../../app.css";

const AdminFooter = () => {
  return (
    <footer className="admin-footer">
      <div className="container">
        <span>© {new Date().getFullYear()} Bookish Alcove Admin Panel</span>
        <span className="footer-divider">|</span>
        <span>Since 1997</span>
      </div>
    </footer>
  );
};

export default AdminFooter;
