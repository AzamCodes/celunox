'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10">
            <div className="mx-auto max-w-6xl px-4 py-14">
                <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">

                    {/* Brand */}
                    <div>
                        <span className="text-lg font-semibold text-white">
                            Celunox
                        </span>
                        <p className="mt-2 max-w-sm text-sm text-gray-400">
                            Designing and engineering production-ready digital systems.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        <FooterLink
                            href="https://twitter.com/"
                            label="Twitter"
                        />
                        <FooterLink
                            href="https://linkedin.com/"
                            label="LinkedIn"
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-12 border-t border-white/10 pt-6">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} Celunox. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

/* ---------------- Footer Link ---------------- */

function FooterLink({
    href,
    label,
}: {
    href: string;
    label: string;
}) {
    return (
        <Link
            href={href}
            target="_blank"
            className="
        group inline-flex items-center gap-1
        text-sm text-gray-400
        transition-colors
        hover:text-white
      "
        >
            {label}
            <ArrowUpRight
                className="
          h-4 w-4
          opacity-60
          transition-transform
          group-hover:translate-x-0.5
          group-hover:-translate-y-0.5
        "
            />
        </Link>
    );
}
