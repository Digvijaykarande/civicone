import React, { useState } from "react";
import "../stylesheets/ReportingPage.css"

const ReportingPage = () => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");

  const handleSubmit = () => {
    if (!description || !category) {
      alert("Please fill all fields before submitting!");
      return;
    }
    const id = "1784" + Math.floor(Math.random() * 1000000);
    setTrackingId(id);
    setSubmitted(true);
  };

  return (
    <div className="report-container">
      {/* Header */}
      <div className="header">
        <button className="back-btn">←</button>
        <h1>Report an Issue</h1>
      </div>

      {/* Upload Photo/Video */}
      <div className="upload-box">
        <div className="upload-content">
          <img src="https://img.icons8.com/ios/50/camera--v3.png" className="camera-icon"></img>
          <p>Upload Photo/Video</p>
        </div>
      </div>

      {/* Description */}
      <textarea
        placeholder="Add a description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Auto Location */}
      <button className="option-btn">
        <img src="https://img.icons8.com/ios/30/marker--v1.png"></img>
        <span style={{fontSize:"20px"}}>Auto Location</span>
        <img src="https://img.icons8.com/ios/20/forward.png" className="arrow"></img>
      </button>

      {/* Category */}
      <button
        className="option-btn"
        onClick={() => setCategory("Road Issue")}
      >
        <span style={{fontSize:"20px"}}>{category || "Select category"}</span>
        <img src="https://img.icons8.com/ios/20/forward.png" className="arrow"></img>
      </button>

      {/* Submit Button */}
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>

      {/* Report Submitted */}
      {submitted && (
        <div className="submitted-box">
          <img src="https://img.icons8.com/emoji/50/check-mark-emoji.png" className="checkmark"></img>
          <p>
            Report submitted <br />
            <span className="tracking">Tracking ID-{trackingId}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ReportingPage;
