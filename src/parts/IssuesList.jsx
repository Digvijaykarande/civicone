import React from "react";
import "../stylesheets/IssuesList.css";

const issues = [
  { label: "Pothole", type: "high" },
  { label: "Broken streetlight", type: "high" },
  { label: "Litter", type: "low" },
];

const IssuesList = () => {
  return (
    <div className="issues-list">
      {issues.map((issue, idx) => (
        <div className="issue-item" key={idx}>
          <span className={`tag ${issue.type}`}>
            {issue.type === "high" ? "High" : issue.type === "low" ? "List" : ""}
          </span>
          <p>{issue.label}</p>
          <span className="arrow">›</span>
        </div>
      ))}
    </div>
  );
};

export default IssuesList;
