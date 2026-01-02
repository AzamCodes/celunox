'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <header
                className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled
                        ? 'bg-black/70 backdrop-blur-xl border-b border-white/10'
                        : 'bg-transparent'}
        `}
            >
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-white font-semibold tracking-tight"
                    >
                        CELU<span className="text-gray-400">NOX</span>
                    </Link>

                    {/* Desktop Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        {links.map(link => (
                            <NavLink key={link.href} href={link.href}>
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex">
                        <Link
                            href="#contact"
                            className="
                rounded-xl px-4 py-2 text-sm
                border border-white/20
                text-white
                hover:border-white/40
                hover:bg-white/[0.04]
                transition
              "
                        >
                            Book a call
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden text-white"
                        aria-label="Open menu"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="
                absolute top-4 left-4 right-4
                rounded-2xl
                bg-black border border-white/10
                p-6
              "
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-white font-medium">Menu</span>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="text-white"
                                    aria-label="Close menu"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-4">
                                {links.map(link => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="
                      text-gray-300 text-sm
                      hover:text-white
                      transition
                    "
                                    >
                                        {link.label}
                                    </Link>
                                ))}

                                <Link
                                    href="#contact"
                                    onClick={() => setOpen(false)}
                                    className="
                    mt-4 rounded-xl px-4 py-3
                    border border-white/20
                    text-white text-sm text-center
                    hover:border-white/40
                    hover:bg-white/[0.04]
                    transition
                  "
                                >
                                    Book a call
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="
        group relative text-sm text-gray-300
        hover:text-white transition
      "
        >
            {children}
            <span
                className="
          absolute left-0 -bottom-1 h-px w-0
          bg-white transition-all duration-300
          group-hover:w-full
        "
            />
        </Link>
    );
}
