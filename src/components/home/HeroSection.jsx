import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onOpenQuoteModal, onQuickBooking }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Études Techniques & Ingénierie',
    date: ''
  });

  const slides = [
    {
      id: 1,
      subtitle: 'VOTRE PARTENAIRE DE CONFIANCE',
      titlePart1: 'Études',
      titleHighlight: 'Techniques',
      titlePart2: '& Solutions',
      description: "Bureau d'études techniques, contrôle de qualité, travaux de génie civil et intégration de lots techniques à haute valeur ajoutée pour bâtir l'avenir avec rigueur.",
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
      badge: 'BTP & Ingénierie Certifiée'
    },
    {
      id: 2,
      subtitle: 'EXPERTISE & CONTRÔLE DE QUALITÉ',
      titlePart1: 'Génie Civil',
      titleHighlight: 'Techniques',
      titlePart2: '& Gros Œuvre',
      description: "Direction de chantiers, modélisation avancée et audits structurels garantissant la pérennité et la sécurité optimale de tous vos ouvrages.",
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80',
      badge: 'Normes & Rigueur Absolue'
    },
    {
      id: 3,
      subtitle: 'SÉCURITÉ & PERFORMANCE TECHNIQUE',
      titlePart1: 'Lots',
      titleHighlight: 'Techniques',
      titlePart2: '& Courant Faible',
      description: "Solutions intégrées de vidéosurveillance intelligente, contrôle d'accès biométrique, sécurité incendie et réseaux à très haute disponibilité.",
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
      badge: 'Haute Disponibilité'
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const currentSlide = slides[slideIndex];

  const handleNextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onQuickBooking) {
      onQuickBooking(formData);
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Études Techniques & Ingénierie',
        date: ''
      });
    }, 4000);
  };

  return (
    <section 
      id="home" 
      className="relative bg-[#0D1620] min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-20"
    >
      {/* Background Image Container with Overflow Hidden (isolated so booking bar can overlap section bottom) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          key={currentSlide.image}
          src={currentSlide.image}
          alt="Technicien et ingénieur Future Buildings"
          className="w-full h-full object-cover object-center transition-all duration-1000 ease-out filter brightness-[0.82] contrast-[1.08] scale-100"
        />

        {/* REPARO Signature Vignette: Dark gradient ONLY on the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1620] via-[#0D1620]/85 sm:via-[#0D1620]/75 to-transparent"></div>
        
        {/* Subtle vertical gradients for contrast balance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1620] via-transparent to-black/35"></div>
      </div>

      {/* Subtle Side Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrevSlide}
        aria-label="Diapositive précédente"
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#16202C]/60 hover:bg-[#00E2B7] text-white hover:text-[#16202C] border border-white/20 hover:border-[#00E2B7] backdrop-blur-md items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 shadow-xl"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={handleNextSlide}
        aria-label="Diapositive suivante"
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#16202C]/60 hover:bg-[#00E2B7] text-white hover:text-[#16202C] border border-white/20 hover:border-[#00E2B7] backdrop-blur-md items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 shadow-xl"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Main Content: Positioned on the LEFT side, vertically centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div 
          className={`max-w-2xl sm:max-w-3xl space-y-6 text-left transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* TEAL Uppercase Subtitle */}
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00E2B7] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#00E2B7] uppercase font-['Outfit']">
              {currentSlide.subtitle}
            </span>
          </div>

          {/* Main Title: Large White text with 'Techniques' highlighted in Teal */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-['Outfit'] text-white tracking-tight leading-[1.08]">
            {currentSlide.titlePart1}{' '}
            <span className="text-[#00E2B7] drop-shadow-sm">
              {currentSlide.titleHighlight}
            </span>
            <br />
            {currentSlide.titlePart2}
          </h1>

          {/* Description Paragraph: Light gray text, max-w-lg */}
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg font-normal font-['Plus_Jakarta_Sans']">
            {currentSlide.description}
          </p>

          {/* Two Pill-Shaped Buttons Side by Side */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* 1. Teal Filled Button */}
            <a
              href="#services"
              className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#16202C] bg-[#00E2B7] hover:bg-[#00c49e] shadow-lg shadow-[#00E2B7]/25 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer group"
            >
              <span>Découvrir nos services</span>
              <ArrowRight className="w-4 h-4 text-[#16202C] group-hover:translate-x-1 transition-transform" />
            </a>

            {/* 2. White Outline Button */}
            <a
              href="#about"
              className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white border-2 border-white hover:bg-white hover:text-[#16202C] shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer group"
            >
              <span>En savoir plus</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Slider Dots Indicator */}
          <div className="flex items-center gap-2 pt-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSlideIndex(idx)}
                aria-label={`Afficher la diapositive ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  slideIndex === idx
                    ? 'w-8 bg-[#00E2B7]'
                    : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* BOOKING / CONTACT FORM BAR: Positioned at bottom, overlapping bottom edge, aligned to LEFT */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 sm:mt-12">
        <div className="w-full max-w-[900px] translate-y-6 sm:translate-y-10 lg:translate-y-12">
          <div className="bg-[#00E2B7] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 shadow-2xl shadow-black/40 border border-[#00E2B7]/30">
            
            {submitted ? (
              <div className="py-4 text-center sm:text-left flex items-center gap-3 text-[#16202C]">
                <CheckCircle2 className="w-6 h-6 text-[#16202C] shrink-0" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base font-['Outfit']">Demande envoyée avec succès !</h4>
                  <p className="text-xs sm:text-sm text-[#16202C]/80">Nos ingénieurs et experts techniques vous recontactent sous 24h.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                
                {/* Row 1: Name input, Email input, Phone input */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label htmlFor="hero-name" className="sr-only">Votre Nom</label>
                    <input
                      id="hero-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Votre Nom *"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white rounded-full px-5 py-3 text-xs sm:text-sm text-slate-800 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#16202C] shadow-sm border-0 transition-shadow"
                    />
                  </div>

                  <div>
                    <label htmlFor="hero-email" className="sr-only">Votre Email</label>
                    <input
                      id="hero-email"
                      type="email"
                      name="email"
                      required
                      placeholder="Votre Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white rounded-full px-5 py-3 text-xs sm:text-sm text-slate-800 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#16202C] shadow-sm border-0 transition-shadow"
                    />
                  </div>

                  <div>
                    <label htmlFor="hero-phone" className="sr-only">Téléphone</label>
                    <input
                      id="hero-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="Téléphone / WhatsApp *"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white rounded-full px-5 py-3 text-xs sm:text-sm text-slate-800 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#16202C] shadow-sm border-0 transition-shadow"
                    />
                  </div>
                </div>

                {/* Row 2: Service dropdown, Date input, Submit button */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="relative">
                    <label htmlFor="hero-service" className="sr-only">Service souhaité</label>
                    <select
                      id="hero-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white rounded-full pl-5 pr-10 py-3 text-xs sm:text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#16202C] shadow-sm border-0 appearance-none cursor-pointer"
                    >
                      <option value="Études Techniques & Ingénierie">Études Techniques & Ingénierie</option>
                      <option value="Expertise & Audit Bâtiment">Expertise & Audit Bâtiment</option>
                      <option value="Suivi, Contrôle & Pilotage">Suivi, Contrôle & Pilotage</option>
                      <option value="Travaux Génie Civil & Gros Œuvre">Travaux Génie Civil</option>
                      <option value="Lots Techniques & Électricité">Lots Techniques & Électricité</option>
                      <option value="Courant Faible & Sécurité">Courant Faible & Sécurité</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  <div>
                    <label htmlFor="hero-date" className="sr-only">Date souhaitée</label>
                    <input
                      id="hero-date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-white rounded-full px-5 py-3 text-xs sm:text-sm text-slate-800 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#16202C] shadow-sm border-0 cursor-pointer"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#16202C] hover:bg-[#0D1620] text-white rounded-full px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98"
                    >
                      <span>Demander un devis</span>
                      <ArrowRight className="w-4 h-4 text-[#00E2B7]" />
                    </button>
                  </div>
                </div>

              </form>
            )}

          </div>
        </div>
      </div>

    </section>
  );
}
