import { useEffect, useState } from "react";
import translations from "../utils/translations.json";

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export function useTranslation() {
  const [language, setLanguage] = useState<string>("pt-BR");
  const translate: Translations = translations;

  useEffect(() => {
    const navigatorLanguage = window.navigator.language;
    setLanguage(navigatorLanguage);
  }, []);

  const textTranslated = (key: string) => {
    return translate[language]?.[key] || key;
  };

  return { textTranslated, setLanguage, language };
}
