import React from "react";
import "../stylesheets/Home.css"; 
import { Camera, Mic, FileText, Plus, ArrowLeft } from "lucide-react"; 
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";  
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="report-card">
      {/* Back Button */}
      <button className="backbutton" onClick={() => navigate("/")}>
        <ArrowLeft size={22} />
      </button>

      {/* Logo + Title */}
      <div>
        <div className="logo">C</div>
        <h2 className="report-title">Report Issue</h2>
      </div>

      {/* Main Report Button */}
      <div>
        <button className="report-btn">
        <Link to={"/report"}><Plus size={32} /></Link>  
        </button>
        <p className="report-label">Report Issue</p>
      </div>

      {/* Options */}
      <div className="options">
        <div className="option">
          <Camera size={45} />
          <span>Photo</span>
        </div>
        <div className="option">
          <Mic size={45} />
          <span>Voice Note</span>
        </div>
        <div className="option">
          <FileText size={45} />
          <span>Text</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
