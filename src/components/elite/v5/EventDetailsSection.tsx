import { memo } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import localImage from '@/assets/onoffice_local.png';

const EventDetailsSection = memo(() => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-foreground">
          📍 Detalhes do evento
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Event Info */}
          <div className="space-y-6">
            <div className="bg-card p-6 md:p-8 rounded-xl shadow-card border border-muted/10 hover:shadow-glow transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-workshop rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-7 h-7 text-black" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Data</p>
                  <p className="text-xl md:text-2xl font-black text-foreground">29 e 30 de Janeiro</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-xl shadow-card border border-muted/10 hover:shadow-glow transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-workshop rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-black" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Horário</p>
                  <p className="text-xl md:text-2xl font-black text-foreground">19h às 22h</p>
                  <p className="text-sm text-muted-foreground">Nos dois dias</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-xl shadow-card border border-muted/10 hover:shadow-glow transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-workshop rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-black" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Local</p>
                  <p className="text-xl md:text-2xl font-black text-foreground">OnOffice Coworking</p>
                  <p className="text-sm md:text-base text-muted-foreground">Travessa Padre Eutíquio, 1424</p>
                  <p className="text-sm md:text-base text-muted-foreground">Batista Campos, Belém - PA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Local Image */}
          <div className="bg-card rounded-2xl shadow-card overflow-hidden border border-muted/10 hover:shadow-glow transition-all duration-300">
            <img 
              src={localImage} 
              alt="OnOffice Coworking - Local do Workshop"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

EventDetailsSection.displayName = 'EventDetailsSection';

export default EventDetailsSection;
