import type { FC } from 'react';
import type { ResumeData } from '../../types';

interface Props {
  data: ResumeData;
}

const ATSTemplate: FC<Props> = ({ data }) => {
  return (
    <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#000', lineHeight: 1.3 }}>
      <h2 style={{ margin: 0 }}>{data.fullName || 'Full Name'}</h2>
      <div style={{ fontSize: 12 }}>
        {data.email} | {data.phone} | {data.location}
      </div>
      {data.linkedinUrl && (
        <div style={{ fontSize: 12 }}>LinkedIn: {data.linkedinUrl}</div>
      )}

      {data.summary && (
        <>
          <h3>Summary</h3>
          <p>{data.summary}</p>
        </>
      )}

      {data.skills.length > 0 && (
        <>
          <h3>Skills</h3>
          <p>{data.skills.join(', ')}</p>
        </>
      )}

      {data.experiences.length > 0 && (
        <>
          <h3>Experience</h3>
          {data.experiences.map((exp, idx) => (
            <div key={idx}>
              <div>
                <strong>{exp.role}</strong>, {exp.company}
              </div>
              <div style={{ fontSize: 12 }}>
                {exp.startDate} - {exp.endDate}
              </div>
              <ul>
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}

      {data.education.length > 0 && (
        <>
          <h3>Education</h3>
          {data.education.map((ed, idx) => (
            <div key={idx}>
              <div>
                <strong>{ed.degree}</strong>, {ed.institution}
              </div>
              <div style={{ fontSize: 12 }}>
                {ed.startDate} - {ed.endDate}
              </div>
            </div>
          ))}
        </>
      )}

      {data.rawUploadText && (
        <>
          <h3>Uploaded Content</h3>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{data.rawUploadText}</pre>
        </>
      )}
    </div>
  );
};

export default ATSTemplate;