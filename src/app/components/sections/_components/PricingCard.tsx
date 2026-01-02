'use client';

import Button from "@/components/uilayouts/Button";

interface PricingCardProps {
    tier: string;
    price: string;
    features: string[];
    popular: boolean;
}

export default function PricingCard({ tier, price, features, popular }: PricingCardProps) {
    return (
        <div className={`rounded-xl p-6 border border-white/10 flex flex-col ${popular ? 'ring-2 ring-indigo-500' : ''}`}>
            <h3 className="text-xl font-semibold mb-2">{tier}</h3>
            <p className="text-2xl font-bold mb-4">{price}</p>
            <ul className="flex-1 mb-4 space-y-1 text-gray-400">
                {features.map((f: string, i: number) => <li key={i}>• {f}</li>)}
            </ul>
            <Button className="mt-auto">{popular ? "Subscribe Now" : "Choose Plan"}</Button>
        </div>
    );
}
