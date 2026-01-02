import { EASE_SMOOTH } from '@/lib/motion';

export const nodeVariants = {
    hidden: {
        opacity: 0,
        scale: 0.85,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.35,
            ease: EASE_SMOOTH,
        },
    },
};

export const coreVariants = {
    hidden: {
        opacity: 0,
        scale: 0.7,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.45,
            ease: EASE_SMOOTH,
        },
    },
};

export const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
};

export const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
