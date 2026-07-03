import CTABand from "@/components/CTABand";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Oppfølging av kolleger — sykefravær relatert til jobb og retur til jobb etter fravær",
    tag: "Arbeidshelse",
  },
  {
    title: "Gratis webinar: løft din kompetanse",
    tag: "Webinar",
  },
  {
    title: "Styrking av faglig samarbeid gjennom årlig kongress",
    tag: "Kongress",
  },
  {
    title: "Velkommen til Trenings- og Helsekongressen 2024",
    tag: "Kongress",
  },
  {
    title: "Akilles tendinopati: en vanlig løpeskade og hvordan du kan håndtere den",
    tag: "Idrettsmedisin",
  },
];

export default function ArtiklerPage() {
  return (
    <main>
      <section className="px-4 pb-8 pt-16">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-4">Artikler</p>
          <h1 className="font-display text-5xl tracking-tight md:text-7xl">
            Fagstoff fra NIHI
          </h1>
          <p className="mt-6 max-w-2xl text-[var(--ink-soft)]">
            Kliniske artikler, kongressoppdateringer og webinarer fra
            fagmiljøet.
          </p>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto max-w-5xl border-t border-[var(--line)]">
          {articles.map((a, i) => (
            <div
              key={a.title}
              className="group flex flex-col gap-3 border-b border-[var(--line)] py-8 md:flex-row md:items-center md:gap-8"
            >
              <span className="font-mono text-sm text-[var(--ink-faint)] md:w-12">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="eyebrow md:w-40">{a.tag}</span>
              <h2 className="font-display text-xl md:flex-1 md:text-2xl">
                {a.title}
              </h2>
              <span className="flex items-center gap-1 font-mono text-xs text-[var(--ink-faint)]">
                Les mer <ArrowUpRight size={13} />
              </span>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </main>
  );
}
