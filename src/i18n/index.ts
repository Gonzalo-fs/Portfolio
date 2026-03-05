import es from './es.json';
import en from './en.json';

export const languages = {
    en: 'English',
    es: 'Español',
};

export const defaultLanguage = 'en';

export const translations = {
    en,
    es
};

export type Language = keyof typeof translations;

export function getTranslation(lang: Language) {
  return translations[lang] || translations[defaultLanguage];
}

export function getAllLanguages() {
  return Object.keys(translations) as Language[];
}
