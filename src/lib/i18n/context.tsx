"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLanguage,
  isLanguage,
  translate,
  type Language,
  type TranslationKey,
} from "./translate";

const STORAGE_KEY = "pente-portfolio-lang";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const detected =
      stored && isLanguage(stored)
        ? stored
        : isLanguage(window.navigator.language.slice(0, 2))
          ? (window.navigator.language.slice(0, 2) as Language)
          : null;

    if (detected) {
      // Sync the detected language preference into state on mount.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(detected);
    }
  }, []);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useCallback(
    (key: TranslationKey) => translate(language, key),
    [language],
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
