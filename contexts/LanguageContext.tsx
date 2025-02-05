// contexts/LanguageContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import translations from "../locales/translations";

// Tipo per traduzioni annidate (utile se in futuro si vogliono usare chiavi come "header.title", ecc.)
type NestedTranslations = {
  [key: string]: string | NestedTranslations;
};

interface LanguageContextType {
  language: "en" | "it";
  setLanguage: (lang: "en" | "it") => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "it",
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"en" | "it">("it");

  const t = (key: string): string => {
    const keys = key.split(".");
    let result: string | NestedTranslations = translations[language];
    for (const k of keys) {
      if (typeof result === "object" && result !== null && k in result) {
        result = result[k] as string | NestedTranslations;
      } else {
        return key; // fallback: restituisce la chiave stessa se non trovata
      }
    }
    return typeof result === "string" ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
