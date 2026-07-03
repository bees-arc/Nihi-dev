"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { siteInfo } from "@/lib/data";
import { useLanguage } from "@/components/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-10 md:pb-24 md:pt-24">
      {/* ambient field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 10%, rgba(75,93,86,0.10) 0%, transparent 60%), radial-gradient(50% 40% at 85% 20%, rgba(17,17,17,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          {t("hero.eyebrow")}
        </motion.p>

        <div className="grid gap-6 md:gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-[10vw] sm:text-5xl leading-[0.95] tracking-tight md:text-[5.2vw]"
          >
            {t("hero.title1")}
            <br />
            {t("hero.titleAnd")}{" "}
            <span className="italic text-[var(--accent)]">
              {language === "no" ? "og" : "and"}
            </span>
            <br />
            {t("hero.title2")}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-sm leading-relaxed text-[var(--ink-soft)] md:text-base"
          >
            <p>
              {t("hero.description")}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="glass mt-8 md:mt-14 grid gap-6 rounded-[24px] md:rounded-[28px] p-5 md:p-8 md:grid-cols-[1fr_auto] md:items-center"
        >
          <div>
            <p className="font-display text-lg md:text-2xl italic">
              {t("hero.quote")}
            </p>
            <p className="mt-2 text-sm text-[var(--ink-soft)]">
              {t("hero.quoteSub")}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href={siteInfo.calendly}
              target="_blank"
              className="flex items-center justify-center gap-1 whitespace-nowrap rounded-full bg-[var(--ink)] px-6 py-3 text-sm text-[var(--bg)] transition hover:opacity-85"
            >
              {t("hero.contactBtn")} <ArrowUpRight size={14} />
            </a>
            <a
              href="#studier"
              className="flex items-center justify-center gap-1 whitespace-nowrap rounded-full border border-[var(--ink)]/20 px-6 py-3 text-sm transition hover:bg-white/50"
            >
              {t("hero.exploreBtn")} <ArrowDown size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
