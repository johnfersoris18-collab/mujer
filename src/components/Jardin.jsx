export default function Jardin({ phase }) {
  const isVisible = phase >= 3;

  return (
    <div className={`absolute bottom-[304px] left-1/2 -translate-x-1/2 w-[90%] max-w-[378px] h-[140px] pointer-events-none z-20 transition-all duration-1000 ease-in-out origin-bottom ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}>
      <svg viewBox="0 0 400 140" className="w-full h-full overflow-visible">
         <defs>
           <linearGradient id="grassDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14532d" />
              <stop offset="100%" stopColor="#064e3b" />
           </linearGradient>
           <linearGradient id="grassLight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#16a34a" />
           </linearGradient>
           
           <style>
             {`
               @keyframes floatMagic {
                 0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
                 50% { transform: translateY(-10px) scale(1.5); opacity: 1; }
               }
               .firefly { animation: floatMagic 3s ease-in-out infinite alternate; }
             `}
           </style>
         </defs>
         
         {/* Arbustos de fondo con efecto de profundidad */}
         <g opacity="0.9">
           <circle cx="30" cy="100" r="35" fill="#022c22" />
           <circle cx="80" cy="110" r="40" fill="#064e3b" />
           <circle cx="370" cy="95" r="45" fill="#022c22" />
           <circle cx="310" cy="105" r="35" fill="#064e3b" />
         </g>

         {/* Colinas de césped ondulado multicapa */}
         <path d="M-20 140 Q 100 85 200 115 T 420 95 L 420 140 Z" fill="url(#grassDark)" />
         <path d="M-20 140 Q 150 105 250 125 T 420 115 L 420 140 Z" fill="url(#grassLight)" />
         
         {/* Detalles de flores más elaborados (con tallos y pétalos compuestos) */}
         {[...Array(15)].map((_, i) => (
           <g key={`flower-${i}`} transform={`translate(${20 + Math.random() * 360}, ${110 + Math.random() * 20}) scale(${0.6 + Math.random() * 0.4})`}>
             <path d="M0 0 Q -5 -15 0 -20 Q 5 -15 0 0" fill="#15803d" /> {/* Tallo */}
             <circle cx="0" cy="-20" r="4" fill={["#facc15", "#f472b6", "#c084fc", "#38bdf8"][i % 4]} />
             <circle cx="-4" cy="-22" r="3" fill="#fff" opacity="0.8"/>
             <circle cx="4" cy="-22" r="3" fill="#fff" opacity="0.8"/>
             <circle cx="0" cy="-26" r="3" fill="#fff" opacity="0.8"/>
             <circle cx="0" cy="-16" r="3" fill="#fff" opacity="0.8"/>
           </g>
         ))}

         {/* Luciérnagas / Destellos mágicos flotando sobre el pasto */}
         {[...Array(10)].map((_, i) => (
           <circle 
             key={`ff-${i}`} 
             cx={40 + Math.random() * 320} 
             cy={70 + Math.random() * 40} 
             r="1.5" 
             fill="#fef08a" 
             className="firefly"
             style={{ animationDelay: `${Math.random() * 3}s` }}
           />
         ))}
      </svg>
    </div>
  );
}