"use client";

import Link from "next/link";
import { programs, siteInfo } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const { t, getProgramName } = useLanguage();

  return (
    <footer className="mt-32 bg-[var(--ink)] px-4 pb-8 pt-20 text-[var(--bg)]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block mb-3">
              <img src="/logo.png" alt="NIHI Logo" className="h-9 w-auto object-contain" />
            </Link>
            <p className="mt-1 max-w-xs text-sm text-white/60">
              {t("footer.desc")}
            </p>
            <a
              href={siteInfo.calendly}
              target="_blank"
              className="mt-6 inline-flex items-center gap-1 rounded-full border border-white/25 px-4 py-2 text-sm transition hover:bg-white/10"
            >
              {t("footer.book")} <ArrowUpRight size={14} />
            </a>
          </div>

          <div>
            <p className="eyebrow mb-4 text-white/50">{t("footer.studies")}</p>
            <ul className="space-y-2 text-sm text-white/70">
              {programs.map((p) => (
                <li key={p.slug}>
                  <Link href={`/studier/${p.slug}`} className="hover:text-white">
                    {getProgramName(p.slug, p.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-white/50">{t("footer.institute")}</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/forelesere" className="hover:text-white">{t("nav.lecturers")}</Link></li>
              <li><Link href="/moduler" className="hover:text-white">{t("nav.modules")}</Link></li>
              <li><Link href="/artikler" className="hover:text-white">{t("nav.articles")}</Link></li>
              <li><Link href="/kontakt" className="hover:text-white">{t("nav.contact")}</Link></li>
              <li>
                <a href={siteInfo.studentPortal} target="_blank" className="hover:text-white">
                  {t("nav.studentPortal")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-white/50">{t("footer.contact")}</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{siteInfo.phone}</li>
              <li>{siteInfo.email}</li>
              <li>{siteInfo.address}</li>
              <li>
                <a
                  href={siteInfo.instagram}
                  target="_blank"
                  className="mt-2 inline-flex items-center gap-1 hover:text-white"
                >
                  <InstagramIcon /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} NIHI — {t("footer.rights")}</p>
          <div className="flex gap-6">
            <Link href="/personvern" className="hover:text-white/70">{t("footer.privacy")}</Link>
            <Link href="/vilkar" className="hover:text-white/70">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
