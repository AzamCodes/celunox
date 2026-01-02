'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function SpotlightGrid({ children }: { children: React.ReactNode[] }) {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    return (
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {children.map((child, i) => (
                <motion.div
                    key={i}
                    onMouseEnter={() => setHoverIndex(i)}
                    onMouseLeave={() => setHoverIndex(null)}
                    animate={{ scale: hoverIndex === i ? 1.05 : 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                    {child}
                </motion.div>
            ))}
            {hoverIndex !== null && (
                <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-white/10 to-transparent rounded-xl transition-all duration-300" />
            )}
        </div>
    );
}
