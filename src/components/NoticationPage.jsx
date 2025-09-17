import React from "react";
import "../stylesheets/NotificationPage.css";
import { Bell, CheckCircle, AlertCircle, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
const notifications = [
  {
    id: 1,
    message: "Your issue is in progress",
    time: "2m ago",
    icon: <Clock size={20} />,
  },
  {
    id: 2,
    message: "New Issue report submitted",
    time: "10m ago",
    icon: <AlertCircle size={20} />,
  },
  {
    id: 3,
    message: "Issue resolved successfully",
    time: "1h ago",
    icon: <CheckCircle size={20} />,
  },
  {
    id: 4,
    message: "Your issue is in progress",
    time: "3h ago",
    icon: <Clock size={20} />,
  },
];

const NotificationPage = () => {
  return (
    <div className="notification-container">
      <div className="notification-header">
         <div>
      <span><Link to={"/"} style={{textDecoration:"none",color:"black"}}><ArrowLeft></ArrowLeft></Link></span>
      </div>
        <Bell size={24} />
        <h1>Notifications</h1>
      </div>

      {/* Notification List */}
      <div className="notification-list">
        {notifications.map((note) => (
          <div key={note.id} className="notification-card">
            <div className="icon">{note.icon}</div>
            <div className="content">
              <p className="message">{note.message}</p>
              <span className="time">{note.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
