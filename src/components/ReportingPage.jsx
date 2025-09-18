import React, { useState } from "react";
import { ArrowLeft, Camera, MapPin, ChevronRight, CheckCircle, Route, Trash2, Droplet, Lightbulb, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import CameraCapture from "../parts/CameraCapture";
import "../stylesheets/ReportingPage.css";

const categoriesList = ["Road Issue", "Waste Management", "Water Supply", "Streetlights", "Public Property"];

const ReportingPage = () => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleShowCamera = () => setShowCamera(true);
  const handleCloseCamera = () => setShowCamera(false);

  const handleGetLocation = () => {
    if (!navigator.geolocation) return alert("Geolocation not supported");

    setLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`);
          const data = await response.json();
          setLocation(data.display_name || `${coords.latitude}, ${coords.longitude}`);
        } catch {
          setLocation(`${coords.latitude}, ${coords.longitude}`);
        }
        setLoadingLocation(false);
      },
      (err) => {
        alert("Allow location access");
        setLoadingLocation(false);
      }
    );
  };

  const handleRetake = () => {
    setCapturedImage(null);
    handleShowCamera();
  };

  const handleSubmit = () => {
    if (!description || !category || !location || !capturedImage) {
      return alert("Fill all fields & capture photo!");
    }
    if (isSubmitting) return;

    setIsSubmitting(true);
    const id = "1784" + Math.floor(Math.random() * 1000000);
    setTrackingId(id);
    setSubmitted(true);

    setDescription("");
    setCategory("");
    setLocation("");
    setCapturedImage(null);
    setShowCamera(false);

    setTimeout(() => setIsSubmitting(false), 500); // simulate backend
  };

  return (
    <div className="report-container">
      <div className="header">
        <button className="back-btn"><Link to="/"><ArrowLeft size={22} /></Link></button>
        <h1>Report an Issue</h1>
      </div>

      <div className="upload-box">
        {!showCamera && !capturedImage && (
          <div className="upload-content" onClick={handleShowCamera} style={{ cursor: "pointer" }}>
            <Camera size={56} className="camera-icon" />
            <p>Upload Photo / Video</p>
          </div>
        )}

        {showCamera && (
          <CameraCapture
            onCapture={(image) => {
              setCapturedImage(image);
              handleCloseCamera();
            }}
            onClose={handleCloseCamera}
          />
        )}

        {capturedImage && (
          <div className="captured-preview">
            <h4>Captured Photo:</h4>
            <img src={capturedImage} alt="Captured" className="mt-2 rounded-lg shadow" />
            <button onClick={handleRetake} className="retake-btn">Retake</button>
          </div>
        )}
      </div>

      <textarea placeholder="Add a description..." value={description} onChange={(e) => setDescription(e.target.value)} />

      <button className="option-btn" onClick={handleGetLocation} disabled={loadingLocation}>
        <div className="option-left">
          <MapPin size={20} />
          <span>{loadingLocation ? "Fetching location..." : location || "Auto Location"}</span>
        </div>
        <ChevronRight size={18} className="arrow" />
      </button>

      <button className="option-btn" onClick={() => setShowCategories(!showCategories)}>
        <span>{category || "Select category"}</span>
        <ChevronRight size={18} className="arrow" />
      </button>

      {showCategories && (
        <div className="category-list">
          {categoriesList.map((cat, idx) => (
            <div key={idx} className={`category-option ${category === cat ? "active" : ""}`} onClick={() => { setCategory(cat); setShowCategories(false); }}>
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

      <button className="submit-btn" onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {submitted && (
        <div className="submitted-box">
          <CheckCircle size={22} className="checkmark" />
          <p>
            Report submitted <br />
            <span className="tracking">Tracking ID - {trackingId}</span><br/>
            <span className="tracking">📍 {location}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ReportingPage;
