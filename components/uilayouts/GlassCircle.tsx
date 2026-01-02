'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { coreVariants, nodeVariants } from '../../src/lib/variants';

/* ---------------------------------------------
   Tooltip
--------------------------------------------- */

function Tooltip({ label }: { label: string }) {
    return (
        <div
            className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2
      whitespace-nowrap rounded-md border border-white/10 bg-black/80 px-3 py-1.5
      text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
        >
            {label}
        </div>
    );
}

export const GlassCircle = React.forwardRef<
    HTMLDivElement,
    {
        icon: React.ReactNode;
        label: string;
        large?: boolean;
    }
>(({ icon, label, large }, ref) => {
    return (
        <motion.div
            ref={ref}
            variants={large ? coreVariants : nodeVariants}
            whileHover={{
                scale: 1.08,
                boxShadow: "0 0 0 1px rgba(255,255,255,0.25)",
            }}
            className={cn(
                "group relative flex items-center justify-center rounded-full",
                "border border-white/15 bg-white/5 backdrop-blur-md text-gray-200",
                "transition-colors hover:bg-white/10",
                large ? "h-16 w-16" : "h-12 w-12"
            )}
        >
            {icon}
            <Tooltip label={label} />
        </motion.div>
    );
});
GlassCircle.displayName = "GlassCircle";
