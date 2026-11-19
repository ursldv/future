// Catalogue d'Engins Lourds, Équipements Industriels et Matériaux de Construction
// Conforme au document "ACTIVITE EXERCEE" de Future Buildings

export const HEAVY_EQUIPMENT = [
  {
    id: "pelle-chenilles-30t",
    name: "Pelleteuse Hydraulique sur Chenilles 30T",
    brand: "Caterpillar / Komatsu",
    type: "Engin d'Excavation & Terrassement",
    capacity: "Godet 1.8 m³ - Portée max 10.6 m",
    image: "https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?auto=format&fit=crop&w=800&q=80",
    availability: "Location & Vente",
    specs: ["Moteur Turbo Diesel 210 kW", "Système de guidage GPS 3D", "Lignes auxiliaires pour BRH (Brise-Roche)"]
  },
  {
    id: "bulldozer-d8",
    name: "Bouteur / Bulldozer Lourd D8T",
    brand: "Caterpillar",
    type: "Engin de Nivellement & Décapage",
    capacity: "Lame SU 4.7 m³ - Scarificateur 3 dents",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80",
    availability: "Location avec Opérateur & Vente",
    specs: ["Puissance nette 271 kW", "Plaques de chenille haute résistance", "Cabine climatisée pressurisée"]
  },
  {
    id: "niveleuse-140m",
    name: "Niveleuse Motorisée 140M",
    brand: "Caterpillar",
    type: "Finition de Voirie & Profilage",
    capacity: "Lame 4.3 m orientable hydrauliquement",
    image: "https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?auto=format&fit=crop&w=800&q=80",
    availability: "Disponible Immédiatement",
    specs: ["Transmission Power Shift", "Système Cross Slope automatique", "Profilage millimétrique"]
  },
  {
    id: "centrale-beton-mobile",
    name: "Centrale à Béton Mobile Automatisée",
    brand: "Eurostar / Liebherr",
    type: "Production de Béton Prêt à l'Emploi",
    capacity: "Rendement 60 à 90 m³/heure",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80",
    availability: "Importation & Fourniture Directe",
    specs: ["Malaxeur double arbre planétaire", "Silos à ciment 60 tonnes intégrés", "Automate de pesage certifié NF"]
  }
];

export const RAW_MATERIALS = [
  {
    id: "sable-fluvial-lave",
    name: "Sable de Carrière & Fluvial Lavé",
    grain: "Granulométrie 0/2 et 0/4 mm",
    usage: "Bétons armés, mortiers de pose et enduits fins",
    density: "1.5 t/m³",
    certification: "Conforme Norme NF P 18-545",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80",
    unit: "En vrac par camion benne (20m³ / 30m³)"
  },
  {
    id: "gravillons-concasses-5-15",
    name: "Gravillons Concassés 5/15 & 15/25",
    grain: "Granulométrie 5/15 mm et 15/25 mm",
    usage: "Formulation des bétons structuraux, radiers et piliers",
    density: "1.4 t/m³",
    certification: "Granulats durs de roche massive (Los Angeles < 20)",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
    unit: "Livraison par tonne ou par voyage"
  },
  {
    id: "concasses-grave-0-31",
    name: "Grave Concassée 0/31.5 (GNT)",
    grain: "Granulométrie 0/31.5 mm non traitée",
    usage: "Couches de fondation et de base pour voirie et plateformes",
    density: "2.1 t/m³ compacté",
    certification: "Indice CBR > 80 sous 95% OPM",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
    unit: "Grand tonnage disponible sur stock carrières"
  },
  {
    id: "fers-beton-ha",
    name: "Aciers Haute Adhérence FE500",
    grain: "Diamètres 6mm à 32mm",
    usage: "Ferraillage de structures en béton armé, fondations et dalles",
    density: "Barres de 12 mètres standards",
    certification: "Certification AFCAB & CE",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    unit: "Au poids (fardeaux de 2 tonnes)"
  }
];
