import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="h-24 bg-brand-ice border-t border-brand-sand px-6 md:px-16 flex flex-col md:flex-row flex-wrap items-center justify-between text-[9px] uppercase tracking-[0.3em] text-[#5A5550]">
      <div className="opacity-60 mb-4 md:mb-0">© {new Date().getFullYear()} Afetos por Jader Figueiredo</div>
      <div className="flex gap-8 mb-4 md:mb-0 font-medium font-bold">
        <a href="#" className="hover:text-brand-gold transition-colors">Instagram</a>
        <a href="#" className="hover:text-brand-gold transition-colors">Vimeo</a>
        <a href="#" className="hover:text-brand-gold transition-colors text-brand-gold">WhatsApp Luxury Care</a>
      </div>
      <div className="opacity-60">Handcrafted in Brazil</div>
    </footer>
  );
}
