"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, BookOpen, CreditCard, ChevronDown, Phone, Mail } from "lucide-react";
import { siteInfo } from "@/lib/data";
import { useLanguage } from "@/components/LanguageContext";
import Image from "next/image";

// Video Card component for inline premium play experience
function VideoCard({ src, poster, title }: { src: string; poster: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video w-full bg-black">
        {playing ? (
          <video
            src={src}
            controls
            autoPlay
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="relative h-full w-full cursor-pointer" onClick={() => setPlaying(true)}>
            <Image
              src={poster}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/35">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md transition duration-300 group-hover:scale-110">
                <Play size={20} className="ml-1 text-[var(--accent)] fill-[var(--accent)]" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="font-mono text-xs text-[var(--ink-faint)]">STUDENT CASE / INNSIKT</p>
        <h4 className="mt-1 font-display text-base text-[var(--ink)]">{title}</h4>
      </div>
    </div>
  );
}

// 18 Modules Data (Norwegian and English)
const modulesData = [
  {
    num: 1,
    no: {
      title: "Anatomi",
      body: "Vår modul “Anatomi” tilbyr en dyptgående og detaljert undersøkelse av menneskekroppens struktur fra mikroskopisk til makroskopisk nivå. Denne modulen er avgjørende for alle som ønsker å forstå de komplekse anatomiske systemene og deres funksjoner i klinisk sammenheng."
    },
    en: {
      title: "Anatomy",
      body: "Our module “Anatomy” offers an in-depth and detailed examination of the structure of the human body from microscopic to macroscopic level. This module is essential for anyone who wants to understand complex anatomical systems and their functions in a clinical context."
    },
    image: "https://www.nihi.no/wp-content/uploads/2024/11/pexels-rethaferguson-3059750.webp"
  },
  {
    num: 2,
    no: {
      title: "Fysiologi",
      body: "Vår modul “Fysiologi” er designet for å være en av de mest omfattende og grundige undervisningsmodulene innen menneskets fysiologi og funksjonell fysiologi. Denne modulen tilbyr en inngående forståelse av kroppens biologiske og fysiologiske prosesser, vital for enhver helsepraktiker."
    },
    en: {
      title: "Physiology",
      body: "Our module “Physiology” is designed to be one of the most comprehensive and thorough teaching modules in human physiology and functional physiology. This module offers an in-depth understanding of the body's biological and physiological processes, vital for any health practitioner."
    },
    image: "https://www.nihi.no/wp-content/uploads/2024/11/human.webp"
  },
  {
    num: 3,
    no: {
      title: "Klinisk styrketrening",
      body: "Vår modul “Klinisk Styrketrening” er en av de mest omfattende og dyptgående utdanningsmodulene innen styrketrening, atletisk trening og rehabilitering. Her vil du dykke ned i en verden av treningsfysiologi, muskel fysiologi og treningsprinsipper."
    },
    en: {
      title: "Clinical Strength Training",
      body: "Our module “Clinical Strength Training” is one of the most comprehensive and in-depth educational modules in strength training, athletic training, and rehabilitation. Here, you will dive into a world of exercise physiology, muscle physiology, and training principles."
    },
    image: "https://www.nihi.no/wp-content/uploads/2024/11/pexels-funkcines-terapijos-centras-927573878-20860624.webp"
  },
  {
    num: 4,
    no: {
      title: "Biomekanikk og øvelsesutvalg",
      body: "Denne modulen tar deg dypere inn i vitenskapen om biomekanikk og øvelsesutvalg, og gir deg eine omfattende forståelse av hvordan krefter, vektarmer og omdreiningsakser påvirker trening og rehabilitering. Vårt mål er å gi deg kompetansen du trenger for å forstå den biomekaniske sammenhengen mellom anatomi, bevegelse og effektiv trening."
    },
    en: {
      title: "Biomechanics and Exercise Selection",
      body: "This module takes you deeper into the science of biomechanics and exercise selection, giving you a comprehensive understanding of how forces, lever arms, and axes of rotation affect training and rehabilitation. Our goal is to give you the competence needed to understand the biomechanical connection between anatomy, movement, and effective training."
    },
    image: "https://www.nihi.no/wp-content/uploads/2024/11/pexels-823sl-2294361.webp"
  },
  {
    num: 5,
    no: {
      title: "Medisinsk treningsterapi (MTT)",
      body: "Medisinsk Treningsterapi (MTT) er en omfattende og dypdykkende modul som gir deg ferdighetene til å hjelpe pasienter med å komme tilbake sterkere enn noen gang etter skader og operasjoner. Gjennom et strukturert og forskningsbasert program, lærer du å veilede pasienter og utøvere gjennom de forskjellige fasene av rehabilitering. Fra kravanalyse og kapasitetsanalyse til objektive målinger og nøyaktig dosering av øvelser, vil du utvikle deg til en ekspert innen rehabilitering og medisinsk trening."
    },
    en: {
      title: "Medical Exercise Therapy (MTT)",
      body: "Medical Exercise Therapy (MTT) is a comprehensive and deep-diving module that gives you the skills to help patients return stronger than ever after injuries and surgeries. Through a structured and research-based program, you learn to guide patients and athletes through the different phases of rehabilitation. From demands analysis and capacity analysis to objective measurements and precise exercise dosage, you will develop into an expert in rehabilitation and medical exercise."
    },
    image: "https://www.nihi.no/wp-content/uploads/2024/11/pexels-karolina-grabowska-4506075.webp"
  },
  {
    num: 6,
    no: {
      title: "Dry needling",
      body: "Dry Needling-modulen gir en omfattende forståelse av hvordan nålebehandling kan benyttes som et effektivt verktøy innen styrketrening, atletisk trening og rehabilitering. Modulen utforsker de forskjellige tilnærmingene til dry needling, fra de evidensbaserte til de mer erfaringsbaserte. Denne modulen vil ruste deg med den nødvendige kompetansen til å forstå hvordan nålebehandling kan spille en sentral rolle i trenings- og rehabiliteringsprosessen, og hvordan det kan kombineres med andre terapiformer for å optimalisere pasientens resultater."
    },
    en: {
      title: "Dry Needling",
      body: "The Dry Needling module provides a comprehensive understanding of how needle treatment can be used as an effective tool in strength training, athletic training, and rehabilitation. The module explores the different approaches to dry needling, from the evidence-based to the more experience-based. This module will equip you with the necessary competence to understand how needle treatment can play a central role in the training and rehabilitation process, and how it can be combined with other therapy forms to optimize patient outcomes."
    },
    image: "https://www.nihi.no/wp-content/uploads/2024/11/pexels-maksgelatin-6094092.webp"
  },
  {
    num: 7,
    no: {
      title: "Klinisk undersøkelse av bevegelsesapparatet",
      body: "Denne modulen er hjørnestenen i vår utdanning og et av de mest omfattende kursene innenfor styrketrening, atletisk trening og rehabilitering. Gjennom denne modulen vil du utvikle de ferdighetene som skiller en dyktig terapeut fra andre, nemlig evnen til å stille en korrekt diagnose. Her får du inngående kunnskap om ortopedisk testing og differensiering av ulike diagnoser, noe som er avgjørende for å forstå hvordan du best kan veilede klientene dine i trening og rehabilitering."
    },
    en: {
      title: "Clinical Examination of the Musculoskeletal System",
      body: "This module is the cornerstone of our program and one of the most comprehensive courses in strength training, athletic training, and rehabilitation. Through this module, you will develop the skills that distinguish a skilled therapist from others—namely, the ability to establish a correct diagnosis. Here, you get in-depth knowledge of orthopedic testing and differentiation of various diagnoses, which is essential for understanding how to best guide your clients in training and rehabilitation."
    },
    image: "https://www.nihi.no/wp-content/uploads/2024/11/pexels-tima-miroshnichenko-5452281.webp"
  },
  {
    num: 8,
    no: {
      title: "NMFS bevegelsesanalyse",
      body: "I denne modulen vil du som student få dyp og grundig opplæring i funksjonell testing av idrettsutøvere. NMFS Bevegelsesanalyse er et omfattende verktøy som brukes blant profesjonelle idrettslag, spesielt innen fotball, i toppdivisjoner i Mexico, Spania og flere andre store internasjonale ligaer. Dette gjør modulen uvurderlig for alle som ønsker å jobbe med idrettsutøvere på et høyt nivå."
    },
    en: {
      title: "NMFS Movement Analysis",
      body: "In this module, you will receive deep and thorough training in functional testing of athletes. NMFS Movement Analysis is a comprehensive tool used among professional sports teams, especially in football, in top divisions in Mexico, Spain, and several other major international leagues. This makes the module invaluable for anyone wishing to work with athletes at a high level."
    },
    image: "https://www.nihi.no/wp-content/uploads/2024/11/pexels-towfiqu-barbhuiya-3440682-11743790.webp"
  },
  {
    num: 9,
    no: {
      title: "Leddmobilisering og manipulasjon",
      body: "I denne modulen lærer studentene å mestre funksjonelle, skånsomme leddmobiliseringsteknikker samt avanserte leddmanipulasjonsmetoder om du er helsepersonell. Gjennom et omfattende og detaljert pensum vil helsepersonell bli rustet til å utføre manipulasjonsteknikker som har solid dokumentasjon for sine effekter, og som støttes av moderne forklaringsmekanismer."
    },
    en: {
      title: "Joint Mobilization and Manipulation",
      body: "In this module, students learn to master functional, gentle joint mobilization techniques and, for healthcare professionals, advanced joint manipulation methods. Through a comprehensive and detailed curriculum, healthcare professionals will be equipped to perform manipulation techniques that have solid documentation for their effects and are supported by modern explanatory mechanisms."
    },
    image: "https://www.nihi.no/wp-content/uploads/2024/11/pexels-yankrukov-5794009.webp"
  },
  {
    num: 10,
    no: {
      title: "Klinisk nevrologi",
      body: "I denne modulen vil du som student lære å gjennomføre en grundig nevrologisk utredning for å identifisere, kartlegge og forstå nerverotsaffeksjon og andre potensielle diagnoser der nerven er påvirket. Vi går dypt inn i materien for å gi deg en omfattende forståelse av de kliniske vurderingene som kreves for å stille en nøyaktig diagnose og skreddersy en behandlingsplan til dine pasienter."
    },
    en: {
      title: "Clinical Neurology",
      body: "In this module, you will learn to conduct a thorough neurological assessment to identify, map, and understand nerve root compression and other potential diagnoses where the nerve is affected. We go deep into the subject matter to give you a comprehensive understanding of the clinical evaluations required to establish an accurate diagnosis and tailor a treatment plan for your patients."
    },
    image: "https://www.nihi.no/wp-content/uploads/2024/11/pexels-shvetsa-4226123.webp"
  },
  {
    num: 11,
    no: {
      title: "Manuelle behandlingsteknikker",
      body: "I denne omfattende modulen tar vi for oss et bredt spekter av manuelle behandlingsteknikker, og gir deg ferdigheter og kunnskap for å kunne anvende dem effektivt i din praksis. Vår tilnærming er dyptgående og forskningsbasert, med mål om å utruste deg til å skape et terapeutisk vindu med smertelette for dine pasienter."
    },
    en: {
      title: "Manual Therapy Techniques",
      body: "In this comprehensive module, we cover a wide range of manual treatment techniques, providing you with skills and knowledge to apply them effectively in your practice. Our approach is in-depth and research-based, with the goal of equipping you to create a therapeutic window of pain relief for your patients."
    },
    image: "https://www.nihi.no/wp-content/uploads/2024/11/R6II4943.webp"
  },
  {
    num: 12,
    no: {
      title: "Smertefysiologi",
      body: "Velkommen til modulen Smertefysiologi – et dyptgående og omfattende studie der du vil oppnå en unik forståelse for smerte og dens mange fasetter. Vår modul tilbyr en moderne tilnærming til smertevitenskap, og gir deg kunnskapen og verktøyene du trenger for å jobbe effektivt med pasienter som opplever smerte."
    },
    en: {
      title: "Pain Physiology",
      body: "Welcome to the Pain Physiology module—an in-depth and comprehensive study where you will achieve a unique understanding of pain and its many facets. Our module offers a modern approach to pain science, providing you with the knowledge and tools you need to work effectively with patients experiencing pain."
    },
    image: "https://www.nihi.no/wp-content/uploads/2024/11/pexels-kindelmedia-7298905.webp"
  },
  {
    num: 13,
    no: {
      title: "Kildebruk i klinisk praksis",
      body: "I denne modulen dykker vi dypt inn i kunsten og vitenskapen bak kildebruk i klinisk praksis. Målet er å gi deg, som kommende terapeut, en solid forståelse av hvordan du kan bruke forskning på en kritisk og effektiv måte for å forbedre kvaliteten på behandlingen din. Modulen er utviklet for å gjøre deg til en bevisst og kritisk tenker når det gjelder å skille mellom gode og mindre gode forskningsartikler, slik at du blir bedre rustet til å ta informerte beslutninger i møte med pasientene dine."
    },
    en: {
      title: "Evidence Use in Clinical Practice",
      body: "In this module, we dive deep into the art and science behind evidence use in clinical practice. The goal is to give you, as a future therapist, a solid understanding of how you can use research in a critical and effective way to improve the quality of your treatment. The module is developed to make you a conscious and critical thinker when it comes to distinguishing between good and less good research articles, so you are better equipped to make informed decisions in meetings with your patients."
    },
    image: "https://www.nihi.no/wp-content/uploads/2024/11/pexels-fr3nks-287237.webp"
  },
  {
    num: 14,
    no: {
      title: "Mental trening og coaching",
      body: "I denne modulen vil du fordype deg i den fascinerende verdenen av mental trening og coaching."
    },
    en: {
      title: "Mental Training and Coaching",
      body: "In this module, you will immerse yourself in the fascinating world of mental training and coaching."
    },
    image: "https://www.nihi.no/wp-content/uploads/2024/11/pexels-pavel-danilyuk-6295819.webp"
  },
  {
    num: 15,
    no: {
      title: "Terapeutisk teiping",
      body: "I denne modulen vil du få en dyptgående forståelse av de potensielle effektene av terapeutisk teiping, inkludert bruk av sports teip, kinesiologi teip, dynamic teip og leuko teip. Du vil lære om moderne forklaringsmekanismer og utforske forskningen som både støtter og utfordrer bruken av teip. Dette vil gi deg et helhetlig perspektiv og gjøre deg i stand til å identifisere når teip kan brukes effektivt for dine klienter og pasienter."
    },
    en: {
      title: "Therapeutic Taping",
      body: "In this module, you will gain an in-depth understanding of the potential effects of therapeutic taping, including the use of sports tape, kinesiology tape, dynamic tape, and leuko tape. You will learn about modern explanatory mechanisms and explore the research that both supports and challenges the use of tape. This will give you a holistic perspective and enable you to identify when tape can be used effectively for your clients and patients."
    },
    image: "https://www.nihi.no/wp-content/uploads/2024/11/pexels-danikprihodko-8219057.webp"
  },
  {
    num: 16,
    no: {
      title: "Klinisk ultralyddiagnostikk",
      body: "Gå fra å gjette til å faktisk vite hva som feiler pasientene dine!"
    },
    en: {
      title: "Clinical Ultrasound Diagnostics",
      body: "Go from guessing to actually knowing what is wrong with your patients!"
    },
    image: "https://www.nihi.no/wp-content/uploads/2024/11/nurse-using-ultrasonic-device.webp"
  },
  {
    num: 17,
    no: {
      title: "Journalføring",
      body: "I denne modulen vil du lære kunsten å innhente og dokumentere kritisk informasjon fra dine klienter og pasienter for å utarbeide nøyaktige og informative journaler som kan brukes til videre henvisninger til annet helsepersonell. Vi benytter oss av den velkjente SOAP-modellen og det anerkjente ICF-skjemaet for informasjonsinnhenting fra pasienter. Dette vil gi deg et solid grunnlag for å utarbeide en strukturert rapport som hjelper deg med å vurdere prognose og bestemme videre behandlingsforløp for dine pasienter."
    },
    en: {
      title: "Record Keeping",
      body: "In this module, you will learn the art of obtaining and documenting critical information from your clients and patients to prepare accurate and informative records that can be used for further referrals to other healthcare professionals. We utilize the well-known SOAP model and the recognized ICF scheme for information gathering from patients. This will give you a solid foundation for preparing a structured report that helps you assess prognosis and determine further treatment courses for your patients."
    },
    image: "https://www.nihi.no/wp-content/uploads/2024/11/pexels-tima-miroshnichenko-5439462.webp"
  },
  {
    num: 18,
    no: {
      title: "Athlete Preparation & Performance Coaching",
      body: "Vår nye og innovative modul Athlete Preparation & Performance Coaching er utviklet for deg som ønsker å arbeide målrettet med idrettsutøvere – med fokus på fysisk prestasjon, kapasitetsanalyse og målrettet treningsplanlegging. Modulen gir deg den faglige og praktiske innsikten du trenger for å optimalisere treningsopplegg for både individuelle og lagbaserte utøvere, og bygger bro mellom idrettsvitenskap og praktisk coaching."
    },
    en: {
      title: "Athlete Preparation & Performance Coaching",
      body: "Our new and innovative Athlete Preparation & Performance Coaching module is developed for those who want to work purposefully with athletes—focusing on physical performance, capacity analysis, and targeted training planning. The module gives you the professional and practical insight needed to optimize training programs for both individual and team-based athletes, bridging the gap between sports science and practical coaching."
    },
    image: "https://www.nihi.no/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-06-at-6.47.08-PM-1024x683.webp"
  }
];

// FAQs Data (Norwegian and English)
const faqsData = [
  {
    no: {
      q: "Hva skiller NIHI-utdanningen fra andre studier innen helse og trening?",
      a: "Det som gjør NIHI unikt, er vår evne til å komprimere det mest praktiske og relevante fra utdanninger som fysioterapi, osteopati, naprapati og idrettsvitenskap til en intensiv ettårig utdanning. Hos oss fokuserer vi på alt du trenger for å jobbe med muskel- og skjelettplager, rehabilitering, toppidrettsutøvere og kompliserte pasienter. I motsetning til tradisjonelle utdanninger, som ofte inkluderer omfattende akademisk skriving, praksisperioder og generelle temaer som barn og unge, prioriterer vi klinisk relevans og praktisk anvendelse. Med vår omfattende nettportal har du tilgang til all informasjon og kunnskap du trenger, mens våre praktiske samlinger gir deg ferdighetene som kreves for å bli en dyktig kliniker. Ønsker du å bli forsker eller gå en akademisk karrierevei, er dette kanskje ikke studiet for deg, men hvis du vil bli en solid kliniker som kan gjøre en forskjell for mennesker, er NIHI det rette valget."
    },
    en: {
      q: "What sets the NIHI program apart from other studies in health and exercise?",
      a: "What makes NIHI unique is our ability to compress the most practical and clinically relevant elements of programs like physiotherapy, osteopathy, naprapathy, and sports science into an intensive one-year education. We focus entirely on what you need to work with musculoskeletal conditions, rehabilitation, elite athletes, and complex patients. Unlike traditional academic studies, which often include extensive academic writing, internships, and general topics like children and youth, we prioritize clinical relevance and practical application. With our comprehensive online portal, you have access to all the knowledge you need, while our practical gatherings provide the skills required to become a skilled clinician. If you wish to become a researcher or pursue an academic career path, this may not be the program for you, but if you want to become a solid clinician who can make a difference for people, NIHI is the right choice."
    }
  },
  {
    no: {
      q: "Hvem kan søke på studiet hos NIHI, og kreves det en spesifikk bakgrunn?",
      a: "Omtrent 70 % av våre studenter er fysioterapeuter som ønsker å bygge videre på sin kliniske kompetanse. De ser at vår utdanning gir dem verktøyene de trenger for å bli enda bedre klinikere. Samtidig tiltrekker vi oss mange studenter med bakgrunn fra idrettsvitenskap eller personlig trening, som ønsker en spesialisert tittel og mer kompetanse til å håndtere klienter med muskel- og skjelettplager. Vårt mål er å gi studentene muligheten til å hjelpe sine kunder mer helhetlig, uten å måtte henvise videre til andre terapeuter. Ideelt sett ønsker vi at søkere har en akademisk bakgrunn innen helse eller trening, som idrettsvitenskap eller fysioterapi. Men er du en personlig trener med solid erfaring, kan dette studiet også passe perfekt for deg."
    },
    en: {
      q: "Who can apply for studies at NIHI, and is a specific background required?",
      a: "About 70% of our students are physiotherapists who wish to build further on their clinical competence. They see that our education provides the tools they need to become even better clinicians. At the same time, we attract many students with a background in sports science or personal training who want a specialized title and more competence to manage clients with musculoskeletal complaints. Our goal is to give students the opportunity to help their clients more holistically, without having to refer them to other therapists. Ideally, we want applicants to have an academic background in health or exercise, such as sports science or physiotherapy. However, if you are a personal trainer with solid experience, this program can also fit you perfectly."
    }
  },
  {
    no: {
      q: "Er undervisningen nettbasert eller stedbasert, og hvordan er timeplanen lagt opp?",
      a: "Vår utdanning kombinerer fleksibilitet og struktur. Undervisningen består av fem helgesamlinger (fredag til søndag) per semester, over to semestre. I tillegg får du tilgang til en omfattende nettportal som gir deg all nødvendig informasjon og materiale. Nettportalen oppdateres kontinuerlig med nye forelesninger for å gi både nåværende og tidligere studenter enda mer kunnskap. Hos NIHI forplikter vi oss til å bygge bro mellom fagfelt, og vi tilbyr våre studenter livslang tilgang til nettportalen, slik at du alltid kan holde deg oppdatert og videreutvikle din kompetanse."
    },
    en: {
      q: "Is the teaching online or campus-based, and how is the schedule structured?",
      a: "Our program combines flexibility and structure. The teaching consists of five weekend gatherings (Friday to Sunday) per semester, over two semesters. In addition, you get access to a comprehensive online portal providing all necessary information and material. The portal is updated continuously with new lectures to provide both current and former students with even more knowledge. At NIHI, we commit to building bridges between disciplines, and we offer our students lifelong access to the online portal, so you can always stay updated and develop your competence."
    }
  },
  {
    no: {
      q: "Hva slags jobbmuligheter får jeg etter fullført utdanning?",
      a: "De fleste av våre studenter jobber på private klinikker, treningssentre eller med idrettslag etter endt utdanning. De bruker sin spesialiserte kompetanse to å hjelpe mennesker med komplekse smerter, forbedre prestasjoner og bidra til en smertefri hverdag. Med vår utdanning får du det beste fra begge verdener: kompetanse innen prestasjonsfremmende trening og rehabilitering. Pensumet vårt inkluderer elementer hentet fra mastergradnivå fra ulike studier, slik at du er godt rustet til å jobbe med alt fra toppidrettsutøvere til klienter med kompliserte diagnoser."
    },
    en: {
      q: "What kind of job opportunities do I get after completing the education?",
      a: "Most of our graduates work in private clinics, training centers, or with sports teams after completing their education. They use their specialized competence to help people with complex pain, improve performance, and contribute to a pain-free everyday life. With our education, you get the best of both worlds: competence in performance-enhancing training and rehabilitation. Our curriculum includes elements drawn from master's degree levels across various studies, making you well-equipped to work with everything from elite athletes to clients with complicated diagnoses."
    }
  },
  {
    no: {
      q: "Tilbyr NIHI betalingsløsninger eller stipendordninger?",
      a: "I samarbeid med Svea Finans tilbyr vi rentefri nedbetaling over 6 måneder, med muligheter for å utvide nedbetalingstiden opptil 36 måneder. Når du skal studere med Norges idretts- og helseinstitutt, er det viktig å huske at studieavgiften til skolen må betales inn før studiestart, så dette gjør at du enten må ha oppsparte midler selv, eller søke om en nedbetalingsordning gjennom vår samarbeidspartner SVEA Finans. Svea gir deg muligheten til å dele opp betalingen rentefritt i opptil 6 måneder. Ønsker du en lengre nedbetalingstid, kan avtalen forlenges til inntil 36 måneder. Dette er et populært alternativ som gjør det enklere å melde seg på uten å måtte bruke av oppsparte midler. Viktig: SVEA Finans er et kredittselskap og vil alltid foreta en kredittvurdering når du søker om delbetaling. Dette innebærer at de henter inn informasjon om din - og eventuelt en medsøkers - økonomiske situasjon, inntekt og gjeldshistorikk. Dersom vurderingen oppfyller visse krav, får du innvilget rentefri delbetaling. Norges idretts- og helseinstitutt har ingen innflytelse på utfallet av denne vurderingen. Får du avslag på søknaden, anbefaler vi at du tar kontakt med SVEA Finans direkte - de har mulighet til å gjøre en manuell vurdering av søknaden din. For informasjon om dine nedbetalingsmuligheter hos SVEA Finans, følg linkene for å legge inn en søknad. Beløpet du søker om må være likt beløpet som står på fakturaen fra oss. Du kan kontakte Svea direkte på telefon 73930665 eller epost salgsfinans.no@svea.com."
    },
    en: {
      q: "Does NIHI offer payment plans or scholarship options?",
      a: "In collaboration with Svea Finans, we offer interest-free split payment options over 6 months, with the possibility to extend the payment period up to 36 months. When studying with the Norwegian Sports and Health Institute, please remember that the study fee must be paid before the program starts. This means you either need your own savings or can apply for a financing agreement through Svea Finans. Svea allows you to split the payment interest-free for up to 6 months. If you prefer a longer payment period, it can be extended up to 36 months. Note: Svea Finans is a credit institution and will perform a standard credit check. NIHI has no influence on the credit check outcome. If your application is rejected, we recommend contacting Svea Finans directly for a manual assessment. The amount you apply for must match the amount on your invoice from NIHI. You can contact Svea directly via phone at +47 73930665 or email at salgsfinans.no@svea.com."
    }
  },
  {
    no: {
      q: "Kan jeg søke forsikring etter endt utdanning?",
      a: "Ja, som terapeut kan du søke forsikring for å sikre deg mot tvister og krav når du tar imot pasienter, selv om du ikke er autorisert helsepersonell. Her er noen alternativer: 1. Forbundsmedlemskap: Mange alternative terapeuter velger å bli medlem i forbund som Norsk Massasjeforbund (NMF), Norges Landsforbund av Homøopraktikere (NLH), eller Norsk Forbund for Utøvere av Helhetsmedisin (NOFU). Disse forbundene tilbyr ofte ansvarsforsikring og juridisk støtte som dekker behovet for terapeuter uten autorisasjon. 2. Private ansvarsforsikringer: Du kan kontakte forsikringsselskaper direkte for å tegne en ansvarsforsikring som dekker behandlingene dine. Dette er en vanlig løsning for massører og andre alternative behandlere. 3. Register for utøvere av alternativ behandling: Registrering i Brønnøysundregistrene under Registeret for utøvere av alternativ behandling kan styrke din troverdighet som terapeut. Enkelte forbund og forsikringsselskaper kan kreve denne registreringen for å gi deg tilgang til deres forsikringstilbud."
    },
    en: {
      q: "Can I apply for insurance after completing the program?",
      a: "Yes, as a therapist you can apply for insurance to protect yourself against disputes and claims when receiving patients, even if you are not an authorized healthcare worker. Here are some alternatives: 1. Association Membership: Many therapists join associations such as the Norwegian Massage Association (NMF), the Norwegian Association of Homeopractitioners (NLH), or the Norwegian Association of Holistic Medicine Practitioners (NOFU). These associations often offer liability insurance and legal support. 2. Private Liability Insurances: You can contact insurance companies directly to sign up for liability insurance covering your treatments. This is a common solution for massage therapists and other alternative practitioners. 3. Alternative Practitioner Register: Registration in the Brønnøysund Registers under the Register of Practitioners of Alternative Treatment can strengthen your credibility. Some associations and insurers may require this registration for their offers."
    }
  }
];

// Single Accordion Item Component
function AccordionItem({
  question,
  answer,
  isOpen,
  onClick
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[var(--line)] py-4">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-2 text-left transition hover:text-[var(--accent)]"
      >
        <span className="font-display text-lg md:text-xl font-medium tracking-tight">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-[var(--ink-soft)] transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[var(--accent)]" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 pt-2 text-sm leading-relaxed text-[var(--ink-soft)] whitespace-pre-line">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MuskelterapeutPage() {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Program details page localization helper
  const getContent = () => {
    if (language === "no") {
      return {
        title: "Sertifisert Idretts- og Muskelterapeut",
        tagline: "Fra trener til terapeut på ett år",
        taglineSub: "Mestre vitenskapen bak rehabilitering og prestasjon med vårt sertifiseringsprogram i idretts- og muskelterapi.",
        desc: "Studiet kan tas 100 % nettbasert – uavhengig av hvor i verden du befinner deg.",
        ctaBook: "Søk studieplass",
        ctaPdf: "Moduler (PDF)",
        ctaSvea: "Finansiering",
        facultyTitle: "Innsikt fra våre fagfolk",
        studentTitle: "Studentene er kjernen i alt vi gjør",
        modulesTitle: "18 moduler i vårt sertifiserte program",
        priceTitle: "Studieavgift & Detaljer",
        priceFull: "Fullt program: 119.000 kr",
        priceSemester: "Per semester: 65.000 kr",
        startDate: "Studiestart: 29. august",
        faqTitle: "Ofte stilte spørsmål (FAQ)",
        formTitle: "Meld deg på studiene",
        formName: "Fornavn",
        formLastName: "Etternavn",
        formEmail: "E-post",
        formPhone: "Mobilnummer",
        formMsg: "Melding",
        formSubmit: "Send"
      };
    } else {
      return {
        title: "Certified Sports & Muscle Therapist",
        tagline: "From trainer to therapist in one year",
        taglineSub: "Master the science behind rehabilitation and performance with our sports & muscle therapy certification.",
        desc: "The program can be taken 100% online – regardless of where in the world you are.",
        ctaBook: "Apply for a Spot",
        ctaPdf: "Modules (PDF)",
        ctaSvea: "Financing Plans",
        facultyTitle: "Insights from Our Faculty Experts",
        studentTitle: "Students Are at the Heart of Everything We Do",
        modulesTitle: "18 Modules in Our Certified Program",
        priceTitle: "Tuition Fees & Details",
        priceFull: "Full Program: 119,000 NOK",
        priceSemester: "Per Semester: 65,000 NOK",
        startDate: "Program Start: August 29th",
        faqTitle: "Frequently Asked Questions (FAQ)",
        formTitle: "Enroll in the Program",
        formName: "First Name",
        formLastName: "Last Name",
        formEmail: "Email Address",
        formPhone: "Mobile Number",
        formMsg: "Message",
        formSubmit: "Send Application"
      };
    }
  };

  const text = getContent();

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pb-16 pt-12 md:pb-24 md:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(65% 50% at 20% 10%, rgba(15,159,144,0.08) 0%, transparent 60%), radial-gradient(50% 40% at 85% 20%, rgba(17,17,17,0.04) 0%, transparent 60%)",
          }}
        />

        <div className="mx-auto max-w-6xl">
          <p className="eyebrow mb-4">
            <span className="text-[var(--ink-faint)]">STUDIER /</span> {text.title}
          </p>
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <h1 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                {text.title}
              </h1>
              <p className="mt-5 max-w-2xl font-display text-2xl italic text-[var(--accent)]">
                {text.tagline}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--ink-soft)] md:text-base">
                {text.taglineSub}
              </p>
              <p className="mt-2 font-mono text-xs text-[var(--ink-faint)]">
                {text.desc}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:justify-end">
              <a
                href={siteInfo.calendly}
                target="_blank"
                className="flex items-center justify-center gap-1 whitespace-nowrap rounded-full bg-[var(--ink)] px-6 py-3 text-sm text-[var(--bg)] transition hover:bg-[var(--accent)] hover:text-white"
              >
                {text.ctaBook} <ArrowUpRight size={14} />
              </a>
              <a
                href="https://www.nihi.no/wp-content/uploads/2026/05/New-text-PDF.pdf"
                target="_blank"
                className="flex items-center justify-center gap-1 whitespace-nowrap rounded-full border border-[var(--ink)]/20 bg-white/40 px-6 py-3 text-sm transition hover:bg-white/80"
              >
                <BookOpen size={14} /> {text.ctaPdf}
              </a>
              <a
                href="https://www.nihi.no/finansiering-gjennom-svea/"
                target="_blank"
                className="flex items-center justify-center gap-1 whitespace-nowrap rounded-full border border-[var(--ink)]/10 bg-[var(--accent-soft)] px-6 py-3 text-sm text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white"
              >
                <CreditCard size={14} /> {text.ctaSvea}
              </a>
            </div>
          </div>

          {/* Hero Main Video Embed */}
          <div className="mt-12 md:mt-16 overflow-hidden rounded-[28px] border border-black/15 shadow-xl bg-black aspect-video max-w-4xl mx-auto">
            <video
              src="https://www.nihi.no/wp-content/uploads/2024/11/Simt-Promo-5.mp4"
              poster="https://www.nihi.no/wp-content/uploads/2024/11/thumbnail.webp"
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Faculty/Experts Testimonials */}
      <section className="bg-[var(--paper)] px-4 py-20 border-y border-[var(--line)]">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow mb-4 text-center">{text.facultyTitle}</p>
          <h2 className="font-display text-3xl tracking-tight text-center md:text-4xl mb-12">
            {text.facultyTitle}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <VideoCard
              src="https://www.nihi.no/wp-content/uploads/2024/11/Lang-2-Liggende.mp4"
              poster="https://www.nihi.no/wp-content/uploads/2024/12/Lang-2-Liggende.png"
              title={language === "no" ? "Innføring i praktiske undersøkelser" : "Introduction to Practical Exams"}
            />
            <VideoCard
              src="https://www.nihi.no/wp-content/uploads/2024/12/Lang-1-Liggende.mp4"
              poster="https://www.nihi.no/wp-content/uploads/2025/03/New-Lang-1-Liggende.png"
              title={language === "no" ? "Undervisning og biomekanisk utforskning" : "Instruction & Biomechanical Science"}
            />
          </div>
        </div>
      </section>

      {/* Section 3: Student Cases & Testimonials Grid */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow mb-4 text-center">STUDENTSTEMMER</p>
          <h2 className="font-display text-3xl tracking-tight text-center md:text-4xl mb-16">
            {text.studentTitle}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <VideoCard
              src="https://www.nihi.no/wp-content/uploads/2025/08/Sander.mp4"
              poster="https://www.nihi.no/wp-content/uploads/2025/08/Sander-Ronning.png"
              title={
                language === "no"
                  ? "Sander: 'Kurset er helhetlig med mange gode forelesninger og praktisk læring'"
                  : "Sander: 'The course is holistic with great lectures and practical training'"
              }
            />
            <VideoCard
              src="https://www.nihi.no/wp-content/uploads/2025/08/Lene-1.mp4"
              poster="https://www.nihi.no/wp-content/uploads/2025/08/Lene-1.png"
              title={
                language === "no"
                  ? "Lene: 'Gitt meg mye relevant faglig påfyll og praktisk erfaring'"
                  : "Lene: 'Has given me relevant professional input and practical experience'"
              }
            />
            <VideoCard
              src="https://www.nihi.no/wp-content/uploads/2025/08/Sander-Ronning.mp4"
              poster="https://www.nihi.no/wp-content/uploads/2025/08/Sander.png"
              title={
                language === "no"
                  ? "Sander Rønning: 'Spennende reise med mye nytt å lære om trening'"
                  : "Sander Rønning: 'Exciting journey with so much new to learn about training'"
              }
            />
            <VideoCard
              src="https://www.nihi.no/wp-content/uploads/2025/08/Algis-1.mp4"
              poster="https://www.nihi.no/wp-content/uploads/2025/08/Algis-1.png"
              title={
                language === "no"
                  ? "Gimantas: 'Lærer mye om behandling, diagnostikk og anatomi'"
                  : "Gimantas: 'Learning so much about treatment, diagnostics, and anatomy'"
              }
            />
            <VideoCard
              src="https://www.nihi.no/wp-content/uploads/2025/08/Gard1.mp4"
              poster="https://www.nihi.no/wp-content/uploads/2025/08/Gard1.png"
              title={
                language === "no"
                  ? "Gard: 'Nyttig kunnskap om mobilisering, smertebehandling og dry needling'"
                  : "Gard: 'Useful knowledge about mobilization, pain relief, and dry needling'"
              }
            />
            <VideoCard
              src="https://www.nihi.no/wp-content/uploads/2025/08/Whatsapp-Video-2024-11-26-At-00.03.36-9A42c77b.mp4"
              poster="https://www.nihi.no/wp-content/uploads/2025/08/Whatsapp-Video-2024-11-26-At-00.03.36-9A42c77b.png"
              title={
                language === "no"
                  ? "Martin Rønner: 'Satte stor pris på det praktiske og relevante studiet'"
                  : "Martin Rønner: 'Highly appreciated the practical and relevant curriculum'"
              }
            />
          </div>
        </div>
      </section>

      {/* Section 4: 18 Modules Section */}
      <section className="bg-[var(--paper)] px-4 py-24 border-y border-[var(--line)]">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-4 text-center">STUDIEPLAN</p>
          <h2 className="font-display text-3xl tracking-tight text-center md:text-4xl mb-6">
            {text.modulesTitle}
          </h2>
          <p className="text-center text-sm text-[var(--ink-soft)] max-w-xl mx-auto mb-16">
            {language === "no"
              ? "Utdanningen består av 18 moduler som gir deg en dyp, praktisk og tverrfaglig klinisk kompetanse for å jobbe med aktive mennesker."
              : "The program consists of 18 modules providing you with deep, practical, and cross-disciplinary clinical competence to work with active people."}
          </p>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {modulesData.map((m) => {
              const info = language === "no" ? m.no : m.en;
              return (
                <div
                  key={m.num}
                  className="flex flex-col overflow-hidden rounded-[20px] border border-black/5 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="aspect-[4/3] w-full bg-stone-100 overflow-hidden relative">
                    <Image
                      src={m.image}
                      alt={info.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white font-mono text-xs w-7 h-7 flex items-center justify-center rounded-full">
                      {String(m.num).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-lg tracking-tight text-[var(--ink)]">
                        {info.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-[var(--ink-soft)]">
                        {info.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Study details & Tuition card */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="glass rounded-[32px] p-8 md:p-12 shadow-lg border border-[var(--accent)]/15 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div>
              <span className="eyebrow text-[var(--accent)]">{text.priceTitle}</span>
              <h3 className="font-display text-2xl md:text-3xl mt-3 tracking-tight">
                {text.startDate}
              </h3>
              <p className="mt-2 text-sm text-[var(--ink-soft)] font-mono">
                {text.priceSemester} / {text.priceFull}
              </p>
            </div>
            <a
              href={siteInfo.calendly}
              target="_blank"
              className="flex items-center gap-1 whitespace-nowrap rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-medium text-white shadow-md transition hover:bg-[var(--accent-bright)] hover:text-[var(--ink)]"
            >
              {text.ctaBook} <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ Accordion */}
      <section className="bg-[var(--paper)] px-4 py-20 border-y border-[var(--line)]">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-4 text-center">{text.faqTitle}</p>
          <h2 className="font-display text-3xl tracking-tight text-center md:text-4xl mb-12">
            {text.faqTitle}
          </h2>

          <div className="mt-10 border-t border-[var(--line)] max-w-3xl mx-auto">
            {faqsData.map((faq, i) => {
              const info = language === "no" ? faq.no : faq.en;
              return (
                <AccordionItem
                  key={i}
                  question={info.q}
                  answer={info.a}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 7: Registration Form */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-xl">
          <div className="glass rounded-[32px] p-8 md:p-10 shadow-lg border border-black/5">
            <h2 className="font-display text-2xl tracking-tight mb-8 text-center">
              {text.formTitle}
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-mono text-[var(--ink-soft)] mb-2">
                    {text.formName}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-[var(--line)] bg-white/50 px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[var(--ink-soft)] mb-2">
                    {text.formLastName}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-[var(--line)] bg-white/50 px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-[var(--ink-soft)] mb-2">
                  {text.formEmail}
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-[var(--line)] bg-white/50 px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-[var(--ink-soft)] mb-2">
                  {text.formPhone}
                </label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-xl border border-[var(--line)] bg-white/50 px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-[var(--ink-soft)] mb-2">
                  {text.formMsg}
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-[var(--line)] bg-white/50 px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[var(--ink)] py-4 text-sm text-[var(--bg)] font-medium transition hover:bg-[var(--accent)] hover:text-white"
              >
                {text.formSubmit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Advisory section link */}
      <section className="px-4 pb-20 pt-10 border-t border-[var(--line)]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-2">STUDIEVEILEDNING</p>
          <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-4">
            {language === "no" ? "Snakk med fysioterapeut Victoria" : "Speak with Physiotherapist Victoria"}
          </h3>
          <p className="text-sm text-[var(--ink-soft)] max-w-xl mx-auto mb-8">
            {language === "no"
              ? "Klikk nedenfor for en gratis konsultasjon med vår studieveileder Victoria."
              : "Click below for a free consultation with our student advisor Victoria."}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:post@nihi.no"
              className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm text-[var(--ink-soft)] hover:bg-stone-50"
            >
              <Mail size={16} /> post@nihi.no
            </a>
            <a
              href="tel:+4798804092"
              className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm text-[var(--ink-soft)] hover:bg-stone-50"
            >
              <Phone size={16} /> +47 988 04 092
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
