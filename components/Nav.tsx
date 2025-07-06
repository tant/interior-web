'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
	{ path: '/', name: 'home' },
	{ path: '/about', name: 'about' },
	{ path: '/gallery', name: 'gallery' },
	{ path: '/projects', name: 'projects' },
	{ path: '/contact', name: 'contact' },
];

interface NavProps {
	containerStyles: string;
	linkStyles: string;
	underlineStyles: string;
}

const Nav = ({ containerStyles, linkStyles, underlineStyles }: NavProps) => {
	const path = usePathname();
	// Helper to normalize paths by removing trailing slashes
	const normalizePath = (p: string) => p.replace(/\/+$/, '') || '/';
	const normalizedPath = normalizePath(path);

	return (
		<nav className={`${containerStyles}`}>
			{links.map((link, index) => {
				const normalizedLinkPath = normalizePath(link.path);
				return (
					<Link
						href={link.path}
						key={index}
						className={`uppercase ${linkStyles}`}
					>
						{normalizedLinkPath === normalizedPath && (
							<motion.span
								initial={{ y: '-100%' }}
								animate={{ y: 0 }}
								transition={{ type: 'tween' }}
								layoutId='underline'
								className={`${underlineStyles}`}
							/>
						)}
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};

export default Nav;