// 'use client';

// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import Image from 'next/image';
// import { ArrowUpRight } from 'lucide-react';
// import { headerVariants, containerVariants, cardVariants } from '@/lib/variants';

// const projects = [
//     { title: "Project Alpha", img: "/images/project1.jpg", shortdesc: "Website redesign for SaaS platform", slug: "alpha", prevlink: "https://demo.com", tags: ["Next.js", "Tailwind"] },
//     { title: "Project Beta", img: "/images/project2.jpg", shortdesc: "Social media content campaign", slug: "beta", prevlink: "https://demo.com", tags: ["Video", "Graphics"] },
// ];

// export default function PortfolioSection() {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true, margin: "-100px" });

//     return (
//         <section className="py-24 px-4 bg-white/5 backdrop-blur-md" ref={ref}>
//             <div className="max-w-6xl mx-auto">
//                 <motion.div
//                     variants={headerVariants}
//                     initial="hidden"
//                     animate={isInView ? "visible" : "hidden"}
//                     className="text-center lg:text-left mb-12"
//                 >
//                     <h2 className="text-4xl font-bold mb-3 text-white">Portfolio</h2>
//                     <p className="text-gray-400">Some of our latest work across web and media projects.</p>
//                 </motion.div>

//                 <motion.div
//                     className="grid grid-cols-1 md:grid-cols-2 gap-8"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate={isInView ? "visible" : "hidden"}
//                 >
//                     {projects.map((p, i) => (
//                         <motion.div key={i} variants={cardVariants} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition hover:border-white/20">
//                             <div className="relative h-52">
//                                 <Image src={p.img} alt={p.title} fill className="object-cover" />
//                                 <div className="absolute inset-0 bg-black/30" />
//                             </div>
//                             <div className="p-6 space-y-4">
//                                 <h3 className="text-lg font-medium text-white">{p.title}</h3>
//                                 <p className="text-sm text-gray-300">{p.shortdesc}</p>
//                                 <div className="flex flex-wrap gap-2">
//                                     {p.tags.map(tag => <span key={tag} className="text-xs px-2 py-1 rounded-md border border-white/10 bg-black/40 text-gray-300">{tag}</span>)}
//                                 </div>
//                                 <div className="pt-2 flex items-center justify-between">
//                                     <a href={`/projects/${p.slug}`} className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition">View Details <ArrowUpRight className="h-4 w-4" /></a>
//                                     <a href={p.prevlink} target="_blank" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition">Live Demo <ArrowUpRight className="h-4 w-4" /></a>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// }



'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'Project Alpha',
        img: '/images/project1.png',
        shortdesc: 'Website redesign for a SaaS platform focused on growth and performance.',
        slug: 'alpha',
        prevlink: 'https://demo.com',
        tags: ['Next.js', 'Tailwind'],
    },
    {
        title: 'Project Beta',
        img: '/images/project2.png',
        shortdesc: 'High-impact content and media system for brand visibility.',
        slug: 'beta',
        prevlink: 'https://demo.com',
        tags: ['Video', 'Graphics'],
    },
];

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function PortfolioSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="work" ref={ref} className="bg-black py-28 px-4">
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="mx-auto max-w-6xl"
            >
                {/* Header */}
                <div className="mb-16 max-w-xl">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                        Portfolio
                    </p>
                    <h2 className="text-4xl font-semibold text-white mb-4">
                        Selected Work
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        Real projects built with production constraints, performance goals,
                        and long-term maintainability in mind.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((p, i) => (
                        <motion.div key={i} variants={cardVariants}>
                            <Link
                                href={`/projects/${p.slug}`}
                                className="
                  group block rounded-2xl overflow-hidden
                  border border-white/10
                  bg-white/[0.02]
                  transition
                  hover:border-white/20
                "
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={p.img}
                                        alt={p.title}
                                        fill
                                        className="
                      object-cover
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                                    />
                                    <div className="absolute inset-0 bg-black/30" />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-lg font-medium text-white mb-2">
                                        {p.title}
                                    </h3>

                                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                                        {p.shortdesc}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {p.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="
                          text-xs px-2 py-1 rounded-md
                          border border-white/10
                          text-gray-400
                        "
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between">
                                        <span className="inline-flex items-center gap-1 text-sm text-white">
                                            View Project
                                            <ArrowUpRight className="h-4 w-4" />
                                        </span>

                                        <a
                                            href={p.prevlink}
                                            target="_blank"
                                            onClick={e => e.stopPropagation()}
                                            className="
                        text-sm text-gray-500
                        hover:text-white
                        transition
                      "
                                        >
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
