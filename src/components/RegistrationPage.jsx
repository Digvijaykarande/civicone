import React from "react";
import "../stylesheets/RegistrationPage.css";

const RegistrationPage = () => {
  return (
    <div className="register-box">
      {/* Logo */}
      <div className="logo-circle">C</div>

      {/* Title */}
      <h2 className="register-title">Create Account</h2>

      {/* Name Input */}
      <input
        type="text"
        placeholder="Full Name"
        className="input-field"
      />

      {/* Email Input */}
      <input
        type="email"
        placeholder="user@example.com"
        className="input-field"
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        className="input-field"
      />

      

      {/* Register Button */}
      <button className="register-btn">Sign Up</button>

      {/* Divider */}
      <div className="divider">
        <span>or</span>
      </div>

      {/* Google Register */}
      <button className="google-btn">
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google"
        />
        <span>Sign up with Google</span>
      </button>

      {/* Footer */}
      <p className="footer-text">
        Already have an account? <a href="login">Sign In</a>
      </p>
    </div>
  );
};

export default RegistrationPage;
