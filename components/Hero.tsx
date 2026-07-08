"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { siteInfo } from "@/lib/data";
import { useLanguage } from "@/components/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFading, setIsFading] = useState(false);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const timeLeft = video.duration - video.currentTime;
    // Trigger transition 0.08s before the video loops
    if (timeLeft < 0.08) {
      setIsFading(true);
    } else {
      setIsFading(false);
    }
  };

  return (
    <section className="relative overflow-hidden px-4 w-full min-h-screen flex items-center justify-center py-16 md:py-24">
      {/* Background High-Quality Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover -z-10 transition-opacity duration-75 ease-in-out"
        style={{ opacity: isFading ? 0 : 1 }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      
      {/* Soft translucent backdrop blur overlay for legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-white/20 backdrop-blur-[2px]"
      />

      <div className="mx-auto max-w-6xl w-full relative z-10">
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
            className="font-display text-[10vw] sm:text-5xl leading-[0.95] tracking-tight md:text-[5.2vw] text-[var(--ink)]"
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
            className="text-sm leading-relaxed text-[var(--ink)] md:text-base font-medium"
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
            <p className="font-display text-lg md:text-2xl italic text-[var(--ink)]">
              {t("hero.quote")}
            </p>
            <p className="mt-2 text-sm text-[var(--ink-soft)] font-medium">
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
