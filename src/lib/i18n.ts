import en from '@/locales/en.json';
import ar from '@/locales/ar.json';

export type Language = 'en' | 'ar';

export const SUPPORTED_LANGUAGES: { code: Language; label: string; nativeLabel: string }[] = [
  { code: 'en', label: 'English', nativeLabel: 'EN' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'عربي' },
];

export type Translations = typeof en;

const translations: Record<Language, Translations> = { en, ar };

export function getTranslations(language: Language): Translations {
  return translations[language] ?? translations.en;
}

export function isRTL(language: Language): boolean {
  return language === 'ar';
}
