// import { ArrowRight } from 'lucide-react';
// import Link from 'next/link';
// import { cn } from '../../lib/utils';

// interface ButtonProps {
//     children: React.ReactNode;
//     variant?: 'primary' | 'secondary';
//     href?: string;
// }

// export default function Button({
//     children,
//     variant = 'primary',
//     href,
// }: ButtonProps) {
//     const styles = cn(
//         'group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all',
//         'rounded-lg',
//         variant === 'primary'
//             ? 'bg-white text-black hover:bg-gray-100'
//             : 'border border-white/20 text-white hover:border-white/40'
//     );

//     const content = (
//         <>
//             <span>{children}</span>
//             <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//         </>
//     );

//     if (href) {
//         return (
//             <Link href={href} className={styles}>
//                 {content}
//             </Link>
//         );
//     }

//     return (
//         <button className={styles}>
//             {content}
//         </button>
//     );
// }



import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '../../lib/utils';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    href?: string;
    disabled?: boolean;
    className?: string;
}

export default function Button({
    children,
    variant = 'primary',
    href,
    disabled = false,
    className,
}: ButtonProps) {
    const styles = cn(
        'group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg transition-colors duration-300',
        'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        variant === 'primary'
            ? 'bg-white text-black hover:bg-gray-100'
            : 'border border-white/20 text-white hover:border-white/40',
        className
    );

    const content = (
        <>
            <span>{children}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </>
    );

    if (href) {
        return (
            <Link href={disabled ? '#' : href} className={styles} aria-disabled={disabled}>
                {content}
            </Link>
        );
    }

    return (
        <button className={styles} disabled={disabled}>
            {content}
        </button>
    );
}
