import Hero from "@/components/home-components/hero";
import { SoFar } from "@/components/home-components/so-far";
import { WhatsNext } from "@/components/home-components/whats-next";

export default function Home() {
	return (
		<div>
			<Hero />
			<SoFar />
			<WhatsNext />
		</div>
	);
}
