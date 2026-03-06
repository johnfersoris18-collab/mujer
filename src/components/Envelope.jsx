export default function Envelope({ isOpen, setIsOpen }) {
  return (
    <div
      className="absolute bottom-0 w-full max-w-[320px] flex justify-center cursor-pointer z-30"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* FONDO SOBRE */}
      <div className="absolute bottom-0 w-full h-48 bg-rose-300 rounded-xl shadow-md z-10"></div>

      {/* CARTA */}
      <div
        className={`absolute bg-white p-5 rounded-t-xl shadow-lg w-[80%] transition-all duration-1000 ease-in-out z-20 flex flex-col items-center text-center ${
          isOpen ? "bottom-32 opacity-100 h-56" : "bottom-4 opacity-0 h-40"
        }`}
      >
        <h1 className="text-xl font-bold text-rose-600 mt-2 mb-3">
          ¡Feliz Día! ❤️
        </h1>

        <p className="text-gray-700 text-sm leading-relaxed">
          Eres increíble, fuerte y me inspiras todos los días.
          Quería hacerte algo especial solo para ti.
        </p>
      </div>

      {/* FRENTE SOBRE */}
      <div className="relative w-full h-48 bg-rose-400 rounded-xl shadow-2xl z-30 flex items-center justify-center border-t border-rose-300">
        <div
          className={`transition-all duration-500 ${
            isOpen ? "opacity-0 scale-50" : "opacity-100 scale-100"
          }`}
        >
          <div className="animate-pulse bg-white/90 p-4 rounded-full shadow-lg text-2xl flex items-center justify-center">
            ❤️
          </div>

          <p className="text-white text-xs text-center mt-2 font-medium opacity-80">
            Toca para abrir
          </p>
        </div>
      </div>
    </div>
  );
}