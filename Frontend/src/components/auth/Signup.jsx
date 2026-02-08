import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      navigate("/login");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="close-btn">×</div>

        <h2 className="auth-title">Create an Account</h2>

        <div className="input-group">
          <label>Name</label>
          <input onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="auth-links">
          <Link to="/login">Already have an account?</Link>
        </div>

        <button className="auth-btn" onClick={handleSignup}>
          SIGNUP
        </button>
      </div>
    </div>
  );
}
