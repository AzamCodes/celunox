// 'use client';

// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { headerVariants, containerVariants, cardVariants } from '@/lib/variants';

// const testimonials = [
//     { name: "Sarah J.", role: "Founder", quote: "Celunox transformed our digital presence with clarity and professionalism." },
//     { name: "Michael P.", role: "Marketing Lead", quote: "Reliable, responsive, and production-ready results every time." },
// ];

// export default function TestimonialsSection() {
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
//                     <h2 className="text-4xl font-bold mb-3">Testimonials</h2>
//                     <p className="text-gray-400">Clients who trusted Celunox.</p>
//                 </motion.div>

//                 <motion.div
//                     className="grid grid-cols-1 md:grid-cols-2 gap-8"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate={isInView ? "visible" : "hidden"}
//                 >
//                     {testimonials.map((t, i) => (
//                         <motion.div key={i} variants={cardVariants} className="bg-white/5 backdrop-blur-md rounded-xl p-6">
//                             <p className="text-gray-300 mb-4">"{t.quote}"</p>
//                             <h4 className="text-white font-medium">{t.name}</h4>
//                             <span className="text-gray-400 text-sm">{t.role}</span>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// }


// 'use client';

// import { motion, useInView } from 'framer-motion';
// import { useRef, useState } from 'react';

// type Testimonial = {
//   name: string;
//   role: string;
//   quote: string;
// };

// const testimonials: Testimonial[] = [
//   {
//     name: "Sarah J.",
//     role: "Founder",
//     quote:
//       "Azam delivered exactly what we needed — clean architecture, fast performance, and zero friction in communication.",
//   },
//   {
//     name: "Michael P.",
//     role: "Marketing Lead",
//     quote:
//       "Reliable, detail-oriented, and production-focused. No hand-holding required.",
//   },
//   {
//     name: "Rahul K.",
//     role: "Startup CTO",
//     quote:
//       "Understands real-world constraints and ships maintainable systems, not just UI.",
//   },
//   {
//     name: "Ananya S.",
//     role: "Product Manager",
//     quote:
//       "Clear communication, predictable delivery, and thoughtful technical decisions.",
//   },
// ];

// export default function TestimonialsSection() {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });
//   const [showAll, setShowAll] = useState(false);

//   const visibleTestimonials = showAll
//     ? testimonials
//     : testimonials.slice(0, 4);

//   return (
//     <section ref={ref} className="bg-black py-24 px-4">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
//           className="max-w-2xl mb-16"
//         >
//           <p className="text-gray-400 text-sm font-mono uppercase tracking-wide mb-4">
//             Testimonials
//           </p>
//           <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
//             Trusted by real teams
//           </h2>
//           <p className="text-gray-300 text-lg">
//             Feedback from people I’ve worked with — focused on delivery,
//             communication, and production quality.
//           </p>
//         </motion.div>

//         {/* Grid */}
//         <motion.div
//           initial="hidden"
//           animate={isInView ? 'visible' : 'hidden'}
//           variants={{
//             visible: {
//               transition: { staggerChildren: 0.12 },
//             },
//           }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6"
//         >
//           {visibleTestimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               variants={{
//                 hidden: { opacity: 0, y: 28 },
//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                   transition: {
//                     duration: 0.5,
//                     ease: [0.25, 0.46, 0.45, 0.94],
//                   },
//                 },
//               }}
//               className="
//                 group relative rounded-xl
//                 bg-white/[0.04] backdrop-blur-md
//                 border border-white/10
//                 p-6
//                 transition-colors duration-300
//                 hover:border-white/20
//               "
//             >
//               {/* Quote */}
//               <p className="text-gray-300 text-sm leading-relaxed mb-6">
//                 “{t.quote}”
//               </p>

//               {/* Meta */}
//               <div className="flex flex-col">
//                 <span className="text-white font-medium text-sm">
//                   {t.name}
//                 </span>
//                 <span className="text-gray-400 text-xs">
//                   {t.role}
//                 </span>
//               </div>

//               {/* Subtle hover accent */}
//               <div
//                 className="
//                   pointer-events-none absolute inset-0 rounded-xl
//                   opacity-0 group-hover:opacity-100
//                   transition-opacity duration-300
//                   bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_60%)]
//                 "
//               />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Show more */}
//         {testimonials.length > 4 && (
//           <div className="mt-12 text-center">
//             <button
//               onClick={() => setShowAll(!showAll)}
//               className="
//                 inline-flex items-center gap-2
//                 text-sm text-gray-400
//                 hover:text-white
//                 transition
//               "
//             >
//               {showAll ? 'Show less' : 'Show more feedback'}
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }



'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
    {
        name: 'Sarah J.',
        role: 'Founder',
        quote:
            'Azam delivered production-ready work with clear communication and zero surprises. Exactly what you want from a serious developer.',
    },
    {
        name: 'Michael P.',
        role: 'Marketing Lead',
        quote:
            'Reliable, fast, and technically solid. The work scaled cleanly without rework.',
    },

];

export default function TestimonialsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-120px' });

    return (
        <section
            ref={ref}
            className="relative bg-black py-28 px-4"
        >
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="max-w-xl mb-16"
                >
                    <p className="text-xs uppercase tracking-widest font-mono text-gray-400 mb-3">
                        Testimonials
                    </p>
                    <h2 className="text-4xl font-semibold text-white mb-4">
                        Trusted by real clients
                    </h2>
                    <p className="text-gray-300">
                        Feedback from people I’ve worked with directly — no agencies, no intermediaries.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.12,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                group relative
                rounded-2xl
                border border-white/10
                bg-white/[0.04] backdrop-blur-md
                p-7
                transition-all duration-300
                hover:border-white/20
                hover:bg-white/[0.06]
              "
                        >
                            {/* Quote mark accent */}
                            <div className="absolute top-6 right-6 text-white/5 text-6xl font-serif select-none">
                                “
                            </div>

                            {/* Quote */}
                            <p className="relative text-gray-300 leading-relaxed mb-6">
                                {t.quote}
                            </p>

                            {/* Divider */}
                            <div className="h-px w-10 bg-white/10 mb-4 transition-all duration-300 group-hover:w-16" />

                            {/* Author */}
                            <div>
                                <p className="text-white font-medium leading-none">
                                    {t.name}
                                </p>
                                <span className="text-gray-400 text-sm">
                                    {t.role}
                                </span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
