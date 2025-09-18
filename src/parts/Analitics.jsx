import React from "react";
import "../stylesheets/Analitics.css";
import { Timer, AlertCircle, Bell } from "lucide-react";
import { Link } from "react-router-dom";
const analytics = [
  { label: "Resolution times", icon: <Timer size={28} />, path: "/notifications"},
  { label: "Pending issues", icon: <AlertCircle size={28} />,path: "/feed" },
  { label: "Predictive alerts", icon: <Bell size={28} />,path: "/notifications" },
];

const Analytics = () => {
  return (
    <div className="analytics">
      <h3>Analytics</h3>
      <div className="analytics-items">
        {analytics.map((item, idx) => (
           <Link to={item.path} className="category" key={idx}>
          <div className="analytics-card" key={idx}>
            <div className="analytics-icon">{item.icon}</div>
            <p>{item.label}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
