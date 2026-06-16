import { en, type TranslationKey } from "./dictionaries/en";
import { pt } from "./dictionaries/pt";

export type { TranslationKey };

export const dictionaries = { en, pt } satisfies Record<
  string,
  Partial<Record<TranslationKey, string>>
>;

export type Language = keyof typeof dictionaries;

export const languages = Object.keys(dictionaries) as Language[];

export const defaultLanguage: Language = "en";

/**
 * Looks up `key` in the dictionary for `language`, falling back to English,
 * then to the key itself so a missing translation never crashes the UI.
 */
export function translate(language: Language, key: TranslationKey): string {
  return (
    dictionaries[language]?.[key] ?? dictionaries[defaultLanguage][key] ?? key
  );
}

export function isLanguage(value: string): value is Language {
  return (languages as string[]).includes(value);
}
