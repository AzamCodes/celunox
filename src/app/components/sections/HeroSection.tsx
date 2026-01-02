'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from '@/components/uilayouts/Button';

export default function HeroSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: '-120px',
    });

    return (
        <section
            ref={ref}
            className="relative bg-black px-4 pt-28 pb-32"
        >
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="
          mx-auto max-w-6xl
          text-left
        "
            >
                {/* Eyebrow */}
                <p className="mb-4 text-sm font-mono uppercase tracking-wide text-gray-400">
                    Celunox Digital
                </p>

                {/* Headline */}
                <h1
                    className="
            max-w-3xl
            text-4xl font-semibold text-white
            sm:text-5xl
            md:text-6xl
            leading-[1.05]
            mb-6
          "
                >
                    Building calm, scalable digital products that last
                </h1>

                {/* Subheading */}
                <p
                    className="
            max-w-2xl
            text-base text-gray-400
            sm:text-lg
            mb-10
          "
                >
                    I design and engineer production-ready systems —
                    from architecture to interface — with clarity,
                    performance, and long-term maintainability in mind.
                </p>

                {/* CTAs */}
                <div
                    className="
            flex flex-row
            gap-3
            items-center
          "
                >
                    <Button variant="primary">
                        Start a project
                    </Button>

                    <Button variant="secondary">
                        View work
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
