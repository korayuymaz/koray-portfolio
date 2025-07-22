import { soFar } from "@/data/so-far";

export const SoFar = () => {
	return (
		<div className="mb-10">
			<h2 className="text-2xl font-bold mb-4">So Far</h2>
			<ul className="list-disc pl-3 flex flex-col gap-2 text-sm w-full">
				{soFar.map((item) => (
					<li className="flex justify-between" key={item.id}>
						<span>{item.description}</span>
						<span>{item.year}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
