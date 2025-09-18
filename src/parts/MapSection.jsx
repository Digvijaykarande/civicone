import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; 
import "../stylesheets/MapSection.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const RecenterMap = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    if (lat && lng) {
      map.setView([lat, lng], 15);
      map.invalidateSize(); 
    }
  }, [lat, lng, map]);
  return null;
};

const MapSection = () => {
  const [position, setPosition] = useState({ lat: 20.5937, lng: 78.9629 }); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          setLoading(false);
        },
        (err) => {
          setError("Unable to retrieve location. Using default location.");
          setLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center", fontSize: "14px" }}>Loading map...</p>;
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", fontSize: "14px", color: "red" }}>
        {error}
      </div>
    );
  }

  return (
    <div className="map-section">
      <MapContainer
        center={[position.lat, position.lng]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
        scrollWheelZoom={true} 
        zoomControl={true} 
        attributionControl={true} 
        minZoom={3} 
        maxZoom={18} 
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[position.lat, position.lng]}>
          <Popup>Your Location</Popup>
        </Marker>
        <RecenterMap lat={position.lat} lng={position.lng} />
      </MapContainer>
    </div>
  );
};

export default MapSection;