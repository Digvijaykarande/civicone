import React from "react";
import "../stylesheets/Header.css";
import { Link } from "react-router-dom";
import { LogIn, Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="header" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 20px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"}}>
      <h1>CivicOne</h1>
      <div>
      <span><Link to={"/profile"} style={{textDecoration:"none",color:"black"}}>Profile</Link></span>
      </div>
    </div>
  );
};

export default Header;
