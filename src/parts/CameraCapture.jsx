import React, { useState, useRef, useEffect } from "react";

const CameraCapture = ({ onCapture, onClose }) => {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
      } catch (err) {
        console.error("Camera error:", err);
        setError("Cannot access camera. Please allow camera permissions.");
      }
    };

    startCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const isPortrait = window.innerHeight > window.innerWidth;

    if (isPortrait) {
      // Rotate canvas for portrait
      canvas.width = video.videoHeight;
      canvas.height = video.videoWidth;
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((90 * Math.PI) / 180); // rotate 90 deg
      ctx.drawImage(video, -video.videoWidth / 2, -video.videoHeight / 2);
      ctx.restore();
    } else {
      // Normal landscape capture
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    }

    const imageData = canvas.toDataURL("image/jpeg", 0.8);
    setPreview(imageData);
  };

  const confirmPhoto = () => {
    if (preview) {
      onCapture?.(preview);
      onClose?.();
    }
  };

  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="camera-modal">
      {!preview ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="camera-video"
          />
          <div className="camera-actions">
            <button onClick={capturePhoto} className="btn capture-btn">
              Capture
            </button>
            <button onClick={onClose} className="btn cancel-btn">
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <img src={preview} alt="Preview" className="camera-preview" />
          <div className="camera-actions">
            <button onClick={confirmPhoto} className="btn confirm-btn">
              Use Photo
            </button>
            <button onClick={() => setPreview(null)} className="btn retake-btn">
              Retake
            </button>
          </div>
        </>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default CameraCapture;
