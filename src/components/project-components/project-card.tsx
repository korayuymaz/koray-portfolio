"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getRandomGradient } from "@/lib/random-color";
import Image from "next/image";

type Props = {
	title: string;
	description: string;
	screenshot: string;
	link: string;
	techStack: string[];
	github: string;
};

export default function ProjectCard({
	title,
	description,
	screenshot,
	link,
	techStack,
	github,
}: Props) {
	const [open, setOpen] = useState(false);

	return (
		<div className="relative cursor-pointer bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 h-75 w-96">
			<h3 className="text-lg font-semibold mb-2 text-black flex items-center gap-2">
				<span>{title}</span>
				<a href={github} target="_blank" rel="noopener noreferrer">
					<Image
						src="/icons/github-mark.svg"
						alt="github"
						width={20}
						height={20}
					/>
				</a>
			</h3>
			<p className="text-sm text-gray-600 mb-2 overflow-y-auto h-20">
				{description}
			</p>
			<p className="text-sm text-gray-600 mb-2 hover:text-black">
				<a href={link} target="_blank" rel="noopener noreferrer">
					View Project
				</a>
			</p>
			<div className="flex flex-wrap gap-2">
				{techStack.map((tech) => (
					<span
						key={tech}
						className="text-sm font-bold bg-clip-text text-transparent"
						style={{ backgroundImage: getRandomGradient() }}
					>
						{tech}
					</span>
				))}
			</div>
			<div className="absolute bottom-0 right-5 z-12">
				<button onClick={() => setOpen((prev) => !prev)}>
					<Image src="/icons/eye.svg" alt="eye" width={20} height={20} />
				</button>
			</div>
			{/* Animasyonlu ekran görüntüsü */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 10 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 10 }}
						transition={{ duration: 0.3 }}
						className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[90%] z-10 rounded-xl"
					>
						<Image
							width={1000}
							height={1000}
							src={screenshot}
							alt="Screenshot"
							className="w-full h-full object-cover rounded-xl"
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
