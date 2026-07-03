"use client";

import ProgramsSection from "@/components/ProgramsSection";
import CTABand from "@/components/CTABand";
import { useLanguage } from "@/components/LanguageContext";

export default function StudierPage() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="px-4 pb-8 pt-16">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow mb-4">{t("studier.eyebrow")}</p>
          <h1 className="font-display text-5xl tracking-tight md:text-7xl">
            {t("studier.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-[var(--ink-soft)]">
            {t("studier.desc")}
          </p>
        </div>
      </section>
      <ProgramsSection />
      <CTABand />
    </main>
  );
}
