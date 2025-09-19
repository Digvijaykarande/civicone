import React, { useState } from "react";
import "../stylesheets/RegistrationPage.css";
const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, email, phone, password };

    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      if (res.ok) {
        // Save JWT token in localStorage
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        // Redirect or navigate to dashboard
        window.location.href = "/"; 
      } else {
        alert(data.message);
      }
      
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="register-box">
      <div className="logo-circle">C</div>
      <h2 className="register-title">Create Account</h2>

      <input
        type="text"
        placeholder="Full Name"
        className="input-field"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="user@example.com"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone Number"
        className="input-field"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="input-field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="register-btn" onClick={handleSubmit}>
        Sign Up
      </button>

      <div className="divider"><span>or</span></div>

      <button className="google-btn">
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google"
        />
        <span>Sign up with Google</span>
      </button>

      <p className="footer-text">
        Already have an account? <a href="login">Sign In</a>
      </p>
    </div>
  );
};

export default RegistrationPage;
