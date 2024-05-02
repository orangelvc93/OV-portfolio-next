import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "🧑‍💻Portafolio Orangel",
	description: "Portafolio creado por Orangel",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={urbanist.className}>
				<NavBar />
				<Header />
				{children}
			</body>
		</html>
	);
}
