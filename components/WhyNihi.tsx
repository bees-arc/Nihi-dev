"use client";

import { whyNihi } from "@/lib/data";
import { useLanguage } from "@/components/LanguageContext";

export default function WhyNihi() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--paper)] px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-4">{t("why.eyebrow")}</p>
        <h2 className="max-w-2xl font-display text-4xl tracking-tight md:text-5xl">
          {t("why.title1")}{" "}
          <span className="italic text-[var(--accent)]">{t("why.titleAccent")}</span>{" "}
          {t("why.title2")}
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
          {whyNihi.map((item) => (
            <div key={item.title} className="bg-[var(--bg)] p-8">
              <h3 className="font-display text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
