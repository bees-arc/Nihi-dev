"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { programs, siteInfo } from "@/lib/data";
import { useLanguage } from "@/components/LanguageContext";

function FlagNO({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-full border border-black/10 shadow-sm shrink-0 flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 22 16"
        className="w-full h-full object-cover scale-[1.3]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="22" height="16" fill="#ef2b2d" />
        <rect x="6" width="4" height="16" fill="white" />
        <rect y="6" width="22" height="4" fill="white" />
        <rect x="7" width="2" height="16" fill="#00205b" />
        <rect y="7" width="22" height="2" fill="#00205b" />
      </svg>
    </div>
  );
}

function FlagGB({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-full border border-black/10 shadow-sm shrink-0 flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 50 30"
        className="w-full h-full object-cover scale-[1.3]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="50" height="30" fill="#012169" />
        <path d="M0,0 L50,30 M0,30 L50,0" stroke="white" strokeWidth="6" />
        <path d="M0,0 L50,30 M0,30 L50,0" stroke="#C8102E" strokeWidth="2" />
        <path d="M25,0 V30 M0,15 H50" stroke="white" strokeWidth="10" />
        <path d="M25,0 V30 M0,15 H50" stroke="#C8102E" strokeWidth="6" />
      </svg>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [studierOpen, setStudierOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, setLanguage, t, getProgramName } = useLanguage();

  const links = [
    { href: "/moduler", label: t("nav.modules") },
    { href: "/forelesere", label: t("nav.lecturers") },
    { href: "/artikler", label: t("nav.articles") },
    { href: "/kontakt", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 shadow-sm">
        <Link href="/" className="font-display text-lg tracking-tight">
          NIHI
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <div
            className="group relative"
            onMouseEnter={() => setStudierOpen(true)}
            onMouseLeave={() => setStudierOpen(false)}
          >
            <button className="text-sm text-[var(--ink-soft)] transition hover:text-[var(--ink)]">
              {t("nav.studies")}
            </button>
            {studierOpen && (
              <div className="glass absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl p-2 shadow-lg">
                {programs.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/studier/${p.slug}`}
                    className="block rounded-xl px-4 py-3 text-sm text-[var(--ink-soft)] transition hover:bg-white/60 hover:text-[var(--ink)]"
                  >
                    {getProgramName(p.slug, p.name)}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--ink-soft)] transition hover:text-[var(--ink)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteInfo.studentPortal}
            target="_blank"
            className="text-sm text-[var(--ink-soft)] transition hover:text-[var(--ink)]"
          >
            {t("nav.studentPortal")}
          </a>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center justify-center rounded-full border border-[var(--ink)]/15 bg-white/45 w-9 h-9 text-base transition hover:bg-white/75"
              title={language === "no" ? "Norsk" : "English"}
            >
              {language === "no" ? <FlagNO /> : <FlagGB />}
            </button>
            {langDropdownOpen && (
              <div className="glass absolute right-0 mt-2 w-12 rounded-[20px] p-1 shadow-lg border border-[var(--ink)]/5 flex flex-col gap-1.5 items-center">
                <button
                  onClick={() => {
                    setLanguage("no");
                    setLangDropdownOpen(false);
                  }}
                  className={`flex items-center justify-center w-8 h-8 rounded-full transition ${
                    language === "no"
                      ? "bg-[var(--ink)]/10 font-medium text-[var(--ink)]"
                      : "text-[var(--ink-soft)] hover:bg-white/60 hover:text-[var(--ink)]"
                  }`}
                  title="Norsk"
                >
                  <FlagNO />
                </button>
                <button
                  onClick={() => {
                    setLanguage("en");
                    setLangDropdownOpen(false);
                  }}
                  className={`flex items-center justify-center w-8 h-8 rounded-full transition ${
                    language === "en"
                      ? "bg-[var(--ink)]/10 font-medium text-[var(--ink)]"
                      : "text-[var(--ink-soft)] hover:bg-white/60 hover:text-[var(--ink)]"
                  }`}
                  title="English"
                >
                  <FlagGB />
                </button>
              </div>
            )}
          </div>

          <a
            href={siteInfo.calendly}
            target="_blank"
            className="flex items-center gap-1 rounded-full bg-[var(--ink)] px-4 py-2 text-sm text-[var(--bg)] transition hover:opacity-85"
          >
            {t("nav.bookAdvising")} <ArrowUpRight size={14} />
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Meny">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-5 md:hidden">
          <p className="eyebrow mb-2">{t("nav.studies")}</p>
          {programs.map((p) => (
            <Link
              key={p.slug}
              href={`/studier/${p.slug}`}
              className="block py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              {getProgramName(p.slug, p.name)}
            </Link>
          ))}
          <div className="hairline my-3" />
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="hairline my-3" />
          {/* Mobile Language Selector */}
          <div className="flex gap-4 justify-center py-2">
            <button
              onClick={() => {
                setLanguage("no");
                setOpen(false);
              }}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition border ${
                language === "no"
                  ? "bg-[var(--ink)] border-[var(--ink)] text-[var(--bg)]"
                  : "border-[var(--ink)]/10 bg-white/40 text-[var(--ink-soft)]"
              }`}
              title="Norsk"
            >
              <FlagNO />
            </button>
            <button
              onClick={() => {
                setLanguage("en");
                setOpen(false);
              }}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition border ${
                language === "en"
                  ? "bg-[var(--ink)] border-[var(--ink)] text-[var(--bg)]"
                  : "border-[var(--ink)]/10 bg-white/40 text-[var(--ink-soft)]"
              }`}
              title="English"
            >
              <FlagGB />
            </button>
          </div>
          <div className="hairline my-3" />
          <a
            href={siteInfo.calendly}
            target="_blank"
            className="flex w-fit items-center gap-1 rounded-full bg-[var(--ink)] px-4 py-2 text-sm text-[var(--bg)]"
          >
            {t("nav.bookAdvising")} <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
