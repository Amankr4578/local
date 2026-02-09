import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      navigate("/home");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="close-btn">×</div>

        <h2 className="auth-title">
          <span className="gradient-text">Welcome</span> Back
        </h2>
        <p className="auth-subtitle">
          Please enter your details to login
        </p>

        <div className="input-group">
          <label>Email Address</label>
          <input
            placeholder="you@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            placeholder="***********"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="auth-links">
          <a href="#">Forgot password?</a>
          <Link to="/signup">SignUp</Link>
        </div>

        <button className="auth-btn" onClick={handleLogin}>
          LOGIN
        </button>
      </div>
    </div>
  );
}
