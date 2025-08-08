import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AppStateProvider } from './state/AppState';
import Home from './pages/Home';
import BuildPage from './pages/BuildPage';
import ATSPreviewPage from './pages/ATSPreviewPage';
import './App.css';

function App() {
  return (
    <AppStateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build/:mode" element={<BuildPage />} />
          <Route path="/preview" element={<ATSPreviewPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppStateProvider>
  );
}

export default App;
