// 'use client';
// import { motion } from 'framer-motion';

// export default function ServiceCard({
//     title,
//     description,
//     icon,
// }: {
//     title: string;
//     description: string;
//     icon: React.ReactNode;
// }) {
//     return (
//         <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="relative rounded-xl border border-white/10 bg-gradient-to-b from-[#0b0b0b] to-[#161616] p-6 flex flex-col justify-between overflow-hidden"
//         >
//             <div className="text-indigo-400 w-10 h-10">{icon}</div>
//             <div className="mt-4">
//                 <h3 className="text-white font-medium text-lg">{title}</h3>
//                 <p className="text-gray-400 text-sm mt-1">{description}</p>
//             </div>
//         </motion.div>
//     );
// }


import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
}

export default function ServiceCard({
    title,
    description,
    icon: Icon,
}: ServiceCardProps) {
    return (
        <div
            className="
        group h-full rounded-2xl
        border border-white/10
        bg-white/[0.03] backdrop-blur-md
        p-6 transition
        hover:border-white/20
      "
        >
            <div className="flex items-start justify-between mb-6">
                <Icon className="h-6 w-6 text-white" />
                <ArrowUpRight className="h-4 w-4 text-gray-500 opacity-0 transition group-hover:opacity-100" />
            </div>

            <h3 className="text-lg font-medium text-white mb-3">
                {title}
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
