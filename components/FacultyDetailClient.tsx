"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CTABand from "@/components/CTABand";
import { useLanguage } from "@/components/LanguageContext";
import { Faculty, siteInfo } from "@/lib/data";

export default function FacultyDetailClient({ person }: { person: Faculty }) {
  const { t } = useLanguage();

  return (
    <main>
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-4">
            <Link href="/forelesere" className="hover:text-[var(--ink)]">
              {t("nav.lecturers")}
            </Link>{" "}
            / {person.name}
          </p>
          <div className="grid gap-10 md:grid-cols-[220px_1fr] md:items-start">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover"
                sizes="220px"
              />
            </div>
            <div>
              <h1 className="font-display text-4xl tracking-tight md:text-5xl">
                {person.name}
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--ink-soft)]">
                {person.name} {t("forelesere.detail.descSuffix")}
              </p>
              <a
                href={siteInfo.calendly}
                target="_blank"
                className="mt-8 inline-flex items-center gap-1 rounded-full bg-[var(--ink)] px-6 py-3 text-sm text-[var(--bg)] transition hover:opacity-85"
              >
                {t("nav.bookAdvising")} <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <CTABand />
    </main>
  );
}
