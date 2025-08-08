import { Link } from 'react-router-dom';
import { useAppState } from '../state/AppState';
import ATSTemplate from '../components/templates/ATSTemplate';
import LoginPanel from '../components/LoginPanel';

const ATSPreviewPage = () => {
  const { resumeData, saveNow, auth } = useAppState();

  return (
    <div style={{ maxWidth: 920, margin: '0 auto', padding: 24 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/">← Back</Link>
        <h3 style={{ margin: 0 }}>ATS-Friendly Preview</h3>
        <LoginPanel />
      </header>

      <div style={{ marginTop: 16, padding: 16, border: '1px solid #e5e7eb', borderRadius: 8, background: '#fff' }}>
        <ATSTemplate data={resumeData} />
      </div>

      <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
        <button onClick={saveNow}>{auth.isAuthenticated ? 'Save Privately' : 'Save (Cached)'}</button>
        <span style={{ fontSize: 12, color: '#6b7280' }}>
          {auth.isAuthenticated
            ? 'Your data will be saved privately to this device.'
            : 'You are not logged in. Data will be cached locally.'}
        </span>
      </div>
    </div>
  );
};

export default ATSPreviewPage;