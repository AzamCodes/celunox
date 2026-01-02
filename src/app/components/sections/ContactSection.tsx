// 'use client';

// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import Button from '../../../../components/uilayouts/Button';
// import { headerVariants } from '@/lib/variants';

// export default function ContactSection() {
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
//                     <h2 className="text-4xl font-bold mb-3">Contact Us</h2>
//                     <p className="text-gray-400">Start your project with Celunox today.</p>
//                 </motion.div>

//                 <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <input type="text" placeholder="Name" className="rounded-lg border border-white/10 bg-black/20 p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
//                     <input type="email" placeholder="Email" className="rounded-lg border border-white/10 bg-black/20 p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
//                     <input type="text" placeholder="Service Interested" className="rounded-lg border border-white/10 bg-black/20 p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 col-span-2" />
//                     <textarea placeholder="Message" className="rounded-lg border border-white/10 bg-black/20 p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 col-span-2" rows={4}></textarea>
//                     <Button type="secondary" className="col-span-2">Send Message</Button>
//                 </form>
//             </div>
//         </section>
//     );
// }



// 'use client';

// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import Button from '../../../../components/uilayouts/Button';

// const sectionVariants = {
//     hidden: { opacity: 0, y: 24 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.6,
//             ease: [0.25, 0.46, 0.45, 0.94],
//         },
//     },
// };

// export default function ContactSection() {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true, margin: '-120px' });

//     return (
//         <section ref={ref} className="py-28 px-4 bg-black">
//             <motion.div
//                 variants={sectionVariants}
//                 initial="hidden"
//                 animate={isInView ? 'visible' : 'hidden'}
//                 className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
//             >
//                 {/* Left Content */}
//                 <div className="flex flex-col justify-center">
//                     <p className="text-sm text-indigo-400 mb-3">
//                         Let’s talk
//                     </p>

//                     <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
//                         Start your project with Celunox
//                     </h2>

//                     <p className="text-gray-400 max-w-md mb-8">
//                         Tell us what you’re building. We’ll review your requirements
//                         and get back with a clear plan, timeline, and pricing.
//                     </p>

//                     <ul className="space-y-3 text-sm text-gray-400">
//                         <li>• No sales calls</li>
//                         <li>• Clear scope & pricing</li>
//                         <li>• Response within 24 hours</li>
//                     </ul>
//                 </div>

//                 {/* Form */}
//                 <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8">
//                     <form className="grid grid-cols-1 gap-5">
//                         <input
//                             type="text"
//                             placeholder="Your name"
//                             className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                         />

//                         <input
//                             type="email"
//                             placeholder="Email address"
//                             className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                         />

//                         <input
//                             type="text"
//                             placeholder="Service you’re interested in"
//                             className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                         />

//                         <textarea
//                             rows={4}
//                             placeholder="Briefly describe your project"
//                             className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
//                         />

//                         <div className="flex flex-col w-fit gap-3">
//                             <Button variant="primary">
//                                 Send message
//                             </Button>

//                             <p className="text-xs text-gray-500">
//                                 We usually respond within 24 hours.
//                             </p>
//                         </div>
//                     </form>
//                 </div>
//             </motion.div>
//         </section>
//     );
// }


'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-120px' });

    return (
        <section id="contact" ref={ref} className="bg-black py-28 px-4">
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20"
            >
                {/* LEFT */}
                <div className="flex flex-col justify-center">
                    <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">
                        Contact
                    </p>

                    <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
                        Let’s build something solid
                    </h2>

                    <p className="text-gray-400 max-w-md mb-10 leading-relaxed">
                        Share a few details about your project. I’ll review it personally
                        and respond with clarity on scope, timeline, and feasibility.
                    </p>

                    <ul className="space-y-3 text-sm text-gray-400">
                        <li>— No sales pressure</li>
                        <li>— Clear scope & realistic timelines</li>
                        <li>— Response within 24 hours</li>
                    </ul>
                </div>

                {/* FORM */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                    <form className="grid gap-5">
                        <Field placeholder="Your name" />
                        <Field type="email" placeholder="Email address" />
                        <Field placeholder="Service you’re interested in" />

                        <textarea
                            rows={4}
                            placeholder="Briefly describe your project"
                            className={fieldBase + ' resize-none'}
                        />

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="
                  inline-flex items-center justify-center
                  rounded-lg border border-white/20
                  px-6 py-3 text-sm font-medium text-white
                  transition-all
                  hover:border-white/40
                  hover:bg-white/5
                  active:scale-[0.98]
                "
                            >
                                Send message
                            </button>

                            <p className="mt-3 text-xs text-gray-500">
                                Expect a reply within 24 hours.
                            </p>
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}

/* ---------------- Field ---------------- */

const fieldBase = `
  w-full rounded-lg
  border border-white/10
  bg-black/40
  px-4 py-3
  text-sm text-white
  placeholder:text-gray-500
  transition
  focus:outline-none
  focus:border-white/30
`;

function Field({
    type = 'text',
    placeholder,
}: {
    type?: string;
    placeholder: string;
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={fieldBase}
        />
    );
}
