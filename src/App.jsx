import { useState } from 'react'
import Envelope from './components/Envelope'
import Bouquet from './components/Bouquet'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  // 20 pétalos cayendo: Al guardarlos en una variable estática fuera del render (o usando memo),
  // evitamos que la página se sobrecargue. Solo se calculan una vez.
  const petals = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${6 + Math.random() * 6}s`,
  }))

  return (
    // Quitamos los eventos onPointerMove que trababan la PC.
    // Usamos touch-none para evitar que la pantalla rebote en el celular al deslizar.
    <div className="min-h-[100dvh] w-full bg-gradient-to-br from-pink-200 via-rose-100 to-pink-50 flex items-center justify-center p-4 font-sans overflow-hidden relative">
      
      {/* CSS PURO: Animación fluida procesada por la GPU del dispositivo (Cero Lag) */}
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(-10vh) rotate(0deg) scale(0.6); opacity: 0; }
            10% { opacity: 0.8; }
            100% { transform: translateY(110vh) rotate(360deg) scale(1.2); opacity: 0; }
          }
          .petal { animation: fall linear infinite; }
        `}
      </style>
      
      {/* FONDO: Lluvia de Pétalos */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {petals.map((petal) => (
          <div 
            key={petal.id} 
            className="absolute top-0 petal text-pink-500/50 drop-shadow-sm"
            style={{ 
              left: petal.left, 
              animationDelay: petal.animationDelay,
              animationDuration: petal.animationDuration 
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
        <Bouquet show={isOpen} />
        <Envelope isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

    </div>
  )
  
}


export default App