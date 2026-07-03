"use client";

import { siteInfo } from "@/lib/data";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import AdvisorSection from "@/components/AdvisorSection";
import { useLanguage } from "@/components/LanguageContext";

export default function KontaktPage() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="px-4 pb-8 pt-16">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-4">{t("kontakt.eyebrow")}</p>
          <h1 className="font-display text-5xl tracking-tight md:text-7xl">
            {t("kontakt.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-[var(--ink-soft)]">
            {t("kontakt.desc")}
          </p>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 text-[var(--accent)]" />
              <div>
                <p className="eyebrow mb-1">{t("kontakt.phone")}</p>
                <p className="text-sm text-[var(--ink-soft)]">{siteInfo.phone}</p>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-3">
              <Mail size={18} className="mt-0.5 text-[var(--accent)]" />
              <div>
                <p className="eyebrow mb-1">{t("kontakt.email")}</p>
                <p className="text-sm text-[var(--ink-soft)]">{siteInfo.email}</p>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 text-[var(--accent)]" />
              <div>
                <p className="eyebrow mb-1">{t("kontakt.address")}</p>
                <p className="text-sm text-[var(--ink-soft)]">{siteInfo.address}</p>
              </div>
            </div>

            <a
              href={siteInfo.calendly}
              target="_blank"
              className="mt-10 inline-flex items-center gap-1 rounded-full bg-[var(--ink)] px-6 py-3 text-sm text-[var(--bg)] transition hover:opacity-85"
            >
              {t("nav.bookAdvising")} <ArrowUpRight size={14} />
            </a>
          </div>

          <form className="rounded-3xl border border-[var(--line)] p-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5">
              <label className="text-sm">
                {t("kontakt.form.name")}
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-sm outline-none focus:border-[var(--ink)]"
                  placeholder={t("kontakt.form.namePlaceholder")}
                />
              </label>
              <label className="text-sm">
                {t("kontakt.form.email")}
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-sm outline-none focus:border-[var(--ink)]"
                  placeholder={t("kontakt.form.emailPlaceholder")}
                />
              </label>
              <label className="text-sm">
                {t("kontakt.form.phone")}
                <input
                  type="tel"
                  className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-sm outline-none focus:border-[var(--ink)]"
                  placeholder={t("kontakt.form.phonePlaceholder")}
                />
              </label>
              <label className="text-sm">
                {t("kontakt.form.message")}
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-sm outline-none focus:border-[var(--ink)]"
                  placeholder={t("kontakt.form.messagePlaceholder")}
                />
              </label>
              <button
                type="submit"
                className="w-fit rounded-full bg-[var(--ink)] px-6 py-3 text-sm text-[var(--bg)] transition hover:opacity-85"
              >
                {t("kontakt.form.send")}
              </button>
            </div>
          </form>
        </div>
      </section>

      <AdvisorSection />
    </main>
  );
}
