'use client';

import { QrCode, Download } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

export default function QrSection() {
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
    <section id="qr" ref={sectionRef} className="py-20 md:py-32 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
              <QrCode className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Escanea para descargar</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Descarga al instante</span>
              <br />
              <span className="text-foreground">con tu teléfono</span>
            </h2>

            <p className="text-lg text-foreground/60 mb-8 leading-relaxed max-w-md">
              Escanea el código QR con la cámara de tu dispositivo para obtener CLOGGER. Disponible solo para Android.
            </p>

            {/*<div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all transform hover:scale-105">
                <Download className="w-5 h-5" />
                App Store
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-secondary text-secondary rounded-full font-semibold hover:bg-secondary/5 transition-all">
                <Download className="w-5 h-5" />
                Google Play
              </button>
            </div>*/}

          </div>

          {/* Right - QR Placeholder */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-secondary/10 max-w-sm mx-auto">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 flex flex-col items-center justify-center aspect-square">
                  {/* QR*/}
                  <img 
                    src="/QR.jpg"          
                    alt="QR Clogger"
                    className="w-60 h-60 object-contain mb-5"
                  />
                  <p className="text-sm text-muted-foreground text-center font-medium">
                    Escanéame para abrir CLOGGER
                  </p>
                </div>
                <p className="text-center text-sm text-foreground/60 mt-6">
                  Descarga CLOGGER ahora y empieza a optimizar tus cultivos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
