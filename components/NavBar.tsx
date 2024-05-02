"use client";
import { itemsNavbar } from "@/data";
import { usePathname } from "next/navigation";
import TransitionComponents from "./TransitionComponents";
import Link from "next/link";

const NavBar = () => {
	const router = usePathname();
	return (
		<TransitionComponents
			position="right"
			className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
		>
			<nav>
				<div className="flex items-center justify-center gap-2 bg-white/25 backdrop-blur-md px-4 py-1 rounded-full">
					{itemsNavbar.map((item) => (
						<div
							key={item.id}
							className={`px-3 py-2 transition duration-150 cursor-pointer hover:bg-secondary rounded-full ${
								router === item.link && "bg-secondary"
							}`}
						>
							<Link href={item.link}>{item.icon}</Link>
						</div>
					))}
				</div>
			</nav>
		</TransitionComponents>
	);
};

export default NavBar;
