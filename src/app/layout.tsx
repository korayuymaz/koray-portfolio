// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	title: "Koray Uymaz | Frontend Developer",
	description: "Personal portfolio of Koray Uymaz, front-end developer.",
	icons: [
		{
			url: "/favicon.png",
			rel: "icon",
			type: "image/png",
		},
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body suppressHydrationWarning className={`font-sans antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="container flex flex-row flex-wrap mx-auto px-4 py-4 md:px-16 md:py-16">
						<main className="w-full md:w-[90%]">{children}</main>
						<Navbar />
					</div>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
