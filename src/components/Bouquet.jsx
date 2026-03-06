export default function Bouquet({ show }) {
  return (
    <div
      className={`absolute bottom-28 left-1/2 -translate-x-1/2 w-full max-w-[420px] h-[420px] pointer-events-none z-10 transition-opacity duration-700 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg viewBox="0 0 400 420" className="w-full h-full">

        <defs>
          <style>
            {`

            .stem{
              stroke-dasharray:500;
              stroke-dashoffset:500;
              transition:stroke-dashoffset 1.6s ease;
            }

            .stem.show{
              stroke-dashoffset:0;
            }

            .flower{
              opacity:0;
              transform:translateY(10px);
              transition:all .6s ease;
            }

            .flower.show{
              opacity:1;
              transform:translateY(0);
            }

            .d1{transition-delay:1.2s}
            .d2{transition-delay:1.6s}
            .d3{transition-delay:2s}
            .d4{transition-delay:2.4s}

            `}
          </style>

          {/* ROSA */}
          <g id="rose">
            <circle r="8" fill="#e11d48"/>
            <circle cx="-4" cy="-3" r="5" fill="#fb7185"/>
            <circle cx="4" cy="-3" r="5" fill="#be123c"/>
          </g>

          {/* TULIPAN */}
          <g id="tulip">
            <path d="M0 -10 C-6 -10 -6 -2 0 0 C6 -2 6 -10 0 -10Z" fill="#f43f5e"/>
            <path d="M-5 -8 L0 -15 L5 -8Z" fill="#fb7185"/>
          </g>

          {/* MARGARITA */}
          <g id="daisy">
            <circle r="4" fill="#facc15"/>
            <g fill="white">
              <ellipse rx="3" ry="8" transform="rotate(0) translate(0 -8)"/>
              <ellipse rx="3" ry="8" transform="rotate(45) translate(0 -8)"/>
              <ellipse rx="3" ry="8" transform="rotate(90) translate(0 -8)"/>
              <ellipse rx="3" ry="8" transform="rotate(135) translate(0 -8)"/>
            </g>
          </g>

        </defs>

        {/* TALLOS */}

        <path
          d="M200 420 Q170 300 130 220"
          stroke="#16a34a"
          strokeWidth="4"
          fill="none"
          className={`stem ${show ? "show" : ""}`}
        />

        <path
          d="M200 420 Q230 300 270 220"
          stroke="#16a34a"
          strokeWidth="4"
          fill="none"
          className={`stem ${show ? "show d1" : "d1"}`}
        />

        <path
          d="M200 420 Q200 280 200 180"
          stroke="#15803d"
          strokeWidth="5"
          fill="none"
          className={`stem ${show ? "show d2" : "d2"}`}
        />

        {/* FLORES */}

        <g className={`flower ${show ? "show d2" : "d2"}`}>
          <use href="#tulip" x="130" y="220" transform="scale(1.7)" />
        </g>

        <g className={`flower ${show ? "show d2" : "d2"}`}>
          <use href="#tulip" x="270" y="220" transform="scale(1.7)" />
        </g>

        <g className={`flower ${show ? "show d3" : "d3"}`}>
          <use href="#rose" x="200" y="180" transform="scale(2)" />
        </g>

        <g className={`flower ${show ? "show d4" : "d4"}`}>
          <use href="#daisy" x="90" y="260" transform="scale(1.8)" />
        </g>

        <g className={`flower ${show ? "show d4" : "d4"}`}>
          <use href="#daisy" x="310" y="260" transform="scale(1.8)" />
        </g>

      </svg>
    </div>
  );
}