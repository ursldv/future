// Réalisations emblématiques de Future Buildings dans le style prestigieux de la maquette de référence

export const PROJECTS = [
  {
    id: "residence-palmeraie-luxe",
    title: "Résidence Hillside Palmeraie",
    category: "Résidentiel Haut Standing",
    categoryKey: "residentiel",
    specs: "Villa de Luxe • 4 800 m²",
    location: "Zone résidentielle privée",
    year: "2025 - 2026",
    duration: "14 mois",
    client: "Groupe Privé d'Investissement Immobilier",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDesc: "Propriété contemporaine d'architecte avec piscine à débordement, domotique totale, vitrages athermiques et intégration bioclimatique.",
    description: "Conception et réalisation clé en main d'une villa de maître aux lignes épurées. Les façades en béton blanc architectonique et bois composite dialoguent harmonieusement avec de vastes baies vitrées coulissantes motorisées.",
    challenge: "Terrain en forte déclivité nécessitant des travaux complexes de soutènement et d'ancrage en micro-pieux.",
    solution: "Modélisation géotechnique préalable par drone et terrassement chirurgical avec nos pelles hydrauliques longue portée.",
    metrics: [
      { label: "Surface bâtie", value: "4 800 m²" },
      { label: "Autonomie solaire", value: "65%" },
      { label: "Délai de livraison", value: "Respecté à 100%" }
    ],
    tags: ["Béton architectonique", "Domotique KNX", "Piscine miroir", "Éco-énergie"]
  },
  {
    id: "zenith-business-tower",
    title: "Zenith Business & Office Tower",
    category: "Bâtiment Tertiaire & Commercial",
    categoryKey: "commercial",
    specs: "Tour R+14 • 35 000 m²",
    location: "Quartier des Affaires / Plateau",
    year: "2024 - 2025",
    duration: "22 mois",
    client: "Consortium Bancaire & Financier Panafricain",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDesc: "Tour de bureaux futuriste à double peau vitrée ventilée, certification énergétique BREEAM et système CVC centralisé intelligent.",
    description: "Érection d'un symbole architectural moderne de 14 niveaux. Le bâtiment intègre une centrale de climatisation VRV multizone, un TGBT de 2500 kVA et un data center certifié Tier-3 pour les institutions bancaires occupantes.",
    challenge: "Emprise au sol très restreinte en plein cœur urbain avec flux de circulation denses.",
    solution: "Organisation logistique flux-tendu de nuit pour l'approvisionnement des toupies à béton et grue à tour automatisée.",
    metrics: [
      { label: "Bureaux connectés", value: "35 000 m²" },
      { label: "Parking sous-sol", value: "320 places" },
      { label: "Certification", value: "BREEAM Excellent" }
    ],
    tags: ["Façade rideau", "Climatisation VRV", "Sécurité Incendie SSI-1", "Contrôle d'accès"]
  },
  {
    id: "aurora-retail-complex",
    title: "Aurora Retail & Lifestyle Mall",
    category: "Commerce & Espaces Publics",
    categoryKey: "commercial",
    specs: "Centre Commercial • 22 000 m²",
    location: "Zone Économique Nord",
    year: "2024 - 2025",
    duration: "18 mois",
    client: "Fonds d'Aménagement Urbain",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDesc: "Complexe commercial avant-gardiste mêlant ossatures métalliques grandes portées, verrières zénithales et esplanades végétalisées.",
    description: "Destination shopping et loisirs intégrant 65 enseignes, un hypermarché et un pôle restauration. Fourniture complète des agrégats, voiries d'accès, éclairage solaire et réseaux hydrauliques.",
    challenge: "Grandes portées de charpentes métalliques sans piliers intermédiaires pour maximiser la visibilité commerciale.",
    solution: "Calculs de structures numériques avancés par éléments finis et charpentes treillis préfabriquées haute résistance.",
    metrics: [
      { label: "Enseignes", value: "65 boutiques" },
      { label: "Éclairage LED", value: "100% Solaire ext." },
      { label: "Capacité accueil", value: "12 000 pers/j" }
    ],
    tags: ["Charpente métallique", "Verrière zénithale", "Assainissement VRD", "Agrégats certifiés"]
  },
  {
    id: "voie-expresse-echangeur",
    title: "Voie Express Littorale & Échangeur Nord",
    category: "Travaux Publics & VRD",
    categoryKey: "tp-vrd",
    specs: "Infrastructures • 14,5 km de 2x2 voies",
    location: "Axe Routier Stratégique",
    year: "2023 - 2025",
    duration: "20 mois",
    client: "Direction Générale des Infrastructures Routières",
    image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDesc: "Aménagement d'une 2x2 voies avec échangeur dénivelé, caniveaux préfabriqués trapézoïdaux et éclairage public autonome.",
    description: "Mobilisation de plus de 30 engins lourds (bouteurs, compacteurs, pelles 30 tonnes, niveleuses motorisées). Terrassement de plus de 450 000 m³ de déblais/remblais et pose d'enrobé bitumineux dense.",
    challenge: "Zone marécageuse instable à très forte pluviométrie saisonnière.",
    solution: "Purge des sols compressibles, stabilisation à la chaux et mise en œuvre de géotextiles anti-contaminants et drains en épis.",
    metrics: [
      { label: "Linéaire routier", value: "14,5 km" },
      { label: "Concassés posés", value: "185 000 tonnes" },
      { label: "Engins déployés", value: "32 unités" }
    ],
    tags: ["VRD", "Terrassement lourd", "Enrobé bitumineux", "Ouvrages hydrauliques"]
  },
  {
    id: "parc-solaire-industriel",
    title: "Centrale Solaire & Ferme Photovoltaïque 5 MWc",
    category: "Énergies Renouvelables & Industrie",
    categoryKey: "energie",
    specs: "Centrale Solaire • 5 MWc / 40 000 m²",
    location: "Parc Industriel Agro-tech",
    year: "2024 - 2025",
    duration: "10 mois",
    client: "Groupe Industriel Agro-Export",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDesc: "Installation d'une centrale photovoltaïque au sol avec système de monitoring SCADA et stockage sur batteries pour usine de transformation.",
    description: "Conception électrique, ancrage des structures métalliques sur longrines béton, pose de 11 000 panneaux monocristallins bifaciaux et raccordement au poste moyenne tension 15 kV.",
    challenge: "Raccordement synchrone sans aucune interruption de la production de l'usine industrielle.",
    solution: "Bascule graduelle via automates programmables et synchroniseurs automatiques de groupes électrogènes.",
    metrics: [
      { label: "Puissance crête", value: "5 MWc" },
      { label: "Économie CO₂", value: "4 200 t/an" },
      { label: "Gain financier", value: "-55% facture" }
    ],
    tags: ["Énergie Solaire", "Poste MT/BT", "Onduleurs industriels", "SCADA"]
  },
  {
    id: "plateforme-logistique-froid",
    title: "Hub Logistique & Froid Industriel 12 000 m³",
    category: "Froid Industriel & Second Œuvre",
    categoryKey: "industrie",
    specs: "Entrepôt Frigorifique • 12 000 m³",
    location: "Zone Portuaire & Franche",
    year: "2025",
    duration: "11 mois",
    client: "Compagnie Maritime & Logistique Internationale",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    ],
    shortDesc: "Chambres froides industrielles à température dirigée (-25°C à +4°C), panneaux isothermes PIR et sols chauffants anti-gel.",
    description: "Construction de la halle métallique et équipement frigorifique de pointe à ammoniac/CO2, réseau RIA, système de désenfumage automatique et quais de déchargement niveleurs.",
    challenge: "Gestion stricte de la rupture de pont thermique et isolation cryogénique du dallage.",
    solution: "Mise en place de verre cellulaire isolant haute densité et système de ventilation réchauffée sous dalle.",
    metrics: [
      { label: "Volume froid", value: "12 000 m³" },
      { label: "Températures", value: "-25°C à +4°C" },
      { label: "Quais niveleurs", value: "8 quais motorisés" }
    ],
    tags: ["Froid industriel", "Panneaux sandwich", "Quais de chargement", "Sécurité incendie"]
  }
];

export const PROJECT_CATEGORIES = [
  { id: "all", label: "Toutes les Réalisations" },
  { id: "residentiel", label: "Bâtiment & Résidentiel" },
  { id: "commercial", label: "Tertiaire & Commercial" },
  { id: "tp-vrd", label: "Génie Civil & VRD" },
  { id: "energie", label: "Énergie & Solaire" },
  { id: "industrie", label: "Industrie & Froid" }
];
