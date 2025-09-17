import React, { useState, useRef, useEffect } from "react";

const CameraCapture = ({ onCapture, onClose }) => {
  const [hasCamera, setHasCamera] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    startCamera();
    return () => {
      // Stop all camera tracks on unmount
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // Request camera access
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setHasCamera(true);
    } catch (err) {
      alert("Camera access denied or not available.");
    }
  };

  // Capture snapshot
  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 300, 200);
    const imageData = canvasRef.current.toDataURL("image/png");
    if (onCapture) onCapture(imageData);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      {hasCamera ? (
        <div className="mt-4">
          <video ref={videoRef} autoPlay playsInline width="300" height="200" className="rounded-lg shadow" />
          <div className="mt-2 flex justify-center gap-2">
            <button
              onClick={capturePhoto}
              className="px-3 py-1 bg-green-600 text-white rounded-lg"
            >
              Capture
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1 bg-red-600 text-white rounded-lg"
            >
              Cancel
            </button>
          </div>
          <canvas ref={canvasRef} width="300" height="200" style={{ display: "none" }} />
        </div>
      ) : (
        <p>Loading camera...</p>
      )}
    </div>
  );
};

export default CameraCapture;
