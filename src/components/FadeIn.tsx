import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  viewMargin?: string;
  key?: React.Key;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  direction = 'up',
  distance = 40,
  viewMargin = '-100px',
}: FadeInProps) {
  const directionOffset = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: viewMargin }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] // Elegant bezier curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
