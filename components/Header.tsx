import { socialNetworks } from "@/data";
import Link from "next/link";
import TransitionComponents from "./TransitionComponents";

const Header = () => {
	return (
		<TransitionComponents
			position="bottom"
			className="absolute z-40 inline-block w-full top-6"
		>
			<header>
				<div className="container justify-between max-w-6xl mx-auto md:flex px-7">
					<Link href="/">
						<h1 className="my-3 text-4xl font-bold text-center md:text-left">
							Oran
							<span className="text-secondary">Dev</span>
						</h1>
					</Link>
					<div className="flex items-center justify-center gap-7">
						{socialNetworks.map((item) => (
							<Link
								key={item.id}
								href={item.src}
								target="_blank"
								className="transition-all duration-300 hover:text-secondary"
							>
								{item.logo}
							</Link>
						))}
					</div>
				</div>
			</header>
		</TransitionComponents>
	);
};

export default Header;
