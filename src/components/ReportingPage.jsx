import React, { useState } from "react";
import "../stylesheets/ReportingPage.css";
import {ArrowLeft,Camera,MapPin,ChevronRight,CheckCircle,Route,
        Trash2,Droplet,Lightbulb,Building2,} from "lucide-react";

import { Link } from "react-router-dom";
import CameraCapture from "../parts/CameraCapture";
const categoriesList = [
  "Road Issue",
  "Waste Management",
  "Water Supply",
  "Streetlights",
  "Public Property",
];

const ReportingPage = () => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [showCategories, setShowCategories] = useState(false);

  const [location, setLocation] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);

  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const handleSubmit = () => {
    if (!description || !category || !location) {
      alert("Please fill all fields before submitting!");
      return;
    }
    const id = "1784" + Math.floor(Math.random() * 1000000);
    setTrackingId(id);
    setSubmitted(true);

    // Here you can also send capturedImage to backend if needed
    console.log("Captured Image:", capturedImage);
  };

  // Get user location
  const handleGetLocation = () => {
    setLoadingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
            setLocation(data.display_name || `${latitude}, ${longitude}`);
          } catch (error) {
            console.error("Error fetching location:", error);
            setLocation(`${latitude}, ${longitude}`);
          }
          setLoadingLocation(false);
        },
        (error) => {
          console.error("Geolocation error:", error);
          alert("Unable to fetch location. Please allow location access.");
          setLoadingLocation(false);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
      setLoadingLocation(false);
    }
  };

  return (
    <div className="report-container">
      {/* Header */}
      <div className="header">
        <button className="back-btn">
          <Link to={"/"}>
            <ArrowLeft size={22} />
          </Link>
        </button>
        <h1>Report an Issue</h1>
      </div>

      {/* Upload Photo/Video */}
      <div className="upload-box">
        {!showCamera && !capturedImage && (
          <div
            className="upload-content"
            onClick={() => setShowCamera(true)}
            style={{ cursor: "pointer" }}
          >
            <Camera size={56} className="camera-icon" />
            <p>Upload Photo / Video</p>
          </div>
        )}

        {showCamera && (
          <CameraCapture
            onCapture={(imageData) => {
              setCapturedImage(imageData);
              setShowCamera(false);
            }}
            onClose={() => setShowCamera(false)}
          />
        )}

        {capturedImage && (
          <div className="captured-preview">
            <h4>Captured Photo:</h4>
            <img src={capturedImage} alt="Captured" className="mt-2 rounded-lg shadow" />
            <button onClick={() => setCapturedImage(null)} className="retake-btn">
              Retake
            </button>
          </div>
        )}
      </div>

      {/* Description */}
      <textarea
        placeholder="Add a description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Auto Location */}
      <button className="option-btn" onClick={handleGetLocation}>
        <div className="option-left">
          <MapPin size={20} />
          <span>
            {loadingLocation ? "Fetching location..." : location || "Auto Location"}
          </span>
        </div>
        <ChevronRight size={18} className="arrow" />
      </button>

      {/* Category Selector */}
      <button
        className="option-btn"
        onClick={() => setShowCategories(!showCategories)}
      >
        <span>{category || "Select category"}</span>
        <ChevronRight size={18} className="arrow" />
      </button>

      {showCategories && (
        <div className="category-list">
          {categoriesList.map((cat, idx) => (
            <div
              key={idx}
              className={`category-option ${category === cat ? "active" : ""}`}
              onClick={() => {
                setCategory(cat);
                setShowCategories(false);
              }}
            >
              {cat === "Road Issue" && <Route size={18} />}
              {cat === "Waste Management" && <Trash2 size={18} />}
              {cat === "Water Supply" && <Droplet size={18} />}
              {cat === "Streetlights" && <Lightbulb size={18} />}
              {cat === "Public Property" && <Building2 size={18} />}
              <span>{cat}</span>
            </div>
          ))}
        </div>
      )}

      {/* Submit Button */}
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>

      {/* Report Submitted */}
      {submitted && (
        <div className="submitted-box">
          <CheckCircle size={22} className="checkmark" />
          <p>
            Report submitted <br />
            <span className="tracking">Tracking ID - {trackingId}</span>
            <br />
            <span className="tracking">📍 {location}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ReportingPage;
