// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	metadataBase: new URL("https://korayuymaz.netlify.app"),
	title: "Koray Uymaz | Frontend Developer",
	description:
		"Portfolio of Koray Uymaz — crafting responsive, accessible, and performant user interfaces with React, Next.js, and modern web technologies.",
	icons: [
		{ url: "/favicon.png", rel: "icon", type: "image/png" },
		{ url: "/favicon.ico", rel: "shortcut icon" },
		{ url: "/apple-touch-icon.png", rel: "apple-touch-icon", sizes: "180x180" },
	],
	openGraph: {
		title: "Koray Uymaz | Frontend Developer",
		description:
			"Portfolio of Koray Uymaz — crafting responsive, accessible, and performant user interfaces.",
		url: "https://korayuymaz.netlify.app",
		siteName: "Koray Uymaz Portfolio",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 1200,
				alt: "Koray Uymaz | Frontend Developer",
			},
		],
		type: "website",
		locale: "en_US",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta name="robots" content="index, follow" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href="https://korayuymaz.netlify.app" />
				<meta name="description" content="Koray Uymaz | Frontend Developer" />
				<meta name="author" content="Koray Uymaz" />
				<meta
					name="keywords"
					content="Koray Uymaz, Frontend Developer, React, Next.js, Tailwind CSS, TypeScript, JavaScript, HTML, CSS"
				/>
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Person",
						name: "Koray Uymaz",
						jobTitle: "Frontend Developer",
						url: "https://korayuymaz.netlify.app",
						sameAs: [
							"https://github.com/korayuymaz",
							"https://linkedin.com/in/korayuymaz",
						],
					})}
				</script>
			</head>
			<body suppressHydrationWarning className={`font-sans antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem={false}
					disableTransitionOnChange
				>
					<div className="container flex flex-row flex-wrap mx-auto px-4 py-4 md:px-16 md:py-16 mb-20">
						<main className="w-full md:w-[90%]">{children}</main>
						<Navbar />
					</div>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
