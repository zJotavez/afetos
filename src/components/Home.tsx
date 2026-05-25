import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { useSEO } from '../hooks/useSEO';

export function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const [activeVideoId, setActiveVideoId] = React.useState<string | null>(null);

  useSEO({
    title: "Eternizando Histórias Reais",
    description: "Afetos Eternos - Fotografia e Cinematografia de casamento Fine Art por Jader Figueiredo. Registramos sentimentos espontâneos com sensibilidade e estética cinematográfica nobre.",
    image: "/logo.jpg"
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-brand-ice flex items-center">
        {/* Background YouTube Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <iframe
            src="https://www.youtube.com/embed/wn_N5Xh3OM8?autoplay=1&mute=1&loop=1&playlist=wn_N5Xh3OM8&controls=0&showinfo=0&rel=0&playsinline=1&enablejsapi=1&iv_load_policy=3&vq=hd1080"
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 object-cover opacity-[0.88] scale-[1.12] md:scale-[1.35]"
            allow="autoplay; encrypted-media"
            frameBorder="0"
            title="Background Video"
          />
        </div>

        {/* Sophisticated light gradient overlay: solid/semi-solid on the left, fading to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ice via-brand-ice/90 md:via-brand-ice/75 to-transparent z-10" />

        {/* Hero Content */}
        <div className="relative z-20 w-full container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
            
            {/* Left Column: Premium Typography & Branding */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <FadeIn direction="up" delay={0.5}>
                <div className="flex items-center gap-3 mb-6">
                   <div className="h-[1px] w-8 bg-brand-gold"></div>
                   <span className="text-[10px] tracking-[0.4em] uppercase text-brand-gold font-bold">
                     Jader Figueiredo &bull; Fotografia & Film
                   </span>
                </div>
              </FadeIn>
              
              <FadeIn direction="up" delay={0.8}>
                <div className="flex flex-col items-start gap-6 mb-8">
                  {/* Logo circular com CSS mask para remover o fundo escuro */}
                  <div className="hidden md:block w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-brand-gold/30 shadow-[0_15px_40px_rgba(180,151,90,0.15)] relative bg-white transition-transform duration-500 hover:scale-105">
                    <img 
                      src="/logo.jpg" 
                      alt="Afetos" 
                      className="w-full h-full object-cover scale-[1.38]" 
                    />
                  </div>
                  <h1 className="text-[#2D2926] text-4xl md:text-5xl lg:text-[56px] font-serif leading-[1.1] tracking-tight">
                    <span className="italic text-brand-gold font-light block">
                      transformando momentos
                    </span>
                  </h1>
                </div>
              </FadeIn>
              
              <FadeIn direction="up" delay={1.1}>
                <p className="text-[#5A5550] max-w-md font-sans font-light italic text-base md:text-lg leading-relaxed border-l-2 border-brand-gold/30 pl-4 py-1">
                  "Não capturamos apenas imagens, mas a respiração suspensa, o brilho nos olhos e a promessa de uma vida inteira."
                </p>
              </FadeIn>
            </div>

            {/* Right Column: Floating Picture Card (matching screenshot reference) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <FadeIn direction="left" delay={1.4}>
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="relative w-full max-w-[340px] md:max-w-[380px] aspect-[3/4] bg-white border-[12px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[40px] overflow-hidden"
                >
                  {/* Subtle texture overlay for vintage feel */}
                  <div className="absolute inset-0 bg-brand-sand mix-blend-multiply opacity-20 z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2574&auto=format&fit=crop" 
                    alt="Conexão e Afeto" 
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  {/* Glassmorphic Badge on the Image Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/40 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/50 text-center z-20">
                     <span className="text-[10px] uppercase tracking-widest text-[#2D2926] font-bold">Estética Fine Art &bull; 2026</span>
                  </div>
                </motion.div>
              </FadeIn>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center"
        >
          <div className="w-[1px] h-12 bg-[#2D2926]/10 overflow-hidden relative">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-1/2 bg-brand-gold absolute top-0"
            />
          </div>
        </motion.div>
      </section>

      {/* Essence Section (Sobre) */}
      <section className="py-32 px-6 bg-brand-ice relative overflow-hidden">
        {/* Camera Elements & Geometric Forms in background */}
        <div className="absolute top-1/2 left-0 w-32 h-[1px] bg-brand-gold/30"></div>
        <div className="absolute top-12 left-12 w-24 h-24 rounded-full border border-brand-gold/10 pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full border border-brand-gold/10 pointer-events-none"></div>
        
        {/* Subtle camera lens outline diagram in SVG */}
        <svg className="absolute -right-24 -top-24 w-96 h-96 text-brand-gold/10 pointer-events-none animate-spin-slow" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="22" />
          <circle cx="50" cy="50" r="8" />
          <line x1="5" y1="50" x2="95" y2="50" />
          <line x1="50" y1="5" x2="50" y2="95" />
          <line x1="18" y1="18" x2="82" y2="82" />
          <line x1="18" y1="82" x2="82" y2="18" />
        </svg>

        <svg className="absolute -left-20 bottom-10 w-80 h-80 text-brand-gold/10 pointer-events-none animate-spin-slow" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3" style={{ animationDirection: 'reverse' }}>
          <circle cx="50" cy="50" r="45" />
          <line x1="5" y1="50" x2="50" y2="5" />
          <line x1="50" y1="5" x2="95" y2="50" />
          <line x1="95" y1="50" x2="50" y2="95" />
          <line x1="50" y1="95" x2="5" y2="50" />
        </svg>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Dynamic Photo Collage */}
            <div className="relative">
              <FadeIn direction="right">
                <div className="relative w-full max-w-md mx-auto lg:mr-auto aspect-[3/4] h-[500px]">
                  {/* Photo Base */}
                  <div className="absolute top-10 left-0 w-[80%] h-[75%] bg-white border-8 border-white shadow-2xl overflow-hidden rounded-3xl transform -rotate-6 z-10 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-brand-sand mix-blend-multiply opacity-15"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2574&auto=format&fit=crop" 
                      alt="Essência Casamento" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Overlaid Photo Top Right */}
                  <div className="absolute top-0 right-4 w-[60%] h-[60%] bg-white border-8 border-white shadow-2xl overflow-hidden rounded-3xl transform rotate-12 z-20 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-brand-sand mix-blend-multiply opacity-15"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2669&auto=format&fit=crop" 
                      alt="Sorriso de Casal" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Overlaid Photo Bottom Center */}
                  <div className="absolute -bottom-6 left-12 w-[55%] h-[50%] bg-white border-8 border-white shadow-2xl overflow-hidden rounded-3xl transform -rotate-12 z-30 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-brand-sand mix-blend-multiply opacity-15"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop" 
                      alt="Beijo Eterno" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* About Text Block */}
            <div>
              <FadeIn direction="left" delay={0.2}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[1px] w-8 bg-brand-gold opacity-50"></div>
                  <h4 className="text-brand-gold text-[10px] tracking-[0.5em] uppercase font-bold">A essência da Afetos</h4>
                </div>
                <h2 className="text-4xl md:text-[56px] font-serif text-[#2D2926] mb-8 leading-[0.9]">
                  A arte de observar a beleza das <span className="italic text-brand-gold font-light">conexões</span>.
                </h2>
                <div className="space-y-6 text-[#5A5550] font-sans font-light italic leading-relaxed text-base">
                  <p>
                    Muito prazer, sou Jader Figueiredo. Mais do que fotógrafo e filmmaker, me considero um contador de histórias reais. Minha busca é pela autenticidade do sentir: o abraço apertado que não foi posado, a lágrima que escapou no altar, o sorriso solto na festa.
                  </p>
                  <p>
                    A Afetos nasceu do desejo de criar um registro que transcenda o tempo e o convencional. Trabalhamos com uma estética cinematográfica, luz natural e direção sensível para que, daqui a décadas, vocês não apenas vejam como estavam vestidos, mas sintam exatamente a mesma emoção daquele dia.
                  </p>
                </div>
                
                <div className="mt-12 flex items-center space-x-6 border-t border-brand-sand pt-8">
                   <div className="text-center md:text-left">
                     <p className="font-serif italic text-xl text-[#8E8279]">Jader Figueiredo</p>
                     <p className="text-[9px] text-brand-gold tracking-widest uppercase mt-1">Fundador & Diretor Artístico</p>
                   </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section with Diagonal X Tickers */}
      <section id="services" className="py-24 bg-brand-nude/20 relative overflow-hidden">
        {/* Double Crossed Bands (Marquees in X) */}
        <div className="relative h-64 w-full overflow-hidden bg-brand-nude/40 flex items-center justify-center border-y border-brand-sand/40 my-16">
          {/* Faixa 1 (Inclinada para cima / da Esquerda para Direita) */}
          <div className="absolute w-[180%] h-14 bg-brand-gold text-brand-ice flex items-center overflow-hidden rotate-[-4deg] z-10 shadow-lg border-y border-white/20">
            <div className="flex whitespace-nowrap animate-marquee-left font-serif italic text-base uppercase tracking-[0.2em]">
              {Array(10).fill("FOTOGRAFIA FINE ART • CINEMA DE CASAMENTO • HISTÓRIAS REAIS • CONEXÃO EMOCIONAL • ").map((text, idx) => (
                <span key={idx} className="mx-4">{text}</span>
              ))}
            </div>
          </div>
          
          {/* Faixa 2 (Inclinada para baixo / da Direita para Esquerda) */}
          <div className="absolute w-[180%] h-14 bg-[#2D2926] text-brand-gold flex items-center overflow-hidden rotate-[4deg] z-20 shadow-xl border-y border-brand-gold/25">
            <div className="flex whitespace-nowrap animate-marquee-right font-serif italic text-base uppercase tracking-[0.2em]">
              {Array(10).fill("AFETOS ETERNOS • EMOÇÃO CRUA • MEMÓRIAS DE FAMÍLIA • LUZ NATURAL • ESTÉTICA CINEMA • ").map((text, idx) => (
                <span key={idx} className="mx-4">{text}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-30">
          <FadeIn direction="up">
            <div className="text-center mb-28 flex flex-col items-center">
              <div className="flex items-center gap-4 mb-4">
                 <div className="h-[1px] w-8 bg-brand-gold opacity-50"></div>
                 <h4 className="text-brand-gold text-[10px] tracking-[0.5em] uppercase font-bold">Curadoria de Sentimentos</h4>
                 <div className="h-[1px] w-8 bg-brand-gold opacity-50"></div>
              </div>
              <h2 className="text-4xl md:text-[56px] font-serif text-[#2D2926] leading-tight">Experiências Afetos</h2>
              <p className="text-[#5A5550] max-w-md mx-auto font-sans font-light italic text-sm mt-4">Nossos serviços dispostos como um caminho poético e com páginas individuais completas de detalhes.</p>
            </div>
          </FadeIn>

          {/* Path of Services (Alternating layout in Zig-Zag) */}
          <div className="space-y-36">
            {[
              {
                id: "wedding-film",
                title: "Wedding Film",
                subtitle: "Cinema de Casamento",
                desc: "Produção cinematográfica com roteiro emocional, capturando a essência e o ritmo único do seu dia. Transformamos o dia mais feliz da sua vida em um filme de cinema memorável.",
                img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop",
                alignRight: true
              },
              {
                id: "fotografia-fine-art",
                title: "Fotografia Fine Art",
                subtitle: "Curadoria Visual",
                desc: "Imagens com tratamento meticuloso, cores suaves inspiradas em filmes analógicos e um olhar artístico para compor álbuns de herança que atravessarão as gerações.",
                img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2670&auto=format&fit=crop",
                alignRight: false
              },
              {
                id: "pre-wedding",
                title: "Pré-Wedding",
                subtitle: "Histórias Reais",
                desc: "Um ensaio intimista e leve para celebrar a conexão do casal antes do grande dia, em locações naturais deslumbrantes que realçam a cumplicidade do amor de vocês.",
                img: "https://images.unsplash.com/photo-1583939000340-9602e1c944ad?q=80&w=2687&auto=format&fit=crop",
                alignRight: true
              },
              {
                id: "elopement",
                title: "Elopement Wedding",
                subtitle: "Casamento Íntimo",
                desc: "Uma fuga romântica e minimalista focada unicamente na promessa de amor do casal, diante de cenários cinematográficos monumentais na natureza selvagem.",
                img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2574&auto=format&fit=crop",
                alignRight: false
              }
            ].map((service) => (
              <FadeIn key={service.id} direction={service.alignRight ? "left" : "right"}>
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${service.alignRight ? "" : "lg:flex-row-reverse"}`}>
                  
                  {/* Photo Component */}
                  <div className={`lg:col-span-6 ${service.alignRight ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative group overflow-hidden bg-brand-nude border-[12px] border-white shadow-2xl rounded-none aspect-[16/10]">
                       <div className="absolute inset-0 bg-brand-sand mix-blend-multiply opacity-15 z-10 transition-opacity duration-500 group-hover:opacity-35" />
                       <img 
                         src={service.img} 
                         alt={service.title} 
                         className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                       />
                    </div>
                  </div>

                  {/* Text Component */}
                  <div className={`lg:col-span-6 ${service.alignRight ? "lg:order-1 text-left" : "lg:order-2 text-left"}`}>
                    <span className="text-brand-gold text-[10px] tracking-[0.4em] uppercase font-bold">{service.subtitle}</span>
                    <h3 className="text-3xl md:text-5xl font-serif text-[#2D2926] mt-2 mb-6 italic">{service.title}</h3>
                    <p className="text-[#5A5550] font-sans font-light italic leading-relaxed text-base mb-8">{service.desc}</p>
                    <a 
                      href={`/servico/${service.id}`} 
                      className="inline-block border-b border-[#2D2926] pb-1 text-[10px] tracking-[0.3em] font-bold uppercase hover:text-brand-gold hover:border-brand-gold transition-all duration-300"
                    >
                      Descobrir Experiência &rarr;
                    </a>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Double Horizontal Video Loops (Bidirectional) */}
      <section className="py-28 bg-[#2D2926] overflow-hidden border-y border-brand-gold/15 relative">
        {/* SVG background grid */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto px-6 max-w-7xl mb-16 relative z-10">
          <FadeIn direction="up">
            <div className="text-center">
               <span className="text-brand-gold text-[10px] tracking-[0.5em] uppercase font-bold">Acervo Cinematográfico</span>
               <h2 className="text-3xl md:text-5xl font-serif text-white italic mt-2">Lampejos de Movimento</h2>
               <p className="text-brand-rose/60 max-w-sm mx-auto font-sans font-light italic text-xs mt-3">Frames e recortes em loops infinitos do YouTube. Clique para reproduzir com som.</p>
            </div>
          </FadeIn>
        </div>

        <div className="space-y-10 w-full relative z-10">
          {/* Row 1: Left to Right */}
          <div className="flex overflow-hidden w-full relative">
            <div className="flex gap-6 whitespace-nowrap animate-marquee-left">
              {Array(2).fill([
                "wn_N5Xh3OM8",
                "IqloOTsYFLA",
                "eC8qEWUbLQs",
                "dcPDa8cuHss",
                "5P-i1js_RKM",
                "hW3R92asUrk",
                "Xme80F2hHAA",
                "mOBB4si1qHk",
                "9OkB8aymGRk"
              ]).flat().map((id, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveVideoId(id)}
                  className="w-80 h-48 md:w-[360px] md:h-[202px] bg-[#2D2926] shrink-0 overflow-hidden border-[6px] border-white shadow-2xl rounded-3xl relative cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/90 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-brand-sand mix-blend-multiply opacity-10 z-10"></div>
                  <img 
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} 
                    alt="Cena de Casamento" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="flex overflow-hidden w-full relative">
            <div className="flex gap-6 whitespace-nowrap animate-marquee-right">
              {Array(2).fill([
                "1Y77bXWmX1g",
                "t2VXt3tHlT0",
                "wy2SI6LgHKo",
                "2lc8uCPPqck",
                "gmWRbFRQ9MY",
                "fENJGyzT6L4",
                "I0n4294McoA",
                "nTk5ul6YM2w",
                "_D6zub1W-jI"
              ]).flat().map((id, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveVideoId(id)}
                  className="w-80 h-48 md:w-[360px] md:h-[202px] bg-[#2D2926] shrink-0 overflow-hidden border-[6px] border-white shadow-2xl rounded-3xl relative cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/90 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-brand-sand mix-blend-multiply opacity-10 z-10"></div>
                  <img 
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} 
                    alt="Cena de Casamento" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Photo Gallery Section */}
      <section className="py-32 bg-brand-ice relative overflow-hidden">
        {/* Subtle camera diagram in background */}
        <div className="absolute top-1/3 right-10 w-32 h-32 rounded-full border border-brand-gold/10 pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-10 w-24 h-24 rounded-full border border-brand-gold/10 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <FadeIn direction="up">
            <div className="text-center mb-24">
               <span className="text-brand-gold text-[10px] tracking-[0.5em] uppercase font-bold">Galeria Artística</span>
               <h2 className="text-4xl md:text-[56px] font-serif text-[#2D2926] leading-none mt-2">Lampejos Eternos</h2>
               <p className="text-[#5A5550] max-w-lg mx-auto font-sans font-light italic text-sm mt-4">Uma curadoria de momentos pausados no tempo, dispostos em mosaico de arte viva.</p>
            </div>
          </FadeIn>

          {/* Beautiful 3-Column Masonry Mosaico */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 md:gap-8">
              <FadeIn direction="up" delay={0.1}>
                <div className="group relative overflow-hidden bg-brand-nude border-4 md:border-[10px] border-white shadow-xl aspect-[3/4]">
                  <div className="absolute inset-0 bg-brand-sand mix-blend-multiply opacity-15 z-10 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2669&auto=format&fit=crop" 
                    alt="Mosaico Casamento 1" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <div className="group relative overflow-hidden bg-brand-nude border-4 md:border-[10px] border-white shadow-xl aspect-square">
                  <div className="absolute inset-0 bg-brand-sand mix-blend-multiply opacity-15 z-10 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop" 
                    alt="Mosaico Casamento 2" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </FadeIn>
            </div>

            {/* Column 2 (Y Shifted) */}
            <div className="flex flex-col gap-4 md:gap-8 md:translate-y-12">
              <FadeIn direction="up" delay={0.3}>
                <div className="group relative overflow-hidden bg-brand-nude border-4 md:border-[10px] border-white shadow-xl aspect-square">
                  <div className="absolute inset-0 bg-brand-sand mix-blend-multiply opacity-15 z-10 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2670&auto=format&fit=crop" 
                    alt="Mosaico Casamento 3" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <div className="group relative overflow-hidden bg-brand-nude border-4 md:border-[10px] border-white shadow-xl aspect-[3/4]">
                  <div className="absolute inset-0 bg-brand-sand mix-blend-multiply opacity-15 z-10 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2574&auto=format&fit=crop" 
                    alt="Mosaico Casamento 4" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </FadeIn>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 md:gap-8 col-span-2 md:col-span-1 grid grid-cols-2 md:flex md:flex-col">
              <FadeIn direction="up" delay={0.5} className="w-full">
                <div className="group relative overflow-hidden bg-brand-nude border-4 md:border-[10px] border-white shadow-xl aspect-[3/4] w-full">
                  <div className="absolute inset-0 bg-brand-sand mix-blend-multiply opacity-15 z-10 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1583939000340-9602e1c944ad?q=80&w=2687&auto=format&fit=crop" 
                    alt="Mosaico Casamento 5" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.6} className="w-full">
                <div className="group relative overflow-hidden bg-brand-nude border-4 md:border-[10px] border-white shadow-xl aspect-square w-full">
                  <div className="absolute inset-0 bg-brand-sand mix-blend-multiply opacity-15 z-10 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2670&auto=format&fit=crop" 
                    alt="Mosaico Casamento 6" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Jader Figueiredo Biography Section */}
      <section className="py-20 md:py-32 bg-brand-nude/30 relative overflow-hidden border-t border-brand-sand/50">
        {/* Abstract geometrical background */}
        <div className="absolute top-1/2 left-0 w-48 h-[1px] bg-brand-gold/30"></div>
        <div className="absolute right-12 bottom-12 w-32 h-32 rounded-full border border-brand-gold/10"></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Foto Coluna */}
            <div className="lg:col-span-5 flex justify-center">
              <FadeIn direction="right">
                <div className="relative w-full max-w-[320px] aspect-[3/4] bg-white border-4 md:border-[12px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                   <div className="absolute inset-0 bg-brand-sand mix-blend-multiply opacity-[0.05]"></div>
                   <img 
                     src="/jader.jpg" 
                     alt="Jader Figueiredo" 
                     className="w-full h-full object-cover opacity-95 transition-all duration-700 hover:scale-[1.03] hover:rotate-1" 
                   />
                   <div className="absolute bottom-4 left-4 right-4 bg-white/70 backdrop-blur-sm py-2 text-center text-[9px] uppercase tracking-widest text-[#2D2926] font-bold border border-white/50">
                     Diretor Artístico
                   </div>
                </div>
              </FadeIn>
            </div>

            {/* Informações Coluna */}
            <div className="lg:col-span-7 text-left">
              <FadeIn direction="left">
                <span className="text-brand-gold text-[10px] tracking-[0.5em] uppercase font-bold">O Fundador</span>
                <h2 className="text-4xl md:text-5xl font-serif text-[#2D2926] mt-2 mb-6 italic">Jader Figueiredo</h2>
                <div className="space-y-6 text-[#5A5550] font-sans font-light italic leading-relaxed text-base">
                   <p className="font-serif text-[#8E8279] text-xl border-l-2 border-brand-gold/40 pl-4 py-1 leading-relaxed">
                     "Acredito que os melhores momentos da vida acontecem no silêncio entre as grandes ações. A respiração profunda antes do sim, a lágrima discreta do pai, o toque suave das mãos."
                   </p>
                   <p>
                     Com mais de 10 anos de experiência na fotografia e no cinema, meu objetivo é fazer com que cada imagem e frame conte uma história sincera. Busco a estética das artes clássicas, aliada à sensibilidade do momento presente, para que o resultado transcenda gerações.
                   </p>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Concept Quote Card */}
      <section className="py-44 bg-[#2D2926] text-center relative overflow-hidden border-y border-brand-gold/25 flex items-center justify-center">
        {/* Sophisticated blurred background image with parallax effect */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2669&auto=format&fit=crop" 
            alt="Amor em foco" 
            className="w-full h-full object-cover filter blur-[2px] scale-105"
          />
        </div>
        
        {/* Dark luxury overlay with brand colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D2926]/95 via-[#2D2926]/90 to-[#2D2926]/95 z-10"></div>
        
        {/* Ambient glow in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] z-10"></div>
        
        <div className="container mx-auto px-6 max-w-4xl relative z-20">
          <FadeIn direction="up">
            {/* Elegant visual icon at the top */}
            <div className="flex items-center justify-center gap-4 mb-10">
               <div className="h-[1px] w-12 bg-brand-gold/45"></div>
               <div className="w-10 h-10 border border-brand-gold/40 rounded-full flex items-center justify-center">
                 <div className="w-2.5 h-2.5 bg-brand-gold rounded-full animate-pulse"></div>
               </div>
               <div className="h-[1px] w-12 bg-brand-gold/45"></div>
            </div>
            
            <div className="relative p-8 md:p-12 border border-brand-gold/20 backdrop-blur-sm bg-white/[0.02]">
               {/* Decorative frame angles */}
               <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-brand-gold/40"></div>
               <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-brand-gold/40"></div>
               <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-brand-gold/40"></div>
               <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-brand-gold/40"></div>
               
               <h3 className="text-3xl md:text-5xl font-serif text-[#FAF9F6] italic leading-relaxed font-light tracking-wide text-balance">
                 "O amor é a única coisa que o tempo não consegue apagar. Nós apenas garantimos que ele possa ser visto e sentido para sempre."
               </h3>
            </div>
            
            <p className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-bold mt-12">A Filosofia Afetos</p>
          </FadeIn>
        </div>
      </section>

      {/* Package / CTA Closing Card */}
      <section className="py-20 md:py-32 bg-brand-ice relative overflow-hidden border-t border-brand-sand/50">
        <div className="absolute top-1/2 right-0 w-32 h-[1px] bg-brand-gold/20"></div>
        <div className="absolute top-12 left-12 w-20 h-20 rounded-full border border-brand-gold/5"></div>
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <FadeIn direction="up">
            <div className="bg-[#F2EBE3] border-4 md:border-[12px] border-white p-5 md:p-16 shadow-[0_30px_70px_rgba(0,0,0,0.12)] text-center relative rounded-none">
              
              {/* Accent corner borders */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-brand-gold/30"></div>
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-brand-gold/30"></div>

              <span className="text-brand-gold text-[10px] tracking-[0.5em] uppercase font-bold">Agendamento & Vagas</span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#2D2926] italic mt-2 mb-6">Pronto para eternizar sua história?</h2>
              <p className="text-[#5A5550] max-w-lg mx-auto font-sans font-light text-sm md:text-base leading-relaxed mb-10 italic">
                Aceitamos apenas um número restrito de casamentos por temporada para garantir a dedicação máxima e exclusiva que a sua história merece. Entre em contato para verificar nossa disponibilidade.
              </p>

              {/* Elegant Form CTA */}
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[9px] uppercase tracking-widest text-[#2D2926] font-bold mb-2">Seu Nome</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Maria & João" 
                    className="w-full bg-white border border-brand-sand/60 p-3 font-sans font-light text-sm focus:outline-none focus:border-brand-gold transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-[9px] uppercase tracking-widest text-[#2D2926] font-bold mb-2">Seu E-mail</label>
                  <input 
                    type="email" 
                    placeholder="Ex: contato@exemplo.com" 
                    className="w-full bg-white border border-brand-sand/60 p-3 font-sans font-light text-sm focus:outline-none focus:border-brand-gold transition-colors" 
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[9px] uppercase tracking-widest text-[#2D2926] font-bold mb-2">Mensagem & Data Prevista</label>
                  <textarea 
                    rows={4} 
                    placeholder="Conte-nos um pouco sobre a história de vocês e a data desejada..." 
                    className="w-full bg-white border border-brand-sand/60 p-3 font-sans font-light text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none" 
                  />
                </div>
                <div className="md:col-span-2 mt-4">
                  <button 
                    type="submit" 
                    className="w-full py-4 bg-[#2D2926] text-[#FAF9F6] text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-xl cursor-pointer"
                  >
                    Solicitar Orçamento
                  </button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lightbox Video Modal */}
      {activeVideoId && (
        <div 
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 md:p-8 backdrop-blur-sm cursor-pointer"
          onClick={() => setActiveVideoId(null)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl border-4 border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveVideoId(null)}
              className="absolute -top-10 right-0 text-white hover:text-brand-gold flex items-center gap-2 text-[10px] uppercase tracking-widest transition-colors font-bold cursor-pointer"
            >
              Fechar &times;
            </button>
            
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&controls=1&rel=0`}
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              title="Player de Vídeo"
            />
          </div>
        </div>
      )}

      {/* Inline styles for Infinite Loop Marquees */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 35s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 35s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 55s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
