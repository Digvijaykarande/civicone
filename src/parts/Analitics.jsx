import React from "react";
import "../stylesheets/Analitics.css";

const analytics = [
  {
    label: "Resolution times",
    icon: "https://img.icons8.com/?size=100&id=IYQsosUsIP8f&format=png&color=000000",
  },
  {
    label: "Pending issues",
    icon: "https://img.icons8.com/?size=100&id=rtP76A1lpa0V&format=png&color=000000",
  },
  {
    label: "Predictive alerts",
    icon: "https://img.icons8.com/ios/50/appointment-reminders.png", 
  },
];

const Analytics = () => {
  return (
    <div className="analytics">
      <h3>Analytics</h3>
      <div className="analytics-items">
        {analytics.map((item, idx) => (
          <div className="analytics-card" key={idx}>
            <img src={item.icon} alt={item.label} className="analytics-icon" />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
