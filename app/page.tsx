"use client";

import es from "@/locales/es.json";
import en from "@/locales/en.json";
import LanguageSwitcher, {
  useLanguage,
  type Language,
} from "@/components/language-switcher";
import ThemeSwitcher from "@/components/theme-switcher";

const locales: Record<Language, typeof es> = { es, en };

export default function Home() {
  const language = useLanguage();
  const t = locales[language];

  return (
    <main className="flex min-h-screen w-full flex-col">
      <div className="flex justify-end gap-2 p-4">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>

      <h1 className="text-3xl font-bold text-center">{t.welcome}!!!</h1>
    </main>
  );
}
