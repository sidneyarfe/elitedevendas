import { memo } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import localImage from '@/assets/onoffice_local.png';

const EventDetailsSection = memo(() => {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-gradient">
          📍 DETALHES DO EVENTO
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Event Info */}
          <div className="space-y-6">
            <div className="bg-background p-6 rounded-xl shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-workshop rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Data</p>
                  <p className="text-xl font-bold text-foreground">29 e 30 de Janeiro</p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-workshop rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Horário</p>
                  <p className="text-xl font-bold text-foreground">19h às 22h</p>
                  <p className="text-sm text-muted-foreground">Nos dois dias</p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-workshop rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Local</p>
                  <p className="text-xl font-bold text-foreground">OnOffice Coworking</p>
                  <p className="text-sm text-muted-foreground">Travessa Padre Eutíquio, 1424</p>
                  <p className="text-sm text-muted-foreground">Batista Campos, Belém - PA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Local Image */}
          <div className="bg-background rounded-xl shadow-card overflow-hidden">
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
