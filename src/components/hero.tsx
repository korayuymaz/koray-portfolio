// components/Hero.tsx

import Link from "next/link";

export default function Hero() {
	return (
		<section className="w-full h-[80vh] ">
			<h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I’m Koray.</h1>
			<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
				A Frontend Developer crafting modern, scalable UIs with React, Next.js,
				and a touch of AI.
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
