import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Maximize2 } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES } from '../../data/projectsData';

export default function FeaturedProjectsSection({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.categoryKey === activeCategory);

  const itemsPerPage = 3;
  const maxPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePrev = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : maxPages - 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => (prev < maxPages - 1 ? prev + 1 : 0));
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#FAF9F6] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header inspired by BUILDORA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#00E2B7] bg-cyan-100/60 px-3 py-1 rounded-full border border-cyan-200">
              NOS RÉALISATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-900 font-['Outfit']">
              Projets <span className="font-serif italic text-[#16202C]">Emblématiques</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              Découvrez un aperçu de nos chantiers d'envergure, conçus et livrés avec les exigences techniques les plus strictes.
            </p>
          </div>

          {/* Slider Controls (< and >) like BUILDORA */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-slate-300 hover:border-[#00E2B7] bg-white hover:bg-slate-50 text-slate-700 hover:text-[#00E2B7] flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Projet précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-slate-300 hover:border-[#00E2B7] bg-white hover:bg-slate-50 text-slate-700 hover:text-[#00E2B7] flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Projet suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200/80">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setCurrentPage(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#16202C] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid (Buildora Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#00E2B7]/60 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
            >
              {/* Image Container with Zoom & Overlay */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.92]"
                />
                
                {/* Floating Specs Pill */}
                <div className="absolute top-4 left-4 bg-slate-950/70 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-white/10">
                  {project.category}
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <Maximize2 className="w-4 h-4 text-[#16202C]" />
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[12px] font-mono tracking-wider text-amber-200 bg-slate-950/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    {project.specs}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-[#00E2B7]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-['Outfit'] group-hover:text-[#00E2B7] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Footer specs / CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    Livré : <strong className="text-slate-800">{project.year}</strong>
                  </span>
                  
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#00E2B7] group-hover:text-[#16202C] transition-colors">
                    Dossier technique
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for all projects */}
        <div className="mt-14 text-center">
          <p className="text-xs text-slate-500 mb-3">
            Plus de 250 chantiers livrés dans le respect des normes internationales.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#16202C] hover:text-[#00E2B7] transition-colors underline underline-offset-4"
          >
            <span>Vous avez un projet similaire ? Parlons de votre cahier des charges</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
