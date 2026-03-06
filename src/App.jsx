import { useState } from "react";
import Envelope from "./components/Envelope";
import Bouquet from "./components/Bouquet";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] w-full bg-rose-50 flex items-center justify-center p-4 overflow-hidden">
      
      {/* CONTENEDOR CENTRAL RESPONSIVE */}
      <div className="relative w-full max-w-[420px] h-[520px] flex items-end justify-center">

        {/* FLORES */}
        <Bouquet show={isOpen} />

        {/* SOBRE */}
        <Envelope isOpen={isOpen} setIsOpen={setIsOpen} />

      </div>

    </div>
  );
}

export default App;