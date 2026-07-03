"use client";

import FacultyGrid from "@/components/FacultyGrid";
import CTABand from "@/components/CTABand";
import { useLanguage } from "@/components/LanguageContext";

export default function FacultyPage() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="px-4 pb-8 pt-16">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow mb-4">{t("forelesere.eyebrow")}</p>
          <h1 className="font-display text-5xl tracking-tight md:text-7xl">
            {t("forelesere.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-[var(--ink-soft)]">
            {t("forelesere.desc")}
          </p>
        </div>
      </section>
      <FacultyGrid />
      <CTABand />
    </main>
  );
}
