import type { FC } from 'react';
import type { ResumeData } from '../../types';

interface Props {
  data: ResumeData;
}

const NormalTemplate: FC<Props> = ({ data }) => {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, Arial', color: '#222', lineHeight: 1.4 }}>
      <h1 style={{ margin: 0 }}>{data.fullName || 'Full Name'}</h1>
      <div style={{ opacity: 0.8 }}>{data.title || 'Job Title'}</div>
      <div style={{ fontSize: 14, marginTop: 4 }}>{[data.email, data.phone, data.location].filter(Boolean).join(' • ')}</div>

      {data.summary && (
        <section style={{ marginTop: 16 }}>
          <h3 style={{ marginBottom: 6 }}>Summary</h3>
          <p style={{ margin: 0 }}>{data.summary}</p>
        </section>
      )}

      {data.skills.length > 0 && (
        <section style={{ marginTop: 16 }}>
          <h3 style={{ marginBottom: 6 }}>Skills</h3>
          <p style={{ margin: 0 }}>{data.skills.join(', ')}</p>
        </section>
      )}

      {data.experiences.length > 0 && (
        <section style={{ marginTop: 16 }}>
          <h3 style={{ marginBottom: 6 }}>Experience</h3>
          {data.experiences.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: 10 }}>
              <strong>{exp.role || 'Role'}</strong> at {exp.company || 'Company'}
              <div style={{ fontSize: 12, opacity: 0.8 }}>
                {exp.startDate} - {exp.endDate}
              </div>
              <ul style={{ marginTop: 6 }}>
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {data.education.length > 0 && (
        <section style={{ marginTop: 16 }}>
          <h3 style={{ marginBottom: 6 }}>Education</h3>
          {data.education.map((ed, idx) => (
            <div key={idx}>
              <strong>{ed.degree || 'Degree'}</strong>, { ed.institution || 'Institution' }
              <div style={{ fontSize: 12, opacity: 0.8 }}>
                {ed.startDate} - {ed.endDate}
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default NormalTemplate;