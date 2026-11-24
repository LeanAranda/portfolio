"use client";

import { useEffect, useSyncExternalStore } from "react";

export type Language = "es" | "en";

const LANGUAGE_STORAGE_KEY = "language";
const LANGUAGE_EVENT = "languagechange";

function subscribe(callback: () => void) {
  window.addEventListener(LANGUAGE_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(LANGUAGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getLanguage(): Language {
  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return savedLanguage === "en" ? "en" : "es";
}

function getServerLanguage(): Language {
  return "es";
}

export function useLanguage(): Language {
  const language = useSyncExternalStore(
    subscribe,
    getLanguage,
    getServerLanguage,
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return language;
}

export function setLanguage(language: Language) {
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  document.documentElement.lang = language;
  window.dispatchEvent(new Event(LANGUAGE_EVENT));
}

export default function LanguageSwitcher() {
  const language = useLanguage();
  const nextLanguage: Language = language === "es" ? "en" : "es";
  const label = language === "es" ? "Cambiar idioma" : "Change language";

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={label}
      className="rounded-md border border-foreground/20 px-3 py-2 text-sm"
    >
      {nextLanguage === "en" ? "English" : "Español"}
    </button>
  );
}
