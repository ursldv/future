import React from 'react';
import { X, Clock, Share2, BookOpen } from 'lucide-react';

export default function ArticleModal({ article, onClose }) {
  if (!article) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      alert("Lien de l'article copié dans le presse-papier !");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07111A]/75 animate-in fade-in duration-200">
      <div 
        className="bg-[#0C1824] text-white w-full max-w-2xl max-h-[90vh] rounded-none border border-[#00E2B7]/40  overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/60 bg-[#07111A]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#00E2B7]/15 text-[#00E2B7] border border-[#00E2B7]/30">
              {article.category}
            </span>
            <span className="text-xs text-slate-400">
              {article.day} {article.month} {article.year}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          <div className="relative aspect-[16/9] rounded-none overflow-hidden bg-slate-900 border border-slate-700">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-2xl font-bold font-display text-white leading-tight">
            {article.title}
          </h3>

          <div className="flex items-center gap-4 text-xs text-slate-400 pb-4 border-b border-slate-700/60">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#00E2B7]" />
              Temps de lecture : {article.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              Rédaction : Bureau d'Études Future Buildings
            </span>
          </div>

          <div className="text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed">
            <p className="font-semibold text-slate-100 text-base">
              {article.excerpt}
            </p>
            <p>{article.content}</p>
            <p>
              Pour toute mise en œuvre de ces approches techniques sur vos propres projets, les équipes d'ingénierie de Future Buildings réalisent un audit préliminaire complet de vos sites. N'hésitez pas à nous solliciter pour un accompagnement sur-mesure.
            </p>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-slate-700/60 bg-[#07111A] flex items-center justify-between">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-[#00E2B7] transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>Partager cet article</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
