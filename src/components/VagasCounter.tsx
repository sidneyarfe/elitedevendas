import { useState, useEffect } from "react";
import { Users } from "lucide-react";

const VagasCounter = () => {
  const [vagasRestantes, setVagasRestantes] = useState(8); // Simula 8 vagas restantes
  
  useEffect(() => {
    // Simula decremento ocasional das vagas para urgência
    const interval = setInterval(() => {
      setVagasRestantes(prev => prev > 3 ? prev - 1 : prev);
    }, 300000); // Decrementa a cada 5 minutos
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-workshop text-black p-8 rounded-2xl text-center">
      <Users className="w-12 h-12 mx-auto mb-4" />
      <h3 className="text-2xl font-black mb-2">VAGAS RESTANTES</h3>
      <div className="text-6xl font-black mb-2">{vagasRestantes}</div>
      <p className="text-lg font-bold">de 30 vagas disponíveis</p>
      
      {vagasRestantes <= 5 && (
        <div className="mt-4 animate-pulse">
          <p className="text-red-800 font-bold text-lg">🔥 ÚLTIMAS VAGAS! 🔥</p>
        </div>
      )}
    </div>
  );
};

export default VagasCounter;