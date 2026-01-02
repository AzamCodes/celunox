// 'use client';

// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { ArrowUpRight } from 'lucide-react';
// import { GlassCircle } from '../../../../components/uilayouts/GlassCircle';
// import { cardVariants, containerVariants, headerVariants } from '@/lib/variants';

// const services = [
//     { icon: () => <ArrowUpRight />, title: "Website Design", description: "Responsive, modern, and fast websites." },
//     { icon: () => <ArrowUpRight />, title: "Content Creation", description: "Engaging posts, videos, and graphics." },
//     { icon: () => <ArrowUpRight />, title: "Video Editing", description: "Professional motion graphics & editing." },
//     { icon: () => <ArrowUpRight />, title: "Social Media Management", description: "Grow your brand consistently." },
// ];

// export default function ServicesSection() {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true, margin: "-100px" });

//     return (
//         <section className="py-24 px-4" ref={ref}>
//             <div className="max-w-6xl mx-auto">
//                 <motion.div
//                     variants={headerVariants}
//                     initial="hidden"
//                     animate={isInView ? "visible" : "hidden"}
//                     className="text-center lg:text-left mb-12"
//                 >
//                     <h2 className="text-4xl font-bold mb-3">Our Services</h2>
//                     <p className="text-gray-400">We provide end-to-end solutions for your brand growth.</p>
//                 </motion.div>

//                 <motion.div
//                     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate={isInView ? "visible" : "hidden"}
//                 >
//                     {services.map((s, i) => (
//                         <motion.div key={i} variants={cardVariants}>
//                             <GlassCircle icon={<s.icon />} label={s.title} />
//                             <h3 className="text-lg font-medium mt-3">{s.title}</h3>
//                             <p className="text-gray-400 text-sm mt-1">{s.description}</p>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// }


'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ServiceCard from './_components/ServiceCard';

import { Monitor, PenTool, Video, BarChart3 } from 'lucide-react';

export const services = [
    {
        title: 'Website Design & Development',
        description:
            'High-performance, conversion-focused websites built with modern stacks.',
        icon: Monitor,
    },
    {
        title: 'Content Creation',
        description:
            'Strategic content that communicates value and builds brand trust.',
        icon: PenTool,
    },
    {
        title: 'Video Editing',
        description:
            'Clean, professional edits designed for retention and clarity.',
        icon: Video,
    },
    {
        title: 'Social Media Management',
        description:
            'Consistent brand presence with data-backed growth strategies.',
        icon: BarChart3,
    },
];

export default function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

    return (
        <section id="services" className="py-24 px-4" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div className="text-center lg:text-left mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}>
                    <h2 className="text-4xl font-bold mb-3">Our Services</h2>
                    <p className="text-gray-400">End-to-end solutions for your brand growth.</p>
                </motion.div>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                    {services.map((s, i) => (
                        <motion.div key={i} variants={cardVariants}>
                            <ServiceCard {...s} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
