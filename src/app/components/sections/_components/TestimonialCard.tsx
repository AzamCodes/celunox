'use client';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
    name: string;
    role: string;
    quote: string;
}

export default function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
    return (
        <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-md rounded-xl p-6">
            <p className="text-gray-300 mb-4">&quot;{quote}&quot;</p>
            <h4 className="text-white font-medium">{name}</h4>
            <span className="text-gray-400 text-sm">{role}</span>
        </motion.div>
    );
}
