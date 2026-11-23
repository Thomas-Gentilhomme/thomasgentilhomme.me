"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { content, profile, type Entry } from "@/content/site";
import { useLanguage } from "@/components/LanguageProvider";

const linkClass =
  "underline underline-offset-4 transition-opacity hover:opacity-60";

const socialLinks = [
  { label: "LinkedIn", href: profile.linkedin, Icon: FaLinkedin },
  { label: "GitHub", href: profile.github, Icon: FaGithub },
];

/** Section dépliable : <details> natif, accessible et sans JavaScript. */
function Section({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <details className="group py-2">
      <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium [&::-webkit-details-marker]:hidden">
        <span
          aria-hidden
          className="text-xs transition-transform group-open:rotate-90"
        >
          ▸
        </span>
        {title}
      </summary>
      <ul className="mt-2 flex flex-col gap-2 pl-5">
        {entries.map((entry) => (
          <li key={`${entry.title}-${entry.subtitle}`}>
            <p className="text-sm font-medium">
              {entry.href ? (
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {entry.title}
                </a>
              ) : (
                entry.title
              )}
            </p>
            {entry.subtitle && (
              <p className="text-xs text-foreground/70">{entry.subtitle}</p>
            )}
            {entry.period && (
              <p className="text-xs text-foreground/50">{entry.period}</p>
            )}
          </li>
        ))}
      </ul>
    </details>
  );
}

/** Colonne de droite : description, sections dépliables, contact. */
export default function DetailsColumn() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    // La grille (page.tsx) colle cette colonne à la précédente et laisse
    // le côté droit de l'écran vide ; self-start + pt-16 l'alignent en haut,
    // au même niveau que la colonne centrale.
    <section className="flex max-w-sm flex-col gap-4 px-6 md:self-start md:px-0 md:pt-16">
      <p className="whitespace-pre-line text-sm leading-6">
        {t.description}
      </p>

      <div>
        <Section title={t.nav.education} entries={t.education} />
        <Section title={t.nav.experience} entries={t.experience} />
        <Section title={t.nav.projects} entries={t.projects} />
      </div>

      <div className="flex flex-col items-start gap-2 text-sm">
        <a href={`mailto:${profile.email}`} className={linkClass}>
          {profile.email}
        </a>
        <ul className="flex gap-3 mt-2">
          {socialLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                title={label}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-opacity hover:opacity-60"
              >
                <Icon className="size-5" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-foreground/70">{profile.location}</p>
      </div>
    </section>
  );
}
