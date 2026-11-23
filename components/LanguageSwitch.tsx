"use client";

import type { Lang } from "@/content/site";
import { useLanguage } from "@/components/LanguageProvider";

const languages: Lang[] = ["fr", "en"];

export default function LanguageSwitch({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex overflow-hidden rounded-full border border-foreground/30 text-sm font-medium ${className ?? ""}`}
    >
      {languages.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-3 py-1 uppercase transition-colors ${
            lang === code
              ? "bg-foreground text-background"
              : "hover:bg-foreground/10"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
