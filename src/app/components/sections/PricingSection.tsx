// 'use client';

// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import Button from '@/components/uilayouts/Button';
// import { headerVariants, containerVariants, cardVariants } from '@/lib/variants';

// const pricing = [
//     { tier: "Basic", price: "$99/mo", features: ["Website audits", "Content strategy", "Email support"], popular: false },
//     { tier: "Pro", price: "$199/mo", features: ["Full website", "Social media management", "Priority support"], popular: true },
//     { tier: "Enterprise", price: "$399/mo", features: ["All services", "Dedicated manager", "Custom workflow"], popular: false },
// ];

// export default function PricingSection() {
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
//                     <h2 className="text-4xl font-bold mb-3">Pricing</h2>
//                     <p className="text-gray-400">Simple subscription plans for any business size.</p>
//                 </motion.div>

//                 <motion.div
//                     className="grid grid-cols-1 md:grid-cols-3 gap-8"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate={isInView ? "visible" : "hidden"}
//                 >
//                     {pricing.map((p, i) => (
//                         <motion.div key={i} variants={cardVariants} className={`rounded-xl p-6 border border-white/10 bg-black/20 flex flex-col ${p.popular ? 'ring-2 ring-indigo-500' : ''}`}>
//                             <h3 className="text-xl font-semibold mb-2">{p.tier}</h3>
//                             <p className="text-2xl font-bold mb-4">{p.price}</p>
//                             <ul className="flex-1 mb-4 space-y-1 text-gray-400">
//                                 {p.features.map((f, j) => <li key={j}>• {f}</li>)}
//                             </ul>
//                             <Button type="secondary" className="mt-auto">{p.popular ? "Subscribe Now" : "Choose Plan"}</Button>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '@/components/uilayouts/Btn';
import { EASE_SMOOTH } from '@/lib/motion';

interface PricingPlan {
    name: string;
    price: string;
    frequency: string;
    features: string[];
    popular?: boolean;
}

const plans: PricingPlan[] = [
    {
        name: 'Starter',
        price: '$29',
        frequency: 'per month',
        features: [
            'Basic analytics',
            'Single project',
            'Email support',
        ],
    },
    {
        name: 'Professional',
        price: '$79',
        frequency: 'per month',
        features: [
            'Advanced analytics',
            'Up to 5 projects',
            'Priority support',
            'Team collaboration',
        ],
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        frequency: 'Contact me',
        features: [
            'Unlimited projects',
            'Custom integrations',
            'Dedicated support',
            'Long-term maintenance',
        ],
    },
];

/* ---------------------------------------------
   Pricing Card
--------------------------------------------- */
function PricingCard({ plan }: { plan: PricingPlan }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_SMOOTH }}
            className={`
        relative flex flex-col rounded-2xl
        border bg-white/[0.03] backdrop-blur-md
        p-8
        transition-all duration-300
        hover:-translate-y-1
        ${plan.popular
                    ? 'border-white/30'
                    : 'border-white/10 hover:border-white/20'
                }
      `}
        >
            {/* Popular tag */}
            {plan.popular && (
                <span
                    className="
            absolute top-4 right-4
            rounded-full border border-white/20
            bg-white/10 px-3 py-1
            text-xs text-white
          "
                >
                    Recommended
                </span>
            )}

            {/* Title */}
            <h3 className="text-white text-xl font-semibold mb-1">
                {plan.name}
            </h3>

            <p className="text-gray-400 text-sm mb-6">
                {plan.frequency}
            </p>

            {/* Price */}
            <div className="flex items-end gap-2 mb-8">
                <span className="text-4xl font-bold text-white">
                    {plan.price}
                </span>
                {plan.price !== 'Custom' && (
                    <span className="text-gray-400 text-sm mb-1">
                        /month
                    </span>
                )}
            </div>

            {/* Features */}
            <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                    <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-gray-300"
                    >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                        {feature}
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <Button
                href="#contact"
                variant={plan.popular ? 'primary' : 'secondary'}
                className="w-full"
            >
                {plan.price === 'Custom' ? 'Contact me' : 'Get started'}
            </Button>
        </motion.div>
    );
}

/* ---------------------------------------------
   Pricing Section
--------------------------------------------- */
export default function PricingSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-120px' });

    return (
        <section id="pricing" ref={ref} className="bg-black py-28 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: EASE_SMOOTH }}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <p className="text-gray-400 text-xs font-mono uppercase tracking-wide mb-3">
                        Pricing
                    </p>
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
                        Simple, predictable pricing
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Clear scopes. No hidden costs. Built for long-term work,
                        not one-off gigs.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <PricingCard key={idx} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
}
