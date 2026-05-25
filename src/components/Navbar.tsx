import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Serviços', path: '/#services' },
    { label: 'Portfólio', path: '/portfolio' },
    { label: 'Sobre Nós', path: '/sobre' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          isScrolled
            ? 'py-4 glass'
            : 'py-6 bg-transparent text-[#2D2926]'
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="w-10 h-10 rounded-full overflow-hidden border border-brand-gold/20 shadow-md relative bg-white block">
              <img 
                src="/logo.jpg" 
                alt="Afetos" 
                className="w-full h-full object-cover scale-[1.35]" 
              />
            </Link>
            <div className="flex flex-col">
              <Link
                to="/"
                className="text-xs tracking-[0.4em] uppercase font-semibold opacity-80 hover:opacity-100 transition-opacity"
              >
                Afetos
              </Link>
              <span className="font-serif italic text-[11px] text-brand-gold hidden sm:block">A Arte do Afeto</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'text-[10px] tracking-[0.3em] uppercase font-medium transition-colors hover:text-brand-gold relative group',
                    isActive ? 'text-brand-gold' : 'text-current'
                  )
                }
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
            <Link
              to="/contato"
              className="px-6 py-3 border border-current text-[10px] tracking-[0.3em] uppercase font-medium transition-all duration-500 hover:bg-brand-gold hover:text-[#FAF9F6] shadow-xl hover:border-brand-gold"
            >
              Contato
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-current z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-brand-ice flex flex-col justify-center items-center h-screen w-full md:hidden"
          >
            <div className="flex flex-col items-center space-y-8 absolute top-[25%] w-full">
               <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="font-serif text-brand-gold text-sm tracking-widest mb-8"
                >
                  MENU
                </motion.span>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-4xl font-serif text-neutral-800 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-8"
              >
                  <Link
                    to="/contato"
                    className="px-10 py-5 bg-[#2D2926] text-[#FAF9F6] text-[11px] tracking-[0.3em] uppercase hover:bg-brand-gold transition-all duration-500 shadow-xl"
                  >
                    Fale Conosco
                  </Link>
              </motion.div>
            </div>
            
            <div className="absolute bottom-12 text-center w-full">
                <p className="text-[9px] uppercase tracking-[0.3em] opacity-40">Afetos © {new Date().getFullYear()}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
