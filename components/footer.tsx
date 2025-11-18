'use client';

import { Cloud, Mail, MapPin, Phone, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CLOGGER</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Empoderando a cooperativas agrícolas del corredor seco con tecnología meteorológica avanzada.
            </p>
          </div>*/}

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              
              {/* Logo sin fondo */}
              <img 
                src="/clogger_blue.png"        
                alt="CLOGGER Logo"
                className="w-15 h-15 object-contain"
              />

              <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CLOGGER
              </span>
            </div>

            <p className="text-foreground/60 text-sm leading-relaxed">
              Empoderando a cooperativas agrícolas del corredor seco con tecnología meteorológica avanzada.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Producto</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Características</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Precios</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Seguridad</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Integraciónes</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Sobre Nosotros</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Trabajos</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-foreground/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Managua, Nicaragua</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors cursor-pointer">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>+505 2222 2222</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors cursor-pointer">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>info@clogger.app</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-foreground/60 text-sm">
            <p>&copy; {currentYear} CLOGGER - Todos los derechos reservados.</p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Términos</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all text-foreground/60 hover:text-primary">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all text-foreground/60 hover:text-primary">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all text-foreground/60 hover:text-primary">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
