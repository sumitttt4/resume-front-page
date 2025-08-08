export type TemplateId = 'modern' | 'classic';

export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string; // YYYY-MM
  endDate: string; // YYYY-MM or 'Present'
  bullets: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  startDate: string; // YYYY
  endDate: string; // YYYY or 'Present'
}

export interface ResumeData {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  skills: string[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  linkedinUrl?: string;
  rawUploadText?: string;
}

export interface UserAuthState {
  isAuthenticated: boolean;
  userId?: string;
  email?: string;
}