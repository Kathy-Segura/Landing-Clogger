'use client';

import { useState } from 'react';
import { Cloud } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo 
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <img src="/clogger_blue.png" alt="Clogger Logo" className="w-6 h-6 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CLOGGER</span>
            </div>
          </div>*/}

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            {/* Logo redondo sin fondo */}
            <img 
              src="/clogger_blue.png" 
              alt="Clogger Logo"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CLOGGER
              </span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#qr" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              Descargar
            </a>
            <a href="#video" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              Demo
            </a>
             <a href="#features" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              Características
            </a>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:scale-105">
            Empezar
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 flex flex-col gap-3">          
            <a href="#qr" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              Descargar
            </a>
            <a href="#video" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              Demo
            </a>
             <a href="#features" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              Características
            </a>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:shadow-lg transition-all mt-2">
              Empezar
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
