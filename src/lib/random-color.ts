export function getRandomColor() {
	const hue = Math.floor(Math.random() * 360); // tüm renk skalası
	const saturation = 85; // sabit, doygun renkler
	const lightness = 40 + Math.random() * 10; // %40-50 arası (açık değil, canlı)
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

export function getRandomGradient() {
	const fixedGradient = `linear-gradient(126deg,rgba(184, 13, 127, 1) 28%, rgba(253, 29, 29, 1) 57%, rgba(0, 245, 37, 1) 100%)`;
	// const hue1 = Math.floor(Math.random() * 360);
	// const hue2 = (hue1 + 60 + Math.random() * 60) % 360;
	return fixedGradient;
}
