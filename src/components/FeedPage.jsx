import React from "react";
import "../stylesheets/FeedPage.css";
import { ArrowLeft, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
const issues = [
  {
    id: 1,
    user: {
      name: "Rohit Sharma",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    date: "2h ago",
    location: "Mumbai, India",
    image: "https://picsum.photos/600/350?random=1",
    description: "Pothole on the main road causing traffic jams. Needs urgent attention.",
  },
  {
    id: 2,
    user: {
      name: "Priya Mehta",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    date: "5h ago",
    location: "Delhi, India",
    image: "https://picsum.photos/600/350?random=2",
    description: "Garbage collection not done for a week in the neighborhood.",
  },
  {
    id: 3,
    user: {
      name: "Aman Gupta",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    date: "1d ago",
    location: "Pune, India",
    image: "https://picsum.photos/600/350?random=3",
    description: "Street lights not working for the past 3 nights.",
  },
];

const FeedPage = () => {
  return (
    <div className="feed-container">
     
      <div className="feed-header">
        <div>
      <span><Link to={"/"} style={{textDecoration:"none",color:"black"}}><ArrowLeft></ArrowLeft></Link></span>
      </div>
        <h1>CivicOne Feed</h1>
      </div>

      {/* Issue Cards */}
      <div className="feed-list">
        {issues.map((issue) => (
          <div key={issue.id} className="feed-card">
            {/* User Info */}
            <div className="user-info">
              <img src={issue.user.avatar} alt={issue.user.name} className="avatar" />
              <div>
                <h2>{issue.user.name}</h2>
                <p className="date">{issue.date}</p>
              </div>
            </div>

            {/* Location */}
            <div className="location">
              <MapPin size={16} />
              <span>{issue.location}</span>
            </div>

            {/* Issue Image */}
            <img src={issue.image} alt="Issue" className="issue-image" />

            {/* Description */}
            <p className="description">{issue.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
