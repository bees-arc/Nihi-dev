"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { siteInfo } from "@/lib/data";
import { useLanguage } from "@/components/LanguageContext";

export default function AdvisorSection() {
  const { t } = useLanguage();

  return (
    <section className="px-4 py-24">
      <div className="glass mx-auto grid max-w-6xl gap-10 rounded-[32px] p-8 md:grid-cols-[auto_1fr_auto] md:items-center md:p-12">
        <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full md:h-32 md:w-32">
          <Image
            src="https://www.nihi.no/wp-content/uploads/2024/11/Frame-1.webp"
            alt={t("advisor.alt")}
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>

        <div>
          <p className="eyebrow mb-3">{t("advisor.eyebrow")}</p>
          <h3 className="font-display text-2xl md:text-3xl">
            {t("advisor.title")}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--ink-soft)]">
            {t("advisor.desc")}
          </p>
        </div>

        <a
          href={siteInfo.calendly}
          target="_blank"
          className="flex w-fit items-center gap-1 whitespace-nowrap rounded-full bg-[var(--ink)] px-6 py-3 text-sm text-[var(--bg)] transition hover:opacity-85 md:ml-auto"
        >
          {t("advisor.btn")} <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
