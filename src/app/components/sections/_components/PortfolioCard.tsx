'use client';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface PortfolioCardProps {
    title: string;
    img: string;
    shortdesc: string;
    slug: string;
    prevlink: string;
    tags: string[];
}

export default function PortfolioCard({ title, img, shortdesc, slug, prevlink, tags }: PortfolioCardProps) {
    return (
        <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition hover:border-white/20">
            <div className="relative h-52">
                <Image src={img} alt={title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            </div>
            <div className="p-6 space-y-4">
                <h3 className="text-lg font-medium text-white">{title}</h3>
                <p className="text-sm text-gray-300">{shortdesc}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((t: string) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-md border border-white/10 bg-black/40 text-gray-300">{t}</span>
                    ))}
                </div>
                <div className="pt-2 flex items-center justify-between">
                    <Link href={`/projects/${slug}`} className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                        View Details <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link href={prevlink} target="_blank" className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                        Live Demo <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
