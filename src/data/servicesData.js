// Services et données officielles de Future Buildings
// Définition exhaustive des 7 pôles d'activités techniques et des sous-services spécialisés

export const CATEGORIES = [
  {
    id: 'etudes',
    label: 'Études Techniques',
    description: 'Ingénierie de conception, notes de calculs, dimensionnement et modélisation BIM de vos projets.'
  },
  {
    id: 'expertise',
    label: 'Expertise Technique',
    description: 'Audits réglementaires, diagnostics structurels et expertises pathologiques du bâti.'
  },
  {
    id: 'suivi',
    label: 'Suivi et Contrôle',
    description: 'Coordination et maîtrise d’œuvre, surveillance qualité rigoureuse et respect strict des plannings.'
  },
  {
    id: 'realisation',
    label: 'Réalisation',
    description: 'Construction générale tous corps d’état, gros œuvre et rénovation de bâtiments d’envergure.'
  },
  {
    id: 'genie-civil',
    label: 'Travaux Génie Civil',
    description: 'Terrassements, fondations spéciales, voiries et réseaux divers (VRD) et ouvrages d’art.'
  },
  {
    id: 'lots-techniques',
    label: 'Lots Techniques',
    description: 'Génie électrique courant fort, climatisation industrielle CVC, plomberie et énergies renouvelables.'
  },
  {
    id: 'courant-faible',
    label: 'Courant Faible',
    description: 'Sécurité électronique, réseaux informatiques, vidéoprotection, contrôle d’accès et GTB intelligente.'
  }
];

export const SERVICES = [
  // 1. ÉTUDES TECHNIQUES
  {
    id: 'etudes-techniques',
    title: 'Études Techniques & Ingénierie',
    subtitle: 'Conception technique, calculs de structures et modélisation BIM avancée',
    description: 'Future Buildings réalise des études techniques approfondies et pluridisciplinaires pour tout type de projet immobilier ou d’infrastructure. Nos ingénieurs conçoivent des plans d’exécution rigoureux, des notes de calculs conformes aux normes parasismiques et des maquettes BIM interactives. Nous vous accompagnons dès la phase d’esquisse jusqu’au dossier de consultation des entreprises.',
    shortDesc: 'Études de conception technique, calculs de structures béton armé et charpentes métalliques, modélisation BIM et plans d’exécution normés.',
    icon: 'FileText',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    category: 'etudes',
    officialName: 'Études Techniques & Ingénierie de Construction',
    features: [
      'Calculs de structures béton armé et charpentes métalliques',
      'Modélisation numérique 3D et intégration BIM niveau 3',
      'Études de faisabilité technico-économique et dimensionnement',
      'Élaboration des plans d’exécution et dossiers réglementaires'
    ],
    advantages: [
      'Calculs de structures béton armé et charpentes métalliques',
      'Modélisation numérique 3D et intégration BIM niveau 3',
      'Études de faisabilité technico-économique et dimensionnement',
      'Élaboration des plans d’exécution et dossiers réglementaires'
    ],
    applications: [
      'Bâtiments résidentiels de standing et tours de bureaux',
      'Ouvrages industriels et complexes logistiques',
      'Équipements publics et infrastructures de transport',
      'Réhabilitations et restructurations lourdes'
    ],
    technologies: ['Autodesk Revit & Robot', 'BIM 3D / 4D', 'Eurocodes & RPA']
  },

  // 2. EXPERTISE TECHNIQUE
  {
    id: 'expertise-technique',
    title: 'Expertise Technique & Diagnostic Bâtiment',
    subtitle: 'Audits de conformité, diagnostics structurels et bilans énergétiques',
    description: 'Nos experts indépendants réalisent des audits techniques précis pour évaluer la solidité, la durabilité et la conformité de vos installations. Nous diagnostiquons les pathologies de structures, analysons les désordres constructifs et préconisons des solutions curatives pérennes. Notre accompagnement d’expert garantit la sécurité de vos investissements immobiliers et industriels.',
    shortDesc: 'Audits de conformité, diagnostics structurels approfondis, analyses des pathologies du bâtiment et préconisations de renforcement pérennes.',
    icon: 'SearchCheck',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    category: 'expertise',
    officialName: 'Expertise Technique & Diagnostic des Bâtiments',
    features: [
      'Audit structurel complet et diagnostic des pathologies du bâti',
      'Contrôles non destructifs et auscultations d’ouvrages',
      'Expertise contradictoire et assistance aux litiges techniques',
      'Préconisations de renforcement et plans d’actions hiérarchisés'
    ],
    advantages: [
      'Audit structurel complet et diagnostic des pathologies du bâti',
      'Contrôles non destructifs et auscultations d’ouvrages',
      'Expertise contradictoire et assistance aux litiges techniques',
      'Préconisations de renforcement et plans d’actions hiérarchisés'
    ],
    applications: [
      'Évaluation préalable à l’achat ou à la cession d’actifs',
      'Diagnostic post-sinistre ou fissurations de façades',
      'Audits de conformité sécurité et accessibilité',
      'Valorisation et requalification de parcs immobiliers'
    ],
    technologies: ['Sclérométrie & Ultrasons', 'Thermographie Infrarouge', 'Capteurs de fissures IoT']
  },

  // 3. SUIVI ET CONTRÔLE
  {
    id: 'suivi-controle',
    title: 'Suivi, Contrôle & Maîtrise d’Œuvre',
    subtitle: 'Supervision rigoureuse de chantiers, conformité QHSE et respect des délais',
    description: 'Future Buildings assure la maîtrise d’œuvre et le suivi continu des chantiers pour garantir le respect strict du cahier des charges. Nous vérifions la conformité des matériaux mis en œuvre, le respect du séquençage des travaux et la stricte application des normes QHSE. Notre pilotage rigoureux optimise les coûts tout en garantissant une livraison sans réserve dans les délais fixés.',
    shortDesc: 'Supervision continue de chantier, contrôle qualité rigoureux des matériaux, ordonnancement et coordination sécurité QHSE.',
    icon: 'ClipboardCheck',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    category: 'suivi',
    officialName: 'Suivi et Contrôle de Projets & Coordination de Travaux',
    features: [
      'Surveillance quotidienne des travaux et visas des plans d’exécution',
      'Contrôle qualité des matériaux et réceptions intermédiaires d’ouvrages',
      'Gestion rigoureuse du planning (OPC) et reporting d’avancement continu',
      'Coordination de la sécurité chantier et respect strict des normes QHSE'
    ],
    advantages: [
      'Surveillance quotidienne des travaux et visas des plans d’exécution',
      'Contrôle qualité des matériaux et réceptions intermédiaires d’ouvrages',
      'Gestion rigoureuse du planning (OPC) et reporting d’avancement continu',
      'Coordination de la sécurité chantier et respect strict des normes QHSE'
    ],
    applications: [
      'Chantiers résidentiels, commerciaux et industriels',
      'Programmes d’aménagement urbain et voiries',
      'Projets sous marchés publics et investissements privés',
      'Opérations de maintenance et d’extension de sites en exploitation'
    ],
    technologies: ['Logiciels OPC & MS Project', 'Plateformes collaboratives Cloud', 'Contrôles QHSE ISO 45001']
  },

  // 4. RÉALISATION
  {
    id: 'realisation-projets',
    title: 'Réalisation & Construction Clé en Main',
    subtitle: 'Construction générale de bâtiments résidentiels, tertiaires et industriels',
    description: 'En qualité d’entreprise générale de construction, nous prenons en charge la réalisation complète de bâtiments neufs et la rénovation lourde d’édifices. Nous coordonnons l’ensemble des corps d’état avec une maîtrise technique reconnue et des méthodes constructives modernes. De la pose de la première pierre aux finitions d’excellence, nous bâtissons des ouvrages pérennes et durables.',
    shortDesc: 'Entreprise générale de construction clé en main, gros œuvre de haute technicité, coordination tous corps d’état et finitions soignées.',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    category: 'realisation',
    officialName: 'Réalisation de Travaux Tous Corps d’État & Bâtiment',
    features: [
      'Contractant général assurant la réalisation clé en main',
      'Gros œuvre de haute technicité et superstructures modernes',
      'Gestion coordonnée des corps d’état secondaires et finitions haut standing',
      'Engagement contractuel ferme sur les délais et garanties décennales'
    ],
    advantages: [
      'Contractant général assurant la réalisation clé en main',
      'Gros œuvre de haute technicité et superstructures modernes',
      'Gestion coordonnée des corps d’état secondaires et finitions haut standing',
      'Engagement contractuel ferme sur les délais et garanties décennales'
    ],
    applications: [
      'Villas et résidences de standing de grande hauteur',
      'Sièges sociaux d’entreprises et centres d’affaires',
      'Centres commerciaux, galeries marchandes et showrooms',
      'Usines, entrepôts et plateformes logistiques'
    ],
    technologies: ['Béton Haute Performance', 'Systèmes de coffrage rapide', 'Matériaux certifiés CE & ISO']
  },

  // 5. TRAVAUX GÉNIE CIVIL
  {
    id: 'travaux-genie-civil',
    title: 'Travaux de Génie Civil & VRD',
    subtitle: 'Infrastructures lourdes, fondations spéciales, voiries et réseaux divers',
    description: 'Nos équipes d’ingénieurs et techniciens réalisent des ouvrages de génie civil complexes répondant aux contraintes mécaniques les plus exigeantes. Nous intervenons sur les fondations spéciales, les terrassements de grande masse, les dallages industriels, les ponts et les réseaux d’assainissement. Notre parc moderne d’engins lourds assure une productivité élevée et une grande précision d’exécution.',
    shortDesc: 'Ouvrages d’art, fondations spéciales, terrassements de masse, voiries lourdes et réseaux d’assainissement pluvial et VRD.',
    icon: 'HardHat',
    image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1200&q=80',
    category: 'genie-civil',
    officialName: 'Travaux de Génie Civil, Voirie & Réseaux Divers',
    features: [
      'Terrassements de grande masse et soutènements complexes',
      'Fondations profondes, pieux forés et radiers généraux',
      'Voiries, réseaux divers (VRD) et assainissement pluvial',
      'Ouvrages d’art en béton armé et plateformes logistiques'
    ],
    advantages: [
      'Terrassements de grande masse et soutènements complexes',
      'Fondations profondes, pieux forés et radiers généraux',
      'Voiries, réseaux divers (VRD) et assainissement pluvial',
      'Ouvrages d’art en béton armé et plateformes logistiques'
    ],
    applications: [
      'Voies urbaines et interurbaines, échangeurs et carrefours',
      'Plateformes industrielles et parkings poids lourds',
      'Bassins de rétention et réseaux d’assainissement collectif',
      'Ponts, dalots et soutènements en béton armé'
    ],
    technologies: ['Nivellement GPS 3D', 'Compactage assisté par capteurs', 'Enrobés denses haute tenue']
  },

  // 6. LOTS TECHNIQUES
  {
    id: 'lots-techniques',
    title: 'Lots Techniques : CVC, Électricité & Fluides',
    subtitle: 'Installations électriques CFO, climatisation industrielle, plomberie et ventilation',
    description: 'Nous concevons et déployons l’ensemble des lots techniques indispensables au fonctionnement sécurisé et éco-énergétique des bâtiments. Nos prestations couvrent l’électricité moyenne et basse tension, la climatisation centralisée (VRV/DRV), la ventilation et la plomberie industrielle. Chaque installation est dimensionnée pour offrir un confort thermique parfait et une efficacité énergétique maximale.',
    shortDesc: 'Installations électriques MT/BT, postes de transformation, climatisation réversible VRV, plomberie industrielle et ventilation.',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    category: 'lots-techniques',
    officialName: 'Lots Techniques du Bâtiment & Génie Climatique',
    features: [
      'Distribution électrique Haute et Basse Tension (Postes HT/BT, TGBT)',
      'Systèmes de climatisation réversible, ventilation et traitement d’air',
      'Plomberie sanitaire, réseaux hydrauliques et fluides industriels',
      'Audit énergétique et optimisation des consommations du bâtiment'
    ],
    advantages: [
      'Distribution électrique Haute et Basse Tension (Postes HT/BT, TGBT)',
      'Systèmes de climatisation réversible, ventilation et traitement d’air',
      'Plomberie sanitaire, réseaux hydrauliques et fluides industriels',
      'Audit énergétique et optimisation des consommations du bâtiment'
    ],
    applications: [
      'Complexes hôteliers et résidences haut de gamme',
      'Immeubles de bureaux et centres d’appels',
      'Salles blanches, laboratoires et hôpitaux',
      'Chambres froides et entrepôts frigorifiques'
    ],
    technologies: ['Systèmes VRV / DRV Daikin & Carrier', 'TGBT Schneider Electric', 'GTC énergétique']
  },

  // 7. COURANT FAIBLE (9 SOUS-SERVICES SPÉCIALISÉS)
  {
    id: 'securite-incendie',
    title: 'Sécurité Incendie & Détection Automatique',
    subtitle: 'Systèmes de détection automatique, extinction et mise en sécurité (SSI)',
    description: 'Future Buildings installe des systèmes de sécurité incendie (SSI) de pointe conformes aux normes internationales les plus strictes. De la détection optique précoce de fumée aux centrales d’alarmes intelligentes et asservissements de désenfumage, nous protégeons vos occupants et vos biens. Nous réalisons l’étude, l’intégration, le raccordement et la maintenance continue de vos installations.',
    shortDesc: 'Centrales de détection incendie adressables, capteurs optiques et thermiques, asservissements de désenfumage et maintenance certifiée.',
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1585503418537-88331351ad99?auto=format&fit=crop&w=1200&q=80',
    category: 'courant-faible',
    officialName: 'Sécurité Incendie & Systèmes de Détection Incendie',
    features: [
      'Centrales de détection incendie adressables de dernière génération',
      'Détecteurs optiques, thermiques et barrières linéaires de fumée',
      'Asservissements de désenfumage, clapets coupe-feu et compartimentage',
      'Contrats de maintenance préventive et audits réglementaires périodiques'
    ],
    advantages: [
      'Centrales de détection incendie adressables de dernière génération',
      'Détecteurs optiques, thermiques et barrières linéaires de fumée',
      'Asservissements de désenfumage, clapets coupe-feu et compartimentage',
      'Contrats de maintenance préventive et audits réglementaires périodiques'
    ],
    applications: [
      'Établissements recevant du public (ERP)',
      'Immeubles de grande hauteur (IGH) et tours tertiaires',
      'Sites industriels et entrepôts de stockage',
      'Data centers et salles de serveurs sensibles'
    ],
    technologies: ['Systèmes SSI Catégorie A', 'Normes NFPA & EN 54', 'Détection laser précoce VESDA']
  },
  {
    id: 'videosurveillance',
    title: 'Vidéosurveillance & Vidéoprotection IP',
    subtitle: 'Caméras haute définition IP, enregistreurs NVR et analyse vidéo par IA',
    description: 'Nous déployons des solutions complètes de vidéoprotection numérique assurant une surveillance continue de vos locaux et chantiers. Nos caméras IP haute résolution intègrent la vision nocturne thermique et l’analyse intelligente des comportements par intelligence artificielle. Les flux vidéo sont consultables en direct et enregistrés sur des serveurs sécurisés accessibles à distance.',
    shortDesc: 'Caméras IP 4K, vision nocturne thermique, analyse vidéo intelligente par IA, stockage NVR sécurisé et consultation sur smartphone.',
    icon: 'Video',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
    category: 'courant-faible',
    officialName: 'Vidéosurveillance & Vidéoprotection Urbaine et Bâtiment',
    features: [
      'Caméras dôme et bullet 4K, dômes motorisés PTZ et caméras thermiques',
      'Reconnaissance de plaques minéralogiques (LPR) et détection périmétrique',
      'Enregistreurs NVR redondants haute capacité et stockage cloud chiffré',
      'Postes de supervision centralisée (PC Sécurité) et accès distant sur mobile'
    ],
    advantages: [
      'Caméras dôme et bullet 4K, dômes motorisés PTZ et caméras thermiques',
      'Reconnaissance de plaques minéralogiques (LPR) et détection périmétrique',
      'Enregistreurs NVR redondants haute capacité et stockage cloud chiffré',
      'Postes de supervision centralisée (PC Sécurité) et accès distant sur mobile'
    ],
    applications: [
      'Protection périmétrique de chantiers et sites industriels',
      'Surveillance d’immeubles de bureaux et centres commerciaux',
      'Banques, bijouteries et établissements financiers',
      'Contrôle d’accès de parkings et voiries privées'
    ],
    technologies: ['Capteurs 4K Ultra-HD', 'Analytique IA DeepinMind', 'Compression H.265+']
  },
  {
    id: 'controle-acces',
    title: 'Contrôle d’Accès & Gestion des Flux',
    subtitle: 'Badges RFID, biométrie, tourniquets et gestion horaire informatisée',
    description: 'Nos systèmes de contrôle d’accès garantissent un filtrage rigoureux des entrées pour préserver la sécurité de vos espaces sensibles. Grâce aux technologies de badges sans contact RFID, lecteurs biométriques et obstacles physiques motorisés, vous pilotez facilement les droits d’accès de votre personnel et des visiteurs. Une traçabilité intégrale des passages est enregistrée en temps réel.',
    shortDesc: 'Lecteurs RFID haute sécurité, biométrie faciale, tourniquets motorisés, logiciel de supervision et traçabilité temps réel.',
    icon: 'KeyRound',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    category: 'courant-faible',
    officialName: 'Contrôle d’Accès & Gestion des Accès Sécurisés',
    features: [
      'Lecteurs biométriques faciaux, digitaux et badges haute sécurité RFID',
      'Tourniquets tripodes, couloirs rapides motorisés et barrières levantes',
      'Logiciel centralisé de gestion des profils et planification des accès',
      'Interfaçage avec la gestion des temps de présence et la paie'
    ],
    advantages: [
      'Lecteurs biométriques faciaux, digitaux et badges haute sécurité RFID',
      'Tourniquets tripodes, couloirs rapides motorisés et barrières levantes',
      'Logiciel centralisé de gestion des profils et planification des accès',
      'Interfaçage avec la gestion des temps de présence et la paie'
    ],
    applications: [
      'Sièges d’entreprises et immeubles tertiaires partagés',
      'Sites industriels Seveso et zones de stockage sécurisées',
      'Établissements scolaires, universités et campus hospitaliers',
      'Aéroports, gares et plateformes logistiques'
    ],
    technologies: ['Badges Mifare DESFire EV3', 'Reconnaissance Faciale IA sans contact', 'Protocoles OSDP']
  },
  {
    id: 'alarme-intrusion',
    title: 'Systèmes d’Alarme & Détection d’Intrusion',
    subtitle: 'Détection périmétrique, barrières infrarouges et télésurveillance 24/7',
    description: 'Future Buildings conçoit des dispositifs de détection anti-intrusion fiables empêchant toute tentative de pénétration illicite dans vos locaux. Dotés de détecteurs infrarouges double technologie, de contacts d’ouverture magnétiques et de barrières micro-ondes extérieures, nos systèmes préviennent instantanément toute anomalie. En cas d’alerte, un signal immédiat est transmis vers votre PC sécurité ou centre de télésurveillance.',
    shortDesc: 'Centrales d’alarme certifiées NF&A2P, détecteurs infrarouges double technologie, barrières périmétriques et levée de doute photo.',
    icon: 'BellRing',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    category: 'courant-faible',
    officialName: 'Systèmes d’Alarme & de Détection d’Intrusion',
    features: [
      'Détecteurs volumétriques double technologie et détecteurs d’ouverture',
      'Protection périmétrique extérieure par barrières infrarouges actives',
      'Transmetteurs sécurisés multi-réseaux IP / 4G avec levée de doute photo',
      'Sirènes intérieures / extérieures haute puissance avec flash stroboscopique'
    ],
    advantages: [
      'Détecteurs volumétriques double technologie et détecteurs d’ouverture',
      'Protection périmétrique extérieure par barrières infrarouges actives',
      'Transmetteurs sécurisés multi-réseaux IP / 4G avec levée de doute photo',
      'Sirènes intérieures / extérieures haute puissance avec flash stroboscopique'
    ],
    applications: [
      'Villas privées de prestige et résidences fermées',
      'Bâtiments tertiaires, agences bancaires et commerces',
      'Hangars de stockage, parcs d’engins et dépôts de matériaux',
      'Infrastructures stratégiques et sites télécoms distants'
    ],
    technologies: ['Transmission IP / GSM multi-opérateurs', 'Certifications NF&A2P 3 boucliers', 'Détection volumétrique infrarouge']
  },
  {
    id: 'interphonie-visiophonie',
    title: 'Interphonie & Visiophonie IP',
    subtitle: 'Platines de rue anti-vandalisme, moniteurs tactiles et redirection smartphone',
    description: 'Nous fournissons et configurons des solutions de portier vidéo et d’interphonie sur protocole IP pour immeubles résidentiels et sièges sociaux. Les platines de rue robustes et anti-vandalisme garantissent une excellente communication audio et vidéo même en environnement bruyant. Les appels peuvent être reçus sur des moniteurs intérieurs haut de gamme ou directement transférés sur smartphones.',
    shortDesc: 'Platines de rue inox anti-vandalisme, vidéo HD grand angle, moniteurs tactiles d’appartement et renvoi d’appel sur smartphone.',
    icon: 'PhoneCall',
    image: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&q=80',
    category: 'courant-faible',
    officialName: 'Interphonie & Visiophonie IP Haute Définition',
    features: [
      'Platines de rue inox anti-vandalisme avec caméra grand angle HD',
      'Moniteurs tactiles intérieurs avec enregistrement d’images des visiteurs',
      'Connexion réseau IP native et transfert d’appels sur smartphone',
      'Déverrouillage à distance sécurisé de portails, portes et sas d’accès'
    ],
    advantages: [
      'Platines de rue inox anti-vandalisme avec caméra grand angle HD',
      'Moniteurs tactiles intérieurs avec enregistrement d’images des visiteurs',
      'Connexion réseau IP native et transfert d’appels sur smartphone',
      'Déverrouillage à distance sécurisé de portails, portes et sas d’accès'
    ],
    applications: [
      'Résidences collectives et lotissements résidentiels fermés',
      'Bureaux d’entreprises, réceptions et accueils de sièges sociaux',
      'Portails d’accès véhicules et entrées piétonnes sécurisées',
      'Bâtiments institutionnels et consulats'
    ],
    technologies: ['Protocoles SIP ouverts', 'Écrans tactiles capacitifs 7 à 10 pouces', 'Caméras CMOS Full HD']
  },
  {
    id: 'reseaux-cablage',
    title: 'Réseaux Informatiques & Câblage Structuré',
    subtitle: 'Câblage cuivre Cat 6A/7, fibre optique, baies de brassage et certification',
    description: 'Nous bâtissons l’infrastructure réseau passive et active au cœur de la connectivité et de la productivité de votre entreprise. Nos techniciens certifiés réalisent le déploiement de liaisons cuivre à haut débit, de dorsales en fibre optique et de baies informatiques ordonnées. Chaque liaison est testée et validée avec remise d’un rapport de certification aux normes internationales.',
    shortDesc: 'Déploiement de câblage cuivre Cat 6A/7, liaisons fibre optique monomode/multimode, baies de brassage et certification Fluke Networks.',
    icon: 'Network',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    category: 'courant-faible',
    officialName: 'Réseaux Informatiques & Câblage Structuré VDI',
    features: [
      'Câblage structuré en paires torsadées Catégories 6A, 7 et 8',
      'Liaisons dorsales et rocades en fibre optique monomode et multimode',
      'Aménagement complet de baies de brassage, répartiteurs et tiroirs optiques',
      'Tests de réflectométrie et recette certifiée avec certificateur Fluke'
    ],
    advantages: [
      'Câblage structuré en paires torsadées Catégories 6A, 7 et 8',
      'Liaisons dorsales et rocades en fibre optique monomode et multimode',
      'Aménagement complet de baies de brassage, répartiteurs et tiroirs optiques',
      'Tests de réflectométrie et recette certifiée avec certificateur Fluke'
    ],
    applications: [
      'Immeubles de bureaux et parcs tertiaires connectés',
      'Salles informatiques, serveurs et Data Centers',
      'Réseaux industriels pour usines et entrepôts',
      'Infrastructures hôtelières et complexes hospitaliers'
    ],
    technologies: ['Fibre OM3 / OM4 / OS2', 'Certificateur Fluke DSX-8000', 'Connectique blindée RJ45 Cat 6A STP']
  },
  {
    id: 'telephonie-communication',
    title: 'Téléphonie d’Entreprise & Systèmes de Communication',
    subtitle: 'Serveurs VoIP IPBX, communications unifiées et postes IP professionnels',
    description: 'Future Buildings modernise vos communications avec des solutions de téléphonie sur IP (VoIP) performantes, fiables et évolutives. Nos plateformes IPBX unifient vos appels, visioconférences, messageries instantanées et partages de fichiers sur une interface unique. Vos collaborateurs restent joignables en tout lieu avec la même ligne professionnelle, renforçant la collaboration.',
    shortDesc: 'Solutions de téléphonie VoIP et IPBX unifiées, postes fixes et sans fil DECT, intégration Trunk SIP et travail collaboratif.',
    icon: 'Phone',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    category: 'courant-faible',
    officialName: 'Téléphonie d’Entreprise & Systèmes de Communication',
    features: [
      'Installation et paramétrage de serveurs téléphoniques IPBX / VoIP',
      'Postes IP d’entreprise, combinés sans fil DECT et pieuvres de conférence',
      'Intégration d’outils de communications unifiées (vidéo, tchat, softphone)',
      'Trunk SIP optimisé réduisant significativement les coûts de télécommunication'
    ],
    advantages: [
      'Installation et paramétrage de serveurs téléphoniques IPBX / VoIP',
      'Postes IP d’entreprise, combinés sans fil DECT et pieuvres de conférence',
      'Intégration d’outils de communications unifiées (vidéo, tchat, softphone)',
      'Trunk SIP optimisé réduisant significativement les coûts de télécommunication'
    ],
    applications: [
      'Centres d’appels et plateaux de service client',
      'Entreprises multi-sites et réseaux d’agences',
      'Cabinets d’avocats, bureaux d’études et études notariales',
      'Hôtels et structures d’accueil touristique'
    ],
    technologies: ['Serveurs VoIP Asterisk / 3CX', 'Trunk SIP sécurisé TLS/SRTP', 'Postes Yealink & Grandstream']
  },
  {
    id: 'sonorisation-audiovisuel',
    title: 'Sonorisation & Systèmes Audiovisuels',
    subtitle: 'Sonorisation de sécurité et d’ambiance (EN 54), salles de conférence interactives',
    description: 'Nous équipons vos locaux de systèmes audio et audiovisuels professionnels répondant aux exigences de confort et d’urgence. De la sonorisation d’ambiance commerciale à la sonorisation de sécurité normée EN 54 pour évacuation vocale guidée, nous couvrons tous vos besoins. Nous concevons également des salles de conférences équipées d’écrans tactiles et systèmes de projection immersifs.',
    shortDesc: 'Sonorisation de confort et d’ambiance, évacuation vocale de sécurité normée EN 54, écrans géants et salles de conférence équipées.',
    icon: 'Volume2',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    category: 'courant-faible',
    officialName: 'Sonorisation & Systèmes Audiovisuels Professionnels',
    features: [
      'Sonorisation de sécurité et d’évacuation vocale certifiée EN 54-16',
      'Diffusion de musique d’ambiance multizone et annonces au micro',
      'Équipement complet de salles de conseil, visioconférence et auditorium',
      'Traitement acoustique et pilotage tactile centralisé des sources'
    ],
    advantages: [
      'Sonorisation de sécurité et d’évacuation vocale certifiée EN 54-16',
      'Diffusion de musique d’ambiance multizone et annonces au micro',
      'Équipement complet de salles de conseil, visioconférence et auditorium',
      'Traitement acoustique et pilotage tactile centralisé des sources'
    ],
    applications: [
      'Centres commerciaux et hypermarchés',
      'Gares, aéroports et pôles d’échanges multimodaux',
      'Salles de réunion, amphithéâtres et conseils d’administration',
      'Lieux de culte, complexes sportifs et salles polyvalentes'
    ],
    technologies: ['Norme d’évacuation vocale EN 54', 'Réseaux audio sur IP Dante', 'Amplificateurs matriciels Classe D']
  },
  {
    id: 'domotique-gtb',
    title: 'Domotique & Gestion Technique des Bâtiments (GTB)',
    subtitle: 'Supervision intelligente de l’énergie, CVC, éclairage et automatismes KNX',
    description: 'Transformez vos bâtiments en structures intelligentes, connectées et économes en énergie grâce à notre expertise en GTB et domotique. Nous centralisons le pilotage de l’éclairage, du chauffage, de la climatisation, des stores motorisés et de la sécurité sur des interfaces ergonomiques. La régulation automatique optimise les consommations tout en garantissant un confort d’usage optimal.',
    shortDesc: 'Gestion Technique du Bâtiment (GTB/GTC), automatisation KNX de l’éclairage et de la CVC, suivi des consommations et pilotage mobile.',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    category: 'courant-faible',
    officialName: 'Domotique & Gestion Technique des Bâtiments (GTB/GTC)',
    features: [
      'Supervision centralisée (BMS/GTB) sur protocole standard KNX, BACnet, Modbus',
      'Pilotage intelligent de la climatisation, de l’éclairage et des occultations',
      'Tableaux de bord énergétiques en temps réel et alertes prédictives',
      'Applications mobiles intuitives pour contrôle local ou à distance'
    ],
    advantages: [
      'Supervision centralisée (BMS/GTB) sur protocole standard KNX, BACnet, Modbus',
      'Pilotage intelligent de la climatisation, de l’éclairage et des occultations',
      'Tableaux de bord énergétiques en temps réel et alertes prédictives',
      'Applications mobiles intuitives pour contrôle local ou à distance'
    ],
    applications: [
      'Immeubles tertiaires et sièges sociaux modernes',
      'Villas et résidences de grand luxe domotisées',
      'Hôtels recherchant la maîtrise énergétique de chaque chambre',
      'Bâtiments hospitaliers et cliniques'
    ],
    technologies: ['Protocole mondial KNX', 'Supervision BACnet / IP', 'Capteurs de présence et d’ensoleillement DALI']
  }
];

export const companyInfo = {
  name: 'Future Buildings',
  slogan: 'We build the future buildings',
  phone: '+213 XX XX XX XX',
  email: 'contact@futurebuildings.dz',
  address: 'Alger, Algérie',
  workingHours: 'Dim - Jeu: 8h00 - 17h00',
  socialLinks: {
    facebook: '#',
    linkedin: '#',
    instagram: '#',
    twitter: '#'
  },
  stats: {
    yearsExperience: 15,
    projectsCompleted: 350,
    happyClients: 200,
    teamMembers: 45
  }
};

// Aliases pour compatibilité ascendante
export const COMPANY_INFO = companyInfo;
export const services = SERVICES;
export const defaultServices = SERVICES;

// Fonctions d'aide pour filtrer et rechercher les services
export const getServiceById = (id) => SERVICES.find((s) => s.id === id);
export const getServicesByCategory = (categoryId) => SERVICES.filter((s) => s.category === categoryId);
