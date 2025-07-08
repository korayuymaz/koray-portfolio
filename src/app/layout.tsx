// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
	subsets: ["latin"], // font-family: var(--font-geist-sans);
	variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-geist-mono",
});

export const metadata: Metadata = {
	title: "Koray Uymaz | Frontend Developer",
	description: "Personal portfolio of Koray Uymaz, front-end developer.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				suppressHydrationWarning
				className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
			>
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
				</ThemeProvider>
			</body>
		</html>
	);
}
