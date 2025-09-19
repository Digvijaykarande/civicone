import React, { useEffect, useState } from "react";
import "../stylesheets/ProfilePage.css";
import { Edit2, Settings, LogOut, MapPin, FileText, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token"); // JWT token
      if (!token) {
        // Redirect to login if not logged in
        navigate("/login");
        return;
      }

      try {
        const res = await fetch("https://civicone-backend.onrender.com/api/users/profile", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (res.ok) setUser(data);
        else {
          alert(data.message);
          navigate("/login"); // redirect if token invalid
        }
      } catch (err) {
        console.error(err);
        alert("Failed to fetch user data");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return (
    <div className="profile-page">
      <div className="profile-header-bg">
        <div className="profile-header">
          <span>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              <ArrowLeft />
            </Link>
          </span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWYxOgbJwRd8qfhIhZsEsKNvp8Exn0GkTZKs2cackoziCn6zO6U07w6psm10yaHQNlkuOEQ&s"
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-name-uid">
            <h2>{user.name}</h2>
            <p>UID: {user._id}</p>
          </div>
          <button className="edit-btn">
            <Edit2 size={18} /> Edit
          </button>
        </div>
      </div>

      <div className="stats-cards">
        <div className="card">
          <FileText size={24} />
          <div>
            <p>{user.reports || 0}</p>
            <span>Total Reports</span>
          </div>
        </div>
        <div className="card">
          <MapPin size={24} />
          <div>
            <p>{user.pendingReports || 0}</p>
            <span>Pending</span>
          </div>
        </div>
      </div>

      <div className="profile-info">
        <div className="info-item"><strong>Email:</strong> {user.email}</div>
        <div className="info-item"><strong>Phone:</strong> {user.phone}</div>
        <div className="info-item"><strong>Location:</strong> {user.location || "N/A"}</div>
      </div>

      {/* Keep recentReports static or fetch from backend later */}
      <div className="recent-activities">
        <h3>Recent Reports</h3>
        {/* Example: keep static for now */}
      </div>

      <div className="action-buttons">
        <button className="settings-btn">
          <Settings size={18} /> Settings
        </button>
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
