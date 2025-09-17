import React from "react";
import "../stylesheets/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="signin-box">
      {/* Logo */}
      <div className="logo-circle">C</div>

      {/* Title */}
      <h2 className="signin-title">SignIn</h2>

      <input
        type="email"
        placeholder="user@example.com"
        className="input-field"
      />

      <input type="password" 
      placeholder="Password"
      className="input-field" />

      {/* Sign In Button */}
      <button className="signin-btn">Sign in</button>

      {/* Divider */}
      <div className="divider">
        <span>or</span>
      </div>

      {/* Google Sign In */}
      <button className="google-btn">
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google"
        />
        <span>Sign in with Google</span>
      </button>

      {/* Footer */}
      <p className="footer-text">
        Don’t have an account? <a href="register">register</a>
      </p>
    </div>
  );
};

export default LoginPage;
