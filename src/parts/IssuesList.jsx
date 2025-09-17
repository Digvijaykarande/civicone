import React from "react";
import "../stylesheets/IssuesList.css";
import { ChevronRight } from "lucide-react";

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
            {issue.type === "high" ? "High" : "Low"}
          </span>
          <p>{issue.label}</p>
          <ChevronRight className="arrow" size={18} />
        </div>
      ))}
    </div>
  );
};

export default IssuesList;
