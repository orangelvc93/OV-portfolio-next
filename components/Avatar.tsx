"use client";
import TransitionComponents from "@/components/TransitionComponents";
import Image from "next/image";

const Avatar = () => {
	return (
		<TransitionComponents
			position="bottom"
			className="bottom-0 right-0 hidden  md:inline-block md:absolute"
		>
			<Image
				src="/avatar-1.png"
				width={350}
				height={350}
				className="w-full h-full "
				alt="Particles "
			/>
		</TransitionComponents>
	);
};

export default Avatar;
