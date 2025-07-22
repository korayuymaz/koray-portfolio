// components/Hero.tsx

import Link from "next/link";

export default function Hero() {
	return (
		<section className="w-full mb-20">
			<h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I’m Koray.</h1>
			<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
				Hi, I’m Koray — a frontend developer on a journey to master my craft,
				constantly learning and building.
			</p>
			<div className="flex gap-4">
				<Link
					href="/projects"
					className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
				>
					View Projects
				</Link>
				<a
					href="/Koray_Uymaz_CV.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="border border-gray-800 dark:border-gray-200 px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
				>
					Download CV
				</a>
			</div>
		</section>
	);
}
