import { useState, useMemo, useEffect } from 'react';

export default function Envelope({ isOpen, setIsOpen }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Texto completo y el estado del texto que se está escribiendo
  const fullText = "Eres increíble, fuerte y me inspiras todos los días. Te Amo ❤️";
  const [typedText, setTypedText] = useState("");

  // Efecto Máquina de Escribir
  useEffect(() => {
    if (isOpen) {
      let i = 0;
      // Esperamos 1000ms a que la carta termine de subir para no causar lag
      const delayTimer = setTimeout(() => {
        const typeTimer = setInterval(() => {
          setTypedText(fullText.slice(0, i + 1));
          i++;
          if (i >= fullText.length) clearInterval(typeTimer);
        }, 50); // Escribe 1 letra cada 50ms
        return () => clearInterval(typeTimer);
      }, 1000);
      return () => clearTimeout(delayTimer);
    } else {
      setTypedText(""); // Se reinicia si se cierra
    }
  }, [isOpen]);

  // Matemáticas para el marco denso de la foto (60 margaritas)
  const flowers = useMemo(() => {
    const list = [];
    const W = 320; const H = 192; 
    const topCount = 20; const sideCount = 10;
    
    for (let i = 0; i < topCount; i++) list.push({ x: (W / (topCount - 1)) * i, y: 0, delay: 0.05 * i });
    for (let i = 1; i < sideCount; i++) list.push({ x: W, y: (H / (sideCount - 1)) * i, delay: 0.05 * (topCount + i) });
    for (let i = topCount - 2; i >= 0; i--) list.push({ x: (W / (topCount - 1)) * i, y: H, delay: 0.05 * (topCount + sideCount + (topCount - 2 - i)) });
    for (let i = sideCount - 2; i >= 1; i--) list.push({ x: 0, y: (H / (sideCount - 1)) * i, delay: 0.05 * (topCount * 2 + sideCount + (sideCount - 2 - i)) });
    return list;
  }, []);

  return (
    <div className="absolute bottom-1 w-full max-w-[320px] flex justify-center cursor-pointer z-30 drop-shadow-2xl" onClick={() => setIsOpen(!isOpen)}>
      
      {/* PARTE TRASERA */}
      <div className="absolute bottom-0 w-full h-48 bg-rose-900 rounded-xl z-10"></div>

      {/* LA CARTA (Ahora con el texto tipeándose) */}
      <div 
        className={`absolute bg-slate-50 p-6 rounded-t-xl shadow-inner w-[90%] transition-all duration-1000 ease-in-out z-20 flex flex-col items-center text-center ${
          isOpen ? 'bottom-16 opacity-100 h-60' : 'bottom-4 opacity-0 h-40'
        }`}
      >
        <h1 className="text-xl font-bold text-rose-600 mt-2 mb-2">
          ¡Feliz Día! ❤️
        </h1>
        {/* Usamos el typedText, y si está escribiendo agregamos un cursor palpitante "|" */}
        <div className="text-slate-700 text-sm leading-relaxed mb-4 font-medium overflow-y-auto pr-1 custom-scrollbar min-h-[80px]">
          {typedText}
          {isOpen && typedText.length < fullText.length && (
            <span className="animate-pulse font-bold text-rose-400">|</span>
          )}
        </div>
      </div>

      {/* PARTE FRONTAL DEL SOBRE Y LA FOTO */}
      <div className="relative w-full h-48 rounded-xl shadow-2xl z-30 flex items-center justify-center overflow-hidden bg-rose-600 border-t border-rose-500">
        
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-1000 z-40 ${isOpen && imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <img 
            src="/foto.jpg" 
            alt="Nosotros" 
            onLoad={() => setImageLoaded(true)}
            className="w-full h-full object-cover"
          />

          <svg viewBox="0 0 320 192" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <defs>
              <style>
                {`
                  .flower-frame { opacity: 0; transform: scale(0); transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); transform-origin: center; }
                  .flower-frame.show { opacity: 1; transform: scale(1); }
                `}
              </style>
              <g id="frame-daisy">
                <g fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5">
                  <ellipse rx="3.5" ry="12" transform="rotate(0)"/>
                  <ellipse rx="3.5" ry="12" transform="rotate(45)"/>
                  <ellipse rx="3.5" ry="12" transform="rotate(90)"/>
                  <ellipse rx="3.5" ry="12" transform="rotate(135)"/>
                </g>
                <circle r="4" fill="#facc15"/>
              </g>
            </defs>

            {flowers.map((f, i) => (
              <g key={`f-${i}`} transform={`translate(${f.x}, ${f.y})`}>
                <use href="#frame-daisy" transform="scale(1.5)" className={`flower-frame ${isOpen ? 'show' : ''}`} style={{ transitionDelay: `${0.5 + f.delay}s` }} />
              </g>
            ))}
          </svg>
        </div>

        {/* EL BOTÓN */}
        <div className={`relative z-50 transition-all duration-500 ${isOpen ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
          <div className="animate-pulse bg-white p-4 rounded-full shadow-lg text-2xl flex items-center justify-center text-rose-600">
            ❤️
          </div>
          <p className="text-rose-100 text-xs text-center mt-2 font-semibold tracking-wide">Toca para abrir</p>
        </div>

      </div>
    </div>
  )
}