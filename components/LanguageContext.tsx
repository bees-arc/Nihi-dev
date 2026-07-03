"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "no" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getProgramName: (slug: string, fallback: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, { no: string; en: string }> = {
  // Navbar
  "nav.modules": { no: "Moduler", en: "Modules" },
  "nav.lecturers": { no: "Forelesere", en: "Lecturers" },
  "nav.articles": { no: "Artikler", en: "Articles" },
  "nav.contact": { no: "Kontakt", en: "Contact" },
  "nav.studies": { no: "Studier", en: "Studies" },
  "nav.studentPortal": { no: "Student portal", en: "Student Portal" },
  "nav.bookAdvising": { no: "Book veiledning", en: "Book Advising" },

  // Hero
  "hero.eyebrow": { no: "Norges Idretts- og Helseinstitutt", en: "Norwegian Sports and Health Institute" },
  "hero.title1": { no: "Spisskompetanse", en: "Expertise" },
  "hero.titleAnd": { no: "innen helse", en: "in health" },
  "hero.title2": { no: "idrettsmedisin", en: "sports medicine" },
  "hero.description": {
    no: "For deg som ønsker en bredere og dypere innsikt på tvers av fagområder. Videreutdanninger basert på innovasjon, forskning og klinisk praksis.",
    en: "For those seeking a broader and deeper insight across disciplines. Continuing education based on innovation, research, and clinical practice."
  },
  "hero.quote": {
    no: "“Vi bygger broer mellom fagdisipliner med klinisk presisjon.”",
    en: "“We build bridges between disciplines with clinical precision.”"
  },
  "hero.quoteSub": {
    no: "Fire sertifiserte videreutdanninger. Nettbasert kjerne, fysiske samlinger, én-til-én studieveiledning.",
    en: "Four certified continuing education programs. Online core, physical gatherings, one-on-one student advising."
  },
  "hero.contactBtn": { no: "Kontakt studieveileder", en: "Contact advisor" },
  "hero.exploreBtn": { no: "Utforsk studier", en: "Explore programs" },

  // ProgramsSection
  "programs.eyebrow": { no: "Studier — 2026", en: "Studies — 2026" },
  "programs.title": { no: "Fire veier inn i faget", en: "Four paths into the field" },
  "programs.desc": {
    no: "Hver utdanning er bygget som en sertifisert, praksisnær videreutdanning — ikke en generell akademisk grad.",
    en: "Each program is built as a certified, practice-oriented continuing education — not a general academic degree."
  },
  "programs.view": { no: "Se studiet", en: "View program" },

  // WhyNihi
  "why.eyebrow": { no: "Hvorfor NIHI", en: "Why NIHI" },
  "why.title1": { no: "Helse, fleksibilitet og", en: "Health, flexibility and" },
  "why.title2": { no: "jobbmuligheter", en: "career opportunities" },
  "why.titleAccent": { no: "unike", en: "unique" },

  // FacultyGrid
  "faculty.eyebrow": { no: "Våre forelesere", en: "Our Lecturers" },
  "faculty.title": { no: "Sammen løfter vi kunnskap", en: "Elevating knowledge together" },
  "faculty.viewAll": { no: "Se alle forelesere", en: "See all lecturers" },

  // AdvisorSection
  "advisor.alt": { no: "Victoria, studieveileder ved NIHI", en: "Victoria, student advisor at NIHI" },
  "advisor.eyebrow": { no: "Studieveiledning", en: "Student Advising" },
  "advisor.title": { no: "Snakk med fysioterapeut Victoria", en: "Speak with physiotherapist Victoria" },
  "advisor.desc": {
    no: "Usikker på om våre utdanninger er det rette valget for deg? Book en gratis veiledningstime, så finner vi sammen ut av dine muligheter og skreddersyr veien videre.",
    en: "Unsure if our programs are the right choice for you? Book a free advising session, and together we will map out your options and customize the path forward."
  },
  "advisor.btn": { no: "Book time", en: "Book session" },

  // Testimonials
  "testimonials.eyebrow": { no: "Deres tilbakemelding", en: "Their feedback" },
  "testimonials.title": { no: "Våre studenter er hjertet i alt vi gjør", en: "Our students are at the heart of everything we do" },

  // CTABand
  "cta.heading": { no: "Start din utdanning hos NIHI nå", en: "Start your education with NIHI now" },
  "cta.subheading": { no: "Begrenset antall studieplasser hvert semester.", en: "Limited number of study spots each semester." },
  "cta.btn": { no: "Kontakt vår studieveileder", en: "Contact our student advisor" },

  // Footer
  "footer.desc": {
    no: "Norges Idretts- og Helseinstitutt — videreutdanninger med fremtidsrettet og ledende kompetanse innen helse og idrett.",
    en: "Norwegian Sports and Health Institute — continuing education with forward-looking and leading competence in health and sports."
  },
  "footer.book": { no: "Book studieveiledning", en: "Book student advising" },
  "footer.studies": { no: "Studier", en: "Studies" },
  "footer.institute": { no: "Institutt", en: "Institute" },
  "footer.contact": { no: "Kontakt", en: "Contact" },
  "footer.rights": { no: "Alle rettigheter reservert", en: "All rights reserved" },
  "footer.privacy": { no: "Personvern", en: "Privacy policy" },
  "footer.terms": { no: "Vilkår", en: "Terms" },

  // Forelesere page
  "forelesere.eyebrow": { no: "Forelesere", en: "Lecturers" },
  "forelesere.title": { no: "Fagpersonene bak NIHI", en: "The professionals behind NIHI" },
  "forelesere.desc": {
    no: "Praktikere og forskere med solid klinisk erfaring, som sammen løfter kunnskapen til nye høyder.",
    en: "Practitioners and researchers with solid clinical experience, elevating knowledge to new heights together."
  },
  "forelesere.detail.descSuffix": {
    no: "er en del av NIHIs fagmiljø og bidrar med klinisk erfaring og praksisnær undervisning i institutets videreutdanninger.",
    en: "is part of NIHI's academic environment, contributing clinical experience and practice-oriented teaching to the institute's continuing education programs."
  },

  // Moduler page
  "moduler.eyebrow": { no: "Moduler", en: "Modules" },
  "moduler.title": { no: "Alle fagmoduler", en: "All course modules" },
  "moduler.desc": {
    no: "En oversikt over fagmodulene i hver av NIHIs videreutdanninger. Velg en utdanning for full moduloversikt og pensum.",
    en: "An overview of the course modules in each of NIHI's programs. Select a program for full module overview and syllabus."
  },
  "moduler.viewFull": { no: "Se hele studiet", en: "View full program" },

  // Kontakt page
  "kontakt.eyebrow": { no: "Kontakt", en: "Contact" },
  "kontakt.title": { no: "Ta kontakt med oss", en: "Get in touch with us" },
  "kontakt.desc": {
    no: "Spørsmål om et studie, påmelding eller samarbeid? Send oss en melding, eller book en gratis studieveiledning direkte.",
    en: "Questions about a program, registration or collaboration? Send us a message, or book a free advising session directly."
  },
  "kontakt.phone": { no: "Telefon", en: "Phone" },
  "kontakt.email": { no: "E-post", en: "Email" },
  "kontakt.address": { no: "Adresse", en: "Address" },
  "kontakt.form.name": { no: "Navn", en: "Name" },
  "kontakt.form.namePlaceholder": { no: "Ditt fulle navn", en: "Your full name" },
  "kontakt.form.email": { no: "E-post", en: "Email" },
  "kontakt.form.emailPlaceholder": { no: "din@epost.no", en: "your@email.com" },
  "kontakt.form.phone": { no: "Telefon", en: "Phone" },
  "kontakt.form.phonePlaceholder": { no: "+47", en: "+47" },
  "kontakt.form.message": { no: "Beskjed", en: "Message" },
  "kontakt.form.messagePlaceholder": { no: "Hva lurer du på?", en: "How can we help you?" },
  "kontakt.form.send": { no: "Send melding", en: "Send message" },

  // Studier list page
  "studier.eyebrow": { no: "Studier", en: "Studies" },
  "studier.title": { no: "Videreutdanninger for helse- og treningsfeltet", en: "Continuing education for the health and training field" },
  "studier.desc": {
    no: "Fire sertifiserte, praksisnære videreutdanninger — bygget på innovasjon, forskning og klinisk erfaring. Nettbasert kjerne kombinert med fysiske samlinger.",
    en: "Four certified, practice-oriented programs — built on innovation, research, and clinical experience. Online core combined with physical gatherings."
  },

  // Studier detail page
  "studier.detail.registerInterest": { no: "Meld interesse", en: "Register interest" },
  "studier.detail.lecturer": { no: "Foreleser", en: "Lecturer" },
  "studier.detail.learnings": { no: "Dette lærer du", en: "What you will learn" },
  "studier.detail.modulesTitle": { no: "Moduloversikt", en: "Module overview" },
  "studier.detail.modulesSuffix": { no: "fagmoduler", en: "course modules" },
  "studier.detail.whoFor": { no: "Hvem passer utdanningen for?", en: "Who is this program for?" },
  "studier.detail.career": { no: "Karrieremuligheter", en: "Career opportunities" },
  "studier.detail.execution": { no: "Gjennomføring", en: "Execution" },
  "studier.detail.gatherings": { no: "Fysiske samlinger", en: "Physical gatherings" },
  "studier.detail.assessment": { no: "Vurdering", en: "Assessment" },
  "studier.detail.price": { no: "Pris", en: "Price" },
  "studier.detail.start": { no: "Oppstart", en: "Start" },
  "studier.detail.enroll": { no: "Meld deg på", en: "Enroll in" },
  "studier.detail.enrollDesc": {
    no: "Fyll ut skjemaet nederst, eller send e-post til post@nihi.no — begrenset antall plasser.",
    en: "Fill out the form below or send an email to post@nihi.no — limited spots available."
  }
};

const programNameTranslations: Record<string, { no: string; en: string }> = {
  "klinisk-idrettsmedisin": {
    no: "Klinisk Idrettsmedisin",
    en: "Clinical Sports Medicine"
  },
  "sertifisert-coach-og-mentaltrener": {
    no: "Sertifisert Coach og Mentaltrener",
    en: "Certified Coach and Mental Trainer"
  },
  "sertifisert-kostholdsveileder": {
    no: "Sertifisert Kostholdsveileder",
    en: "Certified Nutrition Advisor"
  },
  "sertifisert-idrett-og-muskelterapeut": {
    no: "Sertifisert Idretts- og Muskelterapeut",
    en: "Certified Sports and Muscle Therapist"
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("no");

  useEffect(() => {
    const savedLang = localStorage.getItem("nihi-lang") as Language;
    if (savedLang === "no" || savedLang === "en") {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("nihi-lang", lang);
  };

  const t = (key: string): string => {
    const item = translations[key];
    if (!item) {
      return key;
    }
    return item[language] || item["no"];
  };

  const getProgramName = (slug: string, fallback: string): string => {
    const item = programNameTranslations[slug];
    if (!item) return fallback;
    return item[language] || item["no"];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getProgramName }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
