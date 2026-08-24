'use client';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Language, getTranslations, isRTL, Translations } from '@/lib/i18n';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  dir: 'ltr' | 'rtl';
  isArabic: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'en',
  setLanguage: () => {},
  t: getTranslations('en'),
  dir: 'ltr',
  isArabic: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('llumar-lang') as Language | null;
    if (stored === 'ar' || stored === 'en') {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('llumar-lang', lang);
  }, []);

  const dir = isRTL(language) ? 'rtl' : 'ltr';
  const t = getTranslations(language);
  const isArabic = language === 'ar';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, isArabic }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
