import { useState } from "react";
import "../../app.css"
function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("admin", "true"); 
      window.location.href = "/admin";
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
        <nav className="login-navbar">
  <span>Admin Panel Login</span>
  <a href="/" className="back-home">Back to Home</a>
</nav>

    <div className="admin-login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>

        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
   

        <div className="form-group">
          <label htmlFor="password">Password:  </label>
          <br/>
           <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
             <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
            </span>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
     <footer className="login-footer">
        &copy; {new Date().getFullYear()} Bookish Alcove Admin. All rights reserved.
      </footer>
    </div>
  );
}

export default AdminLogin;
