export default function Envelope({ isOpen, setIsOpen }) {
  return (
    <div className="absolute bottom-1 w-full max-w-[320px] flex justify-center cursor-pointer z-30 drop-shadow-2xl" onClick={() => setIsOpen(!isOpen)}>
      
      {/* PARTE TRASERA DEL SOBRE */}
      <div className="absolute bottom-0 w-full h-48 bg-rose-900 rounded-xl z-10"></div>

      {/* LA CARTA (Ahora sube menos para no tapar el gran ramo) */}
      <div 
        className={`absolute bg-slate-50 p-6 rounded-t-xl shadow-inner w-[90%] transition-all duration-1000 ease-in-out z-20 flex flex-col items-center text-center ${
          isOpen ? 'bottom-16 opacity-100 h-60' : 'bottom-4 opacity-0 h-40'
        }`}
      >
        <h1 className="text-xl font-bold text-rose-600 mt-2 mb-2">
          ¡Feliz Día! ❤️
        </h1>
        {/* overflow-y-auto permite texto largo sin que la tarjeta tape las flores */}
        <div className="text-slate-700 text-sm leading-relaxed mb-4 font-medium overflow-y-auto pr-1 custom-scrollbar">
          Eres increíble, fuerte y me inspiras todos los días. 
          Te Amo 
        </div>
      </div>

      {/* PARTE FRONTAL DEL SOBRE */}
      <div className="relative w-full h-48 bg-rose-600 rounded-xl shadow-2xl z-30 flex items-center justify-center border-t border-rose-500">
        <div className={`transition-all duration-500 ${isOpen ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
          <div className="animate-pulse bg-white p-4 rounded-full shadow-lg text-2xl flex items-center justify-center">
            ❤️
          </div>
          <p className="text-rose-100 text-xs text-center mt-2 font-semibold tracking-wide">Toca para abrir</p>
        </div>
      </div>

    </div>
  )
}