import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ResumeOptions from './pages/ResumeOptions'
import TemplateSelection from './pages/TemplateSelection'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume-options" element={<ResumeOptions />} />
        <Route path="/templates" element={<TemplateSelection />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App