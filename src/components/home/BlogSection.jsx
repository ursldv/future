import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function BlogSection({ onSelectArticle }) {
  const articles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80",
      date: "15 Nov",
      category: "Énergie",
      title: "Les Dernières Innovations en Énergie Solaire",
      excerpt: "Intégration photovoltaïque avancée, stockage sur batteries intelligentes et optimisation du rendement énergétique pour les bâtiments modernes.",
      author: "Équipe Technique FB",
      readTime: "4 min"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
      date: "08 Nov",
      category: "Sécurité",
      title: "Vidéosurveillance Intelligente : Tendances 2024",
      excerpt: "Découvrez l'apport de l'intelligence artificielle, des caméras thermiques et des réseaux sécurisés pour une protection périmétrique proactive.",
      author: "Pôle Courant Faible",
      readTime: "5 min"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
      date: "02 Nov",
      category: "Domotique",
      title: "La Maison Connectée : Guide Complet",
      excerpt: "Gestion automatisée de l'éclairage, contrôle d'accès biométrique et gestion technique du bâtiment pour conjuguer confort et sobriété.",
      author: "Ingénierie Smart Building",
      readTime: "6 min"
    }
  ];

  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#F4F7F6] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#009e7f] font-bold text-xs uppercase tracking-widest bg-[#00E2B7]/15 px-4 py-1.5 rounded-full border border-[#00E2B7]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E2B7]"></span>
            <span>NOTRE BLOG</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            Dernières Actualités
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Restez informés des avancées technologiques, des bonnes pratiques BTP et des innovations en génie électrique.
          </p>
        </div>

        {/* 3 Blog Cards (1 column on mobile, 3 columns on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle && onSelectArticle(article)}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image Container with Date Badge overlapping bottom-left */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 rounded-t-3xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    loading="lazy"
                  />
                  {/* Date badge overlapping image bottom-left */}
                  <div className="absolute bottom-3 left-4 bg-[#00E2B7] text-white font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 tracking-wide z-10">
                    <Calendar className="w-3.5 h-3.5 text-white" />
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  {/* Category Tag */}
                  <span className="text-xs font-bold text-[#009e7f] uppercase tracking-wider block">
                    {article.category}
                  </span>

                  {/* Title (max 2 lines) */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit'] line-clamp-2 leading-snug group-hover:text-[#009e7f] transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Action: 'Lire la suite →' */}
              <div className="p-6 sm:p-7 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs sm:text-sm font-bold text-[#009e7f] group-hover:text-[#00c49e] transition-colors">
                  <span>Lire la suite</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
