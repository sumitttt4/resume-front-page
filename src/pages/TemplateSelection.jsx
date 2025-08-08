import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../styles/TemplateSelection.css'

const TemplateSelection = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const selectedOption = location.state?.selectedOption

  useEffect(() => {
    // Check if user is logged in (mock implementation)
    const userToken = localStorage.getItem('userToken')
    setIsLoggedIn(!!userToken)
  }, [])

  const templates = [
    {
      id: 'professional',
      name: 'Professional',
      type: 'normal',
      description: 'Clean and modern design perfect for corporate positions',
      editable: true,
      preview: '/templates/professional-preview.jpg'
    },
    {
      id: 'creative',
      name: 'Creative',
      type: 'normal',
      description: 'Colorful and unique design for creative professionals',
      editable: true,
      preview: '/templates/creative-preview.jpg'
    },
    {
      id: 'minimal',
      name: 'Minimal',
      type: 'normal',
      description: 'Simple and elegant design that focuses on content',
      editable: true,
      preview: '/templates/minimal-preview.jpg'
    },
    {
      id: 'ats-standard',
      name: 'ATS Standard',
      type: 'ats',
      description: 'Optimized for Applicant Tracking Systems - no formatting issues',
      editable: false,
      preview: '/templates/ats-standard-preview.jpg'
    },
    {
      id: 'ats-modern',
      name: 'ATS Modern',
      type: 'ats',
      description: 'ATS-friendly with a touch of modern styling',
      editable: false,
      preview: '/templates/ats-modern-preview.jpg'
    }
  ]

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template)
  }

  const handleContinue = () => {
    if (!selectedTemplate) return

    if (!isLoggedIn && selectedTemplate.type === 'ats') {
      setShowLoginModal(true)
      return
    }

    // Save template selection and continue
    const resumeData = {
      selectedOption,
      template: selectedTemplate,
      timestamp: new Date().toISOString()
    }

    if (isLoggedIn) {
      // Save to user account
      localStorage.setItem('resumeData', JSON.stringify(resumeData))
    } else {
      // Save as cached data
      sessionStorage.setItem('resumeData', JSON.stringify(resumeData))
    }

    // Navigate to resume builder (placeholder for now)
    alert(`Selected template: ${selectedTemplate.name}\nOption: ${selectedOption}\nSaved as: ${isLoggedIn ? 'Private data' : 'Cached data'}`)
  }

  const handleLogin = () => {
    // Mock login implementation
    const mockToken = 'mock-jwt-token-' + Date.now()
    localStorage.setItem('userToken', mockToken)
    setIsLoggedIn(true)
    setShowLoginModal(false)
  }

  const handleBack = () => {
    navigate('/resume-options')
  }

  const normalTemplates = templates.filter(t => t.type === 'normal')
  const atsTemplates = templates.filter(t => t.type === 'ats')

  return (
    <div className="template-selection">
      <div className="template-selection-container">
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>

        <header className="template-selection-header">
          <h1 className="page-title">Choose Your Template</h1>
          <p className="page-subtitle">
            Select a template that best fits your industry and preferences
          </p>
          {selectedOption && (
            <div className="selected-option-badge">
              Selected: {selectedOption === 'upload' ? 'Upload Resume' : 
                        selectedOption === 'manual' ? 'Type Manually' : 
                        'LinkedIn Profile'}
            </div>
          )}
        </header>

        <div className="template-sections">
          <section className="template-section">
            <h2 className="section-title">
              <span className="section-icon">🎨</span>
              Normal Templates
            </h2>
            <p className="section-description">
              Fully customizable templates with various design options
            </p>
            <div className="templates-grid">
              {normalTemplates.map(template => (
                <div 
                  key={template.id}
                  className={`template-card ${selectedTemplate?.id === template.id ? 'selected' : ''}`}
                  onClick={() => handleTemplateSelect(template)}
                >
                  <div className="template-preview">
                    <div className="template-placeholder">
                      <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
                        <rect width="80" height="100" rx="4" fill="#f8f9fa" stroke="#e9ecef"/>
                        <rect x="8" y="8" width="64" height="8" fill="#6c757d"/>
                        <rect x="8" y="20" width="48" height="4" fill="#adb5bd"/>
                        <rect x="8" y="28" width="56" height="4" fill="#adb5bd"/>
                        <rect x="8" y="40" width="64" height="2" fill="#dee2e6"/>
                        <rect x="8" y="46" width="64" height="2" fill="#dee2e6"/>
                        <rect x="8" y="52" width="64" height="2" fill="#dee2e6"/>
                      </svg>
                    </div>
                    <div className="template-overlay">
                      <span className="preview-text">Preview</span>
                    </div>
                  </div>
                  <div className="template-info">
                    <h3 className="template-name">{template.name}</h3>
                    <p className="template-description">{template.description}</p>
                    <div className="template-features">
                      <span className="feature-badge editable">Editable</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="template-section">
            <h2 className="section-title">
              <span className="section-icon">🤖</span>
              ATS-Friendly Templates
            </h2>
            <p className="section-description">
              Optimized for Applicant Tracking Systems - requires login to save privately
            </p>
            <div className="templates-grid">
              {atsTemplates.map(template => (
                <div 
                  key={template.id}
                  className={`template-card ats ${selectedTemplate?.id === template.id ? 'selected' : ''}`}
                  onClick={() => handleTemplateSelect(template)}
                >
                  <div className="template-preview">
                    <div className="template-placeholder">
                      <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
                        <rect width="80" height="100" rx="4" fill="#f8f9fa" stroke="#e9ecef"/>
                        <rect x="8" y="8" width="64" height="6" fill="#495057"/>
                        <rect x="8" y="18" width="40" height="3" fill="#6c757d"/>
                        <rect x="8" y="25" width="48" height="3" fill="#6c757d"/>
                        <rect x="8" y="35" width="64" height="2" fill="#adb5bd"/>
                        <rect x="8" y="40" width="64" height="2" fill="#adb5bd"/>
                        <rect x="8" y="45" width="64" height="2" fill="#adb5bd"/>
                        <rect x="8" y="50" width="64" height="2" fill="#adb5bd"/>
                      </svg>
                    </div>
                    <div className="template-overlay">
                      <span className="preview-text">Preview</span>
                    </div>
                  </div>
                  <div className="template-info">
                    <h3 className="template-name">{template.name}</h3>
                    <p className="template-description">{template.description}</p>
                    <div className="template-features">
                      <span className="feature-badge ats">ATS-Optimized</span>
                      <span className="feature-badge locked">Login Required</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {selectedTemplate && (
          <div className="continue-section">
            <div className="selected-template-info">
              <h3>Selected: {selectedTemplate.name}</h3>
              <p>{selectedTemplate.description}</p>
            </div>
            <button className="continue-button" onClick={handleContinue}>
              {selectedTemplate.type === 'ats' && !isLoggedIn ? 'Login & Continue' : 'Start Building Resume'}
            </button>
          </div>
        )}

        {/* Login Modal */}
        {showLoginModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Login Required</h2>
              <p>ATS-friendly templates require login to save your data privately.</p>
              <p>Without login, your data will be saved temporarily.</p>
              <div className="modal-actions">
                <button className="btn-secondary" onClick={() => setShowLoginModal(false)}>
                  Cancel
                </button>
                <button className="btn-primary" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="login-status">
          {isLoggedIn ? (
            <div className="status-logged-in">
              ✓ Logged in - Your data will be saved privately
            </div>
          ) : (
            <div className="status-guest">
              👤 Guest mode - Data will be cached temporarily
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TemplateSelection