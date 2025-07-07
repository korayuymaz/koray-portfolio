"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Toggle } from "@radix-ui/react-toggle";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<Toggle
			className="relative"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			{theme === "dark" ? (
				<Sun className="w-8 h-8 border-1 border-gray-300 p-1 rounded-sm text-gray-300 hover:text-gray-500 transition-all duration-300" />
			) : (
				<Moon className="w-8 h-8 border-1 border-gray-300 p-1 rounded-sm text-gray-500 hover:text-gray-800 transition-all duration-300" />
			)}
		</Toggle>
	);
}
