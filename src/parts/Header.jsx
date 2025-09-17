import React from "react";
import "../stylesheets/Header.css";
import { Link } from "react-router-dom";
import { LogIn, Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="header">
      <h1>CivicOne</h1>
      {/* <div>
      <span><Link to={"/login"} style={{textDecoration:"none",color:"black"}}> Login</Link></span>
      </div> */}
    </div>
  );
};

export default Header;
