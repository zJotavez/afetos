import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, Video, Sparkles, Heart, ArrowLeft, Calendar, 
  Clock, Award, Play, Maximize2, X, ChevronRight, 
  MapPin, CheckCircle2, FileText, Compass, Film, Sliders
} from 'lucide-react';
import { FadeIn } from './FadeIn';
import { useSEO } from '../hooks/useSEO';

interface ProcessStep {
  title: string;
  subtitle: string;
  description: string;
}

interface QuoteData {
  text: string;
  couple: string;
  location: string;
}

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
  videos: string[];
  process: ProcessStep[];
  quote: QuoteData;
  duration: string;
  entregaveis: string;
}

const servicesData: Record<string, ServiceData> = {
  'wedding-film': {
    slug: 'wedding-film',
    title: 'Wedding Film',
    subtitle: 'Edição Cinematográfica',
    description: 'Produção cinematográfica com roteiro emocional, capturando a essência e o ritmo único do seu dia. Transformamos o dia mais feliz da sua vida em um filme de cinema.',
    details: 'Nosso processo de criação de vídeo baseia-se em capturar sentimentos verdadeiros, sem poses artificiais. Utilizamos equipamentos de ponta de cinema digital, lentes anamórficas e uma gradagem de cores minuciosa e artística para que seu filme pareça uma produção de cinema de herança. A edição é ritmada pelo áudio original dos seus votos e discursos, compondo uma obra inestimável.',
    icon: <Video className="w-8 h-8 text-brand-gold" />,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop',
    includes: [
      'Cobertura completa por 2 filmmakers especializados no dia',
      'Filme de destaque (Highlight Film de 4 a 6 minutos)',
      'Documentário de casamento completo (15 a 20 minutos)',
      'Imagens aéreas em 4K de alta definição com Drone',
      'Captação de áudio profissional dos votos e discursos',
      'Entrega digital segura em galeria na nuvem por tempo vitalício'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2669&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519225495810-7517c296517a?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2670&auto=format&fit=crop'
    ],
    videos: ['wn_N5Xh3OM8', 'IqloOTsYFLA'],
    duration: '12 a 14 horas de cobertura',
    entregaveis: 'Highlight Film + Documentário Completo + Teaser Redes',
    quote: {
      text: "O filme da Afetos capturou os suspiros e as lágrimas que nem nós mesmos sabíamos que tínhamos dado. Rever esse filme é voltar para aquele dia de corpo e de alma, revivendo toda a emoção.",
      couple: "Mariana & Thiago",
      location: "Elopement em Ilhabela / SP"
    },
    process: [
      {
        title: "Imersão de Conexão",
        subtitle: "Apostando na Essência",
        description: "Sentamos juntos para compreender a história de vocês, o ritmo que pulsa no relacionamento e os discursos mais importantes que regerão a narrativa do filme."
      },
      {
        title: "Presença Invisível",
        subtitle: "O Dia do Casamento",
        description: "Nossos cineastas capturam a movimentação de forma discreta e elegante, sem luzes invasivas ou direções robóticas. Deixamos o afeto real se manifestar naturalmente."
      },
      {
        title: "Roteiro & Sonoplastia",
        subtitle: "A Lapidação do Sentir",
        description: "Unimos os votos falados e os discursos dos pais para reger a trilha sonora e o ritmo de cada frame do filme, criando uma atmosfera altamente poética."
      },
      {
        title: "Alta Costura em Cores",
        subtitle: "Gradação de Cor de Cinema",
        description: "Tratamos cada frame individualmente para alcançar as cores ricas, os tons de pele perfeitos e a sensação clássica do cinema de herança analógico."
      }
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
      'Cobertura fotográfica premium com 2 fotógrafos principais no dia',
      'Curadoria artística de até 800 fotos tratadas individualmente',
      'Galeria online protegida por senha por tempo indeterminado',
      'Álbum físico impresso Fine Art com estojo de linho premium',
      'Ensaio digital de alta resolução com direitos autorais livres'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2669&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520854221256-17451cc35953?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop'
    ],
    videos: ['wy2SI6LgHKo', 'gmWRbFRQ9MY'],
    duration: '12 a 14 horas de cobertura',
    entregaveis: '800+ Fotos Tratadas + Álbum de Linho Italiano de Luxo',
    quote: {
      text: "Jader tem a sensibilidade de ver a beleza nos momentos de silêncio. As fotos parecem pinturas clássicas. O álbum físico é o maior e mais precioso tesouro da nossa família.",
      couple: "Beatriz & Guilherme",
      location: "Casamento Fine Art no Palácio Tangará / SP"
    },
    process: [
      {
        title: "Curadoria Estética",
        subtitle: "Estudo de Iluminação",
        description: "Analisamos a arquitetura do local do casamento e o posicionamento do sol para desenhar um mapa de luz natural deslumbrante e cenários ideais."
      },
      {
        title: "Direção Espontânea",
        subtitle: "O Dia do Casamento",
        description: "Estimulamos o movimento natural, risos inesperados e toques suaves, garantindo que vocês se reconheçam em cada imagem, sem poses congeladas ou artificiais."
      },
      {
        title: "Tratamento Analógico",
        subtitle: "Cores de Película Clássica",
        description: "Nossa pós-produção exclusiva confere às imagens o grão suave e a coloração orgânica das famosas películas fotográficas Fujifilm e Kodak Portra."
      },
      {
        title: "Confecção do Álbum",
        subtitle: "Herança de Família",
        description: "Desenhamos a diagramação de forma minimalista em papel de linho italiano, montando um livro que atravessará gerações contando essa história de amor."
      }
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
      'Ensaio fotográfico artístico com duração de até 5 horas',
      'Direção emocional leve, sutilmente guiada e autêntica',
      'Seleção de até 150 fotos tratadas individualmente em alta resolução',
      'Auxílio completo na curadoria de looks e seleção de locais de tirar o fôlego',
      'Galeria digital premium para fácil compartilhamento e download'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1583939000340-9602e1c944ad?q=80&w=2687&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507504038482-76214383635a?q=80&w=2574&auto=format&fit=crop'
    ],
    videos: ['2lc8uCPPqck', 't2VXt3tHlT0'],
    duration: '4 a 5 horas de vivência',
    entregaveis: '150+ Fotos Fine Art + Vídeo Teaser Vertical de Brinde',
    quote: {
      text: "Estávamos muito tímidos no início, mas a equipe da Afetos nos fez esquecer a câmera completamente. Passamos uma tarde leve, rindo e nos amando, e o resultado foi pura poesia visual.",
      couple: "Carolina & Pedro",
      location: "Ensaio nas Dunas de Itaúnas / ES"
    },
    process: [
      {
        title: "Curadoria de Locação",
        subtitle: "Encontrando o Cenário Perfeito",
        description: "Ajudamos a escolher um local que converse profundamente com a história do casal, seja um pico monumental na montanha ou o aconchego de uma praia deserta."
      },
      {
        title: "Figurino Editorial",
        subtitle: "Consultoria de Estilo Visual",
        description: "Orientamos sobre texturas, cores e caimentos das roupas que harmonizam poeticamente com o vento, o sol e a paleta do ambiente natural escolhido."
      },
      {
        title: "Uma Tarde de Leveza",
        subtitle: "A Vivência do Ensaio",
        description: "Sem pressa ou correria. Caminhamos juntos, tomamos um café e capturamos a cumplicidade, os carinhos e as risadas mais orgânicas de vocês."
      },
      {
        title: "Revelação Digital",
        subtitle: "Galeria Eterna em Alta velocidade",
        description: "Entregamos as fotos curadas em uma galeria digital rápida, com tratamento estético Fine Art focado no calor aconchegante da luz dourada."
      }
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
      'Cobertura fotográfica e filmagem artística de luxo por 6 horas',
      'Assessoria completa na escolha e curadoria estética do destino',
      'Votos gravados em áudio profissional de alta fidelidade',
      'Seleção de até 200 fotos curadas e tratadas individualmente',
      'Mini-documentário de casamento editado em estilo cinema (3 a 5 minutos)'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583939000340-9602e1c944ad?q=80&w=2687&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2670&auto=format&fit=crop'
    ],
    videos: ['fENJGyzT6L4', 'I0n4294McoA'],
    duration: '4 a 6 horas de cobertura',
    entregaveis: 'Mini-filme de Cinema + 200+ Fotos Fine Art Tratadas',
    quote: {
      text: "Escolhemos fugir para o topo de um cânion e dizer nossos votos só para nós dois. A sensibilidade da equipe da Afetos transformou esse momento íntimo em algo monumental e eterno.",
      couple: "Gabriela & Henrique",
      location: "Elopement nos Canyons de Praia Grande / SC"
    },
    process: [
      {
        title: "Logística de Aventura",
        subtitle: "Planejamento Geográfico",
        description: "Traçamos rotas exclusivas para locais inóspitos de beleza natural dramática, garantindo total privacidade durante a troca sincera de votos."
      },
      {
        title: "Roteiro de Votos",
        subtitle: "Captação Sonora Imersiva",
        description: "Estruturamos a acústica e a captação perfeita para que cada palavra sussurrada diante da natureza selvagem seja eternizada em alta fidelidade."
      },
      {
        title: "A Grande Promessa",
        subtitle: "O Dia da Fuga Romântica",
        description: "Fotografia e cinema de altíssimo padrão registrando a caminhada, a brisa fria do topo, a imensidão da paisagem e o calor da união de vocês."
      },
      {
        title: "Obra de Cinema",
        subtitle: "Edição do Filme Curta-Metragem",
        description: "Editamos um curta-metragem cinematográfico poético, combinando imagens aéreas épicas de drone, trilha autoral e o áudio marcante dos seus discursos."
      }
    ]
  }
};

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  const [activeVideoId, setActiveVideoId] = React.useState<string | null>(null);
  const [activeImage, setActiveImage] = React.useState<string | null>(null);

  useSEO({
    title: service ? `${service.title} - ${service.subtitle}` : 'Serviço',
    description: service ? service.description : 'Detalhes do serviço de casamentos.',
    image: service ? service.image : '/logo.jpg'
  });

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0B0A09] flex flex-col items-center justify-center pt-24 px-6 text-center text-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />
        <h2 className="text-4xl font-serif text-[#FAF9F6] mb-4">Serviço não encontrado</h2>
        <p className="text-[#A89F95] mb-8 font-light italic">Pedimos desculpas, mas o serviço solicitado não existe ou foi removido.</p>
        <Link to="/" className="px-8 py-4 bg-brand-gold text-white tracking-widest text-[10px] uppercase font-bold hover:bg-white hover:text-black transition-colors relative z-10">
          Voltar para Home
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#0B0A09] min-h-screen pb-32 text-[#FAF9F6] relative overflow-hidden">
      
      {/* Background Auras (Douradas & Translúcidas) */}
      <div className="absolute top-10 right-[-10%] w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-15%] w-[600px] h-[600px] bg-brand-gold/8 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[20%] w-[350px] h-[350px] bg-brand-gold/3 rounded-full blur-[100px] pointer-events-none z-0" />
      
      {/* Geometric diagram overlay in background (lens circles) */}
      <svg className="absolute -right-32 top-32 w-[600px] h-[600px] text-brand-gold/5 pointer-events-none z-0 opacity-40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.1">
        <circle cx="50" cy="50" r="45" />
        <circle cx="50" cy="50" r="30" />
        <circle cx="50" cy="50" r="15" />
        <line x1="50" y1="0" x2="50" y2="100" />
        <line x1="0" y1="50" x2="100" y2="50" />
      </svg>

      {/* Hero Section */}
      <section className="h-[75vh] md:h-[85vh] relative flex items-center justify-center overflow-hidden bg-black">
        {/* Parallax Image Effect (simulated via Framer Motion) */}
        <motion.div 
          initial={{ scale: 1.15, opacity: 0.3 }}
          animate={{ scale: 1.0, opacity: 0.45 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Premium Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A09]/70 via-transparent to-[#0B0A09]/70 z-10"></div>
        
        {/* Circular camera reticle in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full pointer-events-none z-10 flex items-center justify-center">
          <div className="w-76 h-76 border border-white/5 rounded-full border-dashed" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl pt-24">
          <FadeIn direction="up" delay={0.2}>
            <Link to="/" className="inline-flex items-center gap-2 text-brand-gold hover:text-white text-[10px] uppercase tracking-[0.3em] mb-8 transition-colors font-bold group">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" /> Voltar ao início
            </Link>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-2 border border-brand-gold/30 rounded-full backdrop-blur-sm bg-white/5">
                {service.icon}
              </div>
              <span className="text-brand-gold font-serif italic text-lg md:text-xl tracking-wider">{service.subtitle}</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif text-[#FAF9F6] mb-8 leading-none tracking-tight">
              {service.title}
            </h1>

            {/* Glassmorphic Info Badge */}
            <div className="inline-flex flex-wrap items-center justify-center gap-6 md:gap-8 px-6 py-4 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#F5F2EB]">{service.duration}</span>
              </div>
              <div className="hidden md:block w-[1px] h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-gold" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#F5F2EB]">{service.entregaveis}</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Floating bottom line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent z-20" />
      </section>

      {/* Main Narrative (Como é feito / O que tem) */}
      <section className="py-28 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Details & Description */}
            <div className="lg:col-span-7 space-y-12">
              <FadeIn direction="up">
                <h2 className="text-3xl md:text-5xl font-serif text-[#FAF9F6] leading-tight text-balance">
                  A vivência e a cura de registrar a sua <span className="italic text-brand-gold font-light">verdadeira história</span>.
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div className="p-8 border border-[#B4975A]/20 bg-gradient-to-br from-[#121110] to-[#1E1C1A]/50 rounded-3xl relative overflow-hidden shadow-2xl">
                  {/* Decorative quote marks */}
                  <span className="absolute -top-6 -left-2 text-[150px] font-serif text-brand-gold/10 leading-none select-none">“</span>
                  <p className="font-serif italic text-brand-gold text-lg md:text-xl relative z-10 leading-relaxed pl-6 border-l-2 border-brand-gold">
                    "{service.description}"
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="text-[#A89F95] font-sans font-light text-base md:text-lg leading-relaxed space-y-6 text-justify">
                  <p className="whitespace-pre-line italic font-serif">
                    {service.details}
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Inclusions & CTA Card ("O que tem") */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-[#131211] border-2 border-brand-gold/25 p-8 md:p-10 shadow-2xl rounded-[32px] relative overflow-hidden group">
                  {/* Glowing background inside card */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-brand-gold/5 rounded-full blur-[40px] pointer-events-none" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-brand-gold/30"></div>
                  <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-brand-gold/30"></div>

                  <h3 className="text-2xl font-serif text-[#FAF9F6] mb-6 italic border-b border-white/10 pb-4 flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-brand-gold animate-pulse" /> O que está incluído
                  </h3>
                  
                  <ul className="space-y-5">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-sm text-[#FAF9F6] font-light">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold mt-1 shrink-0 opacity-80" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 pt-8 border-t border-white/10 flex flex-col items-center">
                    <Link 
                      to="/contato" 
                      className="w-full py-4.5 bg-brand-gold text-white text-[10px] tracking-[0.3em] font-bold uppercase text-center hover:bg-white hover:text-black transition-all duration-300 shadow-[0_15px_30px_rgba(180,151,90,0.25)] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" /> Agendar Briefing Exclusivo
                    </Link>
                    <p className="text-[10px] text-[#A89F95] uppercase tracking-widest mt-5 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" /> Vagas limitadas por temporada
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* How it is Made Section ("Como é feito") */}
      <section className="py-28 bg-[#121110]/50 border-y border-white/5 relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-20 text-center">
            <FadeIn direction="up">
              <span className="text-brand-gold text-[10px] tracking-[0.5em] uppercase font-bold">O Método Afetos</span>
              <h3 className="text-3xl md:text-5xl font-serif text-white italic mt-3">Como é Construído</h3>
              <p className="text-[#A89F95] max-w-md mx-auto font-sans font-light italic text-sm mt-4">Conheça o passo a passo da nossa costura audiovisual e fotográfica até a sua herança de família.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.15}>
                <div className="bg-[#181716]/80 border border-white/5 p-8 rounded-3xl relative group hover:border-brand-gold/30 hover:bg-[#1E1C1A] transition-all duration-500 shadow-xl h-full flex flex-col justify-between">
                  <div>
                    {/* Step Number in Background */}
                    <div className="absolute top-2 right-4 text-7xl font-serif text-brand-gold/5 font-extrabold group-hover:text-brand-gold/10 transition-colors duration-500 select-none">
                      0{idx + 1}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-serif text-xs font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-[#A89F95] font-bold">{step.subtitle}</span>
                    </div>

                    <h4 className="text-lg font-serif text-white mb-4 italic group-hover:text-brand-gold transition-colors duration-300">
                      {step.title}
                    </h4>
                  </div>
                  
                  <p className="text-xs text-[#A89F95] font-light leading-relaxed font-sans mt-2">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Showcase Section (Vídeos) */}
      <section className="py-28 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-20 text-center">
            <FadeIn direction="up">
              <span className="text-brand-gold text-[10px] tracking-[0.5em] uppercase font-bold">Registro em Movimento</span>
              <h3 className="text-3xl md:text-5xl font-serif text-white italic mt-3">Filmes do Caso</h3>
              <p className="text-[#A89F95] max-w-md mx-auto font-sans font-light italic text-sm mt-4">Assista às obras em formato cinematográfico vinculadas a esta vivência.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {service.videos.map((vidId, idx) => (
              <FadeIn key={vidId} direction="up" delay={idx * 0.2}>
                <div 
                  onClick={() => setActiveVideoId(vidId)}
                  className="group relative aspect-video overflow-hidden rounded-[32px] border-4 border-white/5 bg-black cursor-pointer shadow-2xl overflow-hidden"
                >
                  {/* YouTube thumbnail image background */}
                  <img 
                    src={`https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`} 
                    alt="Capa do Filme de Casamento" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />
                  
                  {/* Glassmorphic Play Badge */}
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-brand-gold/90 text-white flex items-center justify-center shadow-[0_10px_30px_rgba(180,151,90,0.4)] transform scale-90 group-hover:scale-100 group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest text-[#FAF9F6] font-bold bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Assistir em Tela Cheia
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-8 z-20">
                    <span className="text-brand-gold text-[9px] tracking-widest uppercase font-bold">Obra {idx + 1}</span>
                    <h4 className="text-xl font-serif text-white italic mt-1 group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-2">
                      {service.title} - Clip {idx + 1} <ChevronRight className="w-4 h-4 text-brand-gold" />
                    </h4>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Romance Quote Banner */}
      <section className="py-36 relative overflow-hidden bg-black flex items-center justify-center text-center">
        {/* Parallax style background blur */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src={service.gallery[0]} 
            alt="Amor real" 
            className="w-full h-full object-cover filter blur-[4px] scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-[#0B0A09]/95 z-10" />

        <div className="container mx-auto px-6 max-w-4xl relative z-20">
          <FadeIn direction="up">
            <div className="relative p-10 md:p-14 border border-brand-gold/20 backdrop-blur-sm bg-[#121110]/40 rounded-[40px]">
              {/* Decorative vintage photo angles */}
              <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-brand-gold/30"></div>
              <div className="absolute top-6 right-6 w-5 h-5 border-t border-r border-brand-gold/30"></div>
              <div className="absolute bottom-6 left-6 w-5 h-5 border-b border-l border-brand-gold/30"></div>
              <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-brand-gold/30"></div>

              <span className="text-brand-gold text-[10px] tracking-[0.5em] uppercase font-bold mb-6 block">Sentimento Vivenciado</span>
              <h3 className="text-2xl md:text-4xl font-serif text-[#FAF9F6] italic leading-relaxed text-balance font-light">
                "{service.quote.text}"
              </h3>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col items-center">
                <span className="font-serif italic text-lg text-brand-gold">{service.quote.couple}</span>
                <span className="text-[9px] uppercase tracking-widest text-[#A89F95] mt-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-brand-gold" /> {service.quote.location}
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mosaico Galeria Fine Art */}
      <section className="py-28 bg-[#121110]/40 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20 text-center">
            <FadeIn direction="up">
              <span className="text-brand-gold text-[10px] tracking-[0.5em] uppercase font-bold">Curadoria Visual de Casos</span>
              <h3 className="text-3xl md:text-5xl font-serif text-white italic mt-3">Lampejos do Sentir</h3>
              <p className="text-[#A89F95] max-w-md mx-auto font-sans font-light italic text-sm mt-4">Imagens estáticas repletas de poesia e espontaneidade de casamentos reais.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.gallery.map((img, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.15}>
                <div 
                  onClick={() => setActiveImage(img)}
                  className="group relative overflow-hidden bg-black border-[10px] border-white shadow-2xl aspect-[3/4] cursor-pointer rounded-2xl"
                >
                  <div className="absolute inset-0 bg-brand-sand mix-blend-multiply opacity-5 z-10 group-hover:opacity-20 transition-opacity duration-500" />
                  <img 
                    src={img} 
                    alt={`Galeria ${service.title} ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Zoom Overlay Button */}
                  <div className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-lg border border-white/20">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Video Modal */}
      <AnimatePresence>
        {activeVideoId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 z-[9999] flex items-center justify-center p-4 md:p-8 backdrop-blur-sm cursor-pointer"
            onClick={() => setActiveVideoId(null)}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-5xl aspect-video bg-black shadow-[0_30px_70px_rgba(0,0,0,0.8)] border border-brand-gold/30 rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveVideoId(null)}
                className="absolute top-4 right-4 text-white hover:text-brand-gold bg-black/60 backdrop-blur-sm border border-white/10 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-50 cursor-pointer"
                title="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
              
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&controls=1&rel=0`}
                className="w-full h-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                title="Player de Vídeo"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Image Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 z-[9999] flex items-center justify-center p-4 md:p-8 backdrop-blur-sm cursor-pointer"
            onClick={() => setActiveImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[85vh] bg-[#121110] shadow-[0_30px_70px_rgba(0,0,0,0.8)] border-[12px] border-white overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 text-white hover:text-brand-gold bg-black/60 backdrop-blur-sm border border-white/10 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-50 cursor-pointer"
                title="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
              
              <img 
                src={activeImage} 
                alt="Foto Ampliada" 
                className="max-w-full max-h-[80vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
