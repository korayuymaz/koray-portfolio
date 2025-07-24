import Image from "next/image";
import Carousel from "../carousel";

const photos = [
	{
		id: 1,
		image: "/photos/1.jpg",
		alt: "Photo 1",
	},
	{
		id: 2,
		image: "/photos/2.jpg",
		alt: "Photo 2",
	},
	{
		id: 3,
		image: "/photos/3.jpg",
		alt: "Photo 3",
	},
	{
		id: 4,
		image: "/photos/4.jpg",
		alt: "Photo 4",
	},
	{
		id: 5,
		image: "/photos/5.jpg",
		alt: "Photo 5",
	},
	{
		id: 6,
		image: "/photos/6.jpg",
		alt: "Photo 6",
	},
	{
		id: 7,
		image: "/photos/7.jpg",
		alt: "Photo 7",
	},
	{
		id: 8,
		image: "/photos/8.jpg",
		alt: "Photo 8",
	},
];

const Photos = () => {
	const items = photos.map((photo) => (
		<Image
			key={photo.id}
			src={photo.image}
			alt={photo.alt}
			width={400}
			height={400}
			className="w-full shrink-0 h-[500px] object-center object-contain"
		/>
	));

	return (
		<div className="mb-10 w-[80%] mx-auto">
			<h2 className="text-2xl font-bold mb-4">Some Photos From My Lens</h2>
			<div className="w-full">
				<Carousel items={items} />
			</div>
		</div>
	);
};

export default Photos;
