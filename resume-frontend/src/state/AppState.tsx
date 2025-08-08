import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { ResumeData, TemplateId, UserAuthState } from '../types';

interface AppStateContextValue {
  resumeData: ResumeData;
  setResumeData: (updater: (prev: ResumeData) => ResumeData) => void;
  selectedTemplate: TemplateId;
  setSelectedTemplate: (template: TemplateId) => void;
  auth: UserAuthState;
  login: (email: string) => void;
  logout: () => void;
  saveNow: () => void;
}

const DEFAULT_RESUME: ResumeData = {
  fullName: '',
  title: '',
  email: '',
  phone: '',
  location: '',
  summary: '',
  skills: [],
  experiences: [],
  education: [],
};

const PRIVATE_KEY_PREFIX = 'resume_app_private_';
const CACHED_KEY = 'resume_app_cached';

const AppStateContext = createContext<AppStateContextValue | undefined>(undefined);

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<UserAuthState>(() => {
    const raw = localStorage.getItem('resume_app_auth');
    return raw ? JSON.parse(raw) : { isAuthenticated: false };
  });

  const [resumeData, setResumeDataState] = useState<ResumeData>(() => {
    const cachedKey = auth.isAuthenticated && auth.userId ? `${PRIVATE_KEY_PREFIX}${auth.userId}` : CACHED_KEY;
    const raw = localStorage.getItem(cachedKey);
    return raw ? JSON.parse(raw) : DEFAULT_RESUME;
  });

  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>(() => {
    const raw = localStorage.getItem('resume_app_template');
    return (raw as TemplateId) || 'modern';
  });

  useEffect(() => {
    localStorage.setItem('resume_app_auth', JSON.stringify(auth));
  }, [auth]);

  useEffect(() => {
    localStorage.setItem('resume_app_template', selectedTemplate);
  }, [selectedTemplate]);

  const persist = (data: ResumeData) => {
    if (auth.isAuthenticated && auth.userId) {
      localStorage.setItem(`${PRIVATE_KEY_PREFIX}${auth.userId}`, JSON.stringify(data));
    } else {
      localStorage.setItem(CACHED_KEY, JSON.stringify(data));
    }
  };

  const setResumeData = (updater: (prev: ResumeData) => ResumeData) => {
    setResumeDataState(prev => {
      const next = updater(prev);
      persist(next);
      return next;
    });
  };

  const login = (email: string) => {
    const userId = email.trim().toLowerCase();
    setAuth({ isAuthenticated: true, userId, email });
    const cached = localStorage.getItem(CACHED_KEY);
    if (cached) {
      localStorage.setItem(`${PRIVATE_KEY_PREFIX}${userId}`, cached);
    }
  };

  const logout = () => {
    setAuth({ isAuthenticated: false });
  };

  const saveNow = () => {
    persist(resumeData);
  };

  const value = useMemo(
    () => ({ resumeData, setResumeData, selectedTemplate, setSelectedTemplate, auth, login, logout, saveNow }),
    [resumeData, selectedTemplate, auth]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export const useAppState = (): AppStateContextValue => {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider');
  return ctx;
};