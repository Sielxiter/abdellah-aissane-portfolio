import React, {createContext, useContext, useEffect, useState} from "react";
import {portfolio} from "../portfolio";
import {englishProfile} from "./en";
import {messages} from "./messages";
const LanguageContext = createContext(null);
const storageKey = "portfolio-language";
function savedLanguage() {
  try {
    return localStorage.getItem(storageKey) === "en" ? "en" : "fr";
  } catch {
    return "fr";
  }
}
const profiles = {
  fr: portfolio,
  en: {
    ...portfolio,
    ...englishProfile,
    skills: portfolio.skills.map((group, index) => ({
      ...group,
      title: englishProfile.skillTitles[index]
    })),
    experience: portfolio.experience.map((item, index) => ({
      ...item,
      ...englishProfile.experience[index]
    })),
    projects: portfolio.projects.map((item, index) => ({
      ...item,
      ...englishProfile.projects[index]
    }))
  }
};
export function LanguageProvider({children}) {
  const [language, setLanguage] = useState(savedLanguage);
  const ui = messages[language];
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = location.pathname.endsWith("mentions.html")
      ? `${ui.credits} | Amine Izmaoun`
      : ui.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", ui.description);
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      /* La sélection reste utilisable sans stockage. */
    }
  }, [language, ui]);
  const chooseLanguage = value => {
    if (value === "fr" || value === "en") setLanguage(value);
  };
  return (
    <LanguageContext.Provider
      value={{language, setLanguage: chooseLanguage, p: profiles[language], ui}}
    >
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  return useContext(LanguageContext);
}
export function LanguageSelector() {
  const {language, setLanguage, ui} = useLanguage();
  return (
    <label className="language-selector">
      <span className="sr-only">{ui.langLabel}</span>
      <select
        aria-label={ui.langLabel}
        value={language}
        onChange={event => setLanguage(event.target.value)}
      >
        <option value="fr" lang="fr">
          Français
        </option>
        <option value="en" lang="en">
          English
        </option>
      </select>
    </label>
  );
}
