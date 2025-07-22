import { whatsNext } from "@/data/whats-next";

export const WhatsNext = () => {
	return (
		<div className="mb-10 w-[80%] mx-auto">
			<h2 className="text-2xl font-bold mb-4">What&apos;s Next</h2>
			<ul className="list-disc pl-3 flex flex-col gap-2 text-sm w-full">
				{whatsNext.map((item) => (
					<li key={item.description}>{item.description}</li>
				))}
			</ul>
		</div>
	);
};
