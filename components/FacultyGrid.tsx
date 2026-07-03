"use client";

import Link from "next/link";
import Image from "next/image";
import { faculty } from "@/lib/data";
import { useLanguage } from "@/components/LanguageContext";

export default function FacultyGrid({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();
  const list = compact ? faculty.slice(0, 8) : faculty;

  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">{t("faculty.eyebrow")}</p>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              {t("faculty.title")}
            </h2>
          </div>
          {compact && (
            <Link
              href="/forelesere"
              className="hidden text-sm text-[var(--ink-soft)] underline underline-offset-4 hover:text-[var(--ink)] md:block"
            >
              {t("faculty.viewAll")}
            </Link>
          )}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {list.map((f) => (
            <Link key={f.slug} href={`/forelesere/${f.slug}`} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--paper)]">
                <Image
                  src={f.image}
                  alt={f.name}
                  fill
                  className="object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <p className="mt-3 font-display text-base leading-snug">{f.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
