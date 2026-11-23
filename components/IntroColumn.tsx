"use client";

import Link from "next/link";
import { content } from "@/content/site";
import { useLanguage } from "@/components/LanguageProvider";

const routes = [
  { href: "/about", key: "about" },
  { href: "/education", key: "education" },
  { href: "/experience", key: "experience" },
  { href: "/projects", key: "projects" },
] as const;

/** Colonne centrale : nom + liens vers les pages. */
export default function IntroColumn() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="px-6 md:self-start md:px-0 md:pt-16">
      <h1 className="font-heading text-2xl font-semibold tracking-tight">
        Thomas <br/>Gentilhomme
      </h1>
      <nav aria-label="Pages" className="mt-6 flex flex-col gap-4 text-sm">
        {routes.map(({ href, key }) => (
          <Link
            key={href}
            href={href}
            className="w-fit transition-opacity hover:opacity-60 text-foreground/80"
          >
            {t.nav[key]}
          </Link>
        ))}
      </nav>
    </section>
  );
}
