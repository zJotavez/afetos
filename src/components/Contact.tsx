import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export function Contact() {
  useSEO({
    title: "Inicie Sua Jornada",
    description: "Entre em contato com Jader Figueiredo e a equipe Afetos para verificar disponibilidade e solicitar orçamentos para o seu casamento.",
    image: "/logo.jpg"
  });
  return (
    <div className="w-full min-h-screen bg-brand-ice pt-32 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-nude blur-[150px] opacity-40 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info Side */}
          <div>
            <FadeIn direction="right">
               <div className="flex items-center gap-4 mb-4">
                 <div className="h-[1px] w-8 bg-brand-gold opacity-50"></div>
                 <h4 className="text-brand-gold text-[10px] tracking-[0.5em] uppercase font-bold">Vamos conversar</h4>
               </div>
               <h1 className="text-5xl md:text-[64px] font-serif text-[#2D2926] mb-8 leading-[0.9]">
                 Inicie sua<br/><span className="text-brand-gold italic">jornada afetiva</span>
               </h1>
               <p className="text-[#5A5550] font-light mb-12 max-w-md italic leading-relaxed text-base">
                 Gostaríamos muito de conhecer vocês e entender a visão para o seu grande dia. Preencha o formulário ou entre em contato diretamente.
               </p>

               <div className="space-y-8">
                 <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 border border-brand-gold flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-[#8E8279]" />
                    </div>
                    <div>
                      <h5 className="font-serif text-xl text-[#2D2926] italic mb-1">E-mail</h5>
                      <a href="mailto:contato@afetos.com.br" className="text-[#5A5550] text-sm font-light hover:text-brand-gold transition-colors">contato@afetos.com.br</a>
                    </div>
                 </div>

                 <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 border border-brand-gold flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-[#8E8279]" />
                    </div>
                    <div>
                      <h5 className="font-serif text-xl text-[#2D2926] italic mb-1">WhatsApp</h5>
                      <a href="#" className="text-[#5A5550] text-sm font-light hover:text-brand-gold transition-colors">+55 (11) 99999-9999</a>
                    </div>
                 </div>

                 <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 border border-brand-gold flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-[#8E8279]" />
                    </div>
                    <div>
                      <h5 className="font-serif text-xl text-[#2D2926] italic mb-1">Estúdio</h5>
                      <p className="text-[#5A5550] text-sm font-light leading-relaxed">Atendimento com hora marcada<br/>São Paulo, Brasil</p>
                    </div>
                 </div>
               </div>
            </FadeIn>
          </div>

          {/* Form Side */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-[#FAF9F6] p-10 md:p-14 shadow-2xl shadow-[#E8D5C8]/50 border-[12px] border-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-nude rounded-full blur-[40px] -z-10"></div>
               
               <form className="space-y-10 relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   <div className="space-y-3">
                     <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gold">Noivo(a) 1</label>
                     <input type="text" className="w-full bg-transparent border-b border-[#E8D5C8] pb-3 text-sm focus:border-brand-gold outline-none transition-colors rounded-none px-0 text-[#2D2926]" placeholder="Nome" />
                   </div>
                   <div className="space-y-3">
                     <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gold">Noivo(a) 2</label>
                     <input type="text" className="w-full bg-transparent border-b border-[#E8D5C8] pb-3 text-sm focus:border-brand-gold outline-none transition-colors rounded-none px-0 text-[#2D2926]" placeholder="Nome" />
                   </div>
                 </div>

                 <div className="space-y-3">
                     <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gold">Sua Mensagem / Detalhes do Casamento</label>
                     <textarea rows={4} className="w-full bg-transparent border-b border-[#E8D5C8] pb-3 text-sm focus:border-brand-gold outline-none transition-colors resize-none rounded-none px-0 text-[#2D2926]" placeholder="Conte-nos sobre o seu dia..."></textarea>
                 </div>

                 <button type="button" className="w-full py-5 bg-[#2D2926] text-[#FAF9F6] text-[11px] tracking-[0.3em] uppercase hover:bg-brand-gold transition-all duration-500 shadow-xl">
                    Solicitar Orçamento
                 </button>
               </form>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
