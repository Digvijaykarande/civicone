import React from "react";
import "../stylesheets/CategoryIcons.css";
import { Route, Trash2, Droplet, Lightbulb, Bell, Camera, House } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { label: "Capture", icon: <Camera size={28} />, path: "/report" },
  { label: "Report Issue", icon: <Trash2 size={28} />, path: "/home" },
  { label: "Notifications", icon: <Bell size={28} />, path: "/notifications" },
  { label: "Peoples Issue", icon: <House size={28} />, path: "/feed" },
  { label: "Roads", icon: <Route size={28} />, path: "#" },
  { label: "Waste", icon: <Trash2 size={28} />, path: "#" },
  { label: "Water", icon: <Droplet size={28} />, path: "#" },
  { label: "Streetlights", icon: <Lightbulb size={28} />, path: "#" },
];

const CategoryIcons = () => {
  return (
    <div className="categories">
      {categories.map((cat, idx) => (
        <Link to={cat.path} className="category" key={idx}>
          <div className="icon-wrapper">{cat.icon}</div>
          <p>{cat.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default CategoryIcons;
