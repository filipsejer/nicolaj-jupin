/* ============================================================
   ALT INDHOLD TIL PORTFOLIO OG "I GANG" BOR HER.
   Tilføj et nyt stykke: kopier en blok i PIECES, ret felterne,
   og læg fotos i assets/pieces/ (f.eks. assets/pieces/signetring-1.jpg).

   Alle stykker markeret med  placeholder: true  er PLADSHOLDERE
   og vises med et "Pladsholder"-mærke, indtil de er erstattet.
   ============================================================ */

/* Teknikkerne i "Færdighedsprotokollen" på forsiden, i visningsrækkefølge. */
window.TECHNIQUES = [
  { name: "Lodning",   desc: "Rene, næsten usynlige samlinger — fra fine kædeled til ringskinner." },
  { name: "Fatning",   desc: "Sten der sidder sikkert og smukt: kasse-, krap- og kornfatning." },
  { name: "Smedning",  desc: "Formgivning med hammer og ambolt; metallet skal føles levende." },
  { name: "Udsavning", desc: "Præcis savning og filning efter egen tegning." },
  { name: "Støbning",  desc: "Voksmodellering og støbning af former, der ikke kan bygges." },
  { name: "Gravering", desc: "Håndgravering af bogstaver og ornamenter." },
  { name: "Polering",  desc: "Højglans, mat eller børstet — overfladen er den sidste signatur." }
];

/* Færdige stykker. date = "ÅÅÅÅ-MM". images = stier fra sidens rod; tom liste viser en pladsholder. */
window.PIECES = [
  {
    id: "signetring",
    title: "Signetring",
    date: "2026-05",
    metal: "Sølv 925",
    weight: "18,2 g",
    hours: 22,
    techniques: ["Smedning", "Lodning", "Gravering", "Polering"],
    featured: true,
    images: [],
    text: "En klassisk signetring, smedet ud af én stang og loddet i skinnen. Monogrammet er håndgraveret i spejlvendt skrift, så den kan bruges som segl.",
    placeholder: true
  },
  {
    id: "cabochon-ring",
    title: "Ring med cabochon",
    date: "2026-02",
    metal: "Sølv 925 · labradorit",
    weight: "6,4 g",
    hours: 14,
    techniques: ["Fatning", "Lodning", "Polering"],
    featured: true,
    images: [],
    text: "Min første kassefatning. Kassen er bukket af 0,4 mm båndmateriale og trykket ind over stenen med fattehammer.",
    placeholder: true
  },
  {
    id: "ankerkaede",
    title: "Ankerkæde",
    date: "2026-03",
    metal: "Sølv 925",
    weight: "11,0 g",
    hours: 30,
    techniques: ["Lodning", "Polering"],
    featured: false,
    images: [],
    text: "112 håndbukkede led, hvert enkelt loddet. En øvelse i tålmodighed og ens mål.",
    placeholder: true
  },
  {
    id: "voksvedhaeng",
    title: "Voksstøbt vedhæng",
    date: "2025-10",
    metal: "Sølv 925",
    weight: "7,8 g",
    hours: 16,
    techniques: ["Støbning", "Polering"],
    featured: true,
    images: [],
    text: "Modelleret i blødt voks og støbt i sølv. Formen er inspireret af rullesten fra Nordkysten.",
    placeholder: true
  },
  {
    id: "hamrede-oreringe",
    title: "Hamrede øreringe",
    date: "2025-12",
    metal: "Sølv 925",
    weight: "4,1 g",
    hours: 8,
    techniques: ["Smedning", "Polering"],
    featured: false,
    images: [],
    text: "Et par øreringe med hamret overflade. Udfordringen var at få to stykker til at blive ens.",
    placeholder: true
  },
  {
    id: "udsavet-broche",
    title: "Udsavet broche",
    date: "2025-08",
    metal: "Messing · kobber",
    weight: "12,0 g",
    hours: 10,
    techniques: ["Udsavning", "Lodning"],
    featured: false,
    images: [],
    text: "Et mønster tegnet i hånden, savet ud i messing og lagt oven på en kobberplade.",
    placeholder: true
  },
  {
    id: "forste-ring",
    title: "Min første ring",
    date: "2025-05",
    metal: "Kobber",
    weight: "5,0 g",
    hours: 6,
    techniques: ["Udsavning", "Lodning", "Polering"],
    featured: false,
    images: [],
    text: "Her startede det. Loddet er for tykt og skinnen er ikke helt rund — og det er netop derfor, den er med.",
    placeholder: true
  }
];

/* Igangværende projekter. step = hvor langt projektet er (1–steps.length). */
window.WIP = [
  {
    id: "guldring",
    title: "Ring i 14 kt guld med fattet sten",
    started: "2026-08",
    metal: "Guld 585",
    steps: ["Skitse", "Skinne", "Fatning", "Finish", "Færdig"],
    step: 3,
    images: [],
    trying: "Første stykke i guld. Jeg arbejder med en krapfatning i fire kroner til en 5 mm sten.",
    wrong: "Første sæt kroner blev for tynde og bøjede under fatningen. Jeg har savet dem af og loddet nye i 1 mm tråd.",
    next: "Filing af sæder til stenen, derefter fatning og polering.",
    placeholder: true
  },
  {
    id: "dobbeltkaede",
    title: "Dobbeltkæde med egen lås",
    started: "2026-09",
    metal: "Sølv 925",
    steps: ["Skitse", "Led", "Lås", "Samling", "Færdig"],
    step: 2,
    images: [],
    trying: "At bygge både kæde og lås selv, så hele stykket er mit eget fra tråd til færdig.",
    wrong: "Leddene trak sig skævt ved lodning. Løsningen var en jig af stålstifter, der holder dem på plads.",
    next: "Tegne og bygge en kasselås med sikkerhedsbøjle.",
    placeholder: true
  }
];
