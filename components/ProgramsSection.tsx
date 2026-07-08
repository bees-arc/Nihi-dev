"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { programs } from "@/lib/data";
import { useLanguage } from "@/components/LanguageContext";

export default function ProgramsSection() {
  const { t, getProgramName } = useLanguage();

  return (
    <section id="studier" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">{t("programs.eyebrow")}</p>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              {t("programs.title")}
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-[var(--ink-soft)] md:block">
            {t("programs.desc")}
          </p>
        </div>

        <div className="mt-14 border-t border-[var(--line)]">
          {programs.map((p, i) => (
            <Link
              key={p.slug}
              href={p.slug === "sertifisert-idretts-og-muskelterapeut" ? "/sertifisertidretts-ogmuskelterapeut" : `/studier/${p.slug}`}
              className="group flex flex-col gap-3 border-b border-[var(--line)] py-8 transition md:flex-row md:items-center md:gap-8"
            >
              <span className="font-mono text-sm text-[var(--ink-faint)] md:w-12">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl transition group-hover:text-[var(--accent)] md:flex-1 md:text-3xl">
                {getProgramName(p.slug, p.name)}
              </h3>
              <p className="max-w-md text-sm text-[var(--ink-soft)] md:flex-1">
                {p.tagline}
              </p>
              <span className="flex items-center gap-1 font-mono text-xs text-[var(--ink-faint)] transition group-hover:text-[var(--ink)]">
                {t("programs.view")} <ArrowUpRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
