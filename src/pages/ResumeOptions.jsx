import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/ResumeOptions.css'

const ResumeOptions = () => {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
  }

  const handleContinue = () => {
    if (selectedOption) {
      navigate('/templates', { state: { selectedOption } })
    }
  }

  const handleBack = () => {
    navigate('/')
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      // Handle file upload logic here
      console.log('File uploaded:', file.name)
      setSelectedOption('upload')
    }
  }

  const handleLinkedInConnect = () => {
    // Handle LinkedIn integration here
    console.log('LinkedIn connect clicked')
    setSelectedOption('linkedin')
  }

  return (
    <div className="resume-options">
      <div className="resume-options-container">
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>

        <header className="resume-options-header">
          <h1 className="page-title">How would you like to create your resume?</h1>
          <p className="page-subtitle">
            Choose the option that works best for you
          </p>
        </header>

        <div className="options-grid">
          <div 
            className={`option-card ${selectedOption === 'upload' ? 'selected' : ''}`}
            onClick={() => handleOptionSelect('upload')}
          >
            <div className="option-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="option-title">Upload Resume</h3>
            <p className="option-description">
              Upload your existing resume and we'll help you improve it
            </p>
            <div className="upload-area">
              <input 
                type="file" 
                id="resume-upload" 
                accept=".pdf,.doc,.docx" 
                onChange={handleFileUpload}
                className="file-input"
              />
              <label htmlFor="resume-upload" className="upload-label">
                Choose File
              </label>
            </div>
          </div>

          <div 
            className={`option-card ${selectedOption === 'manual' ? 'selected' : ''}`}
            onClick={() => handleOptionSelect('manual')}
          >
            <div className="option-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="option-title">Type Manually</h3>
            <p className="option-description">
              Start from scratch and build your resume step by step
            </p>
            <button className="option-button">Start Building</button>
          </div>

          <div 
            className={`option-card ${selectedOption === 'linkedin' ? 'selected' : ''}`}
            onClick={handleLinkedInConnect}
          >
            <div className="option-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="option-title">LinkedIn Profile</h3>
            <p className="option-description">
              Import your information directly from your LinkedIn profile
            </p>
            <button className="option-button linkedin-button">Connect LinkedIn</button>
          </div>
        </div>

        {selectedOption && (
          <div className="continue-section">
            <button className="continue-button" onClick={handleContinue}>
              Continue to Templates
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResumeOptions