import React from "react";
import "../stylesheets/ProfilePage.css";
import { Edit2, Settings, LogOut, MapPin, FileText, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";    
const ProfilePage = () => {
  const user = {
    name: "John Doe",
    uid: "CVC12345",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    location: "Mumbai, India",
    reports: 12,
    pendingReports: 3,
  };

  const recentReports = [
    { id: 1, title: "Pothole on Main Street", date: "2025-09-16" },
    { id: 2, title: "Street light not working", date: "2025-09-14" },
    { id: 3, title: "Overflowing garbage bin", date: "2025-09-12" },
  ];

  return (
    <div className="profile-page">
      <div className="profile-header-bg">
        <div className="profile-header"><span><Link to={"/"} style={{textDecoration:"none",color:"black"}}><ArrowLeft></ArrowLeft></   Link></span>
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-name-uid">
            <h2>{user.name}</h2>
            <p>UID: {user.uid}</p>
          </div>
          <button className="edit-btn">
            <Edit2 size={18} /> Edit
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-cards">
        <div className="card">
          <FileText size={24} />
          <div>
            <p>{user.reports}</p>
            <span>Total Reports</span>
          </div>
        </div>
        <div className="card">
          <MapPin size={24} />
          <div>
            <p>{user.pendingReports}</p>
            <span>Pending</span>
          </div>
        </div>
        
      </div>

      {/* Info Section */}
      <div className="profile-info">
        <div className="info-item"><strong>Email:</strong> {user.email}</div>
        <div className="info-item"><strong>Phone:</strong> {user.phone}</div>
        <div className="info-item"><strong>Location:</strong> {user.location}</div>
      </div>

      {/* Recent Activities */}
      <div className="recent-activities">
        <h3>Recent Reports</h3>
        {recentReports.map((report) => (
          <div key={report.id} className="activity-item">
            <p>{report.title}</p>
            <span>{report.date}</span>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="settings-btn">
          <Settings size={18} /> Settings
        </button>
        <button className="logout-btn">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
