'use client';

import { Cloud, CloudRain, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroBanner() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-12 md:py-14 px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
      
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Interpreta el clima,</span>
              <br />
              <span className="text-foreground">Maximiza tus cultivos</span>
            </h1>

            <p className="text-lg text-foreground/70 mb-7 leading-relaxed max-w-lg">
              CLOGGER te ayuda a entender los datos meteorológicos en tiempo real, análisis de tus datos y apoyo en la toma decisiones en el campo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all transform hover:scale-105">
                Descargar Ahora
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/5 transition-all">
                Ver Demo
              </button>
            </div>
          </div>

          {/* Right - Banner Placeholder */}
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm border border-primary/10 rounded-3xl p-8 md:p-12 min-h-96 flex flex-col items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center gap-4 mb-6">
                    <Cloud className="w-16 h-16 text-primary animate-bounce" style={{ animationDelay: '0s' }} />
                    <CloudRain className="w-16 h-16 text-secondary animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <Cloud className="w-16 h-16 text-primary animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {/*Espacio para Banner/Imagen Promocional*/}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {/*Reemplaza esto con tu imagen o video destacado*/}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
