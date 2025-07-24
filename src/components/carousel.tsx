"use client";

import { useEffect, useRef, useState } from "react";

export default function Carousel({ items }: { items: React.ReactNode[] }) {
	const [current, setCurrent] = useState(0);
	const interval = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		interval.current = setInterval(() => {
			setCurrent((prev) => (prev + 1) % items.length);
		}, 3000);
		return () => clearInterval(interval.current as NodeJS.Timeout);
	}, [items.length]);

	const nextSlide = () => {
		setCurrent((current + 1) % items.length);
		clearInterval(interval.current as NodeJS.Timeout);
	};
	const prevSlide = () => {
		setCurrent((current - 1 + items.length) % items.length);
		clearInterval(interval.current as NodeJS.Timeout);
	};

	return (
		<div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-lg h-[500px]">
			<div
				className="flex transition-transform duration-700 ease-in-out"
				style={{ transform: `translateX(-${current * 100}%)` }}
			>
				{items.map((item, index) => (
					<div key={index} className="w-full shrink-0">
						{item}
					</div>
				))}
			</div>

			{/* Prev & Next buttons */}
			<button
				onClick={prevSlide}
				className="group absolute left-0 top-0 h-full w-1/5 flex items-center justify-start hover:bg-black/10 transition duration-300 z-10"
			>
				<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:blur-0  ml-4"></span>
			</button>

			<button
				onClick={nextSlide}
				className="group absolute right-0 top-0 h-full w-1/5 flex items-center justify-end hover:bg-black/10 transition duration-300 z-10"
			>
				<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:blur-0 mr-4"></span>
			</button>

			{/* Indicators */}
			<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
				{items.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrent(index)}
						className={`h-2 w-2 rounded-full ${
							current === index ? "bg-white" : "bg-white/50"
						}`}
					/>
				))}
			</div>
		</div>
	);
}
