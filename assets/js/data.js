/* ============================================================
   ALT INDHOLD TIL PORTFOLIO OG "I GANG" BOR HER.
   Tilføj et nyt stykke: kopier en blok i PIECES, ret felterne,
   og læg fotos i assets/pieces/ (f.eks. assets/pieces/signetring-1.jpg).

   Alle stykker markeret med  placeholder: true  er PLADSHOLDERE
   og vises med et "Pladsholder"-mærke, indtil de er erstattet.
   ============================================================ */

/* Teknikkerne i "Færdighedsprotokollen" på forsiden, i visningsrækkefølge. */
window.TECHNIQUES = [
  { name: "Lodning",          desc: "Rene, næsten usynlige samlinger — fra fine kædeled til ringskinner." },
  { name: "Indfatning",       desc: "Ædelsten der sidder sikkert og smukt i en fatning, jeg selv har bygget." },
  { name: "Kædefremstilling", desc: "Kæder bygget fra bunden: tråd, led, lodning og lås." },
  { name: "Trådtrækning",     desc: "Tråd trukket ned til præcis den dimension, stykket kræver." },
  { name: "Fletning",         desc: "Flettede metaller — mønstre, der kræver ens spænding hele vejen." },
  { name: "Valsning",         desc: "Plade og tråd valset til ensartet tykkelse." },
  { name: "Udglødning",       desc: "Metallet blødgjort på det rigtige tidspunkt, så det kan formes uden at revne." },
  { name: "Teknisk tegning",  desc: "Egne designs tegnet op med mål, før der saves et eneste stykke." },
  { name: "Polering",         desc: "Højglans, mat eller børstet — overfladen er den sidste signatur." }
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
    techniques: ["Teknisk tegning", "Valsning", "Lodning", "Polering"],
    featured: true,
    images: [],
    text: "En klassisk signetring, tegnet op med mål, valset og loddet i skinnen. Pladen er klar til gravering, når jeg lærer det på Grundforløb 2.",
    placeholder: true
  },
  {
    id: "cabochon-ring",
    title: "Ring med cabochon",
    date: "2026-02",
    metal: "Sølv 925 · labradorit",
    weight: "6,4 g",
    hours: 14,
    techniques: ["Indfatning", "Lodning", "Polering"],
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
    techniques: ["Kædefremstilling", "Trådtrækning", "Lodning", "Polering"],
    featured: false,
    images: [],
    text: "112 håndbukkede led, hvert enkelt loddet. En øvelse i tålmodighed og ens mål.",
    placeholder: true
  },
  {
    id: "flettet-armbaand",
    title: "Flettet armbånd",
    date: "2025-10",
    metal: "Sølv 925",
    weight: "7,8 g",
    hours: 16,
    techniques: ["Fletning", "Trådtrækning", "Udglødning", "Polering"],
    featured: true,
    images: [],
    text: "Fire tråde trukket til samme dimension og flettet i hånden. Udglødning undervejs holder metallet blødt nok til at flette jævnt.",
    placeholder: true
  },
  {
    id: "oreringe",
    title: "Øreringe i valset plade",
    date: "2025-12",
    metal: "Sølv 925",
    weight: "4,1 g",
    hours: 8,
    techniques: ["Valsning", "Udglødning", "Polering"],
    featured: false,
    images: [],
    text: "Et par øreringe i valset plade. Udfordringen var at få to stykker til at blive ens.",
    placeholder: true
  },
  {
    id: "udsavet-broche",
    title: "Udsavet broche",
    date: "2025-08",
    metal: "Messing · kobber",
    weight: "12,0 g",
    hours: 10,
    techniques: ["Teknisk tegning", "Lodning"],
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
    techniques: ["Lodning", "Polering"],
    featured: false,
    images: [],
    text: "Her startede det. Loddet er for tykt og skinnen er ikke helt rund — og det er netop derfor, den er med.",
    placeholder: true
  }
];

/* WIP-projekter. step = hvor langt projektet er (1–steps.length). */
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
