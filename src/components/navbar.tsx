// components/navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

const navItems = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Projects", href: "/projects" },
	{ label: "News", href: "/news" },
	{ label: "Contact", href: "/contact" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="border-b sticky top-0 z-50 bg-white dark:bg-background">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
				{/* Logo */}
				<Link href="/" className="text-lg font-semibold">
					Koray Uymaz
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden md:flex space-x-4 items-center">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm hover:underline"
						>
							{item.label}
						</Link>
					))}
					<ModeToggle />
				</nav>

				{/* Mobile Menu Button */}
				<Button
					variant="ghost"
					size="icon"
					className="md:hidden"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
				</Button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<nav className="md:hidden px-4 pb-4 text-right">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							onClick={() => setIsOpen(false)}
							className="block py-2 text-sm hover:underline"
						>
							{item.label}
						</Link>
					))}
				</nav>
			)}
		</header>
	);
}
