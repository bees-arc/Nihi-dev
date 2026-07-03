"use client";

import { ArrowUpRight } from "lucide-react";
import { programs, siteInfo } from "@/lib/data";
import { useLanguage } from "@/components/LanguageContext";

export default function CTABand({
  heading = "Start din utdanning hos NIHI nå",
  subheading = "Begrenset antall studieplasser hvert semester.",
}: {
  heading?: string;
  subheading?: string;
}) {
  const { t, language, getProgramName } = useLanguage();

  let displayHeading = heading;
  let displaySubheading = subheading;

  if (heading === "Start din utdanning hos NIHI nå") {
    displayHeading = t("cta.heading");
  } else if (heading.startsWith("Meld deg på ")) {
    const progName = heading.replace("Meld deg på ", "");
    const matchingProgram = programs.find((p) => p.name === progName);
    if (matchingProgram) {
      displayHeading = `${t("studier.detail.enroll")} ${getProgramName(
        matchingProgram.slug,
        matchingProgram.name
      )}`;
    } else {
      displayHeading = language === "en" ? `Enroll in ${progName}` : heading;
    }
  }

  if (subheading === "Begrenset antall studieplasser hvert semester.") {
    displaySubheading = t("cta.subheading");
  } else if (
    subheading ===
    "Fyll ut skjemaet nederst, eller send e-post til post@nihi.no — begrenset antall plasser."
  ) {
    displaySubheading = t("studier.detail.enrollDesc");
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-[var(--ink)] px-8 py-16 text-center text-[var(--bg)] md:py-24">
        <p className="font-display text-3xl tracking-tight italic md:text-5xl">
          {displayHeading}
        </p>
        <p className="mt-4 text-sm text-white/60 md:text-base">{displaySubheading}</p>
        <a
          href={siteInfo.calendly}
          target="_blank"
          className="mt-8 inline-flex items-center gap-1 rounded-full bg-[var(--bg)] px-7 py-3 text-sm text-[var(--ink)] transition hover:opacity-85"
        >
          {t("cta.btn")} <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
