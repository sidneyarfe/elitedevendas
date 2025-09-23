import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    let animationId: number;
    let lastTime = Date.now();

    const updateTimer = () => {
      const now = Date.now();
      if (now - lastTime >= 1000) {
        lastTime = now;
        setTimeLeft(prev => {
          let newSeconds = prev.seconds - 1;
          let newMinutes = prev.minutes;
          let newHours = prev.hours;
          let newDays = prev.days;

          if (newSeconds < 0) {
            newSeconds = 59;
            newMinutes--;
          }
          if (newMinutes < 0) {
            newMinutes = 59;
            newHours--;
          }
          if (newHours < 0) {
            newHours = 23;
            newDays--;
          }
          if (newDays < 0) {
            // Reset to prevent negative values
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
          }

          return {
            days: newDays,
            hours: newHours,
            minutes: newMinutes,
            seconds: newSeconds
          };
        });
      }
      animationId = requestAnimationFrame(updateTimer);
    };

    animationId = requestAnimationFrame(updateTimer);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="bg-card p-8 rounded-2xl border border-workshop-gold/20 text-center">
      <h3 className="text-xl md:text-2xl font-bold mb-6 text-gradient">
        <Clock className="w-6 h-6 md:w-8 md:h-8 inline-block mr-2" />
        Inscrições encerram em:
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        <div className="bg-gradient-workshop text-black p-2 md:p-4 rounded-xl">
          <div className="text-xl md:text-3xl font-black">{timeLeft.days.toString().padStart(2, '0')}</div>
          <div className="text-xs md:text-sm font-bold">DIAS</div>
        </div>
        <div className="bg-gradient-workshop text-black p-2 md:p-4 rounded-xl">
          <div className="text-xl md:text-3xl font-black">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-xs md:text-sm font-bold">HORAS</div>
        </div>
        <div className="bg-gradient-workshop text-black p-2 md:p-4 rounded-xl">
          <div className="text-xl md:text-3xl font-black">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="text-xs md:text-sm font-bold">MIN</div>
        </div>
        <div className="bg-gradient-workshop text-black p-2 md:p-4 rounded-xl">
          <div className="text-xl md:text-3xl font-black">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="text-xs md:text-sm font-bold">SEG</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;