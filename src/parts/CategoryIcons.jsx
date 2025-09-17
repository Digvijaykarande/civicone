import React from "react";
import "../stylesheets/CategoryIcons.css";

const categories = [
  { label: "Roads", icon: "https://img.icons8.com/?size=100&id=rJSINIXLwINM&format=png&color=000000" },
  { label: "Waste", icon: "https://img.icons8.com/?size=100&id=41711&format=png&color=000000" },
  { label: "Water", icon: "https://img.icons8.com/?size=50&id=26264&format=png&color=000000" },
  { label: "Streetlights", icon: "https://img.icons8.com/?size=100&id=55001&format=png&color=000000" },
];

const CategoryIcons = () => {
  return (
    <div className="categories">
      {categories.map((cat, idx) => (
        <div className="category" key={idx}>
          <img src={cat.icon} alt={cat.label} className="category-icon" />
          <p>{cat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryIcons;
