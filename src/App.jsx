import { useState, useMemo } from 'react'
import Envelope from './components/Envelope'
import Bouquet from './components/Bouquet'
import Jardin from './components/Jardin'
import Pareja from './components/Pareja'

function App() {
  const [phase, setPhase] = useState(0); 

  const handleOpen = () => {
    if (phase === 0) {
      setPhase(1); 
      
      setTimeout(() => {
        setPhase(2);
      }, 6000);

      setTimeout(() => {
        setPhase(3);
      }, 7200);
    } else if (phase === 3) {
      setPhase(0); 
    }
  };

  // El uso de useMemo es la clave: evita que los pétalos cambien de posición 
  // bruscamente cuando cambias de fase.
  const petals = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${7 + Math.random() * 5}s`,
    }));
  }, []);

  return (
    <div className="min-h-[100dvh] w-full bg-gradient-to-br from-pink-200 via-rose-100 to-pink-50 flex items-center justify-center p-4 font-sans overflow-hidden relative touch-none">
      
      <style>
        {`
          @keyframes fall {
            0% { transform: translate(0, -10vh) rotate(0deg) scale(0.6); opacity: 0; }
            10% { opacity: 0.8; }
            50% { transform: translate(20px, 50vh) rotate(180deg) scale(0.9); opacity: 0.8; }
            100% { transform: translate(-15px, 110vh) rotate(360deg) scale(1.2); opacity: 0; }
          }
          .petal { animation: fall linear infinite; }
        `}
      </style>
      
      {/* FONDO Lluvia de Pétalos */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {petals.map((petal) => (
          <div 
            key={petal.id} 
            className="absolute top-0 petal text-pink-500/50"
            style={{ 
              left: petal.left, 
              animationDelay: petal.animationDelay,
              animationDuration: petal.animationDuration,
              willChange: 'transform, opacity' /* <-- Optimización para móviles */
            }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,6 C16,2 20,5 20,10 C20,16 12,22 12,22 Z" />
            </svg>
          </div>
        ))}
      </div>

      {/* CONTENEDOR CENTRAL */}
      <div className="relative w-full max-w-[420px] h-[500px] flex items-end justify-center z-10">
        <Bouquet phase={phase} />
        <Jardin phase={phase} />
        <Pareja phase={phase} />
        <Envelope phase={phase} onOpen={handleOpen} />
      </div>

    </div>
  )
}

export default App