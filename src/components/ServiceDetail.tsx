import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Video, Sparkles, Heart, ArrowLeft, Calendar } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { useSEO } from '../hooks/useSEO';

interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  image: string;
  includes: string[];
  gallery: string[];
}

const servicesData: Record<string, ServiceData> = {
  'wedding-film': {
    slug: 'wedding-film',
    title: 'Wedding Film',
    subtitle: 'Edição Cinematográfica',
    description: 'Produção cinematográfica com roteiro emocional, capturando a essência e o ritmo único do seu dia. Transformamos o dia mais feliz da sua vida em um filme de cinema.',
    details: 'Nosso processo de criação de vídeo baseia-se em capturar sentimentos verdadeiros, sem poses artificiais. Utilizamos equipamentos de ponta de cinema digital, lentes anamórficas e uma gradagem de cores minuciosa e artística para que seu filme pareça uma production de cinema de herança. A edição é ritmada pelo áudio original dos seus votos e discursos, compondo uma obra inestimável.',
    icon: <Video className="w-8 h-8 text-brand-gold" />,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop',
    includes: [
      'Cobertura completa por 2 filmmakers especializados',
      'Filme de destaque (Highlight Film de 4 a 6 minutos)',
      'Documentário de casamento completo (15 a 20 minutos)',
      'Imagens aéreas em 4K de alta definição (Drones)',
      'Captação de áudio profissional dos votos e discursos',
      'Entrega digital segura em galeria na nuvem'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2669&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2670&auto=format&fit=crop'
    ]
  },
  'fotografia-fine-art': {
    slug: 'fotografia-fine-art',
    title: 'Fotografia Fine Art',
    subtitle: 'Curadoria Visual Artística',
    description: 'Imagens com tratamento meticuloso, cores suaves inspiradas em filmes analógicos clássicos e um olhar artístico para compor álbuns de herança de família.',
    details: 'A fotografia Fine Art vai além do mero registro visual. Ela busca a composição perfeita, o jogo de luz e sombra natural e o sentimento cru do momento. Cada foto passa por um processo meticuloso de pós-produção para alcançar tons e granulações poéticas de herança familiar. Nosso olhar é focado no amor, nos sorrisos sinceros e nos instantes que muitas vezes passam despercebidos.',
    icon: <Camera className="w-8 h-8 text-brand-gold" />,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2670&auto=format&fit=crop',
    includes: [
      'Cobertura fotográfica com 2 fotógrafos principais',
      'Curadoria artística de até 800 fotos tratadas individualmente',
      'Galeria online protegida por senha por 1 ano',
      'Álbum físico impresso Fine Art com estojo de linho premium',
      'Ensaio digital de alta resolução com direitos autorais livres'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2669&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2574&auto=format&fit=crop'
    ]
  },
  'pre-wedding': {
    slug: 'pre-wedding',
    title: 'Pré-Wedding',
    subtitle: 'Histórias Reais de Conexão',
    description: 'Um ensaio intimista e leve para celebrar a conexão do casal antes do grande dia, em locações naturais e deslumbrantes.',
    details: 'O pré-wedding é uma experiência de conexão e diversão. Não se trata de posar para a câmera, mas de passar uma tarde leve e romântica em uma locação incrível, como praias desertas, campos ou montanhas. O resultado são registros autênticos e repletos de cumplicidade, que mostram quem vocês são quando estão na presença um do outro.',
    icon: <Sparkles className="w-8 h-8 text-brand-gold" />,
    image: 'https://images.unsplash.com/photo-1583939000340-9602e1c944ad?q=80&w=2687&auto=format&fit=crop',
    includes: [
      'Ensaio com duração de até 4 horas',
      'Direção emocional leve, levemente guiada',
      'Seleção de até 150 fotos tratadas em alta resolução',
      'Auxílio completo na escolha de looks e locais artísticos',
      'Galeria digital de fácil download e compartilhamento'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1583939000340-9602e1c944ad?q=80&w=2687&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop'
    ]
  },
  'elopement': {
    slug: 'elopement',
    title: 'Elopement Wedding',
    subtitle: 'Casamento Íntimo a Dois',
    description: 'Uma fuga romântica e minimalista focada unicamente na promessa de amor do casal, em cenários cinematográficos na natureza.',
    details: 'Para casais que buscam uma celebração ultra-intimista, sem as preocupações e a pressa de uma grande recepção tradicional. O Elopement foca na essência pura da união, com votos profundos e sinceros diante de paisagens monumentais (como praias desertas, cachoeiras, picos de montanhas ou ruínas carregadas de história). Um dia dedicado ao sentir.',
    icon: <Heart className="w-8 h-8 text-brand-gold" />,
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2574&auto=format&fit=crop',
    includes: [
      'Cobertura fotográfica e filmagem por 4 horas',
      'Assistência na escolha e curadoria estética do destino',
      'Votos gravados com lapelas profissionais para alta fidelidade',
      'Seleção de até 200 fotos curadas e tratadas',
      'Mini-documentário editado em estilo cinema (3 a 5 minutos)'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583939000340-9602e1c944ad?q=80&w=2687&auto=format&fit=crop'
    ]
  }
};

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  useSEO({
    title: service ? `${service.title} - ${service.subtitle}` : 'Serviço',
    description: service ? service.description : 'Detalhes do serviço de casamentos.',
    image: service ? service.image : 'https://afetos-casamentos.vercel.app/logo.jpg'
  });

  if (!service) {
    return (
      <div className="min-h-screen bg-brand-ice flex flex-col items-center justify-center pt-24 px-6 text-center">
        <h2 className="text-4xl font-serif text-[#2D2926] mb-4">Serviço não encontrado</h2>
        <p className="text-[#5A5550] mb-8 font-light italic">Pedimos desculpas, mas o serviço solicitado não existe ou foi removido.</p>
        <Link to="/" className="px-8 py-4 bg-[#2D2926] text-white tracking-widest text-[10px] uppercase hover:bg-brand-gold transition-colors">
          Voltar para Home
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-brand-ice min-h-screen pb-32">
      {/* Hero Section */}
      <section className="h-[60vh] relative flex items-center justify-center overflow-hidden bg-[#2D2926]">
        <img 
          src={service.image} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ice via-black/30 to-transparent z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl pt-16">
          <FadeIn direction="up">
            <Link to="/" className="inline-flex items-center gap-2 text-brand-rose hover:text-brand-gold text-[10px] uppercase tracking-widest mb-6 transition-colors">
              <ArrowLeft className="w-3 h-3" /> Voltar para o início
            </Link>
            <div className="flex items-center justify-center gap-3 mb-4">
              {service.icon}
              <span className="text-brand-gold font-serif italic text-lg">{service.subtitle}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 leading-none">{service.title}</h1>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-[1px] bg-brand-gold/30"></div>
        <div className="absolute top-1/2 left-0 w-16 h-[1px] bg-brand-gold/30"></div>

        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Details & Description */}
            <div className="lg:col-span-7">
              <FadeIn direction="up">
                <h2 className="text-3xl md:text-5xl font-serif text-[#2D2926] mb-8 leading-tight">
                  A vivência e a cura de registrar a sua <span className="italic text-brand-gold font-light">verdadeira história</span>.
                </h2>
                <div className="space-y-6 text-[#5A5550] font-sans font-light text-base md:text-lg leading-relaxed">
                  <p className="font-serif italic text-[#8E8279] text-xl border-l-2 border-brand-gold/40 pl-4 py-1 mb-8">
                    "{service.description}"
                  </p>
                  <p className="whitespace-pre-line text-justify font-light italic font-serif">
                    {service.details}
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Inclusions & CTA Card */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-[#F2EBE3] border-[12px] border-white p-8 md:p-10 shadow-2xl rounded-none">
                  <h3 className="text-2xl font-serif text-[#2D2926] mb-6 italic border-b border-brand-sand pb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-brand-gold" /> O que está incluído
                  </h3>
                  <ul className="space-y-4">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#5A5550] font-light">
                        <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-8 border-t border-brand-sand flex flex-col items-center">
                    <Link 
                      to="/contato" 
                      className="w-full py-4 bg-[#2D2926] text-white text-[10px] tracking-[0.3em] font-bold uppercase text-center hover:bg-brand-gold transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" /> Agendar Briefing Exclusivo
                    </Link>
                    <p className="text-[10px] text-brand-gold uppercase tracking-widest mt-4 font-bold">Vagas limitadas por temporada</p>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Concept Gallery */}
      <section className="py-20 bg-brand-nude/30 border-y border-brand-sand/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 text-center">
            <FadeIn direction="up">
               <span className="text-brand-gold text-[10px] tracking-[0.5em] uppercase font-bold">Curadoria Visual</span>
               <h3 className="text-3xl md:text-5xl font-serif text-[#2D2926] italic mt-2">Lampejos do Sentir</h3>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.gallery.map((img, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.15}>
                <div className="group relative overflow-hidden bg-white border-[8px] border-white shadow-xl aspect-[3/4]">
                  <div className="absolute inset-0 bg-brand-sand mix-blend-multiply opacity-15 z-10 group-hover:opacity-30 transition-opacity duration-500" />
                  <img 
                    src={img} 
                    alt={`Galeria ${service.title}`} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
