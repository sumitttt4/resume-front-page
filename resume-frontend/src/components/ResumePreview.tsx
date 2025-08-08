import { useAppState } from '../state/AppState';
import NormalTemplate from './templates/NormalTemplate';

const ResumePreview = () => {
  const { resumeData, selectedTemplate } = useAppState();

  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 16, background: '#fff' }}>
      {selectedTemplate === 'modern' ? (
        <NormalTemplate data={resumeData} />
      ) : (
        <NormalTemplate data={resumeData} />
      )}
      <div style={{ marginTop: 16, fontSize: 12, color: '#6b7280' }}>
        Note: ATS preview is available on the next step and is non-editable.
      </div>
    </div>
  );
};

export default ResumePreview;