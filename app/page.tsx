"use client";

import es from "@/locales/es.json";
import en from "@/locales/en.json";
import LanguageSwitcher, {
  useLanguage,
  type Language,
} from "@/components/language-switcher";

const locales: Record<Language, typeof es> = { es, en };

export default function Home() {
  const language = useLanguage();
  const t = locales[language];

  return (
    <main className="flex min-h-screen w-full flex-col">
      <div className="flex justify-end p-4">
        <LanguageSwitcher />
      </div>

      <h1 className="text-3xl font-bold">{t.welcome}</h1>
    </main>
  );
}
