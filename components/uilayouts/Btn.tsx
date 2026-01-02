'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
}

export default function Button({
    href,
    children,
    variant = 'secondary',
    className,
}: ButtonProps) {
    return (
        <Link
            href={href}
            className={cn(
                `
        group relative inline-flex items-center justify-center
        gap-2 rounded-xl px-5 py-3
        text-sm font-medium
        transition-all duration-300
        `,
                variant === 'primary'
                    ? `
            bg-white text-black
            hover:bg-white/90
          `
                    : `
            border border-white/20 text-white
            hover:border-white/40
            hover:bg-white/[0.04]
          `,
                className
            )}
        >
            <span className="relative z-10">{children}</span>

            <ArrowRight
                className="
          h-4 w-4
          transition-transform duration-300
          group-hover:translate-x-1
        "
            />
        </Link>
    );
}
