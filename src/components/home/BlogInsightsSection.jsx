import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { NEWS_ARTICLES } from '../../data/newsData';

export default function BlogInsightsSection({ onSelectArticle }) {
  return (
    <section id="insights" className="py-20 lg:py-28 bg-[#FAF9F6] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Buildora "INSIGHTS & IDEAS / From Our Blog") */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#00E2B7] bg-cyan-100/60 px-3.5 py-1 rounded-full border border-cyan-200">
            INSIGHTS & ACTUALITÉS
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-slate-900 font-['Outfit']">
            Notre <span className="font-serif italic text-[#16202C]">Veille Technique</span> & Blog
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Analyses sectorielles, conseils d'ingénierie, innovations éco-durables et avancées de chantiers en direct.
          </p>
        </div>

        {/* Blog Cards Grid (Strictly inspired by BUILDORA layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#00E2B7]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
            >
              <div>
                {/* Image Container with Floating Date Box (Buildora Signature) */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 filter brightness-95"
                  />
                  
                  {/* Floating Date Badge (like BUILDORA's MAY 20 badge) */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md rounded-xl p-2 text-center shadow-md min-w-[50px]">
                    <span className="block text-[10px] uppercase font-bold text-slate-500 leading-none">
                      {article.month}
                    </span>
                    <span className="block text-base font-extrabold text-slate-900 font-['Outfit'] leading-tight">
                      {article.day}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 bg-slate-950/70 text-cyan-300 text-[10px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <Clock className="w-3 h-3 text-[#00E2B7]" />
                    <span>Lecture : {article.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-['Outfit'] group-hover:text-[#00E2B7] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link (like BUILDORA Read More ->) */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#00E2B7] group-hover:text-[#16202C] transition-colors">
                  <span>Lire l'article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
