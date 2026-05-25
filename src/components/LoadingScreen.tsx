import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after artificial delay to simulate asset loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-ice"
        >
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             className="relative flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-neutral-800 tracking-widest uppercase">
              Afetos
            </h1>
            <motion.div 
               initial={{ width: 0 }}
               animate={{ width: "100%" }}
               transition={{ duration: 2, ease: "easeInOut" }}
               className="h-[1px] bg-brand-gold mt-4"
            />
            <p className="mt-6 text-sm tracking-widest text-neutral-500 uppercase">
              Cinematografia
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
