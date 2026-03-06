import { useState } from 'react';

export default function PhotoFrame({ show }) {
  // Estado para saber si la imagen ya descargó por completo
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    // Aparece un poco después de que la carta sube (delay-500)
    <div className={`relative w-36 h-36 mx-auto mt-2 mb-4 transition-all duration-1000 delay-500 ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
      
      {/* CONTENEDOR DE LA IMAGEN */}
      <div className="w-full h-full rounded-xl overflow-hidden relative bg-rose-100 flex items-center justify-center shadow-md z-10">
        
        {/* Cargador: Se muestra latiendo mientras la imagen se descarga en Vercel */}
        {!isLoaded && <span className="animate-pulse text-2xl drop-shadow-md">⏳</span>}
        
        {/* La foto: Solo se hace visible cuando isLoaded es true */}
        <img 
          src="/foto.jpg" // Vercel leerá esto directamente de tu carpeta public/
          alt="Nosotros" 
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      {/* MARCO DE FLORES ANIMADO (SVG) */}
      <svg viewBox="0 0 160 160" className="absolute -top-3 -left-3 w-[calc(100%+24px)] h-[calc(100%+24px)] pointer-events-none z-20 overflow-visible">
        <defs>
          <style>
            {`
              .frame-line { stroke-dasharray: 600; stroke-dashoffset: 600; transition: stroke-dashoffset 2s ease-in-out 1s; }
              .frame-line.show { stroke-dashoffset: 0; }
              .frame-flower { opacity: 0; transform: scale(0); transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); transform-origin: center; }
              .frame-flower.show { opacity: 1; transform: scale(1); }
            `}
          </style>

          {/* Molde de la Margarita */}
          <g id="frame-daisy">
            <g fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5">
              <ellipse rx="3.5" ry="12" transform="rotate(0)"/>
              <ellipse rx="3.5" ry="12" transform="rotate(45)"/>
              <ellipse rx="3.5" ry="12" transform="rotate(90)"/>
              <ellipse rx="3.5" ry="12" transform="rotate(135)"/>
            </g>
            <circle r="4" fill="#facc15"/>
          </g>
        </defs>

        {/* La enredadera que dibuja el marco */}
        <rect x="8" y="8" width="144" height="144" rx="16" fill="none" stroke="#22c55e" strokeWidth="2.5" className={`frame-line ${show ? 'show' : ''}`} />

        {/* 4 Margaritas en las esquinas que brotan cuando el marco termina de dibujarse */}
        <g transform="translate(8, 8)">
          <use href="#frame-daisy" className={`frame-flower ${show ? 'show' : ''}`} style={{ transitionDelay: '2.5s' }} />
        </g>
        <g transform="translate(152, 8)">
          <use href="#frame-daisy" className={`frame-flower ${show ? 'show' : ''}`} style={{ transitionDelay: '2.7s' }} />
        </g>
        <g transform="translate(8, 152)">
          <use href="#frame-daisy" className={`frame-flower ${show ? 'show' : ''}`} style={{ transitionDelay: '2.9s' }} />
        </g>
        <g transform="translate(152, 152)">
          <use href="#frame-daisy" className={`frame-flower ${show ? 'show' : ''}`} style={{ transitionDelay: '3.1s' }} />
        </g>
      </svg>
    </div>
  );
}