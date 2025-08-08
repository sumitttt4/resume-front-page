import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/HomePage.css'

const HomePage = () => {
  const navigate = useNavigate()

  const handleAddDetails = () => {
    navigate('/resume-options')
  }

  const handleUploadResume = () => {
    navigate('/templates')
  }

  return (
    <div className="homepage">
      <div className="homepage-container">
        <header className="homepage-header">
          <h1 className="homepage-title">Resume Builder</h1>
          <p className="homepage-subtitle">
            Create a professional resume that stands out from the crowd
          </p>
        </header>

        <div className="homepage-options">
          <div className="option-card" onClick={handleAddDetails}>
            <div className="option-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.1 3.89 23 5 23H19C20.1 23 21 22.1 21 21V9M19 9H14V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="option-title">Add Details</h3>
            <p className="option-description">
              Build your resume from scratch by entering your information manually
            </p>
            <button className="option-button">Get Started</button>
          </div>

          <div className="option-card" onClick={handleUploadResume}>
            <div className="option-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="option-title">Upload Resume</h3>
            <p className="option-description">
              Have an existing resume? Upload it and choose from our templates
            </p>
            <button className="option-button">Upload & Customize</button>
          </div>
        </div>

        <div className="homepage-features">
          <div className="feature">
            <h4>Professional Templates</h4>
            <p>Choose from a variety of professionally designed templates</p>
          </div>
          <div className="feature">
            <h4>ATS-Friendly</h4>
            <p>Our resumes are optimized for Applicant Tracking Systems</p>
          </div>
          <div className="feature">
            <h4>Easy to Use</h4>
            <p>Build your resume in minutes with our intuitive interface</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage