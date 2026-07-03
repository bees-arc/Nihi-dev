export type Modul = {
  title: string;
  body: string;
};

export type Program = {
  slug: string;
  name: string;
  tagline: string;
  intro: string[];
  lecturer: string;
  learnings: string[];
  moduler: Modul[];
  whoFor: string[];
  career: string;
  execution: string;
  gatherings: string[];
  assessment: string[];
  price: string;
  start: string;
};

export const programs: Program[] = [
  {
    slug: "klinisk-idrettsmedisin",
    name: "Klinisk Idrettsmedisin",
    tagline:
      "A practical, cross-disciplinary, career-building education in the examination, treatment, and rehabilitation of sports injuries.",
    intro: [
      "Built for practitioners who want to work more precisely with active people — personal trainers, physiotherapists, osteopaths, naprapaths, chiropractors, manual therapists, or anyone with a relevant background in training, health, or movement. Unlike many sports-medicine programs that restrict entry to a single profession, this is an open, inclusive, cross-disciplinary education for anyone who wants to combine practical competence with solid theoretical grounding.",
      "You'll learn to manage acute and load-related injuries, run assessments and tests on athletes, and build effective rehabilitation pathways — interpreting clinical signs, adapting protocols, and understanding the full journey from injury to performance.",
      "Six subject modules, two in-person gatherings, and two interactive webinars give you close follow-up and hands-on teaching, working through real patient cases so you stand more confidently in front of active patients and athletes.",
    ],
    lecturer: "Manuel Alfaro, MSc",
    learnings: [
      "Manage acute and load-related injuries across their different phases",
      "Run relevant clinical tests and analyses for risk assessment",
      "Apply progression models in rehabilitation based on sport and individual",
      "Collaborate effectively with athletes, coaches, and healthcare professionals",
      "Prevent injuries and set up performance-enhancing measures",
      "Judge when an athlete is ready to return to sport",
    ],
    moduler: [
      {
        title: "Module 1 — Acute injuries and first response",
        body: "Recognize, assess, and manage acute injuries from the field to the clinic, working from modern acute-care principles built on the PEACE & LOVE framework. Covers sprains, muscle tears, contusions, and joint injuries, differential diagnosis, acute triage, and how to move quickly from severity assessment to appropriate action.",
      },
      {
        title: "Module 2 — Load injuries and long-term rehabilitation",
        body: "The mechanisms behind load-related injuries and how to build an effective, safe rehabilitation pathway. Covers tendinopathies, stress reactions, and overuse conditions, and how to weigh load history, training volume, and recovery capacity to tailor rehab by phase, symptom picture, and individual tolerance — including isometric, eccentric, and functional exercise progression.",
      },
      {
        title: "Module 3 — Testing and analysis of athletes",
        body: "Run relevant functional tests and capacity analyses across sports: screening tools, strength and mobility tests, power analysis, asymmetry assessment, and joint- and muscle-group-specific testing. Learn to interpret results, surface risk, and use the data to adjust training, monitor progress, and evaluate return to sport.",
      },
      {
        title: "Module 4 — Return to sport and performance readiness",
        body: "How to judge when an athlete is ready to return to sport and how to structure the path there — test-based criteria, training load, risk assessment, and the psychological factors that shape return. Covers common mistakes, relapse rates, and building programs that combine recovery, explosiveness, change of direction, and sport-specific demands.",
      },
      {
        title: "Module 5 — Rehabilitation in practice: case work",
        body: "Apply the theory to real patient cases across different sports and injury pictures, tailoring rehabilitation to context, sport, individual, and timeframe. Covers building care-pathway plans, defining goals, evaluating progress, and coaching the athlete through the process — physically and mentally.",
      },
      {
        title: "Module 6 — Cross-disciplinary collaboration and clinical decision-making",
        body: "Effective sports-medicine practice is largely collaborative. Learn to communicate and coordinate with doctors, physiotherapists, coaches, and parents within a joined-up care pathway, and to make informed clinical decisions from subjective findings, objective tests, and practical experience — including ethics, professional role understanding, and navigating uncertainty.",
      },
    ],
    whoFor: [
      "Works with athletes or active patients",
      "Wants more confidence with sports injuries and load-related issues",
      "Has a background in training, treatment, or movement science",
      "Wants to combine practical skill with theoretical depth",
      "Wants to strengthen cross-disciplinary, professional competence",
    ],
    career:
      "Strengthens your role working with athletes, clubs, treatment settings, and performance-focused clients — giving you a more complete understanding of injury, training, and rehabilitation, and readying you to work in teams with coaches, medical staff, and athletes. Applies directly in private practice, sports clubs, performance environments, or health promotion.",
    execution:
      "Six digital subject modules, two in-person weekend gatherings, and two interactive webinars. All theory is available on the digital learning platform, so you can study flexibly at your own pace.",
    gatherings: [
      "Gathering 1: Aug 30–31, Saturday–Sunday, 10:00–16:00",
      "Gathering 2: Nov 1–2, Saturday–Sunday, 10:00–16:00",
    ],
    assessment: [
      "Complete all six modules and related assignments",
      "Attend at least one in-person gathering and one webinar",
      "Submit written reflection assignments",
      "Submit a final case report with clinical assessment",
    ],
    price: "19,900 NOK",
    start: "Autumn 2026",
  },
  {
    slug: "sertifisert-coach-og-mentaltrener",
    name: "Sertifisert Coach og Mentaltrener",
    tagline:
      "A practice-oriented, academically grounded education in mental training, coaching, and performance psychology.",
    intro: [
      "Built for anyone who wants to help people build mental strength, create lasting change, and reach their full potential — whether you work with athletes, clients navigating lifestyle challenges, or people with complex pain conditions.",
      "A cross-disciplinary program grounded in performance psychology, coaching, behavior change, and neuroscience. You'll learn what drives thoughts, feelings, and behavior — and how to guide others toward greater mastery, resilience, and motivation.",
      "Fits anyone working with people in transition: sport, health, therapy, teaching, or leadership. You'll develop your own mental skills while learning to guide others in a professional, empathetic, and structured way.",
    ],
    lecturer: "Daniel Osen, MSc, PhD-student",
    learnings: [
      "Build mental resilience and emotional flexibility, in yourself and others",
      "Understand how thoughts, feelings, and habits shape behavior and performance",
      "Build trust, ask good questions, and lead meaningful development conversations",
      "Strengthen motivation and set goals people actually follow through on",
      "Use visualization, breathing, and focus techniques to manage stress and pressure",
      "Adapt coaching to different people — from performance to rehabilitation",
    ],
    moduler: [
      {
        title: "Module 1 — Introduction to sport psychology and mental training",
        body: "A foundational understanding of sport psychology and how mental training improves performance, covering the core psychological tools used to strengthen athletes in both training and competition.",
      },
      {
        title: "Module 2 — The coach–athlete alliance",
        body: "How a strong partnership between coach and athlete shapes performance — the role of trust, communication, and mutual understanding, and how to build it through strategies that support both sides.",
      },
      {
        title: "Module 3 — The goal-setting process",
        body: "How to set and work toward goals effectively, using goal-setting to motivate athletes, raise performance, and create clear direction over the short and long term.",
      },
      {
        title: "Module 4 — Attention",
        body: "Attention is a core component of performance. Techniques for sharpening focus, managing distraction, and training athletes to stay present — with real consequences for competition performance.",
      },
      {
        title: "Module 5 — Conversation technique",
        body: "Effective conversations are essential for growth and understanding between coach and athlete. Techniques for conversations that build trust, invite honest feedback, and drive positive change.",
      },
      {
        title: "Module 6 — Ethics in mental training",
        body: "Ethical questions in sport psychology and cognitive-behavioral approaches to mental training — respect, confidentiality, and professional integrity, and how to hold them in practice to keep the environment safe and supportive.",
      },
    ],
    whoFor: [
      "Coaches people in elite or grassroots sport",
      "Works as a teacher or supports young people in sport",
      "Wants a foundation to start an independent practice as a mental trainer",
      "Works with people navigating change, in health, therapy, or leadership",
    ],
    career:
      "Gives you valuable competence working with individuals and groups — meeting clients on a deeper psychological level, strengthening their motivation, and supporting lasting success in health, performance, lifestyle change, or rehabilitation. A clear edge as cross-disciplinary understanding becomes more in demand.",
    execution:
      "Six digital subject modules and two in-person weekend gatherings. All theory and teaching is on the online platform, so you can study flexibly at your own pace.",
    gatherings: [
      "Gathering 1: Oct 25–26, Saturday–Sunday, 10:00–16:00",
      "Gathering 2: Nov 29–30, Saturday–Sunday, 10:00–16:00",
    ],
    assessment: [
      "Complete all six modules and related assignments",
      "Attend both gatherings",
      "Pass a theoretical test",
      "Submit a written reflection assignment",
      "Pass a practical assessment conversation with a supervisor",
    ],
    price: "19,900 NOK",
    start: "Rolling — begin whenever suits you",
  },
  {
    slug: "sertifisert-kostholdsveileder",
    name: "Sertifisert Kostholdsveileder",
    tagline:
      "A practice-oriented, research-grounded education in nutrition, health, and performance.",
    intro: [
      "Built for anyone who wants to guide people toward better health, performance, and quality of life through food and conscious choices — personal trainers, therapists, teachers, guides, or coaches.",
      "Six subject modules, two in-person gatherings, and access to a digital learning platform give you grounding in nutritional physiology, performance nutrition, health, lifestyle, and communication.",
      "Learn to tailor nutrition to different life stages, needs, and challenges, and to guide people in a safe, empathetic, research-based way.",
    ],
    lecturer: "Sandra Brastein, MSc",
    learnings: [
      "How the body regulates and processes nutrients",
      "How diet affects health, pain, performance, and recovery",
      "How to adapt nutrition to different life stages and health conditions",
      "How to work with behavior change, communication, and guidance",
      "How to navigate diets, food trends, and critical nutrition information",
      "How to build a safe, professional, practice-oriented advisory role",
    ],
    moduler: [
      {
        title: "Module 1 — Nutritional physiology and nutrient function",
        body: "A solid grounding in how the body absorbs, regulates, and uses nutrients — energy needs, metabolism, and how carbohydrates, fat, and protein affect performance, hormone balance, and health, plus micronutrients, fluid balance, and immune and metabolic stability.",
      },
      {
        title: "Module 2 — Nutrition across life stages and individual needs",
        body: "How the body's nutritional needs shift from childhood to old age — adapting diet for pregnancy, growth, menopause, and illness, and how genetics, culture, lifestyle, and digestive issues factor in, including intolerances, allergies, and special needs.",
      },
      {
        title: "Module 3 — Performance nutrition and support for physical activity",
        body: "How nutrition is optimized for training and physical performance — energy intake, timing, recovery, and the specific needs of different sports and training forms, plus supplements and which products have documented effect.",
      },
      {
        title: "Module 4 — Nutrition as a tool in prevention and health promotion",
        body: "How diet shapes the development of lifestyle diseases such as obesity, metabolic syndrome, insulin resistance, and inflammatory conditions — using nutrition as a therapeutic and preventive tool through practice-oriented cases and individually tailored guidance.",
      },
      {
        title: "Module 5 — Guidance, communication, and professional practice",
        body: "How to build trust and rapport in advisory settings — motivational interviewing, communication styles, change psychology, and professional role understanding, with a focus on helping clients make lasting change through structured guidance processes.",
      },
      {
        title: "Module 6 — Current trends, food choices, and sustainability",
        body: "A critical look at popular diets and food trends and how they affect health and adherence — evaluating different dietary directions professionally, helping clients navigate a complex media landscape, and covering sustainability and clear, pedagogical communication of nutrition.",
      },
    ],
    whoFor: [
      "Works with people and wants to give better, safer nutrition advice",
      "Has a background as a personal trainer, therapist, coach, or health worker",
      "Guides people who want to perform better or improve their health",
      "Wants to use nutrition as part of treatment, training, or teaching",
    ],
    career:
      "Strengthens your competence as an advisor, therapist, trainer, or communicator — usable with athletes, people managing chronic conditions, health clients, schools, prevention work, or rehabilitation, and for anyone who wants to teach nutrition to groups.",
    execution:
      "Six digital subject modules and two in-person weekend gatherings. All theoretical content is on the digital learning platform, so you can study flexibly at your own pace.",
    gatherings: [
      "Gathering 1: Oct 11–12, Saturday–Sunday, 10:00–16:00",
      "Gathering 2: Nov 15–16, Saturday–Sunday, 10:00–16:00",
    ],
    assessment: [
      "Complete all six modules and assignments",
      "Attend at least one in-person gathering",
      "Submit a final assignment with case-based nutrition guidance",
    ],
    price: "19,900 NOK",
    start: "Autumn 2026",
  },
  {
    slug: "sertifisert-idretts-og-muskelterapeut",
    name: "Sertifisert Idretts- og Muskelterapeut",
    tagline:
      "Start your career as a certified sports and muscle therapist — an intensive, one-year education in Oslo.",
    intro: [
      "NIHI compresses the most practical and clinically relevant parts of physiotherapy, osteopathy, naprapathy, and sport science into one intensive one-year education, focused entirely on what you need to work with musculoskeletal conditions, rehabilitation, elite athletes, and complex patients.",
      "Around 70% of students are already physiotherapists building on their clinical competence; the rest typically come from sport science or personal training and want a specialized title and stronger tools for musculoskeletal clients. The aim throughout is to let you help clients more completely, without needing to refer them elsewhere.",
      "Teaching runs roughly 70% practical, 30% theoretical, and covers everything from foundational anatomy and physiology through functional testing, clinical strength training, manual therapy, and return-to-sport programming.",
    ],
    lecturer: "NIHI faculty team",
    learnings: [
      "Functional testing of athletes, including full movement analysis",
      "Joint mobilization technique and, for licensed clinicians, manipulation methods",
      "Neurological assessment for nerve-root and related presentations",
      "Athlete Preparation & Performance Coaching — capacity analysis and training planning",
      "Programming with periodization and progressive overload",
      "Rehabilitation protocols across injury and post-surgical phases",
    ],
    moduler: [
      {
        title: "Module — Anatomy",
        body: "An in-depth, detailed study of the structure of the human body from microscopic to macroscopic level — the skeletal system, muscular system, organ anatomy, and circulatory system — as a foundation for clinical reasoning.",
      },
      {
        title: "Module — Physiology",
        body: "One of the most thorough modules in the program, covering the body's biological and physiological processes in depth — essential grounding for any health practitioner.",
      },
      {
        title: "Module — Clinical strength training",
        body: "A deep module on training physiology, muscle physiology, and training principles, including periodization, progressive overload, and practical program design for athletes and rehabilitation clients alike.",
      },
      {
        title: "Module — Biomechanics and exercise selection",
        body: "How forces, lever arms, and axes of rotation affect training and exercise selection, giving you the physics behind why certain exercises optimally load certain muscles and joints.",
      },
      {
        title: "Module — Functional testing and NMFS movement analysis",
        body: "Deep, rigorous training in functional testing of athletes using NMFS Movement Analysis, a tool used by professional sports teams including top-division football clubs internationally.",
      },
      {
        title: "Module — Manual therapy and joint mobilization",
        body: "Functional, gentle joint mobilization technique, and — for licensed healthcare professionals — advanced manipulation methods with solid supporting documentation and modern explanatory mechanisms.",
      },
      {
        title: "Module — Neurological assessment",
        body: "How to carry out a thorough neurological work-up to identify and understand nerve-root involvement and other diagnoses where the nervous system is affected.",
      },
      {
        title: "Module — Rehabilitation and return to sport",
        body: "How to implement and adapt rehabilitation protocols across injuries and surgical procedures, build phase-by-phase progression plans, and design training that prepares athletes to return to sport stronger.",
      },
      {
        title: "Module — Athlete Preparation & Performance Coaching",
        body: "A newer, innovative module for anyone who wants to work purposefully with athletes — physical performance, capacity analysis, and targeted training planning that bridges sport science and practical coaching.",
      },
      {
        title: "Module — The therapeutic relationship",
        body: "Often the most underrated subject in the field, whether you're a therapist or trainer. Draws on principles from psychology, social and behavioral psychology, sport psychology, and mental training to help you create real impact with clients.",
      },
    ],
    whoFor: [
      "Physiotherapists who want to build on their clinical competence",
      "Sport science graduates or personal trainers seeking a specialized title",
      "Anyone with a health or training background who wants to work with complex, active clients",
      "Prefers clinical relevance over academic writing and general coursework",
    ],
    career:
      "Most graduates work in private clinics, training facilities, or with sports clubs, using specialized competence to help clients manage complex pain, improve performance, and move through daily life pain-free — combining performance-focused training with rehabilitation, drawing on master's-level material from multiple disciplines.",
    execution:
      "An intensive one-year, campus-based education in Oslo, combining practical clinical training with focused theory, plus lifelong access to the online portal to keep developing after graduation.",
    gatherings: [
      "Delivered as an intensive one-year, primarily in-person program in Oslo",
    ],
    assessment: [
      "Complete all course modules and assessments",
      "Demonstrate practical and clinical competence across modules",
      "Meet attendance requirements for in-person teaching",
    ],
    price: "Contact admissions for current pricing and payment plans",
    start: "See admissions for the next intake",
  },
];

export type Faculty = {
  name: string;
  slug: string;
  image: string;
};

export const faculty: Faculty[] = [
  { name: "Finn-Tore Camacho Bjørnsand", slug: "finn-tore-camacho-bjornsand", image: "https://www.nihi.no/wp-content/uploads/elementor/thumbs/finn-1-qx06oxp3omivlhm2mub8iaag63w2kbcm5lidf3nerg.webp" },
  { name: "Børge Fagerli", slug: "borge-fagerli", image: "https://www.nihi.no/wp-content/uploads/elementor/thumbs/borge-qx072ih6eh3zapw3cpl8iuy52gyxqx91csquyziovw.webp" },
  { name: "Øystein Dunker", slug: "oystein-dunker", image: "https://www.nihi.no/wp-content/uploads/elementor/thumbs/dunker-qx075968c2v35rwqce92ao1jfxgh754uqd8ud1gcqk.webp" },
  { name: "Per Øystein Tovsen", slug: "per-oystein-tovsen", image: "https://www.nihi.no/wp-content/uploads/elementor/thumbs/tovesan-qx0783mn10rcb9rwq4jecg6s6xfhi5flggcro78fwc.webp" },
  { name: "Anders Haakenstad", slug: "anders-haakenstad", image: "https://www.nihi.no/wp-content/uploads/elementor/thumbs/anders-qx07j81vwfzhp5m9rxmgun5592lul7l8zi9m42qq9o.webp" },
  { name: "Eirik Bjærke", slug: "eirik-bjaerke", image: "https://www.nihi.no/wp-content/uploads/elementor/thumbs/eririk-qx07jgiflyb2ln9zeja3z30aljg5ihiu0o4zfke6po.webp" },
  { name: "Sturla Hinnaland Stendal", slug: "sturla-hinnaland-stendal", image: "https://www.nihi.no/wp-content/uploads/elementor/thumbs/sturla-qx07jhg9ssccx98m91oqjkrr6xbiq6mkcssgwucsjg.webp" },
  { name: "Ove Sollie", slug: "dr-ove-sollie", image: "https://www.nihi.no/wp-content/uploads/elementor/thumbs/ove-qx07jhg9ssccx98m91oqjkrr6xbiq6mkcssgwucsjg.webp" },
  { name: "Daniel Osen", slug: "daniel-osen", image: "https://www.nihi.no/wp-content/uploads/elementor/thumbs/Daniel-Osen-r9j4d0sbmsm1l0g9ioizyfjdtl3u4ftkcuxtg40wos.jpg" },
  { name: "Martin Refalos", slug: "martin-refalo-phd", image: "https://www.nihi.no/wp-content/uploads/elementor/thumbs/01M-qyz2jh8wdkw9hcc0jns7j30grte5sp5parojdc7loc.webp" },
  { name: "Jarod Halls", slug: "jarod-hall-dpt", image: "https://www.nihi.no/wp-content/uploads/elementor/thumbs/02M-qyz2m46ljui81yi45atj0x20rqe8e4mlbtkkuaau7w.webp" },
  { name: "Sandra Brastein", slug: "sandra-brastein", image: "https://www.nihi.no/wp-content/uploads/elementor/thumbs/Sandra-Brastein-r9j3saggwc8dimkckpx7ynve5naecriou8yaeerhx8.jpg" },
];

export const whyNihi = [
  {
    title: "Health impact",
    body: "Our aim is to promote health and wellbeing. The education gives you the tools to improve your clients' quality of life and help reduce sick leave, with a focus on practical skills you can use directly in health work.",
  },
  {
    title: "Distinct career opportunities",
    body: "Graduate as a sought-after professional with skills that are highly valued in today's job market. Our programs open new, meaningful career paths built on competence that creates value for you and your future employers.",
  },
  {
    title: "Flexibility built around you",
    body: "NIHI combines online coursework with in-person gatherings, so you learn at your own pace wherever you are, and tailor your studies to fit your own life.",
  },
  {
    title: "Impact beyond the clinic",
    body: "We aim to contribute to a healthier society. Our programs support public health and an active lifestyle, raising the level of health competence in Norway.",
  },
  {
    title: "Cross-disciplinary focus",
    body: "NIHI brings together knowledge from different health and training disciplines for a broader understanding, giving students a more complete education and the ability to offer more effective treatment.",
  },
  {
    title: "A practical approach",
    body: "A practice-oriented approach that combines theory with clinical experience — a solid one-year education focused on what matters most for clinical work, open to every professional background.",
  },
];

export const testimonials = [
  {
    quote:
      "A professional, engaging place to build knowledge grounded in science, experience, clinical thinking, and innovation — the teaching draws every participant in, and I recommend it without reservation.",
    name: "Nora",
    role: "Physiotherapist",
  },
  {
    quote:
      "This certification covers ground I never got in my degree. I set out to learn as much as possible and feel ready for working life, and it delivered exactly that.",
    name: "Anna",
    role: "Physiotherapist",
  },
  {
    quote:
      "A varied program with real focus on practical exercises that left every participant better prepared for their first year in clinical practice.",
    name: "Trond",
    role: "Physiotherapist",
  },
  {
    quote:
      "Rewarding and motivating academically, while staying social and enjoyable — the teaching stayed focused on each person's own goals and questions, which I really valued.",
    name: "Selma",
    role: "Physiotherapist",
  },
];

export const siteInfo = {
  phone: "+47 988 04 092",
  email: "post@nihi.no",
  address: "Dronningens Gate 15, 0152 Oslo",
  instagram: "https://www.instagram.com/nihi.no/",
  calendly: "https://calendly.com/victoriapoljac/studieveiledning",
  studentPortal: "https://nihi.thinkific.com/users/sign_in",
};
