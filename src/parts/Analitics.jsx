import React from "react";
import "../stylesheets/Analitics.css";
import { Timer, AlertCircle, Bell } from "lucide-react";

const analytics = [
  { label: "Resolution times", icon: <Timer size={28} /> },
  { label: "Pending issues", icon: <AlertCircle size={28} /> },
  { label: "Predictive alerts", icon: <Bell size={28} /> },
];

const Analytics = () => {
  return (
    <div className="analytics">
      <h3>Analytics</h3>
      <div className="analytics-items">
        {analytics.map((item, idx) => (
          <div className="analytics-card" key={idx}>
            <div className="analytics-icon">{item.icon}</div>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
