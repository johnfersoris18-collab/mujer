export default function Pareja({ phase }) {
  const isVisible = phase >= 3;

  return (
    <div className={`absolute bottom-[304px] left-1/2 -translate-x-1/2 w-[110px] h-[150px] pointer-events-none z-30 transition-all duration-1000 delay-500 ease-in-out origin-bottom ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
      <svg viewBox="0 0 100 150" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="manGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="womanGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9d174d" />
            <stop offset="100%" stopColor="#4c0519" />
          </linearGradient>
          
          <style>
            {`
              @keyframes walkMan {
                0% { transform: translateX(-20px) rotate(-5deg); opacity: 0; }
                20% { opacity: 1; }
                100% { transform: translateX(0px) rotate(0deg); opacity: 1; }
              }
              @keyframes walkWoman {
                0% { transform: translateX(20px) rotate(5deg); opacity: 0; }
                20% { opacity: 1; }
                100% { transform: translateX(0px) rotate(0deg); opacity: 1; }
              }
              @keyframes showHeart {
                0% { opacity: 0; transform: translateY(10px) scale(0.5); }
                50% { opacity: 1; transform: translateY(-5px) scale(1.1); }
                100% { opacity: 1; transform: translateY(0) scale(1); }
              }
              @keyframes beat {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.15); }
              }

              .man-anim {
                animation: ${isVisible ? 'walkMan 2.5s ease-out forwards' : 'none'};
                transform-origin: 40px 150px;
                opacity: 0;
              }
              .woman-anim {
                animation: ${isVisible ? 'walkWoman 2.5s ease-out forwards' : 'none'};
                transform-origin: 60px 150px;
                opacity: 0;
              }
              .heart-anim {
                opacity: 0;
                transform-origin: center;
                animation: ${isVisible ? 'showHeart 0.6s ease-out 2.5s forwards, beat 1.5s infinite 3.1s' : 'none'};
              }
            `}
          </style>
        </defs>

        {/* Silueta Hombre (Animada hacia la derecha) */}
        <g className="man-anim">
          <circle cx="40" cy="30" r="14" fill="#fcd34d" />
          <path d="M40 44 C 20 60, 20 100, 30 150 L 50 150 C 50 100, 60 70, 40 44 Z" fill="url(#manGrad)" />
          <path d="M35 50 C 50 60, 65 70, 65 85" stroke="#fcd34d" strokeWidth="6" strokeLinecap="round" fill="none" />
        </g>

        {/* Silueta Mujer (Animada hacia la izquierda) */}
        <g className="woman-anim">
          <circle cx="60" cy="35" r="13" fill="#fde68a" />
          <path d="M50 25 C 60 15, 75 25, 70 50 C 65 60, 50 60, 50 25" fill="#451a03" />
          <path d="M60 48 C 75 60, 80 100, 70 150 L 50 150 C 40 100, 45 70, 60 48 Z" fill="url(#womanGrad)" />
          <path d="M60 55 C 45 65, 35 70, 35 80" stroke="#fde68a" strokeWidth="5" strokeLinecap="round" fill="none" />
        </g>

        {/* Corazón flotando por encima de ellos */}
        <path d="M50 0 C 45 -10, 30 -5, 35 10 L 50 25 L 65 10 C 70 -5, 55 -10, 50 0 Z" fill="#e11d48" className="heart-anim" />
      </svg>
    </div>
  );
}