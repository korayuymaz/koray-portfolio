import Image from "next/image";

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
];

const Photos = () => {
	return (
		<div className="mb-10 w-[80%] mx-auto">
			<h2 className="text-2xl font-bold mb-4">Some Photos From My Lens</h2>
			<div className="grid grid-cols-2 gap-4 h-[500px] overflow-y-auto w-max-content">
				{photos.map((photo) => (
					<Image
						src={photo.image}
						alt={photo.alt}
						width={400}
						height={400}
						className="w-full h-full object-contain rounded-lg"
					/>
				))}
			</div>
		</div>
	);
};

export default Photos;
