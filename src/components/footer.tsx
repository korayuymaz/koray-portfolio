const Footer = () => {
	return (
		<footer className="w-full border-t border-zinc-700 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400 px-4 md:px-10 bg-dark-bg">
			<p className="mb-2 md:mb-0">© 2025 Koray Uymaz</p>
			<div className="flex gap-4">
				<a href="mailto:korayuymaz@gmail.com" className="hover:text-white">
					E-mail
				</a>
				<a
					href="https://github.com/korayuymaz"
					target="_blank"
					className="hover:text-white"
				>
					GitHub
				</a>
				<a
					href="https://linkedin.com/in/korayuymaz"
					target="_blank"
					className="hover:text-white"
				>
					LinkedIn
				</a>
				<a
					href="https://www.goodreads.com/user/show/152329741-koray"
					target="_blank"
					className="hover:text-white"
				>
					Goodreads
				</a>
				<a
					href="https://www.instagram.com/koray.uymz?igsh=MWFjNW42bmFzNHR1dA%3D%3D&utm_source=qr"
					target="_blank"
					className="hover:text-white"
				>
					Instagram
				</a>
			</div>
		</footer>
	);
};

export default Footer;
