"use client";

import { programs } from "@/lib/data";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import { useLanguage } from "@/components/LanguageContext";

export default function ModulerPage() {
  const { t, getProgramName } = useLanguage();

  return (
    <main>
      <section className="px-4 pb-8 pt-16">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-4">{t("moduler.eyebrow")}</p>
          <h1 className="font-display text-5xl tracking-tight md:text-7xl">
            {t("moduler.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-[var(--ink-soft)]">
            {t("moduler.desc")}
          </p>
        </div>
      </section>

      {programs.map((program) => (
        <section key={program.slug} className="px-4 py-14">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[var(--line)] pb-4">
              <h2 className="font-display text-2xl md:text-3xl">
                {getProgramName(program.slug, program.name)}
              </h2>
              <Link
                href={`/studier/${program.slug}`}
                className="text-sm text-[var(--ink-soft)] underline underline-offset-4 hover:text-[var(--ink)]"
              >
                {t("moduler.viewFull")}
              </Link>
            </div>
            <div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {program.moduler.map((m, i) => (
                <div key={m.title} className="flex gap-3">
                  <span className="font-mono text-xs text-[var(--ink-faint)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-[var(--ink-soft)]">{m.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTABand />
    </main>
  );
}
