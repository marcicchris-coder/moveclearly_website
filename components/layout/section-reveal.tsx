'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function SectionReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay }}
    >
      {children}
    </motion.div>
  );
}
