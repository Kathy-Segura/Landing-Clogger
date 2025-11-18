'use client';

import { FileDown, Smartphone, Check, HandCoins as Android } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

export default function DownloadSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
    <section ref={sectionRef} className="py-16 md:py-24 px-4 relative bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto bg-card border border-border rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Smartphone className="w-4 h-4" />
                  <span>Disponible para Android</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Descarga CLOGGER Móvil
                </h2>
                <p className="text-foreground/60 mb-8 leading-relaxed">
                  Desarrolladapara ofrecer el mejor rendimiento en el campo. Accede a tus datos en tiempo real y obten un analisis de tu datos climáticos
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-foreground/80">Compatible con Android 8.0+</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-foreground/80">Analisis de tus datos de forma interactiva y sencilla</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-foreground/80">Almacenamiento de tus datos climáticos</span>
                  </div>
                </div>

                <a 
                  href="/app-release.apk" 
                  download 
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all flex items-center justify-center gap-3"
                >
                  <FileDown className="w-5 h-5" />
                  Descargar APK (v3.0.0)
               </a>

                <p className="text-xs text-foreground/40 mt-4 text-center sm:text-left">
                  Tamaño: 50 MB • Última actualización: Nov 2025
                </p>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className={`absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
              
              <div className={`relative z-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                {/* Abstract Phone Representation */}
                <div className="relative w-48 h-96 bg-black rounded-[2.5rem] border-4 border-gray-700 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-20"></div>
                  <div className="w-full h-full bg-gradient-to-b from-primary/20 to-secondary/20 flex flex-col items-center justify-center p-4">
                   <div className="w-25 h-25 mb-4 flex items-center justify-center">
                    <img 
                      src="/clogger_blue.png" 
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                    <div className="w-full h-2 bg-white/10 rounded-full mb-2"></div>
                    <div className="w-3/4 h-2 bg-white/10 rounded-full mb-8"></div>
                    
                    <div className="grid grid-cols-2 gap-2 w-full">
                      <div className="h-16 bg-white/5 rounded-lg"></div>
                      <div className="h-16 bg-white/5 rounded-lg"></div>
                      <div className="h-16 bg-white/5 rounded-lg"></div>
                      <div className="h-16 bg-white/5 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
