// components/navbar.tsx
"use client";

import Link from "next/link";

const navItems = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Projects", href: "/projects" },
	{ label: "News", href: "/news" },
	{ label: "Contact", href: "/contact" },
];

export default function Navbar() {
	return (
		<header className="bg-white dark:bg-background text-right">
			<nav>
				{navItems.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className="block py-2 text-sm hover:underline"
					>
						{item.label}
					</Link>
				))}
			</nav>
		</header>
	);
}
