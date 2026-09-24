/* ============================================================
   ALT INDHOLD TIL PORTFOLIO OG "WIP" BOR HER.
   Tilføj et nyt stykke: kopier en blok i PIECES, ret felterne,
   og læg fotos i assets/pieces/ (f.eks. assets/pieces/signetring-1.jpg).

   missing: [...]  lister oplysninger, der mangler. Stykket vises med
   et "Info mangler"-mærke, indtil listen er tom (eller slettet).
   Alle stykker markeret med  placeholder: true  er PLADSHOLDERE.
   ============================================================ */

/* Teknikkerne i "Færdighedsprotokollen" på forsiden, i visningsrækkefølge. */
window.TECHNIQUES = [
  { name: "Lodning",          desc: "Rene, næsten usynlige samlinger — fra fine kædeled til ringskinner." },
  { name: "Indfatning",       desc: "Ædelsten der sidder sikkert og smukt i en fatning, jeg selv har bygget." },
  { name: "Kædefremstilling", desc: "Kæder bygget fra bunden: tråd, led, lodning og lås." },
  { name: "Trådtrækning",     desc: "Tråd trukket ned til præcis den dimension, stykket kræver." },
  { name: "Fletning",         desc: "Flettede metaller — mønstre, der kræver ens spænding hele vejen." },
  { name: "Valsning",         desc: "Plade og tråd valset til ensartet tykkelse." },
  { name: "Hamring",          desc: "Hamret overflade, slag for slag — tekstur der fanger lyset." },
  { name: "Udglødning",       desc: "Metallet blødgjort på det rigtige tidspunkt, så det kan formes uden at revne." },
  { name: "Teknisk tegning",  desc: "Egne designs tegnet op med mål, før der saves et eneste stykke." },
  { name: "Polering",         desc: "Højglans, mat eller børstet — overfladen er den sidste signatur." }
];

/* Færdige stykker. date = "ÅÅÅÅ-MM" (tom = "Dato følger"). images = stier fra sidens rod.
   weight og hours er valgfri — udelad dem, hvis de ikke kendes. */
window.PIECES = [
  {
    id: "flettet-ring-hjerte",
    title: "Flettet ring med hjerte",
    date: "",
    metal: "Sølv",
    techniques: ["Fletning", "Trådtrækning", "Lodning", "Polering"],
    featured: true,
    images: ["assets/pieces/flettet-ring-hjerte.jpg"],
    text: "En flettet midte af trukket tråd, lagt mellem to glatte skinner, med et hjerte loddet på forsiden. Fletningen fortsætter hele vejen rundt, også på indersiden.",
    missing: ["dato", "legering", "vægt", "timer", "Nicolajs egen beskrivelse"]
  },
  {
    id: "ring-nj-stempel",
    title: "Ring med facetkant",
    date: "",
    metal: "Sølv",
    techniques: ["Lodning", "Polering"],
    featured: true,
    images: ["assets/pieces/ring-nj-stempel.jpg"],
    text: "En glat ring med facetslebne kanter og børstet overflade. Indeni sidder mit stempel: NJ.",
    missing: ["dato", "legering", "vægt", "timer", "teknikker"]
  },
  {
    id: "hamrede-ringe",
    title: "Hamrede ringe, par",
    date: "",
    metal: "Sølv",
    techniques: ["Hamring", "Lodning", "Polering"],
    featured: true,
    images: ["assets/pieces/hamrede-ringe.jpg"],
    text: "To ringe med hamret overflade, fotograferet på bænken. Udfordringen ved et par er, at de skal blive ens.",
    missing: ["dato", "legering", "vægt", "timer"]
  },
  {
    id: "bred-ring",
    title: "Bred ring, børstet",
    date: "",
    metal: "Gult metal — bekræft",
    techniques: ["Lodning", "Polering"],
    featured: false,
    images: ["assets/pieces/bred-ring.jpg"],
    text: "En bred, flad ring med skarpe kanter og børstet finish.",
    missing: ["dato", "materiale", "vægt", "timer", "teknikker"]
  },
  {
    id: "blankpoleret-ring",
    title: "Blankpoleret ring",
    date: "",
    metal: "Gult metal — bekræft",
    techniques: ["Lodning", "Polering"],
    featured: false,
    images: ["assets/pieces/blankpoleret-ring.jpg"],
    text: "En afrundet ring poleret til højglans.",
    missing: ["dato", "materiale", "vægt", "timer", "teknikker", "skarpere foto"]
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
