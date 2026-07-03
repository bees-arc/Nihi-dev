"use client";

import React from "react";
import { Program, siteInfo } from "@/lib/data";
import { ArrowUpRight, Check } from "lucide-react";
import CTABand from "@/components/CTABand";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function ProgramDetailClient({ program }: { program: Program }) {
  const { t, getProgramName } = useLanguage();

  return (
    <main>
      {/* Hero */}
      <section className="px-4 pb-16 pt-14">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-4">
            <Link href="/studier" className="hover:text-[var(--ink)]">
              {t("studier.eyebrow")}
            </Link>{" "}
            / {getProgramName(program.slug, program.name)}
          </p>
          <h1 className="font-display text-4xl tracking-tight md:text-6xl">
            {getProgramName(program.slug, program.name)}
          </h1>
          <p className="mt-5 max-w-2xl font-display text-xl italic text-[var(--ink-soft)] md:text-2xl">
            {program.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteInfo.calendly}
              target="_blank"
              className="flex items-center gap-1 rounded-full bg-[var(--ink)] px-6 py-3 text-sm text-[var(--bg)] transition hover:opacity-85"
            >
              {t("nav.bookAdvising")} <ArrowUpRight size={14} />
            </a>
            <a
              href={`mailto:${siteInfo.email}`}
              className="flex items-center gap-1 rounded-full border border-[var(--ink)]/20 px-6 py-3 text-sm transition hover:bg-white/50"
            >
              {t("studier.detail.registerInterest")}
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 py-10">
        <div className="mx-auto grid max-w-4xl gap-4">
          {program.intro.map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-[var(--ink-soft)]">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Lecturer + learnings */}
      <section className="bg-[var(--paper)] px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-2">{t("studier.detail.lecturer")}</p>
          <p className="font-display text-2xl">{program.lecturer}</p>

          <p className="eyebrow mb-4 mt-12">{t("studier.detail.learnings")}</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {program.learnings.map((l) => (
              <li key={l} className="flex items-start gap-3 text-sm text-[var(--ink-soft)]">
                <Check size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Modules — the ledger, signature element */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-4">{t("studier.detail.modulesTitle")}</p>
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            {program.moduler.length} {t("studier.detail.modulesSuffix")}
          </h2>

          <div className="mt-10 border-t border-[var(--line)]">
            {program.moduler.map((m, i) => (
              <div
                key={m.title}
                className="grid gap-2 border-b border-[var(--line)] py-8 md:grid-cols-[80px_1fr]"
              >
                <span className="font-mono text-sm text-[var(--ink-faint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    {m.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for / Career */}
      <section className="bg-[var(--paper)] px-4 py-20">
        <div className="mx-auto grid max-w-4xl gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">{t("studier.detail.whoFor")}</p>
            <ul className="space-y-3">
              {program.whoFor.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm text-[var(--ink-soft)]">
                  <Check size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">{t("studier.detail.career")}</p>
            <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
              {program.career}
            </p>
          </div>
        </div>
      </section>

      {/* Execution / gatherings / assessment / pricing */}
      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-4xl gap-10 rounded-3xl border border-[var(--line)] p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="eyebrow mb-3">{t("studier.detail.execution")}</p>
            <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
              {program.execution}
            </p>

            <p className="eyebrow mb-3 mt-8">{t("studier.detail.gatherings")}</p>
            <ul className="space-y-1 text-sm text-[var(--ink-soft)]">
              {program.gatherings.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3">{t("studier.detail.assessment")}</p>
            <ul className="space-y-2 text-sm text-[var(--ink-soft)]">
              {program.assessment.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <Check size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                  {a}
                </li>
              ))}
            </ul>

            <div className="hairline mt-8 pt-6">
              <p className="eyebrow mb-1">{t("studier.detail.price")}</p>
              <p className="font-display text-2xl">{program.price}</p>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                {t("studier.detail.start")}: {program.start}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading={`Meld deg på ${program.name}`}
        subheading="Fyll ut skjemaet nederst, eller send e-post til post@nihi.no — begrenset antall plasser."
      />
    </main>
  );
}
