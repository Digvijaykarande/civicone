import React from 'react'
import "../stylesheets/HomePage.css"
import ReportingPage from './ReportingPage'

import Header from "../parts/Header"
import MapSection from "../parts/MapSection";
import CategoryIcons from "../parts/CategoryIcons";
import IssuesList from "../parts/IssuesList";
import Analytics from "../parts/Analitics";
import "../stylesheets/HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <MapSection />
      <CategoryIcons />
      <IssuesList />
      <Analytics />
    </div>
  );
};

export default HomePage;
