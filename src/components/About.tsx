import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { useSEO } from '../hooks/useSEO';

export function About() {
  useSEO({
    title: "Sobre Nós",
    description: "Conheça a história por trás das lentes da Afetos. Jader Figueiredo e sua equipe de alta costura fotográfica e cinematográfica registrando o amor real.",
    image: "https://afetos-casamentos.vercel.app/logo.jpg"
  });
  return (
    <div className="w-full pb-20 bg-brand-ice">
      {/* Hero */}
      <section className="h-[70vh] relative flex items-center justify-center overflow-hidden bg-[#2D2926]">
         <img 
            src="https://images.unsplash.com/photo-1542042161784-26ab9e041e89?q=80&w=2670&auto=format&fit=crop" 
            alt="Bastidores" 
            className="absolute inset-0 w-full h-full object-cover opacity-50"
         />
         <div className="relative z-10 text-center px-4">
             <FadeIn direction="up">
                 <h1 className="text-5xl md:text-[84px] font-serif text-[#FAF9F6] mb-6 leading-[0.9]">Nossa História</h1>
                 <p className="text-[#E0D2C7] tracking-[0.4em] uppercase text-[10px] font-bold">Por trás das lentes</p>
             </FadeIn>
         </div>
      </section>

      {/* Story */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
            <FadeIn direction="up">
               <h2 className="text-3xl md:text-5xl font-serif text-[#2D2926] mb-12 italic leading-tight">
                 Fotografia como veículo de afeição e memória
               </h2>
               <div className="space-y-6 text-[#5A5550] font-light leading-relaxed text-base italic max-w-2xl mx-auto">
                  <p>
                    Acreditamos que o casamento não é apenas um evento social, mas a celebração mais crua e palpável da conexão humana. Nosso papel é ser o observador silencioso dessa mágica acontecendo.
                  </p>
                  <p>
                    Fundada por Jader Figueiredo, a Afetos nasceu da frustração com a fotografia de casamento tradicional, frequentemente engessada e focada apenas em poses artificiais. Queríamos mais. Queríamos movimento, vento no cabelo, risadas descontroladas e lágrimas soltas.
                  </p>
               </div>
            </FadeIn>
        </div>
      </section>

      {/* Values Timeline */}
      <section className="py-32 bg-brand-nude/40">
         <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center mb-20 flex flex-col items-center">
               <div className="flex items-center gap-4 mb-4">
                 <div className="h-[1px] w-8 bg-brand-gold opacity-50"></div>
                 <h4 className="text-brand-gold text-[10px] tracking-[0.5em] uppercase font-bold">Nossa Filosofia</h4>
                 <div className="h-[1px] w-8 bg-brand-gold opacity-50"></div>
               </div>
               <h2 className="text-4xl md:text-[56px] font-serif text-[#2D2926] leading-[0.9]">Os Pilares da Afetos</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
               <FadeIn direction="up" delay={0.1}>
                  <div className="w-16 h-16 mx-auto bg-[#FAF9F6] rounded-none shadow-xl flex items-center justify-center mb-6 text-2xl font-serif italic text-brand-gold border border-white">
                    01
                  </div>
                  <h3 className="text-2xl font-serif text-[#2D2926] mb-4 italic">Direção Emocional</h3>
                  <p className="text-[#5A5550] font-light text-sm leading-relaxed">Não ditamos os momentos, nós os regemos. Criamos uma atmosfera segura onde a verdadeira conexão do casal pode aflorar sem interferências rígidas.</p>
               </FadeIn>
               
               <FadeIn direction="up" delay={0.2}>
                  <div className="w-16 h-16 mx-auto bg-[#FAF9F6] rounded-none shadow-xl flex items-center justify-center mb-6 text-2xl font-serif italic text-brand-gold border border-white">
                    02
                  </div>
                  <h3 className="text-2xl font-serif text-[#2D2926] mb-4 italic">Qualidade Cinematográfica</h3>
                  <p className="text-[#5A5550] font-light text-sm leading-relaxed">Equipamentos de alta tecnologia aliados a um olhar artístico apurado. A gradagem de cor e montagem remetem à grandiosidade do cinema.</p>
               </FadeIn>

               <FadeIn direction="up" delay={0.3}>
                  <div className="w-16 h-16 mx-auto bg-[#FAF9F6] rounded-none shadow-xl flex items-center justify-center mb-6 text-2xl font-serif italic text-brand-gold border border-white">
                    03
                  </div>
                  <h3 className="text-2xl font-serif text-[#2D2926] mb-4 italic">Atendimento Exclusivo</h3>
                  <p className="text-[#5A5550] font-light text-sm leading-relaxed">Aceitamos um volume limitado de casamentos por ano para garantir que cada casal receba atenção irrestrita e uma experiência humanizada do início ao fim.</p>
               </FadeIn>
            </div>
         </div>
      </section>
    </div>
  );
}
