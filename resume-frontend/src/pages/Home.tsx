import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ maxWidth: 920, margin: '0 auto', padding: 24 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>Resume Builder</h2>
        <nav style={{ fontSize: 14 }}>
          <Link to="/preview">ATS Preview</Link>
        </nav>
      </header>

      <section style={{ marginTop: 32 }}>
        <h3>Get started</h3>
        <p>Choose how you want to begin.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <Link to="/build/upload" style={cardStyle}>
            <strong>Upload Resume</strong>
            <span>Import your existing resume (JSON/Text)</span>
          </Link>
          <Link to="/build/manual" style={cardStyle}>
            <strong>Type Manually</strong>
            <span>Fill out your details step-by-step</span>
          </Link>
          <Link to="/build/linkedin" style={cardStyle}>
            <strong>Share LinkedIn</strong>
            <span>Provide a LinkedIn profile URL</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  padding: 16,
  border: '1px solid #e5e7eb',
  borderRadius: 8,
  textDecoration: 'none',
  color: '#111827',
  background: '#fff',
};

export default Home;