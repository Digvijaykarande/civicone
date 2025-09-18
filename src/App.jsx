import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import ReportingPage from './components/ReportingPage'
import WelcomePage from './components/WelcomePage'
import LoginPage from './components/LoginPage'
import RegistrationPage from './components/RegistrationPage'
import Home from './components/Home'
import NoticationPage from './components/NoticationPage'
import FeedPage from './components/FeedPage'
import ProfilePage from './components/ProfilePage'

function App() {

  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/report" element={<ReportingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/notifications" element={<NoticationPage />} /> 
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

    </Router>
    </>
  )
}

export default App
