import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { useSEO } from '../hooks/useSEO';

export function Portfolio() {
  useSEO({
    title: "Galeria Cinematográfica",
    description: "Navegue pelo nosso acervo de memórias e trabalhos de casamentos eternizados em filmes e fotografias fine art por Jader Figueiredo.",
    image: "/logo.jpg"
  });
  const categories = ["Todos", "Wedding Film", "Casamento", "Pré-Wedding", "Elopement"];
  const [activeCategory, setActiveCategory] = React.useState("Todos");

  const projects = [
    { id: 1, type: "Casamento", title: "Marina & Lucas", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2669&auto=format&fit=crop", format: "video" },
    { id: 2, type: "Pré-Wedding", title: "Ana & Pedro na Toscana", img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2574&auto=format&fit=crop", format: "image" },
    { id: 3, type: "Casamento", title: "Sofia & Tiago", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop", format: "image" },
    { id: 4, type: "Elopement", title: "Julia & Rafael", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2670&auto=format&fit=crop", format: "image" },
    { id: 5, type: "Wedding Film", title: "Camila & Enzo", img: "https://images.unsplash.com/photo-1583939000340-9602e1c944ad?q=80&w=2687&auto=format&fit=crop", format: "video" },
    { id: 6, type: "Casamento", title: "Beatriz & João", img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2670&auto=format&fit=crop", format: "image" },
  ];

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.type === activeCategory || (activeCategory === "Wedding Film" && p.format === "video"));

  return (
    <div className="w-full min-h-screen bg-brand-ice pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-20 text-center flex flex-col items-center">
          <FadeIn direction="up">
             <div className="flex items-center gap-4 mb-4 justify-center">
                 <div className="h-[1px] w-8 bg-brand-gold opacity-50"></div>
                 <h4 className="text-brand-gold text-[10px] tracking-[0.5em] uppercase font-bold">Acervo de Memórias</h4>
                 <div className="h-[1px] w-8 bg-brand-gold opacity-50"></div>
             </div>
             <h1 className="text-5xl md:text-[64px] font-serif text-[#2D2926] mb-6 leading-tight">Galeria Cinematográfica</h1>
             <p className="text-[#5A5550] font-light max-w-2xl mx-auto italic text-base">
               Um olhar atento para as histórias reais. Navegue pelo nosso acervo de memórias eternizadas em filmes e fotografias fine art.
             </p>
          </FadeIn>
        </div>

        {/* Filters */}
        <FadeIn direction="up" delay={0.2} className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-1 text-[10px] tracking-[0.3em] font-medium uppercase transition-all duration-300 ${
                activeCategory === cat 
                  ? 'text-[#2D2926] border-b border-[#2D2926] font-bold' 
                  : 'text-[#8E8279] hover:text-brand-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
             <FadeIn key={project.id} direction="up" delay={idx * 0.1}>
                 <div className="group cursor-pointer relative overflow-hidden bg-brand-nude border-[8px] border-white shadow-xl">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className={`w-full object-cover transition-transform duration-1000 group-hover:scale-105 ${
                        idx % 3 === 0 ? 'h-[600px]' : 'h-[400px]'
                      }`}
                    />
                    
                    {project.format === 'video' && (
                      <div className="absolute top-4 right-4 bg-white/40 backdrop-blur-md px-4 py-2 border border-white/50 text-[9px] uppercase tracking-[0.3em] text-[#2D2926] font-bold z-20">
                        Film
                      </div>
                    )}

                    <div className="absolute inset-0 bg-brand-sand mix-blend-multiply opacity-20 z-10 transition-opacity duration-500 group-hover:opacity-40"></div>

                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
                       <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-6">
                          <p className="text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-2 font-bold">{project.type}</p>
                          <h3 className="text-white text-3xl font-serif italic">{project.title}</h3>
                       </div>
                    </div>
                 </div>
             </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
}
