export const languages: Record<string, string> = {
	en: "English",
	es: "Español",
};

export const defaultLanguage = "en";

export type Language = keyof typeof languages;

export function getAllLanguages(): Language[] {
	return Object.keys(languages) as Language[];
}
