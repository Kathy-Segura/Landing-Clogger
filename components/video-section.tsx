'use client';

import { PlayCircle, Cloud, Map, TrendingUp, Bell, FileText, UploadCloud } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

export default function VideoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
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
    <section id="video" ref={sectionRef} className="py-20 md:py-32 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Conoce un poco más acerca de Clogger</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Descubre cómo CLOGGER puede transformar la manera en que interpretas datos meteorológicos y mejoras la productividad de tu cooperativa.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Video Container */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl opacity-25 group-hover:opacity-40 blur-xl transition-all" />
            {/* <div className="relative bg-black rounded-3xl overflow-hidden cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
              {!isPlaying ? (
                <>
                  {/* Placeholder Video Thumbnail
                  <div className="relative w-full aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group hover:from-primary/30 hover:to-secondary/30 transition-all">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                    </div>

                    <div className="relative z-10 text-center">
                      <div className="mb-6 flex justify-center">
                        <PlayCircle className="w-24 h-24 text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
                      </div>
                      <p className="text-white font-semibold text-lg drop-shadow">Haz clic para ver el video</p>
                      <p className="text-white/60 text-sm mt-2">Demo - 5 minutos</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full aspect-video bg-black flex items-center justify-center">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="CLOG Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>*/}

            <div
              className="relative bg-black rounded-3xl overflow-hidden cursor-pointer"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {!isPlaying ? (
                <>
                  {/* Placeholder Video Thumbnail */}
                  <div className="relative w-full aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group hover:from-primary/30 hover:to-secondary/30 transition-all">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                    </div>

                    <div className="relative z-10 text-center">
                      <div className="mb-6 flex justify-center">
                        <PlayCircle className="w-24 h-24 text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
                      </div>
                      <p className="text-white font-semibold text-lg drop-shadow">Haz clic para ver el video</p>
                      <p className="text-white/60 text-sm mt-2">Demo - 5 minutos</p>
                    </div>
                  </div>
                </>
              ) : (
                /* Video local desde carpeta public */
                <div className="w-full aspect-video bg-black flex items-center justify-center">
                  <video
                    className="w-full h-full"
                    src="/demo.mp4"
                    controls
                    autoPlay
                  />
                </div>
              )}
            </div>

            {/* Info below video */}
            <div className="mt-12">
              <p className="text-center text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">Características Principales</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
                {[
                  { icon: Cloud, label: 'Clima Real' },
                  { icon: Map, label: 'Mapas Lluvia' },
                  { icon: TrendingUp, label: 'Tendencias' },
                  { icon: Bell, label: 'Alertas' },
                  { icon: FileText, label: 'Boletines' },
                  { icon: UploadCloud, label: 'Datalogger' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 group/item">
                    <div className="p-2.5 rounded-full bg-primary/5 text-primary group-hover/item:bg-primary/10 group-hover/item:scale-110 transition-all duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground/70 text-center group-hover/item:text-primary transition-colors">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
