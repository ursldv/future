import React from 'react';

/**
 * Composant de séparation par vagues organiques inspiré du design BUILDORA
 * Permet des transitions fluides et haut de gamme entre les sections sombres et claires
 */
export default function WaveDivider({ 
  fill = "#FAF9F6", 
  bg = "#071b2b", 
  inverted = false, 
  variant = "wave1",
  height = "h-16 md:h-24 lg:h-32"
}) {
  return (
    <div 
      className={`w-full overflow-hidden leading-none relative select-none pointer-events-none ${height}`}
      style={{ backgroundColor: bg }}
    >
      {variant === "wave1" && (
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full preserve-3d transition-transform ${inverted ? 'rotate-180' : ''}`}
          preserveAspectRatio="none"
        >
          <path 
            d="M0,32 C320,110 440,0 800,55 C1160,110 1320,20 1440,45 L1440,120 L0,120 Z" 
            fill={fill} 
          />
        </svg>
      )}

      {variant === "wave2" && (
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full preserve-3d transition-transform ${inverted ? 'rotate-180' : ''}`}
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 C280,10 480,95 820,40 C1140,-10 1340,80 1440,70 L1440,120 L0,120 Z" 
            fill={fill} 
          />
        </svg>
      )}

      {variant === "wave3" && (
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full preserve-3d transition-transform ${inverted ? 'rotate-180' : ''}`}
          preserveAspectRatio="none"
        >
          <path 
            d="M0,40 C340,90 560,15 920,65 C1220,105 1380,30 1440,40 L1440,120 L0,120 Z" 
            fill={fill} 
          />
        </svg>
      )}
    </div>
  );
}
