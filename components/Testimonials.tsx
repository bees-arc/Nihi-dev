"use client";

import { testimonials } from "@/lib/data";
import { useLanguage } from "@/components/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--ink)] px-4 py-24 text-[var(--bg)]">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-4 text-white/50">{t("testimonials.eyebrow")}</p>
        <h2 className="max-w-xl font-display text-4xl tracking-tight md:text-5xl">
          {t("testimonials.title")}
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="glass-dark rounded-3xl p-8 text-white"
            >
              <span className="font-mono text-xs text-white/40">
                {String(i + 1).padStart(2, "0")} / CASE
              </span>
              <p className="mt-4 font-display text-lg italic leading-relaxed text-white/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm text-white/50">
                {t.name} — {t.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
