/* ============================================================
   ALT INDHOLD TIL PORTFOLIO OG "WIP" BOR HER.
   Tilføj et nyt stykke: kopier en blok i PIECES, ret felterne,
   og læg fotos i assets/pieces/ (f.eks. assets/pieces/signetring-1.jpg).
   Originalerne ligger i det private repo nicolaj-billeder.

   missing: [...]  lister oplysninger, der mangler. Stykket vises med
   et "Info mangler"-mærke, indtil listen er tom (eller slettet).
   Alle stykker markeret med  placeholder: true  er PLADSHOLDERE.
   ============================================================ */

/* Teknikkerne i "Færdighedsprotokollen" på forsiden, i visningsrækkefølge.
   En teknik vises kun, hvis mindst ét stykke bruger den. */
window.TECHNIQUES = [
  { name: "Fletning",         desc: "Flettede metaller — mønstre, der kræver ens spænding hele vejen." },
  { name: "Kædefremstilling", desc: "Kæder bygget fra bunden: konge-, dronning- og panserkæde." },
  { name: "Lodning",          desc: "Rene, næsten usynlige samlinger — fra fine kædeled til ringskinner." },
  { name: "Udsavning",        desc: "Præcis savning efter tegning — fra mønstre i messing til gennembrudte ringe." },
  { name: "Teknisk tegning",  desc: "Egne designs tegnet op med mål og materialer, før der saves et eneste stykke." },
  { name: "Gravering",        desc: "Håndgravering — de første øvelser med gravstikken." },
  { name: "Omsmeltning",     desc: "Rester og skrot smeltet om i diglen, så intet metal går til spilde." },
  { name: "Støbning",         desc: "Støbning af tene og plader — mit eget råmateriale, klar til at blive valset ud." },
  { name: "Valsning",         desc: "Plade og tråd valset til ensartet tykkelse." },
  { name: "Udglødning",       desc: "Metallet blødgjort på det rigtige tidspunkt, så det kan formes uden at revne." },
  { name: "Polering",         desc: "Højglans, mat eller børstet — overfladen er den sidste signatur." }
];

/* Kategorierne i portfolien, i visningsrækkefølge. Hvert stykke har en type herfra. */
window.TYPES = ["Ringe", "Halskæder", "Vedhæng", "Øvelser", "Tegninger"];

/* Færdige stykker, nyeste først. date = "ÅÅÅÅ-MM" — taget fra fotoets tidsstempel, ret hvis forkert.
   images = stier fra sidens rod; det første billede er forsidebilledet. */
window.PIECES = [
  {
    id: "halvrund-ring",
    type: "Ringe",
    title: "Halvrund ring",
    date: "2026-10",
    metal: "Sølv",
    techniques: ["Lodning", "Polering"],
    featured: false,
    images: ["assets/pieces/halvrund-ring-1.jpg", "assets/pieces/halvrund-ring-2.jpg", "assets/pieces/halvrund-ring-3.jpg", "assets/pieces/halvrund-ring-4.jpg"],
    text: "En klassisk halvrund ring, poleret til højglans, med mit NJ-stempel på indersiden.",
    missing: ["legering", "Nicolajs beskrivelse"]
  },
  {
    id: "ring-nj-stempel",
    type: "Ringe",
    title: "Ring med facetkant",
    date: "2026-09",
    metal: "Sølv",
    techniques: ["Lodning", "Polering"],
    featured: false,
    images: ["assets/pieces/ring-nj-stempel-1.jpg", "assets/pieces/ring-nj-stempel-2.jpg", "assets/pieces/ring-nj-stempel-3.jpg"],
    text: "En glat ring med facetslebne kanter og børstet overflade. Indeni sidder mit stempel: NJ.",
    missing: ["legering"]
  },
  {
    id: "blankpoleret-ring",
    type: "Ringe",
    title: "Blankpoleret ring",
    date: "2026-09",
    metal: "Messing",
    techniques: ["Lodning", "Polering"],
    featured: false,
    images: ["assets/pieces/blankpoleret-ring-1.jpg", "assets/pieces/blankpoleret-ring-2.jpg"],
    text: "En afrundet ring poleret til højglans, stemplet NJ på indersiden.",
    missing: []
  },
  {
    id: "hamrede-ringe",
    type: "Ringe",
    title: "Hamrede ringe, par",
    date: "2026-09",
    metal: "Sølv",
    techniques: ["Lodning", "Polering"],
    featured: false,
    images: ["assets/pieces/hamrede-ringe-1.jpg"],
    text: "To ringe med hamret overflade, fotograferet på bænken. Udfordringen ved et par er, at de skal blive ens.",
    missing: ["legering"]
  },
  {
    id: "bred-ring",
    type: "Ringe",
    title: "Bred ring, børstet",
    date: "2026-09",
    metal: "Messing",
    techniques: ["Lodning", "Polering"],
    featured: false,
    images: ["assets/pieces/bred-ring-1.jpg", "assets/pieces/bred-ring-2.jpg"],
    text: "En bred, flad ring med skarpe kanter og børstet finish.",
    missing: []
  },
  {
    id: "saveovelser",
    type: "Øvelser",
    title: "Saveøvelser i messing",
    date: "2026-08",
    metal: "Messing",
    techniques: ["Udsavning", "Teknisk tegning"],
    featured: false,
    images: ["assets/pieces/saveovelser-1.jpg", "assets/pieces/saveovelser-2.jpg", "assets/pieces/saveovelser-3.jpg", "assets/pieces/saveovelser-4.jpg", "assets/pieces/saveovelser-5.jpg", "assets/pieces/saveovelser-6.jpg", "assets/pieces/saveovelser-7.jpg", "assets/pieces/saveovelser-8.jpg"],
    text: "En serie saveøvelser: bølger, spiraler, en trekant, en blomst og en stjerne, savet ud af messingplade efter tegning. Hver øvelse er sværere end den forrige.",
    missing: ["bekræft: øvelser fra Grundforløb 2"]
  },
  {
    id: "flettet-ring-hjerte",
    type: "Ringe",
    title: "Flettet ring med hjerte",
    date: "2026-05",
    metal: "Sølv",
    techniques: ["Fletning", "Lodning", "Teknisk tegning", "Polering"],
    featured: true,
    images: ["assets/pieces/flettet-ring-hjerte-1.jpg", "assets/pieces/flettet-ring-hjerte-2.jpg", "assets/pieces/flettet-ring-hjerte-3.jpg"],
    text: "Tegnet op først, så bygget: en flettet midte af trukket tråd, lagt mellem to glatte skinner, med et hjerte loddet på forsiden. Fletningen fortsætter hele vejen rundt.",
    missing: ["legering", "Nicolajs beskrivelse"]
  },
  {
    id: "snorkfroeken",
    type: "Vedhæng",
    title: "Snorkfrøken, vedhæng",
    date: "2026-05",
    metal: "Sølv",
    techniques: ["Udsavning", "Polering"],
    featured: false,
    images: ["assets/pieces/snorkfroeken-1.jpg"],
    text: "Snorkfrøken fra Mumitroldene, savet ud af sølvplade og poleret.",
    missing: ["legering", "bedre foto"]
  },
  {
    id: "udsavet-ring",
    type: "Ringe",
    title: "Gennembrudt ring",
    date: "2026-04",
    metal: "Sølv — bekræft",
    techniques: ["Udsavning"],
    featured: false,
    images: ["assets/pieces/udsavet-ring-1.jpg"],
    text: "En bred ring med et organisk, gennembrudt mønster savet ud af pladen. Skyggen viser mønsteret.",
    missing: ["materiale", "Nicolajs beskrivelse"]
  },
  {
    id: "bolgeflettet-ring",
    type: "Ringe",
    title: "Bølgeflettet ring",
    date: "2026-03",
    metal: "Sølv",
    techniques: ["Fletning"],
    featured: false,
    images: ["assets/pieces/bolgeflettet-ring-1.jpg", "assets/pieces/bolgeflettet-ring-2.jpg"],
    text: "En åben ring flettet af flere tråde i et bølgende mønster.",
    missing: ["legering"]
  },
  {
    id: "kongekaede-solv",
    type: "Halskæder",
    title: "Kongekæde i sølv",
    date: "2026-02",
    metal: "Sølv",
    techniques: ["Kædefremstilling"],
    featured: true,
    images: ["assets/pieces/kongekaede-solv-1.jpg", "assets/pieces/kongekaede-solv-2.jpg", "assets/pieces/kongekaede-solv-3.jpg", "assets/pieces/kongekaede-solv-4.jpg"],
    text: "En halskæde i kongekæde, bygget fra bunden af hundredvis af små ringe. Første forsøg i november 2025, færdig halskæde i februar 2026.",
    missing: ["legering", "længde"]
  },
  {
    id: "bred-flettet-ring",
    type: "Ringe",
    title: "Ring til Malte Ebert",
    date: "2026-02",
    metal: "Sølv",
    techniques: ["Fletning", "Lodning", "Polering"],
    featured: true,
    images: ["assets/pieces/bred-flettet-ring-1.jpg", "assets/pieces/bred-flettet-ring-2.jpg", "assets/pieces/bred-flettet-ring-3.jpg", "assets/pieces/bred-flettet-ring-4.jpg", "assets/pieces/bred-flettet-ring-5.jpg", "assets/pieces/bred-flettet-ring-6.jpg"],
    text: "En bred ring med flettet midte, lavet til sangeren Malte Ebert. Tråden flettes først som en lang fletning, bøjes til en ring og loddes ind mellem to skinner. Billederne viser processen fra fletning til færdig ring i æsken.",
    missing: ["legering"]
  },
  {
    id: "ring-lyserod-sten",
    type: "Ringe",
    title: "Ring med lyserød sten",
    date: "2026-02",
    metal: "Sølv · lyserød cabochon",
    techniques: ["Lodning", "Polering"],
    featured: true,
    images: ["assets/pieces/ring-lyserod-sten-1.jpg", "assets/pieces/ring-lyserod-sten-2.jpg", "assets/pieces/ring-lyserod-sten-3.jpg", "assets/pieces/ring-lyserod-sten-4.jpg", "assets/pieces/ring-lyserod-sten-5.jpg", "assets/pieces/ring-lyserod-sten-6.jpg"],
    text: "En skinne af to bølgende tråde med en kassefatning til en oval cabochon. Fra den første organiske skinne i januar, over loddet fatning, til færdig ring i februar.",
    missing: ["sten", "legering"]
  },
  {
    id: "flettet-ring-2026",
    type: "Ringe",
    title: "Flettet sølvring",
    date: "2026-01",
    metal: "Sølv",
    techniques: ["Fletning"],
    featured: false,
    images: ["assets/pieces/flettet-ring-2026-1.jpg"],
    text: "En åben ring flettet tæt af mange tråde.",
    missing: ["legering"]
  },
  {
    id: "panserkaede",
    type: "Halskæder",
    title: "Panserkæde",
    date: "2026-01",
    metal: "Sølv",
    techniques: ["Kædefremstilling", "Lodning"],
    featured: false,
    images: ["assets/pieces/panserkaede-1.jpg", "assets/pieces/panserkaede-2.jpg", "assets/pieces/panserkaede-3.jpg"],
    text: "En panserkæde bygget led for led: ringene loddes, og kæden vrides og presses flad.",
    missing: ["legering", "længde"]
  },
  {
    id: "trad-bogstav",
    type: "Øvelser",
    title: "Bogstavet F i kobbertråd",
    date: "2025-12",
    metal: "Kobber",
    techniques: ["Trådarbejde"],
    featured: false,
    images: ["assets/pieces/trad-bogstav-1.jpg"],
    text: "Et bogstav bygget af bøjet kobbertråd i et tæt, labyrintisk mønster.",
    missing: ["Nicolajs beskrivelse"]
  },
  {
    id: "kantet-ring",
    type: "Ringe",
    title: "Kantet ring",
    date: "2025-11",
    metal: "Sølv",
    techniques: ["Udsavning", "Lodning"],
    featured: false,
    images: ["assets/pieces/kantet-ring-1.jpg", "assets/pieces/kantet-ring-2.jpg", "assets/pieces/kantet-ring-3.jpg"],
    text: "En firkantet ring savet ud af plade og loddet sammen. Delene ses på fillenaglen.",
    missing: ["legering"]
  },
  {
    id: "kongekaede-kobber",
    type: "Halskæder",
    title: "Kongekæde i kobber",
    date: "2025-11",
    metal: "Kobber",
    techniques: ["Kædefremstilling"],
    featured: false,
    images: ["assets/pieces/kongekaede-kobber-1.jpg"],
    text: "Øvelse i kongekæde i kobber, før jeg lavede den i sølv.",
    missing: []
  },
  {
    id: "flettet-solvring-2025",
    type: "Ringe",
    title: "Flettet ring med midterbånd",
    date: "2025-10",
    metal: "Sølv",
    techniques: ["Fletning", "Lodning"],
    featured: false,
    images: ["assets/pieces/flettet-solvring-2025-1.jpg"],
    text: "En åben, flettet ring samlet med et glat bånd på midten.",
    missing: ["legering"]
  },
  {
    id: "dronningekaede",
    type: "Halskæder",
    title: "Dronningekæde",
    date: "2025-10",
    metal: "Sølv · kobber",
    techniques: ["Kædefremstilling", "Fletning"],
    featured: false,
    images: ["assets/pieces/dronningekaede-1.jpg", "assets/pieces/dronningekaede-2.jpg"],
    text: "En dronningekæde under arbejde, ved siden af en flettet kobberring.",
    missing: ["legering"]
  },
  {
    id: "kobberflet-solvring",
    type: "Ringe",
    title: "Kobberfletning i sølvring",
    date: "2025-10",
    metal: "Kobber · sølv",
    techniques: ["Fletning", "Lodning"],
    featured: false,
    images: ["assets/pieces/kobberflet-solvring-1.jpg"],
    text: "En fletning af kobbertråd fanget mellem to sølvskinner, holdt sammen af små sølvbånd.",
    missing: ["legering"]
  },
  {
    id: "karmoisin-kaede",
    type: "Halskæder",
    title: "Karmoisinrød halskæde",
    date: "2025-10",
    metal: "Metal · sten — bekræft",
    techniques: ["Kædefremstilling"],
    featured: false,
    images: ["assets/pieces/karmoisin-kaede-1.jpg"],
    text: "En halskæde i ringkæde med mørkerøde og lilla dråber.",
    missing: ["materialer"]
  },
  {
    id: "sort-guld-saet",
    type: "Halskæder",
    title: "Sæt med sorte sten",
    date: "2025-02",
    metal: "Gult metal · sorte sten — bekræft",
    techniques: ["Montering"],
    featured: false,
    images: ["assets/pieces/sort-guld-saet-1.jpg"],
    text: "Et af mine allerførste sæt: halskæde og øreringe med sorte, facetterede sten.",
    missing: ["materialer"]
  },
  {
    id: "tegning-fatninger",
    type: "Tegninger",
    title: "Kassefatninger og ring",
    date: "2026-09",
    metal: "Blyant på papir",
    techniques: ["Teknisk tegning"],
    featured: false,
    images: ["assets/pieces/tegning-fatninger-1.jpg"],
    text: "Studier af kassefatninger set fra flere sider, og en ring med fatning tegnet i front- og sideprojektion.",
    missing: []
  },
  {
    id: "tegning-ornament",
    type: "Tegninger",
    title: "Ornament med dråbe",
    date: "2026-08",
    metal: "Blyant på papir",
    techniques: ["Teknisk tegning"],
    featured: false,
    images: ["assets/pieces/tegning-ornament-1.jpg", "assets/pieces/tegning-ornament-2.jpg"],
    text: "Et rundt ornament med en dråbe i midten og ranker hele vejen rundt, tegnet i hånden og fyldt op i sort.",
    missing: []
  },
  {
    id: "tegning-kors",
    type: "Tegninger",
    title: "Kors med sten",
    date: "2026-06",
    metal: "Blyant på papir",
    techniques: ["Teknisk tegning"],
    featured: false,
    images: ["assets/pieces/tegning-kors-1.jpg"],
    text: "Et kors med en række runde sten ned gennem midten og ud i armene.",
    missing: []
  },
  {
    id: "tegning-hjerte",
    type: "Tegninger",
    title: "Flettet ring med hjerte",
    date: "2026-05",
    metal: "Blyant på papir",
    techniques: ["Teknisk tegning"],
    featured: false,
    images: ["assets/pieces/flettet-ring-hjerte-2.jpg"],
    text: "Tegningen bag den færdige ring med hjerte: en fletning mellem to skinner med et hjerte i midten.",
    missing: []
  },
  {
    id: "tegning-fletmoenster-skinner",
    type: "Tegninger",
    title: "Fletmønster mellem skinner",
    date: "2026-05",
    metal: "Blyant på papir",
    techniques: ["Teknisk tegning"],
    featured: false,
    images: ["assets/pieces/tegning-fletmoenster-skinner-1.jpg"],
    text: "Et bredt fletmønster mellem to glatte skinner.",
    missing: []
  },
  {
    id: "tegning-ring-med-sten",
    type: "Tegninger",
    title: "Ring med sten, 2:1",
    date: "2026-04",
    metal: "Blyant på papir",
    techniques: ["Teknisk tegning"],
    featured: false,
    images: ["assets/pieces/tegning-ring-med-sten-1.jpg"],
    text: "En ring med flettede sider og en rektangulær sten, tegnet i dobbelt størrelse.",
    missing: []
  },
  {
    id: "tegning-krapfatning",
    type: "Tegninger",
    title: "Teknisk tegning: ring med krapfatning",
    date: "2026-04",
    metal: "Blyant på papir",
    techniques: ["Teknisk tegning"],
    featured: false,
    images: ["assets/pieces/tegning-krapfatning-1.jpg"],
    text: "Teknisk tegning i flere projektioner med materialeliste: sølv 925, en 8 mm sort smaragd og to lilla 2 mm sten.",
    missing: []
  },
  {
    id: "tegning-fletmoenster-snoet",
    type: "Tegninger",
    title: "Fletmønster med snoet tråd",
    date: "2026-04",
    metal: "Blyant på papir",
    techniques: ["Teknisk tegning"],
    featured: false,
    images: ["assets/pieces/tegning-fletmoenster-snoet-1.jpg"],
    text: "Et fletmønster hvor to snoede tråde krydser hinanden mellem to skinner.",
    missing: []
  },
  {
    id: "skitse-flettet-ring-oval",
    type: "Tegninger",
    title: "Skitse: flettet ring med oval sten",
    date: "2026-03",
    metal: "Blyant på papir",
    techniques: ["Teknisk tegning"],
    featured: false,
    images: ["assets/pieces/skitse-flettet-ring-oval-1.jpg"],
    text: "En skitse af en flettet ring med en oval sten, med detaljer af fletningen øverst.",
    missing: []
  },
  {
    id: "omsmeltning",
    type: "Øvelser",
    title: "Omsmeltning og støbning af ten",
    date: "2026-05",
    metal: "Sølv — bekræft",
    techniques: ["Omsmeltning", "Støbning"],
    featured: false,
    images: ["assets/pieces/omsmeltning-1.jpg", "assets/pieces/omsmeltning-2.jpg", "assets/pieces/omsmeltning-3.jpg"],
    text: "Rester og skrot smeltes om i diglen og støbes til en ten, som derefter kan valses ud til tråd og plade. Ved siden af ligger den flettede ring med hjerte.",
    missing: ["materiale: er den gyldne ten messing?"]
  }
];

/* WIP-projekter. step = hvor langt projektet er (1–steps.length). Tomme noter vises ikke. */
window.WIP = [
  {
    id: "cad",
    title: "Ringdesign i Rhino",
    started: "2026-09",
    metal: "3D-model",
    steps: ["Grundformer", "Signetring", "Alliancering", "Egne designs"],
    step: 3,
    images: ["assets/pieces/cad-1.jpg", "assets/pieces/cad-2.jpg"],
    trying: "Jeg lærer at designe ringe i Rhino: en signetring og en alliancering med sten hele vejen rundt. Det giver mig et præcist design at arbejde efter ved bænken.",
    wrong: "",
    next: "",
    missing: ["næste skridt"]
  }
];
