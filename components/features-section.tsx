'use client';

import { Cloud, Droplets, Wind, TrendingUp, Database, Smartphone, Map, Bell, FileText, UploadCloud, Thermometer } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: Cloud,
    title: 'Clima en Tiempo Real',
    description: 'Monitoreo constante de las condiciones meteorológicas actuales en tu zona de cultivo.',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Map,
    title: 'Mapas de Lluvia',
    description: 'Visualización detallada de zonas de lluvia en todo el país para anticipar precipitaciones.',
    color: 'from-cyan-400 to-teal-600'
  },
  {
    icon: TrendingUp,
    title: 'Tendencias Climáticas',
    description: 'Gráficos interactivos de temperatura y humedad para analizar patrones históricos.',
    color: 'from-teal-400 to-cyan-600'
  },
  {
    icon: Bell,
    title: 'Notificaciones',
    description: 'Alertas climáticas instantáneas para proteger tus cultivos de condiciones adversas.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: FileText,
    title: 'Boletines de Cultivo',
    description: 'Reportes especializados para café, jamaica y hortalizas exportables a PDF.',
    color: 'from-green-400 to-emerald-600'
  },
  {
    icon: UploadCloud,
    title: 'Carga de Datalogger',
    description: 'Sube archivos directamente desde tu datalogger a nuestra base de datos en la nube.',
    color: 'from-indigo-400 to-purple-600'
  }
];

export default function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
              const newVisible = [...prev];
              features.forEach((_, index) => {
                newVisible[index] = index;
              });
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-16 md:py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl -z-10" />

      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Funcionalidades</span>
            <span className="text-foreground ml-2">Clave</span>
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl mx-auto">
            Herramientas especializadas para el corredor seco de Nicaragua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl opacity-0 group-hover:opacity-5 transition-opacity blur`} />

                <div className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-md hover:shadow-primary/5 h-full">
                  <div className="flex items-start gap-4">
                    {/* Icon container */}
                    <div className={`flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} text-white group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-foreground/60 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${feature.color} rounded-b-xl w-0 group-hover:w-full transition-all duration-500`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
