import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppState } from '../state/AppState';
import ResumePreview from '../components/ResumePreview';

const BuildPage = () => {
  const { mode = 'manual' } = useParams();
  const navigate = useNavigate();
  const { resumeData, setResumeData, selectedTemplate, setSelectedTemplate } = useAppState();

  const [uploadError, setUploadError] = useState<string | null>(null);

  const title = useMemo(() => {
    if (mode === 'upload') return 'Upload Resume';
    if (mode === 'linkedin') return 'Share LinkedIn Profile';
    return 'Type Manually';
  }, [mode]);

  const onFileChange = async (file: File) => {
    setUploadError(null);
    try {
      const text = await file.text();
      try {
        const json = JSON.parse(text);
        setResumeData(() => ({
          fullName: json.fullName || '',
          title: json.title || '',
          email: json.email || '',
          phone: json.phone || '',
          location: json.location || '',
          summary: json.summary || '',
          skills: json.skills || [],
          experiences: json.experiences || [],
          education: json.education || [],
          linkedinUrl: json.linkedinUrl,
          rawUploadText: undefined,
        }));
      } catch {
        setResumeData(prev => ({ ...prev, rawUploadText: text }));
      }
    } catch (err) {
      setUploadError('Failed to read file.');
    }
  };

  const onAddSkill = (skill: string) => {
    if (!skill) return;
    setResumeData(prev => ({ ...prev, skills: [...prev.skills, skill] }));
  };

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: 24 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/">← Back</Link>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <div />
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24 }}>
        <div>
          {mode === 'upload' && (
            <section>
              <p>Upload a JSON or text resume file.</p>
              <input type="file" accept=".json,.txt,.md,.pdf,.doc,.docx" onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onFileChange(file);
              }} />
              {uploadError && <div style={{ color: 'crimson' }}>{uploadError}</div>}
            </section>
          )}

          {mode === 'linkedin' && (
            <section>
              <p>Paste your LinkedIn profile URL. We will use it for enrichment.</p>
              <input
                type="url"
                placeholder="https://www.linkedin.com/in/your-handle"
                value={resumeData.linkedinUrl || ''}
                onChange={(e) => setResumeData(prev => ({ ...prev, linkedinUrl: e.target.value }))}
                style={{ width: '100%', padding: 8, border: '1px solid #d1d5db', borderRadius: 6 }}
              />
            </section>
          )}

          {mode === 'manual' && (
            <section style={{ display: 'grid', gap: 12 }}>
              <input placeholder="Full name" value={resumeData.fullName}
                     onChange={(e) => setResumeData(prev => ({ ...prev, fullName: e.target.value }))} />
              <input placeholder="Job title" value={resumeData.title}
                     onChange={(e) => setResumeData(prev => ({ ...prev, title: e.target.value }))} />
              <input placeholder="Email" value={resumeData.email}
                     onChange={(e) => setResumeData(prev => ({ ...prev, email: e.target.value }))} />
              <input placeholder="Phone" value={resumeData.phone}
                     onChange={(e) => setResumeData(prev => ({ ...prev, phone: e.target.value }))} />
              <input placeholder="Location" value={resumeData.location}
                     onChange={(e) => setResumeData(prev => ({ ...prev, location: e.target.value }))} />
              <textarea placeholder="Summary" value={resumeData.summary}
                        onChange={(e) => setResumeData(prev => ({ ...prev, summary: e.target.value }))} />
              <div>
                <label style={{ display: 'block', marginBottom: 6 }}>Skills</label>
                <SkillsEditor onAdd={onAddSkill} skills={resumeData.skills} />
              </div>
            </section>
          )}

          <section style={{ marginTop: 24 }}>
            <label style={{ display: 'block', marginBottom: 6 }}>Select template</label>
            <div style={{ display: 'flex', gap: 12 }}>
              <label style={radioLabelStyle}>
                <input type="radio" name="template" value="modern" checked={selectedTemplate === 'modern'} onChange={() => setSelectedTemplate('modern')} />
                Modern
              </label>
              <label style={radioLabelStyle}>
                <input type="radio" name="template" value="classic" checked={selectedTemplate === 'classic'} onChange={() => setSelectedTemplate('classic')} />
                Classic
              </label>
            </div>
          </section>

          <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
            <button onClick={() => navigate('/preview')}>Preview ATS (non-editable)</button>
          </div>
        </div>

        <div>
          <ResumePreview />
        </div>
      </div>
    </div>
  );
};

const radioLabelStyle: React.CSSProperties = {
  display: 'inline-flex',
  gap: 8,
  alignItems: 'center',
  padding: '6px 10px',
  border: '1px solid #e5e7eb',
  borderRadius: 6,
};

const SkillsEditor: React.FC<{ skills: string[]; onAdd: (s: string) => void }> = ({ skills, onAdd }) => {
  const [value, setValue] = useState('');
  return (
    <div>
      <div style={{ display: 'flex', gap: 8 }}>
        <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Add a skill" />
        <button onClick={() => { onAdd(value.trim()); setValue(''); }} disabled={!value.trim()}>Add</button>
      </div>
      <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {skills.map((s, i) => (
          <span key={i} style={{ background: '#f3f4f6', padding: '4px 8px', borderRadius: 999 }}>{s}</span>
        ))}
      </div>
    </div>
  );
};

export default BuildPage;